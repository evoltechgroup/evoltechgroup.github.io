import {
  FairBid,
  Getredd,
  Payless,
  PointC,
  Yoloh,
} from "@/assets/logo/Partners";
import { partnerHeartIcon } from "@/assets/svg";
import Button from "@/components/Button";
import Text from "@/components/Text";
import React from "react";

const logos = [
  { id: 1, icon: Yoloh },
  { id: 2, icon: PointC },
  { id: 3, icon: Getredd },
  { id: 4, icon: Payless },
  { id: 5, icon: FairBid },
];

const Clients = () => {
  return (
    <div className="w-full h-full bg-[#F8F8F8] relative">
      <div className="text-black w-full h-full justify-center flex items-center flex-col gap-15 p-5 py-15 md:p-20">
        <div className="flex flex-col gap-4  items-center justify-center">
          <Button className="bg-[#D6ECFF] p-2 flex w-fit rounded-full px-4 text-sm">
            The Allies
          </Button>
          <Text className="md:whitespace-nowrap text-center text-3xl md:text-4xl xl:text-6xl font-semibold">
            Our Trusted
            <span className="inline-block align-middle ml-2 mr-2 h-6 md:h-10">
              {partnerHeartIcon}
            </span>
            Industry Partners
          </Text>
          <Text className="font-semibold xl:text-xl">
            Powering success with global innovators
          </Text>
        </div>
        <div className="flex flex-wrap md:flex-row justify-center gap-5">
          {logos.map((logo, idx) => {
            return (
              <div key={idx}>
                <img src={logo.icon.src} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Clients;
