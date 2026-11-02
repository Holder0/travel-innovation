-- =============================================================================
-- PROYECTO ACADÉMICO: E-COMMERCE AGENCIA DE VIAJES (TRAVEL INNOVATION)
-- SCRIPT DML (SEED): 10 REGISTROS DE PRUEBA REALISTAS POR TABLA (100+ EN TOTAL)
-- CONTEXTO: ECUADOR (10 PROVINCIAS, 10 CATEGORÍAS, CATÁLOGO, RESERVAS Y VIAJEROS)
-- =============================================================================

-- =============================================================================
-- TABLA 1: ROLES (10 Registros de perfiles y niveles de acceso RBAC)
-- =============================================================================
INSERT INTO roles (id, nombre, descripcion) VALUES
(1, 'CLIENTE', 'Usuario viajero registrado que puede explorar catálogo, reservar y calificar.'),
(2, 'AGENTE_VENTAS', 'Agente comercial que asesora a clientes y gestiona cotizaciones.'),
(3, 'ADMINISTRADOR', 'Superadministrador con control total de la plataforma y catálogo.'),
(4, 'GUIA_TURISTICO', 'Guía profesional asignado a la conducción de grupos en destino.'),
(5, 'COORDINADOR_OPERACIONES', 'Responsable de logística de transporte, cupos y reservas de campo.'),
(6, 'ATENCION_CLIENTE', 'Operador de soporte y resolución de dudas sobre paquetes.'),
(7, 'AUDITOR_PAGOS', 'Personal encargado de validar comprobantes de transferencias bancarias.'),
(8, 'GESTOR_CATALOGO', 'Editor de contenido turístico, itinerarios y multimedia.'),
(9, 'MARKETING_PROMO', 'Gestor de promociones, descuentos por temporada y campañas.'),
(10, 'SUPERVISOR_CALIDAD', 'Auditor de reseñas y satisfacción de los viajeros post-viaje')
ON CONFLICT (id) DO UPDATE 
SET nombre = EXCLUDED.nombre, descripcion = EXCLUDED.descripcion;

-- Sincronizar secuencia de roles
SELECT setval('roles_id_seq', (SELECT MAX(id) FROM roles));

