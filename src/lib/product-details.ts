// =============================================================================
// VidaFlow — Rich Product Details (catalog enrichment)
// Source: ProductsCatalog.docx (Spanish, authoritative) — extracted & translated
//
// This file holds the deep catalog content for each product, keyed by slug:
//   sku, unitsPerBox, servingSize, slogan, longDescription, usage,
//   preparation, restrictions.
//
// It is intentionally separate from src/lib/products.ts (which holds pricing,
// links, country gating and images) so the long prose stays readable and maps
// 1:1 to the printed catalog. Merge at read time via getProductDetails(slug).
//
// COMPLIANCE: wellness language only ("supports", "helps", "promotes").
// No medical claims. EN is a faithful, claim-safe translation of the ES source.
// =============================================================================

export interface ProductDetail {
  sku: string;
  unitsPerBox: number | null;
  servingSize: { en: string; es: string };
  slogan: { en: string; es: string };
  longDescription: { en: string; es: string };
  usage?: { en: string; es: string };
  preparation?: { en: string; es: string };
  restrictions?: { en: string; es: string };
}

// Reusable allergen note (appears on most products in the catalog)
const ALLERGEN = {
  en: "Made in a facility that also processes milk, dairy products, eggs, and soy.",
  es: "Elaborado en equipos donde se procesa leche, productos lácteos, huevos y soya.",
};
const COLD = {
  en: "Dissolve the contents of one stick in a glass with 180 ml of cold water.",
  es: "Disolver el contenido de un stick en un vaso con 180 ml de agua fría.",
};
const HOT = {
  en: "Dissolve the contents of one stick in a cup with 180 ml of hot water.",
  es: "Disolver el contenido de un stick en una taza con 180 ml de agua caliente.",
};
const SHAKE = {
  en: "Using a shaker or blender, mix one stick into a glass with 250 ml of cold water.",
  es: "Con la ayuda de un shaker o batidora, mezclar el contenido de un stick en un vaso con 250 ml de agua fría.",
};

