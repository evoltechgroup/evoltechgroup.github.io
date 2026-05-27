import { topRightRing } from "@/assets/effects";
import { Greg } from "@/assets/images/Team/Members";
import LeaderProfile, { LeaderProfileData } from "../components/LeaderProfile";
import React from "react";

const advisors: LeaderProfileData[] = [
  {
    image: Greg,
    name: "Greg Arms",
    title: "Strategic Advisor",
    role: "Strategic Advisor",
    linkedinUrl: "https://www.linkedin.com/in/gregarms/",
    heading: "Our Advisor",
    bio: [
      "Greg is a 40-year veteran of the global insurance industry, with senior leadership experience across the Life, Health, Disability, and Pension sectors spanning the United States and international markets. Over his career, Greg has held C-suite and global practice leadership roles at Chubb, Marsh, Willis Group, UnitedHealth Group, and AIG.",
      "Greg advises organizations from InsurTech start-ups to Global 500 companies on strategy, innovation, and growth. He is an active member of the Self Insurance Institute of America (SIIA), serving on its nominating committee and as Program Chair for SIIA's international conferences.",
      "Greg brings to EvolTech a rare combination of global network, industry depth, and strategic perspective — helping the company expand its reach across industries and international markets.",
    ],
  },
];

const Advisors = () => {
  return (
    <section
      className="w-full h-1/2 bg-[#EFF7FF] relative"
      id="advisors-section"
    >
      <div className="absolute w-full h-full overflow-hidden z-1">
        <div className="absolute -left-10 bottom-0 md:top-0 scale-x-[-1]">
          {topRightRing}
        </div>
      </div>
      <div className="relative z-2 grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0 ">
        {advisors.map((advisor) => (
          <LeaderProfile
            key={advisor.name}
            {...advisor}
            reversed
            imageGradient="linear-gradient(to left, #C8E8FF 50%, #3A7DBF 80%)"
            badgeBg="#C8E8FF"
            imageWidth="350px"
            imageHeight="452px"
            gradientHeight="340px"
            imageRotation={4}
          />
        ))}
      </div>
    </section>
  );
};

export default Advisors;