-- =============================================================================
-- TABLA 2: USUARIOS Y AUTH.USERS (10 Usuarios de Prueba Reales con Clave: Temporal2026!)
-- Contraseña para todos los usuarios de prueba: Temporal2026!
-- =============================================================================
INSERT INTO auth.users (
    id, instance_id, aud, role, email, encrypted_password, email_confirmed_at,
    raw_app_meta_data, raw_user_meta_data, created_at, updated_at
) VALUES
('a0000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'carlos.mendoza@travelinnovation.ec', crypt('Temporal2026!', gen_salt('bf')), NOW(), '{"provider":"email","providers":["email"]}', '{"first_name":"Carlos","last_name":"Mendoza"}', NOW(), NOW()),
('a0000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'maria.salazar@travelinnovation.ec', crypt('Temporal2026!', gen_salt('bf')), NOW(), '{"provider":"email","providers":["email"]}', '{"first_name":"María","last_name":"Salazar"}', NOW(), NOW()),
('a0000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'admin@travelinnovation.ec', crypt('Temporal2026!', gen_salt('bf')), NOW(), '{"provider":"email","providers":["email"]}', '{"first_name":"Administrador","last_name":"General"}', NOW(), NOW()),
('a0000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'juan.perez@email.com', crypt('Temporal2026!', gen_salt('bf')), NOW(), '{"provider":"email","providers":["email"]}', '{"first_name":"Juan","last_name":"Pérez"}', NOW(), NOW()),
('a0000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'ana.torres@email.com', crypt('Temporal2026!', gen_salt('bf')), NOW(), '{"provider":"email","providers":["email"]}', '{"first_name":"Ana","last_name":"Torres"}', NOW(), NOW()),
('a0000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'diego.morales@email.com', crypt('Temporal2026!', gen_salt('bf')), NOW(), '{"provider":"email","providers":["email"]}', '{"first_name":"Diego","last_name":"Morales"}', NOW(), NOW()),
('a0000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'valeria.castro@email.com', crypt('Temporal2026!', gen_salt('bf')), NOW(), '{"provider":"email","providers":["email"]}', '{"first_name":"Valeria","last_name":"Castro"}', NOW(), NOW()),
('a0000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'fernando.alvarez@email.com', crypt('Temporal2026!', gen_salt('bf')), NOW(), '{"provider":"email","providers":["email"]}', '{"first_name":"Fernando","last_name":"Álvarez"}', NOW(), NOW()),
('a0000000-0000-0000-0000-000000000009', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'gabriela.reyes@email.com', crypt('Temporal2026!', gen_salt('bf')), NOW(), '{"provider":"email","providers":["email"]}', '{"first_name":"Gabriela","last_name":"Reyes"}', NOW(), NOW()),
('a0000000-0000-0000-0000-000000000010', '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated', 'rodrigo.paredes@email.com', crypt('Temporal2026!', gen_salt('bf')), NOW(), '{"provider":"email","providers":["email"]}', '{"first_name":"Rodrigo","last_name":"Paredes"}', NOW(), NOW())
ON CONFLICT (id) DO NOTHING;

-- Inserción / Actualización en public.usuarios con datos ecuatorianos completos
INSERT INTO public.usuarios (
    id, rol_id, nombres, apellidos, email, telefono, tipo_documento, numero_identificacion, provincia, ciudad, direccion
) VALUES
('a0000000-0000-0000-0000-000000000001', 1, 'Carlos Andrés', 'Mendoza Viteri', 'carlos.mendoza@travelinnovation.ec', '0998123456', 'CEDULA', '1718293847', 'Pichincha', 'Quito', 'Av. Amazonas N24-102 y La Niña'),
('a0000000-0000-0000-0000-000000000002', 2, 'María Belén', 'Salazar Cruz', 'maria.salazar@travelinnovation.ec', '0987654321', 'CEDULA', '1723456789', 'Pichincha', 'Quito', 'Av. De los Shyris y Naciones Unidas'),
('a0000000-0000-0000-0000-000000000003', 3, 'Santiago David', 'Herrera Noboa', 'admin@travelinnovation.ec', '0991122334', 'CEDULA', '1792345678', 'Pichincha', 'Quito', 'Av. República del Salvador N36-140'),
('a0000000-0000-0000-0000-000000000004', 1, 'Juan Sebastián', 'Pérez Andrade', 'juan.perez@email.com', '0995544332', 'CEDULA', '0928374651', 'Guayas', 'Guayaquil', 'Cdla. Kennedy Norte, Mz 102 Villa 4'),
('a0000000-0000-0000-0000-000000000005', 1, 'Ana Gabriela', 'Torres Benalcázar', 'ana.torres@email.com', '0983322110', 'CEDULA', '0102938475', 'Azuay', 'Cuenca', 'Calle Larga 8-27 y Luis Cordero'),
('a0000000-0000-0000-0000-000000000006', 1, 'Diego Esteban', 'Morales Jaramillo', 'diego.morales@email.com', '0992345678', 'CEDULA', '1802938476', 'Tungurahua', 'Ambato', 'Av. Cevallos y Montalvo'),
('a0000000-0000-0000-0000-000000000007', 1, 'Valeria Sofía', 'Castro Endara', 'valeria.castro@email.com', '0978901234', 'CEDULA', '2001928374', 'Galápagos', 'Puerto Ayora', 'Av. Charles Darwin y Tomás de Berlanga'),
('a0000000-0000-0000-0000-000000000008', 1, 'Fernando Javier', 'Álvarez Zambrano', 'fernando.alvarez@email.com', '0961234567', 'CEDULA', '1309876543', 'Manabí', 'Manta', 'Barrio Umiña, Calle 24 y Malecón'),
('a0000000-0000-0000-0000-000000000009', 1, 'Gabriela Lucía', 'Reyes Rosales', 'gabriela.reyes@email.com', '0984567890', 'CEDULA', '1002345678', 'Imbabura', 'Ibarra', 'Av. Jaime Roldós y Teodoro Gómez'),
('a0000000-0000-0000-0000-000000000010', 1, 'Rodrigo Andrés', 'Paredes Viteri', 'rodrigo.paredes@email.com', '0956789012', 'CEDULA', '2200123456', 'Orellana', 'El Coca', 'Av. 9 de Octubre y Napo')
ON CONFLICT (id) DO UPDATE 
SET rol_id = EXCLUDED.rol_id, nombres = EXCLUDED.nombres, apellidos = EXCLUDED.apellidos,
    telefono = EXCLUDED.telefono, numero_identificacion = EXCLUDED.numero_identificacion,
    provincia = EXCLUDED.provincia, ciudad = EXCLUDED.ciudad, direccion = EXCLUDED.direccion;

-- =============================================================================
-- TABLA 3: CATEGORIAS (10 Categorías Temáticas de Viaje)
-- =============================================================================
INSERT INTO categorias (id, nombre, slug, descripcion, icono, is_active) VALUES
(1, 'Aventura', 'aventura-extremo', 'Trekking, canopy, rafting, puenting y deportes de adrenalina.', 'mountain', true),
(2, 'Ecoturismo', 'ecoturismo-naturaleza', 'Avistamiento de flora y fauna, reservas biológicas y senderismo.', 'compass', true),
(3, 'Playa y Relax', 'playa-relax', 'Descanso frente al mar, surf y navegación costera.', 'umbrella', true),
(4, 'Cultural', 'cultural-historico', 'Centros históricos, museos coloniales y arquitectura patrimonial.', 'landmark', true),
(5, 'Romántico', 'luna-de-miel', 'Escapadas exclusivas para parejas, glamping y atardeceres mágicos.', 'heart', true),
(6, 'Familiar', 'familiar-todo-incluido', 'Experiencias adaptadas para niños, adultos mayores y grupos familiares.', 'users', true),
(7, 'Gastronomía', 'gastronomia-cacao', 'Degustaciones de cocina tradicional andina y chocolate fino de aroma.', 'utensils', true),
(8, 'Trekking', 'trekking-montana', 'Ascensiones a volcanes, páramos andinos y refugios de montaña.', 'flag', true),
(9, 'Bienestar y Spa', 'bienestar-termas', 'Aguas termales curativas, spas medicinales y relajación.', 'sparkles', true),
(10, 'Turismo Comunitario', 'tradiciones-comunitario', 'Convivencia con comunidades indígenas y mercados artesanales.', 'star', true)
ON CONFLICT (id) DO UPDATE 
SET nombre = EXCLUDED.nombre, slug = EXCLUDED.slug, descripcion = EXCLUDED.descripcion, icono = EXCLUDED.icono;

SELECT setval('categorias_id_seq', (SELECT MAX(id) FROM categorias));

-- =============================================================================
-- TABLA 4: DESTINOS (10 Provincias Representativas de las 4 Regiones de Ecuador)
-- =============================================================================
INSERT INTO destinos (id, region, provincia, ciudad, descripcion, clima_sugerido) VALUES
(1, 'Galápagos', 'Galápagos', 'Puerto Ayora (Santa Cruz)', 'Epicentro del archipiélago con tortugas gigantes, manglares y playas de arena blanca.', 'Cálido y templado 22°C - 28°C'),
(2, 'Sierra', 'Pichincha', 'Quito (Centro Histórico y Mindo)', 'Primera ciudad Patrimonio de la Humanidad por la UNESCO y bosques nublados de Mindo.', 'Templado andino 12°C - 20°C'),
(3, 'Sierra', 'Tungurahua', 'Baños de Agua Santa', 'La capital de la aventura en Ecuador, rodeada de cascadas y el volcán Tungurahua.', 'Subtropical templado 16°C - 23°C'),
(4, 'Sierra', 'Cotopaxi', 'Latacunga / P.N. Cotopaxi', 'Hogar del majestuoso volcán Cotopaxi activo y la laguna turquesa del Quilotoa.', 'Frío de páramo 6°C - 15°C'),
(5, 'Amazonía', 'Orellana', 'Puerto Francisco de Orellana (Yasuní)', 'Puerta de entrada a la Reserva de Biósfera Yasuní, una de las más biodiversas del planeta.', 'Húmedo tropical 24°C - 32°C'),
(6, 'Sierra', 'Azuay', 'Cuenca', 'Ciudad señorial famosa por su arquitectura colonial, cúpulas azules y el Parque Nacional Cajas.', 'Templado de montaña 10°C - 19°C'),
(7, 'Costa', 'Santa Elena', 'Montañita y Salinas', 'Playas de renombre internacional para surf, gastronomía marina y vida nocturna.', 'Cálido costero 23°C - 30°C'),
(8, 'Costa', 'Manabí', 'Puerto López (P.N. Machalilla)', 'Playas vírgenes como Los Frailes y punto de avistamiento de ballenas jorobadas.', 'Cálido tropical 24°C - 29°C'),
(9, 'Amazonía', 'Napo', 'Tena y Archidona', 'Capital del rafting y kayak en ríos amazónicos, con cavernas milenarias y cultura Kichwa.', 'Cálido y lluvioso 22°C - 30°C'),
(10, 'Sierra', 'Imbabura', 'Otavalo y Cotacachi', 'Famosa por su mercado artesanal indígena Plaza de Ponchos y la laguna volcánica de Cuicocha.', 'Templado andino 11°C - 21°C')
ON CONFLICT (id) DO UPDATE 
SET region = EXCLUDED.region, provincia = EXCLUDED.provincia, ciudad = EXCLUDED.ciudad,
    descripcion = EXCLUDED.descripcion, clima_sugerido = EXCLUDED.clima_sugerido;

SELECT setval('destinos_id_seq', (SELECT MAX(id) FROM destinos));

-- =============================================================================
-- TABLA 5: PAQUETES (10 Paquetes Turísticos Reales de la Agencia)
-- =============================================================================
INSERT INTO paquetes (
    id, destino_id, categoria_id, nombre, slug, duracion_dias, duracion_noches,
    precio_base, imagen_principal, imagenes_secundarias, destacado, is_active
) VALUES
('b0000000-0000-0000-0000-000000000001', 1, 2, 'Navidad y Fin de Año en Galápagos', 'navidad-galapagos', 4, 3, 685.00, 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80'], true, true),
('b0000000-0000-0000-0000-000000000002', 1, 2, 'Galápagos Santa Cruz Promo Flash', 'galapagos-promo-flash', 4, 3, 499.00, 'https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80'], true, true),
('b0000000-0000-0000-0000-000000000003', 3, 1, 'Aventura Extrema en Baños de Agua Santa', 'banos-aventura-extrema', 3, 2, 175.00, 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80'], true, true),
('b0000000-0000-0000-0000-000000000004', 4, 8, 'Expedición al Volcán Cotopaxi y Quilotoa', 'expedicion-cotopaxi-quilotoa', 2, 1, 145.00, 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80'], false, true),
('b0000000-0000-0000-0000-000000000005', 5, 2, 'Inmersión en la Selva Profunda del Yasuní', 'yasuni-selva-profunda', 4, 3, 420.00, 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1200&q=80'], true, true),
('b0000000-0000-0000-0000-000000000006', 6, 4, 'Cuenca Colonial, Chordeleg y Parque Cajas', 'cuenca-colonial-cajas', 3, 2, 210.00, 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1200&q=80'], false, true),
('b0000000-0000-0000-0000-000000000007', 7, 3, 'Montañita Surf & Playa Los Frailes Relax', 'montanita-los-frailes-relax', 3, 2, 160.00, 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80'], true, true),
('b0000000-0000-0000-0000-000000000008', 2, 2, 'Bosque Nublado y Ruta de Colibríes en Mindo', 'mindo-bosque-nublado', 2, 1, 115.00, 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80'], false, true),
('b0000000-0000-0000-0000-000000000009', 2, 9, 'Termas de Papallacta y Spa Andino', 'papallacta-termas-spa', 2, 1, 130.00, 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80'], false, true),
('b0000000-0000-0000-0000-000000000010', 10, 10, 'Mercado de Otavalo y Laguna de Cuicocha', 'otavalo-cuicocha-cultural', 2, 1, 95.00, 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80', ARRAY['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80', 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80'], false, true)
ON CONFLICT (id) DO UPDATE 
SET nombre = EXCLUDED.nombre, slug = EXCLUDED.slug, duracion_dias = EXCLUDED.duracion_dias,
    duracion_noches = EXCLUDED.duracion_noches, precio_base = EXCLUDED.precio_base,
    imagen_principal = EXCLUDED.imagen_principal;

-- =============================================================================
-- TABLA 6: ITINERARIOS (10 Días de Itinerario Desglosados en Paquetes)
-- =============================================================================
INSERT INTO itinerarios (id, paquete_id, dia_numero, titulo_actividad, descripcion, incluye_desayuno, incluye_almuerzo, incluye_cena) VALUES
(1, 'b0000000-0000-0000-0000-000000000001', 1, 'Arribo a Baltra y Traslado a Santa Cruz', 'Vuelo desde Quito/Guayaquil, cruce por el canal de Itabaca y visita a Los Gemelos en la parte alta.', false, true, true),
(2, 'b0000000-0000-0000-0000-000000000001', 2, 'Estación Charles Darwin y Bahía Tortuga', 'Visita guiada para conocer tortugas gigantes en cautiverio y caminata a Tortuga Bay con kayak.', true, true, false),
(3, 'b0000000-0000-0000-0000-000000000001', 3, 'Tour Navegable a Isla Seymour Norte', 'Observación de fragatas reales, piqueros de patas azules y sesión de snorkel con leones marinos.', true, true, true),
(4, 'b0000000-0000-0000-0000-000000000001', 4, 'Túneles de Lava y Retorno al Continente', 'Recorrido por los tubos de lava volcánica y traslado al aeropuerto de Baltra para vuelo de retorno.', true, false, false),
(5, 'b0000000-0000-0000-0000-000000000003', 1, 'Ruta de las Cascadas y Pailón del Diablo', 'Paseo en chiva tradicional, cruce en tarabita sobre el río Pastaza y caminata al Pailón del Diablo.', false, true, true),
(6, 'b0000000-0000-0000-0000-000000000003', 2, 'Rafting en Río Pastaza y Columpio del Fin del Mundo', 'Descenso en rápidos clase III-IV con guías certificados y visita a la Casa del Árbol.', true, true, false),
(7, 'b0000000-0000-0000-0000-000000000003', 3, 'Aguas Termales de la Virgen y Despedida', 'Baño matutino en las piscinas termales medicinales y compras artesanales de melcochas.', true, false, false),
(8, 'b0000000-0000-0000-0000-000000000004', 1, 'Ascenso al Refugio José Rivas en Cotopaxi', 'Caminata desde el parqueadero a 4.500 msnm hasta el refugio a 4.864 msnm y glaciar.', false, true, true),
(9, 'b0000000-0000-0000-0000-000000000004', 2, 'Cráter y Laguna Volcánica del Quilotoa', 'Descenso al fondo del cráter esmeralda con opción de kayak y retorno a Quito.', true, true, false),
(10, 'b0000000-0000-0000-0000-000000000005', 1, 'Navegación por el Río Napo hacia el Yasuní', 'Traslado en canoa motorizada río abajo y llegada al eco-lodge en plena selva virgen.', false, true, true)
ON CONFLICT (id) DO UPDATE 
SET titulo_actividad = EXCLUDED.titulo_actividad, descripcion = EXCLUDED.descripcion;

SELECT setval('itinerarios_id_seq', (SELECT MAX(id) FROM itinerarios));

-- =============================================================================
-- TABLA 7: PAQUETE_FECHAS (10 Fechas Programadas con Cupos)
-- =============================================================================
INSERT INTO paquete_fechas (id, paquete_id, fecha_inicio, fecha_fin, cupos_totales, cupos_disponibles, precio_salida, is_active) VALUES
(1, 'b0000000-0000-0000-0000-000000000001', '2026-12-23', '2026-12-26', 20, 6, 685.00, true),
(2, 'b0000000-0000-0000-0000-000000000001', '2026-12-30', '2027-01-02', 20, 2, 720.00, true),
(3, 'b0000000-0000-0000-0000-000000000002', '2026-11-15', '2026-11-18', 16, 8, 499.00, true),
(4, 'b0000000-0000-0000-0000-000000000003', '2026-11-20', '2026-11-22', 25, 14, 175.00, true),
(5, 'b0000000-0000-0000-0000-000000000004', '2026-11-28', '2026-11-29', 18, 10, 145.00, true),
(6, 'b0000000-0000-0000-0000-000000000005', '2026-12-05', '2026-12-08', 12, 4, 420.00, true),
(7, 'b0000000-0000-0000-0000-000000000006', '2026-12-10', '2026-12-12', 20, 15, 210.00, true),
(8, 'b0000000-0000-0000-0000-000000000007', '2026-12-18', '2026-12-20', 30, 22, 160.00, true),
(9, 'b0000000-0000-0000-0000-000000000008', '2026-12-22', '2026-12-23', 15, 9, 115.00, true),
(10, 'b0000000-0000-0000-0000-000000000009', '2026-12-28', '2026-12-29', 16, 5, 130.00, true)
ON CONFLICT (id) DO UPDATE 
SET cupos_disponibles = EXCLUDED.cupos_disponibles, precio_salida = EXCLUDED.precio_salida;

SELECT setval('paquete_fechas_id_seq', (SELECT MAX(id) FROM paquete_fechas));

-- =============================================================================
-- TABLA 8: RESERVAS (10 Cabeceras de Reserva / Booking en Diferentes Estados)
-- =============================================================================
INSERT INTO reservas (
    id, codigo_reserva, usuario_id, monto_subtotal, monto_descuento, monto_total,
    estado, metodo_pago, cuotas_info, comprobante_numero, comprobante_url,
    comprobante_subido_at, fecha_limite_pago, created_at
) VALUES
('c0000000-0000-0000-0000-000000000001', 'TI-2026-8K3Q2M', 'a0000000-0000-0000-0000-000000000001', 1370.00, 0.00, 1370.00, 'CONFIRMADA', 'credito', '6 cuotas sin intereses', NULL, NULL, NULL, NOW() + INTERVAL '24 hours', NOW() - INTERVAL '5 days'),
('c0000000-0000-0000-0000-000000000002', 'TI-2026-9F4X1P', 'a0000000-0000-0000-0000-000000000004', 499.00, 0.00, 499.00, 'EN_VERIFICACION', 'transferencia', NULL, 'TR-948201', 'https://supabase.co/storage/comprobantes/comprobante_948201.pdf', NOW() - INTERVAL '2 hours', NOW() + INTERVAL '22 hours', NOW() - INTERVAL '3 hours'),
('c0000000-0000-0000-0000-000000000003', 'TI-2026-2L7M9W', 'a0000000-0000-0000-0000-000000000005', 350.00, 0.00, 350.00, 'COMPRA_REALIZADA', 'debito', '1 pago directo (débito)', NULL, NULL, NULL, NOW() + INTERVAL '24 hours', NOW() - INTERVAL '2 days'),
('c0000000-0000-0000-0000-000000000004', 'TI-2026-4N8Y3Z', 'a0000000-0000-0000-0000-000000000006', 145.00, 0.00, 145.00, 'CONFIRMADA', 'credito', '1 pago corriente', NULL, NULL, NULL, NOW() + INTERVAL '24 hours', NOW() - INTERVAL '1 day'),
('c0000000-0000-0000-0000-000000000005', 'TI-2026-5P9A7B', 'a0000000-0000-0000-0000-000000000007', 840.00, 40.00, 800.00, 'COMPRA_REALIZADA', 'credito', '3 cuotas sin intereses', NULL, NULL, NULL, NOW() + INTERVAL '24 hours', NOW() - INTERVAL '4 days'),
('c0000000-0000-0000-0000-000000000006', 'TI-2026-6Q1C8D', 'a0000000-0000-0000-0000-000000000008', 420.00, 0.00, 420.00, 'PENDIENTE', 'transferencia', NULL, NULL, NULL, NULL, NOW() + INTERVAL '18 hours', NOW() - INTERVAL '6 hours'),
('c0000000-0000-0000-0000-000000000007', 'TI-2026-7R2E9F', 'a0000000-0000-0000-0000-000000000009', 320.00, 0.00, 320.00, 'CONFIRMADA', 'debito', '1 pago directo (débito)', NULL, NULL, NULL, NOW() + INTERVAL '24 hours', NOW() - INTERVAL '3 days'),
('c0000000-0000-0000-0000-000000000008', 'TI-2026-8S3G1H', 'a0000000-0000-0000-0000-000000000010', 230.00, 0.00, 230.00, 'CONFIRMADA', 'credito', '1 pago corriente', NULL, NULL, NULL, NOW() + INTERVAL '24 hours', NOW() - INTERVAL '12 hours'),
('c0000000-0000-0000-0000-000000000009', 'TI-2026-9T4J2K', 'a0000000-0000-0000-0000-000000000004', 260.00, 0.00, 260.00, 'REPROGRAMADA', 'credito', '3 cuotas sin intereses', NULL, NULL, NULL, NOW() + INTERVAL '24 hours', NOW() - INTERVAL '6 days'),
('c0000000-0000-0000-0000-000000000010', 'TI-2026-1U5L3M', 'a0000000-0000-0000-0000-000000000005', 95.00, 0.00, 95.00, 'CANCELADA', 'transferencia', NULL, NULL, NULL, NULL, NOW() - INTERVAL '2 days', NOW() - INTERVAL '7 days')
ON CONFLICT (id) DO UPDATE 
SET estado = EXCLUDED.estado, monto_total = EXCLUDED.monto_total, metodo_pago = EXCLUDED.metodo_pago;

-- =============================================================================
-- TABLA 9: RESERVA_DETALLES (10 Líneas de Ítems Contratados con Precios Auditados)
-- =============================================================================
INSERT INTO reserva_detalles (
    id, reserva_id, paquete_id, paquete_fecha_id, cantidad_personas, precio_unitario_congelado
) VALUES
('d0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000001', 1, 2, 685.00),
('d0000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000002', 'b0000000-0000-0000-0000-000000000002', 3, 1, 499.00),
('d0000000-0000-0000-0000-000000000003', 'c0000000-0000-0000-0000-000000000003', 'b0000000-0000-0000-0000-000000000003', 4, 2, 175.00),
('d0000000-0000-0000-0000-000000000004', 'c0000000-0000-0000-0000-000000000004', 'b0000000-0000-0000-0000-000000000004', 5, 1, 145.00),
('d0000000-0000-0000-0000-000000000005', 'c0000000-0000-0000-0000-000000000005', 'b0000000-0000-0000-0000-000000000005', 6, 2, 420.00),
('d0000000-0000-0000-0000-000000000006', 'c0000000-0000-0000-0000-000000000006', 'b0000000-0000-0000-0000-000000000006', 7, 2, 210.00),
('d0000000-0000-0000-0000-000000000007', 'c0000000-0000-0000-0000-000000000007', 'b0000000-0000-0000-0000-000000000007', 8, 2, 160.00),
('d0000000-0000-0000-0000-000000000008', 'c0000000-0000-0000-0000-000000000008', 'b0000000-0000-0000-0000-000000000008', 9, 2, 115.00),
('d0000000-0000-0000-0000-000000000009', 'c0000000-0000-0000-0000-000000000009', 'b0000000-0000-0000-0000-000000000009', 10, 2, 130.00),
('d0000000-0000-0000-0000-000000000010', 'c0000000-0000-0000-0000-000000000010', 'b0000000-0000-0000-0000-000000000010', 10, 1, 95.00)
ON CONFLICT (id) DO UPDATE 
SET cantidad_personas = EXCLUDED.cantidad_personas, precio_unitario_congelado = EXCLUDED.precio_unitario_congelado;

-- =============================================================================
-- TABLA 10: VIAJEROS (10 Pasajeros Reales Asignados a los Cupos Contratados)
-- =============================================================================
INSERT INTO viajeros (
    id, reserva_detalle_id, numero_slot, nombres_completos, tipo_documento,
    numero_documento, fecha_nacimiento, telefono, email, es_titular, es_menor
) VALUES
('e0000000-0000-0000-0000-000000000001', 'd0000000-0000-0000-0000-000000000001', 1, 'Carlos Andrés Mendoza Viteri', 'CEDULA', '1718293847', '1988-05-14', '0998123456', 'carlos.mendoza@email.com', true, false),
('e0000000-0000-0000-0000-000000000002', 'd0000000-0000-0000-0000-000000000001', 2, 'Patricia Elena Viteri Paredes', 'CEDULA', '1709847261', '1992-09-21', '0991234876', 'paty.viteri@email.com', false, false),
('e0000000-0000-0000-0000-000000000003', 'd0000000-0000-0000-0000-000000000002', 1, 'Juan Sebastián Pérez Andrade', 'CEDULA', '0928374651', '1995-11-03', '0995544332', 'juan.perez@email.com', true, false),
('e0000000-0000-0000-0000-000000000004', 'd0000000-0000-0000-0000-000000000003', 1, 'Ana Gabriela Torres Benalcázar', 'CEDULA', '0102938475', '1990-02-18', '0983322110', 'ana.torres@email.com', true, false),
('e0000000-0000-0000-0000-000000000005', 'd0000000-0000-0000-0000-000000000003', 2, 'Mateo Sebastián Torres Torres', 'CEDULA', '0150928374', '2015-08-10', NULL, NULL, false, true),
('e0000000-0000-0000-0000-000000000006', 'd0000000-0000-0000-0000-000000000004', 1, 'Diego Esteban Morales Jaramillo', 'CEDULA', '1802938476', '1987-12-05', '0992345678', 'diego.morales@email.com', true, false),
('e0000000-0000-0000-0000-000000000007', 'd0000000-0000-0000-0000-000000000005', 1, 'Valeria Sofía Castro Endara', 'CEDULA', '2001928374', '1996-07-25', '0978901234', 'valeria.castro@email.com', true, false),
('e0000000-0000-0000-0000-000000000008', 'd0000000-0000-0000-0000-000000000006', 1, 'Fernando Javier Álvarez Zambrano', 'CEDULA', '1309876543', '1991-04-12', '0961234567', 'fernando.alvarez@email.com', true, false),
('e0000000-0000-0000-0000-000000000009', 'd0000000-0000-0000-0000-000000000007', 1, 'Gabriela Lucía Reyes Rosales', 'CEDULA', '1002345678', '1993-10-30', '0984567890', 'gabriela.reyes@email.com', true, false),
('e0000000-0000-0000-0000-000000000010', 'd0000000-0000-0000-0000-000000000008', 1, 'Rodrigo Andrés Paredes Viteri', 'CEDULA', '2200123456', '1985-01-19', '0956789012', 'rodrigo.paredes@email.com', true, false)
ON CONFLICT (id) DO UPDATE 
SET nombres_completos = EXCLUDED.nombres_completos, numero_documento = EXCLUDED.numero_documento;

-- =============================================================================
-- TABLA 11: RESEÑAS (10 Calificaciones y Comentarios de Paquetes Visitados)
-- =============================================================================
INSERT INTO resenas (
    id, paquete_id, usuario_id, calificacion, titulo, comentario, created_at
) VALUES
('f0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000001', 5, '¡Una Navidad inolvidable en las islas encantadas!', 'La organización fue impecable desde el recibimiento en Baltra. Ver los piqueros de patas azules y nadar con lobos marinos superó todas nuestras expectativas.', NOW() - INTERVAL '3 days'),
('f0000000-0000-0000-0000-000000000002', 'b0000000-0000-0000-0000-000000000002', 'a0000000-0000-0000-0000-000000000004', 5, 'Excelente relación precio-calidad en Santa Cruz', 'Aprovechamos la promoción flash y el hotel estuvo muy cómodo y céntrico en Puerto Ayora. Tortuga Bay es un paraíso.', NOW() - INTERVAL '5 days'),
('f0000000-0000-0000-0000-000000000003', 'b0000000-0000-0000-0000-000000000003', 'a0000000-0000-0000-0000-000000000005', 5, 'Adrenalina pura en Baños', 'El rafting en el río Pastaza con los guías certificados nos dio total seguridad. La cascada Pailón del Diablo es impresionante.', NOW() - INTERVAL '1 day'),
('f0000000-0000-0000-0000-000000000004', 'b0000000-0000-0000-0000-000000000004', 'a0000000-0000-0000-0000-000000000006', 4, 'Desafiante subida al volcán y hermoso Quilotoa', 'Hizo bastante frío en el refugio del Cotopaxi pero la vista del glaciar compensa todo el esfuerzo. Muy recomendado llevar ropa térmica.', NOW() - INTERVAL '2 days'),
('f0000000-0000-0000-0000-000000000005', 'b0000000-0000-0000-0000-000000000005', 'a0000000-0000-0000-0000-000000000007', 5, 'Conexión mágica con la naturaleza en Yasuní', 'Pudimos ver delfines rosados, monos aulladores y una cantidad infinita de aves. Los guías nativos conocen cada rincón de la selva.', NOW() - INTERVAL '4 days'),
('f0000000-0000-0000-0000-000000000006', 'b0000000-0000-0000-0000-000000000006', 'a0000000-0000-0000-0000-000000000008', 5, 'Cuenca es una joya colonial', 'Caminar por el Barranco del Tomebamba y visitar los talleres de sombreros de paja toquilla en Chordeleg fue un paseo cultural de primera.', NOW() - INTERVAL '6 days'),
('f0000000-0000-0000-0000-000000000007', 'b0000000-0000-0000-0000-000000000007', 'a0000000-0000-0000-0000-000000000009', 4, 'Playa Los Frailes es la más limpia de Ecuador', 'Excelente escapada de fin de semana. La arena blanca y el agua cristalina de Los Frailes no le piden nada al Caribe.', NOW() - INTERVAL '10 days'),
('f0000000-0000-0000-0000-000000000008', 'b0000000-0000-0000-0000-000000000010', 'a0000000-0000-0000-0000-000000000001', 5, 'Paz y colibríes en el bosque nublado', 'A solo dos horas de Quito pudimos desconectarnos por completo del ruido de la ciudad. El tour del chocolate artesanal fue delicioso.', NOW() - INTERVAL '12 days'),
('f0000000-0000-0000-0000-000000000009', 'b0000000-0000-0000-0000-000000000009', 'a0000000-0000-0000-0000-000000000004', 5, 'Descanso reparador en Papallacta', 'Las piscinas termales con vista a las montañas andinas son lo máximo para aliviar el estrés. Muy buena gastronomía de trucha fresca.', NOW() - INTERVAL '15 days'),
('f0000000-0000-0000-0000-000000000010', 'b0000000-0000-0000-0000-000000000010', 'a0000000-0000-0000-0000-000000000005', 5, 'Colores y artesanías únicas en Otavalo', 'Compramos cobijas de alpaca preciosas en la Plaza de Ponchos y luego almorzamos frente a la laguna de Cuicocha. Paseo familiar ideal.', NOW() - INTERVAL '20 days')
ON CONFLICT (id) DO UPDATE 
SET calificacion = EXCLUDED.calificacion, titulo = EXCLUDED.titulo, comentario = EXCLUDED.comentario;

