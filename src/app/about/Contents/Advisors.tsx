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
    linkedinUrl: "https://www.linkedin.com/",
    heading: "Our Advisor",
    bio: [
      "Greg Arms serves as a Strategic Advisor to EvolTech, bringing deep industry experience and relationships across the self-insurance and healthcare benefits landscape. His background spans collaboration with self-funded employers, third-party administrators (TPAs), carriers, payer organizations, and healthcare service networks throughout the United States and Internationally.",
      "In his advisory role, Greg works closely with EvolTech’s leadership team to provide strategic guidance on industry trends, operational challenges, and the evolving needs of organizations within the self-insured market. His perspective helps support the company’s long-term vision as EvolTech continues to expand its capabilities supporting healthcare and benefits organizations through technology-enabled operational solutions.",
      "Greg’s experience and industry insight also help EvolTech better understand the dynamics of the healthcare benefits ecosystem, strengthen alignment with market needs, and foster meaningful relationships across the broader self-insured community. His guidance contributes to EvolTech’s continued focus on operational excellence, innovation, and customer-centered growth.y",
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
