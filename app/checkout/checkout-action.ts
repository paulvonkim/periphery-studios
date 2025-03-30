"use server";

import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";

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

      if (!Array.isArray(items)) {
        throw new Error("Items must be an array");
      }
    } catch (error) {
      console.error("Failed to parse cart items:", error);
      console.error("Received data:", itemsJson);
      throw new Error("Invalid cart data");
    }

    const line_items = items.map((item) => ({
      price_data: {
        currency: "eur",
        product_data: {
          name: item.name,
          images: item.image ? [item.image] : undefined,
          description: item.size ? `Size: ${item.size}` : undefined,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["US", "CA", "GB", "DE", "FR", "IT", "ES"],
      },
      customer_email: (formData.get("email") as string) || undefined,
    });

    if (!session.url) {
      throw new Error("Failed to create checkout session");
    }

    redirect(session.url);
  } catch (error) {
    console.error("Checkout error:", error);

    redirect("/checkout/error");
  }
};
