import {
  OperationsCardImg1,
  OperationsCardImg2,
  OperationsCardImg3,
  OperationsCardImg4,
  OperationsCardImg5,
  OperationsCardImg6,
} from "@/assets/images/operation";
import TagCardGridSection from "@/components/Card/TagCardGrid";
import { StaticImageData } from "next/image";

// data/consultingCards.ts
export interface CardData {
  id: number;
  title: string;
  subtitle: string;
  description: string[];
  image: StaticImageData;
  extraContent?: React.ReactNode;
}

const insightsCards = [
  {
    id: 1,
    title: "Banking",
    description:
      "Digital banking, Consumer, Commercial and Residential lending.",
    bgColor: "#E4EFF8",
  },
  {
    id: 2,
    title: "Mortgage",
    description:
      "Navigating lending and servicing complexities for compliance and efficiency.",
    bgColor: "#EBE9F9",
  },
  {
    id: 3,
    title: "Retail",
    description:
      "Enhancing customer experiences and operational efficiency to drive loyalty.",
    bgColor: "#E9F6E8",
  },
  {
    id: 4,
    title: "Insurance",
    description:
      "Innovating products and services to stay competitive in a dynamic market.",
    bgColor: "#FAF3EB",
  },
  {
    id: 5,
    title: "FinTech",
    description:
      "Leading in Embedded finance, digital payments, and other financial technology trends.",
    bgColor: "#F8ECF9",
  },
];

const valuePropositionCards = [
  {
    id: 1,
    title: "Proven Track Record",
    description: "25+ years delivering results in financial services.",
    bgColor: "#E4EFF8",
  },
  {
    id: 2,
    title: "Tailored Solutions",
    description:
      "Customized strategies that fit your business needs and goals.",
    bgColor: "#EBE9F9",
  },
  {
    id: 3,
    title: "Fractional Leadership",
    description: "Access to top talent without full-time commitment.",
    bgColor: "#E9F6E8",
  },
  {
    id: 4,
    title: "Industry Insights",
    description:
      "Deep knowledge across multiple financial sectors for context-specific advice.",
    bgColor: "#FAF3EB",
  },
  {
    id: 5,
    title: "Performance-Driven Partnerships",
    description: "Our success is tied to yours, ensuring measurable outcomes.",
    bgColor: "#F8ECF9",
  },
];

export const operationsCards: CardData[] = [
  {
    id: 1,
    title: "Extended Workforce",
    subtitle: "Your Seamless Extension",
    image: OperationsCardImg1,
    description: [
      "Our talented teams act as an integral part of your organization, blending seamlessly with your existing staff to provide unparalleled support.",
      "With expertise in areas like data processing, IT support, and administrative tasks, our professionals enhance your capabilities without the need for permanent hires. Whether you need to manage complex financial records or streamline retail operations, our extended workforce is equipped to deliver results that align with your business objectives.",
    ],
  },
  {
    id: 2,
    title: "Scalable Model",
    subtitle: "The Hybrid Captive Advantage",
    image: OperationsCardImg2,
    description: [
      "Flexibility is key in today’s dynamic business environment. Our hybrid captive model combines the control and security of an in-house team with the cost-effectiveness and scalability of outsourcing.",
      "This approach allows you to scale operations up or down based on demand, ensuring you have the right resources at the right time. Whether you’re navigating a busy season or optimizing for efficiency, our model adapts to your needs, delivering cost savings and operational agility.",
    ],
  },
  {
    id: 3,
    title: "Customized Support",
    subtitle: "Tailored to Your Goals",
    image: OperationsCardImg3,
    description: [
      "Every business is unique, and so are its operational needs. At EvolTech, we work closely with you to understand your specific goals and challenges, crafting processes that align with your strategic objectives.",
      "From customizing workflows to ensuring compliance with industry regulations, our solutions are designed to fit your business like a glove. Whether you’re in Banking, FinTech, Retail, Insurance, or Healthcare, we tailor our support to address your industry’s unique demands, ensuring maximum impact.",
    ],
  },
  {
    id: 4,
    title: "Global Integration",
    subtitle: "24/7 Support, Diverse Expertise",
    image: OperationsCardImg4,
    description: [
      "With offices in the US and India, EvolTech offers global integration that keeps your operations running around the clock. Our teams provide 24/7 support, ensuring that your business never misses a beat.",
      "Beyond time zones, our global presence brings diverse perspectives and expertise, enabling us to deliver innovative and practical solutions. This cohesive approach ensures that your operations are synchronized and efficient, no matter where you are.",
    ],
  },
  {
    id: 5,
    title: "Talent That Transforms",
    subtitle: "Seamless Talent Training",
    image: OperationsCardImg5,
    description: [
      "Training new talent by pulling your strategic and high end resources away from their core processes can be difficult and disrupt operations. Our services eliminate this challenge. With our zero attrition rate and Subject Matter Experts (SMEs) in every process, we can ensure stability and scalability.",
      "We are equipped to rapidly train new talent and adapt to your unique workflows without disrupting the operations of your strategic team, delivering consistent quality and empowering you to solely concentrate on driving business growth and success.",
    ],
  },
  {
    id: 6,
    title: "Operational Efficiency",
    subtitle: "Powered by Technology",
    image: OperationsCardImg6,
    description: [
      "Efficiency is at the core of our back office operations. We leverage cutting-edge technologies, including automation tools and advanced analytics, to streamline processes and reduce errors.",
      "From robotic process automation (RPA) to workflow systems, we optimize your operations to enhance productivity and provide a competitive edge. Our commitment to continuous improvement means we’re always exploring new ways to innovate and drive your business success.",
    ],
  },
];
