"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";

export default function AddToCartButton({ product }: { product: any }) {
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = async () => {
    setIsAdding(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    });

    setIsAdding(false);
  };

  return (
    <Button
      onClick={handleAddToCart}
      disabled={isAdding}
      className="w-full py-6"
    >
      {isAdding ? "Adding..." : "Add to Cart"}
    </Button>
  );
}
