"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-message",
      role: "assistant",
      content: "Hi there! How can I help you with your shopping today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        console.error("Failed to parse response as JSON:", parseError);
        throw new Error("Server returned non-JSON response");
      }

      if (!response.ok) {
        console.error("API error:", response.status, data);
        throw new Error(`API error: ${response.status}`);
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content: data.message || "Sorry, I couldn't generate a response.",
        },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: "assistant",
          content:
            "Sorry, I'm having trouble connecting right now. Please try again later.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat toggle button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 rounded-full h-12 w-12 sm:h-14 sm:w-14 shadow-lg z-50"
        size="icon"
      >
        {isOpen ? (
          <X className="h-5 w-5 sm:h-6 sm:w-6" />
        ) : (
          <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
        )}
      </Button>

      {/* Chat window */}
      <div
        className={cn(
          "fixed bottom-20 sm:bottom-24 right-4 sm:right-6 w-[calc(100%-2rem)] sm:w-80 md:w-96 bg-white rounded-lg shadow-xl border overflow-hidden transition-all duration-300 ease-in-out flex flex-col z-50 max-w-md",
          isOpen
            ? "h-[60vh] sm:h-[500px] opacity-100"
            : "h-0 opacity-0 pointer-events-none"
        )}
      >
        {/* Chat header */}
        <div className="p-3 sm:p-4 border-b bg-primary text-primary-foreground">
          <h3 className="font-medium text-sm sm:text-base">Customer Support</h3>
          <p className="text-xs opacity-80">Powered by GPT-4o</p>
        </div>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[85%] rounded-lg p-2 sm:p-3",
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                {message.role === "assistant" && (
                  <div className="flex items-center mb-1">
                    <Avatar className="h-5 w-5 sm:h-6 sm:w-6 mr-2">
                      <div className="flex h-full w-full items-center justify-center bg-primary text-primary-foreground text-xs">
                        AI
                      </div>
                    </Avatar>
                    <span className="text-xs font-medium">Shop Assistant</span>
                  </div>
                )}
                <p className="text-xs sm:text-sm whitespace-pre-wrap">
                  {message.content}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-lg p-2 sm:p-3 bg-muted">
                <div className="flex items-center">
                  <Avatar className="h-5 w-5 sm:h-6 sm:w-6 mr-2">
                    <div className="flex h-full w-full items-center justify-center bg-primary text-primary-foreground text-xs">
                      AI
                    </div>
                  </Avatar>
                  <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat input */}
        <form onSubmit={handleSubmit} className="p-3 sm:p-4 border-t">
          <div className="flex items-end gap-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about products, sizing, shipping..."
              className="min-h-[40px] sm:min-h-[60px] text-xs sm:text-sm resize-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim() || isLoading}
              className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10"
            >
              {isLoading ? (
                <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
              ) : (
                <Send className="h-3 w-3 sm:h-4 sm:w-4" />
              )}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
