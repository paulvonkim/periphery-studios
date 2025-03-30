import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Stockists", href: "/stockists" },
    { name: "Shipping & Returns", href: "/shipping-returns" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex space-x-6">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-600 hover:text-black"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-500 italic">
              "Narrative through nuance"
            </p>
            <p className="text-xs text-gray-400 text-right">
              ©2025 Created in the periphery
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
