"use server";

import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
  size?: string;
};
export const checkoutAction = async (formData: FormData): Promise<void> => {
  try {
    const itemsJson = formData.get("items") as string;

    let items;
    try {
      items = JSON.parse(itemsJson) as CartItem[];
    } catch (error) {
      console.error("Failed to parse cart items:", error);
      throw new Error("Invalid cart data format");
    }

    // Validate items
    if (!Array.isArray(items) || items.length === 0) {
      console.error("Invalid items array:", items);
      throw new Error("No valid items in cart");
    }

    const line_items = items.map((item) => {
      // Base product data
      const productData: any = {
        name: item.name,
      };

      // Only add images if available
      if (item.image) {
        productData.images = [item.image];
      }

      // Only add description if we have a size
      if (item.size) {
        productData.description = `Size: ${item.size}`;
      }

      // Return the complete line item
      return {
        price_data: {
          currency: "eur",
          product_data: productData,
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      };
    });

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cart`,
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB", "DE", "FR", "IT", "ES"],
      },
    });

    if (!session.url) {
      throw new Error("Missing session URL");
    }

    redirect(session.url);
  } catch (error) {
    if (isRedirectError(error)) {
      throw error; // Re-throw redirect errors
    }

    console.error("Checkout error:", error);
    // Redirect to error page
    redirect("/checkout/error");
  }
};
