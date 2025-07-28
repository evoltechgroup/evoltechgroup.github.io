"use client";
import { TabButton } from "@/components/services/tabButton";
import React, { useState } from "react";
import Fiveoak from "../Clients/Fiveoak";
import Reinnova from "../Clients/Reinnova";
import LetsGrow from "@/app/services/components/LetsGrow";

const clientTab = [
  { id: 1, key: "fiveoak", label: "Fiveoak" },
  { id: 2, key: "reinnova", label: "Reinnova" },
];

const Section2 = () => {
  const [activeTab, setActiveTab] = useState<string>("fiveoak");
  return (
    <section
      className="w-full h-full"
      style={{
        backgroundImage: "linear-gradient(to bottom, #D9E5FB 0%, #FFFFFF 30%)",
      }}>
      <div className="flex flex-col justify-center items-center p-5 md:p-10 md:pt-25">
        <div className="mt-4 md:mt-0 flex gap-[10px] max-w-[241px]  mb-10 bg-[#58619D] rounded-full p-1 shadow-md overflow-x-hidden">
          {clientTab.map((s) => (
            <TabButton
              key={s.id}
              label={s.label}
              tabKey={s.key}
              activeTab={activeTab}
              onSelect={setActiveTab}
            />
          ))}
        </div>
        {activeTab === "fiveoak" ? <Fiveoak /> : <Reinnova />}
      </div>
      <div className="mt-10">
        {activeTab === "fiveoak" ? (
          <LetsGrow
            description={
              <>
                Sign up Fiveoak today! Boost Online Reviews Attract More
                <br />
                Patients and Rank Higher in Search Results
              </>
            }
            text={"Book a Demo"}
            url="https://fiveoak.com/"
          />
        ) : (
          <LetsGrow
            description={"Reach us to start powering your business today!"}
            text={"Book a Demo"}
          />
        )}
      </div>
    </section>
  );
};

export default Section2;
