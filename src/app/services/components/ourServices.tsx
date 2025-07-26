import React from "react";

interface OurService {
  title: string;
  description: string;
}

const OurService: React.FC = () => {
  const services: OurService[] = [
    {
      title: "Gap Assessments",
      description: "Identify compliance gaps using Vanta.",
    },
    {
      title: "Policy Development",
      description: "Craft security policies aligned with SOC2 criteria.",
    },
    {
      title: "Control Implementation",
      description:
        "Deploy encryption, access controls, and logging mechanisms.",
    },
    {
      title: "Audit Support",
      description:
        "Prepare documentation and support audit processes with Data.",
    },
    {
      title: "Continuous Monitoring",
      description: "Ensure ongoing compliance with Secureframe.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto pb-10 md:pb-20 pt-5">
      <h2 className="text-2xl font-semibold text-gray-800 mb-5 text-center">
        Our services include:
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 p-5 rounded-lg">
        {services.map((service, index) => (
          <div key={index} className="flex-1  max-w-content">
            <div className="flex border-l-4 border-l-[#4C96D7]  items-center">
              <span className="text-base font-semibold text-gray-800 w-full pl-3 text-start">
                {service.title}
              </span>
            </div>
            <p className="text-[#444444] text-sm mt-3 font-medium leading-5">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
