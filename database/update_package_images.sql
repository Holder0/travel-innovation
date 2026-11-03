-- =============================================================================
-- ACTUALIZACIÓN DE IMÁGENES REALES TEMÁTICAS PARA LOS 240 PAQUETES
-- FORMATO: URLs con entrega nativa en WebP (&fm=webp&q=80)
-- =============================================================================
BEGIN;

-- Paquete #1: Canyoning y Rappel en Chorro de Girón (Azuay)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'azuay-canyoning-y-rappel-en-chorro-de-giron' OR nombre = 'Canyoning y Rappel en Chorro de Girón';

-- Paquete #2: Biodiversidad Andina en Parque Nacional Cajas (Azuay)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'azuay-biodiversidad-andina-en-parque-nacional-cajas' OR nombre = 'Biodiversidad Andina en Parque Nacional Cajas';

-- Paquete #3: Descanso y Paseo en Bote en Laguna de Busa (Azuay)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'azuay-descanso-y-paseo-en-bote-en-laguna-de-busa' OR nombre = 'Descanso y Paseo en Bote en Laguna de Busa';

-- Paquete #4: Cuenca Colonial, Museos y Catedral de la Inmaculada (Azuay)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'azuay-cuenca-colonial-museos-y-catedral-de-la-inmaculada' OR nombre = 'Cuenca Colonial, Museos y Catedral de la Inmaculada';

-- Paquete #5: Escapada Romántica en Mirador de Turi y Valle de Yunguilla (Azuay)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'azuay-escapada-romantica-en-mirador-de-turi-y-valle-de-yunguilla' OR nombre = 'Escapada Romántica en Mirador de Turi y Valle de Yunguilla';

-- Paquete #6: Ruta de los Ríos, Zoológico Yurak Allpa y Paute (Azuay)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'azuay-ruta-de-los-rios-zoologico-yurak-allpa-y-paute' OR nombre = 'Ruta de los Ríos, Zoológico Yurak Allpa y Paute';

-- Paquete #7: Ruta del Mote Pillo, Chancho Hornado y Cuy Asado Cuencano (Azuay)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'azuay-ruta-del-mote-pillo-chancho-hornado-y-cuy-asado-cuencano' OR nombre = 'Ruta del Mote Pillo, Chancho Hornado y Cuy Asado Cuencano';

-- Paquete #8: Trekking de Altura por Lagunas Toreadora y Llaviucu (Azuay)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'azuay-trekking-de-altura-por-lagunas-toreadora-y-llaviucu' OR nombre = 'Trekking de Altura por Lagunas Toreadora y Llaviucu';

-- Paquete #9: Circuito Termal y Baños de Lodo en Baños de Cuenca (Azuay)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'azuay-circuito-termal-y-banos-de-lodo-en-banos-de-cuenca' OR nombre = 'Circuito Termal y Baños de Lodo en Baños de Cuenca';

-- Paquete #10: Talleres de Filigrana en Plata y Tejido en Chordeleg y Sígsig (Azuay)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'azuay-talleres-de-filigrana-en-plata-y-tejido-en-chordeleg-y-sigsig' OR nombre = 'Talleres de Filigrana en Plata y Tejido en Chordeleg y Sígsig';

-- Paquete #11: Descenso en Bicicleta de Montaña por el Arenal del Chimborazo (Bolívar)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'bolivar-descenso-en-bicicleta-de-montana-por-el-arenal-del-chimborazo' OR nombre = 'Descenso en Bicicleta de Montaña por el Arenal del Chimborazo';

-- Paquete #12: Reserva de Producción Faunística y Bosque de Polylepis (Bolívar)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'bolivar-reserva-de-produccion-faunistica-y-bosque-de-polylepis' OR nombre = 'Reserva de Producción Faunística y Bosque de Polylepis';

-- Paquete #13: Relax Subtropical y Huertos Frutales en Caluma (Bolívar)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'bolivar-relax-subtropical-y-huertos-frutales-en-caluma' OR nombre = 'Relax Subtropical y Huertos Frutales en Caluma';

-- Paquete #14: Santuario de la Virgen del Huayco y Centro de Guaranda (Bolívar)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'bolivar-santuario-de-la-virgen-del-huayco-y-centro-de-guaranda' OR nombre = 'Santuario de la Virgen del Huayco y Centro de Guaranda';

-- Paquete #15: Glamping en Colinas Andinas y Cumbres del Libertador (Bolívar)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'bolivar-glamping-en-colinas-andinas-y-cumbres-del-libertador' OR nombre = 'Glamping en Colinas Andinas y Cumbres del Libertador';

-- Paquete #16: Complejo Turístico Las Tres Cruces y Cascadas de Echeandía (Bolívar)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'bolivar-complejo-turistico-las-tres-cruces-y-cascadas-de-echeandia' OR nombre = 'Complejo Turístico Las Tres Cruces y Cascadas de Echeandía';

-- Paquete #17: Cata de Quesos de Salinas de Guaranda y Chocolates Finos (Bolívar)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'bolivar-cata-de-quesos-de-salinas-de-guaranda-y-chocolates-finos' OR nombre = 'Cata de Quesos de Salinas de Guaranda y Chocolates Finos';

-- Paquete #18: Trekking al Refugio Hermanos Carrel por la Ruta Bolívar (Bolívar)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'bolivar-trekking-al-refugio-hermanos-carrel-por-la-ruta-bolivar' OR nombre = 'Trekking al Refugio Hermanos Carrel por la Ruta Bolívar';

-- Paquete #19: Spa Andino con Vistas a la Cordillera Occidental (Bolívar)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'bolivar-spa-andino-con-vistas-a-la-cordillera-occidental' OR nombre = 'Spa Andino con Vistas a la Cordillera Occidental';

-- Paquete #20: Experiencia Comunitaria Solidaria en Salinas de Tomabelas (Bolívar)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'bolivar-experiencia-comunitaria-solidaria-en-salinas-de-tomabelas' OR nombre = 'Experiencia Comunitaria Solidaria en Salinas de Tomabelas';

-- Paquete #21: Escalada en Roca y Caving en el Cerro Cojitambo (Cañar)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'canar-escalada-en-roca-y-caving-en-el-cerro-cojitambo' OR nombre = 'Escalada en Roca y Caving en el Cerro Cojitambo';

-- Paquete #22: Sendero Natural en Bosque Protector Dudas Mazar (Cañar)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'canar-sendero-natural-en-bosque-protector-dudas-mazar' OR nombre = 'Sendero Natural en Bosque Protector Dudas Mazar';

-- Paquete #23: Parque Acuático y Balnearios Tropicales de La Troncal (Cañar)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'canar-parque-acuatico-y-balnearios-tropicales-de-la-troncal' OR nombre = 'Parque Acuático y Balnearios Tropicales de La Troncal';

-- Paquete #24: Complejo Arqueológico y Templo del Sol de Ingapirca (Cañar)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'canar-complejo-arqueologico-y-templo-del-sol-de-ingapirca' OR nombre = 'Complejo Arqueológico y Templo del Sol de Ingapirca';

-- Paquete #25: Romance con Vista al Santuario de la Virgen del Rocío (Cañar)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'canar-romance-con-vista-al-santuario-de-la-virgen-del-rocio' OR nombre = 'Romance con Vista al Santuario de la Virgen del Rocío';

-- Paquete #26: Paseo Familiar en la Laguna de Culebrillas y El Tambo (Cañar)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'canar-paseo-familiar-en-la-laguna-de-culebrillas-y-el-tambo' OR nombre = 'Paseo Familiar en la Laguna de Culebrillas y El Tambo';

-- Paquete #27: Tour Gastronómico de Cascaritas de Azogues y Chicha de Jora (Cañar)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'canar-tour-gastronomico-de-cascaritas-de-azogues-y-chicha-de-jora' OR nombre = 'Tour Gastronómico de Cascaritas de Azogues y Chicha de Jora';

-- Paquete #28: Trekking por el Gran Qhapaq Ñan (Camino del Inca) (Cañar)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'canar-trekking-por-el-gran-qhapaq-nan-camino-del-inca' OR nombre = 'Trekking por el Gran Qhapaq Ñan (Camino del Inca)';

-- Paquete #29: Aguas Termales Minerales en Yanayacu y Spa de Montaña (Cañar)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'canar-aguas-termales-minerales-en-yanayacu-y-spa-de-montana' OR nombre = 'Aguas Termales Minerales en Yanayacu y Spa de Montaña';

-- Paquete #30: Tradiciones Cañaris y Tejido de Ponchos en Sisid Anejo (Cañar)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'canar-tradiciones-canaris-y-tejido-de-ponchos-en-sisid-anejo' OR nombre = 'Tradiciones Cañaris y Tejido de Ponchos en Sisid Anejo';

-- Paquete #31: Cicloturismo y Cañonismo en el Valle de Mira (Carchi)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'carchi-cicloturismo-y-canonismo-en-el-valle-de-mira' OR nombre = 'Cicloturismo y Cañonismo en el Valle de Mira';

-- Paquete #32: Reserva Ecológica El Ángel y Bosque de Frailejones Gigantes (Carchi)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'carchi-reserva-ecologica-el-angel-y-bosque-de-frailejones-gigantes' OR nombre = 'Reserva Ecológica El Ángel y Bosque de Frailejones Gigantes';

