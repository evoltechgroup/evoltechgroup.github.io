import { Atea } from "@/assets/logo/Partners";
import Innov from "@/assets/images/Events/siia/Innov.png";
import { ABAlogo, SiiaIcon } from "@/assets/events";

import AteaImg from "@/assets/images/Events/atea/Atea.png";
import AteaBg from "@/assets/images/Events/atea/Atea-Bg.png";
import EvoLogo from "@/assets/logo/evoltech-black-logo.svg";

import InnovBg from "@/assets/images/Events/siia/SiiaBg.png";
import SmileIcon from "@/assets/images/Events/siia/Smily.svg";
import TransformIcon from "@/assets/images/Events/siia/Transform.svg";
import CutCostsIcon from "@/assets/images/Events/siia/CutCost.svg";
import BuildSmartIcon from "@/assets/images/Events/siia/BuildSmarter.svg";

import SiiaDubai1 from "@/assets/images/Events/siia/siia dubai/siia-dubai1.png";
import SiiaDubai2 from "@/assets/images/Events/siia/siia dubai/siia-dubai2.png";
import SiiaDubai3 from "@/assets/images/Events/siia/siia dubai/siia-dubai3.png";
import SiiaBanner from "@/assets/images/Events/siia/siia dubai/siia-dubai-banner.png";
import SiiaMobileBanner from "@/assets/images/Events/siia/siia dubai/siia-dubai-mobile-banner.png";

import ABABanner from "@/assets/images/Events/ABA/aba-banner.png";
import AbaBgImg from "@/assets/images/Events/ABA/Aba-bg.png";

import HealthcareBanner from "@/assets/images/Events/siia/siia heathcare/siia-healthcare-banner.png";

import Alwyn from "@/assets/images/Events/atea/Alwyn.png";
import Ramesh from "@/assets/images/Events/atea/Ramesh.png";
import Kanchana from "@/assets/images/Events/atea/Kanchana.png";
import Nazeera from "@/assets/images/Events/atea/Nazeera.png";
import Thulasi from "@/assets/images/Events/atea/Thulasi.png";

export interface Panelist {
  name: string;
  title: string;
  company: string;
  image: string;
}

export interface ModalFeature {
  icon: string;
  text: string;
}

export interface EventModalConfig {
  hero: {
    backgroundImage: string;
    mobileBackgroundImage?: string;
    containerHeight?: string;
    bgSize?: string;
    bgPosition?: string;
    grayscale?: boolean;
    overlayOpacity?: number;
    logo?: string;
    headingLogo?: string;
    headingText?: string;
    dateText?: string;
    heroAsImage?: boolean;
  };
  description?: {
    title?: string;
    titleClassName?: string;
    blocks: Array<{
      text: string;
      className?: string;
    }>;
  };
  featureGrid?: {
    columns?: 2 | 3 | 4;
    items: ModalFeature[];
  };
  imageGrid?: {
    columns?: 2 | 3 | 4;
    images: Array<{ src: string; alt: string }>;
  };
  panelists?: Panelist[];
  outerBackground?: string;
  cta: {
    text: string;
    href?: string;
    external?: boolean;
    contactSource?: string;
  };
}

export interface Event {
  id: number;
  logo?: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  buttonText: string;
  details?: string;
  expired?: string;
  link?: string;
  label?: string;
  modal?: EventModalConfig;
}

