-- =============================================================================
-- PROYECTO ACADÉMICO: TRAVEL INNOVATION
-- SCRIPT DE ALTERACIÓN / MIGRACIÓN: JERARQUÍA GEOGRÁFICA 3FN
-- REGIONES (4) -> PROVINCIAS (24) -> CIUDADES (220) -> DESTINOS (10)
-- =============================================================================

-- 1. CREACIÓN DE TABLAS GEOGRÁFICAS
CREATE TABLE IF NOT EXISTS regiones (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE CHECK (nombre IN ('Costa', 'Sierra', 'Amazonía', 'Galápagos')),
    descripcion TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS provincias (
    id SERIAL PRIMARY KEY,
    region_id INT NOT NULL REFERENCES regiones(id) ON DELETE RESTRICT,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    capital VARCHAR(100),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS ciudades (
    id SERIAL PRIMARY KEY,
    provincia_id INT NOT NULL REFERENCES provincias(id) ON DELETE RESTRICT,
    nombre VARCHAR(100) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_ciudades_provincia_nombre UNIQUE (provincia_id, nombre)
);

-- 2. POBLAR REGIONES NATURALES DEL ECUADOR
INSERT INTO regiones (id, nombre, descripcion) VALUES
(1, 'Costa', 'Región litoral del Océano Pacífico, playas, manglares y clima cálido tropical.'),
(2, 'Sierra', 'Región interandina, cordillera de los Andes, volcanes, nevados y valles templados.'),
(3, 'Amazonía', 'Región oriental, selva tropical de alta biodiversidad, ríos navegables y comunidades ancestrales.'),
(4, 'Galápagos', 'Archipiélago volcánico patrimonio natural de la humanidad, fauna y flora única en el mundo.')
ON CONFLICT (id) DO UPDATE SET nombre = EXCLUDED.nombre, descripcion = EXCLUDED.descripcion;
SELECT setval('regiones_id_seq', 4);

-- 3. POBLAR LAS 24 PROVINCIAS DEL ECUADOR
INSERT INTO provincias (id, region_id, nombre) VALUES
(1, 2, 'Azuay'),
(2, 2, 'Bolívar'),
(3, 2, 'Cañar'),
(4, 2, 'Carchi'),
(5, 2, 'Chimborazo'),
(6, 2, 'Cotopaxi'),
(7, 1, 'El Oro'),
(8, 1, 'Esmeraldas'),
(9, 4, 'Galápagos'),
(10, 1, 'Guayas'),
(11, 2, 'Imbabura'),
(12, 2, 'Loja'),
(13, 1, 'Los Ríos'),
(14, 1, 'Manabí'),
(15, 3, 'Morona Santiago'),
(16, 3, 'Napo'),
(17, 3, 'Orellana'),
(18, 3, 'Pastaza'),
(19, 2, 'Pichincha'),
(20, 1, 'Santa Elena'),
(21, 1, 'Santo Domingo de los Tsáchilas'),
(22, 3, 'Sucumbíos'),
(23, 2, 'Tungurahua'),
(24, 3, 'Zamora Chinchipe')
ON CONFLICT (id) DO UPDATE SET region_id = EXCLUDED.region_id, nombre = EXCLUDED.nombre;
SELECT setval('provincias_id_seq', 24);

-- 4. POBLAR LOS CANTONES Y CIUDADES DE CADA PROVINCIA
INSERT INTO ciudades (provincia_id, nombre) VALUES
(1, 'Cuenca'),
(1, 'Gualaceo'),
(1, 'Paute'),
(1, 'Chordeleg'),
(1, 'Santa Isabel'),
(1, 'Girón'),
(1, 'Sígsig'),
(1, 'Nabón'),
(1, 'Pucará'),
(1, 'San Fernando'),
(1, 'Sevilla de Oro'),
(1, 'Guachapala'),
(1, 'El Pan'),
(1, 'Oña'),
(1, 'Camilo Ponce Enríquez'),
(2, 'Guaranda'),
(2, 'San Miguel'),
(2, 'Chimbo'),
(2, 'Caluma'),
(2, 'Echeandía'),
(2, 'Las Naves'),
(2, 'Chillanes'),
(3, 'Azogues'),
(3, 'Cañar'),
(3, 'La Troncal'),
(3, 'Biblián'),
(3, 'Déleg'),
(3, 'El Tambo'),
(3, 'Suscal'),
(4, 'Tulcán'),
(4, 'San Gabriel (Montúfar)'),
(4, 'Mira'),
(4, 'Bolívar'),
(4, 'El Ángel (Espejo)'),
(4, 'Huaca'),
(5, 'Riobamba'),
(5, 'Alausí'),
(5, 'Guano'),
(5, 'Colta'),
(5, 'Chambo'),
(5, 'Guamote'),
(5, 'Pallatanga'),
(5, 'Penipe'),
(5, 'Cumandá'),
(5, 'Chunchi'),
(6, 'Latacunga'),
(6, 'Salcedo'),
(6, 'Pujilí'),
(6, 'Saquisilí'),
(6, 'La Maná'),
(6, 'Pangua (El Corazón)'),
(6, 'Sigchos'),
(7, 'Machala'),
(7, 'Pasaje'),
(7, 'Santa Rosa'),
(7, 'Huaquillas'),
(7, 'Arenillas'),
(7, 'Zaruma'),
(7, 'Piñas'),
(7, 'Portovelo'),
(7, 'El Guabo'),
(7, 'Atahualpa (Paccha)'),
(7, 'Balsas'),
(7, 'Chilla'),
(7, 'Las Lajas'),
(7, 'Marcabelí'),
(8, 'Esmeraldas'),
(8, 'Atacames'),
(8, 'Quinindé'),
(8, 'San Lorenzo'),
(8, 'Muisne'),
(8, 'Rioverde'),
(8, 'Eloy Alfaro (Valdez)'),
(9, 'Puerto Ayora (Santa Cruz)'),
(9, 'Puerto Baquerizo Moreno (San Cristóbal)'),
(9, 'Puerto Villamil (Isabela)'),
(10, 'Guayaquil'),
(10, 'Samborondón'),
(10, 'Daule'),
(10, 'Durán'),
(10, 'Milagro'),
(10, 'Playas (General Villamil)'),
(10, 'Salitre'),
(10, 'Naranjal'),
(10, 'Balzar'),
(10, 'El Empalme'),
(10, 'Pedro Carbo'),
(10, 'Yaguachi'),
(10, 'Santa Lucía'),
(10, 'Colimes'),
(10, 'Palestina'),
(10, 'Bucay (Gral. Antonio Elizalde)'),
(10, 'Naranjito'),
(10, 'Marcelino Maridueña'),
(10, 'Lomas de Sargentillo'),
(10, 'Nobol'),
(10, 'Simón Bolívar'),
(10, 'Isidro Ayora'),
(10, 'Balao'),
(10, 'Jujan (Alfredo Baquerizo Moreno)'),
(11, 'Ibarra'),
(11, 'Otavalo'),
(11, 'Cotacachi'),
(11, 'Antonio Ante (Atuntaqui)'),
(11, 'Pimampiro'),
(11, 'Urcuquí'),
(12, 'Loja'),
(12, 'Catamayo'),
(12, 'Cariamanga (Calvas)'),
(12, 'Macará'),
(12, 'Saraguro'),
(12, 'Celica'),
(12, 'Paltas (Catacocha)'),
(12, 'Puyango (Alamor)'),
(12, 'Gonzanamá'),
(12, 'Espíndola (Amaluza)'),
(12, 'Chaguarpamba'),
(12, 'Pindal'),
(12, 'Zapotillo'),
(12, 'Quilanga'),
(12, 'Sozoranga'),
(12, 'Olmedo'),
(13, 'Babahoyo'),
(13, 'Quevedo'),
(13, 'Buena Fe'),
(13, 'Ventanas'),
(13, 'Vinces'),
(13, 'Valencia'),
(13, 'Montalvo'),
(13, 'Mocache'),
(13, 'Puebloviejo'),
(13, 'Palenque'),
(13, 'Urdaneta (Catarama)'),
(13, 'Baba'),
(13, 'Quinsaloma'),
(14, 'Portoviejo'),
(14, 'Manta'),
(14, 'Chone'),
(14, 'Montecristi'),
(14, 'Jipijapa'),
(14, 'Bahía de Caráquez (Sucre)'),
(14, 'El Carmen'),
(14, 'Pedernales'),
(14, 'Tosagua'),
(14, 'Rocafuerte'),
(14, 'Santa Ana'),
(14, 'Calceta (Bolívar)'),
(14, 'Jama'),
(14, 'San Vicente'),
(14, 'Jaramijó'),
(14, 'Puerto López'),
(14, 'Paján'),
(14, 'Flavio Alfaro'),
(14, 'Pichincha'),
(14, 'Junín'),
(14, '24 de Mayo'),
(14, 'Olmedo'),
(15, 'Macas (Morona)'),
(15, 'Sucúa'),
(15, 'Gualaquiza'),
(15, 'Limón Indanza'),
(15, 'Palora'),
(15, 'Santiago de Méndez'),
(15, 'Tiwintza'),
(15, 'Taisha'),
(15, 'Logroño'),
(15, 'San Juan Bosco'),
(15, 'Huamboya'),
(15, 'Pablo Sexto'),
(16, 'Tena'),
(16, 'Archidona'),
(16, 'El Chaco'),
(16, 'Baeza (Quijos)'),
(16, 'Carlos Julio Arosemena Tola'),
(17, 'Puerto Francisco de Orellana (El Coca)'),
(17, 'La Joya de los Sachas'),
(17, 'Loreto'),
(17, 'Nuevo Rocafuerte (Aguarico)'),
(18, 'Puyo (Pastaza)'),
(18, 'Mera'),
(18, 'Santa Clara'),
(18, 'Arajuno'),
(19, 'Quito'),
(19, 'Rumiñahui (Sangolquí)'),
(19, 'Cayambe'),
(19, 'Mejía (Machachi)'),
(19, 'Pedro Moncayo (Tabacundo)'),
(19, 'Puerto Quito'),
(19, 'Pedro Vicente Maldonado'),
(19, 'San Miguel de los Bancos'),
(20, 'Santa Elena'),
(20, 'Salinas'),
(20, 'La Libertad'),
(21, 'Santo Domingo'),
(21, 'La Concordia'),
(22, 'Nueva Loja (Lago Agrio)'),
(22, 'Shushufindi'),
(22, 'Cáscales'),
(22, 'Gonzalo Pizarro (Lumbaquí)'),
(22, 'Putumayo'),
(22, 'Cuyabeno'),
(22, 'Sucumbíos'),
(23, 'Ambato'),
(23, 'Baños de Agua Santa'),
(23, 'Pelileo'),
(23, 'Píllaro'),
(23, 'Cevallos'),
(23, 'Tisaleo'),
(23, 'Quero'),
(23, 'Mocha'),
(23, 'Patate'),
(24, 'Zamora'),
(24, 'Yantzaza'),
(24, 'El Pangui'),
(24, 'Centinela del Cóndor (Zumbi)'),
(24, 'Nangaritza (Guayzimi)'),
(24, 'Palanda'),
(24, 'Chinchipe (Zumba)'),
(24, 'Paquisha'),
(24, 'Yacuambi')
ON CONFLICT (provincia_id, nombre) DO NOTHING;

-- 5. VINCULAR LA TABLA DESTINOS CON CIUDADES
ALTER TABLE destinos ADD COLUMN IF NOT EXISTS ciudad_id INT REFERENCES ciudades(id) ON DELETE RESTRICT;

-- 6. ASIGNAR LAS CIUDADES A LOS 10 DESTINOS EXISTENTES
UPDATE destinos SET ciudad_id = (SELECT id FROM ciudades WHERE nombre LIKE '%Santa Cruz%' LIMIT 1) WHERE id = 1;
UPDATE destinos SET ciudad_id = (SELECT id FROM ciudades WHERE nombre = 'Quito' LIMIT 1) WHERE id = 2;
UPDATE destinos SET ciudad_id = (SELECT id FROM ciudades WHERE nombre LIKE '%Baños%' LIMIT 1) WHERE id = 3;
UPDATE destinos SET ciudad_id = (SELECT id FROM ciudades WHERE nombre = 'Latacunga' LIMIT 1) WHERE id = 4;
UPDATE destinos SET ciudad_id = (SELECT id FROM ciudades WHERE nombre LIKE '%Coca%' LIMIT 1) WHERE id = 5;
UPDATE destinos SET ciudad_id = (SELECT id FROM ciudades WHERE nombre = 'Cuenca' LIMIT 1) WHERE id = 6;
UPDATE destinos SET ciudad_id = (SELECT id FROM ciudades WHERE nombre = 'Salinas' LIMIT 1) WHERE id = 7;
UPDATE destinos SET ciudad_id = (SELECT id FROM ciudades WHERE nombre = 'Manta' LIMIT 1) WHERE id = 8;
UPDATE destinos SET ciudad_id = (SELECT id FROM ciudades WHERE nombre = 'Tena' LIMIT 1) WHERE id = 9;
UPDATE destinos SET ciudad_id = (SELECT id FROM ciudades WHERE nombre = 'Otavalo' LIMIT 1) WHERE id = 10;

-- Asegurar integridad referencial (NOT NULL)
ALTER TABLE destinos ALTER COLUMN ciudad_id SET NOT NULL;

-- 7. NORMALIZAR DESTINOS (3FN): Retirar columnas redundantes (region y provincia se obtienen vía ciudad)
ALTER TABLE destinos DROP COLUMN IF EXISTS region;
ALTER TABLE destinos DROP COLUMN IF EXISTS provincia;

-- 8. ENLAZAR TAMBIÉN USUARIOS CON CIUDADES (OPCIONAL 3FN PARA PERFILES)
ALTER TABLE usuarios ADD COLUMN IF NOT EXISTS ciudad_id INT REFERENCES ciudades(id) ON DELETE SET NULL;

-- 9. ÍNDICES DE RENDIMIENTO
CREATE INDEX IF NOT EXISTS idx_provincias_region ON provincias(region_id);
CREATE INDEX IF NOT EXISTS idx_ciudades_provincia ON ciudades(provincia_id);
CREATE INDEX IF NOT EXISTS idx_destinos_ciudad ON destinos(ciudad_id);
CREATE INDEX IF NOT EXISTS idx_usuarios_ciudad ON usuarios(ciudad_id);

-- 10. POLÍTICAS DE ROW LEVEL SECURITY (RLS) PARA CATÁLOGO GEOGRÁFICO
ALTER TABLE regiones ENABLE ROW LEVEL SECURITY;
ALTER TABLE provincias ENABLE ROW LEVEL SECURITY;
ALTER TABLE ciudades ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Catalogo publico regiones" ON regiones;
CREATE POLICY "Catalogo publico regiones" ON regiones FOR SELECT USING (true);

DROP POLICY IF EXISTS "Catalogo publico provincias" ON provincias;
CREATE POLICY "Catalogo publico provincias" ON provincias FOR SELECT USING (true);

DROP POLICY IF EXISTS "Catalogo publico ciudades" ON ciudades;
CREATE POLICY "Catalogo publico ciudades" ON ciudades FOR SELECT USING (true);