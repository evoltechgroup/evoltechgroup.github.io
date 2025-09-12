"use client";
import { useState, useEffect } from "react";
import Section1 from "./Content/Section1";
import Section2 from "./Content/Section2";
import Section3 from "./Content/Section3";
import LetsGrow from "@/app/services/components/LetsGrow";
import Testimonials from "@/app/ui/Testimonials";
import Modal from "@/app/events/Model";
import SiiaPopup from "@/app/events/Popup/Siia";

const Operations = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Auto-open ATEA popup when page loads
    setOpen(true);
  }, []);
  const handleClose = () => setOpen(false);

  return (
    <main className="overflow-hidden w-full h-full">
      <Section1 />
      <Section2 />
      <Section3 />
      <LetsGrow
        description={
          <>
            Transform your back office operations with EvolTech’s innovative and
            efficient solutions. Let us handle the details so you can focus on
            what matters most—growing your business. 
          </>
        }
      />
      <Testimonials type="operations" />
      <Modal open={open} onClose={handleClose}>
        <SiiaPopup onClose={handleClose} />
      </Modal>
    </main>
  );
};

export default Operations;
