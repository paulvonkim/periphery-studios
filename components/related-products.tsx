import Link from "next/link";
import Image from "next/image";

export default function RelatedProducts({
  productIds,
  getProduct,
}: {
  productIds: string[];
  getProduct: (id: string) => any;
}) {
  if (!productIds || productIds.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h2 className="text-lg sm:text-xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 w-full">
        {productIds.map((id) => {
          const product = getProduct(id);
          if (!product) return null;

          return (
            <Link key={id} href={`/products/${id}`} className="group block">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-2">
                <h3 className="text-xs sm:text-sm font-medium">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  €{product.price}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
