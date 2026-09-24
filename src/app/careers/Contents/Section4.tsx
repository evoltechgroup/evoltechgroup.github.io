"use client";
import BannerHeader from "@/app/services/components/BannerHeader";
import expertAarrow from "@/assets/images/services/expert-arrow.svg";
import JobListings from "../components/JobListing";
import { topRightRing } from "@/assets/effects";

const Section4 = () => {
  return (
    <div className="bg-white relative" id="job-listing">
      <div className="w-full h-full absolute z-1 overflow-hidden">
        <div className="absolute right-0 -bottom-10">{topRightRing}</div>
      </div>
      <div className="relative z-2">
        <BannerHeader
          chipText="The Opportunity Hub"
          chipBackgroundColor="#FFDEB7"
          chipTextColor="text-black"
          headerText="Current Openings"
          headerTextColor="text-black"
          subHeaderText="Ready to make your mark? Explore our open roles and find the perfect fit to unleash your creativity and expertise."
          subHeaderTextColor="text-black"
          headerTextSize="text-6xl"
          className="pb-10 pt-20"
          arrowSrc={expertAarrow}
          arrowAlt="Expert Arrow"
          arrowPosition="bottom"
          arrowWidth={40}
          arrowHeight={120}
        />
        <JobListings />
      </div>
    </div>
  );
};

export default Section4;
