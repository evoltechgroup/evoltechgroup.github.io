import BgBanner from "@/app/services/components/BgBanner";
import { ProductBanner, ProductBgEffect } from "@/assets/images/Products";
import ProducExtraBg from "@/assets/effects/ProductBgBanner.svg";
const Section1 = () => {
  return (
    <BgBanner
      id="products"
      title="Products"
      description="At EvolTech, we deliver innovative solutions to supercharge your retail business.  <br /> <br /> Explore our cutting-edge products designed to drive growth, streamline operations, and boost customer trust."
      foregroundImage={ProductBanner}
      foregroundImageAlt="Consulting Banner"
      backgroundImages={{
        main: ProductBgEffect,
        extras: [ProducExtraBg],
      }}
    />
  );
};

export default Section1;
