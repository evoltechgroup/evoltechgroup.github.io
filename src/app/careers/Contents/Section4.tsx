"use client";
import BannerHeader from "@/app/services/components/BannerHeader";
import expertAarrow from "@/assets/images/services/expert-arrow.svg";
import JobListings from "../components/JobListing";

const Section4 = () => {
  return (
    <div className="bg-white" id="job-listing">
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
  );
};

export default Section4;
