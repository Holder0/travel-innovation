-- =============================================================================
-- SEED DE 240 PAQUETES TURÍSTICOS REALES DE ECUADOR (10 POR PROVINCIA)
-- RELACIONAL 3FN: REGIONES -> PROVINCIAS -> CIUDADES -> DESTINOS -> PAQUETES -> ITINERARIOS
-- =============================================================================

-- 1. POBLAR DESTINOS PARA TODAS LAS CIUDADES DE ECUADOR QUE NO EXISTAN AÚN
INSERT INTO destinos (ciudad, ciudad_id, descripcion, clima_sugerido)
SELECT 
  c.nombre, 
  c.id, 
  'Destino turístico en ' || p.nombre || ', Ecuador.',
  CASE 
    WHEN r.nombre = 'Costa' THEN 'Cálido tropical 24°C - 30°C'
    WHEN r.nombre = 'Sierra' THEN 'Templado andino 12°C - 20°C'
    WHEN r.nombre = 'Amazonía' THEN 'Húmedo tropical 23°C - 31°C'
    ELSE 'Cálido insular 22°C - 28°C'
  END
FROM ciudades c
JOIN provincias p ON c.provincia_id = p.id
JOIN regiones r ON p.region_id = r.id
WHERE NOT EXISTS (SELECT 1 FROM destinos d WHERE d.ciudad_id = c.id);

