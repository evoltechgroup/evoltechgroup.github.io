"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Install lucide-react or use any icons

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full relative top-0 left-0 z-20 bg-transparent text-white">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <Link href="/">
          <img
            src="/assets/logos/Group 346.svg"
            alt="EvolTech Logo"
            className="h-8 cursor-pointer"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/about" className="hover:text-yellow-400">
            Who we are
          </Link>
          <span className="text-[#63A4DD]">/</span>
          <Link href="/services" className="hover:text-yellow-400">
            Services
          </Link>
          <span className="text-[#63A4DD]">/</span>
          <Link href="/careers" className="hover:text-yellow-400">
            Careers
          </Link>
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="border border-yellow-400 text-yellow-400 px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-[#0B0F2B] transition"
          >
            Contact us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-transparent px-6 py-4 space-y-4">
          <Link href="/about" className="block hover:text-yellow-400">
            Who we are
          </Link>
          <Link href="/services" className="block hover:text-yellow-400">
            Services
          </Link>
          <Link href="/careers" className="block hover:text-yellow-400">
            Careers
          </Link>
          <Link
            href="/contact"
            className="block border border-yellow-400 text-yellow-400 text-center py-2 rounded-full hover:bg-yellow-400 hover:text-[#0B0F2B]"
          >
            Contact us
          </Link>
        </div>
      )}
    </header>
  );
}
