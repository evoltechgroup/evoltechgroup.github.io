"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/assets/logo/logo.svg";
export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 flex items-center justify-between px-10 py-6 transition-all duration-300
        ${
          isScrolled
            ? "bg-[#0B0F2B]/70 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}>
      <div className="flex items-center">
        <Link href="/">
          <img
            src={Logo.src}
            alt="EvolTech Logo"
            className="h-8 w-auto cursor-pointer"
          />
        </Link>
      </div>
      <nav className="flex-1 flex justify-center gap-5 text-sm font-medium text-white relative items-center">
        <div className="relative group">
          <div className="flex flex-col items-center">
            <span
              className={` transition cursor-pointer ${
                pathname.startsWith("/services")
                  ? "text-[#FFBB00]"
                  : "text-white"
              }`}>
              Services
            </span>
          </div>

          <div
            className="absolute top-full left-1/2  -translate-x-1/2 mt-3
                   bg-[#282D45] text-[#BBBBBB] rounded-full shadow-lg p-1 py-1
                   opacity-0 invisible group-hover:opacity-100 group-hover:visible
                   transition-opacity duration-200 z-50 flex gap-2 whitespace-nowrap pointer-events-auto">
            <div
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 
                        border-l-8 border-r-8 border-b-8 
                        border-l-transparent border-r-transparent border-b-[#282D45]"
            />

            <Link
              href="/services/consulting"
              className={`p-2 px-3.5 rounded-full text-center transition 
                      ${
                        pathname === "/services/consulting"
                          ? "bg-white text-[#0B0F2B]"
                          : "hover:bg-white hover:text-[#0B0F2B]"
                      }`}>
              Consulting
            </Link>

            <Link
              href="/services/technology"
              className={`p-2 rounded-full transition 
                      ${
                        pathname === "/services/technology"
                          ? "bg-white text-[#0B0F2B]"
                          : "hover:bg-white hover:text-[#0B0F2B]"
                      }`}>
              Technology
            </Link>

            <Link
              href="/services/back-office"
              className={`p-2 rounded-full transition 
                      ${
                        pathname === "/services/back-office"
                          ? "bg-white text-[#0B0F2B]"
                          : "hover:bg-white hover:text-[#0B0F2B]"
                      }`}>
              Operations
            </Link>
          </div>
        </div>
        <span className="text-[#63A4DD]">/</span>
        <Link
          href="/products"
          className={`hover:text-[#FFBB00] transition ${
            pathname === "/products" ? "text-[#FFBB00]" : ""
          }`}>
          Products
        </Link>
        <span className="text-[#63A4DD]">/</span>
        <Link
          href="/careers"
          className={`hover:text-[#FFBB00] transition ${
            pathname === "/careers" ? "text-[#FFBB00]" : ""
          }`}>
          Careers
        </Link>
        <span className="text-[#63A4DD]">/</span>
        <Link
          href="/about"
          className={`hover:text-[#FFBB00] transition ${
            pathname === "/about" ? "text-[#FFBB00]" : ""
          }`}>
          Who we are
        </Link>
      </nav>
      {/* Contact Us Button */}
      <div>
        <Link
          href="/contact"
          className="bg-transparent border border-yellow-400 text-[#FFBB00] px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-[#0B0F2B] transition">
          Contact us
        </Link>
      </div>
    </header>
  );
}