-- Paquete #1: Canyoning y Rappel en Chorro de Girón (Azuay)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000001',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Azuay%' AND c.nombre ILIKE '%Girón%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Azuay%' LIMIT 1),
    1
  ),
  1, 'Canyoning y Rappel en Chorro de Girón', 'azuay-canyoning-y-rappel-en-chorro-de-giron', 2, 1,
  135.00, 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000001', 1, 'Encuentro y Arribo a Girón · Bienvenida a Azuay', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Girón.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000001', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Azuay. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #2: Biodiversidad Andina en Parque Nacional Cajas (Azuay)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000002',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Azuay%' AND c.nombre ILIKE '%Cuenca%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Azuay%' LIMIT 1),
    1
  ),
  2, 'Biodiversidad Andina en Parque Nacional Cajas', 'azuay-biodiversidad-andina-en-parque-nacional-cajas', 2, 1,
  140.00, 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000002', 1, 'Encuentro y Arribo a Cuenca · Bienvenida a Azuay', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Cuenca.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000002', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Azuay. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #3: Descanso y Paseo en Bote en Laguna de Busa (Azuay)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000003',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Azuay%' AND c.nombre ILIKE '%San Fernando%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Azuay%' LIMIT 1),
    1
  ),
  3, 'Descanso y Paseo en Bote en Laguna de Busa', 'azuay-descanso-y-paseo-en-bote-en-laguna-de-busa', 2, 1,
  125.00, 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000003', 1, 'Encuentro y Arribo a San Fernando · Bienvenida a Azuay', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de San Fernando.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000003', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Azuay. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #4: Cuenca Colonial, Museos y Catedral de la Inmaculada (Azuay)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000004',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Azuay%' AND c.nombre ILIKE '%Cuenca%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Azuay%' LIMIT 1),
    1
  ),
  4, 'Cuenca Colonial, Museos y Catedral de la Inmaculada', 'azuay-cuenca-colonial-museos-y-catedral-de-la-inmaculada', 3, 2,
  195.00, 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000004', 1, 'Encuentro y Arribo a Cuenca · Bienvenida a Azuay', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Cuenca.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000004', 2, 'Día 2: Experiencia Principal de Cultural en Cuenca', 'Jornada completa de inmersión en Cuenca Colonial, Museos y Catedral de la Inmaculada. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000004', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Azuay. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #5: Escapada Romántica en Mirador de Turi y Valle de Yunguilla (Azuay)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000005',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Azuay%' AND c.nombre ILIKE '%Santa Isabel%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Azuay%' LIMIT 1),
    1
  ),
  5, 'Escapada Romántica en Mirador de Turi y Valle de Yunguilla', 'azuay-escapada-romantica-en-mirador-de-turi-y-valle-de-yunguilla', 3, 2,
  240.00, 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000005', 1, 'Encuentro y Arribo a Santa Isabel · Bienvenida a Azuay', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Santa Isabel.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000005', 2, 'Día 2: Experiencia Principal de Romántico en Santa Isabel', 'Jornada completa de inmersión en Escapada Romántica en Mirador de Turi y Valle de Yunguilla. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000005', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Azuay. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #6: Ruta de los Ríos, Zoológico Yurak Allpa y Paute (Azuay)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000006',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Azuay%' AND c.nombre ILIKE '%Paute%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Azuay%' LIMIT 1),
    1
  ),
  6, 'Ruta de los Ríos, Zoológico Yurak Allpa y Paute', 'azuay-ruta-de-los-rios-zoologico-yurak-allpa-y-paute', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000006', 1, 'Encuentro y Arribo a Paute · Bienvenida a Azuay', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Paute.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000006', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Azuay. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #7: Ruta del Mote Pillo, Chancho Hornado y Cuy Asado Cuencano (Azuay)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000007',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Azuay%' AND c.nombre ILIKE '%Gualaceo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Azuay%' LIMIT 1),
    1
  ),
  7, 'Ruta del Mote Pillo, Chancho Hornado y Cuy Asado Cuencano', 'azuay-ruta-del-mote-pillo-chancho-hornado-y-cuy-asado-cuencano', 2, 1,
  115.00, 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000007', 1, 'Encuentro y Arribo a Gualaceo · Bienvenida a Azuay', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Gualaceo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000007', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Azuay. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #8: Trekking de Altura por Lagunas Toreadora y Llaviucu (Azuay)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000008',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Azuay%' AND c.nombre ILIKE '%Cuenca%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Azuay%' LIMIT 1),
    1
  ),
  8, 'Trekking de Altura por Lagunas Toreadora y Llaviucu', 'azuay-trekking-de-altura-por-lagunas-toreadora-y-llaviucu', 3, 2,
  170.00, 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000008', 1, 'Encuentro y Arribo a Cuenca · Bienvenida a Azuay', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Cuenca.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000008', 2, 'Día 2: Experiencia Principal de Trekking en Cuenca', 'Jornada completa de inmersión en Trekking de Altura por Lagunas Toreadora y Llaviucu. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000008', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Azuay. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #9: Circuito Termal y Baños de Lodo en Baños de Cuenca (Azuay)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000009',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Azuay%' AND c.nombre ILIKE '%Cuenca%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Azuay%' LIMIT 1),
    1
  ),
  9, 'Circuito Termal y Baños de Lodo en Baños de Cuenca', 'azuay-circuito-termal-y-banos-de-lodo-en-banos-de-cuenca', 2, 1,
  130.00, 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000009', 1, 'Encuentro y Arribo a Cuenca · Bienvenida a Azuay', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Cuenca.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000009', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Azuay. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #10: Talleres de Filigrana en Plata y Tejido en Chordeleg y Sígsig (Azuay)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000010',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Azuay%' AND c.nombre ILIKE '%Chordeleg%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Azuay%' LIMIT 1),
    1
  ),
  10, 'Talleres de Filigrana en Plata y Tejido en Chordeleg y Sígsig', 'azuay-talleres-de-filigrana-en-plata-y-tejido-en-chordeleg-y-sigsig', 2, 1,
  120.00, 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000010', 1, 'Encuentro y Arribo a Chordeleg · Bienvenida a Azuay', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Chordeleg.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000010', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Azuay. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #11: Descenso en Bicicleta de Montaña por el Arenal del Chimborazo (Bolívar)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000011',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Bolívar%' AND c.nombre ILIKE '%Guaranda%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Bolívar%' LIMIT 1),
    1
  ),
  1, 'Descenso en Bicicleta de Montaña por el Arenal del Chimborazo', 'bolivar-descenso-en-bicicleta-de-montana-por-el-arenal-del-chimborazo', 2, 1,
  120.00, 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000011', 1, 'Encuentro y Arribo a Guaranda · Bienvenida a Bolívar', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Guaranda.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000011', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Bolívar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #12: Reserva de Producción Faunística y Bosque de Polylepis (Bolívar)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000012',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Bolívar%' AND c.nombre ILIKE '%Guaranda%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Bolívar%' LIMIT 1),
    1
  ),
  2, 'Reserva de Producción Faunística y Bosque de Polylepis', 'bolivar-reserva-de-produccion-faunistica-y-bosque-de-polylepis', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000012', 1, 'Encuentro y Arribo a Guaranda · Bienvenida a Bolívar', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Guaranda.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000012', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Bolívar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #13: Relax Subtropical y Huertos Frutales en Caluma (Bolívar)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000013',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Bolívar%' AND c.nombre ILIKE '%Caluma%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Bolívar%' LIMIT 1),
    1
  ),
  3, 'Relax Subtropical y Huertos Frutales en Caluma', 'bolivar-relax-subtropical-y-huertos-frutales-en-caluma', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000013', 1, 'Encuentro y Arribo a Caluma · Bienvenida a Bolívar', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Caluma.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000013', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Bolívar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #14: Santuario de la Virgen del Huayco y Centro de Guaranda (Bolívar)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000014',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Bolívar%' AND c.nombre ILIKE '%San Miguel%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Bolívar%' LIMIT 1),
    1
  ),
  4, 'Santuario de la Virgen del Huayco y Centro de Guaranda', 'bolivar-santuario-de-la-virgen-del-huayco-y-centro-de-guaranda', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000014', 1, 'Encuentro y Arribo a San Miguel · Bienvenida a Bolívar', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de San Miguel.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000014', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Bolívar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #15: Glamping en Colinas Andinas y Cumbres del Libertador (Bolívar)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000015',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Bolívar%' AND c.nombre ILIKE '%Chillanes%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Bolívar%' LIMIT 1),
    1
  ),
  5, 'Glamping en Colinas Andinas y Cumbres del Libertador', 'bolivar-glamping-en-colinas-andinas-y-cumbres-del-libertador', 2, 1,
  145.00, 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000015', 1, 'Encuentro y Arribo a Chillanes · Bienvenida a Bolívar', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Chillanes.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000015', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Bolívar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #16: Complejo Turístico Las Tres Cruces y Cascadas de Echeandía (Bolívar)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000016',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Bolívar%' AND c.nombre ILIKE '%Echeandía%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Bolívar%' LIMIT 1),
    1
  ),
  6, 'Complejo Turístico Las Tres Cruces y Cascadas de Echeandía', 'bolivar-complejo-turistico-las-tres-cruces-y-cascadas-de-echeandia', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000016', 1, 'Encuentro y Arribo a Echeandía · Bienvenida a Bolívar', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Echeandía.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000016', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Bolívar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #17: Cata de Quesos de Salinas de Guaranda y Chocolates Finos (Bolívar)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000017',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Bolívar%' AND c.nombre ILIKE '%Guaranda%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Bolívar%' LIMIT 1),
    1
  ),
  7, 'Cata de Quesos de Salinas de Guaranda y Chocolates Finos', 'bolivar-cata-de-quesos-de-salinas-de-guaranda-y-chocolates-finos', 2, 1,
  105.00, 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000017', 1, 'Encuentro y Arribo a Guaranda · Bienvenida a Bolívar', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Guaranda.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000017', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Bolívar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #18: Trekking al Refugio Hermanos Carrel por la Ruta Bolívar (Bolívar)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000018',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Bolívar%' AND c.nombre ILIKE '%Guaranda%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Bolívar%' LIMIT 1),
    1
  ),
  8, 'Trekking al Refugio Hermanos Carrel por la Ruta Bolívar', 'bolivar-trekking-al-refugio-hermanos-carrel-por-la-ruta-bolivar', 2, 1,
  130.00, 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000018', 1, 'Encuentro y Arribo a Guaranda · Bienvenida a Bolívar', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Guaranda.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000018', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Bolívar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #19: Spa Andino con Vistas a la Cordillera Occidental (Bolívar)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000019',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Bolívar%' AND c.nombre ILIKE '%San Miguel%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Bolívar%' LIMIT 1),
    1
  ),
  9, 'Spa Andino con Vistas a la Cordillera Occidental', 'bolivar-spa-andino-con-vistas-a-la-cordillera-occidental', 2, 1,
  115.00, 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000019', 1, 'Encuentro y Arribo a San Miguel · Bienvenida a Bolívar', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de San Miguel.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000019', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Bolívar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #20: Experiencia Comunitaria Solidaria en Salinas de Tomabelas (Bolívar)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000020',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Bolívar%' AND c.nombre ILIKE '%Guaranda%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Bolívar%' LIMIT 1),
    1
  ),
  10, 'Experiencia Comunitaria Solidaria en Salinas de Tomabelas', 'bolivar-experiencia-comunitaria-solidaria-en-salinas-de-tomabelas', 3, 2,
  155.00, 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000020', 1, 'Encuentro y Arribo a Guaranda · Bienvenida a Bolívar', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Guaranda.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000020', 2, 'Día 2: Experiencia Principal de Turismo Comunitario en Guaranda', 'Jornada completa de inmersión en Experiencia Comunitaria Solidaria en Salinas de Tomabelas. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000020', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Bolívar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #21: Escalada en Roca y Caving en el Cerro Cojitambo (Cañar)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000021',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cañar%' AND c.nombre ILIKE '%Azogues%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cañar%' LIMIT 1),
    1
  ),
  1, 'Escalada en Roca y Caving en el Cerro Cojitambo', 'canar-escalada-en-roca-y-caving-en-el-cerro-cojitambo', 2, 1,
  125.00, 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000021', 1, 'Encuentro y Arribo a Azogues · Bienvenida a Cañar', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Azogues.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000021', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Cañar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #22: Sendero Natural en Bosque Protector Dudas Mazar (Cañar)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000022',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cañar%' AND c.nombre ILIKE '%Cañar%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cañar%' LIMIT 1),
    1
  ),
  2, 'Sendero Natural en Bosque Protector Dudas Mazar', 'canar-sendero-natural-en-bosque-protector-dudas-mazar', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000022', 1, 'Encuentro y Arribo a Cañar · Bienvenida a Cañar', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Cañar.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000022', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Cañar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #23: Parque Acuático y Balnearios Tropicales de La Troncal (Cañar)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000023',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cañar%' AND c.nombre ILIKE '%La Troncal%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cañar%' LIMIT 1),
    1
  ),
  3, 'Parque Acuático y Balnearios Tropicales de La Troncal', 'canar-parque-acuatico-y-balnearios-tropicales-de-la-troncal', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000023', 1, 'Encuentro y Arribo a La Troncal · Bienvenida a Cañar', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de La Troncal.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000023', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Cañar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #24: Complejo Arqueológico y Templo del Sol de Ingapirca (Cañar)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000024',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cañar%' AND c.nombre ILIKE '%Cañar%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cañar%' LIMIT 1),
    1
  ),
  4, 'Complejo Arqueológico y Templo del Sol de Ingapirca', 'canar-complejo-arqueologico-y-templo-del-sol-de-ingapirca', 2, 1,
  115.00, 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000024', 1, 'Encuentro y Arribo a Cañar · Bienvenida a Cañar', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Cañar.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000024', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Cañar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #25: Romance con Vista al Santuario de la Virgen del Rocío (Cañar)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000025',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cañar%' AND c.nombre ILIKE '%Biblián%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cañar%' LIMIT 1),
    1
  ),
  5, 'Romance con Vista al Santuario de la Virgen del Rocío', 'canar-romance-con-vista-al-santuario-de-la-virgen-del-rocio', 2, 1,
  140.00, 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000025', 1, 'Encuentro y Arribo a Biblián · Bienvenida a Cañar', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Biblián.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000025', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Cañar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #26: Paseo Familiar en la Laguna de Culebrillas y El Tambo (Cañar)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000026',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cañar%' AND c.nombre ILIKE '%El Tambo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cañar%' LIMIT 1),
    1
  ),
  6, 'Paseo Familiar en la Laguna de Culebrillas y El Tambo', 'canar-paseo-familiar-en-la-laguna-de-culebrillas-y-el-tambo', 2, 1,
  100.00, 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000026', 1, 'Encuentro y Arribo a El Tambo · Bienvenida a Cañar', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de El Tambo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000026', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Cañar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #27: Tour Gastronómico de Cascaritas de Azogues y Chicha de Jora (Cañar)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000027',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cañar%' AND c.nombre ILIKE '%Azogues%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cañar%' LIMIT 1),
    1
  ),
  7, 'Tour Gastronómico de Cascaritas de Azogues y Chicha de Jora', 'canar-tour-gastronomico-de-cascaritas-de-azogues-y-chicha-de-jora', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000027', 1, 'Encuentro y Arribo a Azogues · Bienvenida a Cañar', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Azogues.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000027', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Cañar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #28: Trekking por el Gran Qhapaq Ñan (Camino del Inca) (Cañar)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000028',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cañar%' AND c.nombre ILIKE '%El Tambo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cañar%' LIMIT 1),
    1
  ),
  8, 'Trekking por el Gran Qhapaq Ñan (Camino del Inca)', 'canar-trekking-por-el-gran-qhapaq-nan-camino-del-inca', 3, 2,
  165.00, 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000028', 1, 'Encuentro y Arribo a El Tambo · Bienvenida a Cañar', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de El Tambo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000028', 2, 'Día 2: Experiencia Principal de Trekking en El Tambo', 'Jornada completa de inmersión en Trekking por el Gran Qhapaq Ñan (Camino del Inca). Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000028', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Cañar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #29: Aguas Termales Minerales en Yanayacu y Spa de Montaña (Cañar)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000029',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cañar%' AND c.nombre ILIKE '%La Troncal%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cañar%' LIMIT 1),
    1
  ),
  9, 'Aguas Termales Minerales en Yanayacu y Spa de Montaña', 'canar-aguas-termales-minerales-en-yanayacu-y-spa-de-montana', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000029', 1, 'Encuentro y Arribo a La Troncal · Bienvenida a Cañar', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de La Troncal.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000029', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Cañar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #30: Tradiciones Cañaris y Tejido de Ponchos en Sisid Anejo (Cañar)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000030',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cañar%' AND c.nombre ILIKE '%Cañar%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cañar%' LIMIT 1),
    1
  ),
  10, 'Tradiciones Cañaris y Tejido de Ponchos en Sisid Anejo', 'canar-tradiciones-canaris-y-tejido-de-ponchos-en-sisid-anejo', 2, 1,
  105.00, 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000030', 1, 'Encuentro y Arribo a Cañar · Bienvenida a Cañar', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Cañar.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000030', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Cañar. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #31: Cicloturismo y Cañonismo en el Valle de Mira (Carchi)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000031',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Carchi%' AND c.nombre ILIKE '%Mira%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Carchi%' LIMIT 1),
    1
  ),
  1, 'Cicloturismo y Cañonismo en el Valle de Mira', 'carchi-cicloturismo-y-canonismo-en-el-valle-de-mira', 2, 1,
  115.00, 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000031', 1, 'Encuentro y Arribo a Mira · Bienvenida a Carchi', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Mira.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000031', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Carchi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #32: Reserva Ecológica El Ángel y Bosque de Frailejones Gigantes (Carchi)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000032',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Carchi%' AND c.nombre ILIKE '%El Ángel%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Carchi%' LIMIT 1),
    1
  ),
  2, 'Reserva Ecológica El Ángel y Bosque de Frailejones Gigantes', 'carchi-reserva-ecologica-el-angel-y-bosque-de-frailejones-gigantes', 2, 1,
  125.00, 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000032', 1, 'Encuentro y Arribo a El Ángel (Espejo) · Bienvenida a Carchi', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de El Ángel (Espejo).', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000032', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Carchi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #33: Tranquilidad y Clima Cálido en los Huertos de Chota Carchi (Carchi)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000033',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Carchi%' AND c.nombre ILIKE '%Mira%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Carchi%' LIMIT 1),
    1
  ),
  3, 'Tranquilidad y Clima Cálido en los Huertos de Chota Carchi', 'carchi-tranquilidad-y-clima-calido-en-los-huertos-de-chota-carchi', 2, 1,
  85.00, 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000033', 1, 'Encuentro y Arribo a Mira · Bienvenida a Carchi', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Mira.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000033', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Carchi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #34: Esculturas en Verde del Cementerio Municipal de Tulcán (Carchi)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000034',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Carchi%' AND c.nombre ILIKE '%Tulcán%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Carchi%' LIMIT 1),
    1
  ),
  4, 'Esculturas en Verde del Cementerio Municipal de Tulcán', 'carchi-esculturas-en-verde-del-cementerio-municipal-de-tulcan', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000034', 1, 'Encuentro y Arribo a Tulcán · Bienvenida a Carchi', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Tulcán.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000034', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Carchi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #35: Cabaña Romántica y Laguna Volcánica de El Salado (Carchi)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000035',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Carchi%' AND c.nombre ILIKE '%San Gabriel%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Carchi%' LIMIT 1),
    1
  ),
  5, 'Cabaña Romántica y Laguna Volcánica de El Salado', 'carchi-cabana-romantica-y-laguna-volcanica-de-el-salado', 2, 1,
  135.00, 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000035', 1, 'Encuentro y Arribo a San Gabriel (Montúfar) · Bienvenida a Carchi', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de San Gabriel (Montúfar).', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000035', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Carchi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #36: Bosque de los Arrayanes de San Gabriel y Paseo Familiar (Carchi)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000036',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Carchi%' AND c.nombre ILIKE '%San Gabriel%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Carchi%' LIMIT 1),
    1
  ),
  6, 'Bosque de los Arrayanes de San Gabriel y Paseo Familiar', 'carchi-bosque-de-los-arrayanes-de-san-gabriel-y-paseo-familiar', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000036', 1, 'Encuentro y Arribo a San Gabriel (Montúfar) · Bienvenida a Carchi', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de San Gabriel (Montúfar).', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000036', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Carchi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #37: Ruta del Queso Pastuzo, Tardón Mireño y Hornado Pastuso (Carchi)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000037',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Carchi%' AND c.nombre ILIKE '%Tulcán%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Carchi%' LIMIT 1),
    1
  ),
  7, 'Ruta del Queso Pastuzo, Tardón Mireño y Hornado Pastuso', 'carchi-ruta-del-queso-pastuzo-tardon-mireno-y-hornado-pastuso', 2, 1,
  85.00, 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000037', 1, 'Encuentro y Arribo a Tulcán · Bienvenida a Carchi', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Tulcán.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000037', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Carchi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #38: Trekking al Volcán Chiles y Lagunas Verdes Azufradas (Carchi)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000038',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Carchi%' AND c.nombre ILIKE '%Tulcán%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Carchi%' LIMIT 1),
    1
  ),
  8, 'Trekking al Volcán Chiles y Lagunas Verdes Azufradas', 'carchi-trekking-al-volcan-chiles-y-lagunas-verdes-azufradas', 2, 1,
  140.00, 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000038', 1, 'Encuentro y Arribo a Tulcán · Bienvenida a Carchi', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Tulcán.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000038', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Carchi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #39: Santuario y Baños Termales de la Gruta de la Paz (Carchi)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000039',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Carchi%' AND c.nombre ILIKE '%Bolívar%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Carchi%' LIMIT 1),
    1
  ),
  9, 'Santuario y Baños Termales de la Gruta de la Paz', 'carchi-santuario-y-banos-termales-de-la-gruta-de-la-paz', 2, 1,
  100.00, 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000039', 1, 'Encuentro y Arribo a Bolívar · Bienvenida a Carchi', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Bolívar.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000039', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Carchi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #40: Convivencia Pasto y Mitos en la Comuna de La Encañada (Carchi)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000040',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Carchi%' AND c.nombre ILIKE '%Huaca%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Carchi%' LIMIT 1),
    1
  ),
  10, 'Convivencia Pasto y Mitos en la Comuna de La Encañada', 'carchi-convivencia-pasto-y-mitos-en-la-comuna-de-la-encanada', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000040', 1, 'Encuentro y Arribo a Huaca · Bienvenida a Carchi', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Huaca.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000040', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Carchi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #41: Ruta de Ciclismo Extremo Downhill desde el Taita Chimborazo (Chimborazo)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000041',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Chimborazo%' AND c.nombre ILIKE '%Riobamba%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Chimborazo%' LIMIT 1),
    1
  ),
  1, 'Ruta de Ciclismo Extremo Downhill desde el Taita Chimborazo', 'chimborazo-ruta-de-ciclismo-extremo-downhill-desde-el-taita-chimborazo', 2, 1,
  135.00, 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000041', 1, 'Encuentro y Arribo a Riobamba · Bienvenida a Chimborazo', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Riobamba.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000041', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Chimborazo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #42: Avistamiento de Vicuñas Silvestres y Cóndor Andino (Chimborazo)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000042',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Chimborazo%' AND c.nombre ILIKE '%Riobamba%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Chimborazo%' LIMIT 1),
    1
  ),
  2, 'Avistamiento de Vicuñas Silvestres y Cóndor Andino', 'chimborazo-avistamiento-de-vicunas-silvestres-y-condor-andino', 2, 1,
  120.00, 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000042', 1, 'Encuentro y Arribo a Riobamba · Bienvenida a Chimborazo', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Riobamba.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000042', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Chimborazo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #43: Fin de Semana de Campo y Sol en los Valles de Pallatanga (Chimborazo)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000043',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Chimborazo%' AND c.nombre ILIKE '%Pallatanga%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Chimborazo%' LIMIT 1),
    1
  ),
  3, 'Fin de Semana de Campo y Sol en los Valles de Pallatanga', 'chimborazo-fin-de-semana-de-campo-y-sol-en-los-valles-de-pallatanga', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000043', 1, 'Encuentro y Arribo a Pallatanga · Bienvenida a Chimborazo', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Pallatanga.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000043', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Chimborazo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #44: Ruta de la Nariz del Diablo y Centro Histórico de Alausí (Chimborazo)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000044',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Chimborazo%' AND c.nombre ILIKE '%Alausí%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Chimborazo%' LIMIT 1),
    1
  ),
  4, 'Ruta de la Nariz del Diablo y Centro Histórico de Alausí', 'chimborazo-ruta-de-la-nariz-del-diablo-y-centro-historico-de-alausi', 2, 1,
  150.00, 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000044', 1, 'Encuentro y Arribo a Alausí · Bienvenida a Chimborazo', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Alausí.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000044', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Chimborazo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #45: Glamping Domo Frente al Nevado Chimborazo con Fogata (Chimborazo)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000045',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Chimborazo%' AND c.nombre ILIKE '%Riobamba%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Chimborazo%' LIMIT 1),
    1
  ),
  5, 'Glamping Domo Frente al Nevado Chimborazo con Fogata', 'chimborazo-glamping-domo-frente-al-nevado-chimborazo-con-fogata', 2, 1,
  180.00, 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000045', 1, 'Encuentro y Arribo a Riobamba · Bienvenida a Chimborazo', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Riobamba.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000045', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Chimborazo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #46: Paseo en Bote por Laguna de Colta e Iglesia de Balbanera (Chimborazo)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000046',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Chimborazo%' AND c.nombre ILIKE '%Colta%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Chimborazo%' LIMIT 1),
    1
  ),
  6, 'Paseo en Bote por Laguna de Colta e Iglesia de Balbanera', 'chimborazo-paseo-en-bote-por-laguna-de-colta-e-iglesia-de-balbanera', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000046', 1, 'Encuentro y Arribo a Colta · Bienvenida a Chimborazo', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Colta.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000046', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Chimborazo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #47: Hornado Riobambeño, Chicha Huevona y Fritada de Guano (Chimborazo)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000047',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Chimborazo%' AND c.nombre ILIKE '%Guano%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Chimborazo%' LIMIT 1),
    1
  ),
  7, 'Hornado Riobambeño, Chicha Huevona y Fritada de Guano', 'chimborazo-hornado-riobambeno-chicha-huevona-y-fritada-de-guano', 2, 1,
  85.00, 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000047', 1, 'Encuentro y Arribo a Guano · Bienvenida a Chimborazo', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Guano.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000047', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Chimborazo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #48: Ascenso de Alta Montaña al Refugio Whymper (5.000 m) (Chimborazo)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000048',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Chimborazo%' AND c.nombre ILIKE '%Riobamba%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Chimborazo%' LIMIT 1),
    1
  ),
  8, 'Ascenso de Alta Montaña al Refugio Whymper (5.000 m)', 'chimborazo-ascenso-de-alta-montana-al-refugio-whymper-5-000-m', 3, 2,
  210.00, 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000048', 1, 'Encuentro y Arribo a Riobamba · Bienvenida a Chimborazo', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Riobamba.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000048', 2, 'Día 2: Experiencia Principal de Trekking en Riobamba', 'Jornada completa de inmersión en Ascenso de Alta Montaña al Refugio Whymper (5.000 m). Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000048', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Chimborazo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #49: Spa de Aguas Termales Volcánicas en Ojo de Fantasma Penipe (Chimborazo)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000049',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Chimborazo%' AND c.nombre ILIKE '%Penipe%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Chimborazo%' LIMIT 1),
    1
  ),
  9, 'Spa de Aguas Termales Volcánicas en Ojo de Fantasma Penipe', 'chimborazo-spa-de-aguas-termales-volcanicas-en-ojo-de-fantasma-penipe', 2, 1,
  105.00, 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000049', 1, 'Encuentro y Arribo a Penipe · Bienvenida a Chimborazo', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Penipe.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000049', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Chimborazo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #50: Feria Indígena Auténtica de Guamote y Tejedores de Alfombras (Chimborazo)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000050',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Chimborazo%' AND c.nombre ILIKE '%Guamote%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Chimborazo%' LIMIT 1),
    1
  ),
  10, 'Feria Indígena Auténtica de Guamote y Tejedores de Alfombras', 'chimborazo-feria-indigena-autentica-de-guamote-y-tejedores-de-alfombras', 2, 1,
  100.00, 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000050', 1, 'Encuentro y Arribo a Guamote · Bienvenida a Chimborazo', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Guamote.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000050', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Chimborazo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #51: Cabalgata y Ciclismo en las Faldas del Volcán Cotopaxi (Cotopaxi)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000051',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cotopaxi%' AND c.nombre ILIKE '%Latacunga%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cotopaxi%' LIMIT 1),
    1
  ),
  1, 'Cabalgata y Ciclismo en las Faldas del Volcán Cotopaxi', 'cotopaxi-cabalgata-y-ciclismo-en-las-faldas-del-volcan-cotopaxi', 2, 1,
  135.00, 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000051', 1, 'Encuentro y Arribo a Latacunga · Bienvenida a Cotopaxi', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Latacunga.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000051', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Cotopaxi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #52: Laguna de Limpiopungo y Flora del Páramo Andino (Cotopaxi)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000052',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cotopaxi%' AND c.nombre ILIKE '%Latacunga%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cotopaxi%' LIMIT 1),
    1
  ),
  2, 'Laguna de Limpiopungo y Flora del Páramo Andino', 'cotopaxi-laguna-de-limpiopungo-y-flora-del-paramo-andino', 2, 1,
  115.00, 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000052', 1, 'Encuentro y Arribo a Latacunga · Bienvenida a Cotopaxi', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Latacunga.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000052', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Cotopaxi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #53: Balneario Natural y Cascadas Subtropicales de La Maná (Cotopaxi)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000053',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cotopaxi%' AND c.nombre ILIKE '%La Maná%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cotopaxi%' LIMIT 1),
    1
  ),
  3, 'Balneario Natural y Cascadas Subtropicales de La Maná', 'cotopaxi-balneario-natural-y-cascadas-subtropicales-de-la-mana', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000053', 1, 'Encuentro y Arribo a La Maná · Bienvenida a Cotopaxi', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de La Maná.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000053', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Cotopaxi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #54: Centro Histórico de Piedra Pómez de Latacunga y Templos (Cotopaxi)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000054',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cotopaxi%' AND c.nombre ILIKE '%Latacunga%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cotopaxi%' LIMIT 1),
    1
  ),
  4, 'Centro Histórico de Piedra Pómez de Latacunga y Templos', 'cotopaxi-centro-historico-de-piedra-pomez-de-latacunga-y-templos', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000054', 1, 'Encuentro y Arribo a Latacunga · Bienvenida a Cotopaxi', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Latacunga.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000054', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Cotopaxi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #55: Romance y Cabañas de Madera al Borde del Cráter Quilotoa (Cotopaxi)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000055',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cotopaxi%' AND c.nombre ILIKE '%Pujilí%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cotopaxi%' LIMIT 1),
    1
  ),
  5, 'Romance y Cabañas de Madera al Borde del Cráter Quilotoa', 'cotopaxi-romance-y-cabanas-de-madera-al-borde-del-crater-quilotoa', 2, 1,
  165.00, 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000055', 1, 'Encuentro y Arribo a Pujilí · Bienvenida a Cotopaxi', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Pujilí.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000055', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Cotopaxi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #56: Ruta de los Helados Tradicionales de Salcedo y Granja Andina (Cotopaxi)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000056',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cotopaxi%' AND c.nombre ILIKE '%Salcedo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cotopaxi%' LIMIT 1),
    1
  ),
  6, 'Ruta de los Helados Tradicionales de Salcedo y Granja Andina', 'cotopaxi-ruta-de-los-helados-tradicionales-de-salcedo-y-granja-andina', 2, 1,
  85.00, 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000056', 1, 'Encuentro y Arribo a Salcedo · Bienvenida a Cotopaxi', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Salcedo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000056', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Cotopaxi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #57: Ruta de las Chugchucaras Latacungueñas y Queso de Hoja (Cotopaxi)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000057',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cotopaxi%' AND c.nombre ILIKE '%Latacunga%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cotopaxi%' LIMIT 1),
    1
  ),
  7, 'Ruta de las Chugchucaras Latacungueñas y Queso de Hoja', 'cotopaxi-ruta-de-las-chugchucaras-latacunguenas-y-queso-de-hoja', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000057', 1, 'Encuentro y Arribo a Latacunga · Bienvenida a Cotopaxi', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Latacunga.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000057', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Cotopaxi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #58: Trekking Quilotoa Loop: Sigchos, Isinlivi y Chugchilán (Cotopaxi)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000058',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cotopaxi%' AND c.nombre ILIKE '%Sigchos%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cotopaxi%' LIMIT 1),
    1
  ),
  8, 'Trekking Quilotoa Loop: Sigchos, Isinlivi y Chugchilán', 'cotopaxi-trekking-quilotoa-loop-sigchos-isinlivi-y-chugchilan', 3, 2,
  185.00, 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000058', 1, 'Encuentro y Arribo a Sigchos · Bienvenida a Cotopaxi', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Sigchos.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000058', 2, 'Día 2: Experiencia Principal de Trekking en Sigchos', 'Jornada completa de inmersión en Trekking Quilotoa Loop: Sigchos, Isinlivi y Chugchilán. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000058', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Cotopaxi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #59: Spa con Piedras Calientes Volcánicas en Hostería de Montaña (Cotopaxi)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000059',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cotopaxi%' AND c.nombre ILIKE '%Latacunga%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cotopaxi%' LIMIT 1),
    1
  ),
  9, 'Spa con Piedras Calientes Volcánicas en Hostería de Montaña', 'cotopaxi-spa-con-piedras-calientes-volcanicas-en-hosteria-de-montana', 2, 1,
  140.00, 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000059', 1, 'Encuentro y Arribo a Latacunga · Bienvenida a Cotopaxi', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Latacunga.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000059', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Cotopaxi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #60: Mercado Ancestral de Saquisilí y Taller de Pintores de Tigua (Cotopaxi)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000060',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cotopaxi%' AND c.nombre ILIKE '%Saquisilí%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Cotopaxi%' LIMIT 1),
    1
  ),
  10, 'Mercado Ancestral de Saquisilí y Taller de Pintores de Tigua', 'cotopaxi-mercado-ancestral-de-saquisili-y-taller-de-pintores-de-tigua', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000060', 1, 'Encuentro y Arribo a Saquisilí · Bienvenida a Cotopaxi', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Saquisilí.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000060', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Cotopaxi. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #61: Espeleología y Minas Coloniales El Sexmo en Zaruma (El Oro)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000061',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%El Oro%' AND c.nombre ILIKE '%Zaruma%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%El Oro%' LIMIT 1),
    1
  ),
  1, 'Espeleología y Minas Coloniales El Sexmo en Zaruma', 'el-oro-espeleologia-y-minas-coloniales-el-sexmo-en-zaruma', 2, 1,
  125.00, 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000061', 1, 'Encuentro y Arribo a Zaruma · Bienvenida a El Oro', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Zaruma.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000061', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de El Oro. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #62: Reserva Ecológica Arenillas y Bosque Seco Ecuatoriano (El Oro)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000062',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%El Oro%' AND c.nombre ILIKE '%Arenillas%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%El Oro%' LIMIT 1),
    1
  ),
  2, 'Reserva Ecológica Arenillas y Bosque Seco Ecuatoriano', 'el-oro-reserva-ecologica-arenillas-y-bosque-seco-ecuatoriano', 2, 1,
  115.00, 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000062', 1, 'Encuentro y Arribo a Arenillas · Bienvenida a El Oro', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Arenillas.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000062', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de El Oro. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #63: Descanso en Playa Jambelí y Manglares del Archipiélago (El Oro)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000063',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%El Oro%' AND c.nombre ILIKE '%Machala%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%El Oro%' LIMIT 1),
    1
  ),
  3, 'Descanso en Playa Jambelí y Manglares del Archipiélago', 'el-oro-descanso-en-playa-jambeli-y-manglares-del-archipielago', 2, 1,
  105.00, 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000063', 1, 'Encuentro y Arribo a Machala · Bienvenida a El Oro', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Machala.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000063', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de El Oro. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #64: Patrimonio de Madera y Balcones Coloniales de Zaruma (El Oro)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000064',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%El Oro%' AND c.nombre ILIKE '%Zaruma%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%El Oro%' LIMIT 1),
    1
  ),
  4, 'Patrimonio de Madera y Balcones Coloniales de Zaruma', 'el-oro-patrimonio-de-madera-y-balcones-coloniales-de-zaruma', 2, 1,
  120.00, 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000064', 1, 'Encuentro y Arribo a Zaruma · Bienvenida a El Oro', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Zaruma.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000064', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de El Oro. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #65: Cena Romántica en Colinas de Piñas y Café de Altura (El Oro)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000065',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%El Oro%' AND c.nombre ILIKE '%Piñas%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%El Oro%' LIMIT 1),
    1
  ),
  5, 'Cena Romántica en Colinas de Piñas y Café de Altura', 'el-oro-cena-romantica-en-colinas-de-pinas-y-cafe-de-altura', 2, 1,
  140.00, 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000065', 1, 'Encuentro y Arribo a Piñas · Bienvenida a El Oro', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Piñas.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000065', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de El Oro. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #66: Paseo en Lancha por Puerto Bolívar y Ruta del Camarón (El Oro)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000066',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%El Oro%' AND c.nombre ILIKE '%Machala%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%El Oro%' LIMIT 1),
    1
  ),
  6, 'Paseo en Lancha por Puerto Bolívar y Ruta del Camarón', 'el-oro-paseo-en-lancha-por-puerto-bolivar-y-ruta-del-camaron', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000066', 1, 'Encuentro y Arribo a Machala · Bienvenida a El Oro', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Machala.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000066', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de El Oro. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #67: Ruta del Tigrillo Zarumeño, Café Arábigo y Mariscos de Puerto Bolívar (El Oro)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000067',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%El Oro%' AND c.nombre ILIKE '%Zaruma%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%El Oro%' LIMIT 1),
    1
  ),
  7, 'Ruta del Tigrillo Zarumeño, Café Arábigo y Mariscos de Puerto Bolívar', 'el-oro-ruta-del-tigrillo-zarumeno-cafe-arabigo-y-mariscos-de-puerto-bolivar', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000067', 1, 'Encuentro y Arribo a Zaruma · Bienvenida a El Oro', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Zaruma.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000067', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de El Oro. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #68: Trekking en Bosque Petrificado de Puyango y Huellas Fósiles (El Oro)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000068',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%El Oro%' AND c.nombre ILIKE '%Arenillas%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%El Oro%' LIMIT 1),
    1
  ),
  8, 'Trekking en Bosque Petrificado de Puyango y Huellas Fósiles', 'el-oro-trekking-en-bosque-petrificado-de-puyango-y-huellas-fosiles', 2, 1,
  130.00, 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000068', 1, 'Encuentro y Arribo a Arenillas · Bienvenida a El Oro', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Arenillas.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000068', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de El Oro. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #69: Aguas Termominerales y Lodo Curativo de Portovelo (El Oro)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000069',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%El Oro%' AND c.nombre ILIKE '%Portovelo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%El Oro%' LIMIT 1),
    1
  ),
  9, 'Aguas Termominerales y Lodo Curativo de Portovelo', 'el-oro-aguas-termominerales-y-lodo-curativo-de-portovelo', 2, 1,
  100.00, 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000069', 1, 'Encuentro y Arribo a Portovelo · Bienvenida a El Oro', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Portovelo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000069', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de El Oro. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #70: Comunidades Cacaoteras de Pasaje y Dulces de Guayaba (El Oro)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000070',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%El Oro%' AND c.nombre ILIKE '%Pasaje%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%El Oro%' LIMIT 1),
    1
  ),
  10, 'Comunidades Cacaoteras de Pasaje y Dulces de Guayaba', 'el-oro-comunidades-cacaoteras-de-pasaje-y-dulces-de-guayaba', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000070', 1, 'Encuentro y Arribo a Pasaje · Bienvenida a El Oro', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Pasaje.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000070', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de El Oro. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #71: Surf de Olas de Clase Mundial y Caving en Mompiche (Esmeraldas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000071',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Esmeraldas%' AND c.nombre ILIKE '%Mompiche%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Esmeraldas%' LIMIT 1),
    1
  ),
  1, 'Surf de Olas de Clase Mundial y Caving en Mompiche', 'esmeraldas-surf-de-olas-de-clase-mundial-y-caving-en-mompiche', 3, 2,
  155.00, 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000071', 1, 'Encuentro y Arribo a Mompiche · Bienvenida a Esmeraldas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Mompiche.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000071', 2, 'Día 2: Experiencia Principal de Aventura en Mompiche', 'Jornada completa de inmersión en Surf de Olas de Clase Mundial y Caving en Mompiche. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000071', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Esmeraldas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #72: Manglares Majagual con los Árboles Más Altos del Mundo (Esmeraldas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000072',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Esmeraldas%' AND c.nombre ILIKE '%San Lorenzo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Esmeraldas%' LIMIT 1),
    1
  ),
  2, 'Manglares Majagual con los Árboles Más Altos del Mundo', 'esmeraldas-manglares-majagual-con-los-arboles-mas-altos-del-mundo', 2, 1,
  125.00, 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000072', 1, 'Encuentro y Arribo a San Lorenzo · Bienvenida a Esmeraldas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de San Lorenzo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000072', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Esmeraldas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #73: Sol, Arena Blanca y Cocteles Tropicales en Tonsupa y Same (Esmeraldas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000073',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Esmeraldas%' AND c.nombre ILIKE '%Tonsupa%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Esmeraldas%' LIMIT 1),
    1
  ),
  3, 'Sol, Arena Blanca y Cocteles Tropicales en Tonsupa y Same', 'esmeraldas-sol-arena-blanca-y-cocteles-tropicales-en-tonsupa-y-same', 3, 2,
  145.00, 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000073', 1, 'Encuentro y Arribo a Tonsupa · Bienvenida a Esmeraldas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Tonsupa.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000073', 2, 'Día 2: Experiencia Principal de Playa y Relax en Tonsupa', 'Jornada completa de inmersión en Sol, Arena Blanca y Cocteles Tropicales en Tonsupa y Same. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000073', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Esmeraldas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #74: Música de Marimba Tradicional declarada Patrimonio Unesco (Esmeraldas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000074',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Esmeraldas%' AND c.nombre ILIKE '%Esmeraldas%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Esmeraldas%' LIMIT 1),
    1
  ),
  4, 'Música de Marimba Tradicional declarada Patrimonio Unesco', 'esmeraldas-musica-de-marimba-tradicional-declarada-patrimonio-unesco', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000074', 1, 'Encuentro y Arribo a Esmeraldas · Bienvenida a Esmeraldas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Esmeraldas.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000074', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Esmeraldas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #75: Cabaña Privada sobre el Océano en la Bahía de Same (Esmeraldas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000075',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Esmeraldas%' AND c.nombre ILIKE '%Same%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Esmeraldas%' LIMIT 1),
    1
  ),
  5, 'Cabaña Privada sobre el Océano en la Bahía de Same', 'esmeraldas-cabana-privada-sobre-el-oceano-en-la-bahia-de-same', 3, 2,
  210.00, 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000075', 1, 'Encuentro y Arribo a Same · Bienvenida a Esmeraldas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Same.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000075', 2, 'Día 2: Experiencia Principal de Romántico en Same', 'Jornada completa de inmersión en Cabaña Privada sobre el Océano en la Bahía de Same. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000075', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Esmeraldas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #76: Diversión Marina Familiar en Banana Boat y Playa de Atacames (Esmeraldas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000076',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Esmeraldas%' AND c.nombre ILIKE '%Atacames%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Esmeraldas%' LIMIT 1),
    1
  ),
  6, 'Diversión Marina Familiar en Banana Boat y Playa de Atacames', 'esmeraldas-diversion-marina-familiar-en-banana-boat-y-playa-de-atacames', 3, 2,
  130.00, 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000076', 1, 'Encuentro y Arribo a Atacames · Bienvenida a Esmeraldas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Atacames.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000076', 2, 'Día 2: Experiencia Principal de Familiar en Atacames', 'Jornada completa de inmersión en Diversión Marina Familiar en Banana Boat y Playa de Atacames. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000076', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Esmeraldas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #77: Ruta del Encocado de Cangrejo Azul y Tapao Arrecho Esmeraldeño (Esmeraldas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000077',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Esmeraldas%' AND c.nombre ILIKE '%Rioverde%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Esmeraldas%' LIMIT 1),
    1
  ),
  7, 'Ruta del Encocado de Cangrejo Azul y Tapao Arrecho Esmeraldeño', 'esmeraldas-ruta-del-encocado-de-cangrejo-azul-y-tapao-arrecho-esmeraldeno', 2, 1,
  105.00, 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000077', 1, 'Encuentro y Arribo a Rioverde · Bienvenida a Esmeraldas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Rioverde.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000077', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Esmeraldas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #78: Caminata por la Selva Tropical en la Reserva Cotacachi-Cayapas (Esmeraldas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000078',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Esmeraldas%' AND c.nombre ILIKE '%San Lorenzo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Esmeraldas%' LIMIT 1),
    1
  ),
  8, 'Caminata por la Selva Tropical en la Reserva Cotacachi-Cayapas', 'esmeraldas-caminata-por-la-selva-tropical-en-la-reserva-cotacachi-cayapas', 3, 2,
  160.00, 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000078', 1, 'Encuentro y Arribo a San Lorenzo · Bienvenida a Esmeraldas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de San Lorenzo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000078', 2, 'Día 2: Experiencia Principal de Trekking en San Lorenzo', 'Jornada completa de inmersión en Caminata por la Selva Tropical en la Reserva Cotacachi-Cayapas. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000078', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Esmeraldas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #79: Taladoterapia Marina y Masajes con Aceite de Coco Puro (Esmeraldas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000079',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Esmeraldas%' AND c.nombre ILIKE '%Mompiche%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Esmeraldas%' LIMIT 1),
    1
  ),
  9, 'Taladoterapia Marina y Masajes con Aceite de Coco Puro', 'esmeraldas-taladoterapia-marina-y-masajes-con-aceite-de-coco-puro', 2, 1,
  125.00, 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000079', 1, 'Encuentro y Arribo a Mompiche · Bienvenida a Esmeraldas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Mompiche.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000079', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Esmeraldas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #80: Convivencia con Comunidades Afroecuatorianas y Taller de Marimba (Esmeraldas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000080',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Esmeraldas%' AND c.nombre ILIKE '%Esmeraldas%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Esmeraldas%' LIMIT 1),
    1
  ),
  10, 'Convivencia con Comunidades Afroecuatorianas y Taller de Marimba', 'esmeraldas-convivencia-con-comunidades-afroecuatorianas-y-taller-de-marimba', 2, 1,
  115.00, 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000080', 1, 'Encuentro y Arribo a Esmeraldas · Bienvenida a Esmeraldas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Esmeraldas.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000080', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Esmeraldas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #81: Snorkel Extremo con Tiburones Tintoreras y Lobos Marinos (Galápagos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000081',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Galápagos%' AND c.nombre ILIKE '%Puerto Villamil%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Galápagos%' LIMIT 1),
    1
  ),
  1, 'Snorkel Extremo con Tiburones Tintoreras y Lobos Marinos', 'galapagos-snorkel-extremo-con-tiburones-tintoreras-y-lobos-marinos', 4, 3,
  580.00, 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000081', 1, 'Encuentro y Arribo a Puerto Villamil (Isabela) · Bienvenida a Galápagos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Puerto Villamil (Isabela).', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000081', 2, 'Día 2: Experiencia Principal de Aventura en Puerto Villamil (Isabela)', 'Jornada completa de inmersión en Snorkel Extremo con Tiburones Tintoreras y Lobos Marinos. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000081', 3, 'Día 3: Experiencia Principal de Aventura en Puerto Villamil (Isabela)', 'Jornada completa de inmersión en Snorkel Extremo con Tiburones Tintoreras y Lobos Marinos. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000081', 4, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Galápagos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #82: Santuario de Tortugas Gigantes y Estación Charles Darwin (Galápagos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000082',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Galápagos%' AND c.nombre ILIKE '%Puerto Ayora%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Galápagos%' LIMIT 1),
    1
  ),
  2, 'Santuario de Tortugas Gigantes y Estación Charles Darwin', 'galapagos-santuario-de-tortugas-gigantes-y-estacion-charles-darwin', 4, 3,
  620.00, 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000082', 1, 'Encuentro y Arribo a Puerto Ayora (Santa Cruz) · Bienvenida a Galápagos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Puerto Ayora (Santa Cruz).', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000082', 2, 'Día 2: Experiencia Principal de Ecoturismo en Puerto Ayora (Santa Cruz)', 'Jornada completa de inmersión en Santuario de Tortugas Gigantes y Estación Charles Darwin. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000082', 3, 'Día 3: Experiencia Principal de Ecoturismo en Puerto Ayora (Santa Cruz)', 'Jornada completa de inmersión en Santuario de Tortugas Gigantes y Estación Charles Darwin. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000082', 4, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Galápagos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #83: Descanso en Playa de Arena Blanca de Bahía Tortuga (Galápagos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000083',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Galápagos%' AND c.nombre ILIKE '%Puerto Ayora%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Galápagos%' LIMIT 1),
    1
  ),
  3, 'Descanso en Playa de Arena Blanca de Bahía Tortuga', 'galapagos-descanso-en-playa-de-arena-blanca-de-bahia-tortuga', 4, 3,
  495.00, 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000083', 1, 'Encuentro y Arribo a Puerto Ayora (Santa Cruz) · Bienvenida a Galápagos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Puerto Ayora (Santa Cruz).', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000083', 2, 'Día 2: Experiencia Principal de Playa y Relax en Puerto Ayora (Santa Cruz)', 'Jornada completa de inmersión en Descanso en Playa de Arena Blanca de Bahía Tortuga. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000083', 3, 'Día 3: Experiencia Principal de Playa y Relax en Puerto Ayora (Santa Cruz)', 'Jornada completa de inmersión en Descanso en Playa de Arena Blanca de Bahía Tortuga. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000083', 4, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Galápagos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #84: Historia de la Colonia Penal y Centro de Interpretación (Galápagos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000084',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Galápagos%' AND c.nombre ILIKE '%Puerto Baquerizo Moreno%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Galápagos%' LIMIT 1),
    1
  ),
  4, 'Historia de la Colonia Penal y Centro de Interpretación', 'galapagos-historia-de-la-colonia-penal-y-centro-de-interpretacion', 3, 2,
  480.00, 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000084', 1, 'Encuentro y Arribo a Puerto Baquerizo Moreno (San Cristóbal) · Bienvenida a Galápagos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Puerto Baquerizo Moreno (San Cristóbal).', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000084', 2, 'Día 2: Experiencia Principal de Cultural en Puerto Baquerizo Moreno (San Cristóbal)', 'Jornada completa de inmersión en Historia de la Colonia Penal y Centro de Interpretación. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000084', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Galápagos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #85: Atardeceres Románticos en Bahía Naufragio y Crucero al Ocaso (Galápagos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000085',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Galápagos%' AND c.nombre ILIKE '%Puerto Baquerizo Moreno%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Galápagos%' LIMIT 1),
    1
  ),
  5, 'Atardeceres Románticos en Bahía Naufragio y Crucero al Ocaso', 'galapagos-atardeceres-romanticos-en-bahia-naufragio-y-crucero-al-ocaso', 4, 3,
  690.00, 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000085', 1, 'Encuentro y Arribo a Puerto Baquerizo Moreno (San Cristóbal) · Bienvenida a Galápagos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Puerto Baquerizo Moreno (San Cristóbal).', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000085', 2, 'Día 2: Experiencia Principal de Romántico en Puerto Baquerizo Moreno (San Cristóbal)', 'Jornada completa de inmersión en Atardeceres Románticos en Bahía Naufragio y Crucero al Ocaso. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000085', 3, 'Día 3: Experiencia Principal de Romántico en Puerto Baquerizo Moreno (San Cristóbal)', 'Jornada completa de inmersión en Atardeceres Románticos en Bahía Naufragio y Crucero al Ocaso. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000085', 4, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Galápagos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #86: Safari Insular Familiar y Senderos de Cráteres Gemelos (Galápagos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000086',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Galápagos%' AND c.nombre ILIKE '%Puerto Ayora%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Galápagos%' LIMIT 1),
    1
  ),
  6, 'Safari Insular Familiar y Senderos de Cráteres Gemelos', 'galapagos-safari-insular-familiar-y-senderos-de-crateres-gemelos', 4, 3,
  540.00, 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000086', 1, 'Encuentro y Arribo a Puerto Ayora (Santa Cruz) · Bienvenida a Galápagos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Puerto Ayora (Santa Cruz).', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000086', 2, 'Día 2: Experiencia Principal de Familiar en Puerto Ayora (Santa Cruz)', 'Jornada completa de inmersión en Safari Insular Familiar y Senderos de Cráteres Gemelos. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000086', 3, 'Día 3: Experiencia Principal de Familiar en Puerto Ayora (Santa Cruz)', 'Jornada completa de inmersión en Safari Insular Familiar y Senderos de Cráteres Gemelos. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000086', 4, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Galápagos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #87: Ruta de la Langosta de Galápagos y Café Volcánico de Altura (Galápagos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000087',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Galápagos%' AND c.nombre ILIKE '%Puerto Ayora%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Galápagos%' LIMIT 1),
    1
  ),
  7, 'Ruta de la Langosta de Galápagos y Café Volcánico de Altura', 'galapagos-ruta-de-la-langosta-de-galapagos-y-cafe-volcanico-de-altura', 3, 2,
  470.00, 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000087', 1, 'Encuentro y Arribo a Puerto Ayora (Santa Cruz) · Bienvenida a Galápagos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Puerto Ayora (Santa Cruz).', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000087', 2, 'Día 2: Experiencia Principal de Gastronomía en Puerto Ayora (Santa Cruz)', 'Jornada completa de inmersión en Ruta de la Langosta de Galápagos y Café Volcánico de Altura. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000087', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Galápagos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #88: Ascenso al Volcán Activo Sierra Negra y Fumarolas de Azufre (Galápagos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000088',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Galápagos%' AND c.nombre ILIKE '%Puerto Villamil%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Galápagos%' LIMIT 1),
    1
  ),
  8, 'Ascenso al Volcán Activo Sierra Negra y Fumarolas de Azufre', 'galapagos-ascenso-al-volcan-activo-sierra-negra-y-fumarolas-de-azufre', 4, 3,
  560.00, 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000088', 1, 'Encuentro y Arribo a Puerto Villamil (Isabela) · Bienvenida a Galápagos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Puerto Villamil (Isabela).', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000088', 2, 'Día 2: Experiencia Principal de Trekking en Puerto Villamil (Isabela)', 'Jornada completa de inmersión en Ascenso al Volcán Activo Sierra Negra y Fumarolas de Azufre. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000088', 3, 'Día 3: Experiencia Principal de Trekking en Puerto Villamil (Isabela)', 'Jornada completa de inmersión en Ascenso al Volcán Activo Sierra Negra y Fumarolas de Azufre. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000088', 4, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Galápagos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #89: Spa con Sal Marina de Galápagos y Piedras Volcánicas (Galápagos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000089',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Galápagos%' AND c.nombre ILIKE '%Puerto Ayora%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Galápagos%' LIMIT 1),
    1
  ),
  9, 'Spa con Sal Marina de Galápagos y Piedras Volcánicas', 'galapagos-spa-con-sal-marina-de-galapagos-y-piedras-volcanicas', 3, 2,
  510.00, 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000089', 1, 'Encuentro y Arribo a Puerto Ayora (Santa Cruz) · Bienvenida a Galápagos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Puerto Ayora (Santa Cruz).', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000089', 2, 'Día 2: Experiencia Principal de Bienestar y Spa en Puerto Ayora (Santa Cruz)', 'Jornada completa de inmersión en Spa con Sal Marina de Galápagos y Piedras Volcánicas. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000089', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Galápagos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #90: Agroturismo y Fincas de Conservación en la Parte Alta de Santa Cruz (Galápagos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000090',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Galápagos%' AND c.nombre ILIKE '%Puerto Ayora%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Galápagos%' LIMIT 1),
    1
  ),
  10, 'Agroturismo y Fincas de Conservación en la Parte Alta de Santa Cruz', 'galapagos-agroturismo-y-fincas-de-conservacion-en-la-parte-alta-de-santa-cruz', 4, 3,
  485.00, 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000090', 1, 'Encuentro y Arribo a Puerto Ayora (Santa Cruz) · Bienvenida a Galápagos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Puerto Ayora (Santa Cruz).', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000090', 2, 'Día 2: Experiencia Principal de Turismo Comunitario en Puerto Ayora (Santa Cruz)', 'Jornada completa de inmersión en Agroturismo y Fincas de Conservación en la Parte Alta de Santa Cruz. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000090', 3, 'Día 3: Experiencia Principal de Turismo Comunitario en Puerto Ayora (Santa Cruz)', 'Jornada completa de inmersión en Agroturismo y Fincas de Conservación en la Parte Alta de Santa Cruz. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000090', 4, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Galápagos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #91: Canyoning y Ruta de las 7 Cascadas en Bucay (Guayas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000091',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Guayas%' AND c.nombre ILIKE '%Bucay%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Guayas%' LIMIT 1),
    1
  ),
  1, 'Canyoning y Ruta de las 7 Cascadas en Bucay', 'guayas-canyoning-y-ruta-de-las-7-cascadas-en-bucay', 2, 1,
  125.00, 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000091', 1, 'Encuentro y Arribo a Bucay · Bienvenida a Guayas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Bucay.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000091', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Guayas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #92: Reserva Manglares Churute y Observación de Delfines (Guayas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000092',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Guayas%' AND c.nombre ILIKE '%Naranjal%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Guayas%' LIMIT 1),
    1
  ),
  2, 'Reserva Manglares Churute y Observación de Delfines', 'guayas-reserva-manglares-churute-y-observacion-de-delfines', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000092', 1, 'Encuentro y Arribo a Naranjal · Bienvenida a Guayas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Naranjal.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000092', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Guayas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #93: Sol, Surf y Brisa Marina en General Villamil Playas (Guayas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000093',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Guayas%' AND c.nombre ILIKE '%Playas%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Guayas%' LIMIT 1),
    1
  ),
  3, 'Sol, Surf y Brisa Marina en General Villamil Playas', 'guayas-sol-surf-y-brisa-marina-en-general-villamil-playas', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000093', 1, 'Encuentro y Arribo a Playas · Bienvenida a Guayas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Playas.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000093', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Guayas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #94: Barrio Las Peñas, Cerro Santa Ana y Malecón 2000 (Guayas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000094',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Guayas%' AND c.nombre ILIKE '%Guayaquil%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Guayas%' LIMIT 1),
    1
  ),
  4, 'Barrio Las Peñas, Cerro Santa Ana y Malecón 2000', 'guayas-barrio-las-penas-cerro-santa-ana-y-malecon-2000', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000094', 1, 'Encuentro y Arribo a Guayaquil · Bienvenida a Guayas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Guayaquil.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000094', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Guayas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #95: Velada Romántica a Bordo del Barco Henry Morgan por el Río Guayas (Guayas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000095',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Guayas%' AND c.nombre ILIKE '%Guayaquil%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Guayas%' LIMIT 1),
    1
  ),
  5, 'Velada Romántica a Bordo del Barco Henry Morgan por el Río Guayas', 'guayas-velada-romantica-a-bordo-del-barco-henry-morgan-por-el-rio-guayas', 2, 1,
  155.00, 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000095', 1, 'Encuentro y Arribo a Guayaquil · Bienvenida a Guayas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Guayaquil.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000095', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Guayas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #96: Parque Histórico de Guayaquil y Museo del Cacao (Guayas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000096',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Guayas%' AND c.nombre ILIKE '%Samborondón%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Guayas%' LIMIT 1),
    1
  ),
  6, 'Parque Histórico de Guayaquil y Museo del Cacao', 'guayas-parque-historico-de-guayaquil-y-museo-del-cacao', 2, 1,
  85.00, 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000096', 1, 'Encuentro y Arribo a Samborondón · Bienvenida a Guayas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Samborondón.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000096', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Guayas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #97: Ruta del Cangrejo Rojo de Naranjal y Encebollado Guayaco (Guayas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000097',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Guayas%' AND c.nombre ILIKE '%Naranjal%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Guayas%' LIMIT 1),
    1
  ),
  7, 'Ruta del Cangrejo Rojo de Naranjal y Encebollado Guayaco', 'guayas-ruta-del-cangrejo-rojo-de-naranjal-y-encebollado-guayaco', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000097', 1, 'Encuentro y Arribo a Naranjal · Bienvenida a Guayas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Naranjal.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000097', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Guayas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #98: Senderismo Ecológico en la Cordillera Chongón Colonche (Guayas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000098',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Guayas%' AND c.nombre ILIKE '%Guayaquil%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Guayas%' LIMIT 1),
    1
  ),
  8, 'Senderismo Ecológico en la Cordillera Chongón Colonche', 'guayas-senderismo-ecologico-en-la-cordillera-chongon-colonche', 2, 1,
  100.00, 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000098', 1, 'Encuentro y Arribo a Guayaquil · Bienvenida a Guayas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Guayaquil.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000098', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Guayas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #99: Aguas Termales Sulfurosas y Lodoterapia en Virgen del Cisne Naranjal (Guayas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000099',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Guayas%' AND c.nombre ILIKE '%Naranjal%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Guayas%' LIMIT 1),
    1
  ),
  9, 'Aguas Termales Sulfurosas y Lodoterapia en Virgen del Cisne Naranjal', 'guayas-aguas-termales-sulfurosas-y-lodoterapia-en-virgen-del-cisne-naranjal', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000099', 1, 'Encuentro y Arribo a Naranjal · Bienvenida a Guayas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Naranjal.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000099', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Guayas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #100: Santuario Narcisa de Jesús y Tradición Montuvia en Nobol y Daule (Guayas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000100',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Guayas%' AND c.nombre ILIKE '%Nobol%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Guayas%' LIMIT 1),
    1
  ),
  10, 'Santuario Narcisa de Jesús y Tradición Montuvia en Nobol y Daule', 'guayas-santuario-narcisa-de-jesus-y-tradicion-montuvia-en-nobol-y-daule', 2, 1,
  85.00, 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000100', 1, 'Encuentro y Arribo a Nobol · Bienvenida a Guayas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Nobol.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000100', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Guayas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #101: Kayak y Stand Up Paddle en Laguna de San Pablo (Imbabura)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000101',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Imbabura%' AND c.nombre ILIKE '%Otavalo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Imbabura%' LIMIT 1),
    1
  ),
  1, 'Kayak y Stand Up Paddle en Laguna de San Pablo', 'imbabura-kayak-y-stand-up-paddle-en-laguna-de-san-pablo', 2, 1,
  115.00, 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000101', 1, 'Encuentro y Arribo a Otavalo · Bienvenida a Imbabura', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Otavalo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000101', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Imbabura. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #102: Sendero Sagrado en Cascada de Peguche y Lechero Milenario (Imbabura)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000102',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Imbabura%' AND c.nombre ILIKE '%Otavalo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Imbabura%' LIMIT 1),
    1
  ),
  2, 'Sendero Sagrado en Cascada de Peguche y Lechero Milenario', 'imbabura-sendero-sagrado-en-cascada-de-peguche-y-lechero-milenario', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000102', 1, 'Encuentro y Arribo a Otavalo · Bienvenida a Imbabura', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Otavalo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000102', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Imbabura. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #103: Tranquilidad y Paseo en Barco en la Mística Laguna de Cuicocha (Imbabura)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000103',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Imbabura%' AND c.nombre ILIKE '%Cotacachi%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Imbabura%' LIMIT 1),
    1
  ),
  3, 'Tranquilidad y Paseo en Barco en la Mística Laguna de Cuicocha', 'imbabura-tranquilidad-y-paseo-en-barco-en-la-mistica-laguna-de-cuicocha', 2, 1,
  105.00, 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000103', 1, 'Encuentro y Arribo a Cotacachi · Bienvenida a Imbabura', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Cotacachi.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000103', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Imbabura. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #104: Centro Histórico de la Ciudad Blanca de Ibarra y Ferrocarril (Imbabura)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000104',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Imbabura%' AND c.nombre ILIKE '%Ibarra%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Imbabura%' LIMIT 1),
    1
  ),
  4, 'Centro Histórico de la Ciudad Blanca de Ibarra y Ferrocarril', 'imbabura-centro-historico-de-la-ciudad-blanca-de-ibarra-y-ferrocarril', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000104', 1, 'Encuentro y Arribo a Ibarra · Bienvenida a Imbabura', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Ibarra.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000104', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Imbabura. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #105: Escapada en Hostería Patrimonial con Vistas al Taita Imbabura (Imbabura)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000105',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Imbabura%' AND c.nombre ILIKE '%Ibarra%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Imbabura%' LIMIT 1),
    1
  ),
  5, 'Escapada en Hostería Patrimonial con Vistas al Taita Imbabura', 'imbabura-escapada-en-hosteria-patrimonial-con-vistas-al-taita-imbabura', 2, 1,
  150.00, 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000105', 1, 'Encuentro y Arribo a Ibarra · Bienvenida a Imbabura', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Ibarra.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000105', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Imbabura. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #106: Paseo Familiar en Tren de la Libertad y Valle del Chota (Imbabura)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000106',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Imbabura%' AND c.nombre ILIKE '%Ibarra%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Imbabura%' LIMIT 1),
    1
  ),
  6, 'Paseo Familiar en Tren de la Libertad y Valle del Chota', 'imbabura-paseo-familiar-en-tren-de-la-libertad-y-valle-del-chota', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000106', 1, 'Encuentro y Arribo a Ibarra · Bienvenida a Imbabura', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Ibarra.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000106', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Imbabura. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #107: Helados de Paila Tradicionales de Ibarra, Carnes Coloradas y Cuy (Imbabura)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000107',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Imbabura%' AND c.nombre ILIKE '%Cotacachi%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Imbabura%' LIMIT 1),
    1
  ),
  7, 'Helados de Paila Tradicionales de Ibarra, Carnes Coloradas y Cuy', 'imbabura-helados-de-paila-tradicionales-de-ibarra-carnes-coloradas-y-cuy', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000107', 1, 'Encuentro y Arribo a Cotacachi · Bienvenida a Imbabura', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Cotacachi.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000107', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Imbabura. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #108: Ascenso al Volcán Fuya Fuya y Lagunas Glaciares de Mojanda (Imbabura)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000108',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Imbabura%' AND c.nombre ILIKE '%Otavalo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Imbabura%' LIMIT 1),
    1
  ),
  8, 'Ascenso al Volcán Fuya Fuya y Lagunas Glaciares de Mojanda', 'imbabura-ascenso-al-volcan-fuya-fuya-y-lagunas-glaciares-de-mojanda', 2, 1,
  130.00, 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000108', 1, 'Encuentro y Arribo a Otavalo · Bienvenida a Imbabura', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Otavalo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000108', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Imbabura. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #109: Circuito de Aguas Termales Medicinales en Chachimbiro (Imbabura)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000109',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Imbabura%' AND c.nombre ILIKE '%Urcuquí%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Imbabura%' LIMIT 1),
    1
  ),
  9, 'Circuito de Aguas Termales Medicinales en Chachimbiro', 'imbabura-circuito-de-aguas-termales-medicinales-en-chachimbiro', 2, 1,
  120.00, 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000109', 1, 'Encuentro y Arribo a Urcuquí · Bienvenida a Imbabura', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Urcuquí.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000109', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Imbabura. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #110: Gran Plaza de Ponchos de Otavalo y Tallado en Madera de San Antonio (Imbabura)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000110',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Imbabura%' AND c.nombre ILIKE '%Otavalo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Imbabura%' LIMIT 1),
    1
  ),
  10, 'Gran Plaza de Ponchos de Otavalo y Tallado en Madera de San Antonio', 'imbabura-gran-plaza-de-ponchos-de-otavalo-y-tallado-en-madera-de-san-antonio', 2, 1,
  105.00, 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000110', 1, 'Encuentro y Arribo a Otavalo · Bienvenida a Imbabura', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Otavalo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000110', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Imbabura. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #111: Escalada en la Cumbre del Cerro Mandango en Vilcabamba (Loja)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000111',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Loja%' AND c.nombre ILIKE '%Vilcabamba%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Loja%' LIMIT 1),
    1
  ),
  1, 'Escalada en la Cumbre del Cerro Mandango en Vilcabamba', 'loja-escalada-en-la-cumbre-del-cerro-mandango-en-vilcabamba', 2, 1,
  120.00, 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000111', 1, 'Encuentro y Arribo a Vilcabamba · Bienvenida a Loja', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Vilcabamba.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000111', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Loja. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #112: Reserva de Biósfera Podocarpus y Páramo de Cajanuma (Loja)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000112',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Loja%' AND c.nombre ILIKE '%Loja%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Loja%' LIMIT 1),
    1
  ),
  2, 'Reserva de Biósfera Podocarpus y Páramo de Cajanuma', 'loja-reserva-de-biosfera-podocarpus-y-paramo-de-cajanuma', 3, 2,
  155.00, 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000112', 1, 'Encuentro y Arribo a Loja · Bienvenida a Loja', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Loja.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000112', 2, 'Día 2: Experiencia Principal de Ecoturismo en Loja', 'Jornada completa de inmersión en Reserva de Biósfera Podocarpus y Páramo de Cajanuma. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000112', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Loja. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #113: Descanso Tropical y Piscinas en el Valle de Catamayo (Loja)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000113',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Loja%' AND c.nombre ILIKE '%Catamayo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Loja%' LIMIT 1),
    1
  ),
  3, 'Descanso Tropical y Piscinas en el Valle de Catamayo', 'loja-descanso-tropical-y-piscinas-en-el-valle-de-catamayo', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000113', 1, 'Encuentro y Arribo a Catamayo · Bienvenida a Loja', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Catamayo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000113', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Loja. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #114: Puerta de la Ciudad, Calle Lourdes y Museos de la Capital Musical (Loja)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000114',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Loja%' AND c.nombre ILIKE '%Loja%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Loja%' LIMIT 1),
    1
  ),
  4, 'Puerta de la Ciudad, Calle Lourdes y Museos de la Capital Musical', 'loja-puerta-de-la-ciudad-calle-lourdes-y-museos-de-la-capital-musical', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000114', 1, 'Encuentro y Arribo a Loja · Bienvenida a Loja', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Loja.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000114', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Loja. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #115: Retiro de Pareja en Cabañas Ecológicas del Valle de la Longevidad (Loja)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000115',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Loja%' AND c.nombre ILIKE '%Vilcabamba%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Loja%' LIMIT 1),
    1
  ),
  5, 'Retiro de Pareja en Cabañas Ecológicas del Valle de la Longevidad', 'loja-retiro-de-pareja-en-cabanas-ecologicas-del-valle-de-la-longevidad', 3, 2,
  185.00, 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000115', 1, 'Encuentro y Arribo a Vilcabamba · Bienvenida a Loja', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Vilcabamba.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000115', 2, 'Día 2: Experiencia Principal de Romántico en Vilcabamba', 'Jornada completa de inmersión en Retiro de Pareja en Cabañas Ecológicas del Valle de la Longevidad. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000115', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Loja. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #116: Paseo Familiar por el Santuario del Cisne y Valle del Viento (Loja)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000116',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Loja%' AND c.nombre ILIKE '%Loja%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Loja%' LIMIT 1),
    1
  ),
  6, 'Paseo Familiar por el Santuario del Cisne y Valle del Viento', 'loja-paseo-familiar-por-el-santuario-del-cisne-y-valle-del-viento', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000116', 1, 'Encuentro y Arribo a Loja · Bienvenida a Loja', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Loja.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000116', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Loja. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #117: Cata de Café Arábigo de Especialidad Lojano y Cecina Tradicional (Loja)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000117',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Loja%' AND c.nombre ILIKE '%Catamayo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Loja%' LIMIT 1),
    1
  ),
  7, 'Cata de Café Arábigo de Especialidad Lojano y Cecina Tradicional', 'loja-cata-de-cafe-arabigo-de-especialidad-lojano-y-cecina-tradicional', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000117', 1, 'Encuentro y Arribo a Catamayo · Bienvenida a Loja', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Catamayo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000117', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Loja. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #118: Trekking Transandino a Lagunas del Compadre en Podocarpus (Loja)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000118',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Loja%' AND c.nombre ILIKE '%Loja%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Loja%' LIMIT 1),
    1
  ),
  8, 'Trekking Transandino a Lagunas del Compadre en Podocarpus', 'loja-trekking-transandino-a-lagunas-del-compadre-en-podocarpus', 3, 2,
  175.00, 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000118', 1, 'Encuentro y Arribo a Loja · Bienvenida a Loja', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Loja.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000118', 2, 'Día 2: Experiencia Principal de Trekking en Loja', 'Jornada completa de inmersión en Trekking Transandino a Lagunas del Compadre en Podocarpus. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000118', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Loja. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #119: Terapias Holísticas, Yoga y Baños Desintoxicantes en Vilcabamba (Loja)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000119',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Loja%' AND c.nombre ILIKE '%Vilcabamba%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Loja%' LIMIT 1),
    1
  ),
  9, 'Terapias Holísticas, Yoga y Baños Desintoxicantes en Vilcabamba', 'loja-terapias-holisticas-yoga-y-banos-desintoxicantes-en-vilcabamba', 3, 2,
  160.00, 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000119', 1, 'Encuentro y Arribo a Vilcabamba · Bienvenida a Loja', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Vilcabamba.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000119', 2, 'Día 2: Experiencia Principal de Bienestar y Spa en Vilcabamba', 'Jornada completa de inmersión en Terapias Holísticas, Yoga y Baños Desintoxicantes en Vilcabamba. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000119', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Loja. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #120: Cultura Viva del Pueblo Saraguro, Baños de Purificación y Talleres (Loja)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000120',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Loja%' AND c.nombre ILIKE '%Saraguro%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Loja%' LIMIT 1),
    1
  ),
  10, 'Cultura Viva del Pueblo Saraguro, Baños de Purificación y Talleres', 'loja-cultura-viva-del-pueblo-saraguro-banos-de-purificacion-y-talleres', 2, 1,
  115.00, 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000120', 1, 'Encuentro y Arribo a Saraguro · Bienvenida a Loja', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Saraguro.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000120', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Loja. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #121: Rafting y Tubing en los Rápidos del Río Cristal en Montalvo (Los Ríos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000121',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Los Ríos%' AND c.nombre ILIKE '%Montalvo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Los Ríos%' LIMIT 1),
    1
  ),
  1, 'Rafting y Tubing en los Rápidos del Río Cristal en Montalvo', 'los-rios-rafting-y-tubing-en-los-rapidos-del-rio-cristal-en-montalvo', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000121', 1, 'Encuentro y Arribo a Montalvo · Bienvenida a Los Ríos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Montalvo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000121', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Los Ríos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #122: Humedal Abras de Mantequilla y Observación de Aves Acuáticas (Los Ríos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000122',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Los Ríos%' AND c.nombre ILIKE '%Vinces%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Los Ríos%' LIMIT 1),
    1
  ),
  2, 'Humedal Abras de Mantequilla y Observación de Aves Acuáticas', 'los-rios-humedal-abras-de-mantequilla-y-observacion-de-aves-acuaticas', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000122', 1, 'Encuentro y Arribo a Vinces · Bienvenida a Los Ríos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Vinces.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000122', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Los Ríos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #123: Balneario Fluvial La Playita y Paseo Náutico en Babahoyo (Los Ríos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000123',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Los Ríos%' AND c.nombre ILIKE '%Babahoyo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Los Ríos%' LIMIT 1),
    1
  ),
  3, 'Balneario Fluvial La Playita y Paseo Náutico en Babahoyo', 'los-rios-balneario-fluvial-la-playita-y-paseo-nautico-en-babahoyo', 2, 1,
  80.00, 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000123', 1, 'Encuentro y Arribo a Babahoyo · Bienvenida a Los Ríos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Babahoyo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000123', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Los Ríos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #124: Casas Flotantes Patrimoniales sobre el Río Babahoyo (Los Ríos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000124',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Los Ríos%' AND c.nombre ILIKE '%Babahoyo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Los Ríos%' LIMIT 1),
    1
  ),
  4, 'Casas Flotantes Patrimoniales sobre el Río Babahoyo', 'los-rios-casas-flotantes-patrimoniales-sobre-el-rio-babahoyo', 2, 1,
  85.00, 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000124', 1, 'Encuentro y Arribo a Babahoyo · Bienvenida a Los Ríos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Babahoyo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000124', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Los Ríos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #125: Romance en Hacienda Cacaotera Tradicional de París Chiquito (Los Ríos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000125',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Los Ríos%' AND c.nombre ILIKE '%Vinces%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Los Ríos%' LIMIT 1),
    1
  ),
  5, 'Romance en Hacienda Cacaotera Tradicional de París Chiquito', 'los-rios-romance-en-hacienda-cacaotera-tradicional-de-paris-chiquito', 2, 1,
  135.00, 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000125', 1, 'Encuentro y Arribo a Vinces · Bienvenida a Los Ríos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Vinces.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000125', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Los Ríos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #126: Parque Acuático La Perla y Recreación Campestre en Quevedo (Los Ríos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000126',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Los Ríos%' AND c.nombre ILIKE '%Quevedo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Los Ríos%' LIMIT 1),
    1
  ),
  6, 'Parque Acuático La Perla y Recreación Campestre en Quevedo', 'los-rios-parque-acuatico-la-perla-y-recreacion-campestre-en-quevedo', 2, 1,
  80.00, 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000126', 1, 'Encuentro y Arribo a Quevedo · Bienvenida a Los Ríos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Quevedo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000126', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Los Ríos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #127: Ruta del Cacao Fino de Aroma Nacional y Gastronomía Chino-Montuvia (Los Ríos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000127',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Los Ríos%' AND c.nombre ILIKE '%Quevedo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Los Ríos%' LIMIT 1),
    1
  ),
  7, 'Ruta del Cacao Fino de Aroma Nacional y Gastronomía Chino-Montuvia', 'los-rios-ruta-del-cacao-fino-de-aroma-nacional-y-gastronomia-chino-montuvia', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000127', 1, 'Encuentro y Arribo a Quevedo · Bienvenida a Los Ríos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Quevedo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000127', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Los Ríos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #128: Sendero Agroecológico entre Plantaciones de Banano y Bosques (Los Ríos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000128',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Los Ríos%' AND c.nombre ILIKE '%Ventanas%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Los Ríos%' LIMIT 1),
    1
  ),
  8, 'Sendero Agroecológico entre Plantaciones de Banano y Bosques', 'los-rios-sendero-agroecologico-entre-plantaciones-de-banano-y-bosques', 2, 1,
  85.00, 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000128', 1, 'Encuentro y Arribo a Ventanas · Bienvenida a Los Ríos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Ventanas.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000128', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Los Ríos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #129: Spa Campestre con Chocolaterapia y Aguas de Vertiente (Los Ríos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000129',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Los Ríos%' AND c.nombre ILIKE '%Montalvo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Los Ríos%' LIMIT 1),
    1
  ),
  9, 'Spa Campestre con Chocolaterapia y Aguas de Vertiente', 'los-rios-spa-campestre-con-chocolaterapia-y-aguas-de-vertiente', 2, 1,
  105.00, 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000129', 1, 'Encuentro y Arribo a Montalvo · Bienvenida a Los Ríos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Montalvo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000129', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Los Ríos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #130: Rodeo Montuvio Tradicional, Amorfino y Costumbres Campesinas (Los Ríos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000130',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Los Ríos%' AND c.nombre ILIKE '%Babahoyo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Los Ríos%' LIMIT 1),
    1
  ),
  10, 'Rodeo Montuvio Tradicional, Amorfino y Costumbres Campesinas', 'los-rios-rodeo-montuvio-tradicional-amorfino-y-costumbres-campesinas', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000130', 1, 'Encuentro y Arribo a Babahoyo · Bienvenida a Los Ríos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Babahoyo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000130', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Los Ríos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #131: Parapente sobre el Acantilado de Crucita y Kitesurf (Manabí)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000131',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Manabí%' AND c.nombre ILIKE '%Portoviejo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Manabí%' LIMIT 1),
    1
  ),
  1, 'Parapente sobre el Acantilado de Crucita y Kitesurf', 'manabi-parapente-sobre-el-acantilado-de-crucita-y-kitesurf', 2, 1,
  125.00, 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000131', 1, 'Encuentro y Arribo a Portoviejo · Bienvenida a Manabí', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Portoviejo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000131', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Manabí. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #132: Avistamiento de Ballenas Jorobadas en Parque Nacional Machalilla (Manabí)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000132',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Manabí%' AND c.nombre ILIKE '%Puerto López%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Manabí%' LIMIT 1),
    1
  ),
  2, 'Avistamiento de Ballenas Jorobadas en Parque Nacional Machalilla', 'manabi-avistamiento-de-ballenas-jorobadas-en-parque-nacional-machalilla', 3, 2,
  185.00, 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000132', 1, 'Encuentro y Arribo a Puerto López · Bienvenida a Manabí', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Puerto López.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000132', 2, 'Día 2: Experiencia Principal de Ecoturismo en Puerto López', 'Jornada completa de inmersión en Avistamiento de Ballenas Jorobadas en Parque Nacional Machalilla. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000132', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Manabí. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #133: Arenas Doradas y Aguas Turquesas en Playa Los Frailes (Manabí)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000133',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Manabí%' AND c.nombre ILIKE '%Puerto López%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Manabí%' LIMIT 1),
    1
  ),
  3, 'Arenas Doradas y Aguas Turquesas en Playa Los Frailes', 'manabi-arenas-doradas-y-aguas-turquesas-en-playa-los-frailes', 2, 1,
  120.00, 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000133', 1, 'Encuentro y Arribo a Puerto López · Bienvenida a Manabí', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Puerto López.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000133', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Manabí. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #134: Cuna del Sombrero Fino de Paja Toquilla en Montecristi (Manabí)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000134',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Manabí%' AND c.nombre ILIKE '%Montecristi%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Manabí%' LIMIT 1),
    1
  ),
  4, 'Cuna del Sombrero Fino de Paja Toquilla en Montecristi', 'manabi-cuna-del-sombrero-fino-de-paja-toquilla-en-montecristi', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000134', 1, 'Encuentro y Arribo a Montecristi · Bienvenida a Manabí', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Montecristi.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000134', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Manabí. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #135: Atardeceres Románticos en los Farallones de Canoa y Bahía (Manabí)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000135',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Manabí%' AND c.nombre ILIKE '%Canoa%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Manabí%' LIMIT 1),
    1
  ),
  5, 'Atardeceres Románticos en los Farallones de Canoa y Bahía', 'manabi-atardeceres-romanticos-en-los-farallones-de-canoa-y-bahia', 3, 2,
  175.00, 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000135', 1, 'Encuentro y Arribo a Canoa · Bienvenida a Manabí', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Canoa.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000135', 2, 'Día 2: Experiencia Principal de Romántico en Canoa', 'Jornada completa de inmersión en Atardeceres Románticos en los Farallones de Canoa y Bahía. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000135', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Manabí. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #136: Paseo Familiar en el Malecón Escénico de Manta y Playa El Murciélago (Manabí)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000136',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Manabí%' AND c.nombre ILIKE '%Manta%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Manabí%' LIMIT 1),
    1
  ),
  6, 'Paseo Familiar en el Malecón Escénico de Manta y Playa El Murciélago', 'manabi-paseo-familiar-en-el-malecon-escenico-de-manta-y-playa-el-murcielago', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000136', 1, 'Encuentro y Arribo a Manta · Bienvenida a Manabí', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Manta.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000136', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Manabí. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #137: Ruta Gastronómica del Viche, Ceviche con Maní y Salprieta Manabita (Manabí)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000137',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Manabí%' AND c.nombre ILIKE '%Portoviejo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Manabí%' LIMIT 1),
    1
  ),
  7, 'Ruta Gastronómica del Viche, Ceviche con Maní y Salprieta Manabita', 'manabi-ruta-gastronomica-del-viche-ceviche-con-mani-y-salprieta-manabita', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000137', 1, 'Encuentro y Arribo a Portoviejo · Bienvenida a Manabí', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Portoviejo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000137', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Manabí. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #138: Trekking por la Selva Húmeda de Pacoche y Monos Aulladores (Manabí)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000138',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Manabí%' AND c.nombre ILIKE '%Manta%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Manabí%' LIMIT 1),
    1
  ),
  8, 'Trekking por la Selva Húmeda de Pacoche y Monos Aulladores', 'manabi-trekking-por-la-selva-humeda-de-pacoche-y-monos-aulladores', 2, 1,
  115.00, 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000138', 1, 'Encuentro y Arribo a Manta · Bienvenida a Manabí', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Manta.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000138', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Manabí. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #139: Baños de Lodo Curativo y Masajes Termales en San Vicente (Manabí)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000139',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Manabí%' AND c.nombre ILIKE '%San Vicente%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Manabí%' LIMIT 1),
    1
  ),
  9, 'Baños de Lodo Curativo y Masajes Termales en San Vicente', 'manabi-banos-de-lodo-curativo-y-masajes-termales-en-san-vicente', 2, 1,
  105.00, 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000139', 1, 'Encuentro y Arribo a San Vicente · Bienvenida a Manabí', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de San Vicente.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000139', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Manabí. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #140: Comunidad Ancestral de Agua Blanca y Poza Sulfurosa Sagrada (Manabí)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000140',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Manabí%' AND c.nombre ILIKE '%Puerto López%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Manabí%' LIMIT 1),
    1
  ),
  10, 'Comunidad Ancestral de Agua Blanca y Poza Sulfurosa Sagrada', 'manabi-comunidad-ancestral-de-agua-blanca-y-poza-sulfurosa-sagrada', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000140', 1, 'Encuentro y Arribo a Puerto López · Bienvenida a Manabí', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Puerto López.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000140', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Manabí. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #141: Expedición Extrema a la Cueva de los Tayos (Morona Santiago)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000141',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Morona Santiago%' AND c.nombre ILIKE '%Limón Indanza%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Morona Santiago%' LIMIT 1),
    1
  ),
  1, 'Expedición Extrema a la Cueva de los Tayos', 'morona-santiago-expedicion-extrema-a-la-cueva-de-los-tayos', 4, 3,
  340.00, 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000141', 1, 'Encuentro y Arribo a Limón Indanza · Bienvenida a Morona Santiago', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Limón Indanza.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000141', 2, 'Día 2: Experiencia Principal de Aventura en Limón Indanza', 'Jornada completa de inmersión en Expedición Extrema a la Cueva de los Tayos. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000141', 3, 'Día 3: Experiencia Principal de Aventura en Limón Indanza', 'Jornada completa de inmersión en Expedición Extrema a la Cueva de los Tayos. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000141', 4, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Morona Santiago. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #142: Cascadas Mágicas del Kintia Panki y Bosque Amazónico (Morona Santiago)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000142',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Morona Santiago%' AND c.nombre ILIKE '%Sucúa%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Morona Santiago%' LIMIT 1),
    1
  ),
  2, 'Cascadas Mágicas del Kintia Panki y Bosque Amazónico', 'morona-santiago-cascadas-magicas-del-kintia-panki-y-bosque-amazonico', 2, 1,
  115.00, 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000142', 1, 'Encuentro y Arribo a Sucúa · Bienvenida a Morona Santiago', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Sucúa.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000142', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Morona Santiago. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #143: Laguna de Sardinayacu y Descanso Fluvial en Macas (Morona Santiago)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000143',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Morona Santiago%' AND c.nombre ILIKE '%Macas%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Morona Santiago%' LIMIT 1),
    1
  ),
  3, 'Laguna de Sardinayacu y Descanso Fluvial en Macas', 'morona-santiago-laguna-de-sardinayacu-y-descanso-fluvial-en-macas', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000143', 1, 'Encuentro y Arribo a Macas · Bienvenida a Morona Santiago', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Macas.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000143', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Morona Santiago. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #144: Catedral de la Purísima de Macas y Petroglifos Ancestrales (Morona Santiago)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000144',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Morona Santiago%' AND c.nombre ILIKE '%Macas%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Morona Santiago%' LIMIT 1),
    1
  ),
  4, 'Catedral de la Purísima de Macas y Petroglifos Ancestrales', 'morona-santiago-catedral-de-la-purisima-de-macas-y-petroglifos-ancestrales', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000144', 1, 'Encuentro y Arribo a Macas · Bienvenida a Morona Santiago', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Macas.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000144', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Morona Santiago. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #145: Cabaña Selva Virgen con Vista al Volcán Sangay Activo (Morona Santiago)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000145',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Morona Santiago%' AND c.nombre ILIKE '%Macas%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Morona Santiago%' LIMIT 1),
    1
  ),
  5, 'Cabaña Selva Virgen con Vista al Volcán Sangay Activo', 'morona-santiago-cabana-selva-virgen-con-vista-al-volcan-sangay-activo', 3, 2,
  195.00, 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000145', 1, 'Encuentro y Arribo a Macas · Bienvenida a Morona Santiago', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Macas.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000145', 2, 'Día 2: Experiencia Principal de Romántico en Macas', 'Jornada completa de inmersión en Cabaña Selva Virgen con Vista al Volcán Sangay Activo. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000145', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Morona Santiago. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #146: Parque Ecológico y Balneario Natural del Río Upano (Morona Santiago)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000146',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Morona Santiago%' AND c.nombre ILIKE '%Sucúa%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Morona Santiago%' LIMIT 1),
    1
  ),
  6, 'Parque Ecológico y Balneario Natural del Río Upano', 'morona-santiago-parque-ecologico-y-balneario-natural-del-rio-upano', 2, 1,
  85.00, 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000146', 1, 'Encuentro y Arribo a Sucúa · Bienvenida a Morona Santiago', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Sucúa.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000146', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Morona Santiago. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #147: Degustación de Ayampaco Amazónico de Tilapia y Chicha de Chonta (Morona Santiago)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000147',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Morona Santiago%' AND c.nombre ILIKE '%Macas%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Morona Santiago%' LIMIT 1),
    1
  ),
  7, 'Degustación de Ayampaco Amazónico de Tilapia y Chicha de Chonta', 'morona-santiago-degustacion-de-ayampaco-amazonico-de-tilapia-y-chicha-de-chonta', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000147', 1, 'Encuentro y Arribo a Macas · Bienvenida a Morona Santiago', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Macas.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000147', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Morona Santiago. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #148: Trekking Hacia las Cascadas Sagradas del Río Namakim (Morona Santiago)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000148',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Morona Santiago%' AND c.nombre ILIKE '%Gualaquiza%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Morona Santiago%' LIMIT 1),
    1
  ),
  8, 'Trekking Hacia las Cascadas Sagradas del Río Namakim', 'morona-santiago-trekking-hacia-las-cascadas-sagradas-del-rio-namakim', 2, 1,
  125.00, 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000148', 1, 'Encuentro y Arribo a Gualaquiza · Bienvenida a Morona Santiago', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Gualaquiza.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000148', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Morona Santiago. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #149: Baños de Vapor con Hierbas Medicinales Amazónicas en Sucúa (Morona Santiago)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000149',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Morona Santiago%' AND c.nombre ILIKE '%Sucúa%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Morona Santiago%' LIMIT 1),
    1
  ),
  9, 'Baños de Vapor con Hierbas Medicinales Amazónicas en Sucúa', 'morona-santiago-banos-de-vapor-con-hierbas-medicinales-amazonicas-en-sucua', 2, 1,
  100.00, 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000149', 1, 'Encuentro y Arribo a Sucúa · Bienvenida a Morona Santiago', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Sucúa.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000149', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Morona Santiago. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #150: Convivencia con la Nacionalidad Shuar y Ritos Ancestrales de Fuerza (Morona Santiago)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000150',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Morona Santiago%' AND c.nombre ILIKE '%Sucúa%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Morona Santiago%' LIMIT 1),
    1
  ),
  10, 'Convivencia con la Nacionalidad Shuar y Ritos Ancestrales de Fuerza', 'morona-santiago-convivencia-con-la-nacionalidad-shuar-y-ritos-ancestrales-de-fuerza', 3, 2,
  160.00, 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000150', 1, 'Encuentro y Arribo a Sucúa · Bienvenida a Morona Santiago', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Sucúa.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000150', 2, 'Día 2: Experiencia Principal de Turismo Comunitario en Sucúa', 'Jornada completa de inmersión en Convivencia con la Nacionalidad Shuar y Ritos Ancestrales de Fuerza. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000150', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Morona Santiago. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #151: Rafting Clase IV en Río Jatunyacu y Tubing en Tena (Napo)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000151',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Napo%' AND c.nombre ILIKE '%Tena%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Napo%' LIMIT 1),
    1
  ),
  1, 'Rafting Clase IV en Río Jatunyacu y Tubing en Tena', 'napo-rafting-clase-iv-en-rio-jatunyacu-y-tubing-en-tena', 2, 1,
  135.00, 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000151', 1, 'Encuentro y Arribo a Tena · Bienvenida a Napo', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Tena.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000151', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Napo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #152: Cavernas de Jumandy y Laberintos Subterráneos de Archidona (Napo)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000152',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Napo%' AND c.nombre ILIKE '%Archidona%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Napo%' LIMIT 1),
    1
  ),
  2, 'Cavernas de Jumandy y Laberintos Subterráneos de Archidona', 'napo-cavernas-de-jumandy-y-laberintos-subterraneos-de-archidona', 2, 1,
  115.00, 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000152', 1, 'Encuentro y Arribo a Archidona · Bienvenida a Napo', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Archidona.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000152', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Napo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #153: Playas de Agua Dulce del Río Misahuallí y Monos Capuchinos (Napo)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000153',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Napo%' AND c.nombre ILIKE '%Misahuallí%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Napo%' LIMIT 1),
    1
  ),
  3, 'Playas de Agua Dulce del Río Misahuallí y Monos Capuchinos', 'napo-playas-de-agua-dulce-del-rio-misahualli-y-monos-capuchinos', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000153', 1, 'Encuentro y Arribo a Misahuallí · Bienvenida a Napo', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Misahuallí.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000153', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Napo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #154: Pueblo Patrimonial de Baeza Vieja y Ruta de la Canela (Napo)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000154',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Napo%' AND c.nombre ILIKE '%Baeza%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Napo%' LIMIT 1),
    1
  ),
  4, 'Pueblo Patrimonial de Baeza Vieja y Ruta de la Canela', 'napo-pueblo-patrimonial-de-baeza-vieja-y-ruta-de-la-canela', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000154', 1, 'Encuentro y Arribo a Baeza · Bienvenida a Napo', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Baeza.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000154', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Napo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #155: Domo Romántico en la Reserva Ecológica Cayambe-Coca (Napo)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000155',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Napo%' AND c.nombre ILIKE '%Papallacta%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Napo%' LIMIT 1),
    1
  ),
  5, 'Domo Romántico en la Reserva Ecológica Cayambe-Coca', 'napo-domo-romantico-en-la-reserva-ecologica-cayambe-coca', 2, 1,
  175.00, 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000155', 1, 'Encuentro y Arribo a Papallacta · Bienvenida a Napo', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Papallacta.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000155', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Napo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #156: Visita al Centro de Rescate de Fauna Silvestre amaZOOnico (Napo)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000156',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Napo%' AND c.nombre ILIKE '%Misahuallí%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Napo%' LIMIT 1),
    1
  ),
  6, 'Visita al Centro de Rescate de Fauna Silvestre amaZOOnico', 'napo-visita-al-centro-de-rescate-de-fauna-silvestre-amazoonico', 2, 1,
  105.00, 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000156', 1, 'Encuentro y Arribo a Misahuallí · Bienvenida a Napo', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Misahuallí.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000156', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Napo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #157: Cata de Chocolate Kallari Fino de Aroma y Maito de Carachama (Napo)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000157',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Napo%' AND c.nombre ILIKE '%Tena%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Napo%' LIMIT 1),
    1
  ),
  7, 'Cata de Chocolate Kallari Fino de Aroma y Maito de Carachama', 'napo-cata-de-chocolate-kallari-fino-de-aroma-y-maito-de-carachama', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000157', 1, 'Encuentro y Arribo a Tena · Bienvenida a Napo', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Tena.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000157', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Napo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #158: Trekking a la Cascada San Rafael y Cañón del Quijos (Napo)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000158',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Napo%' AND c.nombre ILIKE '%El Chaco%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Napo%' LIMIT 1),
    1
  ),
  8, 'Trekking a la Cascada San Rafael y Cañón del Quijos', 'napo-trekking-a-la-cascada-san-rafael-y-canon-del-quijos', 2, 1,
  125.00, 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000158', 1, 'Encuentro y Arribo a El Chaco · Bienvenida a Napo', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de El Chaco.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000158', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Napo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #159: Circuito Termal Exclusivo y Spa Andino en Papallacta (Napo)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000159',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Napo%' AND c.nombre ILIKE '%Papallacta%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Napo%' LIMIT 1),
    1
  ),
  9, 'Circuito Termal Exclusivo y Spa Andino en Papallacta', 'napo-circuito-termal-exclusivo-y-spa-andino-en-papallacta', 2, 1,
  155.00, 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000159', 1, 'Encuentro y Arribo a Papallacta · Bienvenida a Napo', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Papallacta.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000159', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Napo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #160: Comunidad Kichwa Shiripuno: Danza, Artesanías y Plantas Medicinales (Napo)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000160',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Napo%' AND c.nombre ILIKE '%Misahuallí%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Napo%' LIMIT 1),
    1
  ),
  10, 'Comunidad Kichwa Shiripuno: Danza, Artesanías y Plantas Medicinales', 'napo-comunidad-kichwa-shiripuno-danza-artesanias-y-plantas-medicinales', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000160', 1, 'Encuentro y Arribo a Misahuallí · Bienvenida a Napo', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Misahuallí.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000160', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Napo. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #161: Expedición en Kayak por Afluentes Profundos del Río Napo (Orellana)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000161',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Orellana%' AND c.nombre ILIKE '%Puerto Francisco de Orellana%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Orellana%' LIMIT 1),
    1
  ),
  1, 'Expedición en Kayak por Afluentes Profundos del Río Napo', 'orellana-expedicion-en-kayak-por-afluentes-profundos-del-rio-napo', 3, 2,
  235.00, 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000161', 1, 'Encuentro y Arribo a Puerto Francisco de Orellana (El Coca) · Bienvenida a Orellana', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Puerto Francisco de Orellana (El Coca).', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000161', 2, 'Día 2: Experiencia Principal de Aventura en Puerto Francisco de Orellana (El Coca)', 'Jornada completa de inmersión en Expedición en Kayak por Afluentes Profundos del Río Napo. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000161', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Orellana. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #162: Torre de Observación del Dosel en la Biósfera del Parque Nacional Yasuní (Orellana)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000162',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Orellana%' AND c.nombre ILIKE '%Parque Nacional Yasuní%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Orellana%' LIMIT 1),
    1
  ),
  2, 'Torre de Observación del Dosel en la Biósfera del Parque Nacional Yasuní', 'orellana-torre-de-observacion-del-dosel-en-la-biosfera-del-parque-nacional-yasuni', 4, 3,
  420.00, 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000162', 1, 'Encuentro y Arribo a Parque Nacional Yasuní · Bienvenida a Orellana', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Parque Nacional Yasuní.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000162', 2, 'Día 2: Experiencia Principal de Ecoturismo en Parque Nacional Yasuní', 'Jornada completa de inmersión en Torre de Observación del Dosel en la Biósfera del Parque Nacional Yasuní. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000162', 3, 'Día 3: Experiencia Principal de Ecoturismo en Parque Nacional Yasuní', 'Jornada completa de inmersión en Torre de Observación del Dosel en la Biósfera del Parque Nacional Yasuní. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000162', 4, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Orellana. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #163: Paseo en Canoa a Motor y Playas Fluviales del Río Payamino (Orellana)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000163',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Orellana%' AND c.nombre ILIKE '%Puerto Francisco de Orellana%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Orellana%' LIMIT 1),
    1
  ),
  3, 'Paseo en Canoa a Motor y Playas Fluviales del Río Payamino', 'orellana-paseo-en-canoa-a-motor-y-playas-fluviales-del-rio-payamino', 2, 1,
  130.00, 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000163', 1, 'Encuentro y Arribo a Puerto Francisco de Orellana (El Coca) · Bienvenida a Orellana', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Puerto Francisco de Orellana (El Coca).', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000163', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Orellana. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #164: Museo Arqueológico MACCO y Culturas Ribereñas de Orellana (Orellana)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000164',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Orellana%' AND c.nombre ILIKE '%Puerto Francisco de Orellana%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Orellana%' LIMIT 1),
    1
  ),
  4, 'Museo Arqueológico MACCO y Culturas Ribereñas de Orellana', 'orellana-museo-arqueologico-macco-y-culturas-riberenas-de-orellana', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000164', 1, 'Encuentro y Arribo a Puerto Francisco de Orellana (El Coca) · Bienvenida a Orellana', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Puerto Francisco de Orellana (El Coca).', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000164', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Orellana. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #165: Ecolodge Flotante en Laguna Añangu para Luna de Miel (Orellana)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000165',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Orellana%' AND c.nombre ILIKE '%Parque Nacional Yasuní%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Orellana%' LIMIT 1),
    1
  ),
  5, 'Ecolodge Flotante en Laguna Añangu para Luna de Miel', 'orellana-ecolodge-flotante-en-laguna-anangu-para-luna-de-miel', 4, 3,
  490.00, 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000165', 1, 'Encuentro y Arribo a Parque Nacional Yasuní · Bienvenida a Orellana', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Parque Nacional Yasuní.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000165', 2, 'Día 2: Experiencia Principal de Romántico en Parque Nacional Yasuní', 'Jornada completa de inmersión en Ecolodge Flotante en Laguna Añangu para Luna de Miel. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000165', 3, 'Día 3: Experiencia Principal de Romántico en Parque Nacional Yasuní', 'Jornada completa de inmersión en Ecolodge Flotante en Laguna Añangu para Luna de Miel. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000165', 4, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Orellana. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #166: Safari de Monos, Guacamayos y Saladeros de Arcilla (Orellana)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000166',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Orellana%' AND c.nombre ILIKE '%Parque Nacional Yasuní%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Orellana%' LIMIT 1),
    1
  ),
  6, 'Safari de Monos, Guacamayos y Saladeros de Arcilla', 'orellana-safari-de-monos-guacamayos-y-saladeros-de-arcilla', 3, 2,
  310.00, 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000166', 1, 'Encuentro y Arribo a Parque Nacional Yasuní · Bienvenida a Orellana', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Parque Nacional Yasuní.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000166', 2, 'Día 2: Experiencia Principal de Familiar en Parque Nacional Yasuní', 'Jornada completa de inmersión en Safari de Monos, Guacamayos y Saladeros de Arcilla. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000166', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Orellana. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #167: Degustación de Gusanos de Chonta (Chontacuro) y Pescado al Vapor (Orellana)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000167',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Orellana%' AND c.nombre ILIKE '%Puerto Francisco de Orellana%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Orellana%' LIMIT 1),
    1
  ),
  7, 'Degustación de Gusanos de Chonta (Chontacuro) y Pescado al Vapor', 'orellana-degustacion-de-gusanos-de-chonta-chontacuro-y-pescado-al-vapor', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000167', 1, 'Encuentro y Arribo a Puerto Francisco de Orellana (El Coca) · Bienvenida a Orellana', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Puerto Francisco de Orellana (El Coca).', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000167', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Orellana. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #168: Trekking Nocturno en la Selva Primaria y Búsqueda de Ranas Cristal (Orellana)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000168',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Orellana%' AND c.nombre ILIKE '%Loreto%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Orellana%' LIMIT 1),
    1
  ),
  8, 'Trekking Nocturno en la Selva Primaria y Búsqueda de Ranas Cristal', 'orellana-trekking-nocturno-en-la-selva-primaria-y-busqueda-de-ranas-cristal', 3, 2,
  185.00, 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000168', 1, 'Encuentro y Arribo a Loreto · Bienvenida a Orellana', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Loreto.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000168', 2, 'Día 2: Experiencia Principal de Trekking en Loreto', 'Jornada completa de inmersión en Trekking Nocturno en la Selva Primaria y Búsqueda de Ranas Cristal. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000168', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Orellana. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #169: Tratamiento de Relajación con Lodo de Río y Esencias Selváticas (Orellana)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000169',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Orellana%' AND c.nombre ILIKE '%Puerto Francisco de Orellana%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Orellana%' LIMIT 1),
    1
  ),
  9, 'Tratamiento de Relajación con Lodo de Río y Esencias Selváticas', 'orellana-tratamiento-de-relajacion-con-lodo-de-rio-y-esencias-selvaticas', 2, 1,
  135.00, 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000169', 1, 'Encuentro y Arribo a Puerto Francisco de Orellana (El Coca) · Bienvenida a Orellana', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Puerto Francisco de Orellana (El Coca).', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000169', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Orellana. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #170: Convivencia con la Nacionalidad Waorani en Territorio Ancestral (Orellana)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000170',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Orellana%' AND c.nombre ILIKE '%Parque Nacional Yasuní%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Orellana%' LIMIT 1),
    1
  ),
  10, 'Convivencia con la Nacionalidad Waorani en Territorio Ancestral', 'orellana-convivencia-con-la-nacionalidad-waorani-en-territorio-ancestral', 4, 3,
  410.00, 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000170', 1, 'Encuentro y Arribo a Parque Nacional Yasuní · Bienvenida a Orellana', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Parque Nacional Yasuní.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000170', 2, 'Día 2: Experiencia Principal de Turismo Comunitario en Parque Nacional Yasuní', 'Jornada completa de inmersión en Convivencia con la Nacionalidad Waorani en Territorio Ancestral. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000170', 3, 'Día 3: Experiencia Principal de Turismo Comunitario en Parque Nacional Yasuní', 'Jornada completa de inmersión en Convivencia con la Nacionalidad Waorani en Territorio Ancestral. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000170', 4, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Orellana. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #171: Salto del Río y Canyoning en la Cascada Hola Vida (Pastaza)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000171',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pastaza%' AND c.nombre ILIKE '%Puyo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pastaza%' LIMIT 1),
    1
  ),
  1, 'Salto del Río y Canyoning en la Cascada Hola Vida', 'pastaza-salto-del-rio-y-canyoning-en-la-cascada-hola-vida', 2, 1,
  125.00, 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000171', 1, 'Encuentro y Arribo a Puyo · Bienvenida a Pastaza', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Puyo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000171', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Pastaza. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #172: Reserva Biológica Yanacocha y Jardín Botánico Las Orquídeas (Pastaza)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000172',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pastaza%' AND c.nombre ILIKE '%Puyo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pastaza%' LIMIT 1),
    1
  ),
  2, 'Reserva Biológica Yanacocha y Jardín Botánico Las Orquídeas', 'pastaza-reserva-biologica-yanacocha-y-jardin-botanico-las-orquideas', 2, 1,
  105.00, 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000172', 1, 'Encuentro y Arribo a Puyo · Bienvenida a Pastaza', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Puyo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000172', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Pastaza. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #173: Paseo Fluvial y Tranquilidad en Laguna de Tarabita Mera (Pastaza)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000173',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pastaza%' AND c.nombre ILIKE '%Mera%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pastaza%' LIMIT 1),
    1
  ),
  3, 'Paseo Fluvial y Tranquilidad en Laguna de Tarabita Mera', 'pastaza-paseo-fluvial-y-tranquilidad-en-laguna-de-tarabita-mera', 2, 1,
  85.00, 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000173', 1, 'Encuentro y Arribo a Mera · Bienvenida a Pastaza', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Mera.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000173', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Pastaza. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #174: Historia de la Aviación Misionera en Shell y Museo Amazónico (Pastaza)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000174',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pastaza%' AND c.nombre ILIKE '%Shell%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pastaza%' LIMIT 1),
    1
  ),
  4, 'Historia de la Aviación Misionera en Shell y Museo Amazónico', 'pastaza-historia-de-la-aviacion-misionera-en-shell-y-museo-amazonico', 2, 1,
  85.00, 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000174', 1, 'Encuentro y Arribo a Shell · Bienvenida a Pastaza', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Shell.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000174', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Pastaza. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #175: Cabaña Nido sobre la Selva con Mirador Indichuris al Ocaso (Pastaza)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000175',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pastaza%' AND c.nombre ILIKE '%Puyo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pastaza%' LIMIT 1),
    1
  ),
  5, 'Cabaña Nido sobre la Selva con Mirador Indichuris al Ocaso', 'pastaza-cabana-nido-sobre-la-selva-con-mirador-indichuris-al-ocaso', 2, 1,
  155.00, 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000175', 1, 'Encuentro y Arribo a Puyo · Bienvenida a Pastaza', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Puyo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000175', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Pastaza. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #176: Paseo en Canoa Familiar y Parque Temático Omaere (Pastaza)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000176',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pastaza%' AND c.nombre ILIKE '%Puyo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pastaza%' LIMIT 1),
    1
  ),
  6, 'Paseo en Canoa Familiar y Parque Temático Omaere', 'pastaza-paseo-en-canoa-familiar-y-parque-tematico-omaere', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000176', 1, 'Encuentro y Arribo a Puyo · Bienvenida a Pastaza', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Puyo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000176', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Pastaza. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #177: Ruta de la Ilex Guayusa, Ceviche Volquetero y Maito de Tilapia (Pastaza)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000177',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pastaza%' AND c.nombre ILIKE '%Puyo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pastaza%' LIMIT 1),
    1
  ),
  7, 'Ruta de la Ilex Guayusa, Ceviche Volquetero y Maito de Tilapia', 'pastaza-ruta-de-la-ilex-guayusa-ceviche-volquetero-y-maito-de-tilapia', 2, 1,
  85.00, 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000177', 1, 'Encuentro y Arribo a Puyo · Bienvenida a Pastaza', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Puyo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000177', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Pastaza. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #178: Trekking a la Selva Virgen de Canelos y Miradores Panorámicos (Pastaza)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000178',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pastaza%' AND c.nombre ILIKE '%Canelos%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pastaza%' LIMIT 1),
    1
  ),
  8, 'Trekking a la Selva Virgen de Canelos y Miradores Panorámicos', 'pastaza-trekking-a-la-selva-virgen-de-canelos-y-miradores-panoramicos', 2, 1,
  120.00, 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000178', 1, 'Encuentro y Arribo a Canelos · Bienvenida a Pastaza', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Canelos.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000178', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Pastaza. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #179: Baños de Bosque (Shinrin-Yoku) y Masajes con Arcilla Amazónica (Pastaza)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000179',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pastaza%' AND c.nombre ILIKE '%Mera%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pastaza%' LIMIT 1),
    1
  ),
  9, 'Baños de Bosque (Shinrin-Yoku) y Masajes con Arcilla Amazónica', 'pastaza-banos-de-bosque-shinrin-yoku-y-masajes-con-arcilla-amazonica', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000179', 1, 'Encuentro y Arribo a Mera · Bienvenida a Pastaza', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Mera.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000179', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Pastaza. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #180: Alfarería Indígena y Tradiciones Kichwa de Canelos (Pastaza)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000180',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pastaza%' AND c.nombre ILIKE '%Canelos%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pastaza%' LIMIT 1),
    1
  ),
  10, 'Alfarería Indígena y Tradiciones Kichwa de Canelos', 'pastaza-alfareria-indigena-y-tradiciones-kichwa-de-canelos', 2, 1,
  100.00, 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000180', 1, 'Encuentro y Arribo a Canelos · Bienvenida a Pastaza', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Canelos.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000180', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Pastaza. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #181: Canopy de 10 Cables y Tubing en el Bosque Protector Mindo (Pichincha)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000181',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pichincha%' AND c.nombre ILIKE '%Mindo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pichincha%' LIMIT 1),
    1
  ),
  1, 'Canopy de 10 Cables y Tubing en el Bosque Protector Mindo', 'pichincha-canopy-de-10-cables-y-tubing-en-el-bosque-protector-mindo', 2, 1,
  125.00, 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000181', 1, 'Encuentro y Arribo a Mindo · Bienvenida a Pichincha', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Mindo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000181', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Pichincha. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #182: Ruta de los Colibríes y Jardín de Mariposas en Mindo Nambillo (Pichincha)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000182',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pichincha%' AND c.nombre ILIKE '%Mindo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pichincha%' LIMIT 1),
    1
  ),
  2, 'Ruta de los Colibríes y Jardín de Mariposas en Mindo Nambillo', 'pichincha-ruta-de-los-colibries-y-jardin-de-mariposas-en-mindo-nambillo', 2, 1,
  115.00, 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000182', 1, 'Encuentro y Arribo a Mindo · Bienvenida a Pichincha', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Mindo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000182', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Pichincha. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #183: Piscinas Naturales y Cascadas Verdes de Pedro Vicente Maldonado (Pichincha)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000183',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pichincha%' AND c.nombre ILIKE '%Pedro Vicente Maldonado%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pichincha%' LIMIT 1),
    1
  ),
  3, 'Piscinas Naturales y Cascadas Verdes de Pedro Vicente Maldonado', 'pichincha-piscinas-naturales-y-cascadas-verdes-de-pedro-vicente-maldonado', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000183', 1, 'Encuentro y Arribo a Pedro Vicente Maldonado · Bienvenida a Pichincha', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Pedro Vicente Maldonado.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000183', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Pichincha. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #184: Quito Colonial, Convento de San Francisco y Mitad del Mundo (Pichincha)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000184',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pichincha%' AND c.nombre ILIKE '%Quito%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pichincha%' LIMIT 1),
    1
  ),
  4, 'Quito Colonial, Convento de San Francisco y Mitad del Mundo', 'pichincha-quito-colonial-convento-de-san-francisco-y-mitad-del-mundo', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000184', 1, 'Encuentro y Arribo a Quito · Bienvenida a Pichincha', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Quito.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000184', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Pichincha. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #185: Glamping Exclusivo con Vistas al Volcán Rucu Pichincha y Fogata (Pichincha)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000185',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pichincha%' AND c.nombre ILIKE '%Quito%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pichincha%' LIMIT 1),
    1
  ),
  5, 'Glamping Exclusivo con Vistas al Volcán Rucu Pichincha y Fogata', 'pichincha-glamping-exclusivo-con-vistas-al-volcan-rucu-pichincha-y-fogata', 2, 1,
  175.00, 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000185', 1, 'Encuentro y Arribo a Quito · Bienvenida a Pichincha', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Quito.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000185', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Pichincha. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #186: Teleférico de Quito, Parque Vulqano y Granja de Machachi (Pichincha)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000186',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pichincha%' AND c.nombre ILIKE '%Quito%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pichincha%' LIMIT 1),
    1
  ),
  6, 'Teleférico de Quito, Parque Vulqano y Granja de Machachi', 'pichincha-teleferico-de-quito-parque-vulqano-y-granja-de-machachi', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000186', 1, 'Encuentro y Arribo a Quito · Bienvenida a Pichincha', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Quito.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000186', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Pichincha. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #187: Ruta de los Bizcochos de Cayambe, Queso de Hoja y Hornado de Sangolquí (Pichincha)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000187',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pichincha%' AND c.nombre ILIKE '%Cayambe%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pichincha%' LIMIT 1),
    1
  ),
  7, 'Ruta de los Bizcochos de Cayambe, Queso de Hoja y Hornado de Sangolquí', 'pichincha-ruta-de-los-bizcochos-de-cayambe-queso-de-hoja-y-hornado-de-sangolqui', 2, 1,
  85.00, 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000187', 1, 'Encuentro y Arribo a Cayambe · Bienvenida a Pichincha', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Cayambe.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000187', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Pichincha. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #188: Ascenso de Aclimatación a las Cumbres del Rucu Pichincha e Ilaló (Pichincha)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000188',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pichincha%' AND c.nombre ILIKE '%Quito%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pichincha%' LIMIT 1),
    1
  ),
  8, 'Ascenso de Aclimatación a las Cumbres del Rucu Pichincha e Ilaló', 'pichincha-ascenso-de-aclimatacion-a-las-cumbres-del-rucu-pichincha-e-ilalo', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000188', 1, 'Encuentro y Arribo a Quito · Bienvenida a Pichincha', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Quito.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000188', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Pichincha. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #189: Spa de Altura con Tratamiento de Chocolate y Sauna Andino (Pichincha)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000189',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pichincha%' AND c.nombre ILIKE '%Quito%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pichincha%' LIMIT 1),
    1
  ),
  9, 'Spa de Altura con Tratamiento de Chocolate y Sauna Andino', 'pichincha-spa-de-altura-con-tratamiento-de-chocolate-y-sauna-andino', 2, 1,
  130.00, 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000189', 1, 'Encuentro y Arribo a Quito · Bienvenida a Pichincha', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Quito.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000189', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Pichincha. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #190: Comunidad Yunguilla: Turismo Sostenible, Mermeladas y Quesos (Pichincha)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000190',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pichincha%' AND c.nombre ILIKE '%Quito%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Pichincha%' LIMIT 1),
    1
  ),
  10, 'Comunidad Yunguilla: Turismo Sostenible, Mermeladas y Quesos', 'pichincha-comunidad-yunguilla-turismo-sostenible-mermeladas-y-quesos', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000190', 1, 'Encuentro y Arribo a Quito · Bienvenida a Pichincha', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Quito.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000190', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Pichincha. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #191: Bautizo de Buceo y Snorkel en el Islote El Pelado de Ayangue (Santa Elena)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000191',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santa Elena%' AND c.nombre ILIKE '%Ayangue%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santa Elena%' LIMIT 1),
    1
  ),
  1, 'Bautizo de Buceo y Snorkel en el Islote El Pelado de Ayangue', 'santa-elena-bautizo-de-buceo-y-snorkel-en-el-islote-el-pelado-de-ayangue', 2, 1,
  145.00, 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000191', 1, 'Encuentro y Arribo a Ayangue · Bienvenida a Santa Elena', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Ayangue.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000191', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Santa Elena. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #192: Avistamiento de Lobos Marinos y Piqueros en La Chocolatera (Santa Elena)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000192',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santa Elena%' AND c.nombre ILIKE '%Salinas%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santa Elena%' LIMIT 1),
    1
  ),
  2, 'Avistamiento de Lobos Marinos y Piqueros en La Chocolatera', 'santa-elena-avistamiento-de-lobos-marinos-y-piqueros-en-la-chocolatera', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000192', 1, 'Encuentro y Arribo a Salinas · Bienvenida a Santa Elena', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Salinas.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000192', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Santa Elena. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #193: Sol, Surf y Relajación Frente al Pacífico en Playa Olón (Santa Elena)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000193',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santa Elena%' AND c.nombre ILIKE '%Olón%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santa Elena%' LIMIT 1),
    1
  ),
  3, 'Sol, Surf y Relajación Frente al Pacífico en Playa Olón', 'santa-elena-sol-surf-y-relajacion-frente-al-pacifico-en-playa-olon', 3, 2,
  140.00, 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000193', 1, 'Encuentro y Arribo a Olón · Bienvenida a Santa Elena', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Olón.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000193', 2, 'Día 2: Experiencia Principal de Playa y Relax en Olón', 'Jornada completa de inmersión en Sol, Surf y Relajación Frente al Pacífico en Playa Olón. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000193', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Santa Elena. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #194: Museo Los Amantes de Sumpa y Catedral de Santa Elena (Santa Elena)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000194',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santa Elena%' AND c.nombre ILIKE '%Santa Elena%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santa Elena%' LIMIT 1),
    1
  ),
  4, 'Museo Los Amantes de Sumpa y Catedral de Santa Elena', 'santa-elena-museo-los-amantes-de-sumpa-y-catedral-de-santa-elena', 2, 1,
  85.00, 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000194', 1, 'Encuentro y Arribo a Santa Elena · Bienvenida a Santa Elena', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Santa Elena.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000194', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Santa Elena. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #195: Suite Frente al Mar en Punta Carnero con Cena al Atardecer (Santa Elena)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000195',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santa Elena%' AND c.nombre ILIKE '%Salinas%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santa Elena%' LIMIT 1),
    1
  ),
  5, 'Suite Frente al Mar en Punta Carnero con Cena al Atardecer', 'santa-elena-suite-frente-al-mar-en-punta-carnero-con-cena-al-atardecer', 3, 2,
  220.00, 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000195', 1, 'Encuentro y Arribo a Salinas · Bienvenida a Santa Elena', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Salinas.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000195', 2, 'Día 2: Experiencia Principal de Romántico en Salinas', 'Jornada completa de inmersión en Suite Frente al Mar en Punta Carnero con Cena al Atardecer. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000195', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Santa Elena. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #196: Paseo Náutico Familiar en Bahía de Salinas y Avistamiento Costero (Santa Elena)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000196',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santa Elena%' AND c.nombre ILIKE '%Salinas%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santa Elena%' LIMIT 1),
    1
  ),
  6, 'Paseo Náutico Familiar en Bahía de Salinas y Avistamiento Costero', 'santa-elena-paseo-nautico-familiar-en-bahia-de-salinas-y-avistamiento-costero', 2, 1,
  105.00, 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000196', 1, 'Encuentro y Arribo a Salinas · Bienvenida a Santa Elena', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Salinas.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000196', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Santa Elena. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #197: Ruta de los Ceviches Playeros, Arroz Marinero y Cazuela (Santa Elena)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000197',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santa Elena%' AND c.nombre ILIKE '%La Libertad%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santa Elena%' LIMIT 1),
    1
  ),
  7, 'Ruta de los Ceviches Playeros, Arroz Marinero y Cazuela', 'santa-elena-ruta-de-los-ceviches-playeros-arroz-marinero-y-cazuela', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000197', 1, 'Encuentro y Arribo a La Libertad · Bienvenida a Santa Elena', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de La Libertad.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000197', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Santa Elena. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #198: Caminata por el Bosque Protector Chongón Colonche en Dos Mangas (Santa Elena)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000198',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santa Elena%' AND c.nombre ILIKE '%Santa Elena%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santa Elena%' LIMIT 1),
    1
  ),
  8, 'Caminata por el Bosque Protector Chongón Colonche en Dos Mangas', 'santa-elena-caminata-por-el-bosque-protector-chongon-colonche-en-dos-mangas', 2, 1,
  100.00, 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000198', 1, 'Encuentro y Arribo a Santa Elena · Bienvenida a Santa Elena', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Santa Elena.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000198', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Santa Elena. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #199: Baños de Lodo Volcánico y Aguas Sulfurosas de San Vicente (Santa Elena)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000199',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santa Elena%' AND c.nombre ILIKE '%Santa Elena%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santa Elena%' LIMIT 1),
    1
  ),
  9, 'Baños de Lodo Volcánico y Aguas Sulfurosas de San Vicente', 'santa-elena-banos-de-lodo-volcanico-y-aguas-sulfurosas-de-san-vicente', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000199', 1, 'Encuentro y Arribo a Santa Elena · Bienvenida a Santa Elena', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Santa Elena.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000199', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Santa Elena. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #200: Talleres de Paja Toquilla y Tagua con Artesanos de Dos Mangas (Santa Elena)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000200',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santa Elena%' AND c.nombre ILIKE '%Montañita%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santa Elena%' LIMIT 1),
    1
  ),
  10, 'Talleres de Paja Toquilla y Tagua con Artesanos de Dos Mangas', 'santa-elena-talleres-de-paja-toquilla-y-tagua-con-artesanos-de-dos-mangas', 2, 1,
  100.00, 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000200', 1, 'Encuentro y Arribo a Montañita · Bienvenida a Santa Elena', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Montañita.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000200', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Santa Elena. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #201: Rafting en los Rápidos del Río Blanco y Salto en Cascada (Santo Domingo de los Tsáchilas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000201',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santo Domingo de los Tsáchilas%' AND c.nombre ILIKE '%Valle Hermoso%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santo Domingo de los Tsáchilas%' LIMIT 1),
    1
  ),
  1, 'Rafting en los Rápidos del Río Blanco y Salto en Cascada', 'santo-domingo-de-los-tsachilas-rafting-en-los-rapidos-del-rio-blanco-y-salto-en-cascada', 2, 1,
  120.00, 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000201', 1, 'Encuentro y Arribo a Valle Hermoso · Bienvenida a Santo Domingo de los Tsáchilas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Valle Hermoso.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000201', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Santo Domingo de los Tsáchilas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #202: Reserva Botánica La Perla y Observación de Tucanes (Santo Domingo de los Tsáchilas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000202',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santo Domingo de los Tsáchilas%' AND c.nombre ILIKE '%Santo Domingo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santo Domingo de los Tsáchilas%' LIMIT 1),
    1
  ),
  2, 'Reserva Botánica La Perla y Observación de Tucanes', 'santo-domingo-de-los-tsachilas-reserva-botanica-la-perla-y-observacion-de-tucanes', 2, 1,
  105.00, 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000202', 1, 'Encuentro y Arribo a Santo Domingo · Bienvenida a Santo Domingo de los Tsáchilas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Santo Domingo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000202', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Santo Domingo de los Tsáchilas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #203: Parque Acuático Tropical y Balnearios de Valle Hermoso (Santo Domingo de los Tsáchilas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000203',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santo Domingo de los Tsáchilas%' AND c.nombre ILIKE '%Valle Hermoso%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santo Domingo de los Tsáchilas%' LIMIT 1),
    1
  ),
  3, 'Parque Acuático Tropical y Balnearios de Valle Hermoso', 'santo-domingo-de-los-tsachilas-parque-acuatico-tropical-y-balnearios-de-valle-hermoso', 2, 1,
  85.00, 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000203', 1, 'Encuentro y Arribo a Valle Hermoso · Bienvenida a Santo Domingo de los Tsáchilas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Valle Hermoso.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000203', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Santo Domingo de los Tsáchilas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #204: Catedral El Buen Pastor y Tradición Melcochera de Alluriquín (Santo Domingo de los Tsáchilas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000204',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santo Domingo de los Tsáchilas%' AND c.nombre ILIKE '%Alluriquín%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santo Domingo de los Tsáchilas%' LIMIT 1),
    1
  ),
  4, 'Catedral El Buen Pastor y Tradición Melcochera de Alluriquín', 'santo-domingo-de-los-tsachilas-catedral-el-buen-pastor-y-tradicion-melcochera-de-alluriquin', 2, 1,
  80.00, 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000204', 1, 'Encuentro y Arribo a Alluriquín · Bienvenida a Santo Domingo de los Tsáchilas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Alluriquín.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000204', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Santo Domingo de los Tsáchilas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #205: Cabaña Romántica Rodeada de Bosque Lluvioso y Cascada Privada (Santo Domingo de los Tsáchilas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000205',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santo Domingo de los Tsáchilas%' AND c.nombre ILIKE '%Santo Domingo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santo Domingo de los Tsáchilas%' LIMIT 1),
    1
  ),
  5, 'Cabaña Romántica Rodeada de Bosque Lluvioso y Cascada Privada', 'santo-domingo-de-los-tsachilas-cabana-romantica-rodeada-de-bosque-lluvioso-y-cascada-privada', 2, 1,
  145.00, 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000205', 1, 'Encuentro y Arribo a Santo Domingo · Bienvenida a Santo Domingo de los Tsáchilas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Santo Domingo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000205', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Santo Domingo de los Tsáchilas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #206: Parque de la Juventud y Complejo Recreativo Familiar (Santo Domingo de los Tsáchilas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000206',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santo Domingo de los Tsáchilas%' AND c.nombre ILIKE '%Santo Domingo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santo Domingo de los Tsáchilas%' LIMIT 1),
    1
  ),
  6, 'Parque de la Juventud y Complejo Recreativo Familiar', 'santo-domingo-de-los-tsachilas-parque-de-la-juventud-y-complejo-recreativo-familiar', 2, 1,
  80.00, 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000206', 1, 'Encuentro y Arribo a Santo Domingo · Bienvenida a Santo Domingo de los Tsáchilas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Santo Domingo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000206', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Santo Domingo de los Tsáchilas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #207: Ruta de las Parrilladas de Carne Tsáchila y Dulces de Caña (Santo Domingo de los Tsáchilas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000207',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santo Domingo de los Tsáchilas%' AND c.nombre ILIKE '%Alluriquín%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santo Domingo de los Tsáchilas%' LIMIT 1),
    1
  ),
  7, 'Ruta de las Parrilladas de Carne Tsáchila y Dulces de Caña', 'santo-domingo-de-los-tsachilas-ruta-de-las-parrilladas-de-carne-tsachila-y-dulces-de-cana', 2, 1,
  85.00, 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000207', 1, 'Encuentro y Arribo a Alluriquín · Bienvenida a Santo Domingo de los Tsáchilas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Alluriquín.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000207', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Santo Domingo de los Tsáchilas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #208: Trekking por la Selva Subtropical de la Cascada del Amor (Santo Domingo de los Tsáchilas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000208',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santo Domingo de los Tsáchilas%' AND c.nombre ILIKE '%Santo Domingo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santo Domingo de los Tsáchilas%' LIMIT 1),
    1
  ),
  8, 'Trekking por la Selva Subtropical de la Cascada del Amor', 'santo-domingo-de-los-tsachilas-trekking-por-la-selva-subtropical-de-la-cascada-del-amor', 2, 1,
  100.00, 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000208', 1, 'Encuentro y Arribo a Santo Domingo · Bienvenida a Santo Domingo de los Tsáchilas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Santo Domingo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000208', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Santo Domingo de los Tsáchilas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #209: Baños de Purificación con Hierbas Tsáchilas y Arcilla Roja (Santo Domingo de los Tsáchilas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000209',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santo Domingo de los Tsáchilas%' AND c.nombre ILIKE '%Santo Domingo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santo Domingo de los Tsáchilas%' LIMIT 1),
    1
  ),
  9, 'Baños de Purificación con Hierbas Tsáchilas y Arcilla Roja', 'santo-domingo-de-los-tsachilas-banos-de-purificacion-con-hierbas-tsachilas-y-arcilla-roja', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000209', 1, 'Encuentro y Arribo a Santo Domingo · Bienvenida a Santo Domingo de los Tsáchilas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Santo Domingo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000209', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Santo Domingo de los Tsáchilas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #210: Vivencia Ancestral en la Comuna Tsáchila Chigüilpe: Achiote y Chamanismo (Santo Domingo de los Tsáchilas)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000210',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santo Domingo de los Tsáchilas%' AND c.nombre ILIKE '%Santo Domingo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Santo Domingo de los Tsáchilas%' LIMIT 1),
    1
  ),
  10, 'Vivencia Ancestral en la Comuna Tsáchila Chigüilpe: Achiote y Chamanismo', 'santo-domingo-de-los-tsachilas-vivencia-ancestral-en-la-comuna-tsachila-chiguilpe-achiote-y-chamanismo', 2, 1,
  115.00, 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000210', 1, 'Encuentro y Arribo a Santo Domingo · Bienvenida a Santo Domingo de los Tsáchilas', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Santo Domingo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000210', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Santo Domingo de los Tsáchilas. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #211: Navegación Nocturna en Búsqueda de Caimanes Negros en Cuyabeno (Sucumbíos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000211',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Sucumbíos%' AND c.nombre ILIKE '%Cuyabeno%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Sucumbíos%' LIMIT 1),
    1
  ),
  1, 'Navegación Nocturna en Búsqueda de Caimanes Negros en Cuyabeno', 'sucumbios-navegacion-nocturna-en-busqueda-de-caimanes-negros-en-cuyabeno', 4, 3,
  340.00, 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000211', 1, 'Encuentro y Arribo a Cuyabeno · Bienvenida a Sucumbíos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Cuyabeno.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000211', 2, 'Día 2: Experiencia Principal de Aventura en Cuyabeno', 'Jornada completa de inmersión en Navegación Nocturna en Búsqueda de Caimanes Negros en Cuyabeno. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000211', 3, 'Día 3: Experiencia Principal de Aventura en Cuyabeno', 'Jornada completa de inmersión en Navegación Nocturna en Búsqueda de Caimanes Negros en Cuyabeno. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000211', 4, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Sucumbíos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #212: Laguna Grande de Cuyabeno y Observación de Delfines Rosados (Sucumbíos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000212',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Sucumbíos%' AND c.nombre ILIKE '%Cuyabeno%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Sucumbíos%' LIMIT 1),
    1
  ),
  2, 'Laguna Grande de Cuyabeno y Observación de Delfines Rosados', 'sucumbios-laguna-grande-de-cuyabeno-y-observacion-de-delfines-rosados', 4, 3,
  380.00, 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000212', 1, 'Encuentro y Arribo a Cuyabeno · Bienvenida a Sucumbíos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Cuyabeno.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000212', 2, 'Día 2: Experiencia Principal de Ecoturismo en Cuyabeno', 'Jornada completa de inmersión en Laguna Grande de Cuyabeno y Observación de Delfines Rosados. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000212', 3, 'Día 3: Experiencia Principal de Ecoturismo en Cuyabeno', 'Jornada completa de inmersión en Laguna Grande de Cuyabeno y Observación de Delfines Rosados. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000212', 4, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Sucumbíos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #213: Descanso Acuático y Atardecer Dorado en Laguna Encantada (Sucumbíos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000213',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Sucumbíos%' AND c.nombre ILIKE '%Nueva Loja%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Sucumbíos%' LIMIT 1),
    1
  ),
  3, 'Descanso Acuático y Atardecer Dorado en Laguna Encantada', 'sucumbios-descanso-acuatico-y-atardecer-dorado-en-laguna-encantada', 2, 1,
  105.00, 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000213', 1, 'Encuentro y Arribo a Nueva Loja (Lago Agrio) · Bienvenida a Sucumbíos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Nueva Loja (Lago Agrio).', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000213', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Sucumbíos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #214: Parque Turístico Nueva Loja y Etnografía de Pueblos Amazónicos (Sucumbíos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000214',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Sucumbíos%' AND c.nombre ILIKE '%Nueva Loja%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Sucumbíos%' LIMIT 1),
    1
  ),
  4, 'Parque Turístico Nueva Loja y Etnografía de Pueblos Amazónicos', 'sucumbios-parque-turistico-nueva-loja-y-etnografia-de-pueblos-amazonicos', 2, 1,
  85.00, 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000214', 1, 'Encuentro y Arribo a Nueva Loja (Lago Agrio) · Bienvenida a Sucumbíos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Nueva Loja (Lago Agrio).', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000214', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Sucumbíos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #215: Ecolodge Privado en la Reserva Cuyabeno con Terraza Fluvial (Sucumbíos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000215',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Sucumbíos%' AND c.nombre ILIKE '%Cuyabeno%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Sucumbíos%' LIMIT 1),
    1
  ),
  5, 'Ecolodge Privado en la Reserva Cuyabeno con Terraza Fluvial', 'sucumbios-ecolodge-privado-en-la-reserva-cuyabeno-con-terraza-fluvial', 4, 3,
  420.00, 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000215', 1, 'Encuentro y Arribo a Cuyabeno · Bienvenida a Sucumbíos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Cuyabeno.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000215', 2, 'Día 2: Experiencia Principal de Romántico en Cuyabeno', 'Jornada completa de inmersión en Ecolodge Privado en la Reserva Cuyabeno con Terraza Fluvial. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000215', 3, 'Día 3: Experiencia Principal de Romántico en Cuyabeno', 'Jornada completa de inmersión en Ecolodge Privado en la Reserva Cuyabeno con Terraza Fluvial. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000215', 4, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Sucumbíos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #216: Paseo Familiar en Canoa con Avistamiento de Monos y Aves (Sucumbíos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000216',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Sucumbíos%' AND c.nombre ILIKE '%Cuyabeno%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Sucumbíos%' LIMIT 1),
    1
  ),
  6, 'Paseo Familiar en Canoa con Avistamiento de Monos y Aves', 'sucumbios-paseo-familiar-en-canoa-con-avistamiento-de-monos-y-aves', 3, 2,
  275.00, 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000216', 1, 'Encuentro y Arribo a Cuyabeno · Bienvenida a Sucumbíos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Cuyabeno.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000216', 2, 'Día 2: Experiencia Principal de Familiar en Cuyabeno', 'Jornada completa de inmersión en Paseo Familiar en Canoa con Avistamiento de Monos y Aves. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000216', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Sucumbíos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #217: Ruta del Casabe Ancestral de Yuca y Pescado en Hoja de Bijao (Sucumbíos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000217',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Sucumbíos%' AND c.nombre ILIKE '%Cuyabeno%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Sucumbíos%' LIMIT 1),
    1
  ),
  7, 'Ruta del Casabe Ancestral de Yuca y Pescado en Hoja de Bijao', 'sucumbios-ruta-del-casabe-ancestral-de-yuca-y-pescado-en-hoja-de-bijao', 3, 2,
  195.00, 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000217', 1, 'Encuentro y Arribo a Cuyabeno · Bienvenida a Sucumbíos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Cuyabeno.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000217', 2, 'Día 2: Experiencia Principal de Gastronomía en Cuyabeno', 'Jornada completa de inmersión en Ruta del Casabe Ancestral de Yuca y Pescado en Hoja de Bijao. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000217', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Sucumbíos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #218: Trekking por Senderos del Bosque Inundado del Igapó (Sucumbíos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000218',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Sucumbíos%' AND c.nombre ILIKE '%Cuyabeno%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Sucumbíos%' LIMIT 1),
    1
  ),
  8, 'Trekking por Senderos del Bosque Inundado del Igapó', 'sucumbios-trekking-por-senderos-del-bosque-inundado-del-igapo', 4, 3,
  310.00, 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000218', 1, 'Encuentro y Arribo a Cuyabeno · Bienvenida a Sucumbíos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Cuyabeno.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000218', 2, 'Día 2: Experiencia Principal de Trekking en Cuyabeno', 'Jornada completa de inmersión en Trekking por Senderos del Bosque Inundado del Igapó. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000218', 3, 'Día 3: Experiencia Principal de Trekking en Cuyabeno', 'Jornada completa de inmersión en Trekking por Senderos del Bosque Inundado del Igapó. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000218', 4, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Sucumbíos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #219: Tratamiento de Relajación con Aguas Minerales en Cascales (Sucumbíos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000219',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Sucumbíos%' AND c.nombre ILIKE '%Cascales%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Sucumbíos%' LIMIT 1),
    1
  ),
  9, 'Tratamiento de Relajación con Aguas Minerales en Cascales', 'sucumbios-tratamiento-de-relajacion-con-aguas-minerales-en-cascales', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000219', 1, 'Encuentro y Arribo a Cascales · Bienvenida a Sucumbíos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Cascales.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000219', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Sucumbíos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #220: Comunidad Étnica Siona: Preparación de Casabe y Sabiduría Chamánica (Sucumbíos)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000220',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Sucumbíos%' AND c.nombre ILIKE '%Cuyabeno%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Sucumbíos%' LIMIT 1),
    1
  ),
  10, 'Comunidad Étnica Siona: Preparación de Casabe y Sabiduría Chamánica', 'sucumbios-comunidad-etnica-siona-preparacion-de-casabe-y-sabiduria-chamanica', 4, 3,
  350.00, 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000220', 1, 'Encuentro y Arribo a Cuyabeno · Bienvenida a Sucumbíos', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Cuyabeno.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000220', 2, 'Día 2: Experiencia Principal de Turismo Comunitario en Cuyabeno', 'Jornada completa de inmersión en Comunidad Étnica Siona: Preparación de Casabe y Sabiduría Chamánica. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000220', 3, 'Día 3: Experiencia Principal de Turismo Comunitario en Cuyabeno', 'Jornada completa de inmersión en Comunidad Étnica Siona: Preparación de Casabe y Sabiduría Chamánica. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000220', 4, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Sucumbíos. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #221: Adrenalina Pura: Canyoning, Rafting y Salto del Puente en Baños (Tungurahua)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000221',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Tungurahua%' AND c.nombre ILIKE '%Baños de Agua Santa%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Tungurahua%' LIMIT 1),
    1
  ),
  1, 'Adrenalina Pura: Canyoning, Rafting y Salto del Puente en Baños', 'tungurahua-adrenalina-pura-canyoning-rafting-y-salto-del-puente-en-banos', 3, 2,
  175.00, 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000221', 1, 'Encuentro y Arribo a Baños de Agua Santa · Bienvenida a Tungurahua', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Baños de Agua Santa.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000221', 2, 'Día 2: Experiencia Principal de Aventura en Baños de Agua Santa', 'Jornada completa de inmersión en Adrenalina Pura: Canyoning, Rafting y Salto del Puente en Baños. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000221', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Tungurahua. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #222: Ruta de las Cascadas, Manto de la Novia y Pailón del Diablo (Tungurahua)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000222',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Tungurahua%' AND c.nombre ILIKE '%Baños de Agua Santa%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Tungurahua%' LIMIT 1),
    1
  ),
  2, 'Ruta de las Cascadas, Manto de la Novia y Pailón del Diablo', 'tungurahua-ruta-de-las-cascadas-manto-de-la-novia-y-pailon-del-diablo', 2, 1,
  115.00, 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000222', 1, 'Encuentro y Arribo a Baños de Agua Santa · Bienvenida a Tungurahua', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Baños de Agua Santa.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000222', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Tungurahua. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #223: Valle de la Eterna Primavera, Huertos de Mandarina y Relax en Patate (Tungurahua)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000223',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Tungurahua%' AND c.nombre ILIKE '%Patate%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Tungurahua%' LIMIT 1),
    1
  ),
  3, 'Valle de la Eterna Primavera, Huertos de Mandarina y Relax en Patate', 'tungurahua-valle-de-la-eterna-primavera-huertos-de-mandarina-y-relax-en-patate', 2, 1,
  105.00, 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000223', 1, 'Encuentro y Arribo a Patate · Bienvenida a Tungurahua', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Patate.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000223', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Tungurahua. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #224: Quinta de Juan León Mera, Museo Martínez Holguín y Centro de Ambato (Tungurahua)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000224',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Tungurahua%' AND c.nombre ILIKE '%Ambato%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Tungurahua%' LIMIT 1),
    1
  ),
  4, 'Quinta de Juan León Mera, Museo Martínez Holguín y Centro de Ambato', 'tungurahua-quinta-de-juan-leon-mera-museo-martinez-holguin-y-centro-de-ambato', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000224', 1, 'Encuentro y Arribo a Ambato · Bienvenida a Tungurahua', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Ambato.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000224', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Tungurahua. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #225: Glamping de Lujo con Jacuzzi y Vista al Volcán Tungurahua (Tungurahua)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000225',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Tungurahua%' AND c.nombre ILIKE '%Baños de Agua Santa%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Tungurahua%' LIMIT 1),
    1
  ),
  5, 'Glamping de Lujo con Jacuzzi y Vista al Volcán Tungurahua', 'tungurahua-glamping-de-lujo-con-jacuzzi-y-vista-al-volcan-tungurahua', 2, 1,
  190.00, 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000225', 1, 'Encuentro y Arribo a Baños de Agua Santa · Bienvenida a Tungurahua', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Baños de Agua Santa.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000225', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Tungurahua. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #226: Columpio del Fin del Mundo en Casa del Árbol y Aldea Mágica (Tungurahua)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000226',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Tungurahua%' AND c.nombre ILIKE '%Baños de Agua Santa%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Tungurahua%' LIMIT 1),
    1
  ),
  6, 'Columpio del Fin del Mundo en Casa del Árbol y Aldea Mágica', 'tungurahua-columpio-del-fin-del-mundo-en-casa-del-arbol-y-aldea-magica', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000226', 1, 'Encuentro y Arribo a Baños de Agua Santa · Bienvenida a Tungurahua', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Baños de Agua Santa.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000226', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Tungurahua. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #227: Melcochas de Baños, Llapingachos Ambateños y Dulces de Cevallos (Tungurahua)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000227',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Tungurahua%' AND c.nombre ILIKE '%Ambato%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Tungurahua%' LIMIT 1),
    1
  ),
  7, 'Melcochas de Baños, Llapingachos Ambateños y Dulces de Cevallos', 'tungurahua-melcochas-de-banos-llapingachos-ambatenos-y-dulces-de-cevallos', 2, 1,
  85.00, 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000227', 1, 'Encuentro y Arribo a Ambato · Bienvenida a Tungurahua', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Ambato.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000227', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Tungurahua. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #228: Trekking de Alta Montaña al Refugio del Volcán Tungurahua (Tungurahua)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000228',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Tungurahua%' AND c.nombre ILIKE '%Baños de Agua Santa%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Tungurahua%' LIMIT 1),
    1
  ),
  8, 'Trekking de Alta Montaña al Refugio del Volcán Tungurahua', 'tungurahua-trekking-de-alta-montana-al-refugio-del-volcan-tungurahua', 2, 1,
  135.00, 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000228', 1, 'Encuentro y Arribo a Baños de Agua Santa · Bienvenida a Tungurahua', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Baños de Agua Santa.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000228', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Tungurahua. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #229: Aguas Termales de la Virgen, El Salado y Spa Volcánico (Tungurahua)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000229',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Tungurahua%' AND c.nombre ILIKE '%Baños de Agua Santa%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Tungurahua%' LIMIT 1),
    1
  ),
  9, 'Aguas Termales de la Virgen, El Salado y Spa Volcánico', 'tungurahua-aguas-termales-de-la-virgen-el-salado-y-spa-volcanico', 2, 1,
  110.00, 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000229', 1, 'Encuentro y Arribo a Baños de Agua Santa · Bienvenida a Tungurahua', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Baños de Agua Santa.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000229', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Tungurahua. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #230: Cultura Salasaka: Tejeduría en Telar Ancestral y Diablada Pillareña (Tungurahua)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000230',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Tungurahua%' AND c.nombre ILIKE '%Pelileo%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Tungurahua%' LIMIT 1),
    1
  ),
  10, 'Cultura Salasaka: Tejeduría en Telar Ancestral y Diablada Pillareña', 'tungurahua-cultura-salasaka-tejeduria-en-telar-ancestral-y-diablada-pillarena', 2, 1,
  105.00, 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000230', 1, 'Encuentro y Arribo a Pelileo · Bienvenida a Tungurahua', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Pelileo.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000230', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Tungurahua. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #231: Expedición en Bote Rápido por los Cañones del Río Nangaritza (Zamora Chinchipe)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000231',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Zamora Chinchipe%' AND c.nombre ILIKE '%Nangaritza%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Zamora Chinchipe%' LIMIT 1),
    1
  ),
  1, 'Expedición en Bote Rápido por los Cañones del Río Nangaritza', 'zamora-chinchipe-expedicion-en-bote-rapido-por-los-canones-del-rio-nangaritza', 3, 2,
  210.00, 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000231', 1, 'Encuentro y Arribo a Nangaritza · Bienvenida a Zamora Chinchipe', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Aventura y recorrido de reconocimiento por los alrededores de Nangaritza.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000231', 2, 'Día 2: Experiencia Principal de Aventura en Nangaritza', 'Jornada completa de inmersión en Expedición en Bote Rápido por los Cañones del Río Nangaritza. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000231', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Zamora Chinchipe. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #232: Reserva Podocarpus Sur: Bosque de Palmeras Gigantes y Aves (Zamora Chinchipe)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000232',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Zamora Chinchipe%' AND c.nombre ILIKE '%Zamora%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Zamora Chinchipe%' LIMIT 1),
    1
  ),
  2, 'Reserva Podocarpus Sur: Bosque de Palmeras Gigantes y Aves', 'zamora-chinchipe-reserva-podocarpus-sur-bosque-de-palmeras-gigantes-y-aves', 2, 1,
  120.00, 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000232', 1, 'Encuentro y Arribo a Zamora · Bienvenida a Zamora Chinchipe', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Ecoturismo y recorrido de reconocimiento por los alrededores de Zamora.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000232', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Zamora Chinchipe. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #233: Descanso en las Playas de Arena Blanca del Río Chicaña (Zamora Chinchipe)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000233',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Zamora Chinchipe%' AND c.nombre ILIKE '%Yantzaza%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Zamora Chinchipe%' LIMIT 1),
    1
  ),
  3, 'Descanso en las Playas de Arena Blanca del Río Chicaña', 'zamora-chinchipe-descanso-en-las-playas-de-arena-blanca-del-rio-chicana', 2, 1,
  95.00, 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000233', 1, 'Encuentro y Arribo a Yantzaza · Bienvenida a Zamora Chinchipe', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Playa y Relax y recorrido de reconocimiento por los alrededores de Yantzaza.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000233', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Zamora Chinchipe. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #234: Reloj Floral Gigante de Zamora y Orígenes del Cacao en Palanda (Zamora Chinchipe)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000234',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Zamora Chinchipe%' AND c.nombre ILIKE '%Zamora%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Zamora Chinchipe%' LIMIT 1),
    1
  ),
  4, 'Reloj Floral Gigante de Zamora y Orígenes del Cacao en Palanda', 'zamora-chinchipe-reloj-floral-gigante-de-zamora-y-origenes-del-cacao-en-palanda', 2, 1,
  90.00, 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000234', 1, 'Encuentro y Arribo a Zamora · Bienvenida a Zamora Chinchipe', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Cultural y recorrido de reconocimiento por los alrededores de Zamora.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000234', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Zamora Chinchipe. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #235: Cabaña Romántica Ecológica en el Valle de las Guayabas (Zamora Chinchipe)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000235',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Zamora Chinchipe%' AND c.nombre ILIKE '%Zamora%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Zamora Chinchipe%' LIMIT 1),
    1
  ),
  5, 'Cabaña Romántica Ecológica en el Valle de las Guayabas', 'zamora-chinchipe-cabana-romantica-ecologica-en-el-valle-de-las-guayabas', 2, 1,
  160.00, 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000235', 1, 'Encuentro y Arribo a Zamora · Bienvenida a Zamora Chinchipe', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Romántico y recorrido de reconocimiento por los alrededores de Zamora.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000235', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Zamora Chinchipe. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #236: Parque Lineal y Cascadas de Santa Cleotilde para Toda la Familia (Zamora Chinchipe)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000236',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Zamora Chinchipe%' AND c.nombre ILIKE '%Zamora%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Zamora Chinchipe%' LIMIT 1),
    1
  ),
  6, 'Parque Lineal y Cascadas de Santa Cleotilde para Toda la Familia', 'zamora-chinchipe-parque-lineal-y-cascadas-de-santa-cleotilde-para-toda-la-familia', 2, 1,
  85.00, 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80'], true, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000236', 1, 'Encuentro y Arribo a Zamora · Bienvenida a Zamora Chinchipe', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Familiar y recorrido de reconocimiento por los alrededores de Zamora.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000236', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Zamora Chinchipe. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #237: Ruta Arqueológica del Primer Cacao del Mundo en Mayo Chinchipe (Zamora Chinchipe)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000237',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Zamora Chinchipe%' AND c.nombre ILIKE '%Palanda%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Zamora Chinchipe%' LIMIT 1),
    1
  ),
  7, 'Ruta Arqueológica del Primer Cacao del Mundo en Mayo Chinchipe', 'zamora-chinchipe-ruta-arqueologica-del-primer-cacao-del-mundo-en-mayo-chinchipe', 3, 2,
  145.00, 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000237', 1, 'Encuentro y Arribo a Palanda · Bienvenida a Zamora Chinchipe', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Gastronomía y recorrido de reconocimiento por los alrededores de Palanda.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000237', 2, 'Día 2: Experiencia Principal de Gastronomía en Palanda', 'Jornada completa de inmersión en Ruta Arqueológica del Primer Cacao del Mundo en Mayo Chinchipe. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000237', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Zamora Chinchipe. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #238: Trekking al Laberinto de las Mil Ilusiones y Cueva de los Tayos Sur (Zamora Chinchipe)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000238',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Zamora Chinchipe%' AND c.nombre ILIKE '%Nangaritza%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Zamora Chinchipe%' LIMIT 1),
    1
  ),
  8, 'Trekking al Laberinto de las Mil Ilusiones y Cueva de los Tayos Sur', 'zamora-chinchipe-trekking-al-laberinto-de-las-mil-ilusiones-y-cueva-de-los-tayos-sur', 3, 2,
  180.00, 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000238', 1, 'Encuentro y Arribo a Nangaritza · Bienvenida a Zamora Chinchipe', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Trekking y recorrido de reconocimiento por los alrededores de Nangaritza.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000238', 2, 'Día 2: Experiencia Principal de Trekking en Nangaritza', 'Jornada completa de inmersión en Trekking al Laberinto de las Mil Ilusiones y Cueva de los Tayos Sur. Se visitarán los atractivos naturales y patrimoniales más destacados de la zona con guianza interpretativa especializada, equipamiento completo y paradas estratégicas de hidratación y descanso.', true, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000238', 3, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Zamora Chinchipe. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #239: Hidroterapia Natural en Cascadas Velo de Novia y Chorrera (Zamora Chinchipe)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000239',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Zamora Chinchipe%' AND c.nombre ILIKE '%Zamora%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Zamora Chinchipe%' LIMIT 1),
    1
  ),
  9, 'Hidroterapia Natural en Cascadas Velo de Novia y Chorrera', 'zamora-chinchipe-hidroterapia-natural-en-cascadas-velo-de-novia-y-chorrera', 2, 1,
  105.00, 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000239', 1, 'Encuentro y Arribo a Zamora · Bienvenida a Zamora Chinchipe', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Bienestar y Spa y recorrido de reconocimiento por los alrededores de Zamora.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000239', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Zamora Chinchipe. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

