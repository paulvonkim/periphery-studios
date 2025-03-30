"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import SearchOverlay from "@/components/search/search-overlay";

export default function Header({ className }: { className?: string }) {
  const pathname = usePathname();
  const { items } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Shop", href: "/store" },
    { name: "Collections", href: "/collections" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-2 py-2">
        <div className="relative flex justify-center">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[250px] sm:w-[300px]">
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`text-lg font-medium ${
                          pathname === item.href
                            ? "text-black"
                            : "text-gray-600 hover:text-black"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium ${
                    pathname === item.href
                      ? "text-black"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Logo - centered on mobile, left-aligned on desktop */}
          <div className="z-10">
            <Link href="/" className="text-center">
              <h1 className="font-bold whitespace-nowrap text-2xl sm:text-3xl lg:text-4xl">
                Periphery Studios
              </h1>
            </Link>
          </div>

          {/* Search and Cart */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
            <div className="flex items-center justify-end space-x-1 sm:space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Link href="/cart">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative"
                  aria-label="Shopping cart"
                >
                  <ShoppingBag className="h-5 w-5" />
                  {items.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {items.length}
                    </span>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Search Overlay */}
        <SearchOverlay
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
      </div>
    </header>
  );
}
