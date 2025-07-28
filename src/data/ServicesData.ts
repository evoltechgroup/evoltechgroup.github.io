// src/mockdata/servicesData.ts
import Consulting from "@/assets/images/consulting/Consultingbanner.png";
import Consultingicon from "@/assets/icons/consulting-icon.svg";
import Technologyicon from "@/assets/icons/technology-icon.svg";
import BackOfficeicon from "@/assets/icons/backoffice-icon.svg";
import BackOffice from "@/assets/images/BackOffice.png";
import { TechnologyBanner } from "@/assets/images/technology";

export interface ServiceBullet {
  label: string; // short heading
  text: string[]; // optional subtext
  bgClass: string; // Tailwind bg color for chip
  colSpan?: string; // optional grid span class (e.g., "col-span-2")
}

export interface ServiceItem {
  key: string; // "consulting" | "technology" | "backoffice"
  tabLabel: string; // label for the tab button
  title: string; // big heading in panel
  blurb: string; // paragraph under heading
  iconSrc: string; // icon path
  imageSrc: string; // right-side image path
  ctaLabel?: string;
  ctaHref?: string;
  bullets: ServiceBullet[];
}

export const servicesData: ServiceItem[] = [
  {
    key: "consulting",
    tabLabel: "Consulting",
    title: "Consulting",
    blurb:
      "Our consulting services are designed to provide you with the strategic insights, leadership, and operational excellence needed to drive growth, innovation, and sustainable success.",
    iconSrc: Consultingicon.src,
    imageSrc: Consulting.src,
    ctaLabel: "Discover more",
    ctaHref: "/services/consulting",
    bullets: [
      {
        label: "Banking",
        text: [
          "Digital banking, Consumer, Commercial and Residential lending.",
        ],
        bgClass: "#E4EFF8",
      },
      {
        label: "Mortgage",
        text: [
          "Navigating lending and servicing complexities for compliance and efficiency.",
        ],
        bgClass: "#EBE9F9",
      },
      {
        label: "Retail",
        text: [
          "Enhancing customer experiences and operational efficiency to drive loyalty.",
        ],
        bgClass: "#E9F6E8",
      },
      {
        label: "Insurance",
        text: [
          "Innovating products and services to stay competitive in a dynamic market.",
        ],
        bgClass: "#FAF3EB",
      },
      {
        label: "FinTech",
        text: [
          "Leading in Embedded finance, digital payments, and other financial technology trends.",
        ],
        bgClass: "#F8ECF9",
      },
    ],
  },
  {
    key: "technology",
    tabLabel: "Technology",
    title: "Technology",
    blurb:
      " We bring visionary ideas to life with cutting-edge tech. Our 50+ engineers, experts in full-stack, AI, and cloud computing, create innovative apps to fuel growth and efficiency.",
    iconSrc: Technologyicon.src,
    imageSrc: TechnologyBanner.src,
    ctaLabel: "Discover more",
    ctaHref: "/services/technology",
    bullets: [
      {
        label: "End-to-End Solutions",
        text: ["Comprehensive tech for your business"],
        bgClass: "#E4EFF8",
      },
      {
        label: "Product Development",
        text: ["From concept to market-ready launch"],
        bgClass: "#EBE9F9",
      },
      {
        label: "UI/UX Design",
        text: ["Crafting engaging and intuitive user experiences"],
        bgClass: "#E9F6E8",
      },
      {
        label: "Cloud Engineering",
        text: ["Scalable systems for seamless performance"],
        bgClass: "#FAF3EB",
      },
      {
        label: "AI-Driven Expertise",
        text: ["Full-Stack development powered by Artificial Intelligence"],
        bgClass: "#F8ECF9",
        colSpan: "md:col-span-2",
      },
    ],
  },
  {
    key: "Operations",
    tabLabel: "Operations",
    title: "Operations",
    blurb:
      "Our Back Office Operations service is designed to power your organization with seamless, efficient, and scalable solutions. From data management to administrative support, we handle the details so you can focus on driving growth and innovation.",
    iconSrc: BackOfficeicon.src,
    imageSrc: BackOffice.src,
    ctaLabel: "Discover more",
    ctaHref: "/services/operations",
    bullets: [
      {
        label: "Extended Workforce",
        text: [
          "Seamless integration with your team for enhanced capabilities.",
        ],
        bgClass: "#E4EFF8",
      },
      {
        label: "Scalable Model",
        text: ["Flexible, cost-effective solutions that adapt to your needs."],
        bgClass: "#EBE9F9",
      },
      {
        label: "Customized Support",
        text: ["Tailored processes designed for your industry and goals."],
        bgClass: "#E9F6E8",
      },
      {
        label: "Global Integration",
        text: ["24/7 support with diverse expertise for cohesive operations."],
        bgClass: "#FAF3EB",
      },
      {
        label: "Operational Efficiency",
        text: [
          "Technology-driven solutions for productivity and cost savings.",
        ],
        bgClass: "#F8ECF9",
      },
    ],
  },
];