-- Paquete #240: Encuentro con las Comunidades Shuar de Nangaritza y Artesanías (Zamora Chinchipe)
INSERT INTO paquetes (
  id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
  precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES (
  'a0000000-0000-0000-0000-000000000240',
  COALESCE(
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Zamora Chinchipe%' AND c.nombre ILIKE '%Nangaritza%' LIMIT 1),
    (SELECT d.id FROM destinos d JOIN ciudades c ON d.ciudad_id = c.id JOIN provincias pr ON c.provincia_id = pr.id WHERE pr.nombre ILIKE '%Zamora Chinchipe%' LIMIT 1),
    1
  ),
  10, 'Encuentro con las Comunidades Shuar de Nangaritza y Artesanías', 'zamora-chinchipe-encuentro-con-las-comunidades-shuar-de-nangaritza-y-artesanias', 2, 1,
  130.00, 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80'], false, true
) ON CONFLICT (id) DO UPDATE
SET nombre = EXCLUDED.nombre,
    slug = EXCLUDED.slug,
    destino_id = EXCLUDED.destino_id,
    categoria_id = EXCLUDED.categoria_id,
    duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches,
    precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal,
    imagenes_secundarias = EXCLUDED.imagenes_secundarias;

INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000240', 1, 'Encuentro y Arribo a Nangaritza · Bienvenida a Zamora Chinchipe', 'Recepción de viajeros en el punto de encuentro acordado con el guía oficial. Traslado privado al alojamiento seleccionado, charla técnica sobre el programa de Turismo Comunitario y recorrido de reconocimiento por los alrededores de Nangaritza.', false, true, true)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;
INSERT INTO itinerarios (paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena)
VALUES ('a0000000-0000-0000-0000-000000000240', 2, 'Desayuno Típico, Actividad de Cierre y Retorno', 'Desayuno tradicional con especialidades de Zamora Chinchipe. Tiempo libre para adquirir artesanías y souvenirs locales, sesión fotográfica de despedida y traslado de regreso al punto de origen con asistencia del equipo de Travel Innovation.', true, false, false)
ON CONFLICT (paquete_id, dia_numero) DO UPDATE
SET titulo_actividad = EXCLUDED.titulo_actividad,
    descripcion = EXCLUDED.descripcion,
    incluye_desayuno = EXCLUDED.incluye_desayuno,
    incluye_almuerzo = EXCLUDED.incluye_almuerzo,
    incluye_cena = EXCLUDED.incluye_cena;

