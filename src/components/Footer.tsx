import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Logo from "@/assets/logo/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#181B2B] text-white py-6 px-6 w-full pb-15">
      <div className="mx-auto max-w-screen-xl flex flex-col md:flex-row items-center md:justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-5 md:gap-10 text-gray-300 text-xs order-3 md:order-1">
          <img src={Logo.src} alt="EvolTech Logo" className="h-8 w-auto" />
          <span className="text-center sm:text-left text-[#AAAAAA]">
            Copyright © 2025 EvolTech.
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center order-1 md:order-2 gap-4">
          <nav className="flex flex-wrap justify-center gap-4 text-base text-white">
            <Link href="/about" className="hover:underline">
              Who We Are
            </Link>
            <span className="text-gray-500 inline">/</span>

            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <span className="text-gray-500 inline">/</span>

            <Link href="/careers" className="hover:underline">
              Careers
            </Link>
            <span className="text-gray-500 inline">/</span>

            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
          <div className="flex gap-6 justify-center text-[#AAAAAA] sm:-mt-1">
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
        </div>
      </div>
    </footer>
  );
}
