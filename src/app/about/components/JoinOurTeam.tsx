"use client";
import { CircleChevronRight } from "lucide-react";
import Button from "@/components/Button";
import {
  leftRing,
  rightRing,
  testimonialBottom,
  topRing,
} from "@/assets/effects";
import { JoinOurTeamImg } from "@/assets/images";
import { useRouter } from "next/navigation";
import { followArrowDownV2 } from "@/assets/svg";

const JoinOurTeam = () => {
  const router = useRouter();
  return (
    <section
      className="relative flex flex-col items-center justify-center w-full h-full mx-auto overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to bottom, #FFFFFF 0%, #F1F8FF 50%)",
      }}>
      <div className="absolute hidden sm:flex inset-0 z-0 pointer-events-none w-full h-full justify-between bg-blend-soft-light opacity-50">
        <div className="w-fit h-fit absolute left-0 top -0 opacity-15">
          {testimonialBottom}
        </div>
      </div>
      <div className="lg:max-w-6xl w-full h-full flex flex-col lg:flex-row items-center lg:ml-20 pt-20 justify-center">
        <div className="px-5 md:px-0 md:p-0  w-full">
          <div className="w-full md:w-fit h-80 lg:h-[620px] mx-auto rounded-[48px] overflow-hidden relative">
            <img
              src={JoinOurTeamImg.src}
              alt="TeamMeeting"
              className="w-full h-[28rem] lg:h-full rounded-[48px] object-cover md:object-contain -translate-y-[50px] md:-translate-y-[100px]"
              height={620}
              width={500}
              style={{
                willChange: "transform",
                borderRadius: "48px",
              }}
            />
          </div>
        </div>
        <div className="flex-1 -mt-15 lg:mt-0 p-8  pt-0 md:p-0">
          <div
            className="bg-white overflow-hidden w-full md:w-xl  lg:left-[-25%] p-10 lg:p-12 mb-20 rounded-[64px] shadow-xl md:px-15 md:py-15 flex flex-col gap-4 relative"
            style={{
              backgroundImage:
                "linear-gradient(to left, rgba(217, 229, 251, 1) 0%, #ffff 100%)",
            }}>
            <div className="relative w-full h-full z-2 ">
              <div className="flex items-center gap-1 mb-1">
                <span className="left-8 top-6 text-sm font-medium text-[#000000] bg-[#BCE0FF] rounded-full px-3 py-1">
                  Career
                </span>
                <div className="hidden md:flex text-[#FFBB00] justify-start ">
                  <span className="transform   translate-y-[4px] block">
                    {followArrowDownV2}
                  </span>
                </div>
              </div>
              <h2 className="text-4xl font-bold text-[#0B0F2B] mb-2 mt-2">
                Join Our Team
              </h2>
              <div className="text-lg font-medium text-[#0B0F2B] mb-2">
                Shape the future with EvolTech.
              </div>
              <p className="text-[#222] text-base mb-4">
                At EvolTech, we're pioneering technology and operations
                globally. Join our team in the US and India to work on
                cutting-edge projects in tech development and hybrid captive
                support.
              </p>
              <div className="w-full mt-4 flex items-center justify-center sm:justify-start text-black">
                <Button
                  onClick={() => router.push("/careers")}
                  className="w-fit gap-2 items-center cursor-pointer justify-center sm:justify-start pr-2 pl-6 py-2 flex  bg-[#FFBB00] rounded-full text-sm">
                  <span className="font-semibold text-center">Join</span>
                  <span>
                    <CircleChevronRight size={18} />
                  </span>
                </Button>
              </div>
            </div>
            <div className="w-full h-full opacity-70">
              <div className="absolute bottom-0 -left-5 z-1 w-full h-fit">
                <div>{leftRing}</div>
              </div>
              <div className="absolute right-0 top-0 z-1">
                <div>{topRing}</div>
              </div>
              <div className="absolute right-0 top-20 z-1">
                <div>{rightRing}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurTeam;
