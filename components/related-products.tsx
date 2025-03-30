import Link from "next/link";
import Image from "next/image";
import { getCollectionProductName } from "@/app/products/[slug]/utils";

export default function RelatedProducts({
  productIds,
  products,
}: {
  productIds: string[];
  products: Record<string, any>;
}) {
  if (!productIds || productIds.length === 0) return null;

  const validProducts = productIds
    .filter((id) => products[id])
    .map((id) => products[id]);

  if (validProducts.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full">
        {validProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group block"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={
                  (product.images && product.images[0]) || "/placeholder.svg"
                }
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-2">
              <h3 className="text-xs sm:text-sm font-medium line-clamp-1">
                {product.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                €{product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
