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
    <div className="max-w-6xl mx-auto p-5">
      <h2 className="text-2xl font-semibold text-gray-800 mb-5 text-center">
        Our services include:
      </h2>
      <div className="flex justify-around  p-5 gap-4 rounded-lg">
        {services.map((service, index) => (
          <div key={index} className="flex-1 max-w-content">
            <h3 className="text-lg relative">
              <span className="absolute left-[-15px] text-[#52AEFD] font-extrabold">
                |
              </span>
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm leading-5">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
