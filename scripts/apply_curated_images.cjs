// @ts-check
const fs = require('fs');
const path = require('path');
const { getImagesForPackage } = require('./curate_package_images.cjs');

const packagesDataPath = path.join(__dirname, '../src/data/packagesData.ts');
const seedPackagesPath = path.join(__dirname, '../database/seed_packages.sql');
const updateSqlPath = path.join(__dirname, '../database/update_package_images.sql');

console.log('Loading packagesData.ts...');
let packagesContent = fs.readFileSync(packagesDataPath, 'utf8');

// Parse packages from packagesData.ts
// We will parse the array of objects using a safe approach
// Since packagesData.ts exports const packages: PackageItem[] = [ ... ];
const jsonStart = packagesContent.indexOf('[');
const jsonEnd = packagesContent.lastIndexOf(']');
if (jsonStart === -1 || jsonEnd === -1) {
  console.error('Could not locate packages array in packagesData.ts');
  process.exit(1);
}

// In packagesData.ts, year: CURRENT_YEAR is used. Let's inspect how it's written.
// Let's replace year: CURRENT_YEAR with "year": 2026 temporarily for JSON.parse
const rawArrayText = packagesContent.substring(jsonStart, jsonEnd + 1);
const sanitizedForParse = rawArrayText
  .replace(/year:\s*CURRENT_YEAR/g, '"year": 2026')
  .replace(/,\s*([\]}])/g, '$1');

let packagesList;
try {
  packagesList = JSON.parse(sanitizedForParse);
} catch (e) {
  console.warn('Direct JSON parse failed, using regex/eval parsing...', e.message);
  // Fallback: evaluate using Function in isolated sandbox
  const sandboxFn = new Function('CURRENT_YEAR', 'return ' + rawArrayText);
  packagesList = sandboxFn(2026);
}

console.log(`Successfully parsed ${packagesList.length} packages.`);

// Process each package and assign curated images
const sqlStatements = [
  '-- =============================================================================',
  '-- ACTUALIZACIÓN DE IMÁGENES REALES TEMÁTICAS PARA LOS 240 PAQUETES',
  '-- FORMATO: URLs con entrega nativa en WebP (&fm=webp&q=80)',
  '-- =============================================================================',
  'BEGIN;',
  ''
];

const imageMappingBySlug = new Map();
const imageMappingById = new Map();
const allAssignedImages = new Set();

packagesList.forEach((pkg, index) => {
  const images = getImagesForPackage(pkg);
  pkg.image = images.image;
  pkg.secondaryImages = images.secondaryImages;

  allAssignedImages.add(images.image);
  allAssignedImages.add(images.secondaryImages[0]);
  allAssignedImages.add(images.secondaryImages[1]);

  const slug = pkg.id; // slug matches id
  imageMappingBySlug.set(slug, images);
  imageMappingById.set(pkg.id, images);

  // Prepare SQL update
  const secArraySql = `ARRAY['${images.secondaryImages[0]}', '${images.secondaryImages[1]}']`;
  sqlStatements.push(
    `-- Paquete #${index + 1}: ${pkg.name} (${pkg.province})`,
    `UPDATE paquetes SET`,
    `  imagen_principal = '${images.image}',`,
    `  imagenes_secundarias = ${secArraySql}`,
    `WHERE slug = '${slug}' OR nombre = '${pkg.name.replace(/'/g, "''")}';`,
    ''
  );
});

sqlStatements.push('COMMIT;');

// 1. Write the updated database/update_package_images.sql
fs.writeFileSync(updateSqlPath, sqlStatements.join('\n'), 'utf8');
console.log(`Saved ${updateSqlPath}`);

// 2. Update src/data/packagesData.ts
// Format nicely while preserving `year: CURRENT_YEAR`
const stringified = JSON.stringify(packagesList, null, 2);
const restoredCode = stringified.replace(/"year":\s*2026/g, 'year: CURRENT_YEAR');

const newPackagesDataContent = `import type { PackageItem } from "../types"
import { CURRENT_YEAR } from "../utils/dateUtils"

export const packages: PackageItem[] = ${restoredCode}
`;

fs.writeFileSync(packagesDataPath, newPackagesDataContent, 'utf8');
console.log(`Saved ${packagesDataPath}`);

// 3. Update database/seed_packages.sql
if (fs.existsSync(seedPackagesPath)) {
  console.log('Updating seed_packages.sql with new image URLs...');
  let seedContent = fs.readFileSync(seedPackagesPath, 'utf8');
  
  // Replace in seed_packages.sql for each package
  let seedUpdateCount = 0;
  for (const [slug, images] of imageMappingBySlug.entries()) {
    // Look for slug in seed_packages.sql
    // Pattern: 'slug', duracion_dias, duracion_noches,\n  precio_base, 'OLD_IMG', ARRAY['OLD_SEC_1', 'OLD_SEC_2']
    const slugRegex = new RegExp(`('${slug}',\\s*\\d+,\\s*\\d+,\\s*[\\d.]+,\\s*)'[^']+',\\s*ARRAY\\['[^']+',\\s*'[^']+'\\]`, 'g');
    if (slugRegex.test(seedContent)) {
      seedContent = seedContent.replace(slugRegex, `$1'${images.image}', ARRAY['${images.secondaryImages[0]}', '${images.secondaryImages[1]}']`);
      seedUpdateCount++;
    }
  }

  fs.writeFileSync(seedPackagesPath, seedContent, 'utf8');
  console.log(`Updated ${seedUpdateCount} package image entries in ${seedPackagesPath}`);
}

console.log('--- RESUMEN DE ACTUALIZACIÓN ---');
console.log(`Total paquetes procesados: ${packagesList.length}`);
console.log(`Total imágenes WebP únicas asignadas: ${allAssignedImages.size}`);
console.log('Sample updated package #1:', packagesList[0].name);
console.log('  image:', packagesList[0].image);
console.log('  sec[0]:', packagesList[0].secondaryImages[0]);
console.log('  sec[1]:', packagesList[0].secondaryImages[1]);
console.log('Sample Galápagos package:', packagesList.find(p => p.province === 'Galápagos')?.name);
const galPkg = packagesList.find(p => p.province === 'Galápagos');
if (galPkg) {
  console.log('  image:', galPkg.image);
  console.log('  sec[0]:', galPkg.secondaryImages[0]);
  console.log('  sec[1]:', galPkg.secondaryImages[1]);
}
console.log('Done!');
