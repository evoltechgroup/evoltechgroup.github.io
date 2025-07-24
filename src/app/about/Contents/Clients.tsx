import { partnerHeartIcon } from "@/assets/svg";
import Button from "@/components/Button";
import Text from "@/components/Text";
import React from "react";

const Clients = () => {
  return (
    <div className="w-full h-full bg-[#F8F8F8] relative">
      <div className="text-black w-full h-full justify-center flex items-center flex-col p-36">
        <div className="flex flex-col gap-4  items-center justify-center">
          <Button className="bg-[#D6ECFF] p-2 flex w-fit rounded-full px-4 text-sm">
            The Allies
          </Button>
          <Text className="whitespace-nowrap text-3xl md:text-4xl xl:text-6xl font-semibold">
            Our Trusted
            <span className="inline-block align-middle ml-2 mr-2 h-6 md:h-10">
              {partnerHeartIcon}
            </span>
            Clients
          </Text>
          <Text className="font-semibold xl:text-xl">
            Powering success with global innovators
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Clients;