-- Paquete #33: Tranquilidad y Clima Cálido en los Huertos de Chota Carchi (Carchi)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'carchi-tranquilidad-y-clima-calido-en-los-huertos-de-chota-carchi' OR nombre = 'Tranquilidad y Clima Cálido en los Huertos de Chota Carchi';

-- Paquete #34: Esculturas en Verde del Cementerio Municipal de Tulcán (Carchi)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'carchi-esculturas-en-verde-del-cementerio-municipal-de-tulcan' OR nombre = 'Esculturas en Verde del Cementerio Municipal de Tulcán';

-- Paquete #35: Cabaña Romántica y Laguna Volcánica de El Salado (Carchi)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'carchi-cabana-romantica-y-laguna-volcanica-de-el-salado' OR nombre = 'Cabaña Romántica y Laguna Volcánica de El Salado';

-- Paquete #36: Bosque de los Arrayanes de San Gabriel y Paseo Familiar (Carchi)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'carchi-bosque-de-los-arrayanes-de-san-gabriel-y-paseo-familiar' OR nombre = 'Bosque de los Arrayanes de San Gabriel y Paseo Familiar';

-- Paquete #37: Ruta del Queso Pastuzo, Tardón Mireño y Hornado Pastuso (Carchi)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'carchi-ruta-del-queso-pastuzo-tardon-mireno-y-hornado-pastuso' OR nombre = 'Ruta del Queso Pastuzo, Tardón Mireño y Hornado Pastuso';

-- Paquete #38: Trekking al Volcán Chiles y Lagunas Verdes Azufradas (Carchi)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'carchi-trekking-al-volcan-chiles-y-lagunas-verdes-azufradas' OR nombre = 'Trekking al Volcán Chiles y Lagunas Verdes Azufradas';

-- Paquete #39: Santuario y Baños Termales de la Gruta de la Paz (Carchi)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'carchi-santuario-y-banos-termales-de-la-gruta-de-la-paz' OR nombre = 'Santuario y Baños Termales de la Gruta de la Paz';

-- Paquete #40: Convivencia Pasto y Mitos en la Comuna de La Encañada (Carchi)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'carchi-convivencia-pasto-y-mitos-en-la-comuna-de-la-encanada' OR nombre = 'Convivencia Pasto y Mitos en la Comuna de La Encañada';

-- Paquete #41: Ruta de Ciclismo Extremo Downhill desde el Taita Chimborazo (Chimborazo)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'chimborazo-ruta-de-ciclismo-extremo-downhill-desde-el-taita-chimborazo' OR nombre = 'Ruta de Ciclismo Extremo Downhill desde el Taita Chimborazo';

-- Paquete #42: Avistamiento de Vicuñas Silvestres y Cóndor Andino (Chimborazo)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'chimborazo-avistamiento-de-vicunas-silvestres-y-condor-andino' OR nombre = 'Avistamiento de Vicuñas Silvestres y Cóndor Andino';

-- Paquete #43: Fin de Semana de Campo y Sol en los Valles de Pallatanga (Chimborazo)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'chimborazo-fin-de-semana-de-campo-y-sol-en-los-valles-de-pallatanga' OR nombre = 'Fin de Semana de Campo y Sol en los Valles de Pallatanga';

-- Paquete #44: Ruta de la Nariz del Diablo y Centro Histórico de Alausí (Chimborazo)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'chimborazo-ruta-de-la-nariz-del-diablo-y-centro-historico-de-alausi' OR nombre = 'Ruta de la Nariz del Diablo y Centro Histórico de Alausí';

-- Paquete #45: Glamping Domo Frente al Nevado Chimborazo con Fogata (Chimborazo)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'chimborazo-glamping-domo-frente-al-nevado-chimborazo-con-fogata' OR nombre = 'Glamping Domo Frente al Nevado Chimborazo con Fogata';

-- Paquete #46: Paseo en Bote por Laguna de Colta e Iglesia de Balbanera (Chimborazo)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'chimborazo-paseo-en-bote-por-laguna-de-colta-e-iglesia-de-balbanera' OR nombre = 'Paseo en Bote por Laguna de Colta e Iglesia de Balbanera';

-- Paquete #47: Hornado Riobambeño, Chicha Huevona y Fritada de Guano (Chimborazo)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'chimborazo-hornado-riobambeno-chicha-huevona-y-fritada-de-guano' OR nombre = 'Hornado Riobambeño, Chicha Huevona y Fritada de Guano';

-- Paquete #48: Ascenso de Alta Montaña al Refugio Whymper (5.000 m) (Chimborazo)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'chimborazo-ascenso-de-alta-montana-al-refugio-whymper-5-000-m' OR nombre = 'Ascenso de Alta Montaña al Refugio Whymper (5.000 m)';

-- Paquete #49: Spa de Aguas Termales Volcánicas en Ojo de Fantasma Penipe (Chimborazo)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'chimborazo-spa-de-aguas-termales-volcanicas-en-ojo-de-fantasma-penipe' OR nombre = 'Spa de Aguas Termales Volcánicas en Ojo de Fantasma Penipe';

-- Paquete #50: Feria Indígena Auténtica de Guamote y Tejedores de Alfombras (Chimborazo)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'chimborazo-feria-indigena-autentica-de-guamote-y-tejedores-de-alfombras' OR nombre = 'Feria Indígena Auténtica de Guamote y Tejedores de Alfombras';

-- Paquete #51: Cabalgata y Ciclismo en las Faldas del Volcán Cotopaxi (Cotopaxi)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'cotopaxi-cabalgata-y-ciclismo-en-las-faldas-del-volcan-cotopaxi' OR nombre = 'Cabalgata y Ciclismo en las Faldas del Volcán Cotopaxi';

-- Paquete #52: Laguna de Limpiopungo y Flora del Páramo Andino (Cotopaxi)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'cotopaxi-laguna-de-limpiopungo-y-flora-del-paramo-andino' OR nombre = 'Laguna de Limpiopungo y Flora del Páramo Andino';

-- Paquete #53: Balneario Natural y Cascadas Subtropicales de La Maná (Cotopaxi)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'cotopaxi-balneario-natural-y-cascadas-subtropicales-de-la-mana' OR nombre = 'Balneario Natural y Cascadas Subtropicales de La Maná';

-- Paquete #54: Centro Histórico de Piedra Pómez de Latacunga y Templos (Cotopaxi)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'cotopaxi-centro-historico-de-piedra-pomez-de-latacunga-y-templos' OR nombre = 'Centro Histórico de Piedra Pómez de Latacunga y Templos';

-- Paquete #55: Romance y Cabañas de Madera al Borde del Cráter Quilotoa (Cotopaxi)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'cotopaxi-romance-y-cabanas-de-madera-al-borde-del-crater-quilotoa' OR nombre = 'Romance y Cabañas de Madera al Borde del Cráter Quilotoa';

-- Paquete #56: Ruta de los Helados Tradicionales de Salcedo y Granja Andina (Cotopaxi)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'cotopaxi-ruta-de-los-helados-tradicionales-de-salcedo-y-granja-andina' OR nombre = 'Ruta de los Helados Tradicionales de Salcedo y Granja Andina';

-- Paquete #57: Ruta de las Chugchucaras Latacungueñas y Queso de Hoja (Cotopaxi)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'cotopaxi-ruta-de-las-chugchucaras-latacunguenas-y-queso-de-hoja' OR nombre = 'Ruta de las Chugchucaras Latacungueñas y Queso de Hoja';

-- Paquete #58: Trekking Quilotoa Loop: Sigchos, Isinlivi y Chugchilán (Cotopaxi)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'cotopaxi-trekking-quilotoa-loop-sigchos-isinlivi-y-chugchilan' OR nombre = 'Trekking Quilotoa Loop: Sigchos, Isinlivi y Chugchilán';

-- Paquete #59: Spa con Piedras Calientes Volcánicas en Hostería de Montaña (Cotopaxi)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'cotopaxi-spa-con-piedras-calientes-volcanicas-en-hosteria-de-montana' OR nombre = 'Spa con Piedras Calientes Volcánicas en Hostería de Montaña';

-- Paquete #60: Mercado Ancestral de Saquisilí y Taller de Pintores de Tigua (Cotopaxi)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'cotopaxi-mercado-ancestral-de-saquisili-y-taller-de-pintores-de-tigua' OR nombre = 'Mercado Ancestral de Saquisilí y Taller de Pintores de Tigua';

-- Paquete #61: Espeleología y Minas Coloniales El Sexmo en Zaruma (El Oro)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'el-oro-espeleologia-y-minas-coloniales-el-sexmo-en-zaruma' OR nombre = 'Espeleología y Minas Coloniales El Sexmo en Zaruma';

-- Paquete #62: Reserva Ecológica Arenillas y Bosque Seco Ecuatoriano (El Oro)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'el-oro-reserva-ecologica-arenillas-y-bosque-seco-ecuatoriano' OR nombre = 'Reserva Ecológica Arenillas y Bosque Seco Ecuatoriano';

-- Paquete #63: Descanso en Playa Jambelí y Manglares del Archipiélago (El Oro)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'el-oro-descanso-en-playa-jambeli-y-manglares-del-archipielago' OR nombre = 'Descanso en Playa Jambelí y Manglares del Archipiélago';

