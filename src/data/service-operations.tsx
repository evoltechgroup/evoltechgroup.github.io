import {
  OperationsCardImg1,
  OperationsCardImg2,
  OperationsCardImg3,
  OperationsCardImg4,
  OperationsCardImg5,
  OperationsCardImg6,
} from "@/assets/images/operation";
import {
  CustomerSvg,
  DedicatedSvg,
  FinanceSvg,
  HealthCareSvg,
  OperationsSvg,
  PayrollSvg,
  StrategicSvg,
} from "@/assets/svg/operations";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface CardData {
  id: number;
  title: string;
  subtitle: string;
  description: string[];
  image: StaticImageData;
  extraContent?: React.ReactNode;
}

export interface OperationsCardData {
  iconSrc: StaticImageData;
  title: string;
  subtitle: string;
  description: string[];
  label: string;
  extraDescription?: string;
}

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

export const operationsCardData: OperationsCardData[] = [
  {
    iconSrc: HealthCareSvg,
    title: "Healthcare & Insurance verticals",
    subtitle: "Smart Support for Healthcare & Insurance Workflows.",
    description: [
      "We deliver robust operational and administrative support across the healthcare and insurance chain—from detailed claims adjudication and audit tracking to data validation, invoice processing, and pharmacy communication across high-volume workflows.",
      "Our quality control services enhance your manual and automated processes, catching errors early and slashing rework. With strong domain knowledge and system proficiency, we enable seamless coordination across payers, providers, and care teams.",
    ],
    label: "Let us manage the complexity, so you can focus on delivering care.",
    extraDescription:
      "Our teams are experienced in working within TPA ecosystems, navigating systems like Healthpac, VBA, CPM, QicLink, and WCA to ensure accurate, compliant, and efficient execution.",
  },
  {
    iconSrc: StrategicSvg,
    title: "Strategic Sales Support",
    subtitle: "Your sales engine, fully equipped.",
    description: [
      "From proposal generation to real-time partner coordination, our Sales Support team empowers your frontlines with speed, accuracy, and insight.",
      "We streamline pricing & cost structures, manage CRM workflows, and handle end-to-end bid collection—so your sales teams can focus on closing deals, not chasing details. Trusted by clients in healthcare, insurance, and beyond, our support functions as a natural extension of your go-to-market engine.",
    ],
    label: "Scale your sales efforts with our seamless support.",
  },
  {
    iconSrc: CustomerSvg,
    title: "Customer Experience",
    subtitle: "Support That Reflects Your Brand.",
    description: [
      "Our customer experience services support seamless communication between clients, partners, and service providers. From managing inbound and outbound queries to issue resolution and documentation requests, we ensure consistent and accurate information exchange.",
      "With experience across complex workflows and multi-channel platforms, our team acts as an extension of your front office, enhancing service quality and reducing TAT. We provide seamless, US-aligned support that reflects your brand at its best.",
    ],
    label: "Elevate customer experiences. Enhance loyalty.",
  },
  {
    iconSrc: OperationsSvg,
    title: "Operations & Administrative Support",
    subtitle: "Ops that Rock.",
    description: [
      "At EvolTech, we believe that a robust back office is the backbone of any thriving business.",
      "Our Back Office Operations service is designed to power your organization with seamless, efficient, and scalable solutions. From data management to administrative support, we handle the details so you can focus on driving growth and innovation. With a commitment to excellence, we deliver operations that truly rock.",
    ],
    label: "Power your core with operation support that rocks.",
  },
  {
    iconSrc: PayrollSvg,
    title: "HR & Payroll Support",
    subtitle: "People-First HR Support, Built for Impact.",
    description: [
      "Our HR support services streamline employee lifecycle management from on-boarding and off-boarding to payroll coordination and compliance tracking.",
      "With experience across platforms like ADP, Employee Navigator, and ClearCheck, our team supports seamless data handling, system updates, and regulatory adherence. From recruitment assistance to day-to-day operational support, we ensure your HR and payroll processes run smoothly behind the scenes.",
    ],
    label: "Streamlined HR and payroll for effortless employee management.",
  },
  {
    iconSrc: FinanceSvg,
    title: "Finance Support",
    subtitle: "Finance Operations You Can Count On.",
    description: [
      "Our finance support services cover operational accounting—from invoicing and journal entries to bank reconciliations and reporting.",
      "We manage corporate bank activity with precision and timeliness. With experience in budgeting, closures, and preparation of financial statements, we support both routine processes and strategic financial planning,  delivering reliable, scalable finance operations across functions.",
    ],
    label: "Finance that scales with you.",
  },
  {
    iconSrc: DedicatedSvg,
    title: "Dedicated Account Management",
    subtitle: "A partnership, not just a service.",
    description: [
      "Your engagement will be supported by a dedicated account manager who acts as the single point of contact between your managers and our team. ",
      "From on-boarding to daily coordination, we support in resource allocation planning, cross-functional workflows planning, and work closely across departments to swiftly resolve challenges and remove bottlenecks. Whether it’s daily operational support or long-term planning, we keep everything moving with proactive problem solving and accountability, so you can focus on outcomes not operations.",
    ],
    label: "Stay aligned, every step of the way with high touch Support",
  },
];
