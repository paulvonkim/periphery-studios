import { NextResponse } from "next/server";
import { testStripeConnection } from "@/lib/stripe";

export async function GET() {
  const result = await testStripeConnection();
  return NextResponse.json(result);
}
