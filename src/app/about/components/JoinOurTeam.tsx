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

const JoinOurTeam = () => {
  const router = useRouter();
  return (
    <section
      className="relative flex flex-col items-center justify-center w-full h-screen mx-auto"
      style={{
        backgroundImage: "linear-gradient(to bottom, #FFFFFF 0%, #F1F8FF 50%)",
      }}>
      <div className="absolute hidden sm:flex inset-0 z-0 pointer-events-none w-full h-full justify-between bg-blend-soft-light opacity-50">
        <div className="w-fit h-fit absolute left-0 top -0 opacity-15">
          {testimonialBottom}
        </div>
      </div>
      <div className="max-w-6xl max-h-5xl w-full h-full flex flex-col md:flex-row items-center ml-20 pt-20 justify-center">
        <div className="max-w-[500] max-h-full border relative rounded-[48px] overflow-hidden border-white">
          <img
            src={JoinOurTeamImg.src}
            alt={"TeamMetting"}
            className={`w-full h-full rounded-[48px] relative -translate-y-[100px] `}
            height={620}
            width={500}
          />
        </div>
        <div className="flex-1">
          <div
            className="bg-white overflow-hidden w-2xl left-[-15%] p-30 mb-20 rounded-4xl shadow-lg px-15 py-15 flex flex-col gap-4 relative"
            style={{
              backgroundImage:
                "linear-gradient(to left, rgba(217, 229, 251, 1) 0%, #ffff 100%)",
            }}>
            <div className="relative w-full h-full z-2">
              <span className="left-8 top-6 text-xs font-semibold text-blue-500 bg-blue-100 rounded-full px-3 py-1">
                Career
              </span>
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
                  onClick={() => router.push("/career")}
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
