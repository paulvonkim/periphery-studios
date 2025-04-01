// app/checkout/error/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function CheckoutErrorPage() {
  const [errorDetails, setErrorDetails] = useState<string | null>(null);

  useEffect(() => {
    // Try to get error details from localStorage if set during checkout
    const details = localStorage.getItem("checkoutError");
    if (details) {
      setErrorDetails(details);
      localStorage.removeItem("checkoutError");
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Checkout Failed</h1>
        <p className="text-gray-600 mb-8">
          There was a problem processing your order. Please try again or contact
          support.
        </p>

        {errorDetails && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-8 text-left">
            <p className="text-sm text-red-800 font-mono break-words">
              {errorDetails}
            </p>
          </div>
        )}

        <div className="space-y-4">
          <Link href="/cart">
            <Button className="w-full">Return to Cart</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
