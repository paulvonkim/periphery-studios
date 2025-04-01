// data/product-data.ts
import { Product, Collection } from "./collections";

// Enhanced products with all details
export const enhancedProducts: Record<string, Product> = {
  sp1: {
    id: "sp1",
    name: "SANS PAPIERS 01",
    price: 890,
    description:
      "Long padded parka with a dropped waistline, featuring two front welt pockets...",
    images: [
      "/images/collection/sans-papiers/sp1.jpg",
      "/images/collection/sans-papiers/sp1-2.jpg",
      "/images/collection/sans-papiers/sp1-3.jpg",
    ],
    collection: "sans-papiers",
    legacySlug: "osl2ber-dropped-waist-parka",
    sizes: ["46", "48", "50", "52", "54"],
    sizingChart: [
      {
        size: "46",
        chestWidth: "104.0",
        frontLength: "70.0",
        sleeveLength: "64.0",
      },
      // Rest of sizing data...
    ],
    features: [
      "Oversized fit",
      "Classic Periphery Studios logo embroidery on the front",
      // Other features...
    ],
    materials: {
      shell: "66% RECYCLED POLYESTER, 34% ORGANIC COTTON",
      lining: "100% COTTON",
      lining2: "100% VISCOSE",
    },
    care: [
      "do not wash",
      "do not bleach",
      // Other care instructions...
    ],
    madeIn: "China",
    modelInfo: "The model is 186 cm tall and is wearing size 48.",
    relatedProducts: ["sp4", "sp5", "sp3", "sp6", "sp7", "sp8"],
    pairings: ["sp2"],
  },
  // Add the rest of your products with all details...
};

// Update your collections to use the enhanced products
export const enhancedCollections: Record<string, Collection> = {
  "sans-papiers": {
    // Same as your current collection data, but reference enhanced products
    id: "sans-papiers",
    name: "SANS PAPIERS",
    description: "Exploring identity through conceptual fashion",
    slug: "sans-papiers",
    heroImage: "/images/collection/sans-papiers/hero.jpg",
    thumbnailImage: "/images/collection/sans-papiers/cover.jpg",
    products: Object.values(enhancedProducts).filter(
      (p) => p.collection === "sans-papiers"
    ),
  },
  // Same for in-visible-riot...
};

// Helper functions for URL management
export const legacySlugMap: Record<string, string> = {
  "osl2ber-dropped-waist-parka": "sp1",
  "tactical-trousers": "sp2",
  // Add all your legacy mappings...
};

export function getProductByAnyId(id: string): Product | undefined {
  // Try direct ID first
  const directProduct = enhancedProducts[id];
  if (directProduct) return directProduct;

  // Try legacy slug
  const mappedId = legacySlugMap[id];
  if (mappedId) return enhancedProducts[mappedId];

  return undefined;
}

// Export the rest of your helper functions...
