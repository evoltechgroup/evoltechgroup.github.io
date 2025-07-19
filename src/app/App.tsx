"use client";

import { useRouter, usePathname } from "next/navigation";
import "./App.css";
import About from "./about/page";
import Services from "./services/page";
import Careers from "./careers/page";
import Contact from "./contact/page";
import HomePage from "./home";
import Technology from "./technology/page";

export default function App() {
  const router = useRouter();
  const pathname = usePathname();

  // Route mapping
  const renderPage = () => {
    switch (pathname) {
      case "/":
        return <HomePage />;
      case "/home":
        return <HomePage />;
      case "/about":
        return <About />;
      case "/services":
        return <Services />;
      case "/careers":
        return <Careers />;
      case "/contact":
        return <Contact />;
      case "/technology":
        return <Technology />;
      default:
        return <HomePage />; // Default to home page
    }
  };

  return <div className="app">{renderPage()}</div>;
}
