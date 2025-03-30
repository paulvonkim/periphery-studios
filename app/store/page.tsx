"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProducts } from "@/data/collections";

const productMapping = {
  "osl2ber-dropped-waist-parka": "sp1",
  "tactical-trousers": "sp2",
  "vapor-longsleeve": "sp3",
  "nighthawks-bomber-jacket": "sp4",
  "osl2ber-trapper-hat": "sp5",
  "nova-denim-jacket": "sp6",
  "portrait-double-breasted-blazer": "sp7",
  "anti-gaugin-faux-fur-blouson": "sp8",
};

export default function Store() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const collectionProducts = getAllProducts();

  const collectionProductsById = {};
  collectionProducts.forEach((product) => {
    collectionProductsById[product.id] = product;
  });

  const products = [
    {
      id: "osl2ber-dropped-waist-parka",
      name:
        collectionProductsById[productMapping["osl2ber-dropped-waist-parka"]]
          ?.name || "OSL2BER DROPPED WAIST PARKA",
      price: 1300,
      category: "jackets",
      image:
        collectionProductsById[productMapping["osl2ber-dropped-waist-parka"]]
          ?.images[0] || "/placeholder.svg?height=600&width=400",
      collectionId: productMapping["osl2ber-dropped-waist-parka"],
    },
    {
      id: "nighthawks-bomber-jacket",
      name:
        collectionProductsById[productMapping["nighthawks-bomber-jacket"]]
          ?.name || "NIGHTHAWKS BOMBER JACKET",
      price: 790,
      category: "jackets",
      image:
        collectionProductsById[productMapping["nighthawks-bomber-jacket"]]
          ?.images[0] || "/placeholder.svg?height=600&width=400",
      collectionId: productMapping["nighthawks-bomber-jacket"],
    },
    {
      id: "portrait-double-breasted-blazer",
      name:
        collectionProductsById[
          productMapping["portrait-double-breasted-blazer"]
        ]?.name || "PORTRAIT DOUBLE BREASTED BLAZER",
      price: 890,
      category: "tops",
      image:
        collectionProductsById[
          productMapping["portrait-double-breasted-blazer"]
        ]?.images[0] || "/placeholder.svg?height=600&width=400",
      collectionId: productMapping["portrait-double-breasted-blazer"],
    },
    {
      id: "vapor-longsleeve",
      name:
        collectionProductsById[productMapping["vapor-longsleeve"]]?.name ||
        "VAPOR LONGSLEEVE",
      price: 170,
      category: "tops",
      image:
        collectionProductsById[productMapping["vapor-longsleeve"]]?.images[0] ||
        "/placeholder.svg?height=600&width=400",
      collectionId: productMapping["vapor-longsleeve"],
    },
    {
      id: "tactical-trousers",
      name:
        collectionProductsById[productMapping["tactical-trousers"]]?.name ||
        "TACTICAL TROUSERS",
      price: 690,
      category: "pants",
      image:
        collectionProductsById[productMapping["tactical-trousers"]]
          ?.images[0] || "/placeholder.svg?height=600&width=400",
      collectionId: productMapping["tactical-trousers"],
    },
    {
      id: "anti-gaugin-faux-fur-blouson",
      name:
        collectionProductsById[productMapping["anti-gaugin-faux-fur-blouson"]]
          ?.name || "ANTI-GAUGIN FAUX FUR BLOUSON",
      price: 890,
      category: "jackets",
      image:
        collectionProductsById[productMapping["anti-gaugin-faux-fur-blouson"]]
          ?.images[0] || "/placeholder.svg?height=600&width=400",
      collectionId: productMapping["anti-gaugin-faux-fur-blouson"],
    },
  ];

  if (!isMounted) {
    return (
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Shop</h1>
        <div className="h-screen"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Shop</h1>

      <Tabs defaultValue="all" className="mb-8 sm:mb-12">
        <div className="sticky top-16 z-10 bg-white pb-3 -mx-4 px-4 pt-2">
          <div className="overflow-x-auto">
            <TabsList className="inline-flex w-auto min-w-full sm:grid sm:w-full sm:max-w-md sm:grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="jackets">Jackets & Coats</TabsTrigger>
              <TabsTrigger value="tops">Tops</TabsTrigger>
              <TabsTrigger value="pants">Pants</TabsTrigger>
            </TabsList>
          </div>
          {/* Shadow for visual separation */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>

        <TabsContent value="all" className="mt-6 sm:mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="jackets" className="mt-6 sm:mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {products
              .filter((product) => product.category === "jackets")
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="tops" className="mt-6 sm:mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {products
              .filter((product) => product.category === "tops")
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="pants" className="mt-6 sm:mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {products
              .filter((product) => product.category === "pants")
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ProductCard({ product }: { product: any }) {
  return (
    <Link href={`/products/${product.id}`} className="group block">
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
          <h3 className="text-xs sm:text-sm font-medium line-clamp-2">
            {product.name}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-gray-500">
            €{product.price}
          </p>
        </div>
      </div>
    </Link>
  );
}
