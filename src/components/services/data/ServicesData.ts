// src/mockdata/servicesData.ts

export interface ServiceBullet {
  label: string;          // short heading
  text?: string;          // optional subtext
  bgClass?: string;       // Tailwind bg color for chip
  colSpan?: string;       // optional grid span class (e.g., "col-span-2")
}

export interface ServiceItem {
  key: string;            // "consulting" | "technology" | "backoffice"
  tabLabel: string;       // label for the tab button
  title: string;          // big heading in panel
  blurb: string;          // paragraph under heading
  iconSrc: string;        // icon path
  imageSrc: string;       // right-side image path
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
      "Strategic consulting to drive business growth, digital transformation, and operational excellence.",
    iconSrc: "/assets/icons/Group 605.png",
    imageSrc: "/assets/images/Group 617.png",
    ctaLabel: "Discover more",
    ctaHref: "/services/consulting",
    bullets: [
      {
        label: "Business Strategy",
        text: "Tailored roadmaps for your success",
        bgClass: "bg-[#E4EFF8]",
      },
      {
        label: "Process Optimization",
        text: "Streamlining operations for efficiency",
        bgClass: "bg-[#EBE9F9]",
      },
      {
        label: "Change Management",
        text: "Guiding seamless transitions",
        bgClass: "bg-[#E9F6E8]",
      },
      {
        label: "Market Analysis",
        text: "Data-driven insights for growth",
        bgClass: "bg-[#FAF3EB]",
      },
    ],
  },
  {
    key: "technology",
    tabLabel: "Technology",
    title: "Technology",
    blurb:
      "We bring visionary ideas to life with cutting-edge tech. Our 50+ engineers in full-stack, AI, and cloud build apps that fuel growth and efficiency.",
    iconSrc: "/assets/icons/Group 605.png",
    imageSrc: "/assets/images/Group 617.png",
    ctaLabel: "Discover more",
    ctaHref: "/services/technology",
    bullets: [
      { label: "End-to-End Solutions", bgClass: "bg-[#E4EFF8]" },
      { label: "Product Development", bgClass: "bg-[#EBE9F9]" },
      { label: "UI/UX Design", bgClass: "bg-[#E9F6E8]" },
      { label: "Cloud Engineering", bgClass: "bg-[#FAF3EB]" },
      {
        label: "AI-Driven Expertise",
        bgClass: "bg-[#F8ECF9]",
        colSpan: "md:col-span-2",
      },
    ],
  },
  {
    key: "backoffice",
    tabLabel: "Back-Office",
    title: "Back-Office",
    blurb:
      "Efficient back office support to streamline your business, ensure compliance, and enable scalable growth.",
    iconSrc: "/assets/icons/Group 605.png",
    imageSrc: "/assets/images/Group 617.png",
    ctaLabel: "Discover more",
    ctaHref: "/services/backoffice",
    bullets: [
      {
        label: "Process Automation",
        text: "Boosting productivity",
        bgClass: "bg-[#E4EFF8]",
      },
      {
        label: "Compliance Management",
        text: "Ensuring regulatory adherence",
        bgClass: "bg-[#EBE9F9]",
      },
      {
        label: "Data Entry & Processing",
        text: "Accurate, timely operations",
        bgClass: "bg-[#E9F6E8]",
      },
      {
        label: "Customer Support",
        text: "24/7 assistance",
        bgClass: "bg-[#FAF3EB]",
      },
    ],
  },
];
