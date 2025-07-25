"use client";
import { useRouter } from "next/navigation";
import BannerHeader2 from "../components/BannerHeader2";
import PolaroidShowCase from "../components/team-pictures/PolaroidGroup";

const Section3 = () => {
  const router = useRouter();
  return (
    <section
      className="min-h-screen text-white" style={{ backgroundColor: '#2A2B68', backgroundImage: 'repeating-linear-gradient(120deg, transparent, transparent 3px, rgba(26, 27, 72, 0.6) 3px, rgba(26, 27, 72, 0.6) 4px)' }}>
        <BannerHeader2
        chipText="The Pulse"
        chipBackgroundColor="#FFFFFF"
        chipTextColor="text-black"
        headerText="Our Team in Action"
        headerTextColor="text-white"
        subHeaderText="From creative brainstorming in our vibrant office to unforgettable team outings, our people are the soul of our company. Check out our team, our spaces, and the moments that make us unique."
        subHeaderTextColor="text-white"
        headerTextSize="text-6xl"
        subHeader2Text="Get a glimpse of life at EvolTech"
        subHeader2TextColor="text-[#8DCAFF]"
        className="pb-2 pt-20"
        // arrowSrc={expertAarrow}
        arrowAlt="Expert Arrow"
        arrowPosition="left"
        arrowWidth={40}
        arrowHeight={120}
      />
      <PolaroidShowCase />
    </section>
  );
};

export default Section3;
