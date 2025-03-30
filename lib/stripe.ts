import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2023-10-16",
});

export async function testStripeConnection() {
  try {
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