-- Paquete #64: Patrimonio de Madera y Balcones Coloniales de Zaruma (El Oro)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'el-oro-patrimonio-de-madera-y-balcones-coloniales-de-zaruma' OR nombre = 'Patrimonio de Madera y Balcones Coloniales de Zaruma';

-- Paquete #65: Cena Romántica en Colinas de Piñas y Café de Altura (El Oro)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'el-oro-cena-romantica-en-colinas-de-pinas-y-cafe-de-altura' OR nombre = 'Cena Romántica en Colinas de Piñas y Café de Altura';

-- Paquete #66: Paseo en Lancha por Puerto Bolívar y Ruta del Camarón (El Oro)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'el-oro-paseo-en-lancha-por-puerto-bolivar-y-ruta-del-camaron' OR nombre = 'Paseo en Lancha por Puerto Bolívar y Ruta del Camarón';

-- Paquete #67: Ruta del Tigrillo Zarumeño, Café Arábigo y Mariscos de Puerto Bolívar (El Oro)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'el-oro-ruta-del-tigrillo-zarumeno-cafe-arabigo-y-mariscos-de-puerto-bolivar' OR nombre = 'Ruta del Tigrillo Zarumeño, Café Arábigo y Mariscos de Puerto Bolívar';

-- Paquete #68: Trekking en Bosque Petrificado de Puyango y Huellas Fósiles (El Oro)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'el-oro-trekking-en-bosque-petrificado-de-puyango-y-huellas-fosiles' OR nombre = 'Trekking en Bosque Petrificado de Puyango y Huellas Fósiles';

-- Paquete #69: Aguas Termominerales y Lodo Curativo de Portovelo (El Oro)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'el-oro-aguas-termominerales-y-lodo-curativo-de-portovelo' OR nombre = 'Aguas Termominerales y Lodo Curativo de Portovelo';

-- Paquete #70: Comunidades Cacaoteras de Pasaje y Dulces de Guayaba (El Oro)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'el-oro-comunidades-cacaoteras-de-pasaje-y-dulces-de-guayaba' OR nombre = 'Comunidades Cacaoteras de Pasaje y Dulces de Guayaba';

-- Paquete #71: Surf de Olas de Clase Mundial y Caving en Mompiche (Esmeraldas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'esmeraldas-surf-de-olas-de-clase-mundial-y-caving-en-mompiche' OR nombre = 'Surf de Olas de Clase Mundial y Caving en Mompiche';

-- Paquete #72: Manglares Majagual con los Árboles Más Altos del Mundo (Esmeraldas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'esmeraldas-manglares-majagual-con-los-arboles-mas-altos-del-mundo' OR nombre = 'Manglares Majagual con los Árboles Más Altos del Mundo';

-- Paquete #73: Sol, Arena Blanca y Cocteles Tropicales en Tonsupa y Same (Esmeraldas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'esmeraldas-sol-arena-blanca-y-cocteles-tropicales-en-tonsupa-y-same' OR nombre = 'Sol, Arena Blanca y Cocteles Tropicales en Tonsupa y Same';

-- Paquete #74: Música de Marimba Tradicional declarada Patrimonio Unesco (Esmeraldas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'esmeraldas-musica-de-marimba-tradicional-declarada-patrimonio-unesco' OR nombre = 'Música de Marimba Tradicional declarada Patrimonio Unesco';

-- Paquete #75: Cabaña Privada sobre el Océano en la Bahía de Same (Esmeraldas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'esmeraldas-cabana-privada-sobre-el-oceano-en-la-bahia-de-same' OR nombre = 'Cabaña Privada sobre el Océano en la Bahía de Same';

-- Paquete #76: Diversión Marina Familiar en Banana Boat y Playa de Atacames (Esmeraldas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'esmeraldas-diversion-marina-familiar-en-banana-boat-y-playa-de-atacames' OR nombre = 'Diversión Marina Familiar en Banana Boat y Playa de Atacames';

-- Paquete #77: Ruta del Encocado de Cangrejo Azul y Tapao Arrecho Esmeraldeño (Esmeraldas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'esmeraldas-ruta-del-encocado-de-cangrejo-azul-y-tapao-arrecho-esmeraldeno' OR nombre = 'Ruta del Encocado de Cangrejo Azul y Tapao Arrecho Esmeraldeño';

-- Paquete #78: Caminata por la Selva Tropical en la Reserva Cotacachi-Cayapas (Esmeraldas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'esmeraldas-caminata-por-la-selva-tropical-en-la-reserva-cotacachi-cayapas' OR nombre = 'Caminata por la Selva Tropical en la Reserva Cotacachi-Cayapas';

-- Paquete #79: Taladoterapia Marina y Masajes con Aceite de Coco Puro (Esmeraldas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'esmeraldas-taladoterapia-marina-y-masajes-con-aceite-de-coco-puro' OR nombre = 'Taladoterapia Marina y Masajes con Aceite de Coco Puro';

-- Paquete #80: Convivencia con Comunidades Afroecuatorianas y Taller de Marimba (Esmeraldas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'esmeraldas-convivencia-con-comunidades-afroecuatorianas-y-taller-de-marimba' OR nombre = 'Convivencia con Comunidades Afroecuatorianas y Taller de Marimba';

-- Paquete #81: Snorkel Extremo con Tiburones Tintoreras y Lobos Marinos (Galápagos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'galapagos-snorkel-extremo-con-tiburones-tintoreras-y-lobos-marinos' OR nombre = 'Snorkel Extremo con Tiburones Tintoreras y Lobos Marinos';

-- Paquete #82: Santuario de Tortugas Gigantes y Estación Charles Darwin (Galápagos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'galapagos-santuario-de-tortugas-gigantes-y-estacion-charles-darwin' OR nombre = 'Santuario de Tortugas Gigantes y Estación Charles Darwin';

-- Paquete #83: Descanso en Playa de Arena Blanca de Bahía Tortuga (Galápagos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1579294800821-694d95e86143?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'galapagos-descanso-en-playa-de-arena-blanca-de-bahia-tortuga' OR nombre = 'Descanso en Playa de Arena Blanca de Bahía Tortuga';

-- Paquete #84: Historia de la Colonia Penal y Centro de Interpretación (Galápagos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1579294800821-694d95e86143?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'galapagos-historia-de-la-colonia-penal-y-centro-de-interpretacion' OR nombre = 'Historia de la Colonia Penal y Centro de Interpretación';

-- Paquete #85: Atardeceres Románticos en Bahía Naufragio y Crucero al Ocaso (Galápagos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'galapagos-atardeceres-romanticos-en-bahia-naufragio-y-crucero-al-ocaso' OR nombre = 'Atardeceres Románticos en Bahía Naufragio y Crucero al Ocaso';

-- Paquete #86: Safari Insular Familiar y Senderos de Cráteres Gemelos (Galápagos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1579294800821-694d95e86143?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1568430462989-44163eb1752f?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'galapagos-safari-insular-familiar-y-senderos-de-crateres-gemelos' OR nombre = 'Safari Insular Familiar y Senderos de Cráteres Gemelos';

-- Paquete #87: Ruta de la Langosta de Galápagos y Café Volcánico de Altura (Galápagos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1579294800821-694d95e86143?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'galapagos-ruta-de-la-langosta-de-galapagos-y-cafe-volcanico-de-altura' OR nombre = 'Ruta de la Langosta de Galápagos y Café Volcánico de Altura';

-- Paquete #88: Ascenso al Volcán Activo Sierra Negra y Fumarolas de Azufre (Galápagos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1579294800821-694d95e86143?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'galapagos-ascenso-al-volcan-activo-sierra-negra-y-fumarolas-de-azufre' OR nombre = 'Ascenso al Volcán Activo Sierra Negra y Fumarolas de Azufre';

-- Paquete #89: Spa con Sal Marina de Galápagos y Piedras Volcánicas (Galápagos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1579294800821-694d95e86143?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'galapagos-spa-con-sal-marina-de-galapagos-y-piedras-volcanicas' OR nombre = 'Spa con Sal Marina de Galápagos y Piedras Volcánicas';

-- Paquete #90: Agroturismo y Fincas de Conservación en la Parte Alta de Santa Cruz (Galápagos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'galapagos-agroturismo-y-fincas-de-conservacion-en-la-parte-alta-de-santa-cruz' OR nombre = 'Agroturismo y Fincas de Conservación en la Parte Alta de Santa Cruz';

-- Paquete #91: Canyoning y Ruta de las 7 Cascadas en Bucay (Guayas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'guayas-canyoning-y-ruta-de-las-7-cascadas-en-bucay' OR nombre = 'Canyoning y Ruta de las 7 Cascadas en Bucay';

-- Paquete #92: Reserva Manglares Churute y Observación de Delfines (Guayas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'guayas-reserva-manglares-churute-y-observacion-de-delfines' OR nombre = 'Reserva Manglares Churute y Observación de Delfines';

-- Paquete #93: Sol, Surf y Brisa Marina en General Villamil Playas (Guayas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'guayas-sol-surf-y-brisa-marina-en-general-villamil-playas' OR nombre = 'Sol, Surf y Brisa Marina en General Villamil Playas';

