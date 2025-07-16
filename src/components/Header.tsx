"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full absolute top-0 left-0 z-20 flex items-center justify-between px-10 py-6">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <img
            src="/assets/logos/Group 346.svg"
            alt="EvolTech Logo"
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
      </div>
      {/* Center Nav */}
      <nav className="flex-1 flex justify-center gap-10 text-sm font-medium">
        <Link
          href="/about"
          className="text-white hover:text-yellow-400 transition"
        >
          Who we are
        </Link>
        <Link
          href="/services"
          className="text-white hover:text-yellow-400 transition"
        >
          Services
        </Link>
        <Link
          href="/careers"
          className="text-white hover:text-yellow-400 transition"
        >
          Careers
        </Link>
      </nav>
      {/* Contact Us Button */}
      <div>
        <Link
          href="/contact"
          className="bg-transparent border border-yellow-400 text-yellow-400 px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-[#0B0F2B] transition"
        >
          Contact us
        </Link>
      </div>
    </header>
  );
}
