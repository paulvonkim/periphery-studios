"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

type SearchResult = {
  id: string;
  name: string;
  type: "product" | "collection";
  image: string;
  href: string;
  price?: number;
  description?: string;
};

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);

      const products = [
        {
          id: "osl2ber-dropped-waist-parka",
          name: "OSL2BER DROPPED WAIST PARKA",
          price: 1300,
          type: "product" as const,
          image: "/placeholder.svg?height=600&width=400",
          href: "/products/osl2ber-dropped-waist-parka",
        },
        {
          id: "nighthawks-bomber-jacket",
          name: "NIGHTHAWKS BOMBER JACKET",
          price: 790,
          type: "product" as const,
          image: "/placeholder.svg?height=600&width=400",
          href: "/products/nighthawks-bomber-jacket",
        },
      ];

      const collections = [
        {
          id: "sans-papiers",
          name: "SANS PAPIERS",
          description: "Exploring identity through conceptual fashion",
          type: "collection" as const,
          image: "/placeholder.svg?height=800&width=600",
          href: "/collections?tab=sans-papiers",
        },
        {
          id: "in-visible-riot",
          name: "in_visible(riot)",
          description: "Reimagining resistance through wearable art",
          type: "collection" as const,
          image: "/placeholder.svg?height=800&width=600",
          href: "/collections?tab=in-visible-riot",
        },
      ];

      const allItems = [...products, ...collections];
      const filteredResults = query
        ? allItems.filter(
            (item) =>
              item.name.toLowerCase().includes(query.toLowerCase()) ||
              item.description?.toLowerCase().includes(query.toLowerCase())
          )
        : [];

      setTimeout(() => {
        setResults(filteredResults);
        setLoading(false);
      }, 500);
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Search Results for "{query}"</h1>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
        </div>
      ) : results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result) => (
            <Link
              href={result.href}
              key={`${result.type}-${result.id}`}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-3">
                <Image
                  src={result.image}
                  alt={result.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {result.type === "collection" && (
                  <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 text-xs">
                    Collection
                  </div>
                )}
              </div>
              <h2 className="font-medium">{result.name}</h2>
              {result.type === "product" && (
                <p className="text-sm text-gray-700">€{result.price}</p>
              )}
              {result.type === "collection" && result.description && (
                <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                  {result.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-gray-600">
            No results found for "{query}"
          </p>
          <p className="mt-2 text-gray-500">
            Try different keywords or check out our collections
          </p>
          <div className="mt-6">
            <Link href="/collections" className="text-black underline">
              Browse Collections
            </Link>
            <span className="mx-3">•</span>
            <Link href="/store" className="text-black underline">
              View Store
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function SearchLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Search Results</h1>
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchResults />
    </Suspense>
  );
}
