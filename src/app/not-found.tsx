import Link from "next/link";
import ThemeButton from "@/components/Button/ThemeButton";
import { RoundChevronRight } from "@/assets/icons/custom-icons";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eaf6ff] to-white flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold text-[#1a1a2e] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been removed.
        </p>
        <div className="flex justify-center">
          <Link href="/">
            <ThemeButton
              text="Back to Home"
              endIcon={<span>{RoundChevronRight}</span>}
              extraStyles="!py-2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
