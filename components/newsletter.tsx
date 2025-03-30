"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
      setMessage("Thank you for subscribing to our newsletter!");
      setEmail("");
    }, 800);
  };

  return (
    <section className="py-20 bg-white border-t border-gray-100 mb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Be the first to know about new collections, exclusive offers and
            studio insights.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className={`flex-grow px-4 py-2 border ${
                status === "error" ? "border-red-300" : "border-gray-300"
              } focus:outline-none focus:ring-1 focus:ring-black`}
              disabled={status === "loading" || status === "success"}
            />
            <Button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="bg-black hover:bg-gray-800 text-white px-6 py-2 transition duration-200"
            >
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          {message && (
            <p
              className={`mt-4 text-sm ${
                status === "error" ? "text-red-500" : "text-green-600"
              }`}
            >
              {message}
            </p>
          )}

          <p className="mt-6 text-xs text-gray-500">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from Periphery Studios.
          </p>
        </div>
      </div>
    </section>
  );
}
