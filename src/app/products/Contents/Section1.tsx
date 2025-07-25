import BgBanner from "@/app/services/components/BgBanner";
import { BackOffice } from "@/assets/images";
import { OperationsBgEffect } from "@/assets/images/operation";
import React from "react";
import ServiceOperationsSvg from "@/assets/effects/ServiceOperations.svg";
import BackOfficeicon from "@/assets/icons/backoffice-icon.svg";
import { ProductBanner, ProductBgEffect } from "@/assets/images/Products";

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
      }}
    />
  );
};

export default Section1;
