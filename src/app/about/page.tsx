import Section2 from "./Contents/Section2";
import Section3 from "./Contents/Section3";
import Testimonials from "../ui/Testimonials";
import Section1 from "./Contents/Section1";
import JoinOurTeam from "./components/JoinOurTeam";
import Founder from "./Contents/Founder";
import Clients from "./Contents/Clients";

export default function About() {
  return (
    <main className="bg-[#0B0F2B] text-white font-gilroy min-h-screen">
      <Section1 />
      <Section2 />
      <Founder />
      <Section3 />
      <Clients />
      <Testimonials type="about" />

      <JoinOurTeam />
    </main>
  );
}