-- Paquete #94: Barrio Las Peñas, Cerro Santa Ana y Malecón 2000 (Guayas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'guayas-barrio-las-penas-cerro-santa-ana-y-malecon-2000' OR nombre = 'Barrio Las Peñas, Cerro Santa Ana y Malecón 2000';

-- Paquete #95: Velada Romántica a Bordo del Barco Henry Morgan por el Río Guayas (Guayas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'guayas-velada-romantica-a-bordo-del-barco-henry-morgan-por-el-rio-guayas' OR nombre = 'Velada Romántica a Bordo del Barco Henry Morgan por el Río Guayas';

-- Paquete #96: Parque Histórico de Guayaquil y Museo del Cacao (Guayas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'guayas-parque-historico-de-guayaquil-y-museo-del-cacao' OR nombre = 'Parque Histórico de Guayaquil y Museo del Cacao';

-- Paquete #97: Ruta del Cangrejo Rojo de Naranjal y Encebollado Guayaco (Guayas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'guayas-ruta-del-cangrejo-rojo-de-naranjal-y-encebollado-guayaco' OR nombre = 'Ruta del Cangrejo Rojo de Naranjal y Encebollado Guayaco';

-- Paquete #98: Senderismo Ecológico en la Cordillera Chongón Colonche (Guayas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'guayas-senderismo-ecologico-en-la-cordillera-chongon-colonche' OR nombre = 'Senderismo Ecológico en la Cordillera Chongón Colonche';

-- Paquete #99: Aguas Termales Sulfurosas y Lodoterapia en Virgen del Cisne Naranjal (Guayas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'guayas-aguas-termales-sulfurosas-y-lodoterapia-en-virgen-del-cisne-naranjal' OR nombre = 'Aguas Termales Sulfurosas y Lodoterapia en Virgen del Cisne Naranjal';

-- Paquete #100: Santuario Narcisa de Jesús y Tradición Montuvia en Nobol y Daule (Guayas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'guayas-santuario-narcisa-de-jesus-y-tradicion-montuvia-en-nobol-y-daule' OR nombre = 'Santuario Narcisa de Jesús y Tradición Montuvia en Nobol y Daule';

-- Paquete #101: Kayak y Stand Up Paddle en Laguna de San Pablo (Imbabura)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'imbabura-kayak-y-stand-up-paddle-en-laguna-de-san-pablo' OR nombre = 'Kayak y Stand Up Paddle en Laguna de San Pablo';

-- Paquete #102: Sendero Sagrado en Cascada de Peguche y Lechero Milenario (Imbabura)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'imbabura-sendero-sagrado-en-cascada-de-peguche-y-lechero-milenario' OR nombre = 'Sendero Sagrado en Cascada de Peguche y Lechero Milenario';

-- Paquete #103: Tranquilidad y Paseo en Barco en la Mística Laguna de Cuicocha (Imbabura)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'imbabura-tranquilidad-y-paseo-en-barco-en-la-mistica-laguna-de-cuicocha' OR nombre = 'Tranquilidad y Paseo en Barco en la Mística Laguna de Cuicocha';

-- Paquete #104: Centro Histórico de la Ciudad Blanca de Ibarra y Ferrocarril (Imbabura)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'imbabura-centro-historico-de-la-ciudad-blanca-de-ibarra-y-ferrocarril' OR nombre = 'Centro Histórico de la Ciudad Blanca de Ibarra y Ferrocarril';

-- Paquete #105: Escapada en Hostería Patrimonial con Vistas al Taita Imbabura (Imbabura)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'imbabura-escapada-en-hosteria-patrimonial-con-vistas-al-taita-imbabura' OR nombre = 'Escapada en Hostería Patrimonial con Vistas al Taita Imbabura';

-- Paquete #106: Paseo Familiar en Tren de la Libertad y Valle del Chota (Imbabura)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'imbabura-paseo-familiar-en-tren-de-la-libertad-y-valle-del-chota' OR nombre = 'Paseo Familiar en Tren de la Libertad y Valle del Chota';

-- Paquete #107: Helados de Paila Tradicionales de Ibarra, Carnes Coloradas y Cuy (Imbabura)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'imbabura-helados-de-paila-tradicionales-de-ibarra-carnes-coloradas-y-cuy' OR nombre = 'Helados de Paila Tradicionales de Ibarra, Carnes Coloradas y Cuy';

-- Paquete #108: Ascenso al Volcán Fuya Fuya y Lagunas Glaciares de Mojanda (Imbabura)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'imbabura-ascenso-al-volcan-fuya-fuya-y-lagunas-glaciares-de-mojanda' OR nombre = 'Ascenso al Volcán Fuya Fuya y Lagunas Glaciares de Mojanda';

-- Paquete #109: Circuito de Aguas Termales Medicinales en Chachimbiro (Imbabura)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'imbabura-circuito-de-aguas-termales-medicinales-en-chachimbiro' OR nombre = 'Circuito de Aguas Termales Medicinales en Chachimbiro';

-- Paquete #110: Gran Plaza de Ponchos de Otavalo y Tallado en Madera de San Antonio (Imbabura)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'imbabura-gran-plaza-de-ponchos-de-otavalo-y-tallado-en-madera-de-san-antonio' OR nombre = 'Gran Plaza de Ponchos de Otavalo y Tallado en Madera de San Antonio';

-- Paquete #111: Escalada en la Cumbre del Cerro Mandango en Vilcabamba (Loja)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'loja-escalada-en-la-cumbre-del-cerro-mandango-en-vilcabamba' OR nombre = 'Escalada en la Cumbre del Cerro Mandango en Vilcabamba';

-- Paquete #112: Reserva de Biósfera Podocarpus y Páramo de Cajanuma (Loja)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'loja-reserva-de-biosfera-podocarpus-y-paramo-de-cajanuma' OR nombre = 'Reserva de Biósfera Podocarpus y Páramo de Cajanuma';

-- Paquete #113: Descanso Tropical y Piscinas en el Valle de Catamayo (Loja)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'loja-descanso-tropical-y-piscinas-en-el-valle-de-catamayo' OR nombre = 'Descanso Tropical y Piscinas en el Valle de Catamayo';

-- Paquete #114: Puerta de la Ciudad, Calle Lourdes y Museos de la Capital Musical (Loja)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'loja-puerta-de-la-ciudad-calle-lourdes-y-museos-de-la-capital-musical' OR nombre = 'Puerta de la Ciudad, Calle Lourdes y Museos de la Capital Musical';

-- Paquete #115: Retiro de Pareja en Cabañas Ecológicas del Valle de la Longevidad (Loja)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'loja-retiro-de-pareja-en-cabanas-ecologicas-del-valle-de-la-longevidad' OR nombre = 'Retiro de Pareja en Cabañas Ecológicas del Valle de la Longevidad';

-- Paquete #116: Paseo Familiar por el Santuario del Cisne y Valle del Viento (Loja)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'loja-paseo-familiar-por-el-santuario-del-cisne-y-valle-del-viento' OR nombre = 'Paseo Familiar por el Santuario del Cisne y Valle del Viento';

-- Paquete #117: Cata de Café Arábigo de Especialidad Lojano y Cecina Tradicional (Loja)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'loja-cata-de-cafe-arabigo-de-especialidad-lojano-y-cecina-tradicional' OR nombre = 'Cata de Café Arábigo de Especialidad Lojano y Cecina Tradicional';

-- Paquete #118: Trekking Transandino a Lagunas del Compadre en Podocarpus (Loja)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'loja-trekking-transandino-a-lagunas-del-compadre-en-podocarpus' OR nombre = 'Trekking Transandino a Lagunas del Compadre en Podocarpus';

-- Paquete #119: Terapias Holísticas, Yoga y Baños Desintoxicantes en Vilcabamba (Loja)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'loja-terapias-holisticas-yoga-y-banos-desintoxicantes-en-vilcabamba' OR nombre = 'Terapias Holísticas, Yoga y Baños Desintoxicantes en Vilcabamba';

-- Paquete #120: Cultura Viva del Pueblo Saraguro, Baños de Purificación y Talleres (Loja)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'loja-cultura-viva-del-pueblo-saraguro-banos-de-purificacion-y-talleres' OR nombre = 'Cultura Viva del Pueblo Saraguro, Baños de Purificación y Talleres';

-- Paquete #121: Rafting y Tubing en los Rápidos del Río Cristal en Montalvo (Los Ríos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'los-rios-rafting-y-tubing-en-los-rapidos-del-rio-cristal-en-montalvo' OR nombre = 'Rafting y Tubing en los Rápidos del Río Cristal en Montalvo';

-- Paquete #122: Humedal Abras de Mantequilla y Observación de Aves Acuáticas (Los Ríos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'los-rios-humedal-abras-de-mantequilla-y-observacion-de-aves-acuaticas' OR nombre = 'Humedal Abras de Mantequilla y Observación de Aves Acuáticas';

-- Paquete #123: Balneario Fluvial La Playita y Paseo Náutico en Babahoyo (Los Ríos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'los-rios-balneario-fluvial-la-playita-y-paseo-nautico-en-babahoyo' OR nombre = 'Balneario Fluvial La Playita y Paseo Náutico en Babahoyo';

-- Paquete #124: Casas Flotantes Patrimoniales sobre el Río Babahoyo (Los Ríos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'los-rios-casas-flotantes-patrimoniales-sobre-el-rio-babahoyo' OR nombre = 'Casas Flotantes Patrimoniales sobre el Río Babahoyo';

