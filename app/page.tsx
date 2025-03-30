import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getAllCollections, getAllProducts } from "@/data/collections";
import Newsletter from "@/components/newsletter";

export default function Home() {
  const allCollections = getAllCollections();

  const featuredProducts = getAllProducts()
    .slice(0, 4)
    .map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0] || "/placeholder.svg?height=500&width=500",
    }));

  const collections = [
    {
      name: "All Collections",
      description: "Explore our complete portfolio of artistic works",
      image: "/images/collection/all-collections-cover.jpg",
      href: "/collections",
    },
    {
      name: "SANS PAPIERS",
      description: "Exploring identity through conceptual fashion",
      image: "/images/collection/sans-papiers/cover.jpg",
      href: "/collections?tab=sans-papiers",
    },
    {
      name: "in_visible(riot)",
      description: "Reimagining resistance through wearable art",
      image: "/images/collection/in-visible-riot/cover.jpg",
      href: "/collections?tab=in-visible-riot",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-black text-white">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Periphery Studios Hero"
          fill
          className="object-cover opacity-70"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            New Collection
          </h1>
          <p className="text-md md:text-lg mb-8 max-w-2xl">
            Explore our latest collection of premium jackets, tops, and pants
          </p>
          <Link href="/store">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products - No Gaps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Featured Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 w-full">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group block"
              >
                <div className="bg-white">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-xs sm:text-sm line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-gray-500 text-xs sm:text-sm">
                      €{product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          {collections.map((collection) => (
            <Link
              key={collection.name}
              href={collection.href}
              className="group block relative"
            >
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 ${
                    collection.isMain
                      ? "bg-black bg-opacity-50"
                      : "bg-black bg-opacity-20"
                  } flex flex-col items-center justify-center p-6 text-center`}
                >
                  <h3 className="text-white text-xl md:text-2xl font-medium mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-white text-sm opacity-90 hidden md:block">
                    {collection.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
