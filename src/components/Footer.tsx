"use client";

import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Logo from "@/assets/logo/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#181B2B] text-white sm:h-[5rem] py-4 w-full justify-center items-center flex p-10">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between w-full sm:px-6 ">
        <div className="flex flex-col sm:flex-row items-center gap-2 mb-2 md:mb-0">
          <img src={Logo.src} alt="EvolTech Logo" className="h-8 w-auto" />
          <span className="text-xs hidden sm:block text-gray-300 ml-2">
            Copyright © 2025 EvolTech.
          </span>
        </div>
        <nav className="flex flex-col sm:flex-row items-center whitespace-nowrap mt-4 sm:mt-0 text-xs gap-4 text-gray-200">
          <div className="flex gap-6">
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
            <span className="text-gray-500 hidden sm:block">/</span>
          </div>
          <div className="flex gap-6 items-center">
            <a
              href="https://linkedin.com/company/evoltech"
              className="hover:opacity-80"
              aria-label="Connect on LinkedIn"
              target="_blank"
              rel="noopener noreferrer">
              <Linkedin size={15} />
            </a>
            <a
              href="mailto:info@evoltech.com"
              className="hover:opacity-80"
              aria-label="Email us">
              <Mail size={15} />
            </a>
          </div>
          <div
            className="w-full bg-gray-400 sm:hidden"
            style={{
              height: "0.5px",
              background: `
                linear-gradient(
                  to right,
                  rgba(24, 27, 43, 1) 0%,
                  rgba(24, 27, 43, 0) 10%,
                  rgba(156, 163, 175, 1) 20%,
                  rgba(24, 27, 43, 0) 90%,
                  rgba(24, 27, 43, 1) 100%
                )
              `,
            }}
          />
          <span className="text-xs sm:hidden text-gray-300 ml-2">
            Copyright © 2025 EvolTech.
          </span>
        </nav>
      </div>
    </footer>
  );
}
