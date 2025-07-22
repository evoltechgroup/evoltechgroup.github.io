import ServiceConsultingSvg from "@/assets/effects/ServiceConsulting.svg";
import { consultingIcon } from "@/assets/svg";
import BgBanner from "../../components/BgBanner";
import { ConsultingBanner } from "@/assets/images/consulting";

const Section1 = () => {
  return (
    <BgBanner
      id="consultancy"
      consultingIcon={consultingIcon}
      title="Consulting Services"
      subtitle="Your Industry, Our Blueprint"
      description="Our consulting services are designed to provide you with the strategic insights, leadership, and operational excellence needed to drive growth, innovation, and sustainable success."
      foregroundImage={ConsultingBanner}
      foregroundImageAlt="Consulting Banner"
      backgroundImages={{
        main: ServiceConsultingSvg,
      }}
    />
  );
};

export default Section1;
