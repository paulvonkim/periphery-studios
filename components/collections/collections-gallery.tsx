"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProducts } from "@/data/collections";

export default function CollectionsPage() {
  const [isMounted, setIsMounted] = useState(false);
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState<string>("all");

  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);
  const products = getAllProducts();

  // Define span classes for each item
  const spans = {
    sp1: "col-span-1 row-span-1",
    sp2: "col-span-1 row-span-2",
    sp3: "col-span-2 row-span-1",
    sp4: "col-span-1 row-span-1",
    sp5: "col-span-2 row-span-1",
    sp6: "col-span-1 row-span-2",
    sp7: "col-span-1 row-span-1",
    sp8: "col-span-2 row-span-1",
    sp9: "col-span-2 row-span-1",
    sp10: "col-span-1 row-span-1",
    ir1: "col-span-2 row-span-1",
    ir2: "col-span-1 row-span-1",
    ir3: "col-span-1 row-span-2",
    ir4: "col-span-1 row-span-1",
    ir5: "col-span-2 row-span-1",
    ir6: "col-span-1 row-span-1",
    ir7: "col-span-1 row-span-2",
    ir8: "col-span-2 row-span-1",
    ir9: "col-span-1 row-span-1",
    ir10: "col-span-1 row-span-1",
  };

  // Create gallery items from products with their respective spans
  const galleryItems = products.map((product) => ({
    id: product.id,
    name: product.name,
    collection: product.collection,
    image: product.images[0], // Use the first image from the product
    span: spans[product.id as keyof typeof spans] || "col-span-1 row-span-1",
  }));

  // Set up intersection observer for scroll animations
  useEffect(() => {
    setIsMounted(true);
    // Add a small delay to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      const setupObserver = () => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
              }
            });
          },
          {
            threshold: 0.1,
            rootMargin: "0px 0px -100px 0px",
          }
        );

        const items = document.querySelectorAll(".gallery-item");
        items.forEach((item) => observer.observe(item));

        return () => {
          items.forEach((item) => observer.unobserve(item));
        };
      };

      setupObserver();

      // Force initial items to be visible if they're in the viewport
      const initialItems = document.querySelectorAll(".gallery-item");
      initialItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const isVisible =
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth);

        if (isVisible) {
          item.classList.add("fade-in");
        }
      });
    }, 100); // Small delay to ensure DOM is ready

    return () => clearTimeout(timer);
  }, []);

  const handleTabChange = (value: string) => {
    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in");
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -100px 0px",
        }
      );

      const items = document.querySelectorAll(".gallery-item");
      items.forEach((item) => {
        // Reset animation state
        item.classList.remove("fade-in");
        observer.observe(item);
      });

      // Force visible items to show immediately
      setTimeout(() => {
        items.forEach((item) => {
          const rect = item.getBoundingClientRect();
          const isVisible =
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
              (window.innerWidth || document.documentElement.clientWidth);

          if (isVisible) {
            item.classList.add("fade-in");
          }
        });
      }, 50);
    }, 100);
  };

  // Don't render animations until client-side
  if (!isMounted) {
    return (
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
          Collections
        </h1>
        <div className="h-screen"></div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
        Collections
      </h1>

      <Tabs
        value={activeTab} // Use the activeTab state variable instead
        className="mb-8 sm:mb-12"
        onValueChange={(value) => {
          setActiveTab(value);
          handleTabChange(value);
        }}
      >
        {/* Tabs with better visibility - fixed position with padding */}
        <div className="sticky top-16 z-10 bg-white pb-3 -mx-4 px-4 pt-2">
          <div className="overflow-x-auto">
            <TabsList className="inline-flex w-auto min-w-full sm:grid sm:w-full sm:max-w-md sm:grid-cols-3">
              <TabsTrigger value="all">All Collections</TabsTrigger>
              <TabsTrigger value="sans-papiers">SANS PAPIERS</TabsTrigger>
              <TabsTrigger value="in-visible-riot">
                in_visible(riot)
              </TabsTrigger>
            </TabsList>
          </div>
          {/* Subtle shadow for visual separation */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>

        <TabsContent value="all" className="mt-6 sm:mt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
            {galleryItems.map((item, index) => (
              <GalleryItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sans-papiers" className="mt-6 sm:mt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
            {galleryItems
              .filter((item) => item.collection === "sans-papiers")
              .map((item, index) => (
                <GalleryItem key={item.id} item={item} index={index} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="in-visible-riot" className="mt-6 sm:mt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0">
            {galleryItems
              .filter((item) => item.collection === "in-visible-riot")
              .map((item, index) => (
                <GalleryItem key={item.id} item={item} index={index} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function GalleryItem({ item, index }: { item: any; index: number }) {
  return (
    <div
      className={`gallery-item opacity-0 relative overflow-hidden ${item.span} transition-all duration-500`}
      style={{
        transitionDelay: `${index * 75}ms`,
      }}
    >
      <div className="relative aspect-square w-full h-full">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="text-white text-center p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="font-medium text-sm">{item.name}</p>
            <p className="text-xs mt-2 uppercase">
              {item.collection.replace("-", " ")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
