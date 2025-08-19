import { Linkedin, Mails } from "lucide-react";
import Link from "next/link";
import Logo from "@/assets/logo/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#181B2B] text-white w-full px-4 lg:pb-5 xl:pb-10">
      <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto">
        <div className="mx-auto col-span-4 sm:col-span-8  lg:col-span-8 xl:col-span-12 lg:col-start-2 xl:col-start-1 col-start-1 w-full py-10 md:py-6 flex flex-col md:flex-row items-center md:justify-between gap-6 ">
          <div className="flex flex-col sm:flex-row items-center gap-5 md:gap-10 text-gray-300 text-xs order-3 md:order-1">
            <Link href="/">
              <img src={Logo.src} alt="EvolTech Logo" className="h-8 w-auto" />
            </Link>
            <span className="text-center text-xs lg:text-base font-normal sm:text-left text-[#AAAAAA]">
              Copyright © 2025 EvolTech.
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center order-1 lg:order-2 gap-4">
            <nav className="flex flex-nowrap justify-center gap-2 sm:gap-4 text-base text-white">
              <Link href="/about" className="hover:underline">
                Who We Are
              </Link>
              <span className="text-gray-500 inline">/</span>

              <Link href="/services/consulting" className="hover:underline">
                Services
              </Link>
              <span className="text-gray-500 inline">/</span>
               <Link href="/products" className="hover:underline">
                Products
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
                href="https://www.linkedin.com/company/evoltechgroup/"
                className="hover:opacity-80"
                aria-label="Connect on LinkedIn"
                target="_blank"
                rel="noopener noreferrer">
                <Linkedin size={15} />
              </a>
              <a
                href="mailto:info@evoltechgroup.com"
                className="hover:opacity-80"
                aria-label="Send Mail">
                <Mails size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
