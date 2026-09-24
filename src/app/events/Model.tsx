"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          
          <motion.div
            className="absolute inset-0 "
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

         
          <motion.div
            className="relative w-full max-w-3xl rounded-2xl max-h-[90vh] "
            initial={{ y: -300, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -300, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="p-1 ">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
