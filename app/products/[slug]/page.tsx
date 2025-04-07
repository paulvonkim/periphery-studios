"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/add-to-cart-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SizeSelector from "@/components/size-selector";
import ProductGallery from "@/components/product-gallery";
import RelatedProducts from "@/components/related-products";
import { getEnhancedProduct, getProductById } from "@/data/collections";
import { ProductSizeChart } from "@/components/product/size-chart";

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFoundState, setNotFoundState] = useState(false);

  useEffect(() => {
    if (!slug) {
      setNotFoundState(true);
      return;
    }

    // Simple product lookup with default sizes
    const foundProduct = getEnhancedProduct(slug);

    if (foundProduct) {
      setProduct(foundProduct);
      setLoading(false);
    } else {
      setNotFoundState(true);
    }
  }, [slug]);

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  if (notFoundState) {
    return notFound();
  }

  const renderPairingProduct = (pairingId: string) => {
    const pairingProduct = getProductById(pairingId);
    if (!pairingProduct) return null;

    return (
      <Link
        key={pairingId}
        href={`/products/${pairingId}`}
        className="group block"
      >
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={pairingProduct.images[0] || "/placeholder.svg"}
            alt={pairingProduct.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-2">
          <h3 className="text-xs sm:text-sm font-medium">
            {pairingProduct.name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            €{pairingProduct.price}
          </p>
        </div>
      </Link>
    );
  };
  // Now we have a single product display logic
  return (
    <div className="container mx-auto px-4 py-4 sm:py-8">
      <div className="mb-4">
        <Link
          href={product.collection === "store" ? "/store" : "/collections"}
          className="text-sm text-gray-600 hover:text-black"
        >
          Back to {product.collection === "store" ? "Store" : "Collections"}
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
        <ProductGallery images={product.images} />

        {/* Product Info */}
        <div className="mt-4 lg:mt-0">
          <h1 className="text-xl sm:text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg sm:text-xl mb-4 sm:mb-6">€{product.price}</p>

          <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8">
            {product.description ||
              `Part of our ${product.collection.replace("-", " ")} collection.`}
          </p>

          {/* Features List */}
          {product.features && product.features.length > 0 && (
            <ul className="mb-6 sm:mb-8 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-xs sm:text-sm">
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {/* Size Selection */}
          {product.sizes && (
            <div className="mb-6 sm:mb-8">
              <h3 className="text-sm font-medium mb-2">Size</h3>
              <SizeSelector sizes={product.sizes} />
            </div>
          )}

          {/* Add to Cart Button */}
          <AddToCartButton product={product} />

          {/* Sizing Information */}
          {(product.sizingChart || product.materials || product.care) && (
            <div className="mt-8 sm:mt-12">
              <Tabs defaultValue="sizing">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="sizing">Sizing</TabsTrigger>
                  <TabsTrigger value="materials">Materials & Care</TabsTrigger>
                </TabsList>

                <TabsContent value="sizing" className="pt-4">
                  {product.sizingChart && product.sizingChart.length > 0 ? (
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs sm:text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2">Size</th>
                            <th className="text-left py-2">
                              Front Length (cm)
                            </th>
                            <th className="text-left py-2">Chest Width (cm)</th>
                            <th className="text-left py-2">
                              Sleeve Length (cm)
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.sizingChart.map((row) => (
                            <tr key={row.size} className="border-b">
                              <td className="py-2">{row.size}</td>
                              <td className="py-2">{row.frontLength}</td>
                              <td className="py-2">{row.chestWidth}</td>
                              <td className="py-2">{row.sleeveLength}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <ProductSizeChart product={product} />
                  )}
                </TabsContent>

                <TabsContent value="materials" className="pt-4">
                  <div className="space-y-4">
                    {product.materials && (
                      <div>
                        <h4 className="font-medium">Materials & Care</h4>
                        <p className="text-xs sm:text-sm mt-1">
                          {product.materials.shell && (
                            <>
                              SHELL: {product.materials.shell}
                              <br />
                            </>
                          )}
                          {product.materials.lining && (
                            <>
                              LINING: {product.materials.lining}
                              <br />
                            </>
                          )}
                          {product.materials.lining2 && (
                            <>LINING 2: {product.materials.lining2}</>
                          )}
                        </p>
                      </div>
                    )}

                    {product.madeIn && (
                      <div>
                        <h4 className="font-medium">
                          Made in {product.madeIn}
                        </h4>
                      </div>
                    )}

                    {product.care && product.care.length > 0 && (
                      <div>
                        <ul className="text-xs sm:text-sm space-y-1">
                          {product.care.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {product.modelInfo && (
                      <div>
                        <p className="text-xs sm:text-sm">
                          {product.modelInfo}
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </div>

      {/* Pairings Section */}
      {product.pairings && product.pairings.length > 0 && (
        <div className="mb-8 sm:mb-16">
          <h2 className="text-lg sm:text-xl font-bold mb-6">Pairings</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 w-full">
            {product.pairings.map(renderPairingProduct)}
          </div>
        </div>
      )}

      {/* Related Products */}
      {product.relatedProducts && product.relatedProducts.length > 0 && (
        <div className="mb-8 sm:mb-16">
          <h2 className="text-lg sm:text-xl font-bold mb-6">
            Related Products
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 w-full">
            {product.relatedProducts.map((relatedId) => {
              const relatedProduct = getProductById(relatedId);
              if (!relatedProduct) return null;

              return (
                <Link
                  key={relatedId}
                  href={`/products/${relatedId}`}
                  className="group block"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={relatedProduct.images[0] || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="text-xs sm:text-sm font-medium">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      €{relatedProduct.price}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
