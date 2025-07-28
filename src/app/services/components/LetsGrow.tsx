import { bottomRing, leftRing } from "@/assets/effects";
import { followArrowDownV3 } from "@/assets/svg";
import Button from "@/components/Button";
import Text from "@/components/Text";
import { CircleChevronRight } from "lucide-react";

interface LetsGrowProps {
  description: string | React.ReactNode;
}

const LetsGrow = ({ description }: LetsGrowProps) => {
  return (
    <div
      className="w-full py-10 md:py-0 md:h-[38.5rem] overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to left, rgba(217, 229, 251, 1) 0%, #ffff 100%)",
      }}>
      <div className="sm:p-44 p-10 flex items-center justify-center relative h-full">
        <div className="absolute hidden md:block -top-10 -left-10 z-1 w-full h-full">
          {leftRing}
        </div>
        <div className="absolute right-0 bottom-0 z-1">
          {bottomRing}
        </div>
        <div className="w-full flex items-center justify-center flex-col">
          <div className="flex flex-col gap-4 items-center w-fit justify-center relative p-10">
            <Text
              className="font-semibold text-3xl sm:text-[56px] max-w-[30rem] text-black text-center"
              alignment="center"
              tag="p">
              Let’s Transform Business Together
            </Text>
            <div className="text-[#FFBB00] absolute bottom-0 -right-5">
              {followArrowDownV3}
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-10 items-center justify-center">
            <Text
              className="font-normal sm:text-xl text-base text-[#212121] max-w-xl"
              alignment="center"
              tag="p">
              {description}
            </Text>
            <div className="w-full text-black mt-4 flex items-center justify-center">
              <Button className="pt-1.5 w-fit gap-2 items-center justify-center sm:justify-start pr-3 pb-1.5 pl-3 flex bg-[#FFBB00] rounded-full text-sm">
                <span className="font-semibold">Contact us</span>
                <span>
                  <CircleChevronRight size={18} />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetsGrow;
