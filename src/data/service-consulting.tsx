import {
  ConsultingCardImg1,
  ConsultingCardImg2,
  ConsultingCardImg3,
  ConsultingCardImg4,
  ConsultingCardImg5,
} from "@/assets/images/consulting";
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

export const valuePropositionCards = [
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
    title: "Performance-Driven Partnerships",
    description: "Our success is tied to yours, ensuring measurable outcomes.",
    bgColor: "#F8ECF9",
  },
  {
    id: 4,
    title: "Industry Insights",
    description:
      "Deep knowledge across multiple financial sectors for context-specific advice.",
    bgColor: "#FAF3EB",
  },
];

export const consultingCards: CardData[] = [
  {
    id: 1,
    title: "Our Experience",
    subtitle: "25+ Years of Industry Leadership",
    image: ConsultingCardImg1,
    description: [
      `With more than 25 years of collective experience in Banking & Financial Services, our team has a deep understanding of the industry's challenges and opportunities.`,
      `We’ve worked with clients across the spectrum, from traditional banking to cutting-edge FinTech, helping them adapt to evolving market dynamics, regulatory changes, and technological advancements. Our proven track record of delivering measurable results positions us as a trusted partner for your business transformation.`,
    ],
  },
  {
    id: 2,
    title: "Our Network",
    subtitle: "Unlocking New Opportunities",
    image: ConsultingCardImg2,
    description: [
      `Our extensive network of industry connections opens doors to new opportunities, partnerships, and markets.`,
      `From introducing you to potential clients and investors to facilitating strategic alliances, we leverage our relationships to help you expand your reach and accelerate growth. In a connected world, our network is your advantage.`,
    ],
  },
  {
    id: 3,
    title: "Our Expertise",
    subtitle: "Fractional Leadership for Revenue and Tech Transformation",
    image: ConsultingCardImg3,
    description: [
      `Not every business needs a full-time CRO or CTO, but every business can benefit from their expertise. That’s why we offer fractional leadership roles, allowing you to access top-tier talent on a flexible basis.`,
      `<strong>Fractional CRO:</strong> Our fractional Chief Revenue Officers specialize in revenue generation, developing and implementing strategies to maximize your sales, enter new markets, and enhance profitability. They bring decades of experience in driving growth and optimizing revenue streams.`,
      `<strong>Fractional CTO:</strong> Our fractional Chief Technology Officers are at the forefront of technological innovation, guiding your digital transformation with expertise in AI, cloud computing, and other cutting-edge technologies. They ensure your tech stack is scalable, secure, and aligned with your business goals.`,
      `This flexible model allows you to scale leadership expertise without the commitment of a full-time hire, ensuring you get the right guidance at the right time.`,
    ],
  },
  {
    id: 4,
    title: "Our Insights",
    subtitle: "Expertise Across Financial Sectors",
    image: ConsultingCardImg4,
    description: [
      `Our deep expertise spans multiple sectors within financial services, enabling us to provide tailored solutions that address your specific challenges and opportunities.`,
      `<strong>We specialize in:</strong>`, // You can expand this list into bullet points or keep it short depending on design.
    ],
    extraContent: <TagCardGridSection cards={insightsCards} />,
  },
  {
    id: 5,
    title: "Our Partnerships",
    subtitle: "Strategic Alliances with Pay-for-Performance",
    image: ConsultingCardImg5,
    description: [
      `At EvolTech, we believe in aligning incentives with results. That’s why we’ve formed strategic alliances with partners who operate on a pay-for-performance basis.`,
      `This model ensures that every solution we implement is designed to deliver tangible, measurable outcomes for your business. By tying our success to yours, we guarantee that our consulting services are not just a cost but an investment in your growth.`,
    ],
    // extraContent: (
    //   <TagCardGridSection
    //     title="Why Choose EvolTech for Consulting?"
    //     subtitle="What It Means for You"
    //     cards={valuePropositionCards}
    //   />
    // ),
  },
];
