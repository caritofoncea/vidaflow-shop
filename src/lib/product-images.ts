// =============================================================================
// Product Image Mapping — REAL VIDAFLOW / FUXION CATALOG IMAGES
// Location: src/lib/product-images.ts
//
// Each image is the official portrait marketing infographic for the product
// (brand header + product name + slogan + benefits + product boxes), generated
// from /catalog-uploads via scripts/gen_product_images.py and stored at
// /public/images/products/{slug}.webp (≈1000px tall, WebP).
//
// IMPORTANT: these are PORTRAIT infographics — display them with
// `object-contain` (never crop) on a light/white background.
//
// IMAGE SOURCE STATUS:
//   ✓ DIRECT  = product has its own dedicated catalog infographic
//   ↳ FAMILY  = no dedicated art yet; reuses the closest same-line sibling
//               (drop a {slug}.webp here later to give it its own image)
//
// HOW TO REPLACE / ADD A DEDICATED IMAGE:
//   1. Drop a portrait WebP at /public/images/products/{slug}.webp
//   2. Point the slug below at "/images/products/{slug}.webp" (mark ✓ DIRECT)
//   3. Rebuild. That's it.
// =============================================================================

const P = "/images/products";

export const productImages: Record<string, string> = {
  // ── CLEANSING / DETOX ──────────────────────────────────────────
  "flora-liv": `${P}/flora-liv.webp`,        // ✓ DIRECT
  "liquid-fiber": `${P}/liquid-fiber.webp`,  // ✓ DIRECT
  "prunex1": `${P}/prunex1.webp`,            // ✓ DIRECT
  "obalance": `${P}/obalance.webp`,          // ✓ DIRECT — Alpha Balance
  "berry-balance": `${P}/berry-balance.webp`,// ✓ DIRECT
  "rexet": `${P}/rexet.webp`,                // ✓ DIRECT
  "probix": `${P}/probix.webp`,              // ✓ DIRECT

  // ── NUTRITION & REGENERATION ───────────────────────────────────
  "biopro-tect": `${P}/biopro-tect.webp`,    // ✓ DIRECT
  "protein-active": `${P}/protein-active.webp`, // ✓ DIRECT — Chocolate & Hazelnut

  // ── ENERGY & REVITALIZATION ────────────────────────────────────
  "vita-xtra-t": `${P}/vita-xtra-t.webp`,    // ✓ DIRECT
  "nutraday": `${P}/nutraday.webp`,          // ✓ DIRECT

  // ── IMMUNE SUPPORT ─────────────────────────────────────────────
  "vera-plus": `${P}/vera-plus.webp`,        // ✓ DIRECT
  "ganomas-cappuccino": `${P}/ganomas-cappuccino.webp`, // ✓ DIRECT

  // ── WEIGHT MANAGEMENT ──────────────────────────────────────────
  "thermo-t3": `${P}/thermo-t3.webp`,        // ✓ DIRECT
  "nocarb-t": `${P}/nocarb-t.webp`,          // ✓ DIRECT
  "cafe-fit": `${P}/cafe-fit.webp`,          // ✓ DIRECT
  "cafe-fit-cappuccino": `${P}/cafe-fit-cappuccino.webp`, // ✓ DIRECT
  "chocolate-fit": `${P}/cafe-fit.webp`,     // ↳ FAMILY — no solo art; reuses Café Fit
  "biopro-fit": `${P}/biopro-fit.webp`,      // ✓ DIRECT
  "protein-active-fit": `${P}/protein-active-fit.webp`, // ✓ DIRECT — Chocolate & Hazelnut

  // ── ANTI-AGE ───────────────────────────────────────────────────
  "probal": `${P}/probal.webp`,              // ✓ DIRECT
  "passion": `${P}/passion.webp`,            // ✓ DIRECT
  "youth-elixir": `${P}/youth-elixir.webp`,  // ✓ DIRECT
  "golden-flx": `${P}/golden-flx.webp`,      // ✓ DIRECT
  "beauty-in": `${P}/beauty-in.webp`,        // ✓ DIRECT

  // ── MENTAL STAMINA ─────────────────────────────────────────────
  "on": `${P}/on.webp`,                      // ✓ DIRECT
  "off": `${P}/on.webp`,                     // ↳ FAMILY — no solo art; reuses ON
  "no-stress": `${P}/no-stress.webp`,        // ✓ DIRECT

  // ── SPORT PERFORMANCE ──────────────────────────────────────────
  "pre-sport": `${P}/pre-sport.webp`,        // ✓ DIRECT
  "xtra-mile": `${P}/xtra-mile.webp`,        // ✓ DIRECT
  "post-sport": `${P}/biopro-sport.webp`,    // ↳ FAMILY — no solo art; reuses BioPro+ Sport
  "biopro-sport": `${P}/biopro-sport.webp`,  // ✓ DIRECT
  "protein-active-sport": `${P}/protein-active-sport.webp`, // ✓ DIRECT — Chocolate & Hazelnut

  // ── COMBOS & PACKS ────────────────────────────────────────────
  "10-14-pack": `${P}/10-14-pack.webp`,                  // ✓ DIRECT
  "pack-5-14-gt": `${P}/pack-5-14-gt.webp`,              // ✓ DIRECT
  "forever-young-combo": `${P}/forever-young-combo.webp`,// ✓ DIRECT
  "natural-defense-combo": `${P}/natural-defense-combo.webp`, // ✓ DIRECT
  "sport-combo": `${P}/sport-combo.webp`,                // ✓ DIRECT
  "full-power-combo": `${P}/full-power-combo.webp`,      // ✓ DIRECT
  "vigor-combo": `${P}/vigor-combo.webp`,                // ✓ DIRECT
  "weight-control-combo-1": `${P}/weight-control-combo-1.webp`, // ✓ DIRECT
  "weight-control-combo-2": `${P}/weight-control-combo-2.webp`, // ✓ DIRECT
  "weight-control-combo-4": `${P}/weight-control-combo-4.webp`, // ✓ DIRECT
  "lifestyle-combo-1": `${P}/lifestyle-combo-1.webp`,    // ✓ DIRECT
  "lifestyle-combo-2": `${P}/lifestyle-combo-2.webp`,    // ✓ DIRECT
  "lifestyle-combo-3": `${P}/lifestyle-combo-3.webp`,    // ✓ DIRECT
  "anti-age-combo-1": `${P}/anti-age-combo-1.webp`,      // ✓ DIRECT
  "anti-age-combo-2": `${P}/anti-age-combo-2.webp`,      // ✓ DIRECT
  "anti-age-combo-3": `${P}/anti-age-combo-3.webp`,      // ✓ DIRECT
  "anti-age-combo-4": `${P}/anti-age-combo-4.webp`,      // ✓ DIRECT

  // ── SEASONAL / FATHER'S DAY ────────────────────────────────────
  "combo-dia-del-padre-probix-nocarb": `${P}/combo-dia-del-padre-probix-nocarb.webp`, // ✓ DIRECT
  "combo-dia-del-padre-sport": `${P}/combo-dia-del-padre-sport.webp`,   // ✓ DIRECT
  "combo-dia-del-padre-mental": `${P}/combo-dia-del-padre-mental.webp`, // ✓ DIRECT
  "fathers-day-on-off": `${P}/fathers-day-on-off.webp`,                 // ✓ DIRECT
  "fathers-day-protein-sport": `${P}/fathers-day-protein-sport.webp`,   // ✓ DIRECT
  "fathers-day-rexet-nocarb": `${P}/fathers-day-rexet-nocarb.webp`,     // ✓ DIRECT
};

