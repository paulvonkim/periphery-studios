"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProducts, getProductById } from "@/data/collections";

// Products to feature in the store (choose which ones to display)
const featuredProductIds = [
  "sp1", // SANS PAPIERS 01
  "sp2", // SANS PAPIERS 02
  "sp3", // SANS PAPIERS 03
  "sp4", // SANS PAPIERS 04
  "sp5", // SANS PAPIERS 05
  "sp6", // SANS PAPIERS 06
  "sp7", // SANS PAPIERS 07
  "sp8", // SANS PAPIERS 08
];

// Category assignments for each product
const productCategories = {
  sp1: "jackets",
  sp2: "tops",
  sp3: "pants",
  sp4: "jackets",
  sp5: "tops",
  sp6: "tops",
  sp7: "jackets",
  sp8: "pants",
};

export default function Store() {
  const [isMounted, setIsMounted] = useState(false);
  const [storeProducts, setStoreProducts] = useState([]);

  useEffect(() => {
    // Get all products
    const allProducts = getAllProducts();

    // Filter to only the featured ones and add categories
    const productsForStore = featuredProductIds
      .map((id) => {
        const product = allProducts.find((p) => p.id === id);
        if (!product) return null;

        return {
          ...product,
          category: productCategories[id] || determineCategory(product),
        };
      })
      .filter(Boolean); // Remove any null products

    setStoreProducts(productsForStore);
    setIsMounted(true);
  }, []);

  // Helper to determine category from product data
  function determineCategory(product) {
    const nameAndDesc = (
      product.name +
      " " +
      (product.description || "")
    ).toLowerCase();

    if (
      nameAndDesc.includes("jacket") ||
      nameAndDesc.includes("coat") ||
      nameAndDesc.includes("parka") ||
      nameAndDesc.includes("blazer") ||
      nameAndDesc.includes("blouson")
    ) {
      return "jackets";
    } else if (
      nameAndDesc.includes("trouser") ||
      nameAndDesc.includes("pant")
    ) {
      return "pants";
    } else {
      return "tops";
    }
  }

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
            {storeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="jackets" className="mt-6 sm:mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {storeProducts
              .filter((product) => product.category === "jackets")
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="tops" className="mt-6 sm:mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {storeProducts
              .filter((product) => product.category === "tops")
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="pants" className="mt-6 sm:mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {storeProducts
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
            src={product.images?.[0] || "/placeholder.svg"}
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
