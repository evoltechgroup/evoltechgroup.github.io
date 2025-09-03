"use client";
import { useEffect } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // lock scroll
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-full max-w-3xl  rounded-2xl   max-h-[90vh]">
        {/* <button
          onClick={onClose}
          className="absolute top-6 right-12 z-10 font-bold text-[#F47937] bg-[#FFFFFF] rounded-2xl px-3 py-2 hover:text-[#ef6b24] cursor-pointer"
        >
          ✕
        </button> */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
 