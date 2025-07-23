import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Section1 from "./Content/Section1";
import Section2 from "./Content/Section2";
import Section3 from "./Content/Section3";

export default function Contact() {
  return (
    <main className="bg-[#0B0F2B] text-white font-sans min-h-screen">
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  );
}