export const productDetails: Record<string, ProductDetail> = {
  // ════════════════════ CORE — CLEANSING ════════════════════
  "flora-liv": {
    sku: "147373", unitsPerBox: 28,
    servingSize: { en: "1 stick (5 g) in 180 ml cold water", es: "1 stick (5 g) en 180 ml de agua fría" },
    slogan: { en: "Protect your body from within.", es: "¡Protege tu organismo desde adentro!" },
    longDescription: {
      en: "A delicious passion-fruit drink with over 10 billion probiotic bacteria that reach the gut alive to promote digestive health and activate the body's natural defenses from the intestinal flora.",
      es: "Deliciosa bebida de granadilla con más de 10 mil millones de bacterias probióticas que llegan vivas al intestino para promover la salud digestiva y activar las defensas naturales del organismo desde la flora intestinal.",
    },
    usage: { en: "One or two sticks a day, preferably in the morning on an empty stomach or at night before bed.", es: "Uno o dos sticks al día, de preferencia por la mañana en ayunas o por la noche antes de dormir." },
    preparation: COLD,
  },
  "liquid-fiber": {
    sku: "145903", unitsPerBox: 28,
    servingSize: { en: "1 stick (5 g) in 180 ml cold water", es: "1 stick (5 g) en 180 ml de agua fría" },
    slogan: { en: "Prebiotic nutrition for a punctual digestive system.", es: "¡Nutrición prebiótica, para un sistema digestivo puntual!" },
    longDescription: {
      en: "A punctual digestive system is the key to starting your day light and in a good mood. This delicious lemon drink is a synergistic blend of short- and long-chain prebiotic fibers (Synergy1®) enriched with micronutrients.",
      es: "La puntualidad de tu sistema digestivo es la clave para empezar el día aliviado y de buen ánimo. Esta deliciosa bebida con sabor a limón es una formulación sinérgica de fibras prebióticas de cadena corta y larga (Synergy1®) enriquecida con micronutrientes.",
    },
    usage: { en: "One or two sticks a day, preferably before bed.", es: "Uno o dos sticks al día, de preferencia antes de acostarse." },
    preparation: COLD, restrictions: ALLERGEN,
  },
  "obalance": {
    sku: "145742", unitsPerBox: 28,
    servingSize: { en: "1 stick (5 g) in 180 ml cold water", es: "1 stick (5 g) en 180 ml de agua fría" },
    slogan: { en: "Keep your body balanced, clean, and purified.", es: "¡Mantén tu cuerpo balanceado, limpio y purificado!" },
    longDescription: {
      en: "An alkalizing green drink that helps promote the cleansing of toxic elements from the body and balance its pH, so you can live healthy and full of energy. Rich in chlorophyll and natural energy from green vegetable extracts.",
      es: "Bebida saludable alcalinizante que te ayuda a promover la limpieza de elementos tóxicos de tu organismo y equilibrar el pH de tu cuerpo, para que puedas vivir sano y con energía. Rica en clorofila y energía natural de extractos de vegetales verdes.",
    },
    usage: { en: "One or two sticks a day, at any time.", es: "Uno o dos sticks al día, en cualquier momento." },
    preparation: COLD,
  },
  "berry-balance": {
    sku: "145744", unitsPerBox: 28,
    servingSize: { en: "1 stick (5 g) in 180 ml cold water", es: "1 stick (5 g) en 180 ml de agua fría" },
    slogan: { en: "Protect your body and keep it in balance.", es: "¡Protege tu organismo y mantenlo en perfecto equilibrio!" },
    longDescription: {
      en: "A delicious concentrate of antioxidants extracted from berries that help protect your urinary system naturally and more completely, supporting the pH balance of the flora that protects the urinary tract.",
      es: "Delicioso concentrado de antioxidantes extraídos de bayas (berries) que ayudan a proteger tu sistema urinario de manera natural y más completa, apoyando el equilibrio del pH de la flora que protege el tracto urinario.",
    },
    usage: { en: "One or two sticks a day, at any time.", es: "Uno o dos sticks al día, en cualquier momento." },
    preparation: COLD,
  },
  "rexet": {
    sku: "146674", unitsPerBox: 28,
    servingSize: { en: "1 effervescent stick (5 g) in 180 ml cold water", es: "1 stick efervescente (5 g) en 180 ml de agua fría" },
    slogan: { en: "Prep and reset your body.", es: "¡Prepara y reinicia tu cuerpo!" },
    longDescription: {
      en: "An effervescent soft drink with ingredients that help reactivate you while promoting the body's detox function and supporting the proper functioning of the liver, favoring the elimination of toxins from the digestive system.",
      es: "Bebida efervescente con ingredientes que ayudan a reactivarte mientras promueven la función depurativa y apoyan el buen funcionamiento del hígado, favoreciendo la eliminación de toxinas desde el sistema digestivo.",
    },
    usage: { en: "Drink it immediately to take advantage of its effervescence.", es: "Tómalo inmediatamente para aprovechar su efervescencia." },
    preparation: { en: "Dissolve the effervescent contents in a large glass with 180 ml of cold water.", es: "Disuelve el contenido efervescente en un vaso grande con 180 ml de agua fría." },
  },
  "probix": {
    sku: "147574", unitsPerBox: 28,
    servingSize: { en: "1 sachet (0.5 g) sprinkled over food", es: "1 sobre (0.5 g) espolvoreado sobre la comida" },
    slogan: { en: "Enhance your food, enhance your health.", es: "Realza tu comida, realza tu salud." },
    longDescription: {
      en: "A next-generation blend of lysed probiotics with natural salts to sprinkle over your meals. Each sachet contains 10 billion lysed probiotics that help regulate metabolism and support a healthy waistline.",
      es: "Nueva combinación de probióticos lisados con sales naturales para espolvorear sobre tus comidas. Cada sobre contiene 10 mil millones de probióticos lisados que ayudan a regular el metabolismo y a cuidar la medida del abdomen.",
    },
    usage: { en: "Consume 1 sachet a day.", es: "Consumir 1 sobre al día." },
    preparation: { en: "Sprinkle the contents of the sachet over your cold or hot meal to taste and mix gently.", es: "Espolvorear al gusto el contenido del sobre en tu plato de comida fría o caliente y mezclar con cuidado." },
  },
  "prunex1": {
    sku: "147763", unitsPerBox: 28,
    servingSize: { en: "½–1 stick (5 g) in 180 ml hot water", es: "½–1 stick (5 g) en 180 ml de agua caliente" },
    slogan: { en: "Free up your digestive transit.", es: "¡Libera el tránsito en tu sistema digestivo!" },
    longDescription: {
      en: "An easy-to-dissolve prune tea with effective ingredients like prune extract, psyllium fiber, linseed mucilage, star anise, and kelp — for gentle digestive cleansing and to help relieve occasional constipation comfortably. Because when it flows smoothly, you feel wonderful.",
      es: "Té de guindones fácil de disolver, con ingredientes efectivos como extracto de ciruela, fibra de psyllium, mucílago de linaza, anís estrella y kelp, para una limpieza digestiva suave y para ayudar a aliviar el estreñimiento ocasional sin molestias.",
    },
    usage: { en: "Half a stick or one stick a day, preferably at night before bed.", es: "Medio stick o un stick al día, de preferencia por la noche antes de dormir." },
    preparation: HOT,
  },

  // ════════════════════ CORE — NUTRITION ════════════════════
  "biopro-tect": {
    sku: "146671", unitsPerBox: 14,
    servingSize: { en: "1 stick (25 g) in 250 ml cold water", es: "1 stick (25 g) en 250 ml de agua fría" },
    slogan: { en: "Activate your natural protection system.", es: "¡Activa tu sistema natural de protección!" },
    longDescription: {
      en: "A delicious instant shake made with the highest-quality protein, Bioprotein+ with Colostrum® — a Fuxion-patented formula with 100% biological value. A complement to healthy daily nutrition that activates and supports the body's defense system, providing lactoferrin, essential amino acids, and micronutrients.",
      es: "Delicioso batido instantáneo a base de la proteína de la más alta calidad: Bioprotein+ con Colostrum®, formulación patentada por Fuxion® con 100% de valor biológico. Aporta lactoferrina, aminoácidos esenciales y micronutrientes que apoyan el sistema de defensas del organismo.",
    },
    usage: { en: "One or two sticks a day as a snack between meals, or as a shake or smoothie.", es: "Uno o dos sticks al día como snack entre comidas, o como batido o smoothie." },
    preparation: SHAKE, restrictions: ALLERGEN,
  },
  "protein-active": {
    sku: "143620 / 143621", unitsPerBox: 14,
    servingSize: { en: "1 stick (25 g) in 250 ml cold water", es: "1 stick (25 g) en 250 ml de agua fría" },
    slogan: { en: "Give your body advanced nutrition.", es: "¡Dale a tu cuerpo nutrición avanzada!" },
    longDescription: {
      en: "A 100% plant-based active protein with high bioavailability and digestibility. Bioprotein Active® combines protein from algae and germinated vegetables processed at low temperatures, keeping the sprouts in full development — making it a living food with active nutrients.",
      es: "Proteína activa de origen 100% vegetal, de alta biodisponibilidad y digestibilidad. Bioprotein Active® combina proteínas de algas y vegetales germinados procesados a bajas temperaturas, lo que la convierte en un alimento vivo con nutrientes activos.",
    },
    usage: { en: "One or two sticks a day as a snack, or as a complement to breakfast or dinner.", es: "Uno o dos sticks al día como snack, o como complemento del desayuno o la cena." },
    preparation: SHAKE,
  },

  // ════════════════════ CORE — ENERGY ════════════════════
  "vita-xtra-t": {
    sku: "147329", unitsPerBox: 28,
    servingSize: { en: "1 stick (5 g) in 180 ml cold water", es: "1 stick (5 g) en 180 ml de agua fría" },
    slogan: { en: "Live every day with first-day energy.", es: "¡Para que vivas cada día con la energía del primero!" },
    longDescription: {
      en: "A unique antioxidant, energizing, multivitamin and multimineral drink — a powerful nutritional source that gives you physical energy and vitality. Its Clean Label formula helps deliver a prolonged energy effect to keep you active all day while helping reduce cellular oxidation.",
      es: "Bebida antioxidante, energizante, multivitamínica y multimineral única, una poderosa fuente nutricional que te brinda energía física y vitalidad. Su fórmula Clean Label te ayuda a obtener un efecto prolongado de energía mientras reduce la oxidación celular.",
    },
    usage: { en: "One or two sticks a day as a snack, or as a shake or smoothie.", es: "Uno o dos sticks al día como snack, o como batido o smoothie." },
    preparation: COLD, restrictions: ALLERGEN,
  },
  "nutraday": {
    sku: "146675", unitsPerBox: 28,
    servingSize: { en: "1 stick (5 g) in 180 ml cold water", es: "1 stick (5 g) en 180 ml de agua fría" },
    slogan: { en: "Give your body the nutrients it needs.", es: "¡Brinda a tu cuerpo los nutrientes que necesita!" },
    longDescription: {
      en: "A delicious natural strawberry refresher with all the micronutrients your family needs for vitality and stronger defenses. Boosted with Moringa extract — a natural source of iron and calcium — it's the ideal food to complement your family's nutrition, from kids to grandparents.",
      es: "Delicioso refresco natural sabor a fresa, con todos los micronutrientes que tu familia y tú necesitan para tener vitalidad y fortalecer sus defensas. Potenciado con extracto de Moringa, fuente natural de hierro y calcio, ideal para complementar la nutrición de toda la familia.",
    },
    usage: { en: "One or two sticks a day, preferably in the morning and afternoon.", es: "Uno o dos sticks al día, de preferencia por las mañanas y por las tardes." },
    preparation: COLD,
  },

  // ════════════════════ ENHANCING — IMMUNE ════════════════════
  "vera-plus": {
    sku: "142322", unitsPerBox: 28,
    servingSize: { en: "1 stick (5 g) in 180 ml hot water", es: "1 stick (5 g) en 180 ml de agua caliente" },
    slogan: { en: "Defenses at their peak.", es: "¡Con tus defensas al tope!" },
    longDescription: {
      en: "A renewed herbal combination that strengthens, awakens, and modulates your immune system, supporting the body's natural defenses. Its ingredients — Aloe Vera extract, olive leaf (Olivactive®), N-Acetylcysteine, Beta Glucans (Wellmune WGP®), and Vitamin C from Amalaki — help keep your defenses at 100%.",
      es: "Renovada combinación herbal que fortalece, despierta y modula tu sistema inmunológico, apoyando las defensas naturales del cuerpo. Sus ingredientes —Aloe Vera, hoja de oliva (Olivactive®), N-Acetilcisteína, Betaglucanos (Wellmune WGP®) y Vitamina C del Amalaki— te ayudan a tener tus defensas al 100%.",
    },
    usage: { en: "One or two sticks a day, at any time.", es: "Uno o dos sticks al día, en cualquier momento." },
    preparation: HOT, restrictions: ALLERGEN,
  },
  "ganomas-cappuccino": {
    sku: "146673", unitsPerBox: 28,
    servingSize: { en: "1 stick (7.5 g) in 180 ml hot water", es: "1 stick (7.5 g) en 180 ml de agua caliente" },
    slogan: { en: "Your health gains more with Gano+.", es: "¡Tu salud gana más con Ganomás!" },
    longDescription: {
      en: "Picture relaxing with a good book, savoring a cappuccino, knowing you're shielding your health. Gano+ is a delicious cappuccino coffee made with Ganoderma Lucidum (Reishi) extract, full of antioxidants and micronutrients that can help support your overall wellbeing.",
      es: "Imagínate relajándote con un buen libro, saboreando un cappuccino y sabiendo que cuidas tu salud. Gano+ es un delicioso café cappuccino hecho con extracto de Ganoderma Lucidum (Reishi), lleno de antioxidantes y micronutrientes que apoyan tu bienestar general.",
    },
    usage: { en: "Two sticks a day, at any time.", es: "Dos sticks al día, en cualquier momento." },
    preparation: HOT, restrictions: ALLERGEN,
  },

  // ════════════════════ ENHANCING — WEIGHT ════════════════════
  "thermo-t3": {
    sku: "147328", unitsPerBox: 28,
    servingSize: { en: "1 stick (5 g) in 180 ml hot water", es: "1 stick (5 g) en 180 ml de agua caliente" },
    slogan: { en: "Turn fat into energy.", es: "¡Transforma la grasa en energía!" },
    longDescription: {
      en: "A powerful combination of three teas (red, black, and green) with a delicious lemon flavor, plus L-Carnitine and Malabar Tamarind to boost its thermogenic effect — helping you burn fat efficiently while generating energy and increasing stamina. Ideal before your workout.",
      es: "Poderosa combinación de tres tés (rojo, negro y verde) con delicioso sabor a limón, e ingredientes como L-carnitina y Tamarindo Malabar que potencian su efecto termogénico, ayudándote a generar energía a partir de la quema de grasa. Ideal antes de tu rutina de ejercicio.",
    },
    usage: { en: "One or two sticks a day after meals. If you exercise, take it before training.", es: "Uno o dos sticks al día, después de las comidas. Si haces ejercicio, tómalo antes de entrenar." },
    preparation: HOT,
    restrictions: { en: "Not suitable for people with hypertension, heart conditions, or caffeine sensitivity. Made in a facility that also processes milk, dairy, eggs, and soy.", es: "No apto para personas hipertensas, con problemas cardiacos o hipersensibilidad a la cafeína. Elaborado en equipos donde se procesa leche, productos lácteos, huevos y soya." },
  },
  "nocarb-t": {
    sku: "143154", unitsPerBox: 28,
    servingSize: { en: "1 stick (5 g) in 180 ml hot water", es: "1 stick (5 g) en 180 ml de agua caliente" },
    slogan: { en: "Keep carbs in check.", es: "¡Pon los carbohidratos en raya!" },
    longDescription: {
      en: "A delicious apple-cinnamon tea based on yacon and acacia fibers that help modulate the body's absorption of carbohydrates and support the natural metabolism of glucose, contributing to weight and waistline management.",
      es: "Delicioso té con sabor a manzana y canela, a base de fibras de yacón y acacia, que ayudan a modular la absorción de carbohidratos y favorecen el metabolismo natural de la glucosa, contribuyendo al control del peso y las medidas.",
    },
    usage: { en: "One or two sticks a day, before or during meals.", es: "Uno o dos sticks al día, antes o durante las comidas." },
    preparation: HOT, restrictions: ALLERGEN,
  },
  "cafe-fit": {
    sku: "142152", unitsPerBox: 28,
    servingSize: { en: "1 stick (5 g) in 180 ml hot water", es: "1 stick (5 g) en 180 ml de agua caliente" },
    slogan: { en: "Treat yourself without losing your figure.", es: "¡Date un gusto sin perder la línea!" },
    longDescription: {
      en: "An irresistible roasted gourmet coffee with green coffee (rich in chlorogenic acid) that helps support appetite control and waistline management. Its antioxidant ingredients help target stored fat while regulating blood sugar and reducing the feeling of fatigue.",
      es: "Irresistible café gourmet tostado, con café verde (rico en ácido clorogénico) que ayuda a controlar el apetito y a cuidar las medidas. Sus ingredientes antioxidantes ayudan a movilizar la grasa acumulada, regular el azúcar en sangre y reducir la sensación de cansancio.",
    },
    usage: { en: "Two sticks a day, preferably between meals to support appetite control.", es: "Dos sticks al día, de preferencia entre comidas para controlar el apetito." },
    preparation: HOT, restrictions: ALLERGEN,
  },
  "cafe-fit-cappuccino": {
    sku: "—", unitsPerBox: 28,
    servingSize: { en: "1 stick (15 g) in 180 ml hot water", es: "1 stick (15 g) en 180 ml de agua caliente" },
    slogan: { en: "Treat yourself, cappuccino-style.", es: "¡Date un gusto, estilo cappuccino!" },
    longDescription: {
      en: "The creamy cappuccino version of our gourmet green-coffee blend — the same appetite-control and waistline support you love, with a rich, satisfying cappuccino twist.",
      es: "La cremosa versión cappuccino de nuestra mezcla gourmet de café verde: el mismo apoyo al control del apetito y al cuidado de las medidas, con un delicioso toque de cappuccino.",
    },
    usage: { en: "Two sticks a day, preferably between meals.", es: "Dos sticks al día, de preferencia entre comidas." },
    preparation: HOT, restrictions: ALLERGEN,
  },
  "chocolate-fit": {
    sku: "143875", unitsPerBox: 14,
    servingSize: { en: "1 stick (15 g) — 2 cups daily", es: "1 stick (15 g) — 2 tazas al día" },
    slogan: { en: "Stay in shape, deliciously.", es: "¡Mantente en forma deliciosamente!" },
    longDescription: {
      en: "A delicious drink made from dark Amazon chocolate, non-dairy creamer, and spices. Enriched with chlorogenic acids from green coffee and CLA (Conjugated Linoleic Acid) — ingredients that help support waistline management and calm the urge to snack.",
      es: "Deliciosa bebida a base de chocolate negro del Amazonas, crema no láctea y especias. Enriquecida con ácidos clorogénicos del café verde y CLA (Ácido Linoleico Conjugado), ingredientes que ayudan a cuidar las medidas y a calmar la ansiedad por comer.",
    },
    usage: { en: "Two sticks a day, at any time.", es: "Dos sticks al día, en cualquier momento." },
    preparation: { en: "Dissolve one stick in a cup with hot water and mix well.", es: "Disolver un stick en una taza con agua caliente y mezclar bien." },
  },
  "biopro-fit": {
    sku: "146672", unitsPerBox: 14,
    servingSize: { en: "1 stick (25 g) in 250 ml cold water", es: "1 stick (25 g) en 250 ml de agua fría" },
    slogan: { en: "Improve your nutrition and trim inches.", es: "¡Mejora tu nutrición y reduce medidas!" },
    longDescription: {
      en: "A delicious protein shake based on Bioprotein+ with Colostrum®, a Fuxion-patented formula with high nutrient absorption and low calories. Enriched with Prolibra®, which is clinically shown to help reduce body fat while preserving lean mass for healthy weight management.",
      es: "Delicioso batido de proteínas a base de Bioprotein+ con Colostrum®, fórmula patentada por Fuxion, de alta asimilación de nutrientes y baja en calorías. Enriquecido con Prolibra®, clínicamente comprobado para apoyar la reducción de grasa corporal manteniendo la masa magra.",
    },
    usage: { en: "Two sticks a day as a snack between meals, as a shake or smoothie.", es: "Dos sticks al día como snack entre comidas, como batido o smoothie." },
    preparation: SHAKE, restrictions: ALLERGEN,
  },
  "protein-active-fit": {
    sku: "143622 / 143623", unitsPerBox: 14,
    servingSize: { en: "1 stick (25 g) in 250 ml cold water", es: "1 stick (25 g) en 250 ml de agua fría" },
    slogan: { en: "Advanced plant nutrition that helps you trim inches.", es: "¡Mejora tu nutrición y reduce medidas!" },
    longDescription: {
      en: "A 100% plant-based active protein, boosted with Malabar Tamarind, L-Carnitine, B-complex vitamins, chromium, and zinc in organic molecule form to help keep your energy metabolism optimal and support fat reduction. Low-calorie, allergen-free, and high biological value.",
      es: "Proteína activa 100% vegetal, potenciada con Tamarindo Malabar, L-Carnitina, Vitaminas del Complejo B, Cromo y Zinc en molécula orgánica, que ayudan a mantener óptimo tu metabolismo energético y a apoyar la reducción de grasa. Baja en calorías, libre de alérgenos y de alto valor biológico.",
    },
    usage: { en: "Two sticks a day as a snack between meals, as a shake or smoothie.", es: "Dos sticks al día como snack entre comidas, como batido o smoothie." },
    preparation: SHAKE,
  },

  // ════════════════════ ENHANCING — ANTI-AGE ════════════════════
  "probal": {
    sku: "143624", unitsPerBox: 28,
    servingSize: { en: "1–2 sticks (5 g) daily", es: "1–2 sticks (5 g) al día" },
    slogan: { en: "An empowered woman stops at nothing.", es: "¡Una mujer empoderada no se detiene con nada!" },
    longDescription: {
      en: "A delicious herbal tea combining amino acids, plant extracts, vitamins, and minerals that help balance the changes typical of menopause — such as mood swings and hot flashes — and the discomfort that can appear during the menstrual period.",
      es: "Delicioso té herbal que combina aminoácidos, extractos vegetales, vitaminas y minerales que ayudan a equilibrar los desbalances propios de la menopausia, como cambios de humor y bochornos, y las molestias que aparecen durante el periodo.",
    },
    usage: { en: "Consume 1 or 2 sticks a day.", es: "Consumir 1 o 2 sticks al día." },
    preparation: HOT,
  },
  "passion": {
    sku: "143363", unitsPerBox: 28,
    servingSize: { en: "1 stick (5 g) in 180 ml cold water", es: "1 stick (5 g) en 180 ml de agua fría" },
    slogan: { en: "Let passion last forever.", es: "¡La pasión durará una eternidad!" },
    longDescription: {
      en: "A pleasant, invigorating guaraná-flavored drink based on amino acids, royal jelly, and natural antioxidants. Its continued use helps restore vitality and physical stamina.",
      es: "Agradable bebida vigorizante con sabor a guaraná, a base de aminoácidos, jalea real y antioxidantes naturales. Su consumo continuo contribuye a restaurar la vitalidad y la resistencia física.",
    },
    usage: { en: "One stick a day, at any time.", es: "Un stick al día, en cualquier momento." },
    preparation: COLD, restrictions: ALLERGEN,
  },
  "youth-elixir": {
    sku: "147324", unitsPerBox: 28,
    servingSize: { en: "1 stick (5 g) in 180 ml cold water", es: "1 stick (5 g) en 180 ml de agua fría" },
    slogan: { en: "Live your youth for longer.", es: "¡Vive tu juventud por más tiempo!" },
    longDescription: {
      en: "A delicious anti-aging drink that blends nature's ancestral wisdom with a perfect combination of amino acids (L-arginine, L-glutamine, L-ornithine) that help nourish the pituitary gland, plus Resveratrol and a super-fruit antioxidant mix (Optiberry®) to help slow the effects of aging.",
      es: "Deliciosa bebida anti-edad que combina el conocimiento ancestral de la naturaleza con una perfecta combinación de aminoácidos (L-arginina, L-glutamina y L-ornitina) que ayudan a nutrir la glándula pituitaria, además de Resveratrol y un mix antioxidante de súper frutas (Optiberry®) para ayudar a retardar los efectos del envejecimiento.",
    },
    usage: { en: "One or two sticks a day, preferably before bed.", es: "Uno o dos sticks al día, de preferencia antes de acostarse." },
    preparation: COLD, restrictions: ALLERGEN,
  },
  "golden-flx": {
    sku: "143378", unitsPerBox: 28,
    servingSize: { en: "1 stick (5 g) in 180 ml hot water", es: "1 stick (5 g) en 180 ml de agua caliente" },
    slogan: { en: "Enjoy every step of life's great race.", es: "¡Disfruta cada paso de la gran carrera de la vida!" },
    longDescription: {
      en: "A delicious functional drink inspired by the traditional turmeric-and-spice 'Golden Milk' to help support joint mobility and flexibility. It pairs standardized organic turmeric extract (Turnipure®) with ginger and cardamom, plus coconut milk and black pepper extract for better nutrient absorption.",
      es: "Deliciosa bebida funcional inspirada en el tradicional ponche de cúrcuma y especias 'Golden Milk', para ayudar a la movilidad y flexibilidad articular. Combina extracto de cúrcuma orgánica estandarizado (Turnipure®) con jengibre y cardamomo, además de leche de coco y pimienta negra para una mejor absorción de nutrientes.",
    },
    usage: { en: "One or two sticks a day, at any time.", es: "Uno o dos sticks al día, en cualquier momento." },
    preparation: HOT,
  },
  "beauty-in": {
    sku: "143406", unitsPerBox: 28,
    servingSize: { en: "1 stick (5 g) in 180 ml cold water", es: "1 stick (5 g) en 180 ml de agua fría" },
    slogan: { en: "True beauty starts from within.", es: "¡El secreto de la verdadera belleza viene desde adentro!" },
    longDescription: {
      en: "If you want beautiful, radiant skin, you need Beauty-In! A delicious cocktail of exotic fruits full of nutrients that help support the regeneration of collagen and elastin fibers in the skin's inner layers. Made with bioactive collagen peptides, CoQ10, hyaluronic acid, vitamins, and biotin working in synergy for optimal skin nutrition.",
      es: "Si quieres una piel bella y radiante, ¡necesitas Beauty-In! Delicioso coctel de frutas exóticas lleno de nutrientes que ayudan a la regeneración de las fibras de colágeno y elastina de las capas internas de la piel. Hecho con péptidos de colágeno bioactivo, CoQ10, ácido hialurónico, vitaminas y biotina, en sinergia para una nutrición óptima de la piel.",
    },
    usage: { en: "One stick a day, preferably before bed.", es: "Un stick al día, de preferencia antes de acostarse." },
    preparation: COLD, restrictions: ALLERGEN,
  },

  // ════════════════════ ENHANCING — MENTAL ════════════════════
  "on": {
    sku: "143364", unitsPerBox: 28,
    servingSize: { en: "1 stick (5 g) in 180 ml cold water", es: "1 stick (5 g) en 180 ml de agua fría" },
    slogan: { en: "An active, alert mind.", es: "¡Mente activa y alerta!" },
    longDescription: {
      en: "A delicious functional drink that works at the neuronal level to activate the mind and help you stay more alert. ON is made with Taurine and Yerba Mate extract — two natural brain stimulants — working in synergy with Vitamin C, minerals, essential oils, and amino acids to help support neuronal nutrition.",
      es: "Deliciosa bebida funcional que actúa a nivel neuronal, activando la mente para ayudarte a estar más alerta. ON está hecho a base de Taurina y extracto de Yerba Mate, dos estimulantes naturales del cerebro, en sinergia con Vitamina C, minerales, aceites esenciales y aminoácidos que apoyan la nutrición neuronal.",
    },
    usage: { en: "One or two sticks a day, at any time.", es: "Uno o dos sticks al día, en cualquier momento." },
    preparation: COLD,
  },
  "off": {
    sku: "143882", unitsPerBox: 28,
    servingSize: { en: "1 stick (5 g) in 180 ml cold water", es: "1 stick (5 g) en 180 ml de agua fría" },
    slogan: { en: "Live tense moments — without the tension.", es: "¡Vive los momentos de tensión, pero sin tensión!" },
    longDescription: {
      en: "A delicious nutritive drink based on essential amino acids that act on the brain to keep it relaxed, focused, and positive. Combined with Amalaki and Ashwagandha extracts, B-complex vitamins, and minerals, it supports better neuronal nutrition and natural relaxation — without causing drowsiness.",
      es: "Deliciosa bebida nutritiva a base de aminoácidos esenciales que actúan sobre el cerebro para mantenerlo relajado, enfocado y en positivo. En combinación con extractos de Amalaki y Ashwagandha, vitaminas del complejo B y minerales, apoya la nutrición neuronal y la relajación natural, sin producir somnolencia.",
    },
    usage: { en: "One or two sticks a day, at any time. For better sleep quality, take before bed.", es: "Uno o dos sticks al día, en cualquier momento. Para mejorar la calidad del sueño, puede tomarse antes de dormir." },
    preparation: COLD,
  },
  "no-stress": {
    sku: "—", unitsPerBox: 28,
    servingSize: { en: "1 stick (5 g) in 180 ml hot water", es: "1 stick (5 g) en 180 ml de agua caliente" },
    slogan: { en: "Find your calm.", es: "¡Encuentra tu calma!" },
    longDescription: {
      en: "A soothing herbal formula designed to support stress management and promote a balanced, relaxed state of mind, helping you maintain emotional wellbeing throughout your day.",
      es: "Reconfortante fórmula herbal diseñada para apoyar el manejo del estrés y promover un estado mental equilibrado y relajado, ayudándote a mantener el bienestar emocional durante el día.",
    },
    usage: { en: "One or two sticks a day, at any time.", es: "Uno o dos sticks al día, en cualquier momento." },
    preparation: HOT,
  },

  // ════════════════════ ENHANCING — SPORT ════════════════════
  "pre-sport": {
    sku: "143626", unitsPerBox: 28,
    servingSize: { en: "1 stick (5 g) in 180 ml cold water", es: "1 stick (5 g) en 180 ml de agua fría" },
    slogan: { en: "Start like a winner.", es: "¡Empieza como ganador!" },
    longDescription: {
      en: "A natural isotonic, rehydrating, and energizing drink that prepares the body for intense sports activity and helps improve performance during exercise, with watermelon citrulline, beetroot betalain, creatine nitrate, and an isotonic electrolyte mix.",
      es: "Bebida isotónica, rehidratante y energizante natural que prepara al cuerpo para la actividad deportiva intensa y ayuda a mejorar el rendimiento durante el ejercicio, con citrulina de sandía, betalanina de betarraga, creatina nitrato y un mix isotónico de electrolitos.",
    },
    usage: { en: "One stick a day, before training.", es: "Un stick al día, antes del entrenamiento." },
    preparation: { en: "Dissolve one stick in a glass with 180 ml of cold water and mix well.", es: "Disolver un stick en un vaso con 180 ml de agua fría y mezclar bien." },
  },
  "xtra-mile": {
    sku: "144306", unitsPerBox: 28,
    servingSize: { en: "1 stick (5 g) in 180 ml cold water", es: "1 stick (5 g) en 180 ml de agua fría" },
    slogan: { en: "You set the goal, Xtra Mile brings the extra energy.", es: "¡Tú pones el objetivo, Xtra Mile la energía extra!" },
    longDescription: {
      en: "An endurance isotonic drink based on Palatinose® — a low-glycemic-index carbohydrate from beetroot that provides balanced, sustained energy over time. Its isotonic mix of Amazonian coconut water, 6 minerals, and Maras salt helps make your hydration more efficient and helps avoid fatigue.",
      es: "Bebida isotónica de resistencia a base de Palatinose®, carbohidrato de bajo índice glucémico obtenido de la betarraga, que brinda energía balanceada y sostenida. Su mix isotónico de agua de coco amazónico, 6 minerales y Sal de Maras ayuda a una hidratación más eficiente y a evitar la fatiga.",
    },
    usage: { en: "One stick a day, before or during training.", es: "Un stick al día, antes o durante el entrenamiento." },
    preparation: { en: "Dissolve one stick in a glass with 180 ml of cold water and mix well.", es: "Disolver un stick en un vaso con 180 ml de agua fría y mezclar bien." },
  },
  "post-sport": {
    sku: "143625", unitsPerBox: 28,
    servingSize: { en: "1 stick (5 g) in 180 ml cold water", es: "1 stick (5 g) en 180 ml de agua fría" },
    slogan: { en: "Recover and come back stronger.", es: "¡Recupérate y vuelve más fuerte!" },
    longDescription: {
      en: "A nutritive drink based on amino acids, coconut water, and antioxidants that helps the body recover after exercise. Rich in branched-chain amino acids (BCAAs) that support the recovery, growth, and strengthening of muscle fibers.",
      es: "Bebida nutritiva a base de aminoácidos, agua de coco y antioxidantes que ayuda a la recuperación del cuerpo después del ejercicio. Rica en aminoácidos de cadena ramificada (BCAAs) que promueven la recuperación, el incremento y el fortalecimiento de las fibras musculares.",
    },
    usage: { en: "One stick a day, after training.", es: "Un stick al día, después del entrenamiento." },
    preparation: COLD,
  },
  "biopro-sport": {
    sku: "147249", unitsPerBox: 14,
    servingSize: { en: "1 stick (25 g) in 250 ml cold water", es: "1 stick (25 g) en 250 ml de agua fría" },
    slogan: { en: "Healthy exercise, toned muscles.", es: "¡Ejercicio saludable y músculos tonificados!" },
    longDescription: {
      en: "A protein shake that helps nourish your muscles properly to prevent deterioration and promote healthy body development, thanks to Bioprotein+ with Colostrum®, a Fuxion-patented formula enriched with Actinos® and amino acids.",
      es: "Batido proteico que ayuda a nutrir tus músculos adecuadamente para evitar su deterioro y promover un sano desarrollo del cuerpo, gracias a Bioprotein+ con Colostrum®, fórmula patentada de Fuxion, enriquecida con Actinos® y aminoácidos.",
    },
    usage: { en: "Two sticks a day, between meals or after training.", es: "Dos sticks al día, entre comidas o después del entrenamiento." },
    preparation: SHAKE,
  },
  "protein-active-sport": {
    sku: "143627 / 143628", unitsPerBox: 14,
    servingSize: { en: "1 stick (25 g) in 250 ml cold water", es: "1 stick (25 g) en 250 ml de agua fría" },
    slogan: { en: "Healthy exercise, toned muscles.", es: "¡Ejercicio saludable y músculos tonificados!" },
    longDescription: {
      en: "A 100% plant-based active protein that promotes cellular regeneration and healthy muscle development, nourishing muscles with essential amino acids that stimulate recovery after intense exercise. Its germinated protein makes it a living food for better results in less time.",
      es: "Proteína activa 100% vegetal que promueve la regeneración celular y el desarrollo saludable de la masa muscular, nutriendo los músculos con aminoácidos esenciales que estimulan la recuperación tras el ejercicio intenso. Su proteína germinada la convierte en un alimento vivo para mejores resultados en menos tiempo.",
    },
    usage: { en: "Two sticks a day, between meals or after training.", es: "Dos sticks al día, entre comidas o después del entrenamiento." },
    preparation: SHAKE,
  },

  // ════════════════════ COMBOS & PACKS ════════════════════
  "10-14-pack": {
    sku: "146676", unitsPerBox: null,
    servingSize: { en: "14-day program (multiple products)", es: "Programa de 14 días (varios productos)" },
    slogan: { en: "Manage your weight without sacrifices.", es: "¡Nutrición integral para administrar tu peso sin sacrificios!" },
    longDescription: {
      en: "A 14-day program to manage your weight and measurements, created by Fuxion's team of nutritionists and complemented with low-calorie nutraceutical foods. It aims to change eating habits to promote gradual weight reduction and the maintenance of a great figure, and includes diet and exercise plans.",
      es: "Programa de 14 días para administrar tu peso y medidas, creado por el equipo de nutricionistas de Fuxion y complementado con alimentos nutracéuticos bajos en calorías. Busca cambiar hábitos de alimentación para promover la reducción de peso paulatina, e incluye dietas y un plan de ejercicio.",
    },
  },
  "pack-5-14-gt": {
    sku: "144746", unitsPerBox: null,
    servingSize: { en: "14-day program (multiple products)", es: "Programa de 14 días (varios productos)" },
    slogan: { en: "Lose those extra pounds and gain health.", es: "¡Pierde esos kilos de más y gana salud!" },
    longDescription: {
      en: "A comprehensive nutrition program designed by health professionals to help you build healthy eating and lifestyle habits while reducing extra pounds, toning muscles, and gaining vitality. Includes 100% plant-based, low-calorie Fuxion foods that promote greater satiety, fat burning, and muscle toning.",
      es: "Programa de nutrición integral diseñado por profesionales de la salud que te ayuda a adquirir hábitos saludables mientras reduces kilos de más, tonificas tus músculos y ganas vitalidad. Incluye alimentos Fuxion 100% vegetales y bajos en calorías que promueven la saciedad, la quema de grasa y la tonificación muscular.",
    },
  },
  "forever-young-combo": {
    sku: "146740", unitsPerBox: null,
    servingSize: { en: "5-product anti-age combo", es: "Combo anti-edad de 5 productos" },
    slogan: { en: "Rejuvenate, day after day.", es: "¡Rejuvenece, día tras día!" },
    longDescription: {
      en: "A premium anti-aging combo for cellular rejuvenation, collagen support, and youthful vitality. Includes Flora Liv, Vita Xtra T+, Beauty-In, and 2 Youth Elixir.",
      es: "Combo premium anti-edad para el rejuvenecimiento celular, el soporte de colágeno y la vitalidad juvenil. Incluye Flora Liv, Vita Xtra T+, Beauty-In y 2 Youth Elixir.",
    },
  },
  "natural-defense-combo": {
    sku: "146741", unitsPerBox: null,
    servingSize: { en: "5-product immune combo", es: "Combo inmunológico de 5 productos" },
    slogan: { en: "Build your natural shield.", es: "¡Construye tu escudo natural!" },
    longDescription: {
      en: "An immune-support combo to back your body's natural defense system year-round. Includes Prunex1, Flora Liv, Vita Xtra T+, Vera+, and Gano+ Cappuccino.",
      es: "Combo de soporte inmune para apoyar el sistema de defensa natural de tu cuerpo todo el año. Incluye Prunex1, Flora Liv, Vita Xtra T+, Vera+ y Gano+ Cappuccino.",
    },
  },
  "sport-combo": {
    sku: "146743", unitsPerBox: null,
    servingSize: { en: "5-product sport combo", es: "Combo deportivo de 5 productos" },
    slogan: { en: "Pre, during, and post — fully covered.", es: "¡Pre, durante y post: totalmente cubierto!" },
    longDescription: {
      en: "A complete sport-performance pack with pre-, during-, and post-workout nutrition support. Includes Thermo T3, Protein Active Sport, Pre Sport, Xtra Mile, and Post Sport.",
      es: "Pack completo de rendimiento deportivo con soporte de nutrición pre, durante y post entrenamiento. Incluye Thermo T3, Protein Active Sport, Pre Sport, Xtra Mile y Post Sport.",
    },
  },
  "full-power-combo": {
    sku: "146744", unitsPerBox: null,
    servingSize: { en: "5-product energy combo", es: "Combo de energía de 5 productos" },
    slogan: { en: "Maximum energy, every day.", es: "¡Máxima energía, cada día!" },
    longDescription: {
      en: "An all-in-one energy and vitality combo for maximum daily performance and wellbeing. Includes 2 Vita Xtra T+, Passion, and 2 ON.",
      es: "Combo todo-en-uno de energía y vitalidad para máximo rendimiento diario y bienestar. Incluye 2 Vita Xtra T+, Passion y 2 ON.",
    },
  },
  "vigor-combo": {
    sku: "146968", unitsPerBox: null,
    servingSize: { en: "5-product vitality combo", es: "Combo de vitalidad de 5 productos" },
    slogan: { en: "Energy, endurance, and vigor.", es: "¡Energía, resistencia y vigor!" },
    longDescription: {
      en: "A vitality and stamina combo to support energy, endurance, and overall vigor. Includes Liquid Fiber, Protein Active, ON, Xtra Mile, and OFF.",
      es: "Combo de vitalidad y resistencia para apoyar la energía, el aguante y el vigor general. Incluye Liquid Fiber, Protein Active, ON, Xtra Mile y OFF.",
    },
  },
  "weight-control-combo-1": {
    sku: "146957", unitsPerBox: null,
    servingSize: { en: "5-product weight combo", es: "Combo control de peso de 5 productos" },
    slogan: { en: "Your weight, under control.", es: "¡Tu peso, bajo control!" },
    longDescription: {
      en: "A weight-management combo built around protein, thermogenics, and carbohydrate support. Includes Protein Active Fit (Chocolate & Hazelnut), Thermo T3, NoCarb-T, Vita Xtra T+, and Prunex1.",
      es: "Combo de control de peso construido con proteína, termogénicos y soporte de carbohidratos. Incluye Protein Active Fit (Chocolate y Avellana), Thermo T3, NoCarb-T, Vita Xtra T+ y Prunex1.",
    },
  },
  "weight-control-combo-2": {
    sku: "146958", unitsPerBox: null,
    servingSize: { en: "5-product weight + sport combo", es: "Combo control de peso + sport de 5 productos" },
    slogan: { en: "Train, burn, recover.", es: "¡Entrena, quema, recupera!" },
    longDescription: {
      en: "A weight-and-performance combo for active lifestyles. Includes Protein Active Sport (Vanilla & Cinnamon), Pre Sport, Post Sport, NoCarb-T, and Thermo T3.",
      es: "Combo de control de peso y rendimiento para estilos de vida activos. Incluye Protein Active Sport (Vainilla y Canela), Pre Sport, Post Sport, NoCarb-T y Thermo T3.",
    },
  },
  "weight-control-combo-4": {
    sku: "146960", unitsPerBox: null,
    servingSize: { en: "5-product weight combo", es: "Combo control de peso de 5 productos" },
    slogan: { en: "Trim inches, the smart way.", es: "¡Reduce medidas, de forma inteligente!" },
    longDescription: {
      en: "A waistline-focused combo pairing carbohydrate support, thermogenics, and gourmet coffee. Includes NoCarb-T, Thermo T3, Café & Café Fit, Prunex1, and Vita Xtra T+.",
      es: "Combo enfocado en las medidas que combina soporte de carbohidratos, termogénicos y café gourmet. Incluye NoCarb-T, Thermo T3, Café & Café Fit, Prunex1 y Vita Xtra T+.",
    },
  },
  "lifestyle-combo-1": {
    sku: "146961", unitsPerBox: null,
    servingSize: { en: "5-product lifestyle combo", es: "Combo estilo de vida de 5 productos" },
    slogan: { en: "Beauty, balance, and focus.", es: "¡Belleza, equilibrio y enfoque!" },
    longDescription: {
      en: "A lifestyle combo for beauty, balance, and mental wellbeing. Includes Youth Elixir, Beauty-In, Probal, ON, and OFF.",
      es: "Combo de estilo de vida para la belleza, el equilibrio y el bienestar mental. Incluye Youth Elixir, Beauty-In, Probal, ON y OFF.",
    },
  },
  "lifestyle-combo-2": {
    sku: "146962", unitsPerBox: null,
    servingSize: { en: "5-product lifestyle combo", es: "Combo estilo de vida de 5 productos" },
    slogan: { en: "Digestion, balance, and energy.", es: "¡Digestión, equilibrio y energía!" },
    longDescription: {
      en: "A lifestyle combo focused on digestion, balance, and daily energy. Includes Liquid Fiber, Berry Balance, Vita Xtra T+, NoCarb-T, and Thermo T3.",
      es: "Combo de estilo de vida enfocado en la digestión, el equilibrio y la energía diaria. Incluye Liquid Fiber, Berry Balance, Vita Xtra T+, NoCarb-T y Thermo T3.",
    },
  },
  "lifestyle-combo-3": {
    sku: "146963", unitsPerBox: null,
    servingSize: { en: "5-product lifestyle combo", es: "Combo estilo de vida de 5 productos" },
    slogan: { en: "Cleanse, balance, and glow.", es: "¡Limpia, equilibra y resplandece!" },
    longDescription: {
      en: "A lifestyle combo for cleansing and everyday balance. Includes Alpha Balance, Café & Café Fit, Berry Balance, Flora Liv, and NoCarb-T.",
      es: "Combo de estilo de vida para la limpieza y el equilibrio diario. Incluye Alpha Balance, Café & Café Fit, Berry Balance, Flora Liv y NoCarb-T.",
    },
  },
  "anti-age-combo-1": {
    sku: "146964", unitsPerBox: null,
    servingSize: { en: "5-product anti-age combo", es: "Combo anti-edad de 5 productos" },
    slogan: { en: "Nourish your beauty, revitalize every day.", es: "¡Nutre tu belleza, revitaliza cada día!" },
    longDescription: {
      en: "An anti-aging combo for radiant skin and daily vitality. Includes Vita Xtra T+, Berry Balance, Beauty-In, Liquid Fiber, and Xtra Mile.",
      es: "Combo anti-edad para una piel radiante y vitalidad diaria. Incluye Vita Xtra T+, Berry Balance, Beauty-In, Liquid Fiber y Xtra Mile.",
    },
  },
  "anti-age-combo-2": {
    sku: "146965", unitsPerBox: null,
    servingSize: { en: "5-product anti-age combo", es: "Combo anti-edad de 5 productos" },
    slogan: { en: "Youthful inside and out.", es: "¡Juventud por dentro y por fuera!" },
    longDescription: {
      en: "An anti-aging combo balancing metabolism, vitality, and immunity. Includes NoCarb-T, Thermo T3, Youth Elixir, Vera+, and Passion.",
      es: "Combo anti-edad que equilibra metabolismo, vitalidad e inmunidad. Incluye NoCarb-T, Thermo T3, Youth Elixir, Vera+ y Passion.",
    },
  },
  "anti-age-combo-3": {
    sku: "146966", unitsPerBox: null,
    servingSize: { en: "5-product anti-age combo", es: "Combo anti-edad de 5 productos" },
    slogan: { en: "Move, glow, and thrive.", es: "¡Muévete, resplandece y florece!" },
    longDescription: {
      en: "An anti-aging combo supporting joints, beauty, and vitality. Includes Prunex1, Golden FLX, NoCarb-T, Passion, and Beauty-In.",
      es: "Combo anti-edad que apoya articulaciones, belleza y vitalidad. Incluye Prunex1, Golden FLX, NoCarb-T, Passion y Beauty-In.",
    },
  },
  "anti-age-combo-4": {
    sku: "146967", unitsPerBox: null,
    servingSize: { en: "5-product anti-age combo", es: "Combo anti-edad de 5 productos" },
    slogan: { en: "Radiance, balance, and wellbeing.", es: "¡Resplandor, equilibrio y bienestar!" },
    longDescription: {
      en: "An anti-aging combo for skin, balance, and immune wellbeing. Includes Probal, Beauty-In, Berry Balance, Youth Elixir, and Gano+ Cappuccino.",
      es: "Combo anti-edad para la piel, el equilibrio y el bienestar inmune. Incluye Probal, Beauty-In, Berry Balance, Youth Elixir y Gano+ Cappuccino.",
    },
  },

  // ════════════════════ SEASONAL — FATHER'S DAY ════════════════════
  "combo-dia-del-padre-probix-nocarb": {
    sku: "150938", unitsPerBox: null,
    servingSize: { en: "Gift combo (2 products + gift bag)", es: "Combo de regalo (2 productos + bolsa)" },
    slogan: { en: "For the dad who keeps it in balance.", es: "¡Para el papá que se mantiene en equilibrio!" },
    longDescription: {
      en: "A Father's Day gift combo for digestive and weight-management support: 1 Probix + 1 NoCarb-T + 1 Fuxion gift bag.",
      es: "Combo de regalo del Día del Padre para soporte digestivo y de control de peso: 1 Probix + 1 NoCarb-T + 1 bolsa de regalo Fuxion.",
    },
  },
  "combo-dia-del-padre-sport": {
    sku: "150939", unitsPerBox: null,
    servingSize: { en: "Gift combo (2 products + gift bag)", es: "Combo de regalo (2 productos + bolsa)" },
    slogan: { en: "For the dad who never stops.", es: "¡Para el papá que no se detiene!" },
    longDescription: {
      en: "A Father's Day sport combo for active dads: 1 BioPro+ Sport + 1 Pre Sport + 1 Fuxion gift bag.",
      es: "Combo deportivo del Día del Padre para papás activos: 1 BioPro+ Sport + 1 Pre Sport + 1 bolsa de regalo Fuxion.",
    },
  },
  "combo-dia-del-padre-mental": {
    sku: "150940", unitsPerBox: null,
    servingSize: { en: "Gift combo (2 products + gift bag)", es: "Combo de regalo (2 productos + bolsa)" },
    slogan: { en: "Focus by day, calm by night.", es: "¡Enfoque de día, calma de noche!" },
    longDescription: {
      en: "A Father's Day mental-wellness combo: 1 ON + 1 No Stress + 1 Fuxion gift bag.",
      es: "Combo de bienestar mental del Día del Padre: 1 ON + 1 No Stress + 1 bolsa de regalo Fuxion.",
    },
  },
  "fathers-day-on-off": {
    sku: "150935", unitsPerBox: null,
    servingSize: { en: "Gift combo (2 products + gift bag)", es: "Combo de regalo (2 productos + bolsa)" },
    slogan: { en: "Focus by day, calm by night.", es: "¡Enfoque de día, calma de noche!" },
    longDescription: {
      en: "A Father's Day special for the dad who needs focus by day and calm by night: 1 ON + 1 OFF + 1 Fuxion gift bag.",
      es: "Especial del Día del Padre para el papá que necesita enfoque de día y calma de noche: 1 ON + 1 OFF + 1 bolsa de regalo Fuxion.",
    },
  },
  "fathers-day-protein-sport": {
    sku: "150936", unitsPerBox: null,
    servingSize: { en: "Gift set (protein + shaker)", es: "Set de regalo (proteína + shaker)" },
    slogan: { en: "Fuel for the strongest dad.", es: "¡Energía para el papá más fuerte!" },
    longDescription: {
      en: "A Father's Day sport gift: 1 Protein Active Sport (Chocolate) + 1 Fuxion gift bag.",
      es: "Regalo deportivo del Día del Padre: 1 Protein Active Sport (Chocolate) + 1 bolsa de regalo Fuxion.",
    },
  },
  "fathers-day-rexet-nocarb": {
    sku: "150937", unitsPerBox: null,
    servingSize: { en: "Gift combo (2 products + gift bag)", es: "Combo de regalo (2 productos + bolsa)" },
    slogan: { en: "Reset and recharge, Dad.", es: "¡Reinicia y recarga, papá!" },
    longDescription: {
      en: "A Father's Day detox combo for cleansing and carbohydrate management: 1 Rexet + 1 NoCarb-T + 1 Fuxion gift bag.",
      es: "Combo detox del Día del Padre para limpieza y manejo de carbohidratos: 1 Rexet + 1 NoCarb-T + 1 bolsa de regalo Fuxion.",
    },
  },
};

export function getProductDetails(slug: string): ProductDetail | undefined {
  return productDetails[slug];
}