// Per-country image overrides — for products whose packaging/branding differs
// by market (e.g. Vita Xtra T+ in the US is sold as "VitaEnergía" in Guatemala).
// All sources still come from catalog-uploads.
export const productImagesByCountry: Record<string, Partial<Record<"US" | "GT", string>>> = {
  "vita-xtra-t": { US: `${P}/vita-xtra-t.webp`, GT: `${P}/vita-xtra-t-gt.webp` },
};

// Category-based fallback — closest catalog infographic per category
export const categoryFallbacks: Record<string, string> = {
  cleansing: `${P}/obalance.webp`,
  energy:    `${P}/vita-xtra-t.webp`,
  nutrition: `${P}/biopro-tect.webp`,
  immune:    `${P}/vera-plus.webp`,
  weight:    `${P}/thermo-t3.webp`,
  antiage:   `${P}/beauty-in.webp`,
  mental:    `${P}/no-stress.webp`,
  sport:     `${P}/pre-sport.webp`,
  combo:     `${P}/10-14-pack.webp`,
};

/**
 * Get the image URL for a product. Every image resolves to a catalog-uploads
 * asset under /images/products. Pass `country` to get the market-specific
 * picture where one exists (e.g. Guatemala VitaEnergía vs US Vita Xtra T+).
 */
export function getProductImage(slug: string, category: string, country?: "US" | "GT"): string {
  if (country && productImagesByCountry[slug]?.[country]) {
    return productImagesByCountry[slug][country] as string;
  }
  return productImages[slug] || categoryFallbacks[category] || categoryFallbacks.cleansing;
}
