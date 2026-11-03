// @ts-check
const fs = require('fs');
const path = require('path');

// Helper to construct Unsplash WebP URL
function unsplashWebp(id) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&fm=webp&q=80`;
}

// Curated high-resolution Unsplash photo IDs for Ecuador destinations, attractions, and themes
const PHOTOS = {
  // --- GALÁPAGOS ---
  galapagos_tortoise_1: '1544979590-37e9b47eb705', // Galapagos giant tortoise close up
  galapagos_tortoise_2: '1568430462989-44163eb1752f', // Giant tortoise grazing
  galapagos_sea_lion_1: '1579294800821-694d95e86143', // Sea lion on volcanic rock
  galapagos_sea_lion_2: '1588166524941-3bf61a9c41db', // Sea lions resting
  galapagos_snorkel_shark: '1544551763-46a013bb70d5', // Underwater snorkeling with reef shark
  galapagos_underwater_reef: '1507525428034-b723cf961d3e', // Crystal clear turquoise ocean reef
  galapagos_tortuga_bay: '1510414842594-a61c69b5ae57', // Pristine white beach and turquoise water
  galapagos_volcanic_beach: '1510414842594-a61c69b5ae57', // Turquoise ocean & volcanic shore
  galapagos_booby_bird: '1559827291-72ee739d0d9a', // Exotic tropical marine bird
  galapagos_volcano_crater: '1508739773434-c26b3d09e071', // Volcanic caldera Sierra Negra
  galapagos_sunset_bay: '1519046904884-53103b34b206', // Sunset over tranquil Pacific bay
  galapagos_lobster_dining: '1555396273-367ea4eb4db5', // Seafood gourmet dining
  galapagos_island_spa: '1540555700478-4be289fbecef', // Marine stone spa relaxation
  galapagos_highlands_farm: '1500530855697-b586d89ba3ee', // Green volcanic highlands farm

  // --- ANDES & VOLCANOES (SIERRA) ---
  volcano_cotopaxi_1: '1464822759023-fed622ff2c3b', // Majestic snow-capped peak in cloud
  volcano_cotopaxi_2: '1486870591958-9b9d0d1dda99', // Andean mountain peak
  volcano_chimborazo_summit: '1465188162913-8fb5709d6d57', // High altitude snow summit
  volcano_chimborazo_bike: '1544197150-b99a580bb7a8', // Mountain biker on volcanic trail
  volcano_quilotoa_crater: '1433086966358-54859d0ed716', // Emerald crater lake
  volcano_tungurahua: '1519681393784-d120267933ba', // Majestic volcano rising over valley
  paramo_cajas_lakes: '1470071459604-3b5ec3a7fe05', // High paramo lake and misty hills
  paramo_polylepis: '1448375240586-882707db888b', // Mystic foggy Andean forest
  paramo_horseback: '1553284965-83fd3e82fa5a', // Horseback riding in the open highlands
  andes_trekking_path: '1483728642387-6c3bdd6c93e5', // High mountain trekking ridge

  // --- BAÑOS & WATERFALLS ---
  banos_waterfall_powerful: '1432405972618-c60b0225b8f9', // Powerful canyon waterfall (Pailon del Diablo)
  banos_waterfall_cascade: '1518495973542-4542c06a5843', // Lush green canyon waterfall
  banos_swing_treehouse: '1501555088652-021faa106b9b', // Swing over valley / high view
  banos_rafting_river: '1530866495561-507c9faab2ed', // Wild white-water river rafting
  banos_canyoning_rappel: '1469854523086-cc02fe5d8800', // Rappel through canyon waterfall
  banos_hot_springs: '1584132967334-10e028bd69f7', // Thermal natural bath
  banos_glamping_luxury: '1510312305653-8ed496efae75', // Scenic glamping dome

  // --- COLONIAL CITIES & HERITAGE ---
  quito_colonial_plaza: '1541971875076-8f970d573be6', // Historic plaza & colonial cathedral
  quito_basilica_vistas: '1513694203232-719a280e022f', // Historic church towers & cobbled streets
  cuenca_cathedral_domes: '1570125909232-eb263c188f7e', // Colonial red roofs and grand cathedral
  cuenca_cobbled_evening: '1513694203232-719a280e022f', // Historic lamplit colonial street
  ingapirca_inca_stone: '1541971875076-8f970d573be6', // Ancestral stone fortress
  loja_colonial_wooden: '1513694203232-719a280e022f', // Heritage colonial facade

  // --- AMAZON RAINFOREST (ORIENTE) ---
  amazon_deep_river: '1516026672322-bc52d61a55d5', // Amazon river with canoe and dense jungle
  amazon_jungle_canopy: '1544735716-392fe2489ffa', // Aerial view of emerald rainforest
  amazon_misty_lagoon: '1548199973-03cce0bbc87b', // Serene rainforest river at dawn
  amazon_wildlife_toucan: '1559827291-72ee739d0d9a', // Colorful tropical bird in jungle
  amazon_indigenous_canoe: '1516026672322-bc52d61a55d5', // Wooden canoe paddling in the jungle
  amazon_eco_lodge: '1544735716-392fe2489ffa', // Sustainable wooden rainforest lodge

  // --- PACIFIC COAST & BEACHES ---
  coast_whale_breaching: '1518709268805-4e9042af9f23', // Humpback whale breaching Pacific ocean
  coast_los_frailes: '1507525428034-b723cf961d3e', // Untouched white sand beach & turquoise sea
  coast_montanita_surf: '1502680390469-be75c86b636f', // Ocean wave surfing
  coast_salinas_marina: '1506953823976-52e1fdc0149a', // Sunny coastal beach and blue sky
  coast_mompiche_palms: '1519046904884-53103b34b206', // Tropical palm tree Pacific beach
  coast_mangrove_canoe: '1448375240586-882707db888b', // Mangrove wetlands boat tour

  // --- CLOUD FOREST & BIRDWATCHING (MINDO) ---
  mindo_cloud_forest: '1448375240586-882707db888b', // Misty subtropical cloud forest
  mindo_hummingbird: '1520808663317-647b476a81b9', // Vibrant hummingbird hovering at flower
  mindo_butterfly: '1444464666168-49d633b86797', // Exotic butterfly in botanical garden
  mindo_canopy_zipline: '1501555088652-021faa106b9b', // Zipline above green tree canopy

  // --- GASTRONOMY & TRADITIONS ---
  food_cacao_chocolate: '1511381939415-e44015466834', // Raw cacao pods & chocolate crafting
  food_fresh_ceviche: '1565299624946-b28f40a0ae38', // Fresh coastal seafood ceviche
  food_andean_roast: '1476224203421-9ac39bcb3327', // Traditional artisanal cooking
  food_coffee_plantation: '1447933601403-0c6688de566e', // Lush specialty coffee beans & cherries
  food_cheese_dairy: '1486297678162-eb2a19b0a32d', // Artisanal Andean cheeses

  // --- CULTURE & ARTISANS ---
  culture_textile_weaving: '1528459801416-a9e53bbf4e17', // Colorful indigenous Otavalo textiles
  culture_artisan_crafts: '1535632066927-ab7c9ab60908', // Master handcrafted jewelry and crafts
  culture_silver_filigree: '1535632066927-ab7c9ab60908', // Master handcrafted silver jewelry
  culture_indigenous_elders: '1528459801416-a9e53bbf4e17', // Andean community tradition

  // --- WELLNESS, SPA & TERMAS ---
  wellness_thermal_pool: '1507652313519-d4e9174996dd', // Steaming volcanic hot spring pool
  wellness_stone_massage: '1540555700478-4be289fbecef', // Hot volcanic stone therapeutic massage
  wellness_mountain_retreat: '1515377905703-c4788e51af15', // Peaceful mountain spa lounge

  // --- ROMANTIC & GLAMPING ---
  romantic_sunset_couple: '1519741497674-611481863552', // Romantic dinner with candlelit views
  romantic_mountain_glamping: '1510312305653-8ed496efae75', // Cozy glamping tent with mountain backdrop
  romantic_fire_evening: '1506197603052-3cc9c3a201bd', // Evening fire pit under stars

  // --- FAMILY & LEISURE ---
  family_alpaca_llama: '1500530855697-b586d89ba3ee', // Highlands farm & nature
  family_lake_boating: '1506744038136-46273834b3fb', // Beautiful mountain lake and rowboat
  family_nature_walk: '1470240731273-7821a6eeb6bd', // Family walking in sunny green park
};

/**
 * Intelligent selector to get 3 matching, distinct images for each package
 */
function getImagesForPackage(pkg) {
  const name = (pkg.name || '').toLowerCase();
  const prov = (pkg.province || '').toLowerCase();
  const city = (pkg.city || '').toLowerCase();
  const cat = (pkg.category || '').toLowerCase();
  const reg = (pkg.region || '').toLowerCase();

  let mainKey = '';
  let sec1Key = '';
  let sec2Key = '';

  // 1. Specific Iconic Landmark Matching
  if (reg === 'galápagos' || prov.includes('galápagos')) {
    if (name.includes('tortuga') && name.includes('santuario')) {
      mainKey = 'galapagos_tortoise_1';
      sec1Key = 'galapagos_tortoise_2';
      sec2Key = 'galapagos_highlands_farm';
    } else if (name.includes('bahía tortuga') || name.includes('playa de arena blanca')) {
      mainKey = 'galapagos_tortuga_bay';
      sec1Key = 'galapagos_volcanic_beach';
      sec2Key = 'galapagos_sea_lion_1';
    } else if (name.includes('snorkel') || name.includes('tiburones') || name.includes('tintoreras')) {
      mainKey = 'galapagos_snorkel_shark';
      sec1Key = 'galapagos_sea_lion_2';
      sec2Key = 'galapagos_underwater_reef';
    } else if (name.includes('sierra negra') || name.includes('volcán')) {
      mainKey = 'galapagos_volcano_crater';
      sec1Key = 'galapagos_volcanic_beach';
      sec2Key = 'galapagos_sea_lion_1';
    } else if (name.includes('langosta') || cat.includes('gastronom')) {
      mainKey = 'galapagos_lobster_dining';
      sec1Key = 'food_fresh_ceviche';
      sec2Key = 'galapagos_sunset_bay';
    } else if (cat.includes('romántic')) {
      mainKey = 'galapagos_sunset_bay';
      sec1Key = 'romantic_sunset_couple';
      sec2Key = 'galapagos_tortuga_bay';
    } else if (cat.includes('bienestar') || cat.includes('spa')) {
      mainKey = 'galapagos_island_spa';
      sec1Key = 'wellness_stone_massage';
      sec2Key = 'galapagos_sunset_bay';
    } else if (cat.includes('familiar')) {
      mainKey = 'galapagos_sea_lion_1';
      sec1Key = 'galapagos_tortoise_2';
      sec2Key = 'galapagos_booby_bird';
    } else if (cat.includes('comunitario') || name.includes('agroturismo')) {
      mainKey = 'galapagos_highlands_farm';
      sec1Key = 'food_coffee_plantation';
      sec2Key = 'galapagos_tortoise_1';
    } else {
      mainKey = 'galapagos_booby_bird';
      sec1Key = 'galapagos_sea_lion_1';
      sec2Key = 'galapagos_volcanic_beach';
    }
  } else if (name.includes('cotopaxi')) {
    mainKey = 'volcano_cotopaxi_1';
    sec1Key = 'volcano_cotopaxi_2';
    sec2Key = name.includes('cabalgata') ? 'paramo_horseback' : 'paramo_cajas_lakes';
  } else if (name.includes('chimborazo')) {
    mainKey = 'volcano_chimborazo_summit';
    sec1Key = name.includes('bicicleta') ? 'volcano_chimborazo_bike' : 'andes_trekking_path';
    sec2Key = 'paramo_cajas_lakes';
  } else if (name.includes('quilotoa')) {
    mainKey = 'volcano_quilotoa_crater';
    sec1Key = 'andes_trekking_path';
    sec2Key = 'romantic_mountain_glamping';
  } else if (name.includes('cajas')) {
    mainKey = 'paramo_cajas_lakes';
    sec1Key = 'paramo_polylepis';
    sec2Key = 'andes_trekking_path';
  } else if (prov.includes('tungurahua') || city.includes('baños')) {
    if (name.includes('pailón') || name.includes('cascadas')) {
      mainKey = 'banos_waterfall_powerful';
      sec1Key = 'banos_waterfall_cascade';
      sec2Key = 'banos_canyoning_rappel';
    } else if (name.includes('columpio') || name.includes('casa del árbol')) {
      mainKey = 'banos_swing_treehouse';
      sec1Key = 'volcano_tungurahua';
      sec2Key = 'family_nature_walk';
    } else if (name.includes('rafting') || name.includes('canyoning') || cat.includes('aventura')) {
      mainKey = 'banos_rafting_river';
      sec1Key = 'banos_canyoning_rappel';
      sec2Key = 'banos_waterfall_powerful';
    } else if (cat.includes('bienestar') || name.includes('termales')) {
      mainKey = 'banos_hot_springs';
      sec1Key = 'wellness_stone_massage';
      sec2Key = 'volcano_tungurahua';
    } else if (cat.includes('romántic') || name.includes('glamping')) {
      mainKey = 'banos_glamping_luxury';
      sec1Key = 'romantic_sunset_couple';
      sec2Key = 'volcano_tungurahua';
    } else if (name.includes('salasaka') || cat.includes('comunitario')) {
      mainKey = 'culture_textile_weaving';
      sec1Key = 'culture_artisan_crafts';
      sec2Key = 'food_andean_roast';
    } else if (cat.includes('gastronom')) {
      mainKey = 'food_andean_roast';
      sec1Key = 'food_cacao_chocolate';
      sec2Key = 'cuenca_cobbled_evening';
    } else {
      mainKey = 'volcano_tungurahua';
      sec1Key = 'banos_waterfall_powerful';
      sec2Key = 'banos_swing_treehouse';
    }
  } else if (name.includes('mindo')) {
    if (name.includes('colibrí') || cat.includes('ecoturismo')) {
      mainKey = 'mindo_hummingbird';
      sec1Key = 'mindo_cloud_forest';
      sec2Key = 'mindo_butterfly';
    } else if (name.includes('canopy') || name.includes('tubing') || cat.includes('aventura')) {
      mainKey = 'mindo_canopy_zipline';
      sec1Key = 'banos_rafting_river';
      sec2Key = 'mindo_cloud_forest';
    } else {
      mainKey = 'mindo_cloud_forest';
      sec1Key = 'mindo_butterfly';
      sec2Key = 'mindo_hummingbird';
    }
  } else if (prov.includes('azuay') || city.includes('cuenca')) {
    if (name.includes('catedral') || name.includes('colonial') || cat.includes('cultural')) {
      mainKey = 'cuenca_cathedral_domes';
      sec1Key = 'cuenca_cobbled_evening';
      sec2Key = 'quito_colonial_plaza';
    } else if (name.includes('chorro de girón') || name.includes('canyoning')) {
      mainKey = 'banos_canyoning_rappel';
      sec1Key = 'banos_waterfall_powerful';
      sec2Key = 'paramo_cajas_lakes';
    } else if (name.includes('chordeleg') || name.includes('filigrana')) {
      mainKey = 'culture_silver_filigree';
      sec1Key = 'culture_textile_weaving';
      sec2Key = 'cuenca_cathedral_domes';
    } else if (name.includes('mote pillo') || name.includes('hornado') || cat.includes('gastronom')) {
      mainKey = 'food_andean_roast';
      sec1Key = 'cuenca_cobbled_evening';
      sec2Key = 'food_coffee_plantation';
    } else if (name.includes('turi') || cat.includes('romántic')) {
      mainKey = 'romantic_sunset_couple';
      sec1Key = 'cuenca_cobbled_evening';
      sec2Key = 'romantic_mountain_glamping';
    } else if (name.includes('busa') || cat.includes('relax')) {
      mainKey = 'family_lake_boating';
      sec1Key = 'paramo_cajas_lakes';
      sec2Key = 'family_nature_walk';
    } else if (cat.includes('bienestar') || name.includes('termal')) {
      mainKey = 'wellness_thermal_pool';
      sec1Key = 'wellness_stone_massage';
      sec2Key = 'cuenca_cathedral_domes';
    } else {
      mainKey = 'cuenca_cathedral_domes';
      sec1Key = 'paramo_cajas_lakes';
      sec2Key = 'cuenca_cobbled_evening';
    }
  } else if (prov.includes('pichincha') || city.includes('quito')) {
    if (name.includes('san francisco') || name.includes('mitad del mundo') || cat.includes('cultural')) {
      mainKey = 'quito_colonial_plaza';
      sec1Key = 'quito_basilica_vistas';
      sec2Key = 'cuenca_cobbled_evening';
    } else if (name.includes('rucu pichincha') || cat.includes('trekking')) {
      mainKey = 'andes_trekking_path';
      sec1Key = 'volcano_cotopaxi_1';
      sec2Key = 'quito_basilica_vistas';
    } else if (name.includes('bizcocho') || name.includes('sangolquí') || cat.includes('gastronom')) {
      mainKey = 'food_andean_roast';
      sec1Key = 'food_cheese_dairy';
      sec2Key = 'food_coffee_plantation';
    } else if (name.includes('teleférico') || cat.includes('familiar')) {
      mainKey = 'family_alpaca_llama';
      sec1Key = 'quito_basilica_vistas';
      sec2Key = 'family_nature_walk';
    } else {
      mainKey = 'quito_basilica_vistas';
      sec1Key = 'quito_colonial_plaza';
      sec2Key = 'volcano_cotopaxi_2';
    }
  } else if (name.includes('ballena') || name.includes('machalilla') || name.includes('puerto lópez')) {
    mainKey = 'coast_whale_breaching';
    sec1Key = 'coast_los_frailes';
    sec2Key = 'coast_mompiche_palms';
  } else if (name.includes('frailes') || name.includes('playa') && prov.includes('manabí')) {
    mainKey = 'coast_los_frailes';
    sec1Key = 'coast_mompiche_palms';
    sec2Key = 'food_fresh_ceviche';
  } else if (name.includes('montañita') || name.includes('surf')) {
    mainKey = 'coast_montanita_surf';
    sec1Key = 'coast_los_frailes';
    sec2Key = 'coast_salinas_marina';
  } else if (name.includes('salinas') && reg === 'costa') {
    mainKey = 'coast_salinas_marina';
    sec1Key = 'coast_los_frailes';
    sec2Key = 'food_fresh_ceviche';
  } else if (name.includes('ingapirca')) {
    mainKey = 'ingapirca_inca_stone';
    sec1Key = 'cuenca_cathedral_domes';
    sec2Key = 'paramo_cajas_lakes';
  } else if (name.includes('otavalo')) {
    mainKey = 'culture_textile_weaving';
    sec1Key = 'culture_artisan_crafts';
    sec2Key = 'family_lake_boating';
  } else if (name.includes('papallacta') || name.includes('termas')) {
    mainKey = 'wellness_thermal_pool';
    sec1Key = 'wellness_stone_massage';
    sec2Key = 'volcano_cotopaxi_2';
  } else if (reg === 'amazonía' || ['napo', 'pastaza', 'orellana', 'sucumbíos', 'morona santiago', 'zamora chinchipe'].includes(prov)) {
    // Amazonian region
    if (name.includes('rafting') || cat.includes('aventura')) {
      mainKey = 'banos_rafting_river';
      sec1Key = 'amazon_deep_river';
      sec2Key = 'amazon_jungle_canopy';
    } else if (cat.includes('comunitario') || name.includes('comunidad') || name.includes('shuar') || name.includes('kichwa')) {
      mainKey = 'amazon_indigenous_canoe';
      sec1Key = 'culture_artisan_crafts';
      sec2Key = 'amazon_deep_river';
    } else if (name.includes('cacao') || cat.includes('gastronom')) {
      mainKey = 'food_cacao_chocolate';
      sec1Key = 'amazon_deep_river';
      sec2Key = 'food_fresh_ceviche';
    } else if (cat.includes('romántic') || cat.includes('spa')) {
      mainKey = 'amazon_eco_lodge';
      sec1Key = 'wellness_thermal_pool';
      sec2Key = 'amazon_misty_lagoon';
    } else if (name.includes('cueva') || name.includes('cascada')) {
      mainKey = 'banos_waterfall_cascade';
      sec1Key = 'amazon_deep_river';
      sec2Key = 'amazon_jungle_canopy';
    } else {
      mainKey = 'amazon_deep_river';
      sec1Key = 'amazon_jungle_canopy';
      sec2Key = 'amazon_wildlife_toucan';
    }
  } else if (reg === 'costa' || ['guayas', 'manabí', 'santa elena', 'esmeraldas', 'el oro', 'los ríos', 'santo domingo de los tsáchilas'].includes(prov)) {
    // Pacific coastal region
    if (cat.includes('playa') || cat.includes('relax')) {
      mainKey = 'coast_los_frailes';
      sec1Key = 'coast_mompiche_palms';
      sec2Key = 'coast_salinas_marina';
    } else if (cat.includes('gastronom') || name.includes('ceviche') || name.includes('marisco')) {
      mainKey = 'food_fresh_ceviche';
      sec1Key = 'food_cacao_chocolate';
      sec2Key = 'coast_salinas_marina';
    } else if (cat.includes('aventura') || name.includes('parapente') || name.includes('surf')) {
      mainKey = 'coast_montanita_surf';
      sec1Key = 'banos_rafting_river';
      sec2Key = 'coast_los_frailes';
    } else if (cat.includes('cultural') || name.includes('centro') || name.includes('catedral')) {
      mainKey = 'quito_colonial_plaza';
      sec1Key = 'cuenca_cobbled_evening';
      sec2Key = 'coast_salinas_marina';
    } else if (cat.includes('romántic')) {
      mainKey = 'coast_mompiche_palms';
      sec1Key = 'romantic_sunset_couple';
      sec2Key = 'coast_salinas_marina';
    } else if (name.includes('cacao') || prov.includes('los ríos')) {
      mainKey = 'food_cacao_chocolate';
      sec1Key = 'coast_mangrove_canoe';
      sec2Key = 'food_fresh_ceviche';
    } else if (name.includes('manglar') || name.includes('churute')) {
      mainKey = 'coast_mangrove_canoe';
      sec1Key = 'amazon_wildlife_toucan';
      sec2Key = 'coast_los_frailes';
    } else {
      mainKey = 'coast_los_frailes';
      sec1Key = 'coast_mompiche_palms';
      sec2Key = 'food_fresh_ceviche';
    }
  } else {
    // Sierra default mapping by category
    if (cat.includes('aventura')) {
      mainKey = 'banos_canyoning_rappel';
      sec1Key = 'banos_rafting_river';
      sec2Key = 'andes_trekking_path';
    } else if (cat.includes('ecoturismo')) {
      mainKey = 'paramo_cajas_lakes';
      sec1Key = 'mindo_cloud_forest';
      sec2Key = 'paramo_polylepis';
    } else if (cat.includes('cultural')) {
      mainKey = 'cuenca_cathedral_domes';
      sec1Key = 'quito_colonial_plaza';
      sec2Key = 'cuenca_cobbled_evening';
    } else if (cat.includes('romántic')) {
      mainKey = 'romantic_mountain_glamping';
      sec1Key = 'romantic_sunset_couple';
      sec2Key = 'volcano_cotopaxi_1';
    } else if (cat.includes('familiar')) {
      mainKey = 'family_alpaca_llama';
      sec1Key = 'family_lake_boating';
      sec2Key = 'family_nature_walk';
    } else if (cat.includes('gastronom')) {
      mainKey = 'food_andean_roast';
      sec1Key = 'food_cheese_dairy';
      sec2Key = 'food_cacao_chocolate';
    } else if (cat.includes('trekking')) {
      mainKey = 'andes_trekking_path';
      sec1Key = 'volcano_cotopaxi_2';
      sec2Key = 'volcano_chimborazo_summit';
    } else if (cat.includes('bienestar') || cat.includes('spa')) {
      mainKey = 'wellness_thermal_pool';
      sec1Key = 'wellness_stone_massage';
      sec2Key = 'wellness_mountain_retreat';
    } else if (cat.includes('comunitario')) {
      mainKey = 'culture_textile_weaving';
      sec1Key = 'culture_artisan_crafts';
      sec2Key = 'family_alpaca_llama';
    } else {
      mainKey = 'volcano_cotopaxi_1';
      sec1Key = 'cuenca_cathedral_domes';
      sec2Key = 'banos_waterfall_powerful';
    }
  }

  // Fallbacks and ensure all 3 photos have distinct IDs
  const allIds = Object.values(PHOTOS);
  let mainId = PHOTOS[mainKey] || PHOTOS['volcano_cotopaxi_1'];
  let sec1Id = PHOTOS[sec1Key];
  if (!sec1Id || sec1Id === mainId) {
    sec1Id = allIds.find(id => id !== mainId) || PHOTOS['paramo_cajas_lakes'];
  }
  let sec2Id = PHOTOS[sec2Key];
  if (!sec2Id || sec2Id === mainId || sec2Id === sec1Id) {
    sec2Id = allIds.find(id => id !== mainId && id !== sec1Id) || PHOTOS['cuenca_cathedral_domes'];
  }

  return {
    image: unsplashWebp(mainId),
    secondaryImages: [unsplashWebp(sec1Id), unsplashWebp(sec2Id)],
  };
}

module.exports = {
  PHOTOS,
  getImagesForPackage,
  unsplashWebp
};
