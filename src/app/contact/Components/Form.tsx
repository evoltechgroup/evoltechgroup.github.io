"use client";
import { mailIcon } from "@/assets/svg";
import Button from "@/components/Button";
import { motion, AnimatePresence } from "framer-motion";
import { CircleChevronRight } from "lucide-react";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  // Flip animation variants
  const flipVariants = {
    initial: {
      rotateY: 180,
      opacity: 0,
    },
    animate: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    exit: {
      rotateY: -180,
      opacity: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Capitalize helper
  const capitalizeName = (name: string) =>
    name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <div className="w-full max-w-md p-6 perspective">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            variants={flipVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-4 backface-hidden">
            {["name", "email", "company", "message"].map((field) => (
              <div key={field} className="flex flex-col">
                <label
                  htmlFor={field}
                  className="mb-1 font-medium text-gray-700 capitalize">
                  {field}
                </label>
                {field === "message" ? (
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="px-4 py-2 border resize-none bg-white shadow rounded focus:outline-none focus:border-[#78B5EA] focus:shadow-[0_0_8px_#CAE6FFE5]"
                  />
                ) : (
                  <input
                    id={field}
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    required={field !== "company"}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    className="px-4 py-2 border bg-white shadow rounded focus:outline-none focus:border-[#78B5EA] focus:shadow-[0_0_8px_#CAE6FFE5]"
                  />
                )}
              </div>
            ))}

            <div className="w-full mt-4 flex items-center justify-center sm:justify-start text-black">
              <Button className="w-fit gap-2 items-center cursor-pointer justify-center sm:justify-start pr-2 pl-6 py-2 flex bg-[#FFBB00] rounded-full text-sm">
                <span className="font-semibold text-center">Send</span>
                <span>
                  <CircleChevronRight size={18} />
                </span>
              </Button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="thankyou"
            variants={flipVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-transparent  flex flex-col items-center -mt-10 justify-center p-6 pt-0 rounded-lg text-center space-y-2 backface-hidden">
            <div>{mailIcon}</div>
            <h2 className="text-3xl font-bold text-black">
              Thank you, {capitalizeName(formData.name)}!
            </h2>
            <p className="text-[#212121] text-sm">
              Your message sent successfully. <br />
              We’ll get back to you soon!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Form;
