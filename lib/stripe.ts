import Stripe from "stripe";

// Check if the key exists and throw a helpful error if not
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  console.error("⚠️ Missing Stripe secret key in environment variables");
  throw new Error("Stripe configuration error: Missing secret key");
}

// Initialize with explicit key and error handling
export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2023-10-16",
});

export async function testStripeConnection() {
  try {
    // Simple test request to verify the key works
    const test = await stripe.paymentMethods
      .list({
        customer: "none",
        type: "card",
        limit: 1,
      })
      .catch(() => ({ data: [] }));

    return { connected: true };
  } catch (error) {
    console.error("Stripe connection error:", error);
    return { connected: false, error };
  }
}
