import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const collections = {
  "sans-papiers": {
    title: "SANS PAPIERS",
    description: "Exploring identity and documentation through fashion",
    products: [
      {
        id: "sp1",
        name: "SANS PAPIERS 01",
        price: 890,
        image: "/collections/sans-papiers/sp1.jpg",
      },
      {
        id: "sp2",
        name: "SANS PAPIERS 02",
        price: 790,
        image: "/collections/sans-papiers/sp2.jpg",
      },
    ],
  },
  "in-visible-riot": {
    title: "in_visible(riot)",
    description: "Merging visibility and resistance in contemporary clothing",
    products: [
      {
        id: "ir1",
        name: "in_visible(riot) 01",
        price: 950,
        image: "/collections/in-visible-riot/ir1.jpg",
      },
      {
        id: "ir2",
        name: "in_visible(riot) 02",
        price: 850,
        image: "/collections/in-visible-riot/ir2.jpg",
      },
    ],
  },
};

export default function CollectionPage({
  params,
}: {
  params: { slug: string };
}) {
  const collection = collections[params.slug as keyof typeof collections];

  if (!collection) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold mb-4">{collection.title}</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {collection.description}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {collection.products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group block"
          >
            <div className="bg-white">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-2 sm:p-4">
                <h3 className="text-xs sm:text-sm font-medium">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-gray-500">
                  €{product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
