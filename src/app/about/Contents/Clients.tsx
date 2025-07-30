"use client";
import {
  FairBid,
  FiveOakIcon,
  Getredd,
  Payless,
  PointC,
  ReinnovaIcon,
  Yoloh,
} from "@/assets/logo/Partners";
import { partnerHeartIcon } from "@/assets/svg";
import Button from "@/components/Button";
import Text from "@/components/Text";
import React from "react";
import { Aws, Azure } from "@/assets/icons/TECHSTACK";

const logos = [
  { id: 1, icon: Yoloh },
  { id: 2, icon: PointC },
  { id: 3, icon: Getredd },
  { id: 4, icon: Payless },
  { id: 5, icon: FairBid },
  { id: 6, icon: FiveOakIcon },
  { id: 7, icon: ReinnovaIcon },
  { id: 8, icon: Aws },
  { id: 9, icon: Azure },
];

const Clients = () => {
  return (
    <div className="w-full bg-[#F8F8F8] py-16 overflow-hidden">
      <div className="text-black w-full flex flex-col items-center gap-10 md:gap-15  px-5">
        <div className="flex flex-col gap-4 items-center text-center">
          <Button className="bg-[#D6ECFF] p-2 rounded-full px-4 font-medium text-sm">
            The Allies
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
          <div className="w-max flex animate-scroll">
            {[...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 px-4">
                <img
                  src={logo.icon.src}
                  alt={`Logo ${logo.id}`}
                  className="h-12 w-32 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation-name: scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-duration: 30s;
        }

        @media (max-width: 768px) {
          .animate-scroll {
            animation-duration: 20s;
          }
        }
      `}</style>
    </div>
  );
};

export default Clients;
