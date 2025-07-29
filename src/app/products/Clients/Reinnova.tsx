import LogoContainer from "../Components/LogoContainer";
import { ReinnovaHighlights } from "@/data/product-data";
import TechCardWithChip from "@/app/services/components/technChipCards";
import Text from "@/components/Text";
import { ReinnovaProductImg } from "@/assets/images/Products";
import { ReinnovaIcon } from "@/assets/logo/Partners";

const ReinnovaHeader = {
  name: "reinnova",
  icon: ReinnovaIcon,
  title: "Solve auditing challenges with AI",
  subTitle:
    "Our comprehensive suite of tools helps you streamline operations, increase productivity, and drive growth.",
};

const Reinnova = () => {
  return (
    <div className="flex flex-col justify-center gap-20">
      <div>
        <LogoContainer
          name={ReinnovaHeader.name}
          icon={ReinnovaHeader.icon}
          title={ReinnovaHeader.title}
          subTitle={ReinnovaHeader.subTitle}
        />
      </div>
      <div className="flex flex-col gap-5 md:gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-7xl  md:pl-15 mx-auto">
          {ReinnovaHighlights?.map((card, index) => (
            <div
              key={card.id}
              className={`pb-4 pr-20 ${index === 3 ? "lg:col-start-2" : ""}`}>
              <TechCardWithChip
                id={card.id}
                title={card.title}
                description={card.description}
                bgColor={card.bgColor}
                paragraphPadding="!text-base font-medium !md:max-w-[305px]"
              />
            </div>
          ))}
        </div>
        <div
          className="w-full h-[2px] border-t-2 border-dotted"
          style={{ borderColor: "rgba(170, 170, 170, 1)" }}></div>
        <div className="flex flex-col md:mt-8 md:flex-row gap-10 w-full h-full items-center justify-center">
          <div className="w-full h-full md:w-[380px] md:h-[193px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] bg-white flex items-center justify-center rounded-3xl">
            <img src={ReinnovaProductImg.src} className="rounded-4xl" />
          </div>
          <div className="md:max-w-[630px] flex flex-col gap-3 justify-between">
            <Text className="whitespace-nowrap font-bold text-3xl sm:text-5xl text-black">
              Why Reinnova?
            </Text>
            <div className="flex flex-col justify-start gap-4 w-fit">
              <Text className="md:max-w-2xl font-semibold text-xl sm:text-[28px] text-black text-start">
                Innovative monitoring built to deliver clear, actionable, and
                business-ready solutions.
              </Text>
              <Text className="font-medium md:max-w-2xl text-base sm:text-lg text-black text-start">
                We’re optimistic about your success through versatile, ML-based
                sales prediction. In a competitive retail landscape, we believe
                success lies in monetizing behavioral data with smart
                recommendations, upselling, and customer-centric experiences.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reinnova;