export const eventsData: Event[] = [
  {
    id: 1,
    logo: Atea.src,
    title: "EvolTech at GrowATL 2025",
    date: "September 06",
    time: "10am - 2:00pm",
    expired: "September 8, 2025",
    location: "Johns Creek, Georgia",
    buttonText: "Discover more",
    label: "Innovations, Insights and Impact",
    modal: {
      hero: {
        backgroundImage: AteaBg.src,
        containerHeight: "h-64 sm:h-80",
        bgSize: "150%",
        bgPosition: "35% 22%",
        grayscale: true,
        overlayOpacity: 0.1,
        logo: AteaImg.src,
        headingLogo: EvoLogo.src,
        headingText: "at GrowATL 2025",
        dateText:
          "2025 September 06, 10:00AM – 02:00PM | Sankranti Restaurant, John Creek, Georgia",
      },
      description: {
        blocks: [
          {
            text: "Join us for GrowATL 2025, the flagship entrepreneurship and innovation summit by ATEA Atlanta Chapter.",
            className: "text-[#000000] font-medium text-lg leading-relaxed",
          },
          {
            text: 'Under the theme "ATL Ecosystem for Innovations, Insights and Impact", this event sets the stage for Basics, bold conversations, startup momentum, and a roadmap to the ATEA Atlanta Vision 2030.',
            className: "text-[#000000] text-lg leading-relaxed font-medium",
          },
        ],
      },
      panelists: [
        {
          name: "Alwyn Joseph PremKumar",
          title: "President & COO",
          company: "Sasken Technologies",
          image: Alwyn.src,
        },
        {
          name: "Ramesh S.",
          title: "CEO",
          company: "GenAI Healthcare",
          image: Ramesh.src,
        },
        {
          name: "Kanchana V Raman",
          title: "Founder & President",
          company: "Avion Networks & Avacend",
          image: Kanchana.src,
        },
        {
          name: "Nazeera Dawood",
          title: "CEO",
          company: "Vendorship",
          image: Nazeera.src,
        },
        {
          name: "Thulasidharan LG",
          title: "CEO",
          company: "EvolTech",
          image: Thulasi.src,
        },
      ],
      cta: {
        text: "More Details",
        href: "https://atea.zohobackstage.com/ATEAAtlantaGrowATL2025#/",
        external: true,
      },
    },
  },

  {
    id: 2,
    logo: Innov.src,
    title: "Join EvolTech at SIIA 2025",
    date: "October 12-14 | PHX",
    expired: "October 16, 2025",
    buttonText: "Discover more",
    label: "The Innovation Spotlight",
    modal: {
      hero: {
        backgroundImage: InnovBg.src,
        containerHeight: "h-auto",
        bgSize: "cover",
        heroAsImage: true,
        headingLogo: EvoLogo.src,
        headingText: "at SIIA 2025",
        dateText: "October 12-14, 2024 | PHX",
      },
      featureGrid: {
        columns: 4,
        items: [
          { icon: TransformIcon.src, text: "Transform operations" },
          { icon: CutCostsIcon.src, text: "Cut costs" },
          {
            icon: BuildSmartIcon.src,
            text: "Build Smarter with Cutting-Edge Tech",
          },
          { icon: SmileIcon.src, text: "Delight Customers Seamlessly" },
        ],
      },
      description: {
        blocks: [
          {
            text: "Discover our handcrafted Hybrid Captive Model and unlock next-level customer experience with our AI-powered reputation management solution and team of technology experts.",
            className:
              "text-[#212121] text-base lg:text-lg font-medium leading-relaxed px-10 p-2 lg:p-4 max-w-md mx-auto text-center",
          },
        ],
      },
      cta: {
        text: "Connect with us",
        external: false,
        contactSource: "SIIA2025",
      },
    },
  },

  {
    id: 3,
    logo: SiiaIcon.src,
    title: "SIIA Dubai International conference 2026",
    date: "January 26-28 | Dubai, UAE",
    expired: "January 30, 2026",
    label: "Global Self-Insurance Forum",
    buttonText: "Discover more",
    modal: {
      hero: {
        backgroundImage: SiiaBanner.src,
        mobileBackgroundImage: SiiaMobileBanner.src,
        containerHeight: "h-[147px]",
        bgSize: "cover",
        bgPosition: "center",
      },
      description: {
        blocks: [
          {
            text: "Join leading self-insurance, healthcare, and captive insurance executives from around the world at SIIA's 2026 International Conference in Dubai, UAE, for what promises to be a truly unique event.",
            className:
              "text-[#212121] lg:text-[#F47937] font-medium text-base lg:text-lg px-6 lg:px-14",
          },
          {
            text: "Well-established as a gateway to the Middle East, Africa, and South Asia, Dubai is a regional hub for insurance and reinsurance companies. It is uniquely positioned to support the expanding interests of self-insurance, especially as captives for energy exposures seek to diversify into benefits and other lines. Additionally, attendees will benefit from the expected presence of prominent international and regional third-party administrators (TPAs) utilizing AI-enabled platforms, as well as significant self-insurance operations established by major local companies and US multinational firms.",
            className:
              "text-center md:text-start text-[#212121] font-medium text-sm md:text-base px-4 md:px-6 lg:px-8",
          },
        ],
      },
      imageGrid: {
        columns: 3,
        images: [
          { src: SiiaDubai3.src, alt: "SIIA Dubai" },
          { src: SiiaDubai2.src, alt: "SIIA Dubai" },
          { src: SiiaDubai1.src, alt: "SIIA Dubai" },
        ],
      },
      cta: {
        text: "More Details",
        href: "https://www.siia.org/i4a/pages/index.cfm?pageid=8016",
        external: true,
      },
    },
  },

  {
    id: 4,
    logo: ABAlogo.src,
    title: "ABA Conference for Community Bankers",
    date: "February 15-17 | Orlando, FL",
    expired: "February 19, 2026",
    buttonText: "Discover more",
    label: "Community Banking Excellence",
    modal: {
      outerBackground: AbaBgImg.src,
      hero: {
        backgroundImage: ABABanner.src,
        containerHeight: "h-[386px]",
        bgSize: "cover",
        bgPosition: "center",
      },
      description: {
        blocks: [
          {
            text: "Conference for Community Bankers",
            className:
              "text-[32px] sm:text-2xl font-bold text-gray-900 text-center",
          },
          {
            text: "February 15-17 | JW Marriott Grande Lakes | Orlando, FL",
            className:
              "text-[#F47937] text-lg lg:text-2xl leading-relaxed font-semibold text-center",
          },
        ],
      },
      cta: {
        text: "More Details",
        href: "https://www.aba.com/training-events/conferences/conference-for-community-bankers/program",
        external: true,
      },
    },
  },

  {
    id: 5,
    logo: SiiaIcon.src,
    title: "Healthcare Price Transparency Forum",
    date: "February 25-26 | Jacksonville, FL",
    expired: "February 28, 2026",
    buttonText: "Discover more",
    label: "Healthcare Innovation",
    modal: {
      hero: {
        backgroundImage: HealthcareBanner.src,
        containerHeight: "h-[240px] lg:h-[386px]",
        bgSize: "cover",
        bgPosition: "center",
        logo: SiiaIcon.src,
        dateText: "February 25-26, 2026 | Jacksonville, FL",
        heroAsImage: true,
      },
      description: {
        title: "Forum Overview",
        titleClassName:
          "text-xl sm:text-2xl font-semibold text-gray-900 text-start px-4 md:px-6 lg:px-6",
        blocks: [
          {
            text: "Federal legislation and regulations pertaining to price transparency have provided deeper access to health claim costs and prescription drug costs resulting in claims data being analyzed more than ever.",
            className:
              "text-start text-[#F47937] font-medium text-lg md:text-xl px-4 md:px-6 lg:px-6",
          },
          {
            text: "The Healthcare Price Transparency Forum focuses on policy and compliance issues facing self-insured health plans as well as innovative ways to manage the ever-rising cost-of-care and prescription drug costs. Industry experts and thought leaders will present best practices to combat costs and lead discussions on this, and other, trending issues.",
            className:
              "text-start text-[#212121] font-medium text-sm md:text-base px-4 md:px-6 lg:px-6",
          },
        ],
      },
      cta: {
        text: "More Details",
        href: "https://www.siia.org/i4a/pages/index.cfm?pageid=8032",
        external: true,
      },
    },
  },
];
