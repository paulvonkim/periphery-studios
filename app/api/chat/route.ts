import { NextResponse } from "next/server";
import OpenAI from "openai";
import { getAllProducts } from "@/data/collections";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",

  dangerouslyAllowBrowser: false,
  baseURL: "https://api.openai.com/v1",
});

export async function POST(request: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      console.error("Missing OpenAI API key");
      return NextResponse.json(
        { error: "API configuration error" },
        { status: 500 }
      );
    }

    let messages;
    try {
      const body = await request.json();
      messages = body.messages;
    } catch (parseError) {
      console.error("Failed to parse request body:", parseError);
      return NextResponse.json(
        { error: "Invalid request format" },
        { status: 400 }
      );
    }

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Valid messages array is required" },
        { status: 400 }
      );
    }

    const products = getAllProducts();
    const productSummary = products
      .slice(0, 5)
      .map((p) => `${p.name}: ${p.collection} collection, €${p.price}`)
      .join("\n");

    const openaiMessages = [
      {
        role: "system",
        content: `You are a helpful shopping assistant for Periphery Studios, a conceptual fashion brand.
        
        Available collections:
        - SANS PAPIERS: Exploring identity through conceptual fashion
        - in_visible(riot): Reimagining resistance through wearable art
        
        Some popular products:
        ${productSummary}
        
        Respond in a professional but friendly tone. Keep responses concise (under 3 paragraphs).
        Help customers with product information, styling advice, and shipping questions.
        If you don't know something, be honest and don't make up information.`,
      },
      ...messages,
    ];

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: openaiMessages,
        temperature: 0.7,
        max_tokens: 500,
      });

      const assistantResponse = completion.choices[0].message.content;

      return NextResponse.json({
        message: assistantResponse,
      });
    } catch (openaiError: any) {
      console.error("OpenAI API error:", openaiError);
      return NextResponse.json(
        {
          error: "AI service error",
          details: openaiError?.message || "Unknown OpenAI error",
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("General chat API error:", error);
    return NextResponse.json(
      { error: error?.message || "Unknown server error" },
      { status: 500 }
    );
  }
}
