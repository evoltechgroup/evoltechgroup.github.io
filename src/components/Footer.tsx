"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#181B2B] text-white h-[5rem] py-4 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <img
            src="/assets/logos/Group 346.svg"
            alt="EvolTech Logo"
            className="h-6 w-auto"
          />
          <span className="text-xs text-gray-300 ml-2">
            Copyright © 2025 EvolTech.
          </span>
        </div>
        <nav className="flex items-center gap-6 text-xs text-gray-200">
          <Link href="/about" className="hover:underline">
            Who We Are
          </Link>
          <span className="text-gray-500">/</span>
          <Link href="/services" className="hover:underline">
            Services
          </Link>
          <span className="text-gray-500">/</span>
          <Link href="/careers" className="hover:underline">
            Careers
          </Link>
          <span className="text-gray-500">/</span>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <span className="text-gray-500">/</span>
          <a
            href="mailto:info@evoltech.com"
            className="hover:opacity-80"
            aria-label="Email us">
            <i className="fa-regular fa-envelope"></i>
          </a>
          <a
            href="https://linkedin.com/company/evoltech"
            className="hover:opacity-80"
            aria-label="Connect on LinkedIn"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </nav>
      </div>
    </footer>
  );
}
