import { growAtlPanelists } from "@/data/eventData";
import Atea from "@/assets/images/Events/atea/Atea.png";
import AteaBg from "@/assets/images/Events/atea/Atea-Bg.png";
import { ChevronRightCircle } from "lucide-react";
import Logo from "@/assets/logo/evoltech-black-logo.svg";
import Link from "next/link";

interface GrowAtlPopupProps {
  onClose: () => void; 
}

const GrowAtlPopup = ({ onClose }: GrowAtlPopupProps) => {
  const panelists = growAtlPanelists;
  return (
    <div className="bg-[#FFFFFF] max-w-2xl mx-auto rounded-lg shadow-lg overflow-hidden max-h-screen overflow-y-auto">


      
     
      <div className="relative h-48 sm:h-80 w-full flex flex-col justify-center items-center text-center text-white">
        
        <button
    onClick={onClose}
    className="absolute top-0 right-0 z-50 font-bold text-[#F47937] bg-white rounded-full px-3 py-1 hover:text-[#ef6b24] shadow-md"
  >
    ✕
  </button>
     
        <div
    className="absolute inset-0 bg-cover bg-center filter grayscale"
    style={{ backgroundImage: `url(${AteaBg.src})`, backgroundSize: "140%", backgroundPosition: "25% 20%", }}
  />

        <div className="absolute inset-0 bg-black/10" />

      
        <div className="relative z-10 lg:-top-10 space-y-2">
          <img src={Atea.src} alt="ATEA" className="h-24 mx-auto" />
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={Logo.src} alt="Evoltech" className="h-6" />
            <h2 className="text-xl sm:text-2xl text-black font-bold">at GrowATL 2025</h2>
          </div>
          <p className="text-lg sm:text-xl font-semibold text-[#054D88]">
            2025 September 06, 10:00AM - 02:00PM <br />
            Sankranti Restaurant, John Creek, Georgia
          </p>
        </div>
      </div>

     
      <div className="p-6 text-center space-y-4">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Join us for GrowATL 2025,
        </h2>
        <p className="text-[#000000] font-medium text-lg leading-relaxed">
          the flagship entrepreneurship and innovation summit <br />
          by ATEA Atlanta Chapter.
        </p>

        <div className="mt-4 space-y-2">
          <p className="text-lg font-medium text-[#000000]">Under the theme</p>
          <p className="text-2xl font-semibold text-[#F47937]">
            "ATL Ecosystem for Innovations, Insights and Impact"<span className="text-black">,</span>
          </p>
        </div>

        <p className="text-[#000000] text-lg leading-relaxed font-medium">
          this event sets the stage for Basics, <br />
          bold conversations, startup momentum, <br />
          and a roadmap to the ATEA Atlanta Vision 2030.
        </p>

        
        <Link
          href="/contact?source=ATEA2025#contact-form"
          className="  inline-flex items-center justify-center gap-2 bg-[#F47937] text-white text-base sm:text-lg font-medium px-6 py-2 rounded-full hover:bg-[#f86521] transition"
        >
          More Details
          <ChevronRightCircle size={20} strokeWidth={2} color="#FFDAC6" />
        </Link>
      </div>

      
      <div className="px-10 pb-16">
        <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg sm:text-2xl text-black font-semibold ">The Panelists</h3>
<div className="flex-1 h-px bg-[#DDDDDD]"></div>
</div>
    <div className="flex flex-wrap justify-center gap-8">
  {panelists.map((panelist, index) => (
    <div key={index} className="text-start w-36">
      <img
        src={panelist.image}
        alt={panelist.name}
        className="w-24 h-24 rounded-2xl object-cover mb-2"
      />
      <p className="font-semibold text-sm text-black">{panelist.name}</p>
      <p className="text-sm font-medium text-[#666666]">{panelist.title}</p>
      <p className="text-sm font-medium text-[#666666]">{panelist.company}</p>
    </div>
  ))}
</div>



      </div>
    </div>
  );
};

export default GrowAtlPopup;
