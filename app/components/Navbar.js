"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ variant = "fixed" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navClasses = variant === "transparent" 
    ? "relative z-20 bg-transparent backdrop-blur-sm"
    : "fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10";

  const containerClasses = variant === "transparent"
    ? "container mx-auto px-6 py-6"
    : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

  const innerClasses = variant === "transparent"
    ? "flex items-center justify-between"
    : "flex items-center justify-between h-20";

  return (
    <nav className={navClasses}>
      <div className={containerClasses}>
        <div className={innerClasses}>
          {/* Logo and Brand Name */}
          <Link href="/web" className="flex items-center gap-3">
            <Image
              src="/l.png"
              alt="GreenMind"
              width={140}
              height={50}
              className="object-contain"
              priority
            />
            {variant === "transparent" && (
              <span className="text-white text-xl font-semibold"></span>
            )}
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/web/urunler"
              className="text-white hover:text-gray-300 transition text-base font-medium"
            >
              Ürünler
            </Link>
            <Link
              href="/web/destek"
              className="text-white hover:text-gray-300 transition text-base font-medium"
            >
              Destek
            </Link>
            <Link
              href="/web/iletisim"
              className="text-white hover:text-gray-300 transition text-base font-medium"
            >
              İletişim
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`${variant === "transparent" ? "md:hidden mt-4 pb-4" : "md:hidden pb-4 space-y-2"}`}>
            <Link
              href="/web/urunler"
              className={variant === "transparent" 
                ? "block text-white py-2 hover:text-gray-300 transition"
                : "block px-3 py-2 text-white hover:bg-white/10 rounded transition"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Ürünler
            </Link>
            <Link
              href="/web/destek"
              className={variant === "transparent" 
                ? "block text-white py-2 hover:text-gray-300 transition"
                : "block px-3 py-2 text-white hover:bg-white/10 rounded transition"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Destek
            </Link>
            <Link
              href="/web/iletisim"
              className={variant === "transparent" 
                ? "block text-white py-2 hover:text-gray-300 transition"
                : "block px-3 py-2 text-white hover:bg-white/10 rounded transition"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              İletişim
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