-- Paquete #125: Romance en Hacienda Cacaotera Tradicional de París Chiquito (Los Ríos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'los-rios-romance-en-hacienda-cacaotera-tradicional-de-paris-chiquito' OR nombre = 'Romance en Hacienda Cacaotera Tradicional de París Chiquito';

-- Paquete #126: Parque Acuático La Perla y Recreación Campestre en Quevedo (Los Ríos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'los-rios-parque-acuatico-la-perla-y-recreacion-campestre-en-quevedo' OR nombre = 'Parque Acuático La Perla y Recreación Campestre en Quevedo';

-- Paquete #127: Ruta del Cacao Fino de Aroma Nacional y Gastronomía Chino-Montuvia (Los Ríos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'los-rios-ruta-del-cacao-fino-de-aroma-nacional-y-gastronomia-chino-montuvia' OR nombre = 'Ruta del Cacao Fino de Aroma Nacional y Gastronomía Chino-Montuvia';

-- Paquete #128: Sendero Agroecológico entre Plantaciones de Banano y Bosques (Los Ríos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'los-rios-sendero-agroecologico-entre-plantaciones-de-banano-y-bosques' OR nombre = 'Sendero Agroecológico entre Plantaciones de Banano y Bosques';

-- Paquete #129: Spa Campestre con Chocolaterapia y Aguas de Vertiente (Los Ríos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'los-rios-spa-campestre-con-chocolaterapia-y-aguas-de-vertiente' OR nombre = 'Spa Campestre con Chocolaterapia y Aguas de Vertiente';

-- Paquete #130: Rodeo Montuvio Tradicional, Amorfino y Costumbres Campesinas (Los Ríos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'los-rios-rodeo-montuvio-tradicional-amorfino-y-costumbres-campesinas' OR nombre = 'Rodeo Montuvio Tradicional, Amorfino y Costumbres Campesinas';

-- Paquete #131: Parapente sobre el Acantilado de Crucita y Kitesurf (Manabí)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'manabi-parapente-sobre-el-acantilado-de-crucita-y-kitesurf' OR nombre = 'Parapente sobre el Acantilado de Crucita y Kitesurf';

-- Paquete #132: Avistamiento de Ballenas Jorobadas en Parque Nacional Machalilla (Manabí)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'manabi-avistamiento-de-ballenas-jorobadas-en-parque-nacional-machalilla' OR nombre = 'Avistamiento de Ballenas Jorobadas en Parque Nacional Machalilla';

-- Paquete #133: Arenas Doradas y Aguas Turquesas en Playa Los Frailes (Manabí)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'manabi-arenas-doradas-y-aguas-turquesas-en-playa-los-frailes' OR nombre = 'Arenas Doradas y Aguas Turquesas en Playa Los Frailes';

-- Paquete #134: Cuna del Sombrero Fino de Paja Toquilla en Montecristi (Manabí)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'manabi-cuna-del-sombrero-fino-de-paja-toquilla-en-montecristi' OR nombre = 'Cuna del Sombrero Fino de Paja Toquilla en Montecristi';

-- Paquete #135: Atardeceres Románticos en los Farallones de Canoa y Bahía (Manabí)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'manabi-atardeceres-romanticos-en-los-farallones-de-canoa-y-bahia' OR nombre = 'Atardeceres Románticos en los Farallones de Canoa y Bahía';

-- Paquete #136: Paseo Familiar en el Malecón Escénico de Manta y Playa El Murciélago (Manabí)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'manabi-paseo-familiar-en-el-malecon-escenico-de-manta-y-playa-el-murcielago' OR nombre = 'Paseo Familiar en el Malecón Escénico de Manta y Playa El Murciélago';

-- Paquete #137: Ruta Gastronómica del Viche, Ceviche con Maní y Salprieta Manabita (Manabí)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'manabi-ruta-gastronomica-del-viche-ceviche-con-mani-y-salprieta-manabita' OR nombre = 'Ruta Gastronómica del Viche, Ceviche con Maní y Salprieta Manabita';

-- Paquete #138: Trekking por la Selva Húmeda de Pacoche y Monos Aulladores (Manabí)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'manabi-trekking-por-la-selva-humeda-de-pacoche-y-monos-aulladores' OR nombre = 'Trekking por la Selva Húmeda de Pacoche y Monos Aulladores';

-- Paquete #139: Baños de Lodo Curativo y Masajes Termales en San Vicente (Manabí)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'manabi-banos-de-lodo-curativo-y-masajes-termales-en-san-vicente' OR nombre = 'Baños de Lodo Curativo y Masajes Termales en San Vicente';

-- Paquete #140: Comunidad Ancestral de Agua Blanca y Poza Sulfurosa Sagrada (Manabí)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'manabi-comunidad-ancestral-de-agua-blanca-y-poza-sulfurosa-sagrada' OR nombre = 'Comunidad Ancestral de Agua Blanca y Poza Sulfurosa Sagrada';

-- Paquete #141: Expedición Extrema a la Cueva de los Tayos (Morona Santiago)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'morona-santiago-expedicion-extrema-a-la-cueva-de-los-tayos' OR nombre = 'Expedición Extrema a la Cueva de los Tayos';

-- Paquete #142: Cascadas Mágicas del Kintia Panki y Bosque Amazónico (Morona Santiago)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'morona-santiago-cascadas-magicas-del-kintia-panki-y-bosque-amazonico' OR nombre = 'Cascadas Mágicas del Kintia Panki y Bosque Amazónico';

-- Paquete #143: Laguna de Sardinayacu y Descanso Fluvial en Macas (Morona Santiago)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'morona-santiago-laguna-de-sardinayacu-y-descanso-fluvial-en-macas' OR nombre = 'Laguna de Sardinayacu y Descanso Fluvial en Macas';

-- Paquete #144: Catedral de la Purísima de Macas y Petroglifos Ancestrales (Morona Santiago)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'morona-santiago-catedral-de-la-purisima-de-macas-y-petroglifos-ancestrales' OR nombre = 'Catedral de la Purísima de Macas y Petroglifos Ancestrales';

-- Paquete #145: Cabaña Selva Virgen con Vista al Volcán Sangay Activo (Morona Santiago)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'morona-santiago-cabana-selva-virgen-con-vista-al-volcan-sangay-activo' OR nombre = 'Cabaña Selva Virgen con Vista al Volcán Sangay Activo';

-- Paquete #146: Parque Ecológico y Balneario Natural del Río Upano (Morona Santiago)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'morona-santiago-parque-ecologico-y-balneario-natural-del-rio-upano' OR nombre = 'Parque Ecológico y Balneario Natural del Río Upano';

-- Paquete #147: Degustación de Ayampaco Amazónico de Tilapia y Chicha de Chonta (Morona Santiago)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'morona-santiago-degustacion-de-ayampaco-amazonico-de-tilapia-y-chicha-de-chonta' OR nombre = 'Degustación de Ayampaco Amazónico de Tilapia y Chicha de Chonta';

-- Paquete #148: Trekking Hacia las Cascadas Sagradas del Río Namakim (Morona Santiago)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'morona-santiago-trekking-hacia-las-cascadas-sagradas-del-rio-namakim' OR nombre = 'Trekking Hacia las Cascadas Sagradas del Río Namakim';

-- Paquete #149: Baños de Vapor con Hierbas Medicinales Amazónicas en Sucúa (Morona Santiago)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'morona-santiago-banos-de-vapor-con-hierbas-medicinales-amazonicas-en-sucua' OR nombre = 'Baños de Vapor con Hierbas Medicinales Amazónicas en Sucúa';

-- Paquete #150: Convivencia con la Nacionalidad Shuar y Ritos Ancestrales de Fuerza (Morona Santiago)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'morona-santiago-convivencia-con-la-nacionalidad-shuar-y-ritos-ancestrales-de-fuerza' OR nombre = 'Convivencia con la Nacionalidad Shuar y Ritos Ancestrales de Fuerza';

-- Paquete #151: Rafting Clase IV en Río Jatunyacu y Tubing en Tena (Napo)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'napo-rafting-clase-iv-en-rio-jatunyacu-y-tubing-en-tena' OR nombre = 'Rafting Clase IV en Río Jatunyacu y Tubing en Tena';

-- Paquete #152: Cavernas de Jumandy y Laberintos Subterráneos de Archidona (Napo)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'napo-cavernas-de-jumandy-y-laberintos-subterraneos-de-archidona' OR nombre = 'Cavernas de Jumandy y Laberintos Subterráneos de Archidona';

-- Paquete #153: Playas de Agua Dulce del Río Misahuallí y Monos Capuchinos (Napo)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'napo-playas-de-agua-dulce-del-rio-misahualli-y-monos-capuchinos' OR nombre = 'Playas de Agua Dulce del Río Misahuallí y Monos Capuchinos';

-- Paquete #154: Pueblo Patrimonial de Baeza Vieja y Ruta de la Canela (Napo)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'napo-pueblo-patrimonial-de-baeza-vieja-y-ruta-de-la-canela' OR nombre = 'Pueblo Patrimonial de Baeza Vieja y Ruta de la Canela';

