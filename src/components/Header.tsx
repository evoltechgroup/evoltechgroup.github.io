"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/assets/logo/logo.svg";
import { X } from "lucide-react";
import { hamburgerIcon } from "@/assets/svg";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") {
        handleScroll();
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`w-full fixed top-0 left-0 z-50 flex items-center justify-between px-6 py-4 md:px-10 md:py-6 transition-all duration-300
        ${
          isScrolled
            ? "bg-[#0B0F2B]/70 backdrop-blur-md shadow-md"
            : "bg-transparent"
        } ${mobileMenuOpen && "hidden"}`}>
        <Link href="/" className={`${mobileMenuOpen && "hidden"}`}>
          <img
            src={Logo.src}
            alt="EvolTech Logo"
            className="h-8 w-auto cursor-pointer"
          />
        </Link>

        <nav className="hidden md:flex flex-1 justify-center gap-5 text-sm font-medium text-white items-center">
          <div className="relative group">
            <span
              className={`cursor-pointer transition ${
                pathname.startsWith("/services")
                  ? "text-[#FFBB00]"
                  : "text-white"
              }`}>
              Services
            </span>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3
                         ${
                           isScrolled ? "bg-[#282D45]" : "bg-[#282d4570]"
                         } text-[#BBBBBB] rounded-full shadow-lg p-1 py-1
                         opacity-0 invisible group-hover:opacity-100 group-hover:visible
                         transition-opacity duration-200 z-50 flex gap-2 whitespace-nowrap`}>
              <div
                className={`absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 
                          border-l-8 border-r-8 border-b-8 
                          border-l-transparent border-r-transparent ${
                            isScrolled
                              ? "border-b-[#282D45]"
                              : "border-b-[#282d4570]"
                          }`}
              />
              <Link
                href="/services/consulting"
                className={`p-2 px-3.5 rounded-full transition ${
                  pathname === "/services/consulting"
                    ? "bg-white text-[#0B0F2B]"
                    : "hover:bg-white hover:text-[#0B0F2B]"
                }`}>
                Consulting
              </Link>
              <Link
                href="/services/technology"
                className={`p-2 rounded-full transition ${
                  pathname === "/services/technology"
                    ? "bg-white text-[#0B0F2B]"
                    : "hover:bg-white hover:text-[#0B0F2B]"
                }`}>
                Technology
              </Link>
              <Link
                href="/services/operations"
                className={`p-2 rounded-full transition ${
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

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-transparent border border-yellow-400 text-[#FFBB00] px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-[#0B0F2B] transition">
            Contact us
          </Link>
        </div>
        {!mobileMenuOpen && (
          <div
            className={`sm:hidden border border-[#445767] px-3 py-1 rounded flex `}>
            <button
              onClick={toggleMobileMenu}
              className={`md:hidden text-white flex items-center gap-2`}>
              <span className="text-sm font-normal">Menu</span>
              <span>{hamburgerIcon}</span>
            </button>
          </div>
        )}
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#000000FA] z-40 flex flex-col items-center pt-20 justify-start gap-6 text-white text-xl font-semibold">
          <button
            onClick={toggleMobileMenu}
            className="absolute top-5 right-5 text-white text-3xl">
            <X />
          </button>
          <div className="py-4">
            <Link href="/" onClick={toggleMobileMenu}>
              <img
                src={Logo.src}
                alt="EvolTech Logo"
                className="h-8 w-auto cursor-pointer"
              />
            </Link>
          </div>
          <div className="bg-[#222222] h-px w-full" />
          <div className="flex flex-col gap-10 items-center py-5 justify-center font-medium *:text-[#C7E5FF]">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-2">
              Services
              <span className="text-sm">{servicesOpen ? "▲" : "▼"}</span>
            </button>
            {servicesOpen && (
              <div className="flex flex-col gap-4 items-center text-base font-normal">
                <Link href="/services/consulting" onClick={toggleMobileMenu}>
                  Consulting
                </Link>
                <Link href="/services/technology" onClick={toggleMobileMenu}>
                  Technology
                </Link>
                <Link href="/services/operations" onClick={toggleMobileMenu}>
                  Operations
                </Link>
              </div>
            )}
            <Link href="/products" onClick={toggleMobileMenu}>
              Products
            </Link>
            <Link href="/careers" onClick={toggleMobileMenu}>
              Careers
            </Link>
            <Link href="/about" onClick={toggleMobileMenu}>
              Who we are
            </Link>
            <Link
              href="/contact"
              onClick={toggleMobileMenu}
              className="bg-transparent border border-yellow-400 !text-[#FFBB00] px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-[#0B0F2B] transition">
              Contact us
            </Link>
          </div>
          <div className="bg-[#222222] h-px w-full " />
        </div>
      )}
    </>
  );
}
