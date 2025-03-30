export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  images: string[];
  collection: string;
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
        images: [
          "/images/collection/sans-papiers/sp1.jpg",
          "/images/collection/sans-papiers/sp1-2.jpg",
          "/images/collection/sans-papiers/sp1-3.jpg",
        ],
        collection: "sans-papiers",
      },
      {
        id: "sp2",
        name: "SANS PAPIERS 02",
        price: 790,
        images: [
          "/images/collection/sans-papiers/sp2.jpg",
          "/images/collection/sans-papiers/sp2-2.jpg",
          "/images/collection/sans-papiers/sp2-3.jpg",
        ],
        collection: "sans-papiers",
      },
      {
        id: "sp3",
        name: "SANS PAPIERS 03",
        price: 990,
        images: [
          "/images/collection/sans-papiers/sp3.jpg",
          "/images/collection/sans-papiers/sp3-2.jpg",
        ],
        collection: "sans-papiers",
      },
      {
        id: "sp4",
        name: "SANS PAPIERS 04",
        price: 850,
        images: [
          "/images/collection/sans-papiers/sp4.jpg",
          "/images/collection/sans-papiers/sp4-2.jpg",
          "/images/collection/sans-papiers/sp4-3.jpg",
        ],
        collection: "sans-papiers",
      },
      {
        id: "sp5",
        name: "SANS PAPIERS 05",
        price: 920,
        images: [
          "/images/collection/sans-papiers/sp5.jpg",
          "/images/collection/sans-papiers/sp5-2.jpg",
          "/images/collection/sans-papiers/sp5-3.jpg",
        ],
        collection: "sans-papiers",
      },
      {
        id: "sp6",
        name: "SANS PAPIERS 06",
        price: 880,
        images: [
          "/images/collection/sans-papiers/sp6.jpg",
          "/images/collection/sans-papiers/sp6-2.jpg",
          "/images/collection/sans-papiers/sp6-3.jpg",
        ],
        collection: "sans-papiers",
      },
      {
        id: "sp7",
        name: "SANS PAPIERS 07",
        price: 940,
        images: [
          "/images/collection/sans-papiers/sp7.jpg",
          "/images/collection/sans-papiers/sp7-2.jpg",
          "/images/collection/sans-papiers/sp7-3.jpg",
        ],
        collection: "sans-papiers",
      },
      {
        id: "sp8",
        name: "SANS PAPIERS 08",
        price: 870,
        images: [
          "/images/collection/sans-papiers/sp8.jpg",
          "/images/collection/sans-papiers/sp8-2.jpg",
          "/images/collection/sans-papiers/sp8-3.jpg",
        ],
        collection: "sans-papiers",
      },
      {
        id: "sp9",
        name: "SANS PAPIERS 09",
        price: 910,
        images: [
          "/images/collection/sans-papiers/sp9.jpg",
          "/images/collection/sans-papiers/sp9-2.jpg",
          "/images/collection/sans-papiers/sp9-3.jpg",
        ],
        collection: "sans-papiers",
      },
      {
        id: "sp10",
        name: "SANS PAPIERS 10",
        price: 950,
        images: [
          "/images/collection/sans-papiers/sp10.jpg",
          "/images/collection/sans-papiers/sp10-2.jpg",
          "/images/collection/sans-papiers/sp10-3.jpg",
        ],
        collection: "sans-papiers",
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
        images: ["/images/collection/in-visible-riot/ir1.jpg"],
        collection: "in-visible-riot",
      },
      {
        id: "ir2",
        name: "in_visible(riot) 02",
        price: 850,
        images: ["/images/collection/in-visible-riot/ir2.jpg"],
        collection: "in-visible-riot",
      },
      {
        id: "ir3",
        name: "in_visible(riot) 03",
        price: 920,
        images: ["/images/collection/in-visible-riot/ir3.jpg"],
        collection: "in-visible-riot",
      },
      {
        id: "ir4",
        name: "in_visible(riot) 04",
        price: 880,
        images: ["/images/collection/in-visible-riot/ir4.jpg"],
        collection: "in-visible-riot",
      },
      {
        id: "ir5",
        name: "in_visible(riot) 05",
        price: 970,
        images: ["/images/collection/in-visible-riot/ir5.jpg"],
        collection: "in-visible-riot",
      },
      {
        id: "ir6",
        name: "in_visible(riot) 06",
        price: 890,
        images: ["/images/collection/in-visible-riot/ir6.jpg"],
        collection: "in-visible-riot",
      },
      {
        id: "ir7",
        name: "in_visible(riot) 07",
        price: 940,
        images: ["/images/collection/in-visible-riot/ir7.jpg"],
        collection: "in-visible-riot",
      },
      {
        id: "ir8",
        name: "in_visible(riot) 08",
        price: 910,
        images: ["/images/collection/in-visible-riot/ir8.jpg"],
        collection: "in-visible-riot",
      },
      {
        id: "ir9",
        name: "in_visible(riot) 09",
        price: 860,
        images: ["/images/collection/in-visible-riot/ir9.jpg"],
        collection: "in-visible-riot",
      },
      {
        id: "ir10",
        name: "in_visible(riot) 10",
        price: 980,
        images: ["/images/collection/in-visible-riot/ir10.jpg"],
        collection: "in-visible-riot",
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
  return Object.values(collections).flatMap(
    (collection) => collection.products
  );
}

export function getProductById(id: string): Product | undefined {
  return getAllProducts().find((product) => product.id === id);
}
