// =============================================================================
// VidaFlow Product Data — REAL LINKS & PRICES
// Source: Fuxion USA Catalog (English) + Guatemala store links
//
// HOW TO ADD A NEW PRODUCT:
//   1. Add a new object to the `products` array below
//   2. Fill in all fields (see ProductData interface)
//   3. Add placeholder image at /public/images/products/{slug}.webp
//   4. The product will automatically appear on the products page
//
// HOW TO DEACTIVATE SEASONAL PRODUCTS:
//   Set `isSeasonalActive: false` on any seasonal product.
//   It will be hidden from all product listings but kept in data.
//
// HOW TO REPLACE PLACEHOLDER IMAGES:
//   1. Place your real product image at /public/images/products/{slug}.webp
//   2. Recommended: 800x800px, WebP format, < 200KB
//   3. The fallback gradient will no longer show once the image loads
//
// COUNTRY BEHAVIOR:
//   - "GT" = Guatemala: shows priceGT (Q), paymentLinkGT
//   - "US" = United States: shows priceUS ($), paymentLinkUS
//   - Products only appear when they have the country in `countries` array
// =============================================================================

export interface ProductData {
  id: string;
  slug: string;
  name: { en: string; es: string };
  category: ProductCategory;
  productLine: ProductLine;
  shortDescription: { en: string; es: string };
  benefits: { en: string[]; es: string[] };
  ingredients: string;
  flavor: { en: string; es: string };
  format: string;
  priceUS: number | null;
  priceGT: number | null;
  currencyUS: string;
  currencyGT: string;
  paymentLinkUS: string;
  paymentLinkGT: string;
  image: string;
  gradient: string;
  countries: CountryCode[];
  isSeasonal: boolean;
  isSeasonalActive: boolean; // Set to false to hide seasonal products
  isCombo: boolean;
  tags: string[];
}

export type ProductCategory =
  | "cleansing"
  | "energy"
  | "nutrition"
  | "immune"
  | "weight"
  | "antiage"
  | "mental"
  | "sport"
  | "combo";

export type ProductLine = "core" | "enhancing" | "combo";
export type CountryCode = "GT" | "US";

export const categoryMeta: Record<
  ProductCategory,
  { en: string; es: string; icon: string; gradient: string }
> = {
  cleansing: { en: "Detox & Cleansing", es: "Detox y Limpieza", icon: "droplets", gradient: "from-lime-400 to-green-600" },
  energy: { en: "Energy & Revitalization", es: "Energía y Revitalización", icon: "zap", gradient: "from-amber-400 to-orange-500" },
  nutrition: { en: "Nutrition & Regeneration", es: "Nutrición y Regeneración", icon: "sprout", gradient: "from-emerald-400 to-teal-600" },
  immune: { en: "Immune Support", es: "Soporte Inmune", icon: "shieldPlus", gradient: "from-blue-400 to-cyan-600" },
  weight: { en: "Weight Management", es: "Control de Peso", icon: "scale", gradient: "from-rose-400 to-pink-600" },
  antiage: { en: "Anti-Age", es: "Anti-Edad", icon: "sparkles", gradient: "from-violet-400 to-purple-600" },
  mental: { en: "Mental Stamina", es: "Rendimiento Mental", icon: "brain", gradient: "from-indigo-400 to-blue-600" },
  sport: { en: "Sport Performance", es: "Rendimiento Deportivo", icon: "dumbbell", gradient: "from-red-400 to-orange-600" },
  combo: { en: "Combos & Packs", es: "Combos y Packs", icon: "package", gradient: "from-emerald-500 to-teal-700" },
};

// Umbrella groups mirroring the official Fuxion "ÍNDICE" taxonomy
// (Sistema Base / Líneas Potenciadoras / Combos). Each product already sits in
// the right category — these groups simply organize the categories for nav.
export const categoryGroups: {
  key: ProductLine;
  label: { en: string; es: string };
  categories: ProductCategory[];
}[] = [
  {
    key: "core",
    label: { en: "Base System", es: "Sistema Base" },
    categories: ["cleansing", "nutrition", "energy"],
  },
  {
    key: "enhancing",
    label: { en: "Enhancing Lines", es: "Líneas Potenciadoras" },
    categories: ["immune", "weight", "antiage", "mental", "sport"],
  },
  {
    key: "combo",
    label: { en: "Combos & Packs", es: "Combos y Packs" },
    categories: ["combo"],
  },
];

