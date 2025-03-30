"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, onClose]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onClose();

      router.push(
        `/search-results?q=${encodeURIComponent(searchQuery.trim())}`
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="absolute left-0 right-0 top-full bg-white p-4 border-b border-gray-200 shadow-lg z-50">
      <form
        onSubmit={handleSearch}
        className="flex items-center gap-2 max-w-2xl mx-auto"
      >
        <Search className="h-5 w-5 text-gray-500 flex-shrink-0" />
        <Input
          ref={searchInputRef}
          type="text"
          placeholder="Search products, collections..."
          className="flex-1 border-none focus-visible:ring-0 text-base"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button type="button" variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
}
