import { India, US } from "@/assets/effects/Banner";
import { StaticImageData } from "next/image";

interface OfficeLocation {
  icon: StaticImageData;
  country: string;
  address: string;
  phone: string;
  tagline: string;
  companyName?: string;
}

export const officeLocations: OfficeLocation[] = [
  {
    icon: US,
    country: "US",
    address: "6455 East Johns Crossing Suite 400, Johns Creek, GA 30097, USA",
    phone: "+1 (704) 236-7295",
    tagline: "Serving North America<br/> with cutting-edge solutions.",
  },
  {
    icon: India,
    country: "India",
    address:
      "Workenstein Collaborative Spaces Private Limited, New, No. 431, Anna Salai, Teynampet, Chennai, Tamil Nadu 600018",
    phone: "+91 (704) 236-7295",
    tagline: "Powering innovation<br/> from Asia.",
  },
];
