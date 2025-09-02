import Alwyn from "@/assets/images/Events/atea/Alwyn.png";
import Ramesh from "@/assets/images/Events/atea/Ramesh.png";
import Kanchana from "@/assets/images/Events/atea/Kanchana.png";
import Nazeera from "@/assets/images/Events/atea/Nazeera.png";
import  Thulasi  from "@/assets/images/Events/atea/Tulasi.png";

export interface Panelist {
  name: string;
  title: string;
  image: string; // can also use StaticImageData if using next/image
}

export const growAtlPanelists: Panelist[] = [
  { name: "Alwyn Joseph PremKumar", title: "President & COO, Sasken Technologies", image: Alwyn.src },
  { name: "Ramesh S.", title: "CEO, GenAI Healthcare", image: Ramesh.src },
  { name: "Kanchana V Raman", title: "Founder & President, Avion Networks & Avacend", image: Kanchana.src },
  { name: "Nazeera", title: "CEO, Vendorship", image: Nazeera.src },
  { name: "Thulasi", title: "CTO, Tech Innovations", image: Thulasi.src }

];
