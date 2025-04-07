export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  images: string[];
  collection: string;
  // Optional fields for product detail
  sizes?: string[];
  features?: string[];
  materials?: {
    shell?: string;
    lining?: string;
    lining2?: string;
  };
  care?: string[];
  madeIn?: string;
  modelInfo?: string;
  relatedProducts?: string[];
  pairings?: string[];
}

export interface SizeChartItem {
  size: string;
  chestWidth: string;
  frontLength: string;
  sleeveLength: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  slug: string;
  heroImage: string;
  thumbnailImage: string;
  products: Product[];
}

// export function getSizeChartForProduct(product: Product): SizeChartItem[] {
//   const isNumeric =
//     product.sizes && product.sizes[0] && !isNaN(Number(product.sizes[0]));

//   const nameDesc = (
//     product.name +
//     " " +
//     (product.description || "")
//   ).toLowerCase();

//   if (nameDesc.includes("pant") || nameDesc.includes("trouser")) {
//     return isNumeric ? sizeChartData["numeric-pants"] : sizeChartData["pants"];
//   } else if (
//     nameDesc.includes("jacket") ||
//     nameDesc.includes("coat") ||
//     nameDesc.includes("blazer")
//   ) {
//     return isNumeric ? sizeChartData["numeric"] : sizeChartData["jackets"];
//   } else {
//     return isNumeric ? sizeChartData["numeric"] : sizeChartData["tops"];
//   }
// }

