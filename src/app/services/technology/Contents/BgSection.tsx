import BgBanner from "../../components/BgBanner";

import ServiceTechologySvg from "@/assets/effects/ServiceTechnology.svg";
import ServiceTechologyMobileSvg from "@/assets/effects/ServiceTechnologyMobile.svg";
import { TechnologyBanner } from "@/assets/images/technology";
import Technologyicon from "@/assets/icons/technology-icon.svg";

const BgSection = () => {
  return (
    <BgBanner
      id="tech"
      consultingIcon={Technologyicon.src}
      title="Technology Services"
      subtitle="Ideas that Win"
      description="We bring visionary ideas to life with cutting-edge tech. Our 50+ engineers, experts in full-stack, AI, and cloud computing, create innovative apps to fuel growth and efficiency."
      foregroundImage={TechnologyBanner}
      foregroundImageAlt="Technology Banner"
      backgroundImages={{
        main: ServiceTechologySvg,
        mobileTech: ServiceTechologyMobileSvg,
      }}
    />
  );
};

export default BgSection;
