import InnovBg from "@/assets/images/Events/siia/SiiaBg.png";
import Logo from "@/assets/logo/evoltech-black-logo.svg"; // 👈 your logo file
import { ChevronRightCircle } from "lucide-react";
import { siiaFeatures } from "@/data/eventData";

interface SiiaPopupProps {
  event?: {
    title: string;
    date: string;
    details: string;
  };
  onClose: () => void;
}

const SiiaPopup = ({ event, onClose }: SiiaPopupProps) => {
  return (
  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
  <div className="bg-white rounded-2xl shadow-lg max-w-lg w-full mx-4 overflow-hidden relative">
    
    {/* --- Close Button --- */}
    <button
      onClick={onClose}
      className="absolute top-0 right-0 z-10 font-bold text-[#F47937] bg-white rounded-full px-3 py-1 hover:text-[#ef6b24] shadow-md"
    >
      ✕
    </button>

    {/* --- Banner Image --- */}
    <div className="relative">
      <img
        src={InnovBg.src}
        alt="INNOV8"
        className="w-full object-cover rounded-b-2xl"
      />
    </div>

    {/* --- Content --- */}
    <div className="py-4 space-y-4 text-center mb-10">
      {/* --- EvolTech Logo + Title --- */}
      <h2 className="text-2xl font-bold text-gray-900 flex justify-center items-center gap-2">
        <img src={Logo.src} alt="EvolTech Logo" className="h-6 w-auto" />
        <span>at SIIA 2025</span>
      </h2>

      <p className="text-[#FF6A00] text-2xl font-semibold">{event?.date}</p>

      {/* --- Features Grid --- */}
      <div className="grid grid-cols-2 lg:grid-cols-4 bg-[#EDF3FE] border-y-2 p-4 w-full gap-6">
        {siiaFeatures.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={feature.icon} alt="feature icon" className="w-8 h-8 mb-2" />
            <p className="text-sm font-medium text-gray-800 text-center">
              {feature.text}
            </p>
          </div>
        ))}
      </div>

      <p className="text-[#212121] text-lg font-medium leading-relaxed pb-2">
        Discover our handcrafted Hybrid Captive Model and unlock next-level
        customer experience with our AI-powered reputation management solution
        and team of technology experts.
      </p>

      {/* CTA Button */}
      <a
        href="/contact?source=SIIA 2025"
        className="inline-flex gap-2 items-center bg-[#FF6A00] text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
      >
        Schedule call now
        <ChevronRightCircle size={20} strokeWidth={1.5} color="#FFDAC6" />
      </a>
    </div>
  </div>
</div>

  );
};

export default SiiaPopup;