-- Paquete #155: Domo Romántico en la Reserva Ecológica Cayambe-Coca (Napo)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'napo-domo-romantico-en-la-reserva-ecologica-cayambe-coca' OR nombre = 'Domo Romántico en la Reserva Ecológica Cayambe-Coca';

-- Paquete #156: Visita al Centro de Rescate de Fauna Silvestre amaZOOnico (Napo)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'napo-visita-al-centro-de-rescate-de-fauna-silvestre-amazoonico' OR nombre = 'Visita al Centro de Rescate de Fauna Silvestre amaZOOnico';

-- Paquete #157: Cata de Chocolate Kallari Fino de Aroma y Maito de Carachama (Napo)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'napo-cata-de-chocolate-kallari-fino-de-aroma-y-maito-de-carachama' OR nombre = 'Cata de Chocolate Kallari Fino de Aroma y Maito de Carachama';

-- Paquete #158: Trekking a la Cascada San Rafael y Cañón del Quijos (Napo)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'napo-trekking-a-la-cascada-san-rafael-y-canon-del-quijos' OR nombre = 'Trekking a la Cascada San Rafael y Cañón del Quijos';

-- Paquete #159: Circuito Termal Exclusivo y Spa Andino en Papallacta (Napo)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'napo-circuito-termal-exclusivo-y-spa-andino-en-papallacta' OR nombre = 'Circuito Termal Exclusivo y Spa Andino en Papallacta';

-- Paquete #160: Comunidad Kichwa Shiripuno: Danza, Artesanías y Plantas Medicinales (Napo)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'napo-comunidad-kichwa-shiripuno-danza-artesanias-y-plantas-medicinales' OR nombre = 'Comunidad Kichwa Shiripuno: Danza, Artesanías y Plantas Medicinales';

-- Paquete #161: Expedición en Kayak por Afluentes Profundos del Río Napo (Orellana)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'orellana-expedicion-en-kayak-por-afluentes-profundos-del-rio-napo' OR nombre = 'Expedición en Kayak por Afluentes Profundos del Río Napo';

-- Paquete #162: Torre de Observación del Dosel en la Biósfera del Parque Nacional Yasuní (Orellana)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'orellana-torre-de-observacion-del-dosel-en-la-biosfera-del-parque-nacional-yasuni' OR nombre = 'Torre de Observación del Dosel en la Biósfera del Parque Nacional Yasuní';

-- Paquete #163: Paseo en Canoa a Motor y Playas Fluviales del Río Payamino (Orellana)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'orellana-paseo-en-canoa-a-motor-y-playas-fluviales-del-rio-payamino' OR nombre = 'Paseo en Canoa a Motor y Playas Fluviales del Río Payamino';

-- Paquete #164: Museo Arqueológico MACCO y Culturas Ribereñas de Orellana (Orellana)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'orellana-museo-arqueologico-macco-y-culturas-riberenas-de-orellana' OR nombre = 'Museo Arqueológico MACCO y Culturas Ribereñas de Orellana';

-- Paquete #165: Ecolodge Flotante en Laguna Añangu para Luna de Miel (Orellana)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'orellana-ecolodge-flotante-en-laguna-anangu-para-luna-de-miel' OR nombre = 'Ecolodge Flotante en Laguna Añangu para Luna de Miel';

-- Paquete #166: Safari de Monos, Guacamayos y Saladeros de Arcilla (Orellana)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'orellana-safari-de-monos-guacamayos-y-saladeros-de-arcilla' OR nombre = 'Safari de Monos, Guacamayos y Saladeros de Arcilla';

-- Paquete #167: Degustación de Gusanos de Chonta (Chontacuro) y Pescado al Vapor (Orellana)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'orellana-degustacion-de-gusanos-de-chonta-chontacuro-y-pescado-al-vapor' OR nombre = 'Degustación de Gusanos de Chonta (Chontacuro) y Pescado al Vapor';

-- Paquete #168: Trekking Nocturno en la Selva Primaria y Búsqueda de Ranas Cristal (Orellana)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'orellana-trekking-nocturno-en-la-selva-primaria-y-busqueda-de-ranas-cristal' OR nombre = 'Trekking Nocturno en la Selva Primaria y Búsqueda de Ranas Cristal';

-- Paquete #169: Tratamiento de Relajación con Lodo de Río y Esencias Selváticas (Orellana)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'orellana-tratamiento-de-relajacion-con-lodo-de-rio-y-esencias-selvaticas' OR nombre = 'Tratamiento de Relajación con Lodo de Río y Esencias Selváticas';

-- Paquete #170: Convivencia con la Nacionalidad Waorani en Territorio Ancestral (Orellana)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'orellana-convivencia-con-la-nacionalidad-waorani-en-territorio-ancestral' OR nombre = 'Convivencia con la Nacionalidad Waorani en Territorio Ancestral';

-- Paquete #171: Salto del Río y Canyoning en la Cascada Hola Vida (Pastaza)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'pastaza-salto-del-rio-y-canyoning-en-la-cascada-hola-vida' OR nombre = 'Salto del Río y Canyoning en la Cascada Hola Vida';

-- Paquete #172: Reserva Biológica Yanacocha y Jardín Botánico Las Orquídeas (Pastaza)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'pastaza-reserva-biologica-yanacocha-y-jardin-botanico-las-orquideas' OR nombre = 'Reserva Biológica Yanacocha y Jardín Botánico Las Orquídeas';

-- Paquete #173: Paseo Fluvial y Tranquilidad en Laguna de Tarabita Mera (Pastaza)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'pastaza-paseo-fluvial-y-tranquilidad-en-laguna-de-tarabita-mera' OR nombre = 'Paseo Fluvial y Tranquilidad en Laguna de Tarabita Mera';

-- Paquete #174: Historia de la Aviación Misionera en Shell y Museo Amazónico (Pastaza)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'pastaza-historia-de-la-aviacion-misionera-en-shell-y-museo-amazonico' OR nombre = 'Historia de la Aviación Misionera en Shell y Museo Amazónico';

-- Paquete #175: Cabaña Nido sobre la Selva con Mirador Indichuris al Ocaso (Pastaza)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'pastaza-cabana-nido-sobre-la-selva-con-mirador-indichuris-al-ocaso' OR nombre = 'Cabaña Nido sobre la Selva con Mirador Indichuris al Ocaso';

-- Paquete #176: Paseo en Canoa Familiar y Parque Temático Omaere (Pastaza)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'pastaza-paseo-en-canoa-familiar-y-parque-tematico-omaere' OR nombre = 'Paseo en Canoa Familiar y Parque Temático Omaere';

-- Paquete #177: Ruta de la Ilex Guayusa, Ceviche Volquetero y Maito de Tilapia (Pastaza)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'pastaza-ruta-de-la-ilex-guayusa-ceviche-volquetero-y-maito-de-tilapia' OR nombre = 'Ruta de la Ilex Guayusa, Ceviche Volquetero y Maito de Tilapia';

-- Paquete #178: Trekking a la Selva Virgen de Canelos y Miradores Panorámicos (Pastaza)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'pastaza-trekking-a-la-selva-virgen-de-canelos-y-miradores-panoramicos' OR nombre = 'Trekking a la Selva Virgen de Canelos y Miradores Panorámicos';

-- Paquete #179: Baños de Bosque (Shinrin-Yoku) y Masajes con Arcilla Amazónica (Pastaza)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'pastaza-banos-de-bosque-shinrin-yoku-y-masajes-con-arcilla-amazonica' OR nombre = 'Baños de Bosque (Shinrin-Yoku) y Masajes con Arcilla Amazónica';

-- Paquete #180: Alfarería Indígena y Tradiciones Kichwa de Canelos (Pastaza)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'pastaza-alfareria-indigena-y-tradiciones-kichwa-de-canelos' OR nombre = 'Alfarería Indígena y Tradiciones Kichwa de Canelos';

-- Paquete #181: Canopy de 10 Cables y Tubing en el Bosque Protector Mindo (Pichincha)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'pichincha-canopy-de-10-cables-y-tubing-en-el-bosque-protector-mindo' OR nombre = 'Canopy de 10 Cables y Tubing en el Bosque Protector Mindo';

-- Paquete #182: Ruta de los Colibríes y Jardín de Mariposas en Mindo Nambillo (Pichincha)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1520808663317-647b476a81b9?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'pichincha-ruta-de-los-colibries-y-jardin-de-mariposas-en-mindo-nambillo' OR nombre = 'Ruta de los Colibríes y Jardín de Mariposas en Mindo Nambillo';

-- Paquete #183: Piscinas Naturales y Cascadas Verdes de Pedro Vicente Maldonado (Pichincha)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'pichincha-piscinas-naturales-y-cascadas-verdes-de-pedro-vicente-maldonado' OR nombre = 'Piscinas Naturales y Cascadas Verdes de Pedro Vicente Maldonado';

-- Paquete #184: Quito Colonial, Convento de San Francisco y Mitad del Mundo (Pichincha)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'pichincha-quito-colonial-convento-de-san-francisco-y-mitad-del-mundo' OR nombre = 'Quito Colonial, Convento de San Francisco y Mitad del Mundo';

-- Paquete #185: Glamping Exclusivo con Vistas al Volcán Rucu Pichincha y Fogata (Pichincha)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'pichincha-glamping-exclusivo-con-vistas-al-volcan-rucu-pichincha-y-fogata' OR nombre = 'Glamping Exclusivo con Vistas al Volcán Rucu Pichincha y Fogata';

