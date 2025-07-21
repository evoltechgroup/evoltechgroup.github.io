"use client";
import ServicesSection from "../components/services/ServicesSection";
import TestimonialsSection from "./ui/Testimonials";
import Text from "@/components/Text";
// import Footer from "@/components/Footer";
import { infoCards } from "@/data/about-us";
import InfoCard from "@/components/Card/InfoCard";
import { mainFollowArrow } from "@/assets/svg";



import JoinOurTeam from "./about/components/JoinOurTeam";
// import ServicesSection from "./ServicesSection";
import Testimonials from "./ui/Testimonials";

export default function HomePage() {
  return (
    <main className="bg-[#0B0F2B] text-white min-h-screen">
      <section className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-100 filter contrast-105 saturate-125 sharp-video"
          src="/assets/18458403-hd_1920_1080_24fps (1).mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10 flex flex-col items-center w-full sm:top-10 lg:pt-10">
          <Text className="text-2xl sm:text-5xl lg:text-[4rem] font-bold  mb-6 tracking-tight">
            Build 
            <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" /> {" "} 
            <span className="">Scale 
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />{" "}
              </span> 
              Succeed
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
        </Text>
          <div className="flex flex-col gap-5 items-center mb-4 lg:mb-0">
           
            <Text className="text-xl font-normal max-w-[39rem] text-center text-[#C5E1FF] tracking-wide leading-relaxed">
             We bring visionary ideas to life with cutting-edge tech, strategic consulting, and seamless back office solutions. 
Our 50+ experts in full-stack, AI, and cloud computing build innovative apps and deliver operational excellence to fuel your growth and efficiency.
            </Text>
            <div className="text-[#FFBB00] flex   w-full">
              {mainFollowArrow}
            </div>
          </div>
          <button className="text-base lg:text-lg font-medium bg-[#FFB700] text-[#0B0F2B] px-7 py-2 rounded-full  hover:bg-[#FFBB00] transition flex items-center gap-2 mx-auto mb-12 shadow-[0_0_15px_#FFB700] hover:shadow-[0_0_25px_#FFD95E]">
            Discover more
          <svg xmlns="http://www.w3.org/2000/svg" 
          width="24" height="24">
            <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/>
            <path d="M9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707-1.414 1.414z"/>
            </svg>
          
          </button>
          {/* Slider dots */}
          <div className="flex gap-2 justify-center mb-12">
            <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
            <span className="w-2 h-2 rounded-full bg-white/30 inline-block" />
            <span className="w-2 h-2 rounded-full bg-white/30 inline-block" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 text-start justify-center gap-4 lg:gap-6 ">
                      {infoCards.map((item, idx) => {
                        return (
                          <InfoCard
                            title={item.title}
                            description={item.description}
                            key={idx}
                          />
                        );
                      })}
                    </div>
          {/* Info Cards */}
        
        </div>
      </section>

      {/* 2nd Section: Services & Solutions */}
      <ServicesSection />
      <Testimonials />
      <JoinOurTeam />
    </main>
  );
}
