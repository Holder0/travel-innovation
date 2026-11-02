-- =============================================================================
-- CALIBRACIÓN DE CAPACIDADES MÁXIMAS Y LÍMITES POR FECHA DE SALIDA (2026 - 2027)
-- Normativa de capacidad de carga ecológica, logística aérea, fluvial y terrestre
-- =============================================================================

-- 1. Galápagos (Cruceros, Island Hopping y Vuelos): Capacidad 60 personas (subgrupos 16:1 guía DPNG)
UPDATE paquete_fechas pf
SET 
  cupos_totales = 60,
  cupos_disponibles = LEAST(60, GREATEST(4, ROUND(pf.cupos_disponibles::numeric / pf.cupos_totales::numeric * 60)))
FROM paquetes p
JOIN destinos d ON p.destino_id = d.id
JOIN ciudades ci ON d.ciudad_id = ci.id
JOIN provincias pr ON ci.provincia_id = pr.id
WHERE pf.paquete_id = p.id
  AND (pr.nombre ILIKE '%Galápagos%' OR p.nombre ILIKE '%Galápagos%');

-- 2. Familiar y Todo Incluido / Balnearios Familiares: Capacidad 45 personas (autobús turístico completo)
UPDATE paquete_fechas pf
SET 
  cupos_totales = 45,
  cupos_disponibles = LEAST(45, GREATEST(4, ROUND(pf.cupos_disponibles::numeric / pf.cupos_totales::numeric * 45)))
FROM paquetes p
JOIN categorias c ON p.categoria_id = c.id
WHERE pf.paquete_id = p.id
  AND c.nombre = 'Familiar y Todo Incluido';

-- 3. Sol, Playa y Relax: Capacidad 40 personas (transporte climatizado de playa)
UPDATE paquete_fechas pf
SET 
  cupos_totales = 40,
  cupos_disponibles = LEAST(40, GREATEST(4, ROUND(pf.cupos_disponibles::numeric / pf.cupos_totales::numeric * 40)))
FROM paquetes p
JOIN categorias c ON p.categoria_id = c.id
WHERE pf.paquete_id = p.id
  AND c.nombre = 'Sol, Playa y Relax'
  AND p.nombre NOT ILIKE '%Galápagos%';

-- 4. Cultural, Patrimonial e Histórico: Capacidad 35 personas (aforo de museos y conventos)
UPDATE paquete_fechas pf
SET 
  cupos_totales = 35,
  cupos_disponibles = LEAST(35, GREATEST(4, ROUND(pf.cupos_disponibles::numeric / pf.cupos_totales::numeric * 35)))
FROM paquetes p
JOIN categorias c ON p.categoria_id = c.id
WHERE pf.paquete_id = p.id
  AND c.nombre = 'Cultural, Patrimonial e Histórico'
  AND p.nombre NOT ILIKE '%Galápagos%';

-- 5. Avistamiento de Ballenas Jorobadas: Capacidad 25 personas (lancha rápida autorizada Capitanía/MAATE)
UPDATE paquete_fechas pf
SET 
  cupos_totales = 25,
  cupos_disponibles = LEAST(25, GREATEST(3, ROUND(pf.cupos_disponibles::numeric / pf.cupos_totales::numeric * 25)))
FROM paquetes p
WHERE pf.paquete_id = p.id
  AND p.nombre ILIKE '%ballena%';

-- 6. Gastronomía y Rutas del Cacao: Capacidad 25 personas (salón de catas y haciendas)
UPDATE paquete_fechas pf
SET 
  cupos_totales = 25,
  cupos_disponibles = LEAST(25, GREATEST(4, ROUND(pf.cupos_disponibles::numeric / pf.cupos_totales::numeric * 25)))
FROM paquetes p
JOIN categorias c ON p.categoria_id = c.id
WHERE pf.paquete_id = p.id
  AND c.nombre = 'Gastronomía y Rutas del Cacao'
  AND p.nombre NOT ILIKE '%Galápagos%';

-- 7. Aventura y Deportes Extremos: Capacidad 20 personas (balsas de rafting 6-8 pax, canyoning)
UPDATE paquete_fechas pf
SET 
  cupos_totales = 20,
  cupos_disponibles = LEAST(20, GREATEST(3, ROUND(pf.cupos_disponibles::numeric / pf.cupos_totales::numeric * 20)))
FROM paquetes p
JOIN categorias c ON p.categoria_id = c.id
WHERE pf.paquete_id = p.id
  AND c.nombre = 'Aventura y Deportes Extremos';

-- 8. Ecoturismo y Selva Amazónica: Capacidad 18 personas (canoas fluviales y eco-lodges)
UPDATE paquete_fechas pf
SET 
  cupos_totales = 18,
  cupos_disponibles = LEAST(18, GREATEST(3, ROUND(pf.cupos_disponibles::numeric / pf.cupos_totales::numeric * 18)))
FROM paquetes p
JOIN categorias c ON p.categoria_id = c.id
WHERE pf.paquete_id = p.id
  AND c.nombre = 'Ecoturismo y Naturaleza'
  AND p.nombre NOT ILIKE '%Galápagos%'
  AND p.nombre NOT ILIKE '%ballena%';

-- 9. Bienestar, Termas y Spa: Capacidad 18 personas (aforo relajante en piscinas termales)
UPDATE paquete_fechas pf
SET 
  cupos_totales = 18,
  cupos_disponibles = LEAST(18, GREATEST(3, ROUND(pf.cupos_disponibles::numeric / pf.cupos_totales::numeric * 18)))
FROM paquetes p
JOIN categorias c ON p.categoria_id = c.id
WHERE pf.paquete_id = p.id
  AND c.nombre = 'Bienestar, Termas y Spa'
  AND p.nombre NOT ILIKE '%Galápagos%';

-- 10. Tradiciones y Turismo Comunitario: Capacidad 16 personas (respeto a dinámica comunal)
UPDATE paquete_fechas pf
SET 
  cupos_totales = 16,
  cupos_disponibles = LEAST(16, GREATEST(3, ROUND(pf.cupos_disponibles::numeric / pf.cupos_totales::numeric * 16)))
FROM paquetes p
JOIN categorias c ON p.categoria_id = c.id
WHERE pf.paquete_id = p.id
  AND c.nombre = 'Tradiciones y Turismo Comunitario'
  AND p.nombre NOT ILIKE '%Galápagos%';

-- 11. Trekking y Alta Montaña: Capacidad 14 personas (refugios andinos, 4x4 y ratio ASEGUIM)
UPDATE paquete_fechas pf
SET 
  cupos_totales = 14,
  cupos_disponibles = LEAST(14, GREATEST(2, ROUND(pf.cupos_disponibles::numeric / pf.cupos_totales::numeric * 14)))
FROM paquetes p
JOIN categorias c ON p.categoria_id = c.id
WHERE pf.paquete_id = p.id
  AND (c.nombre = 'Trekking y Alta Montaña' OR p.nombre ILIKE '%volcán%' OR p.nombre ILIKE '%nevado%');

-- 12. Romántico y Luna de Miel: Capacidad 8 personas (máximo 4 parejas en domos / glamping)
UPDATE paquete_fechas pf
SET 
  cupos_totales = 8,
  cupos_disponibles = LEAST(8, GREATEST(2, ROUND(pf.cupos_disponibles::numeric / pf.cupos_totales::numeric * 8)))
FROM paquetes p
JOIN categorias c ON p.categoria_id = c.id
WHERE pf.paquete_id = p.id
  AND c.nombre = 'Romántico y Luna de Miel';