// Replace the placeholder collections object with this complete version
export const collections: Record<string, Collection> = {
  "sans-papiers": {
    id: "sans-papiers",
    name: "SANS PAPIERS",
    description: "Exploring identity through conceptual fashion",
    slug: "sans-papiers",
    heroImage: "/images/collection/sans-papiers/hero.jpg",
    thumbnailImage: "/images/collection/sans-papiers/cover.jpg",
    products: [
      {
        id: "sp1",
        name: "SANS PAPIERS 01",
        price: 890,
        description:
          "Oversized jacket with multi-pocket design and unique silhouette",
        images: [
          "/images/collection/sans-papiers/sp1.jpg",
          "/images/collection/sans-papiers/sp1-2.jpg",
          "/images/collection/sans-papiers/sp1-3.jpg",
        ],
        collection: "sans-papiers",
        sizes: ["46", "48", "50", "52", "54"],
        features: [
          "Oversized fit",
          "Multiple front pockets",
          "Custom hardware",
          "Adjustable waist",
        ],
        materials: {
          shell: "66% RECYCLED POLYESTER, 34% ORGANIC COTTON",
          lining: "100% COTTON",
        },
        care: [
          "Machine wash cold",
          "Do not bleach",
          "Tumble dry low",
          "Iron on low heat",
        ],
        madeIn: "Portugal",
        modelInfo: "Model is 188cm/6'2\" tall and wearing size 46",
        relatedProducts: ["sp2", "sp3", "sp4"],
        pairings: ["sp5", "sp7"],
      },
      {
        id: "sp2",
        name: "SANS PAPIERS 02",
        price: 790,
        description: "Structured overshirt with invisible pockets",
        images: [
          "/images/collection/sans-papiers/sp2.jpg",
          "/images/collection/sans-papiers/sp2-2.jpg",
          "/images/collection/sans-papiers/sp2-3.jpg",
        ],
        collection: "sans-papiers",
        sizes: ["46", "48", "50", "52", "54"],
        features: [
          "Oversized fit",
          "Multiple front pockets",
          "Custom hardware",
          "Adjustable waist",
        ],
        materials: {
          shell: "66% RECYCLED POLYESTER, 34% ORGANIC COTTON",
          lining: "100% COTTON",
        },
        care: [
          "Machine wash cold",
          "Do not bleach",
          "Tumble dry low",
          "Iron on low heat",
        ],
        madeIn: "Portugal",
        modelInfo: "Model is 188cm/6'2\" tall and wearing size 46",
        relatedProducts: ["sp1", "sp3", "sp5"],
      },
      {
        id: "sp3",
        name: "SANS PAPIERS 03",
        price: 990,
        description: "Relaxed fit trousers with adjustable waist",
        images: [
          "/images/collection/sans-papiers/sp3.jpg",
          "/images/collection/sans-papiers/sp3-2.jpg",
        ],
        collection: "sans-papiers",
        sizes: ["S", "M", "L", "XL"],
        features: [
          "Oversized fit",
          "Multiple front pockets",
          "Custom hardware",
          "Adjustable waist",
        ],
        materials: {
          shell: "66% RECYCLED POLYESTER, 34% ORGANIC COTTON",
          lining: "100% COTTON",
        },
        care: [
          "Machine wash cold",
          "Do not bleach",
          "Tumble dry low",
          "Iron on low heat",
        ],
        madeIn: "Portugal",
        modelInfo: "Model is 188cm/6'2\" tall and wearing size 46",
        relatedProducts: ["sp1", "sp2", "sp4"],
      },
      {
        id: "sp4",
        name: "SANS PAPIERS 04",
        price: 850,
        description: "Utilitarian coat with detachable elements",
        images: [
          "/images/collection/sans-papiers/sp4.jpg",
          "/images/collection/sans-papiers/sp4-2.jpg",
          "/images/collection/sans-papiers/sp4-3.jpg",
        ],
        collection: "sans-papiers",
        sizes: ["46", "48", "50", "52", "54"],
        features: [
          "Oversized fit",
          "Multiple front pockets",
          "Custom hardware",
          "Adjustable waist",
        ],
        materials: {
          shell: "66% RECYCLED POLYESTER, 34% ORGANIC COTTON",
          lining: "100% COTTON",
        },
        care: [
          "Machine wash cold",
          "Do not bleach",
          "Tumble dry low",
          "Iron on low heat",
        ],
        madeIn: "Portugal",
        modelInfo: "Model is 188cm/6'2\" tall and wearing size 46",
        relatedProducts: ["sp1", "sp3", "sp5"],
      },
      {
        id: "sp5",
        name: "SANS PAPIERS 05",
        price: 920,
        description: "Loose fit vest with multiple pockets",
        images: [
          "/images/collection/sans-papiers/sp5.jpg",
          "/images/collection/sans-papiers/sp5-2.jpg",
        ],
        collection: "sans-papiers",
        sizes: ["46", "48", "50", "52", "54"],
        features: [
          "Regular fit",
          "Four utility pockets",
          "Button closure",
          "Reinforced shoulders",
          "Adjustable cuffs",
        ],
        materials: {
          shell: "78% ORGANIC COTTON, 22% LINEN",
          lining: "100% COTTON",
        },
        care: [
          "Machine wash cold",
          "Do not bleach",
          "Hang to dry",
          "Iron on medium heat",
        ],
        madeIn: "Portugal",
        modelInfo: "Model is 182cm/6'0\" tall and wearing size 46",
        relatedProducts: ["sp6", "sp7", "sp8"],
      },
      {
        id: "sp6",
        name: "SANS PAPIERS 06",
        price: 880,
        description: "Oversized shirt with statement pockets",
        images: ["/images/collection/sans-papiers/sp6.jpg"],
        collection: "sans-papiers",
        sizes: ["S", "M", "L"],
        features: [
          "Oversized fit",
          "Multiple front pockets",
          "Custom hardware",
          "Adjustable waist",
        ],
        materials: {
          shell: "66% RECYCLED POLYESTER, 34% ORGANIC COTTON",
          lining: "100% COTTON",
        },
        care: [
          "Machine wash cold",
          "Do not bleach",
          "Tumble dry low",
          "Iron on low heat",
        ],
        madeIn: "Portugal",
        modelInfo: "Model is 188cm/6'2\" tall and wearing size M",
        relatedProducts: ["sp5", "sp7", "sp8"],
      },
      {
        id: "sp7",
        name: "SANS PAPIERS 07",
        price: 940,
        description: "Cropped jacket with unique closure system",
        images: [
          "/images/collection/sans-papiers/sp7.jpg",
          "/images/collection/sans-papiers/sp7-2.jpg",
          "/images/collection/sans-papiers/sp7-3.jpg",
        ],
        collection: "sans-papiers",
        sizes: ["46", "48", "50", "52", "54"],
        features: [
          "Oversized fit",
          "Multiple front pockets",
          "Custom hardware",
          "Adjustable waist",
        ],
        materials: {
          shell: "66% RECYCLED POLYESTER, 34% ORGANIC COTTON",
          lining: "100% COTTON",
        },
        care: [
          "Machine wash cold",
          "Do not bleach",
          "Tumble dry low",
          "Iron on low heat",
        ],
        madeIn: "Portugal",
        modelInfo: "Model is 188cm/6'2\" tall and wearing size 46",
        relatedProducts: ["sp1", "sp3", "sp5"],
      },
      {
        id: "sp8",
        name: "SANS PAPIERS 08",
        price: 870,
        description: "Relaxed fit pants with pleated details",
        images: [
          "/images/collection/sans-papiers/sp8.jpg",
          "/images/collection/sans-papiers/sp8-2.jpg",
          "/images/collection/sans-papiers/sp8-3.jpg",
        ],
        collection: "sans-papiers",
        sizes: ["S", "M", "L", "XL"],
        features: ["Oversized fit", "Custom hardware", "Adjustable waist"],
        materials: {
          shell: "66% RECYCLED POLYESTER, 34% ORGANIC COTTON",
          lining: "100% COTTON",
        },
        care: [
          "Machine wash cold",
          "Do not bleach",
          "Tumble dry low",
          "Iron on low heat",
        ],
        madeIn: "Portugal",
        modelInfo: "Model is 188cm/6'2\" tall and wearing size 46",
        relatedProducts: ["sp7", "sp9", "sp10"],
      },
      {
        id: "sp9",
        name: "SANS PAPIERS 09",
        price: 910,
        description: "Oversized parka with adjustable hood",
        images: ["/images/collection/sans-papiers/sp9.jpg"],
        collection: "sans-papiers",
        sizes: ["S", "M", "L"],
        features: [
          "Oversized fit",
          "Multiple front pockets",
          "Custom hardware",
          "Adjustable waist",
        ],
        materials: {
          shell: "66% RECYCLED POLYESTER, 34% ORGANIC COTTON",
          lining: "100% COTTON",
        },
        care: [
          "Machine wash cold",
          "Do not bleach",
          "Tumble dry low",
          "Iron on low heat",
        ],
        madeIn: "Portugal",
        modelInfo: "Model is 188cm/6'2\" tall and wearing size M",
        relatedProducts: ["sp8", "sp10", "sp1"],
      },
      {
        id: "sp10",
        name: "SANS PAPIERS 10",
        price: 950,
        description: "Structured jacket with contrast details",
        images: ["/images/collection/sans-papiers/sp10.jpg"],
        collection: "sans-papiers",
        sizes: ["S", "M", "L"],
        features: [
          "Oversized fit",
          "Multiple front pockets",
          "Custom hardware",
          "Adjustable waist",
        ],
        materials: {
          shell: "66% RECYCLED POLYESTER, 34% ORGANIC COTTON",
          lining: "100% COTTON",
        },
        care: [
          "Machine wash cold",
          "Do not bleach",
          "Tumble dry low",
          "Iron on low heat",
        ],
        madeIn: "Portugal",
        modelInfo: "Model is 188cm/6'2\" tall and wearing size M",
        relatedProducts: ["sp9", "sp1", "sp2"],
      },
    ],
  },
  "in-visible-riot": {
    id: "in-visible-riot",
    name: "in_visible(riot)",
    description: "Reimagining resistance through wearable art",
    slug: "in-visible-riot",
    heroImage: "/images/collection/in-visible-riot/hero.jpg",
    thumbnailImage: "/images/collection/in-visible-riot/cover.jpg",
    products: [
      {
        id: "ir1",
        name: "in_visible(riot) 01",
        price: 950,
        description: "Deconstructed jacket with raw edges",
        images: ["/images/collection/in-visible-riot/ir1.jpg"],
        collection: "in-visible-riot",
        sizes: ["S", "M", "L"],
        relatedProducts: ["ir2", "ir3", "ir5"],
        materials: {
          shell: "100% ORGANIC COTTON",
          lining: "70% RECYCLED POLYESTER, 30% COTTON",
        },
      },
      {
        id: "ir2",
        name: "in_visible(riot) 02",
        price: 850,
        description: "Statement shirt with graphic print",
        images: ["/images/collection/in-visible-riot/ir2.jpg"],
        collection: "in-visible-riot",
        sizes: ["S", "M", "L"],
        relatedProducts: ["ir1", "ir3", "ir4"],
      },
      {
        id: "ir3",
        name: "in_visible(riot) 03",
        price: 920,
        description: "Oversized hoodie with protest graphics",
        images: ["/images/collection/in-visible-riot/ir3.jpg"],
        collection: "in-visible-riot",
        sizes: ["S", "M", "L"],
        relatedProducts: ["ir2", "ir4", "ir5"],
      },
      {
        id: "ir4",
        name: "in_visible(riot) 04",
        price: 880,
        description: "Relaxed fit pants with unique detailing",
        images: ["/images/collection/in-visible-riot/ir4.jpg"],
        collection: "in-visible-riot",
        sizes: ["S", "M", "L"],
        relatedProducts: ["ir3", "ir5", "ir6"],
      },
      {
        id: "ir5",
        name: "in_visible(riot) 05",
        price: 970,
        description: "Distressed denim jacket with patches",
        images: ["/images/collection/in-visible-riot/ir5.jpg"],
        collection: "in-visible-riot",
        sizes: ["S", "M", "L"],
        relatedProducts: ["ir4", "ir6", "ir7"],
      },
      {
        id: "ir6",
        name: "in_visible(riot) 06",
        price: 890,
        description: "Printed t-shirt with resistance motifs",
        images: ["/images/collection/in-visible-riot/ir6.jpg"],
        collection: "in-visible-riot",
        sizes: ["S", "M", "L"],
        relatedProducts: ["ir5", "ir7", "ir8"],
      },
      {
        id: "ir7",
        name: "in_visible(riot) 07",
        price: 940,
        description: "Utility vest with multiple pockets",
        images: ["/images/collection/in-visible-riot/ir7.jpg"],
        collection: "in-visible-riot",
        sizes: ["S", "M", "L"],
        relatedProducts: ["ir6", "ir8", "ir9"],
      },
      {
        id: "ir8",
        name: "in_visible(riot) 08",
        price: 910,
        description: "Canvas pants with hand-painted details",
        images: ["/images/collection/in-visible-riot/ir8.jpg"],
        collection: "in-visible-riot",
        sizes: ["S", "M", "L"],
        relatedProducts: ["ir7", "ir9", "ir10"],
      },
      {
        id: "ir9",
        name: "in_visible(riot) 09",
        price: 860,
        description: "Patchwork jacket with mixed textiles",
        images: ["/images/collection/in-visible-riot/ir9.jpg"],
        collection: "in-visible-riot",
        sizes: ["S", "M", "L"],
        relatedProducts: ["ir8", "ir10", "ir1"],
      },
      {
        id: "ir10",
        name: "in_visible(riot) 10",
        price: 980,
        description: "Experimental coat with transformable elements",
        images: ["/images/collection/in-visible-riot/ir10.jpg"],
        collection: "in-visible-riot",
        sizes: ["S", "M", "L"],
        relatedProducts: ["ir9", "ir1", "ir2"],
      },
    ],
  },
};

