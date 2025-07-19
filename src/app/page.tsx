"use client";
import JoinOurTeam from "./about/components/JoinOurTeam";
import ServicesSection from "./ServicesSection";
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
        <div className="relative z-10 flex flex-col items-center w-full pt-32">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Build. <span className="">Scale.</span> Succeed.
          </h1>
          <p className="mb-8 text-base md:text-lg max-w-xl text-center text-white/90">
            We bring visionary ideas to life with cutting-edge tech, strategic
            consulting, and seamless back office solutions.
            <br />
            Our 50+ experts in full-stack, AI, and cloud computing build
            innovative apps and deliver operational excellence to fuel your
            growth and efficiency.
          </p>
          <button className="bg-yellow-400 text-[#0B0F2B] px-7 py-2 rounded-full font-semibold hover:bg-yellow-300 transition flex items-center gap-2 mx-auto mb-12">
            Discover more
            <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
              <path
                d="M9 3v12M9 15l6-6M9 15l-6-6"
                stroke="#0B0F2B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* Slider dots */}
          <div className="flex gap-2 justify-center mb-12">
            <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
            <span className="w-2 h-2 rounded-full bg-white/30 inline-block" />
            <span className="w-2 h-2 rounded-full bg-white/30 inline-block" />
          </div>
          {/* Info Cards */}
          <div className="flex  justify-center gap-6 w-full max-w-3xl">
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 min-w-[180px]">
              <div className="font-semibold text-white mb-1">Experience</div>
              <div className="text-xs text-white/80">
                10+ years delivering innovative tech solutions.
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 min-w-[180px]">
              <div className="font-semibold text-white mb-1">Team</div>
              <div className="text-xs text-white/80">
                55% women powering our global workforce.
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 min-w-[180px]">
              <div className="font-semibold text-white mb-1">Leadership</div>
              <div className="text-xs text-white/80">
                25+ years in Banking & Fintech expertise.
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 min-w-[180px]">
              <div className="font-semibold text-white mb-1">Global Reach</div>
              <div className="text-xs text-white/80">
                US & India offices supporting 24/7 operations.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd Section: Services & Solutions */}
      <ServicesSection />
      <Testimonials />
      <JoinOurTeam />
    </main>
  );
}
