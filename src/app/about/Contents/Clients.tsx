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
          <Text className="whitespace-nowrap text-6xl font-semibold">
            Our Trusted
            <span className="inline-block align-middle w-5 ml-5 -mt-5 mr-8 h-5">
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
