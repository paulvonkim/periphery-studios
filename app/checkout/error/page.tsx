import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function CheckoutErrorPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <AlertCircle className="h-16 w-16 text-rose-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Checkout Error</h1>
        <p className="text-gray-600 mb-8">
          There was a problem processing your payment. Please try again or
          contact our customer support.
        </p>
        <div className="space-y-4">
          <Link href="/cart">
            <Button className="w-full">Return to Cart</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
