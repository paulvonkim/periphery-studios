"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, Loader2 } from "lucide-react";
import { checkoutAction } from "@/app/checkout/checkout-action";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const [isPending, startTransition] = useTransition();

  const handleCheckout = () => {
    console.log("Cart items:", items);

    const fixedItems = items.map((item) => ({
      ...item,
      image: item.image?.startsWith("http")
        ? item.image
        : `${process.env.NEXT_PUBLIC_BASE_URL}${item.image}`,
    }));

    startTransition(() => {
      const formData = new FormData();
      formData.append("items", JSON.stringify(fixedItems));
      checkoutAction(formData);
    });
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 sm:py-16 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
          Your Cart
        </h1>
        <p className="mb-6 sm:mb-8">Your cart is empty.</p>
        <Link href="/store">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4 sm:space-y-6">
            {items.map((item) => (
              <div key={item.id} className="flex border-b pb-4 sm:pb-6">
                <div className="relative w-20 h-24 sm:w-24 sm:h-32 flex-shrink-0">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="ml-3 sm:ml-4 flex-grow">
                  <div className="flex justify-between">
                    <Link
                      href={`/products/${item.id}`}
                      className="text-sm sm:text-base font-medium hover:underline line-clamp-2"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm sm:text-base">€{item.price}</p>
                  </div>

                  <div className="mt-2 sm:mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div className="flex items-center border rounded mb-2 sm:mb-0">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-2 sm:px-3 py-1"
                      >
                        <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                      <span className="px-2 sm:px-3 py-1 border-x text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-2 sm:px-3 py-1"
                      >
                        <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-500 hover:text-red-500 self-end sm:self-auto"
                    >
                      <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="border p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-2 mb-4 sm:mb-6 text-sm sm:text-base">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>€{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </div>
            </div>

            <div className="border-t pt-4 mb-4 sm:mb-6">
              <div className="flex justify-between font-bold text-sm sm:text-base">
                <span>Total</span>
                <span>€{totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <Button
              onClick={handleCheckout}
              disabled={isPending}
              className="w-full py-4 sm:py-6"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Proceed to Checkout"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
