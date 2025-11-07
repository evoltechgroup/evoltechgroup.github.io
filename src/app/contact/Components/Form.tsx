"use client";
import React, { useState, useEffect, useRef } from "react";
import { mailIcon } from "@/assets/svg";
import Button from "@/components/Button";
import { motion, AnimatePresence } from "framer-motion";
import { CircleChevronRight, RotateCcw } from "lucide-react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";
import emailjsInit from "@emailjs/browser";

const Form = () => {
  const router = useRouter();
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    source: "",
    website: "",
  });

  const [formSource, setFormSource] = useState("EvolTech");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const source = params.get("source");
    if (source) {
      setFormSource(source);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.website) {
      return;
    }

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      alert("Please verify that you are not a robot.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || "Not specified",
          message: formData.message,
          time: new Date().toLocaleString(),
          source: formSource,
          "g-recaptcha-response": token,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSubmitted(true);

      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("Email send error:", error);
      alert("Something went wrong. Please try again.");
      recaptchaRef.current?.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const capitalizeName = (name: string) =>
    name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  useEffect(() => {
    emailjsInit.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      limitRate: {
        id: "app",
        throttle: 5000,
      },
    });
  }, []);

  return (
    <div className="w-full lg:max-w-md p-6 perspective">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            variants={flipVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="space-y-4 backface-hidden"
          >
            {["name", "email", "company", "message"].map((field) => (
              <div key={field} className="flex flex-col">
                <label
                  htmlFor={field}
                  className="mb-1 font-medium text-gray-700 capitalize"
                >
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

            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              style={{
                display: "none",
              }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="mt-4  flex justify-center sm:justify-start">
              <div className="transform origin-center  lg:origin-left scale-[0.87] lg:scale-100">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  ref={recaptchaRef}
                  theme="light"
                />
              </div>
            </div>

            <div className="w-full mt-4 flex items-center justify-center sm:justify-start text-black">
              <Button
                disabled={isSubmitting}
                className={`w-fit gap-2 items-center cursor-pointer justify-center sm:justify-start pr-2 pl-6 py-2 flex rounded-full text-sm ${
                  isSubmitting ? "bg-gray-400" : "bg-[#FFBB00]"
                }`}
              >
                <span className="font-semibold text-center">
                  {isSubmitting ? "Sending..." : "Send"}
                </span>
                <span>
                  {isSubmitting ? (
                    <RotateCcw size={18} className="animate-spin" />
                  ) : (
                    <CircleChevronRight size={18} />
                  )}
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
            className="bg-transparent flex flex-col items-center -mt-10 justify-center p-6 pt-0 rounded-lg text-center space-y-2 backface-hidden"
          >
            <div>{mailIcon}</div>
            <h2 className="text-3xl font-bold text-black">
              Thank you, {capitalizeName(formData.name)}!
            </h2>
            <p className="text-[#212121] text-sm">
              Your message sent successfully. <br />
              We'll get back to you soon!
            </p>
            <button
              onClick={() => router.push("/")}
              className="w-fit gap-2 items-center cursor-pointer justify-center sm:justify-start pr-2 pl-6 py-2 flex bg-[#FFBB00] rounded-full text-sm"
            >
              <span className="font-semibold text-center">
                Continue exploring....
              </span>
              <span>
                <CircleChevronRight size={18} />
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Form;