-- Paquete #186: Teleférico de Quito, Parque Vulqano y Granja de Machachi (Pichincha)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'pichincha-teleferico-de-quito-parque-vulqano-y-granja-de-machachi' OR nombre = 'Teleférico de Quito, Parque Vulqano y Granja de Machachi';

-- Paquete #187: Ruta de los Bizcochos de Cayambe, Queso de Hoja y Hornado de Sangolquí (Pichincha)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'pichincha-ruta-de-los-bizcochos-de-cayambe-queso-de-hoja-y-hornado-de-sangolqui' OR nombre = 'Ruta de los Bizcochos de Cayambe, Queso de Hoja y Hornado de Sangolquí';

-- Paquete #188: Ascenso de Aclimatación a las Cumbres del Rucu Pichincha e Ilaló (Pichincha)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'pichincha-ascenso-de-aclimatacion-a-las-cumbres-del-rucu-pichincha-e-ilalo' OR nombre = 'Ascenso de Aclimatación a las Cumbres del Rucu Pichincha e Ilaló';

-- Paquete #189: Spa de Altura con Tratamiento de Chocolate y Sauna Andino (Pichincha)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'pichincha-spa-de-altura-con-tratamiento-de-chocolate-y-sauna-andino' OR nombre = 'Spa de Altura con Tratamiento de Chocolate y Sauna Andino';

-- Paquete #190: Comunidad Yunguilla: Turismo Sostenible, Mermeladas y Quesos (Pichincha)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'pichincha-comunidad-yunguilla-turismo-sostenible-mermeladas-y-quesos' OR nombre = 'Comunidad Yunguilla: Turismo Sostenible, Mermeladas y Quesos';

-- Paquete #191: Bautizo de Buceo y Snorkel en el Islote El Pelado de Ayangue (Santa Elena)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'santa-elena-bautizo-de-buceo-y-snorkel-en-el-islote-el-pelado-de-ayangue' OR nombre = 'Bautizo de Buceo y Snorkel en el Islote El Pelado de Ayangue';

-- Paquete #192: Avistamiento de Lobos Marinos y Piqueros en La Chocolatera (Santa Elena)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'santa-elena-avistamiento-de-lobos-marinos-y-piqueros-en-la-chocolatera' OR nombre = 'Avistamiento de Lobos Marinos y Piqueros en La Chocolatera';

-- Paquete #193: Sol, Surf y Relajación Frente al Pacífico en Playa Olón (Santa Elena)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'santa-elena-sol-surf-y-relajacion-frente-al-pacifico-en-playa-olon' OR nombre = 'Sol, Surf y Relajación Frente al Pacífico en Playa Olón';

-- Paquete #194: Museo Los Amantes de Sumpa y Catedral de Santa Elena (Santa Elena)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'santa-elena-museo-los-amantes-de-sumpa-y-catedral-de-santa-elena' OR nombre = 'Museo Los Amantes de Sumpa y Catedral de Santa Elena';

-- Paquete #195: Suite Frente al Mar en Punta Carnero con Cena al Atardecer (Santa Elena)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'santa-elena-suite-frente-al-mar-en-punta-carnero-con-cena-al-atardecer' OR nombre = 'Suite Frente al Mar en Punta Carnero con Cena al Atardecer';

-- Paquete #196: Paseo Náutico Familiar en Bahía de Salinas y Avistamiento Costero (Santa Elena)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'santa-elena-paseo-nautico-familiar-en-bahia-de-salinas-y-avistamiento-costero' OR nombre = 'Paseo Náutico Familiar en Bahía de Salinas y Avistamiento Costero';

-- Paquete #197: Ruta de los Ceviches Playeros, Arroz Marinero y Cazuela (Santa Elena)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'santa-elena-ruta-de-los-ceviches-playeros-arroz-marinero-y-cazuela' OR nombre = 'Ruta de los Ceviches Playeros, Arroz Marinero y Cazuela';

-- Paquete #198: Caminata por el Bosque Protector Chongón Colonche en Dos Mangas (Santa Elena)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'santa-elena-caminata-por-el-bosque-protector-chongon-colonche-en-dos-mangas' OR nombre = 'Caminata por el Bosque Protector Chongón Colonche en Dos Mangas';

-- Paquete #199: Baños de Lodo Volcánico y Aguas Sulfurosas de San Vicente (Santa Elena)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'santa-elena-banos-de-lodo-volcanico-y-aguas-sulfurosas-de-san-vicente' OR nombre = 'Baños de Lodo Volcánico y Aguas Sulfurosas de San Vicente';

-- Paquete #200: Talleres de Paja Toquilla y Tagua con Artesanos de Dos Mangas (Santa Elena)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'santa-elena-talleres-de-paja-toquilla-y-tagua-con-artesanos-de-dos-mangas' OR nombre = 'Talleres de Paja Toquilla y Tagua con Artesanos de Dos Mangas';

-- Paquete #201: Rafting en los Rápidos del Río Blanco y Salto en Cascada (Santo Domingo de los Tsáchilas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'santo-domingo-de-los-tsachilas-rafting-en-los-rapidos-del-rio-blanco-y-salto-en-cascada' OR nombre = 'Rafting en los Rápidos del Río Blanco y Salto en Cascada';

-- Paquete #202: Reserva Botánica La Perla y Observación de Tucanes (Santo Domingo de los Tsáchilas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'santo-domingo-de-los-tsachilas-reserva-botanica-la-perla-y-observacion-de-tucanes' OR nombre = 'Reserva Botánica La Perla y Observación de Tucanes';

-- Paquete #203: Parque Acuático Tropical y Balnearios de Valle Hermoso (Santo Domingo de los Tsáchilas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'santo-domingo-de-los-tsachilas-parque-acuatico-tropical-y-balnearios-de-valle-hermoso' OR nombre = 'Parque Acuático Tropical y Balnearios de Valle Hermoso';

-- Paquete #204: Catedral El Buen Pastor y Tradición Melcochera de Alluriquín (Santo Domingo de los Tsáchilas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'santo-domingo-de-los-tsachilas-catedral-el-buen-pastor-y-tradicion-melcochera-de-alluriquin' OR nombre = 'Catedral El Buen Pastor y Tradición Melcochera de Alluriquín';

-- Paquete #205: Cabaña Romántica Rodeada de Bosque Lluvioso y Cascada Privada (Santo Domingo de los Tsáchilas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'santo-domingo-de-los-tsachilas-cabana-romantica-rodeada-de-bosque-lluvioso-y-cascada-privada' OR nombre = 'Cabaña Romántica Rodeada de Bosque Lluvioso y Cascada Privada';

-- Paquete #206: Parque de la Juventud y Complejo Recreativo Familiar (Santo Domingo de los Tsáchilas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'santo-domingo-de-los-tsachilas-parque-de-la-juventud-y-complejo-recreativo-familiar' OR nombre = 'Parque de la Juventud y Complejo Recreativo Familiar';

-- Paquete #207: Ruta de las Parrilladas de Carne Tsáchila y Dulces de Caña (Santo Domingo de los Tsáchilas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'santo-domingo-de-los-tsachilas-ruta-de-las-parrilladas-de-carne-tsachila-y-dulces-de-cana' OR nombre = 'Ruta de las Parrilladas de Carne Tsáchila y Dulces de Caña';

-- Paquete #208: Trekking por la Selva Subtropical de la Cascada del Amor (Santo Domingo de los Tsáchilas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'santo-domingo-de-los-tsachilas-trekking-por-la-selva-subtropical-de-la-cascada-del-amor' OR nombre = 'Trekking por la Selva Subtropical de la Cascada del Amor';

-- Paquete #209: Baños de Purificación con Hierbas Tsáchilas y Arcilla Roja (Santo Domingo de los Tsáchilas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'santo-domingo-de-los-tsachilas-banos-de-purificacion-con-hierbas-tsachilas-y-arcilla-roja' OR nombre = 'Baños de Purificación con Hierbas Tsáchilas y Arcilla Roja';

-- Paquete #210: Vivencia Ancestral en la Comuna Tsáchila Chigüilpe: Achiote y Chamanismo (Santo Domingo de los Tsáchilas)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'santo-domingo-de-los-tsachilas-vivencia-ancestral-en-la-comuna-tsachila-chiguilpe-achiote-y-chamanismo' OR nombre = 'Vivencia Ancestral en la Comuna Tsáchila Chigüilpe: Achiote y Chamanismo';

-- Paquete #211: Navegación Nocturna en Búsqueda de Caimanes Negros en Cuyabeno (Sucumbíos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'sucumbios-navegacion-nocturna-en-busqueda-de-caimanes-negros-en-cuyabeno' OR nombre = 'Navegación Nocturna en Búsqueda de Caimanes Negros en Cuyabeno';

-- Paquete #212: Laguna Grande de Cuyabeno y Observación de Delfines Rosados (Sucumbíos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'sucumbios-laguna-grande-de-cuyabeno-y-observacion-de-delfines-rosados' OR nombre = 'Laguna Grande de Cuyabeno y Observación de Delfines Rosados';

