"""One-off: convert catalog-uploads PNGs -> per-product webp images.

Run from the vidaflow project root:  python scripts/gen_product_images.py
"""
import os
from PIL import Image

SRC = r"C:\Claude Projects\VidaFlow\vidaflow\catalog-uploads"
OUT = r"C:\Claude Projects\VidaFlow\vidaflow\public\images\products"
MAX = 1000
QUALITY = 82

# slug -> source PNG filename (without extension) in catalog-uploads
MAP = {
    # cleansing / detox
    "flora-liv": "FloraLiv",
    "liquid-fiber": "Liquid Fiber",
    "prunex1": "Prunex",
    "obalance": "Alpha Balance",
    "berry-balance": "Berry Balance",
    "rexet": "Rexet",
    "probix": "Probix",
    # nutrition & regeneration
    "biopro-tect": "BioPro+ Tect",
    "protein-active": "Protein Active - CH",
    # energy & revitalization
    "vita-xtra-t": "Vita XtraT",          # US packaging
    "vita-xtra-t-gt": "VitaEnergia",      # GT packaging (VitaEnergía)
    "nutraday": "Nutraday",
    # immune
    "vera-plus": "Vera+",
    "ganomas-cappuccino": "Ganomas Cappuccino",
    # weight
    "thermo-t3": "Thermo T3",
    "nocarb-t": "NoCarb T",
    "cafe-fit": "Cafe & Cafe Fit",
    "cafe-fit-cappuccino": "Cafe & Cafe Fit Cappuccino",
    "biopro-fit": "BioPro+ Fit",
    "protein-active-fit": "Protein Active Fit - CH",
    # anti-age
    "probal": "Probal",
    "passion": "Passion",
    "youth-elixir": "Youth Elixir",
    "golden-flx": "Golden FLX",
    "beauty-in": "Beauty-In",
    # mental
    "on": "ON",
    "no-stress": "No Stress",
    # sport
    "pre-sport": "Pre Sport Pro",
    "xtra-mile": "Xtra Mile",
    "biopro-sport": "BioPro+ Sport",
    "protein-active-sport": "Protein Active Sport - CH",
    # combos (US)
    "10-14-pack": "Pack 1014",
    "pack-5-14-gt": "Pack 514",
    "forever-young-combo": "Forever Young Combo",
    "natural-defense-combo": "Natural Defense Combo",
    "sport-combo": "Sport Combo",
    "full-power-combo": "Full Power Combo",
    "vigor-combo": "Vigor Combo",
    "weight-control-combo-1": "Weight Control Combo1",
    "weight-control-combo-2": "Weight Control Combo2",
    "weight-control-combo-4": "Weight Control Combo4",
    "lifestyle-combo-1": "Lifestyle Combo1",
    "lifestyle-combo-2": "Lifestyle Combo2",
    "lifestyle-combo-3": "Lifestyle Combo3",
    "anti-age-combo-1": "Anti-Aging Combo1",
    "anti-age-combo-2": "Anti-Aging Combo2",
    "anti-age-combo-3": "Anti-Aging Combo3",
    "anti-age-combo-4": "Anti-Aging Combo4",
    # seasonal father's day
    "combo-dia-del-padre-probix-nocarb": "Dia del Padre - Probix NoCarbT",
    "combo-dia-del-padre-sport": "Dia del Padre - BioPro+ Sport PreSport",
    "combo-dia-del-padre-mental": "Dia del Padre - ON NO Stress",
    "fathers-day-on-off": "Fathers Day - ON OFF",
    "fathers-day-protein-sport": "Fathers Day - Protein Active Chocolate",
    "fathers-day-rexet-nocarb": "Fathers Day - Rexet NocarbT",
}

os.makedirs(OUT, exist_ok=True)
ok, miss = [], []
for slug, base in MAP.items():
    src = os.path.join(SRC, base + ".png")
    if not os.path.exists(src):
        miss.append((slug, base))
        continue
    img = Image.open(src).convert("RGB")
    w, h = img.size
    scale = min(MAX / max(w, h), 1.0)
    if scale < 1.0:
        img = img.resize((round(w * scale), round(h * scale)), Image.LANCZOS)
    dst = os.path.join(OUT, slug + ".webp")
    img.save(dst, "WEBP", quality=QUALITY, method=6)
    ok.append(slug)

print(f"Wrote {len(ok)} webp images to {OUT}")
if miss:
    print("MISSING SOURCES:")
    for slug, base in miss:
        print(f"  {slug}  <-  {base}.png")
