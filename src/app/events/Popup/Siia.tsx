import InnovBg from "@/assets/images/Events/siia/SiiaBg.png";
import Logo from "@/assets/logo/evoltech-black-logo.svg";
import { ChevronRightCircle } from "lucide-react";
import { siiaFeatures } from "@/data/eventData";
import Link from "next/link";

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
    <div className="fixed inset-0 flex items-center justify-center z-50 ">
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl lg:h-[90vh] w-full mx-4 overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 z-10 font-bold text-[#F47937] bg-white rounded-2xl px-2.5 lg:px-3.5 py-1 lg:py-2 hover:text-[#ef6b24] shadow-md cursor-pointer"
        >
          ✕
        </button>

        <div className="relative  p-1">
          <img
            src={InnovBg.src}
            alt="INNOV8"
            className="w-full object-cover rounded-[12px]"
          />
        </div>

        <div className="py-2 lg:py-4 space-y-4 text-center mb-10">
          <div className="py-2 lg:py-4 flex flex-col gap-3 lg:gap-4">
          <h2 className="text-xl lg:text-2xl font-bold text-gray-900 flex justify-center items-center gap-2 ">
            <img src={Logo.src} alt="EvolTech Logo" className="h-6 lg:h-8 w-auto" />
            <span>at SIIA 2025</span>
          </h2>
          

          <p className="text-[#F47937] text-xl lg:text-2xl font-medium">
            October 12-14, 2024 | PHX
          </p>
 </div>
          <div
            className="grid grid-cols-2 lg:grid-cols-4 bg-[#EDF3FE] border-y-1 p-4 lg:p-6  lg:px-16 w-full gap-6"
            style={{
              borderImageSource:
                "linear-gradient(90deg, rgba(5,42,70,0.5), #F47937 100%)",
              borderImageSlice: 1,
            }}
          >
            {siiaFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col items-center  h-full">
                <div className="bg-white p-1 lg:p-2 rounded-[12px] shadow-md mb-2 lg:mb-4">
                  <img
                    src={feature.icon}
                    alt="feature icon"
                    className="w-6 lg:w-8 h-6 lg:h-8"
                  />
                </div>
                <div className="flex flex-1 items-center">
                  <p className="text-sm lg:text-base font-semibold text-gray-800 text-center">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#212121] text-base lg:text-lg font-medium leading-relaxed  lg:pb-2 px-10 p-2 lg:p-4 max-w-md mx-auto text-center">
            Discover our handcrafted Hybrid Captive Model and unlock next-level
            customer experience with our AI-powered reputation management
            solution and team of technology experts.
          </p>

          <Link
            href="/contact?source=SIIA2025#contact-form"
            className="text-base lg:text-lg font-medium inline-flex gap-2 items-center bg-[#F47937] text-white px-6 py-2 rounded-full hover:bg-orange-600 transition  cursor-pointer"
          >
            Connect with us
            <ChevronRightCircle size={20} strokeWidth={2} color="#FFDAC6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SiiaPopup;