export const products: ProductData[] = [
  // ═══════════════════════════════════════════════════════════════
  // CORE SYSTEM — CLEANSING
  // ═══════════════════════════════════════════════════════════════
  {
    id: "flora-liv", slug: "flora-liv",
    name: { en: "Flora Liv", es: "Flora Liv" },
    category: "cleansing", productLine: "core",
    shortDescription: {
      en: "Probiotic cultures with prebiotic fiber to help recover and balance intestinal flora for better nutrient absorption.",
      es: "Cultivos probióticos con fibra prebiótica para ayudar a recuperar y equilibrar la flora intestinal.",
    },
    benefits: {
      en: ["Supports recovery of intestinal flora after medication use", "Helps prevent digestive discomfort", "Promotes balance of intestinal flora for better nutrient absorption"],
      es: ["Apoya la recuperación de la flora intestinal después del uso de medicamentos", "Ayuda a prevenir molestias digestivas", "Promueve el equilibrio de la flora intestinal"],
    },
    ingredients: "Probiotic Cultures (10 billion per serving) + Prebiotic Fiber + Passion Fruit Pulp + Golden Berry",
    flavor: { en: "Sweet Granadilla", es: "Granadilla Dulce" },
    format: "Box 28 x 5g",
    priceUS: 53.0, priceGT: 375.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115940",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3109279",
    image: "/images/products/flora-liv.webp", gradient: "from-green-300 to-emerald-500",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["probiotics", "gut-health", "digestion", "core"],
  },
  {
    id: "liquid-fiber", slug: "liquid-fiber",
    name: { en: "Liquid Fiber", es: "Liquid Fiber" },
    category: "cleansing", productLine: "core",
    shortDescription: {
      en: "Soluble fiber and micronutrients that nourish intestinal flora and promote digestive health naturally.",
      es: "Fibra soluble y micronutrientes que nutren la flora intestinal y promueven la salud digestiva de forma natural.",
    },
    benefits: {
      en: ["Helps improve the balance of intestinal flora", "Supports natural bowel movement frequency", "Promotes overall digestive health"],
      es: ["Ayuda a mejorar el equilibrio de la flora intestinal", "Apoya la frecuencia natural del tránsito intestinal", "Promueve la salud digestiva general"],
    },
    ingredients: "Prebiotic Fiber + Vitamins + Minerals",
    flavor: { en: "Lemon", es: "Limón" }, format: "Box 28 x 5g",
    priceUS: 44.0, priceGT: 250.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3109264",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3109271",
    image: "/images/products/liquid-fiber.webp", gradient: "from-lime-300 to-green-500",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["fiber", "digestion", "gut-health", "core"],
  },
  {
    id: "prunex1", slug: "prunex1",
    name: { en: "Prunex 1", es: "Prunex 1" },
    category: "cleansing", productLine: "core",
    shortDescription: {
      en: "Herbal tea with soluble fiber and prune extract to support comfortable intestinal transit.",
      es: "Té herbal con fibra soluble y extracto de ciruela para apoyar un tránsito intestinal cómodo.",
    },
    benefits: {
      en: ["Helps support the elimination of waste from the body", "Promotes a lighter feeling without abdominal discomfort", "Supports adequate intestinal transit"],
      es: ["Ayuda a apoyar la eliminación de desechos del cuerpo", "Promueve una sensación de ligereza sin molestias abdominales", "Apoya un tránsito intestinal adecuado"],
    },
    ingredients: "Fiber Mix (Psyllium, Chicory Inulin, Linseed Mucilage) + Prune Extract + Kelp + Star Anise",
    flavor: { en: "Prune", es: "Ciruela" }, format: "Display 28 x 5g",
    priceUS: 44.0, priceGT: 310.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3109268",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3109273",
    image: "/images/products/prunex1.webp", gradient: "from-purple-300 to-violet-500",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["fiber", "cleansing", "digestion", "core"],
  },
  {
    id: "obalance", slug: "obalance",
    name: { en: "Alpha Balance", es: "Alpha Balance" },
    category: "cleansing", productLine: "core",
    shortDescription: {
      en: "Alkalizing green drink with chlorophyll-rich vegetables to promote body cleansing and pH balance.",
      es: "Bebida verde alcalinizante con vegetales ricos en clorofila para promover la limpieza corporal y el equilibrio del pH.",
    },
    benefits: {
      en: ["Helps promote the cleaning of toxic elements from the body", "Supports body pH balance", "Provides natural energy from green vegetable extracts"],
      es: ["Ayuda a promover la limpieza de elementos tóxicos del cuerpo", "Apoya el equilibrio del pH corporal", "Proporciona energía natural de extractos de vegetales verdes"],
    },
    ingredients: "Alfalfa + Algae (Spirulina & Chlorella) + Spinach + Wheat Grass + Green Apple + Camu Camu + Magnesium + Zinc",
    flavor: { en: "Green Apple", es: "Manzana Verde" }, format: "Box 28 x 5g",
    priceUS: 44.0, priceGT: 375.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3109237",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3109236",
    image: "/images/products/obalance.webp", gradient: "from-green-400 to-emerald-600",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["detox", "alkalizing", "greens", "core"],
  },
  {
    id: "berry-balance", slug: "berry-balance",
    name: { en: "Berry Balance", es: "Berry Balance" },
    category: "cleansing", productLine: "core",
    shortDescription: {
      en: "Berries concentrate with cranberry and probiotics to help care for urinary system health naturally.",
      es: "Concentrado de berries con arándano y probióticos para cuidar la salud del sistema urinario de forma natural.",
    },
    benefits: {
      en: ["Supports pH balance of urinary tract flora", "Helps prevent urinary tract discomfort", "Promotes healthy fluid balance"],
      es: ["Apoya el equilibrio del pH de la flora del tracto urinario", "Ayuda a prevenir molestias del tracto urinario", "Promueve un equilibrio saludable de líquidos"],
    },
    ingredients: "Cranberry + Berries & Tropical Fruits Concentrate + Pineapple Infusion + Probiotic Bacteria + Anthocyanin + Organic Calcium + Vitamins C & E",
    flavor: { en: "Cranberry Pineapple", es: "Arándano Piña" }, format: "Box 28 x 5g",
    priceUS: 55.0, priceGT: 375.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3109249",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3109272",
    image: "/images/products/berry-balance.webp", gradient: "from-pink-300 to-rose-500",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["berries", "urinary", "probiotics", "core"],
  },
  {
    id: "rexet", slug: "rexet",
    name: { en: "Rexet", es: "Rexet" },
    category: "cleansing", productLine: "core",
    shortDescription: {
      en: "Effervescent drink with plant extracts to support liver function and promote the body's natural detox processes.",
      es: "Bebida efervescente con extractos vegetales para apoyar la función hepática y los procesos naturales de desintoxicación.",
    },
    benefits: {
      en: ["Supports the liver's natural detox functions", "Helps maintain optimal metabolic liver functions", "Promotes a balanced, clean body"],
      es: ["Apoya las funciones naturales de desintoxicación del hígado", "Ayuda a mantener funciones metabólicas hepáticas óptimas", "Promueve un cuerpo equilibrado y limpio"],
    },
    ingredients: "Plant Extract Mix (Red Prickly Pear, Lemongrass, Chlorophyll, Acerola, Turmeric, Parsley, Artichoke) + Hydrolyzed Collagen + Taurine + Cysteine + B Complex + Magnesium + Zinc",
    flavor: { en: "Red Prickly Pear", es: "Tuna Roja" }, format: "Box 28 x 5g",
    priceUS: 44.0, priceGT: 310.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115903",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3116007",
    image: "/images/products/rexet.webp", gradient: "from-red-300 to-rose-500",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["liver", "detox", "effervescent", "core"],
  },
  {
    id: "probix", slug: "probix",
    name: { en: "Probix", es: "Probix" },
    category: "cleansing", productLine: "core",
    shortDescription: {
      en: "Postbiotic supplement to support gut health with next-generation digestive wellness technology.",
      es: "Suplemento postbiótico para apoyar la salud intestinal con tecnología de bienestar digestivo de nueva generación.",
    },
    benefits: {
      en: ["Supports digestive wellness with postbiotic technology", "Promotes a healthy gut microbiome", "Helps maintain digestive comfort"],
      es: ["Apoya el bienestar digestivo con tecnología postbiótica", "Promueve un microbioma intestinal saludable", "Ayuda a mantener la comodidad digestiva"],
    },
    ingredients: "Postbiotic Blend + Prebiotic Fiber + Vitamins + Minerals",
    flavor: { en: "Natural", es: "Natural" }, format: "Box 28 x 5g",
    priceUS: 44.0, priceGT: 310.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115952",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3116014",
    image: "/images/products/probix.webp", gradient: "from-teal-300 to-emerald-500",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["postbiotic", "gut-health", "digestion", "core"],
  },

  // ═══════════════════════════════════════════════════════════════
  // CORE SYSTEM — NUTRITION & REGENERATION
  // ═══════════════════════════════════════════════════════════════
  {
    id: "biopro-tect", slug: "biopro-tect",
    name: { en: "BioPro+ Tect", es: "BioPro+ Tect" },
    category: "nutrition", productLine: "core",
    shortDescription: {
      en: "Premium protein shake with patented Bioprotein+ Colostrum to support the body's natural defense system.",
      es: "Batido de proteína premium con Bioproteína+ Calostro patentada para apoyar el sistema de defensa natural del cuerpo.",
    },
    benefits: {
      en: ["Helps keep the body's defenses healthy", "Supports raising the protein profile of daily diet", "Promotes cell regeneration processes", "Helps strengthen bones"],
      es: ["Ayuda a mantener saludables las defensas del cuerpo", "Apoya el perfil proteico de la dieta diaria", "Promueve procesos de regeneración celular", "Ayuda a fortalecer los huesos"],
    },
    ingredients: "Bioprotein+ with Colostrum® + Bioferrin® + Amino Acids + Milk Calcium + DHA & ARA",
    flavor: { en: "Vanilla", es: "Vainilla" }, format: "Box 14 x 25g",
    priceUS: 41.0, priceGT: 295.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115942",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3115980",
    image: "/images/products/biopro-tect.webp", gradient: "from-blue-300 to-indigo-500",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["protein", "colostrum", "defenses", "core"],
  },
  {
    id: "protein-active", slug: "protein-active",
    name: { en: "Protein Active", es: "Protein Active" },
    category: "nutrition", productLine: "core",
    shortDescription: {
      en: "100% plant-based protein with patented Bioprotein Active® from germinated quinoa and algae for advanced daily nutrition.",
      es: "Proteína 100% vegetal con Bioproteína Active® patentada de quinoa germinada y algas para nutrición diaria avanzada.",
    },
    benefits: {
      en: ["Supports optimal assimilation of essential amino acids", "Promotes tissue regeneration", "Helps support the immune system and antioxidant defense", "Suitable for all ages — allergen-free"],
      es: ["Apoya la asimilación óptima de aminoácidos esenciales", "Promueve la regeneración de tejidos", "Ayuda al sistema inmune y la defensa antioxidante", "Apto para todas las edades — libre de alérgenos"],
    },
    ingredients: "Bioprotein Active® (Germinated Quinoa, Germinated Whole Rice, Pineapple, Algae) + Amino Acids + Vitamins + DHA & ARA + Coconut Oil",
    flavor: { en: "Vanilla & Cinnamon / Chocolate & Hazelnut", es: "Vainilla y Canela / Chocolate y Avellana" }, format: "Box 14 x 25g",
    priceUS: 48.0, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3109251",
    paymentLinkGT: "",
    image: "/images/products/protein-active.webp", gradient: "from-amber-300 to-orange-500",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["protein", "plant-based", "vegetable", "core"],
  },

  // ═══════════════════════════════════════════════════════════════
  // CORE SYSTEM — ENERGY & REVITALIZATION
  // ═══════════════════════════════════════════════════════════════
  {
    id: "vita-xtra-t", slug: "vita-xtra-t",
    name: { en: "Vita Xtra T+", es: "VitaEnergía" },
    category: "energy", productLine: "core",
    shortDescription: {
      en: "Functional antioxidant and energizing drink made from Amazonian Guayusa, Green Tea, and superfruits.",
      es: "Bebida funcional antioxidante y energizante hecha de Guayusa amazónica, Té Verde y superfrutas.",
    },
    benefits: {
      en: ["Helps reduce cell oxidation and free radical damage", "Supports alertness and positive mood", "Promotes improved physical and daily performance"],
      es: ["Ayuda a reducir la oxidación celular y el daño de radicales libres", "Apoya el estado de alerta y ánimo positivo", "Promueve mejor rendimiento físico y diario"],
    },
    ingredients: "Guayusa + Green Tea + Acai Berry + Goji Berry + Cordyceps Mycelium + Maca + Ginseng + Purple Corn Anthocyanins",
    flavor: { en: "Purple Corn", es: "Maíz Morado" }, format: "Box 28 x 5g",
    priceUS: 44.0, priceGT: 310.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3109266",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3109269",
    image: "/images/products/vita-xtra-t.webp", gradient: "from-purple-400 to-violet-600",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["energy", "antioxidant", "guayusa", "core"],
  },
  {
    id: "nutraday", slug: "nutraday",
    name: { en: "Nutraday", es: "Nutraday" },
    category: "energy", productLine: "core",
    shortDescription: {
      en: "Daily micronutrient drink with Moringa, 12 vitamins and 5 organic minerals for the whole family.",
      es: "Bebida diaria de micronutrientes con Moringa, 12 vitaminas y 5 minerales orgánicos para toda la familia.",
    },
    benefits: {
      en: ["Supplements daily nutrition with antioxidants, vitamins, and minerals", "Helps keep the immune system in optimal condition", "Supports optimal physical and mental development"],
      es: ["Complementa la nutrición diaria con antioxidantes, vitaminas y minerales", "Ayuda a mantener el sistema inmune en condiciones óptimas", "Apoya un desarrollo físico y mental óptimo"],
    },
    ingredients: "Moringa Extract + Guava + Lemon + Basil + Camu Camu + Acai Berry + Acerola + Germinated Quinoa (12 Vitamins + 5 Organic Minerals)",
    flavor: { en: "Strawberry", es: "Fresa" }, format: "Box 28 x 5g",
    priceUS: 44.0, priceGT: 310.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115902",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3116013",
    image: "/images/products/nutraday.webp", gradient: "from-red-300 to-pink-500",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["vitamins", "minerals", "family", "core"],
  },

  // ═══════════════════════════════════════════════════════════════
  // ENHANCING — IMMUNE SUPPORT
  // ═══════════════════════════════════════════════════════════════
  {
    id: "vera-plus", slug: "vera-plus",
    name: { en: "Vera+", es: "Vera+" },
    category: "immune", productLine: "enhancing",
    shortDescription: {
      en: "Herbal combination with Beta Glucans and Aloe Vera to strengthen and modulate the immune system.",
      es: "Combinación herbal con Beta Glucanos y Aloe Vera para fortalecer y modular el sistema inmune.",
    },
    benefits: {
      en: ["Supports increased resistance to seasonal respiratory issues", "Helps reduce oxidative stress that may affect immune function", "Promotes a balanced, well-modulated immune system"],
      es: ["Apoya el aumento de resistencia a problemas respiratorios estacionales", "Ayuda a reducir el estrés oxidativo", "Promueve un sistema inmune equilibrado y bien modulado"],
    },
    ingredients: "Beta Glucans + Olive Leaf + Aloe Vera + Amalaki + Amino Acids",
    flavor: { en: "Mint", es: "Menta" }, format: "Display 28 x 5g",
    priceUS: 55.0, priceGT: 374.99, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115967",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3116008",
    image: "/images/products/vera-plus.webp", gradient: "from-teal-300 to-cyan-500",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["immune", "beta-glucans", "aloe", "enhancing"],
  },
  {
    id: "ganomas-cappuccino", slug: "ganomas-cappuccino",
    name: { en: "Ganomas Cappuccino", es: "Gano+ Cappuccino" },
    category: "immune", productLine: "enhancing",
    shortDescription: {
      en: "Cappuccino coffee with Ganoderma Lucidum (Reishi) extract — used ancestrally as the secret of longevity.",
      es: "Café cappuccino con extracto de Ganoderma Lucidum (Reishi) — usado ancestralmente como el secreto de la longevidad.",
    },
    benefits: {
      en: ["Supports immune system regulation", "Helps reduce oxidative damage from free radicals", "Enriched with antioxidants and micronutrients"],
      es: ["Apoya la regulación del sistema inmune", "Ayuda a reducir el daño oxidativo de los radicales libres", "Enriquecido con antioxidantes y micronutrientes"],
    },
    ingredients: "Ganoderma Lucidum Extract + Quillay + Micronutrients",
    flavor: { en: "Cappuccino", es: "Cappuccino" }, format: "Box 28 x 7.5g",
    priceUS: 29.5, priceGT: 225.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115895",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3115983",
    image: "/images/products/ganomas-cappuccino.webp", gradient: "from-amber-600 to-amber-800",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["coffee", "reishi", "ganoderma", "immune", "enhancing"],
  },

  // ═══════════════════════════════════════════════════════════════
  // ENHANCING — WEIGHT MANAGEMENT
  // ═══════════════════════════════════════════════════════════════
  {
    id: "thermo-t3", slug: "thermo-t3",
    name: { en: "Thermo T3", es: "Thermo T3" },
    category: "weight", productLine: "enhancing",
    shortDescription: {
      en: "A thermogenic blend of three teas, amino acids, and fruit extracts designed to support healthy fat metabolism.",
      es: "Una mezcla termogénica de tres tés, aminoácidos y extractos de frutas diseñada para apoyar el metabolismo de grasas.",
    },
    benefits: {
      en: ["Supports healthy fat metabolism when combined with diet and exercise", "May help increase stamina before workouts", "Provides energy metabolism support with Alpha Lipoic Acid and B6"],
      es: ["Apoya el metabolismo de grasas combinado con dieta y ejercicio", "Puede ayudar a aumentar la resistencia antes del ejercicio", "Proporciona soporte de metabolismo energético"],
    },
    ingredients: "Green Tea + Black Tea + Red Tea + Raspberry Ketones + Garcinia Cambogia + L-Carnitine + Green Coffee + Alpha Lipoic Acid + Vitamin B6 + Chromium",
    flavor: { en: "Lemon Tea", es: "Té de Limón" }, format: "Box 28 x 5g",
    priceUS: 44.0, priceGT: 310.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3109250",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3109275",
    image: "/images/products/thermo-t3.webp", gradient: "from-orange-400 to-red-500",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["thermogenic", "tea", "fat-metabolism", "weight", "enhancing"],
  },
  {
    id: "nocarb-t", slug: "nocarb-t",
    name: { en: "NoCarb-T", es: "NoCarb-T" },
    category: "weight", productLine: "enhancing",
    shortDescription: {
      en: "Soluble fiber formula designed to support healthy carbohydrate management and blood glucose levels.",
      es: "Fórmula de fibra soluble diseñada para apoyar el manejo saludable de carbohidratos y niveles de glucosa.",
    },
    benefits: {
      en: ["Supports maintaining normal glucose levels with diet and exercise", "Helps with carbohydrate management in the diet", "Promotes reduced fat accumulation in the body"],
      es: ["Apoya el mantenimiento de niveles normales de glucosa", "Ayuda con el manejo de carbohidratos en la dieta", "Promueve la reducción de acumulación de grasa"],
    },
    ingredients: "Soluble Fibers (Yacon + Acacia + Chicory Inulin + Apple Pectin) + Purslane + Cinnamon + Green Tea + Chromium",
    flavor: { en: "Apple Cinnamon", es: "Manzana Canela" }, format: "Display 28 x 5g",
    priceUS: 44.0, priceGT: 310.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3109267",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3109274",
    image: "/images/products/nocarb-t.webp", gradient: "from-yellow-300 to-amber-500",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["carb-blocker", "fiber", "glucose", "weight", "enhancing"],
  },
  {
    id: "cafe-fit", slug: "cafe-fit",
    name: { en: "Café & Café Fit", es: "Café & Café Fit" },
    category: "weight", productLine: "enhancing",
    shortDescription: {
      en: "Gourmet coffee with Svetol® green coffee extract to support appetite control and weight management.",
      es: "Café gourmet con extracto de café verde Svetol® para apoyar el control del apetito y manejo de peso.",
    },
    benefits: {
      en: ["Supports a weight management program with diet and exercise", "Helps reduce feelings of tiredness and fatigue", "May help reduce cravings"],
      es: ["Apoya un programa de manejo de peso con dieta y ejercicio", "Ayuda a reducir sensaciones de cansancio y fatiga", "Puede ayudar a reducir los antojos"],
    },
    ingredients: "Lyophilized Roasted Coffee + Green Coffee Extract (Svetol®)",
    flavor: { en: "Gourmet Coffee", es: "Café Gourmet" }, format: "Box 28 x 5g",
    priceUS: 44.0, priceGT: 340.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115883",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3115995",
    image: "/images/products/cafe-fit.webp", gradient: "from-amber-700 to-yellow-900",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["coffee", "green-coffee", "appetite", "weight", "enhancing"],
  },
  {
    id: "cafe-fit-cappuccino", slug: "cafe-fit-cappuccino",
    name: { en: "Café & Café Fit Cappuccino", es: "Café & Café Fit Cappuccino" },
    category: "weight", productLine: "enhancing",
    shortDescription: {
      en: "Cappuccino version of our gourmet green coffee blend for weight management support with a creamy twist.",
      es: "Versión cappuccino de nuestra mezcla gourmet de café verde para apoyo en el manejo de peso con un toque cremoso.",
    },
    benefits: {
      en: ["Supports a weight management program with diet and exercise", "Helps reduce feelings of tiredness and fatigue", "Creamy cappuccino flavor for a satisfying experience"],
      es: ["Apoya un programa de manejo de peso con dieta y ejercicio", "Ayuda a reducir sensaciones de cansancio y fatiga", "Sabor cremoso de cappuccino para una experiencia satisfactoria"],
    },
    ingredients: "Lyophilized Roasted Coffee + Green Coffee Extract (Svetol®) + Non-Dairy Creamer",
    flavor: { en: "Cappuccino", es: "Cappuccino" }, format: "Box 28 x 7.5g",
    priceUS: null, priceGT: 410.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3115987",
    image: "/images/products/cafe-fit-cappuccino.webp", gradient: "from-amber-600 to-stone-700",
    countries: ["GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["coffee", "cappuccino", "weight", "enhancing"],
  },
  {
    id: "chocolate-fit", slug: "chocolate-fit",
    name: { en: "Chocolate Fit", es: "Chocolate Fit" },
    category: "weight", productLine: "enhancing",
    shortDescription: {
      en: "Dark Amazon chocolate drink with green coffee and CLA to support fat metabolism and reduce cravings.",
      es: "Bebida de chocolate amazónico con café verde y CLA para apoyar el metabolismo de grasas y reducir antojos.",
    },
    benefits: {
      en: ["Supports fat metabolism when combined with diet and exercise", "May help increase lean mass over fat mass", "Promotes satisfaction and may help reduce anxiety"],
      es: ["Apoya el metabolismo de grasas combinado con dieta y ejercicio", "Puede ayudar a incrementar masa magra", "Promueve la satisfacción y puede ayudar a reducir la ansiedad"],
    },
    ingredients: "Pure Amazon Cocoa + Vegetable Protein + Green Coffee + CLA + Organic Chromium",
    flavor: { en: "Dark Chocolate", es: "Chocolate Oscuro" }, format: "Box 14 x 15g",
    priceUS: 29.5, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115943",
    paymentLinkGT: "",
    image: "/images/products/chocolate-fit.webp", gradient: "from-amber-800 to-stone-700",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["chocolate", "cocoa", "cla", "weight", "enhancing"],
  },
  {
    id: "biopro-fit", slug: "biopro-fit",
    name: { en: "BioPro+ Fit", es: "BioPro+ Fit" },
    category: "weight", productLine: "enhancing",
    shortDescription: {
      en: "Protein shake with Prolibra® to support weight management while maintaining lean muscle mass.",
      es: "Batido de proteína con Prolibra® para apoyar el manejo de peso mientras se mantiene masa muscular magra.",
    },
    benefits: {
      en: ["Supports adequate cellular nutrition", "Promotes a weight management program with diet and exercise", "Contains Prolibra® clinically shown to support healthy body composition"],
      es: ["Apoya una nutrición celular adecuada", "Promueve un programa de manejo de peso con dieta y ejercicio", "Contiene Prolibra® clínicamente demostrado"],
    },
    ingredients: "Bioprotein+ Colostrum + Prolibra® + Amino Acids + Malabar Tamarind + Vitamins + DHA & ARA",
    flavor: { en: "Vanilla", es: "Vainilla" }, format: "Box 14 x 25g",
    priceUS: 37.0, priceGT: 295.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115928",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3115985",
    image: "/images/products/biopro-fit.webp", gradient: "from-pink-300 to-fuchsia-500",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["protein", "prolibra", "lean-muscle", "weight", "enhancing"],
  },
  {
    id: "protein-active-fit", slug: "protein-active-fit",
    name: { en: "Protein Active Fit", es: "Protein Active Fit" },
    category: "weight", productLine: "enhancing",
    shortDescription: {
      en: "100% plant-based active protein enhanced with L-Carnitine and Malabar Tamarind for weight and muscle toning support.",
      es: "Proteína activa 100% vegetal mejorada con L-Carnitina y Tamarindo Malabar para apoyo de peso y tono muscular.",
    },
    benefits: {
      en: ["Supports weight management and toning with diet and exercise", "Promotes optimal assimilation of essential amino acids", "May help reduce cravings thanks to high-bioavailability protein"],
      es: ["Apoya el manejo de peso y tonificación con dieta y ejercicio", "Promueve la asimilación óptima de aminoácidos esenciales", "Puede ayudar a reducir antojos"],
    },
    ingredients: "Bioprotein Active® (Germinated Quinoa, Peas, Rice, Algae) + Essential Amino Acids + L-Carnitine + Malabar Tamarind + B Complex + Chromium + Zinc",
    flavor: { en: "Vanilla & Cinnamon / Chocolate & Hazelnut", es: "Vainilla y Canela / Chocolate y Avellana" }, format: "Box 14 x 25g",
    priceUS: 49.5, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3109260",
    paymentLinkGT: "",
    image: "/images/products/protein-active-fit.webp", gradient: "from-rose-400 to-pink-600",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["protein", "plant-based", "l-carnitine", "weight", "enhancing"],
  },

  // ═══════════════════════════════════════════════════════════════
  // ENHANCING — ANTI-AGE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "probal", slug: "probal",
    name: { en: "Probal", es: "Probal" },
    category: "antiage", productLine: "enhancing",
    shortDescription: {
      en: "Herbal tea with amino acids and plant extracts to support women's hormonal balance and wellbeing.",
      es: "Té herbal con aminoácidos y extractos vegetales para apoyar el equilibrio hormonal y bienestar de la mujer.",
    },
    benefits: {
      en: ["Supports comfort during the menstrual period", "Promotes women's overall health and wellbeing", "Helps maintain balance during menopause"],
      es: ["Apoya la comodidad durante el período menstrual", "Promueve la salud general y bienestar de la mujer", "Ayuda a mantener el equilibrio durante la menopausia"],
    },
    ingredients: "Aguaje Powder + Dong Quai + Oregano + Black Tea + L-Tryptophan + Marigold + Camu Camu + Lemon + Magnesium + Calcium",
    flavor: { en: "Oregano & Cedron", es: "Orégano y Cedrón" }, format: "Box 28 x 5g",
    priceUS: 55.0, priceGT: 340.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115935",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3115991",
    image: "/images/products/probal.webp", gradient: "from-pink-200 to-rose-400",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["women", "hormonal", "menopause", "antiage", "enhancing"],
  },
  {
    id: "passion", slug: "passion",
    name: { en: "Passion", es: "Passion" },
    category: "antiage", productLine: "enhancing",
    shortDescription: {
      en: "Plant extracts with amino acids, Royal Jelly, and Maca to support energy, stamina, and vitality.",
      es: "Extractos vegetales con aminoácidos, Jalea Real y Maca para apoyar la energía, resistencia y vitalidad.",
    },
    benefits: {
      en: ["Supports energy and vitality levels", "Helps invigorate the body with Royal Jelly content", "Promotes stamina and endurance"],
      es: ["Apoya los niveles de energía y vitalidad", "Ayuda a vigorizar el cuerpo con Jalea Real", "Promueve la resistencia y aguante"],
    },
    ingredients: "Amino Acids + Royal Jelly Extract + Maca + Ginseng + Organic Zinc",
    flavor: { en: "Guarana", es: "Guaraná" }, format: "Box 28 x 5g",
    priceUS: 44.0, priceGT: 310.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115888",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3115988",
    image: "/images/products/passion.webp", gradient: "from-red-400 to-rose-600",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["vitality", "maca", "royal-jelly", "antiage", "enhancing"],
  },
  {
    id: "youth-elixir", slug: "youth-elixir",
    name: { en: "Youth Elixir", es: "Youth Elixir" },
    category: "antiage", productLine: "enhancing",
    shortDescription: {
      en: "Amino acids and antioxidants with Resveratrol and superfruits to support cellular vitality and youthful aging.",
      es: "Aminoácidos y antioxidantes con Resveratrol y superfrutas para apoyar la vitalidad celular y un envejecimiento saludable.",
    },
    benefits: {
      en: ["Supports vitality, skin elasticity, and sleep quality", "Helps slow the effects of premature aging", "Promotes reduction of free radical damage"],
      es: ["Apoya la vitalidad, elasticidad de la piel y calidad del sueño", "Ayuda a desacelerar los efectos del envejecimiento prematuro", "Promueve la reducción del daño de los radicales libres"],
    },
    ingredients: "Amino Acids + Antioxidants + Resveratrol + OptiBerry® (Grapes, Blueberries, Amalaki)",
    flavor: { en: "Grape Wine", es: "Uva Vino" }, format: "Box 28 x 5g",
    priceUS: 44.0, priceGT: 325.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115939",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3115999",
    image: "/images/products/youth-elixir.webp", gradient: "from-violet-400 to-purple-600",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["resveratrol", "antioxidant", "youth", "antiage", "enhancing"],
  },
  {
    id: "golden-flx", slug: "golden-flx",
    name: { en: "Golden FLX", es: "Golden FLX" },
    category: "antiage", productLine: "enhancing",
    shortDescription: {
      en: "Organic turmeric super extract with ginger and cardamom to support joint flexibility and mobility.",
      es: "Super extracto de cúrcuma orgánica con jengibre y cardamomo para apoyar la flexibilidad y movilidad articular.",
    },
    benefits: {
      en: ["Supports joint health related to age, weight, and exercise", "Promotes joint flexibility and mobility", "Helps support healthy oxidative processes"],
      es: ["Apoya la salud articular relacionada con edad, peso y ejercicio", "Promueve la flexibilidad y movilidad articular", "Ayuda a apoyar procesos oxidativos saludables"],
    },
    ingredients: "Certified Organic Turmeric Super Extract + Ginger + Cardamom + Coconut Milk + Black Pepper + Cinnamon",
    flavor: { en: "Vanilla (Golden Milk)", es: "Vainilla (Golden Milk)" }, format: "Box 28 x 5g",
    priceUS: 48.5, priceGT: 345.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115951",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3116004",
    image: "/images/products/golden-flx.webp", gradient: "from-yellow-400 to-amber-500",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["turmeric", "joints", "golden-milk", "antiage", "enhancing"],
  },
  {
    id: "beauty-in", slug: "beauty-in",
    name: { en: "Beauty-In", es: "Beauty-In" },
    category: "antiage", productLine: "enhancing",
    shortDescription: {
      en: "Optimized bioactive collagen peptides with CoQ10 to nourish skin from within for a radiant, youthful appearance.",
      es: "Péptidos de colágeno bioactivo optimizado con CoQ10 para nutrir la piel desde adentro.",
    },
    benefits: {
      en: ["Supports skin elasticity and firmness with optimized collagen", "Helps prevent signs of premature aging from free radicals", "Promotes healthier hair and nail strength"],
      es: ["Apoya la elasticidad y firmeza de la piel con colágeno optimizado", "Ayuda a prevenir signos de envejecimiento prematuro", "Promueve cabello y uñas más saludables"],
    },
    ingredients: "Optimized Bioactive Collagen Peptides + Coenzyme Q10 + Sesbania (Natural Biotin) + Super Exotic Fruits (Vitamins C & E) + Zinc",
    flavor: { en: "Super Exotic Fruit", es: "Super Frutas Exóticas" }, format: "Box 28 x 5g",
    priceUS: 55.0, priceGT: 375.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115887",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3116005",
    image: "/images/products/beauty-in.webp", gradient: "from-pink-300 to-purple-400",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["collagen", "beauty", "skin", "hair", "nails", "antiage", "enhancing"],
  },

  // ═══════════════════════════════════════════════════════════════
  // ENHANCING — MENTAL STAMINA
  // ═══════════════════════════════════════════════════════════════
  {
    id: "on", slug: "on",
    name: { en: "ON", es: "ON" },
    category: "mental", productLine: "enhancing",
    shortDescription: {
      en: "Functional drink with Taurine and Yerba Mate to support an active, alert mind and enhanced learning.",
      es: "Bebida funcional con Taurina y Yerba Mate para apoyar una mente activa, alerta y mejor aprendizaje.",
    },
    benefits: {
      en: ["Supports keeping the mind active and alert", "Promotes brain nourishment and neuronal function", "Designed to enhance learning and focus"],
      es: ["Apoya mantener la mente activa y alerta", "Promueve la nutrición cerebral y función neuronal", "Diseñado para mejorar el aprendizaje y enfoque"],
    },
    ingredients: "GABA + Taurine + Yerba Mate Extract + Acai Berry + Camu Camu + Vitamin C + B Complex + Magnesium + Iron + Zinc + DHA + ARA",
    flavor: { en: "Mixed Fruits", es: "Frutas Mixtas" }, format: "Box 28 x 5g",
    priceUS: 44.0, priceGT: 250.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115937",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3116003",
    image: "/images/products/on.webp", gradient: "from-cyan-400 to-blue-600",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["focus", "brain", "taurine", "mental", "enhancing"],
  },
  {
    id: "off", slug: "off",
    name: { en: "OFF", es: "OFF" },
    category: "mental", productLine: "enhancing",
    shortDescription: {
      en: "Essential amino acids and Ashwagandha to help maintain relaxation, focus, and calm without drowsiness.",
      es: "Aminoácidos esenciales y Ashwagandha para ayudar a mantener la relajación, enfoque y calma sin somnolencia.",
    },
    benefits: {
      en: ["Supports the body's resistance to stress and anxiety", "Helps maintain concentration and focus during tension", "Promotes natural relaxation without drowsiness"],
      es: ["Apoya la resistencia del cuerpo al estrés y la ansiedad", "Ayuda a mantener la concentración durante la tensión", "Promueve la relajación natural sin somnolencia"],
    },
    ingredients: "Amino Acids (L-Theanine, Glycine, Tryptophan) + Super Fruits (Ashwagandha, Amalaki, Lime) + Magnesium + B Complex",
    flavor: { en: "Peach Tangerine", es: "Durazno Mandarina" }, format: "Box 28 x 5g",
    priceUS: 44.0, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115889",
    paymentLinkGT: "",
    image: "/images/products/off.webp", gradient: "from-indigo-300 to-violet-500",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["relax", "ashwagandha", "stress", "mental", "enhancing"],
  },
  {
    id: "no-stress", slug: "no-stress",
    name: { en: "No Stress", es: "No Stress" },
    category: "mental", productLine: "enhancing",
    shortDescription: {
      en: "A calming formula designed to support stress management and promote a balanced, relaxed state of mind.",
      es: "Una fórmula calmante diseñada para apoyar el manejo del estrés y promover un estado mental equilibrado y relajado.",
    },
    benefits: {
      en: ["Supports stress management and relaxation", "Promotes a balanced, calm state of mind", "Helps maintain emotional wellbeing"],
      es: ["Apoya el manejo del estrés y la relajación", "Promueve un estado mental equilibrado y calmado", "Ayuda a mantener el bienestar emocional"],
    },
    ingredients: "Adaptogenic Herbs + Amino Acids + B Complex Vitamins + Minerals",
    flavor: { en: "Herbal", es: "Herbal" }, format: "Box 28 x 5g",
    priceUS: null, priceGT: 340.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3116011",
    image: "/images/products/no-stress.webp", gradient: "from-blue-200 to-indigo-400",
    countries: ["GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["stress", "calm", "relaxation", "mental", "enhancing"],
  },

  // ═══════════════════════════════════════════════════════════════
  // ENHANCING — SPORT PERFORMANCE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "pre-sport", slug: "pre-sport",
    name: { en: "Pre Sport Pro", es: "Pre Sport Pro" },
    category: "sport", productLine: "enhancing",
    shortDescription: {
      en: "Natural isotonic and energizing drink with Citrulline and Creatine to prepare the body for intense activity.",
      es: "Bebida isotónica y energizante natural con Citrulina y Creatina para preparar el cuerpo para actividad intensa.",
    },
    benefits: {
      en: ["Supports body hydration with electrolytes", "Promotes stamina through vasodilation support", "Helps reduce fatigue and supports sports performance"],
      es: ["Apoya la hidratación del cuerpo con electrolitos", "Promueve la resistencia a través del soporte de vasodilatación", "Ayuda a reducir la fatiga y apoya el rendimiento deportivo"],
    },
    ingredients: "Watermelon Citrulline + Beetroot Betalanin + L-Creatine Nitrate + Electrolytes + Yerba Mate",
    flavor: { en: "Watermelon", es: "Sandía" }, format: "Box 28 x 5g",
    priceUS: 48.5, priceGT: 340.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115891",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3115993",
    image: "/images/products/pre-sport.webp", gradient: "from-red-400 to-orange-500",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["pre-workout", "isotonic", "creatine", "sport", "enhancing"],
  },
  {
    id: "xtra-mile", slug: "xtra-mile",
    name: { en: "Xtra Mile Pro", es: "Xtra Mile Pro" },
    category: "sport", productLine: "enhancing",
    shortDescription: {
      en: "Palatinose®-based sustained energy formula with coconut water and electrolytes for endurance during exercise.",
      es: "Fórmula de energía sostenida basada en Palatinose® con agua de coco y electrolitos para resistencia.",
    },
    benefits: {
      en: ["Supports healthy glucose levels during exercise", "Promotes sustained energy over time", "Helps reduce fatigue during physical activity"],
      es: ["Apoya niveles saludables de glucosa durante el ejercicio", "Promueve energía sostenida en el tiempo", "Ayuda a reducir la fatiga durante la actividad física"],
    },
    ingredients: "Palatinose® + Amazon Coconut Water + Maras Salt + Electrolytes (Potassium, Sodium, Calcium, Magnesium, Zinc, Chromium)",
    flavor: { en: "Orange", es: "Naranja" }, format: "Box 28 x 5g",
    priceUS: 44.0, priceGT: 310.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115892",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3115996",
    image: "/images/products/xtra-mile.webp", gradient: "from-orange-400 to-amber-600",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["endurance", "isotonic", "palatinose", "sport", "enhancing"],
  },
  {
    id: "post-sport", slug: "post-sport",
    name: { en: "Post Sport Pro", es: "Post Sport Pro" },
    category: "sport", productLine: "enhancing",
    shortDescription: {
      en: "BCAAs, Glutamine, and coconut water antioxidants to support muscle recovery after intense exercise.",
      es: "BCAAs, Glutamina y antioxidantes de agua de coco para apoyar la recuperación muscular después del ejercicio.",
    },
    benefits: {
      en: ["Supports recovery and strengthening of muscle fibers", "Helps replenish electrolytes naturally with coconut water", "Promotes neutralization of catabolic effects after exercise"],
      es: ["Apoya la recuperación y fortalecimiento de fibras musculares", "Ayuda a reponer electrolitos naturalmente", "Promueve la neutralización de efectos catabólicos"],
    },
    ingredients: "BCAAs + Glutamine + Acerola + Pomegranate + Coconut Water",
    flavor: { en: "Pomegranate", es: "Granada" }, format: "Box 28 x 5g",
    priceUS: 48.5, priceGT: 340.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115894",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3115990",
    image: "/images/products/post-sport.webp", gradient: "from-emerald-400 to-teal-600",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["bcaas", "recovery", "post-workout", "sport", "enhancing"],
  },
  {
    id: "biopro-sport", slug: "biopro-sport",
    name: { en: "BioPro+ Sport Pro", es: "BioPro+ Sport Pro" },
    category: "sport", productLine: "enhancing",
    shortDescription: {
      en: "Protein shake with patented Actinos® peptides to support muscle nutrition, recovery, and performance.",
      es: "Batido de proteína con péptidos Actinos® patentados para apoyar la nutrición muscular y recuperación.",
    },
    benefits: {
      en: ["Supports blood flow and performance with Actinos® peptides", "Promotes lean muscle development with diet and exercise", "Helps improve muscle recovery and oxygen supply"],
      es: ["Apoya el flujo sanguíneo y rendimiento con péptidos Actinos®", "Promueve el desarrollo de masa muscular magra", "Ayuda a mejorar la recuperación muscular"],
    },
    ingredients: "Bioprotein+ Colostrum® + Actinos® + Amino Acids + Milk Calcium + DHA & ARA",
    flavor: { en: "Vanilla", es: "Vainilla" }, format: "Box 14 x 25g",
    priceUS: 46.0, priceGT: 295.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115936",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3115989",
    image: "/images/products/biopro-sport.webp", gradient: "from-blue-400 to-indigo-600",
    countries: ["US", "GT"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["protein", "actinos", "muscle", "sport", "enhancing"],
  },
  {
    id: "protein-active-sport", slug: "protein-active-sport",
    name: { en: "Protein Active Sport Pro", es: "Protein Active Sport Pro" },
    category: "sport", productLine: "enhancing",
    shortDescription: {
      en: "100% plant-based sport protein with BCAAs and Glutamine for cell regeneration and muscle growth.",
      es: "Proteína deportiva 100% vegetal con BCAAs y Glutamina para regeneración celular y crecimiento muscular.",
    },
    benefits: {
      en: ["Supports the right protein profile for an athletic diet", "Promotes muscle recovery and oxygen supply", "Helps generate lean muscle mass with diet and exercise"],
      es: ["Apoya el perfil proteico para una dieta atlética", "Promueve la recuperación muscular", "Ayuda a generar masa muscular magra con dieta y ejercicio"],
    },
    ingredients: "Bioprotein Active® (Peas, Germinated Quinoa, Rice, Algae) + Essential Amino Acids + Vitamins + L-Glutamine + BCAAs",
    flavor: { en: "Vanilla & Cinnamon / Chocolate & Hazelnut", es: "Vainilla y Canela / Chocolate y Avellana" }, format: "Box 14 x 25g",
    priceUS: 53.0, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3109263",
    paymentLinkGT: "",
    image: "/images/products/protein-active-sport.webp", gradient: "from-red-400 to-red-600",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: false,
    tags: ["protein", "plant-based", "bcaas", "sport", "enhancing"],
  },

  // ═══════════════════════════════════════════════════════════════
  // COMBO PACKS — US
  // ═══════════════════════════════════════════════════════════════
  {
    id: "10-14-pack", slug: "10-14-pack",
    name: { en: "10/14 Active Pack", es: "Pack 10/14 Active" },
    category: "combo", productLine: "combo",
    shortDescription: {
      en: "Complete 14-day nutrition program for healthy weight management, muscle toning, and vitality.",
      es: "Programa de nutrición completo de 14 días para manejo saludable de peso, tonificación muscular y vitalidad.",
    },
    benefits: {
      en: ["Structured 14-day program designed by health professionals", "Supports healthy eating habits and lifestyle changes", "Includes 5 products for comprehensive weight management"],
      es: ["Programa de 14 días diseñado por profesionales de la salud", "Apoya hábitos alimenticios saludables", "Incluye 5 productos para manejo integral de peso"],
    },
    ingredients: "4 Prunex1 + 28 Protein Active Fit (Vanilla & Cinnamon) + 14 Vita Xtra T+ + 14 Thermo T3 + 14 NoCarb-T",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Pack Box",
    priceUS: 170.0, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115896",
    paymentLinkGT: "",
    image: "/images/products/10-14-pack.webp", gradient: "from-emerald-400 to-green-600",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: true,
    tags: ["combo", "14-day", "weight-program", "complete"],
  },
  {
    id: "pack-5-14-gt", slug: "pack-5-14-gt",
    name: { en: "Pack 5|14 CL", es: "Pack 5|14 CL" },
    category: "combo", productLine: "combo",
    shortDescription: {
      en: "Guatemala-exclusive cleansing and weight management pack for a structured 14-day wellness program.",
      es: "Pack exclusivo de Guatemala de limpieza y manejo de peso para un programa de bienestar estructurado de 14 días.",
    },
    benefits: {
      en: ["14-day structured wellness program", "Combines cleansing and weight management products", "Designed for comprehensive body support"],
      es: ["Programa de bienestar estructurado de 14 días", "Combina productos de limpieza y control de peso", "Diseñado para soporte corporal integral"],
    },
    ingredients: "Assorted wellness products for 14-day program",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Pack Box",
    priceUS: null, priceGT: 1015.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3115984",
    image: "/images/products/pack-5-14.webp", gradient: "from-emerald-500 to-teal-600",
    countries: ["GT"], isSeasonal: false, isSeasonalActive: false, isCombo: true,
    tags: ["combo", "14-day", "cleansing", "weight"],
  },
  {
    id: "forever-young-combo", slug: "forever-young-combo",
    name: { en: "Forever Young Combo", es: "Combo Forever Young" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "Premium anti-aging combo for cellular rejuvenation, collagen support, and youthful vitality.", es: "Combo premium anti-edad para rejuvenecimiento celular, soporte de colágeno y vitalidad juvenil." },
    benefits: { en: ["Comprehensive anti-aging support", "Combines multiple cellular rejuvenation products", "Supports skin, joints, and overall vitality"], es: ["Soporte anti-edad integral", "Combina múltiples productos de rejuvenecimiento celular", "Apoya piel, articulaciones y vitalidad general"] },
    ingredients: "Assorted anti-age products",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Combo Pack",
    priceUS: 240.0, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115897",
    paymentLinkGT: "",
    image: "/images/products/forever-young-combo.webp", gradient: "from-violet-400 to-purple-600",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: true,
    tags: ["combo", "anti-age", "collagen", "rejuvenation"],
  },
  {
    id: "natural-defense-combo", slug: "natural-defense-combo",
    name: { en: "Natural Defense Combo", es: "Combo Defensa Natural" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "Immune-boosting combo to support your body's natural defense system year-round.", es: "Combo de refuerzo inmune para apoyar el sistema de defensa natural de tu cuerpo todo el año." },
    benefits: { en: ["Comprehensive immune support", "Combines defense-boosting products", "Year-round protection support"], es: ["Soporte inmune integral", "Combina productos de refuerzo defensivo", "Soporte de protección todo el año"] },
    ingredients: "Assorted immune support products",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Combo Pack",
    priceUS: 225.5, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115898",
    paymentLinkGT: "",
    image: "/images/products/natural-defense-combo.webp", gradient: "from-blue-400 to-cyan-600",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: true,
    tags: ["combo", "immune", "defense"],
  },
  {
    id: "sport-combo", slug: "sport-combo",
    name: { en: "Sport Combo", es: "Combo Sport" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "Complete sport performance pack with pre, during, and post-workout nutrition support.", es: "Pack completo de rendimiento deportivo con nutrición pre, durante y post entrenamiento." },
    benefits: { en: ["Complete workout nutrition cycle", "Pre, during, and post-exercise support", "Muscle recovery and performance optimization"], es: ["Ciclo completo de nutrición deportiva", "Soporte pre, durante y post ejercicio", "Recuperación muscular y optimización del rendimiento"] },
    ingredients: "Assorted sport performance products",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Combo Pack",
    priceUS: 238.0, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115899",
    paymentLinkGT: "",
    image: "/images/products/sport-combo.webp", gradient: "from-red-400 to-orange-600",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: true,
    tags: ["combo", "sport", "workout"],
  },
  {
    id: "full-power-combo", slug: "full-power-combo",
    name: { en: "Full Power Combo", es: "Combo Full Power" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "All-in-one energy and vitality combo for maximum daily performance and wellbeing.", es: "Combo todo-en-uno de energía y vitalidad para máximo rendimiento diario y bienestar." },
    benefits: { en: ["Maximum energy and vitality support", "Comprehensive daily performance combo", "Multiple products for total wellbeing"], es: ["Máximo soporte de energía y vitalidad", "Combo integral de rendimiento diario", "Múltiples productos para bienestar total"] },
    ingredients: "Assorted energy and vitality products",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Combo Pack",
    priceUS: 220.0, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115900",
    paymentLinkGT: "",
    image: "/images/products/full-power-combo.webp", gradient: "from-amber-400 to-orange-600",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: true,
    tags: ["combo", "energy", "vitality"],
  },
  {
    id: "vigor-combo", slug: "vigor-combo",
    name: { en: "Vigor Combo", es: "Combo Vigor" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "Vitality and stamina combo to support energy, endurance, and overall vigor.", es: "Combo de vitalidad y resistencia para apoyar energía, aguante y vigor general." },
    benefits: { en: ["Supports energy and stamina", "Promotes endurance and vigor", "Combined vitality products"], es: ["Apoya energía y resistencia", "Promueve aguante y vigor", "Productos de vitalidad combinados"] },
    ingredients: "Assorted vitality products",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Combo Pack",
    priceUS: 224.0, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115927",
    paymentLinkGT: "",
    image: "/images/products/vigor-combo.webp", gradient: "from-red-500 to-rose-600",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: true,
    tags: ["combo", "vigor", "stamina"],
  },
  {
    id: "weight-control-combo-1", slug: "weight-control-combo-1",
    name: { en: "Weight Control Combo #1", es: "Combo Control de Peso #1" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "Protein, thermogenic, and carb-support combo for structured weight management.", es: "Combo de proteína, termogénico y soporte de carbohidratos para un control de peso estructurado." },
    benefits: { en: ["Five complementary products for weight management", "Supports fat metabolism and appetite control", "Pairs protein nutrition with carbohydrate support"], es: ["Cinco productos complementarios para el control de peso", "Apoya el metabolismo de grasas y el control del apetito", "Combina nutrición proteica con soporte de carbohidratos"] },
    ingredients: "1 Protein Active Fit (Chocolate & Hazelnut) + 1 Thermo T3 + 1 NoCarb-T + 1 Vita Xtra T+ + 1 Prunex1",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Combo Pack",
    priceUS: 225.5, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115904",
    paymentLinkGT: "",
    image: "/images/products/weight-control-combo-1.webp", gradient: "from-rose-400 to-pink-600",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: true,
    tags: ["combo", "weight", "thermogenic", "protein"],
  },
  {
    id: "weight-control-combo-2", slug: "weight-control-combo-2",
    name: { en: "Weight Control Combo #2", es: "Combo Control de Peso #2" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "Weight-and-performance combo with sport protein, pre/post nutrition, and metabolism support.", es: "Combo de control de peso y rendimiento con proteína deportiva, nutrición pre/post y soporte metabólico." },
    benefits: { en: ["Built for active, weight-conscious lifestyles", "Pre- and post-workout nutrition included", "Supports fat metabolism and recovery"], es: ["Diseñado para estilos de vida activos y conscientes del peso", "Incluye nutrición pre y post entrenamiento", "Apoya el metabolismo de grasas y la recuperación"] },
    ingredients: "1 Protein Active Sport (Vanilla & Cinnamon) + 1 Pre Sport + 1 Post Sport + 1 NoCarb-T + 1 Thermo T3",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Combo Pack",
    priceUS: 238.0, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115906",
    paymentLinkGT: "",
    image: "/images/products/weight-control-combo-2.webp", gradient: "from-rose-500 to-red-600",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: true,
    tags: ["combo", "weight", "sport", "protein"],
  },
  {
    id: "weight-control-combo-4", slug: "weight-control-combo-4",
    name: { en: "Weight Control Combo #4", es: "Combo Control de Peso #4" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "Waistline-focused combo pairing carb support, thermogenics, and gourmet coffee.", es: "Combo enfocado en las medidas que combina soporte de carbohidratos, termogénicos y café gourmet." },
    benefits: { en: ["Targets waistline and measurements", "Combines thermogenic and carbohydrate support", "Includes gourmet coffee for appetite control"], es: ["Enfocado en las medidas y la cintura", "Combina soporte termogénico y de carbohidratos", "Incluye café gourmet para el control del apetito"] },
    ingredients: "1 NoCarb-T + 1 Thermo T3 + 1 Café & Café Fit + 1 Prunex1 + 1 Vita Xtra T+",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Combo Pack",
    priceUS: 220.0, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115910",
    paymentLinkGT: "",
    image: "/images/products/weight-control-combo-4.webp", gradient: "from-pink-400 to-rose-600",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: true,
    tags: ["combo", "weight", "thermogenic", "coffee"],
  },
  {
    id: "lifestyle-combo-1", slug: "lifestyle-combo-1",
    name: { en: "Life Style Combo #1", es: "Combo Estilo de Vida #1" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "Lifestyle combo for beauty, hormonal balance, and mental wellbeing.", es: "Combo de estilo de vida para la belleza, el equilibrio hormonal y el bienestar mental." },
    benefits: { en: ["Supports beauty and skin from within", "Balances focus by day and calm by night", "Five products for everyday wellbeing"], es: ["Apoya la belleza y la piel desde adentro", "Equilibra el enfoque de día y la calma de noche", "Cinco productos para el bienestar diario"] },
    ingredients: "1 Youth Elixir + 1 Beauty-In + 1 Probal + 1 ON + 1 OFF",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Combo Pack",
    priceUS: 242.0, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115912",
    paymentLinkGT: "",
    image: "/images/products/lifestyle-combo-1.webp", gradient: "from-violet-400 to-purple-600",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: true,
    tags: ["combo", "lifestyle", "beauty", "mental"],
  },
  {
    id: "lifestyle-combo-2", slug: "lifestyle-combo-2",
    name: { en: "Life Style Combo #2", es: "Combo Estilo de Vida #2" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "Lifestyle combo focused on digestion, balance, and daily energy.", es: "Combo de estilo de vida enfocado en la digestión, el equilibrio y la energía diaria." },
    benefits: { en: ["Supports digestion and urinary balance", "Daily antioxidant energy", "Helps manage carbohydrates and metabolism"], es: ["Apoya la digestión y el equilibrio urinario", "Energía antioxidante diaria", "Ayuda a manejar carbohidratos y metabolismo"] },
    ingredients: "1 Liquid Fiber + 1 Berry Balance + 1 Vita Xtra T+ + 1 NoCarb-T + 1 Thermo T3",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Combo Pack",
    priceUS: 231.0, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115913",
    paymentLinkGT: "",
    image: "/images/products/lifestyle-combo-2.webp", gradient: "from-fuchsia-400 to-purple-600",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: true,
    tags: ["combo", "lifestyle", "digestion", "energy"],
  },
  {
    id: "lifestyle-combo-3", slug: "lifestyle-combo-3",
    name: { en: "Life Style Combo #3", es: "Combo Estilo de Vida #3" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "Lifestyle combo for cleansing and everyday balance.", es: "Combo de estilo de vida para la limpieza y el equilibrio diario." },
    benefits: { en: ["Alkalizing and cleansing support", "Probiotic and urinary balance", "Gourmet coffee for appetite control"], es: ["Soporte alcalinizante y de limpieza", "Equilibrio probiótico y urinario", "Café gourmet para el control del apetito"] },
    ingredients: "1 Alpha Balance + 1 Café & Café Fit + 1 Berry Balance + 1 Flora Liv + 1 NoCarb-T",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Combo Pack",
    priceUS: 240.0, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115920",
    paymentLinkGT: "",
    image: "/images/products/lifestyle-combo-3.webp", gradient: "from-purple-400 to-violet-600",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: true,
    tags: ["combo", "lifestyle", "cleansing", "balance"],
  },
  {
    id: "anti-age-combo-1", slug: "anti-age-combo-1",
    name: { en: "Anti-Age Combo #1", es: "Combo Anti-Edad #1" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "Anti-aging combo for radiant skin and daily vitality.", es: "Combo anti-edad para una piel radiante y vitalidad diaria." },
    benefits: { en: ["Collagen and antioxidant skin support", "Daily energy and hydration", "Five products for youthful vitality"], es: ["Soporte de colágeno y antioxidantes para la piel", "Energía e hidratación diaria", "Cinco productos para una vitalidad juvenil"] },
    ingredients: "1 Vita Xtra T+ + 1 Berry Balance + 1 Beauty-In + 1 Liquid Fiber + 1 Xtra Mile",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Combo Pack",
    priceUS: 242.0, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115921",
    paymentLinkGT: "",
    image: "/images/products/anti-age-combo-1.webp", gradient: "from-purple-400 to-fuchsia-600",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: true,
    tags: ["combo", "anti-age", "collagen", "beauty"],
  },
  {
    id: "anti-age-combo-2", slug: "anti-age-combo-2",
    name: { en: "Anti-Age Combo #2", es: "Combo Anti-Edad #2" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "Anti-aging combo balancing metabolism, vitality, and immunity.", es: "Combo anti-edad que equilibra metabolismo, vitalidad e inmunidad." },
    benefits: { en: ["Supports metabolism and youthful vitality", "Immune and antioxidant support", "Helps invigorate body and mind"], es: ["Apoya el metabolismo y la vitalidad juvenil", "Soporte inmune y antioxidante", "Ayuda a vigorizar cuerpo y mente"] },
    ingredients: "1 NoCarb-T + 1 Thermo T3 + 1 Youth Elixir + 1 Vera+ + 1 Passion",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Combo Pack",
    priceUS: 231.0, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115922",
    paymentLinkGT: "",
    image: "/images/products/anti-age-combo-2.webp", gradient: "from-violet-500 to-purple-700",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: true,
    tags: ["combo", "anti-age", "vitality", "immune"],
  },
  {
    id: "anti-age-combo-3", slug: "anti-age-combo-3",
    name: { en: "Anti-Age Combo #3", es: "Combo Anti-Edad #3" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "Anti-aging combo supporting joints, beauty, and vitality.", es: "Combo anti-edad que apoya articulaciones, belleza y vitalidad." },
    benefits: { en: ["Joint flexibility and mobility support", "Collagen and beauty from within", "Digestive and vitality support"], es: ["Soporte de flexibilidad y movilidad articular", "Colágeno y belleza desde adentro", "Soporte digestivo y de vitalidad"] },
    ingredients: "1 Prunex1 + 1 Golden FLX + 1 NoCarb-T + 1 Passion + 1 Beauty-In",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Combo Pack",
    priceUS: 235.5, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115923",
    paymentLinkGT: "",
    image: "/images/products/anti-age-combo-3.webp", gradient: "from-fuchsia-500 to-purple-700",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: true,
    tags: ["combo", "anti-age", "joints", "beauty"],
  },
  {
    id: "anti-age-combo-4", slug: "anti-age-combo-4",
    name: { en: "Anti-Age Combo #4", es: "Combo Anti-Edad #4" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "Anti-aging combo for skin, balance, and immune wellbeing.", es: "Combo anti-edad para la piel, el equilibrio y el bienestar inmune." },
    benefits: { en: ["Skin elasticity and collagen support", "Hormonal and urinary balance", "Immune and antioxidant wellbeing"], es: ["Soporte de elasticidad de la piel y colágeno", "Equilibrio hormonal y urinario", "Bienestar inmune y antioxidante"] },
    ingredients: "1 Probal + 1 Beauty-In + 1 Berry Balance + 1 Youth Elixir + 1 Gano+ Cappuccino",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Combo Pack",
    priceUS: 238.5, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115924",
    paymentLinkGT: "",
    image: "/images/products/anti-age-combo-4.webp", gradient: "from-purple-500 to-fuchsia-700",
    countries: ["US"], isSeasonal: false, isSeasonalActive: false, isCombo: true,
    tags: ["combo", "anti-age", "beauty", "immune"],
  },

  // ═══════════════════════════════════════════════════════════════
  // SEASONAL / TEMPORADA — Father's Day Combos
  // These are TEMPORARY products. To hide them, set isSeasonalActive: false
  // ═══════════════════════════════════════════════════════════════
  {
    id: "seasonal-fathers-day-gt-1", slug: "combo-dia-del-padre-probix-nocarb",
    name: { en: "Father's Day: Probix + NoCarb-T", es: "Día del Padre: Probix + NoCarb-T" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "Father's Day special combo: Probix + NoCarb-T for digestive and weight management support.", es: "Combo especial del Día del Padre: Probix + NoCarb-T para soporte digestivo y de control de peso." },
    benefits: { en: ["Special Father's Day gift combo", "Digestive and weight management support", "Two premium products at a special price"], es: ["Combo especial de regalo del Día del Padre", "Soporte digestivo y de control de peso", "Dos productos premium a precio especial"] },
    ingredients: "Probix + NoCarb-T",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Combo",
    priceUS: null, priceGT: 521.99, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3116017",
    image: "/images/products/fathers-day-combo.webp", gradient: "from-blue-500 to-indigo-600",
    countries: ["GT"], isSeasonal: true, isSeasonalActive: true, isCombo: true,
    tags: ["seasonal", "fathers-day", "combo", "gift"],
  },
  {
    id: "seasonal-fathers-day-gt-2", slug: "combo-dia-del-padre-sport",
    name: { en: "Father's Day: BioPro+ Sport + Pre Sport", es: "Día del Padre: BioPro+ Sport + Pre Sport" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "Father's Day sport combo: BioPro+ Sport + Pre Sport for active dads.", es: "Combo deportivo del Día del Padre: BioPro+ Sport + Pre Sport para papás activos." },
    benefits: { en: ["Perfect gift for active fathers", "Complete sport nutrition support", "Two premium sport products"], es: ["Regalo perfecto para padres activos", "Soporte completo de nutrición deportiva", "Dos productos deportivos premium"] },
    ingredients: "BioPro+ Sport + Pre Sport",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Combo",
    priceUS: null, priceGT: 528.0, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3116022",
    image: "/images/products/fathers-day-sport.webp", gradient: "from-red-500 to-orange-600",
    countries: ["GT"], isSeasonal: true, isSeasonalActive: true, isCombo: true,
    tags: ["seasonal", "fathers-day", "combo", "sport", "gift"],
  },
  {
    id: "seasonal-fathers-day-gt-3", slug: "combo-dia-del-padre-mental",
    name: { en: "Father's Day: ON + No Stress", es: "Día del Padre: ON + No Stress" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "Father's Day mental wellness combo: ON + No Stress for focus and relaxation.", es: "Combo de bienestar mental del Día del Padre: ON + No Stress para enfoque y relajación." },
    benefits: { en: ["Mental wellness gift for dads", "Focus and relaxation support", "Two premium mental stamina products"], es: ["Regalo de bienestar mental para papás", "Soporte de enfoque y relajación", "Dos productos premium de rendimiento mental"] },
    ingredients: "ON + No Stress",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Combo",
    priceUS: null, priceGT: 501.99, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "",
    paymentLinkGT: "https://tiendafuxion.com/storelt/vidaflow/3116024",
    image: "/images/products/fathers-day-mental.webp", gradient: "from-indigo-500 to-blue-600",
    countries: ["GT"], isSeasonal: true, isSeasonalActive: true, isCombo: true,
    tags: ["seasonal", "fathers-day", "combo", "mental", "gift"],
  },
  {
    id: "seasonal-fathers-day-us-1", slug: "fathers-day-on-off",
    name: { en: "Father's Day: ON + OFF", es: "Día del Padre: ON + OFF" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "Father's Day special: ON + OFF for the dad who needs focus by day and calm by night.", es: "Especial del Día del Padre: ON + OFF para el papá que necesita enfoque de día y calma de noche." },
    benefits: { en: ["Perfect balance of focus and relaxation", "Father's Day special pricing", "Two essential mental wellness products"], es: ["Equilibrio perfecto de enfoque y relajación", "Precio especial del Día del Padre", "Dos productos esenciales de bienestar mental"] },
    ingredients: "ON + OFF",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Combo",
    priceUS: 73.9, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115969",
    paymentLinkGT: "",
    image: "/images/products/fathers-day-on-off.webp", gradient: "from-cyan-500 to-blue-600",
    countries: ["US"], isSeasonal: true, isSeasonalActive: true, isCombo: true,
    tags: ["seasonal", "fathers-day", "combo", "mental", "gift"],
  },
  {
    id: "seasonal-fathers-day-us-2", slug: "fathers-day-protein-sport",
    name: { en: "Father's Day: Protein Active Sport + Shaker", es: "Día del Padre: Protein Active Sport + Shaker" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "Father's Day sport gift: Protein Active Sport Chocolate with a premium shaker bottle.", es: "Regalo deportivo del Día del Padre: Protein Active Sport Chocolate con botella shaker premium." },
    benefits: { en: ["Includes premium shaker bottle", "100% plant-based sport protein", "Ready-to-gift Father's Day set"], es: ["Incluye botella shaker premium", "Proteína deportiva 100% vegetal", "Set listo para regalar del Día del Padre"] },
    ingredients: "Protein Active Sport (Chocolate) + Shaker Bottle",
    flavor: { en: "Chocolate & Hazelnut", es: "Chocolate y Avellana" }, format: "Gift Set",
    priceUS: 48.0, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115971",
    paymentLinkGT: "",
    image: "/images/products/fathers-day-protein.webp", gradient: "from-amber-700 to-red-600",
    countries: ["US"], isSeasonal: true, isSeasonalActive: true, isCombo: true,
    tags: ["seasonal", "fathers-day", "combo", "sport", "gift", "shaker"],
  },
  {
    id: "seasonal-fathers-day-us-3", slug: "fathers-day-rexet-nocarb",
    name: { en: "Father's Day: Rexet + NoCarb-T", es: "Día del Padre: Rexet + NoCarb-T" },
    category: "combo", productLine: "combo",
    shortDescription: { en: "Father's Day detox combo: Rexet + NoCarb-T for cleansing and carbohydrate management.", es: "Combo detox del Día del Padre: Rexet + NoCarb-T para limpieza y manejo de carbohidratos." },
    benefits: { en: ["Detox and weight management support", "Father's Day special pricing", "Two complementary wellness products"], es: ["Soporte de desintoxicación y manejo de peso", "Precio especial del Día del Padre", "Dos productos de bienestar complementarios"] },
    ingredients: "Rexet + NoCarb-T",
    flavor: { en: "Assorted", es: "Surtido" }, format: "Combo",
    priceUS: 73.9, priceGT: null, currencyUS: "USD", currencyGT: "GTQ",
    paymentLinkUS: "https://tiendafuxion.com/storelt/vidaflow/3115973",
    paymentLinkGT: "",
    image: "/images/products/fathers-day-detox.webp", gradient: "from-green-500 to-emerald-600",
    countries: ["US"], isSeasonal: true, isSeasonalActive: true, isCombo: true,
    tags: ["seasonal", "fathers-day", "combo", "detox", "gift"],
  },
];

// =============================================================================
// Helper functions
// =============================================================================

export function getVisibleProducts(country?: CountryCode): ProductData[] {
  return products.filter((p) => {
    if (p.isSeasonal && !p.isSeasonalActive) return false;
    if (country && !p.countries.includes(country)) return false;
    return true;
  });
}

export function getProductBySlug(slug: string): ProductData | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory, country?: CountryCode): ProductData[] {
  return getVisibleProducts(country).filter((p) => p.category === category);
}