-- Paquete #213: Descanso Acuático y Atardecer Dorado en Laguna Encantada (Sucumbíos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'sucumbios-descanso-acuatico-y-atardecer-dorado-en-laguna-encantada' OR nombre = 'Descanso Acuático y Atardecer Dorado en Laguna Encantada';

-- Paquete #214: Parque Turístico Nueva Loja y Etnografía de Pueblos Amazónicos (Sucumbíos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'sucumbios-parque-turistico-nueva-loja-y-etnografia-de-pueblos-amazonicos' OR nombre = 'Parque Turístico Nueva Loja y Etnografía de Pueblos Amazónicos';

-- Paquete #215: Ecolodge Privado en la Reserva Cuyabeno con Terraza Fluvial (Sucumbíos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'sucumbios-ecolodge-privado-en-la-reserva-cuyabeno-con-terraza-fluvial' OR nombre = 'Ecolodge Privado en la Reserva Cuyabeno con Terraza Fluvial';

-- Paquete #216: Paseo Familiar en Canoa con Avistamiento de Monos y Aves (Sucumbíos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'sucumbios-paseo-familiar-en-canoa-con-avistamiento-de-monos-y-aves' OR nombre = 'Paseo Familiar en Canoa con Avistamiento de Monos y Aves';

-- Paquete #217: Ruta del Casabe Ancestral de Yuca y Pescado en Hoja de Bijao (Sucumbíos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'sucumbios-ruta-del-casabe-ancestral-de-yuca-y-pescado-en-hoja-de-bijao' OR nombre = 'Ruta del Casabe Ancestral de Yuca y Pescado en Hoja de Bijao';

-- Paquete #218: Trekking por Senderos del Bosque Inundado del Igapó (Sucumbíos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'sucumbios-trekking-por-senderos-del-bosque-inundado-del-igapo' OR nombre = 'Trekking por Senderos del Bosque Inundado del Igapó';

-- Paquete #219: Tratamiento de Relajación con Aguas Minerales en Cascales (Sucumbíos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'sucumbios-tratamiento-de-relajacion-con-aguas-minerales-en-cascales' OR nombre = 'Tratamiento de Relajación con Aguas Minerales en Cascales';

-- Paquete #220: Comunidad Étnica Siona: Preparación de Casabe y Sabiduría Chamánica (Sucumbíos)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'sucumbios-comunidad-etnica-siona-preparacion-de-casabe-y-sabiduria-chamanica' OR nombre = 'Comunidad Étnica Siona: Preparación de Casabe y Sabiduría Chamánica';

-- Paquete #221: Adrenalina Pura: Canyoning, Rafting y Salto del Puente en Baños (Tungurahua)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'tungurahua-adrenalina-pura-canyoning-rafting-y-salto-del-puente-en-banos' OR nombre = 'Adrenalina Pura: Canyoning, Rafting y Salto del Puente en Baños';

-- Paquete #222: Ruta de las Cascadas, Manto de la Novia y Pailón del Diablo (Tungurahua)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'tungurahua-ruta-de-las-cascadas-manto-de-la-novia-y-pailon-del-diablo' OR nombre = 'Ruta de las Cascadas, Manto de la Novia y Pailón del Diablo';

-- Paquete #223: Valle de la Eterna Primavera, Huertos de Mandarina y Relax en Patate (Tungurahua)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'tungurahua-valle-de-la-eterna-primavera-huertos-de-mandarina-y-relax-en-patate' OR nombre = 'Valle de la Eterna Primavera, Huertos de Mandarina y Relax en Patate';

-- Paquete #224: Quinta de Juan León Mera, Museo Martínez Holguín y Centro de Ambato (Tungurahua)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'tungurahua-quinta-de-juan-leon-mera-museo-martinez-holguin-y-centro-de-ambato' OR nombre = 'Quinta de Juan León Mera, Museo Martínez Holguín y Centro de Ambato';

-- Paquete #225: Glamping de Lujo con Jacuzzi y Vista al Volcán Tungurahua (Tungurahua)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'tungurahua-glamping-de-lujo-con-jacuzzi-y-vista-al-volcan-tungurahua' OR nombre = 'Glamping de Lujo con Jacuzzi y Vista al Volcán Tungurahua';

-- Paquete #226: Columpio del Fin del Mundo en Casa del Árbol y Aldea Mágica (Tungurahua)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'tungurahua-columpio-del-fin-del-mundo-en-casa-del-arbol-y-aldea-magica' OR nombre = 'Columpio del Fin del Mundo en Casa del Árbol y Aldea Mágica';

-- Paquete #227: Melcochas de Baños, Llapingachos Ambateños y Dulces de Cevallos (Tungurahua)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'tungurahua-melcochas-de-banos-llapingachos-ambatenos-y-dulces-de-cevallos' OR nombre = 'Melcochas de Baños, Llapingachos Ambateños y Dulces de Cevallos';

-- Paquete #228: Trekking de Alta Montaña al Refugio del Volcán Tungurahua (Tungurahua)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'tungurahua-trekking-de-alta-montana-al-refugio-del-volcan-tungurahua' OR nombre = 'Trekking de Alta Montaña al Refugio del Volcán Tungurahua';

-- Paquete #229: Aguas Termales de la Virgen, El Salado y Spa Volcánico (Tungurahua)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'tungurahua-aguas-termales-de-la-virgen-el-salado-y-spa-volcanico' OR nombre = 'Aguas Termales de la Virgen, El Salado y Spa Volcánico';

-- Paquete #230: Cultura Salasaka: Tejeduría en Telar Ancestral y Diablada Pillareña (Tungurahua)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'tungurahua-cultura-salasaka-tejeduria-en-telar-ancestral-y-diablada-pillarena' OR nombre = 'Cultura Salasaka: Tejeduría en Telar Ancestral y Diablada Pillareña';

-- Paquete #231: Expedición en Bote Rápido por los Cañones del Río Nangaritza (Zamora Chinchipe)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'zamora-chinchipe-expedicion-en-bote-rapido-por-los-canones-del-rio-nangaritza' OR nombre = 'Expedición en Bote Rápido por los Cañones del Río Nangaritza';

-- Paquete #232: Reserva Podocarpus Sur: Bosque de Palmeras Gigantes y Aves (Zamora Chinchipe)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'zamora-chinchipe-reserva-podocarpus-sur-bosque-de-palmeras-gigantes-y-aves' OR nombre = 'Reserva Podocarpus Sur: Bosque de Palmeras Gigantes y Aves';

-- Paquete #233: Descanso en las Playas de Arena Blanca del Río Chicaña (Zamora Chinchipe)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'zamora-chinchipe-descanso-en-las-playas-de-arena-blanca-del-rio-chicana' OR nombre = 'Descanso en las Playas de Arena Blanca del Río Chicaña';

-- Paquete #234: Reloj Floral Gigante de Zamora y Orígenes del Cacao en Palanda (Zamora Chinchipe)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'zamora-chinchipe-reloj-floral-gigante-de-zamora-y-origenes-del-cacao-en-palanda' OR nombre = 'Reloj Floral Gigante de Zamora y Orígenes del Cacao en Palanda';

-- Paquete #235: Cabaña Romántica Ecológica en el Valle de las Guayabas (Zamora Chinchipe)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'zamora-chinchipe-cabana-romantica-ecologica-en-el-valle-de-las-guayabas' OR nombre = 'Cabaña Romántica Ecológica en el Valle de las Guayabas';

-- Paquete #236: Parque Lineal y Cascadas de Santa Cleotilde para Toda la Familia (Zamora Chinchipe)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'zamora-chinchipe-parque-lineal-y-cascadas-de-santa-cleotilde-para-toda-la-familia' OR nombre = 'Parque Lineal y Cascadas de Santa Cleotilde para Toda la Familia';

-- Paquete #237: Ruta Arqueológica del Primer Cacao del Mundo en Mayo Chinchipe (Zamora Chinchipe)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'zamora-chinchipe-ruta-arqueologica-del-primer-cacao-del-mundo-en-mayo-chinchipe' OR nombre = 'Ruta Arqueológica del Primer Cacao del Mundo en Mayo Chinchipe';

-- Paquete #238: Trekking al Laberinto de las Mil Ilusiones y Cueva de los Tayos Sur (Zamora Chinchipe)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'zamora-chinchipe-trekking-al-laberinto-de-las-mil-ilusiones-y-cueva-de-los-tayos-sur' OR nombre = 'Trekking al Laberinto de las Mil Ilusiones y Cueva de los Tayos Sur';

-- Paquete #239: Hidroterapia Natural en Cascadas Velo de Novia y Chorrera (Zamora Chinchipe)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'zamora-chinchipe-hidroterapia-natural-en-cascadas-velo-de-novia-y-chorrera' OR nombre = 'Hidroterapia Natural en Cascadas Velo de Novia y Chorrera';

-- Paquete #240: Encuentro con las Comunidades Shuar de Nangaritza y Artesanías (Zamora Chinchipe)
UPDATE paquetes SET
  imagen_principal = 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&fm=webp&q=80',
  imagenes_secundarias = ARRAY['https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&fm=webp&q=80', 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&fm=webp&q=80']
WHERE slug = 'zamora-chinchipe-encuentro-con-las-comunidades-shuar-de-nangaritza-y-artesanias' OR nombre = 'Encuentro con las Comunidades Shuar de Nangaritza y Artesanías';

COMMIT;