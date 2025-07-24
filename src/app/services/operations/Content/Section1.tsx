import ServiceOperationsSvg from "@/assets/effects/ServiceOperations.svg";
import BackOfficeicon from "@/assets/icons/backoffice-icon.svg";
import BgBanner from "../../components/BgBanner";
import BackOffice from "@/assets/images/BackOffice.png";
import { OperationsBgEffect } from "@/assets/images/operation";

const Section1 = () => {
  return (
    <BgBanner
      id="operations"
      consultingIcon={BackOfficeicon.src}
      title="Operations"
      subtitle="Ops that Rock"
      description="At EvolTech, our Back Office Operations streamline your business with efficient, scalable solutions. From data management to admin support, we handle the details, so you can focus on growth and innovation."
      foregroundImage={BackOffice}
      foregroundImageAlt="Consulting Banner"
      backgroundImages={{
        main: ServiceOperationsSvg,
        extras: [OperationsBgEffect],
      }}
    />
  );
};

export default Section1;
