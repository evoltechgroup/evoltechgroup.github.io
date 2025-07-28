"use client";

import BannerHeader2 from "../components/BannerHeader2";
import PolaroidShowCase from "../components/team-pictures/PolaroidGroup";
import { flowDownArrow } from "@/assets/svg";

const Section3 = () => {
  return (
    <section
      className="min-h-screen h-full md:h-screen text-white"
      style={{
        backgroundColor: "#2A2B68",
        backgroundImage:
          "repeating-linear-gradient(120deg, transparent, transparent 3px, rgba(26, 27, 72, 0.6) 3px, rgba(26, 27, 72, 0.6) 4px)",
      }}>
      <BannerHeader2
        chipText="The Pulse"
        chipBackgroundColor="#C8E5FF"
        chipTextColor="text-black"
        headerText="Our Team in Action"
        headerTextColor="text-white"
        subHeaderText="From creative brainstorming in our vibrant office to unforgettable team outings, our people are the soul of our company. Check out our team, our spaces, and the moments that make us unique."
        subHeaderTextColor="text-white"
        subHeaderTextSize="text-sm lg:text-xl"
        headerTextSize="text-4xl lg:text-6xl"
        subHeader2TextSize="text-lg lg:text-4xl"
        subHeader2Text="Get a glimpse of life at EvolTech"
        subHeader2TextColor="text-[#8DCAFF]"
        className="pb-2 pt-10 lg:pt-20"
        arrowSrc={flowDownArrow}
        arrowAlt="Flow Down Arrow"
        arrowPosition="left"
        arrowWidth={100}
        arrowHeight={10}
        maxWidth="lg:max-w-5xl"
      />
      <PolaroidShowCase />
    </section>
  );
};

export default Section3;
