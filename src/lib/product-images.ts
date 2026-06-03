// =============================================================================
// Product Image Mapping — REAL FUXION CATALOG IMAGES
// Location: src/lib/product-images.ts
//
// All images are cropped from the official Fuxion product photography
// (beverage-hero compositions with the product box as a credibility element),
// stored locally in /public/images/products/.
//
// IMAGE SOURCE STATUS:
//   ✓ DIRECT  = product has its own dedicated catalog photo
//   ↳ FAMILY  = product reuses the closest same-color/same-flavor catalog drink
//               (these can be replaced with a dedicated photo later)
//
// HOW TO REPLACE / ADD A DEDICATED IMAGE:
//   1. Drop an 800px-wide WebP at /public/images/products/{slug}.webp
//   2. Point the slug below at "/images/products/{slug}.webp"
//   3. Rebuild. That's it.
// =============================================================================

const P = "/images/products";

export const productImages: Record<string, string> = {
  // ── CLEANSING / DETOX ──────────────────────────────────────────
  "flora-liv": `${P}/flora-liv.webp`,        // ✓ DIRECT — golden passion fruit drink
  "liquid-fiber": `${P}/liquid-fiber.webp`,  // ✓ DIRECT — lemon drink
  "prunex1": `${P}/prunex1.webp`,            // ✓ DIRECT — prune herbal tea
  "obalance": `${P}/obalance.webp`,          // ✓ DIRECT — green apple chlorophyll (Alpha Balance)
  "berry-balance": `${P}/berry-balance.webp`,// ✓ DIRECT — red cranberry berry drink
  "rexet": `${P}/rexet.webp`,                // ✓ DIRECT — amber prickly pear tea
  "probix": `${P}/probix.webp`,              // ✓ DIRECT — red postbiotic berry drink

  // ── NUTRITION & REGENERATION ───────────────────────────────────
  "biopro-tect": `${P}/biopro-tect.webp`,    // ✓ DIRECT — vanilla protein shake
  "protein-active": `${P}/protein-active.webp`, // ✓ DIRECT — chocolate protein shake

  // ── ENERGY & REVITALIZATION ────────────────────────────────────
  "vita-xtra-t": `${P}/vita-xtra-t.webp`,    // ✓ DIRECT — purple superfruit drink
  "nutraday": `${P}/berry-balance.webp`,     // ↳ FAMILY — strawberry → red berry drink

  // ── IMMUNE SUPPORT ─────────────────────────────────────────────
  "vera-plus": `${P}/obalance.webp`,         // ↳ FAMILY — mint → green drink
  "ganomas-cappuccino": `${P}/chocolate-fit.webp`, // ↳ FAMILY — reishi coffee → brown drink

  // ── WEIGHT MANAGEMENT ──────────────────────────────────────────
  "thermo-t3": `${P}/thermo-t3.webp`,        // ✓ DIRECT — green lemon tea
  "nocarb-t": `${P}/prunex1.webp`,           // ↳ FAMILY — apple cinnamon → amber tea
  "cafe-fit": `${P}/chocolate-fit.webp`,     // ↳ FAMILY — coffee → brown drink
  "cafe-fit-cappuccino": `${P}/chocolate-fit.webp`, // ↳ FAMILY — cappuccino → brown drink
  "chocolate-fit": `${P}/chocolate-fit.webp`,// ✓ DIRECT — dark chocolate drink
  "biopro-fit": `${P}/biopro-fit.webp`,      // ✓ DIRECT — vanilla protein shake
  "protein-active-fit": `${P}/protein-active-fit.webp`, // ✓ DIRECT — vanilla protein shake

  // ── ANTI-AGE ───────────────────────────────────────────────────
  "probal": `${P}/probal.webp`,              // ✓ DIRECT — green herbal tea
  "passion": `${P}/on.webp`,                 // ↳ FAMILY — guarana → red energizing drink
  "youth-elixir": `${P}/vita-xtra-t.webp`,   // ↳ FAMILY — grape wine → purple drink
  "golden-flx": `${P}/flora-liv.webp`,       // ↳ FAMILY — golden milk → golden drink
  "beauty-in": `${P}/berry-balance.webp`,    // ↳ FAMILY — exotic fruit → pink/red drink

  // ── MENTAL STAMINA ─────────────────────────────────────────────
  "on": `${P}/on.webp`,                      // ✓ DIRECT — red mixed fruits drink
  "off": `${P}/no-stress.webp`,              // ↳ FAMILY — peach calm → herbal tea
  "no-stress": `${P}/no-stress.webp`,        // ✓ DIRECT — chamomile herbal tea

  // ── SPORT PERFORMANCE ──────────────────────────────────────────
  "pre-sport": `${P}/on.webp`,               // ↳ FAMILY — watermelon → red drink
  "xtra-mile": `${P}/flora-liv.webp`,        // ↳ FAMILY — orange → golden drink
  "post-sport": `${P}/on.webp`,              // ↳ FAMILY — pomegranate → red drink
  "biopro-sport": `${P}/biopro-tect.webp`,   // ↳ FAMILY — vanilla protein → cream shake
  "protein-active-sport": `${P}/protein-active-sport.webp`, // ✓ DIRECT — chocolate sport protein

  // ── COMBOS & PACKS ────────────────────────────────────────────
  "10-14-pack": `${P}/10-14-pack.webp`,                  // ✓ DIRECT
  "pack-5-14-gt": `${P}/10-14-pack.webp`,                // ↳ FAMILY — reuses 10/14 pack tile
  "forever-young-combo": `${P}/forever-young-combo.webp`,// ✓ DIRECT
  "natural-defense-combo": `${P}/natural-defense-combo.webp`, // ✓ DIRECT
  "sport-combo": `${P}/sport-combo.webp`,                // ✓ DIRECT
  "full-power-combo": `${P}/full-power-combo.webp`,      // ✓ DIRECT
  "vigor-combo": `${P}/full-power-combo.webp`,           // ↳ FAMILY — reuses Full Power tile

  // ── SEASONAL / FATHER'S DAY ────────────────────────────────────
  "combo-dia-del-padre-probix-nocarb": `${P}/fathers-day-tile.webp`,
  "combo-dia-del-padre-sport": `${P}/fathers-day-tile.webp`,
  "combo-dia-del-padre-mental": `${P}/fathers-day-tile.webp`,
  "fathers-day-on-off": `${P}/fathers-day-tile.webp`,
  "fathers-day-protein-sport": `${P}/fathers-day-tile.webp`,
  "fathers-day-rexet-nocarb": `${P}/fathers-day-tile.webp`,
};

// Category-based fallback — closest catalog drink per category
export const categoryFallbacks: Record<string, string> = {
  cleansing: `${P}/obalance.webp`,
  energy:    `${P}/vita-xtra-t.webp`,
  nutrition: `${P}/biopro-tect.webp`,
  immune:    `${P}/obalance.webp`,
  weight:    `${P}/thermo-t3.webp`,
  antiage:   `${P}/berry-balance.webp`,
  mental:    `${P}/no-stress.webp`,
  sport:     `${P}/protein-active-sport.webp`,
  combo:     `${P}/10-14-pack.webp`,
};

/**
 * Get the image URL for a product.
 * Falls back to category image if no product-specific image exists.
 */
export function getProductImage(slug: string, category: string): string {
  return productImages[slug] || categoryFallbacks[category] || categoryFallbacks.cleansing;
}
