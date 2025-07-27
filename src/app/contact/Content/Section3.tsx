import BannerHeader from "@/app/services/components/BannerHeader";
import { topRightRing } from "@/assets/effects";
import { followArrow } from "@/assets/svg";
import Form from "../Components/Form";
import TimeLine from "../Components/TimeLine";

const Section3 = () => {
  return (
    <section
      className="text-black relative w-full h-full"
      style={{
        backgroundImage: "linear-gradient(to right, #EBF6FF 0%, #ffff 100%)",
      }}>
      <div className="w-full h-full absolute z-1 overflow-hidden">
        <div className="absolute right-0 -bottom-4">{topRightRing}</div>
      </div>
      <div className="flex flex-col relative z-2">
        <BannerHeader
          chipText="The Growth Spark"
          chipBackgroundColor="#FFDEB7"
          chipTextColor="text-black"
          headerText="Let’s Scale Your Business"
          headerTextColor="text-black"
          subHeaderText="Contact us to explore how our solutions can drive your success."
          subHeaderTextColor="text-black"
          headerTextSize="text-6xl"
          className="pt-10 pb-10 md:pt-20 md:pb-15"
          arrowSrc={followArrow}
          arrowColor="#FFBB00"
          arrowAlt="Expert Arrow"
          arrowPosition="right"
          arrowWidth={100}
          arrowHeight={120}
        />
        <div className="w-full flex flex-col md:flex-row h-full justify-center gap-10 md:gap-20 items-center -mt-20 md:mt-0 pb-20">
          <div className="w-full md:w-1/2 flex items-center md:items-start justify-center md:justify-end mt-10 md:-mt-10 md:pr-15">
            <TimeLine />
          </div>
          <div className="w-full md:w-1/2 h-full flex items-center justify-start p-4">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
