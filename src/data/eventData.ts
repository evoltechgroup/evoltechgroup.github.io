import Alwyn from "@/assets/images/Events/atea/Alwyn.png";
import Ramesh from "@/assets/images/Events/atea/Ramesh.png";
import Kanchana from "@/assets/images/Events/atea/Kanchana.png";
import Nazeera from "@/assets/images/Events/atea/Nazeera.png";
import  Thulasi  from "@/assets/images/Events/atea/Tulasi.png";
import Smily from "@/assets/images/Events/siia/smily.svg";
import Transform from "@/assets/images/Events/siia/Transform.svg";
import CutCosts from "@/assets/images/Events/siia/CutCost.svg";
import BuildSmart from "@/assets/images/Events/siia/BuildSmarter.svg";
export interface Panelist {
  name: string;
  title: string;
  image: string; // can also use StaticImageData if using next/image
  company: string;
}

export const growAtlPanelists: Panelist[] = [
  { name: "Alwyn Joseph PremKumar", title: "President & COO", company: "Sasken Technologies", image: Alwyn.src },
  { name: "Ramesh S.", title: "CEO", company: "GenAI Healthcare", image: Ramesh.src },
  { name: "Kanchana V Raman", title: "Founder & President", company: "Avion Networks & Avacend", image: Kanchana.src },
  { name: "Nazeera Dawood", title: "CEO", company: "Vendorship", image: Nazeera.src },
  { name: "Thulasidharan LG", title: "CEO", company: "EvolTech", image: Thulasi.src }

];


export interface Feature {
  icon: string; // using image path
  text: string | React.ReactNode;
}

export const siiaFeatures: Feature[] = [
  {
    icon: Transform.src,
    text: "Transform operations"
  
  },
  {
    icon: CutCosts.src,
    text: "Cut costs",
  },
  {
    icon: BuildSmart.src,
    text: "Build Smarter  with Cutting-Edge Tech"
  },
  {
    icon: Smily.src,
    text: "Delight Customers  Seamlessly"
  },
];