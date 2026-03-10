import { Atea } from "@/assets/logo/Partners";
import Innov from "@/assets/images/Events/siia/Innov.png";
import { ABAlogo, SiiaIcon } from "@/assets/events";

interface Event {
  id: number;
  logo?: string;
  logoAlt?: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  buttonText: string;
  details?: string;
  expired?: string;
  link?: string;
  label?: string;
}

export const eventsData: Event[] = [
  {
    id: 1,
    logo: Atea.src,
    logoAlt: "ATEA logo",
    title: "EvolTech at GrowATL 2025",
    date: "September 06",
    time: "10am - 2:00pm",
    expired: "September 8, 2025",
    location: "Johns Creek, Georgia",
    buttonText: "Discover more",
    label: " Innovations, Insights and Impact",
  },
  {
    id: 2,
    logo: Innov.src,
    logoAlt: "SIIA Innovation Spotlight logo",
    title: "Join EvolTech at SIIA 2025",
    date: "October 12-14 | PHX",
    expired: "October 16, 2025",
    buttonText: "Discover more",
    label: "The Innovation Spotlight",
  },
  {
    id: 3,
    logo: SiiaIcon.src,
    logoAlt: "SIIA Global Self-Insurance Forum logo",
    title: "SIIA Dubai International conference 2026",
    date: "January 26-28 | Dubai, UAE",
    expired: "January 30, 2026",
    label: "Global Self-Insurance Forum",
    buttonText: "Discover more",
    // link: "https://www.siia.org/i4a/pages/index.cfm?pageid=8016",
  },
  {
    id: 4,
    logo: ABAlogo.src,
    logoAlt: "ABA Conference for Community Bankers logo",
    title: "ABA Conference for Community Bankers",
    date: "February 15-17 | Orlando, FL",
    expired: "February 19, 2026",
    buttonText: "Discover more",
    label: "Community Banking Excellence",
    // link: "https://www.aba.com/training-events/conferences/conference-for-community-bankers/program",
  },
  {
    id: 5,
    logo: SiiaIcon.src,
    logoAlt: "Healthcare Price Transparency Forum logo",
    title: "Healthcare Price Transparency Forum",
    date: "February 25-26 | Jacksonville, FL",
    expired: "February 28, 2026",
    buttonText: "Discover more",
    label: "Healthcare Innovation",
    // link: "https://www.siia.org/i4a/pages/index.cfm?pageid=8032",
  },
];
