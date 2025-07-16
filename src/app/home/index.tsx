"use client";

import Image from "next/image";
import { useState } from "react";
import ServicesSection from "../ServicesSection";
import Testimonials from "../testimonials";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#0B0F2B] text-white font-sans min-h-screen">
      <Header />

      {/* Hero Section */}
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

      {/* Join Our Team Section */}
      <section className="relative w-full bg-[#F1F8FF] py-20 flex flex-col items-center">
        <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 flex justify-center">
            <img
              src="/assets/images/team-meeting.png"
              alt="Join Our Team"
              className="rounded-[32px] w-[370px] h-[470px] object-cover"
            />
          </div>
          <div className="flex-1 ">
            <div className="bg-white left-[-35%] rounded-4xl shadow-lg px-10 py-10 flex flex-col gap-4 relative">
              <span className="absolute left-8 top-6 text-xs font-semibold text-blue-500 bg-blue-100 rounded-full px-3 py-1">
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
              <button className="bg-yellow-400 text-[#0B0F2B] px-6 py-2 rounded-full font-semibold text-base w-fit hover:bg-yellow-300 transition flex items-center gap-2">
                Join
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