export function getAllCollections(): Collection[] {
  return Object.values(collections);
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections[slug];
}

export function getAllProducts(): Product[] {
  return Object.values(collections).flatMap((collection) =>
    Array.isArray(collection?.products)
      ? collection.products.filter(Boolean)
      : []
  );
}

export function getProductById(id: string): Product | undefined {
  if (!id) return undefined;
  try {
    return getAllProducts().find((product) => product?.id === id);
  } catch (error) {
    console.error("Error in getProductById:", error);
    return undefined;
  }
}

export function getEnhancedProduct(id: string): Product | undefined {
  try {
    if (!id) return undefined;
    const product = getProductById(id);
    if (!product) return undefined;
    return {
      ...product,
      sizes: product.sizes || ["S", "M", "L"],
    };
  } catch (error) {
    console.error("Error in getEnhancedProduct:", error);
    return undefined;
  }
}

export function getSizeChartForProduct(product: Product): SizeChartItem[] {
  // Check if product has sizes
  if (!product.sizes || product.sizes.length === 0) {
    return [];
  }

  // Check if the sizes are numeric (European sizing)
  const isNumeric = !isNaN(Number(product.sizes[0]));

  // Determine product type based on name or description
  const nameDesc = (
    product.name +
    " " +
    (product.description || "")
  ).toLowerCase();

  if (nameDesc.includes("pant") || nameDesc.includes("trouser")) {
    return isNumeric ? sizeChartData["numeric-pants"] : sizeChartData["pants"];
  } else if (
    nameDesc.includes("jacket") ||
    nameDesc.includes("coat") ||
    nameDesc.includes("blazer")
  ) {
    return isNumeric ? sizeChartData["numeric"] : sizeChartData["jackets"];
  } else {
    return isNumeric ? sizeChartData["numeric"] : sizeChartData["tops"];
  }
}
// Add this size chart data to your collections.ts file
export const sizeChartData: Record<string, SizeChartItem[]> = {
  tops: [
    {
      size: "S",
      chestWidth: '53cm / 20.9"',
      frontLength: '68cm / 26.8"',
      sleeveLength: '64cm / 25.2"',
    },
    {
      size: "M",
      chestWidth: '56cm / 22"',
      frontLength: '70cm / 27.6"',
      sleeveLength: '65cm / 25.6"',
    },
    {
      size: "L",
      chestWidth: '59cm / 23.2"',
      frontLength: '72cm / 28.3"',
      sleeveLength: '66cm / 26"',
    },
    {
      size: "XL",
      chestWidth: '62cm / 24.4"',
      frontLength: '74cm / 29.1"',
      sleeveLength: '67cm / 26.4"',
    },
  ],

  jackets: [
    {
      size: "S",
      chestWidth: '57cm / 22.4"',
      frontLength: '72cm / 28.3"',
      sleeveLength: '66cm / 26"',
    },
    {
      size: "M",
      chestWidth: '60cm / 23.6"',
      frontLength: '74cm / 29.1"',
      sleeveLength: '67cm / 26.4"',
    },
    {
      size: "L",
      chestWidth: '63cm / 24.8"',
      frontLength: '76cm / 29.9"',
      sleeveLength: '68cm / 26.8"',
    },
    {
      size: "XL",
      chestWidth: '66cm / 26"',
      frontLength: '78cm / 30.7"',
      sleeveLength: '69cm / 27.2"',
    },
  ],

  numeric: [
    {
      size: "46",
      chestWidth: '55cm / 21.7"',
      frontLength: '70cm / 27.6"',
      sleeveLength: '65cm / 25.6"',
    },
    {
      size: "48",
      chestWidth: '57cm / 22.4"',
      frontLength: '71cm / 28"',
      sleeveLength: '66cm / 26"',
    },
    {
      size: "50",
      chestWidth: '59cm / 23.2"',
      frontLength: '72cm / 28.3"',
      sleeveLength: '67cm / 26.4"',
    },
    {
      size: "52",
      chestWidth: '61cm / 24"',
      frontLength: '73cm / 28.7"',
      sleeveLength: '68cm / 26.8"',
    },
    {
      size: "54",
      chestWidth: '63cm / 24.8"',
      frontLength: '74cm / 29.1"',
      sleeveLength: '69cm / 27.2"',
    },
  ],

  pants: [
    {
      size: "S",
      chestWidth: 'Waist: 76cm / 29.9"',
      frontLength: 'Outseam: 102cm / 40.2"',
      sleeveLength: 'Inseam: 74cm / 29.1"',
    },
    {
      size: "M",
      chestWidth: 'Waist: 81cm / 31.9"',
      frontLength: 'Outseam: 103cm / 40.6"',
      sleeveLength: 'Inseam: 75cm / 29.5"',
    },
    {
      size: "L",
      chestWidth: 'Waist: 86cm / 33.9"',
      frontLength: 'Outseam: 104cm / 41"',
      sleeveLength: 'Inseam: 76cm / 29.9"',
    },
    {
      size: "XL",
      chestWidth: 'Waist: 91cm / 35.8"',
      frontLength: 'Outseam: 105cm / 41.3"',
      sleeveLength: 'Inseam: 77cm / 30.3"',
    },
  ],

  "numeric-pants": [
    {
      size: "46",
      chestWidth: 'Waist: 76cm / 29.9"',
      frontLength: 'Outseam: 102cm / 40.2"',
      sleeveLength: 'Inseam: 74cm / 29.1"',
    },
    {
      size: "48",
      chestWidth: 'Waist: 81cm / 31.9"',
      frontLength: 'Outseam: 103cm / 40.6"',
      sleeveLength: 'Inseam: 75cm / 29.5"',
    },
    {
      size: "50",
      chestWidth: 'Waist: 86cm / 33.9"',
      frontLength: 'Outseam: 104cm / 41"',
      sleeveLength: 'Inseam: 76cm / 29.9"',
    },
    {
      size: "52",
      chestWidth: 'Waist: 91cm / 35.8"',
      frontLength: 'Outseam: 105cm / 41.3"',
      sleeveLength: 'Inseam: 77cm / 30.3"',
    },
  ],
};
