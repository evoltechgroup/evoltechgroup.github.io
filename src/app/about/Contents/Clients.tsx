"use client";
import {
  FairBid,
  FiveOakIcon,
  Gapi,
  Getredd,
  PointC,
  ReinnovaIcon,
  Yoloh,
  Atea,
  Siia,
} from "@/assets/logo/Partners";
import { partnerHeartIcon } from "@/assets/svg";
import Button from "@/components/Button";
import Text from "@/components/Text";
import { AtClevel, Aws, Azure, oneLaw, Verita } from "@/assets/icons/TECHSTACK";
import { motion } from "framer-motion";

const logos = [
  { id: 1, icon: Yoloh, name: "Yoloh", size: "w-40 h-16" },
  { id: 2, icon: PointC, name: "PointC", size: "w-40 h-16" },
  { id: 3, icon: Getredd, name: "Getredd", size: "w-46 h-18" },
  { id: 4, icon: Gapi, name: "Gapi", size: "w-46 h-12" },
  { id: 5, icon: FairBid, name: "FairBid", size: "w-40 h-16" },
  { id: 6, icon: FiveOakIcon, name: "FiveOak", size: "w-40 h-16" },
  { id: 7, icon: ReinnovaIcon, name: "Reinnova", size: "w-40 h-16" },
  { id: 8, icon: Aws, name: "AWS", size: "w-40 h-10" },
  { id: 9, icon: Azure, name: "Azure", size: "w-40 h-16" },
  { id: 10, icon: oneLaw, name: "OneLaw", size: "w-40 h-12" },
  { id: 11, icon: AtClevel, name: "AtClevel", size: "w-40 h-16" },
  { id: 12, icon: Verita, name: "Verita", size: "w-auto h-12" },
  { id: 13, icon: Atea, name: "Atea", size: "w-40 h-16" },
  { id: 14, icon: Siia, name: "Siia", size: "w-40 h-16" },
];

const Clients = () => {
  return (
    <div className="w-full bg-[#F8F8F8] py-16 lg:py-24 overflow-hidden">
      <div className="text-black w-full flex flex-col items-center gap-10 md:gap-15  px-5">
        <div className="flex flex-col gap-4 items-center text-center">
          <Button className="bg-[#D6ECFF] p-2 rounded-full px-4 font-medium text-sm">
            The Partners & Affiliations
          </Button>
          <Text className="text-3xl md:text-4xl xl:text-6xl font-semibold">
            Our Trusted
            <span className="inline-block w-10 h-10 mx-2 align-middle">
              {partnerHeartIcon}
            </span>
            Industry Partners
          </Text>
          <Text className="font-semibold xl:text-xl">
            Powering success with global innovators
          </Text>
        </div>
        <div className="relative w-full overflow-hidden">
          <div
            className="w-full"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 100px, rgba(0,0,0,1) calc(100% - 100px), rgba(0,0,0,0))",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,1) 100px, rgba(0,0,0,1) calc(100% - 100px), rgba(0,0,0,0))",
              maskRepeat: "no-repeat",
              maskSize: "100% 100%",
            }}
          >
            <motion.div
              initial={{ translateX: "0%" }}
              animate={{ translateX: "-100%" }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex min-w-fit gap-15 items-center"
            >
              {[...logos, ...logos].map((logo, idx) => (
                <div
                  key={idx}
                  className={`flex-shrink-0 px-4 ${
                    logo.icon === Verita
                      ? "bg-gray-800 p-1 rounded-md inline-flex items-center justify-center"
                      : ""
                  }`}
                >
                  <img
                    src={logo.icon.src}
                    alt={`Logo ${logo.id}`}
                    title={logo.name}
                    className={` object-contain ${logo.size}`}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
// //  <img
//                     src={logo.icon.src}
//                     alt={`Logo ${logo.id}`}
//                     title={logo.name}
//                     className={`h-14 object-contain ${
//                       logo.icon === Verita
//                         ? "w-auto"
//                         : logo.icon === ReinnovaIcon
//                         ? "w-40 h-16"
//                         : "w-32"
//                     // }`}
