import BgBanner from "../../components/BgBanner";

import ServiceTechologySvg from "@/assets/effects/ServiceTechnology.svg";
import { TechnologyBanner } from "@/assets/images/technology";
import { technologyIcon } from "@/assets/svg";

const BgSection = () => {
  return (
    <BgBanner
      id="tech"
      consultingIcon={technologyIcon}
      title="Technology Services"
      subtitle="Ideas that Win"
      description="We bring visionary ideas to life with cutting-edge tech. Our 50+ engineers, experts in full-stack, AI, and cloud computing, create innovative apps to fuel growth and efficiency."
      foregroundImage={TechnologyBanner}
      foregroundImageAlt="Technology Banner"
      backgroundImages={{
        main: ServiceTechologySvg,
      }}
    />
  );
};

export default BgSection;
