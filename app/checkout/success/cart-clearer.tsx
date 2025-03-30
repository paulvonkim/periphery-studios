"use client";

import { useEffect } from "react";
import { useCart } from "@/lib/cart-context";

export function CartClearer() {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return null;
}
