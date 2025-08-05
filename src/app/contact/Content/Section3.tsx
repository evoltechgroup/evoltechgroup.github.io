import BannerHeader from "@/app/services/components/BannerHeader";
import { topRightRing } from "@/assets/effects";
import { followArrow } from "@/assets/svg";
import Form from "../Components/Form";
import TimeLine from "../Components/TimeLine";

const Section3 = () => {
  return (
    <section
      id="contact-form"
      className="text-black relative w-full h-full"
      style={{
        backgroundImage: "linear-gradient(to right, #EBF6FF 0%, #ffff 100%)",
      }}>
      <div className="w-full h-full absolute z-1 overflow-hidden">
        <div className="absolute right-0 -bottom-4">{topRightRing}</div>
      </div>
      <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 grid-rows-1 gap-5 max-w-7xl mx-auto px-4 lg:px-0 relative z-2">
        <div className="col-span-4 lg:col-span-12 flex flex-col relative z-2">
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
        </div>
        <div className="col-span-4 lg:col-span-10  col-start-1 lg:col-start-3 w-full flex flex-col md:flex-row h-full justify-start gap-10 md:gap-20 items-center -mt-20 md:mt-0 pb-20">
          <div className="w-fit flex items-center md:items-start justify-center mt-10 md:-mt-10">
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