export function getSeasonalProducts(country?: CountryCode): ProductData[] {
  return products.filter((p) => p.isSeasonal && p.isSeasonalActive && (!country || p.countries.includes(country)));
}

export function getComboProducts(country?: CountryCode): ProductData[] {
  return getVisibleProducts(country).filter((p) => p.isCombo);
}

export function getRelatedProducts(slug: string, country?: CountryCode, limit = 3): ProductData[] {
  const product = getProductBySlug(slug);
  if (!product) return [];
  const sameCategory = getVisibleProducts(country).filter((p) => p.slug !== slug && p.category === product.category);
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);
  // Fill with other products if not enough in same category
  const others = getVisibleProducts(country).filter((p) => p.slug !== slug && p.category !== product.category);
  return [...sameCategory, ...others].slice(0, limit);
}

export function formatPrice(product: ProductData, country: CountryCode): string {
  if (country === "GT") {
    return product.priceGT != null ? `Q${product.priceGT.toFixed(2)}` : "N/A";
  }
  return product.priceUS != null ? `$${product.priceUS.toFixed(2)}` : "N/A";
}

export function getPaymentLink(product: ProductData, country: CountryCode): string {
  return country === "GT" ? product.paymentLinkGT : product.paymentLinkUS;
}

export const allCategories = Object.keys(categoryMeta) as ProductCategory[];
