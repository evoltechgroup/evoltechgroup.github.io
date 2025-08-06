"use client";
import React from "react";
import { motion } from "framer-motion";

interface ImageTextBlockProps {
  imageSrc: string;
  altText?: string;
  title: string;
  subtitle: string;
  description: string[];
  extraContent?: React.ReactNode;
  index?: number;
}

const ImageTextBlock: React.FC<ImageTextBlockProps> = ({
  imageSrc,
  altText = "",
  title,
  subtitle,
  description,
  extraContent,
  index = 0,
}) => {
  return (
    <motion.div
      className="flex flex-col w-full"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}>
      <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 xl:grid-cols-12 grid-rows-1 gap-4 max-w-7xl mx-auto px-4 lg:px-0">
        <motion.div
          className="col-span-4 lg:col-start-2"
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.7,
            delay: index * 0.1 + 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}>
          <div className="rounded-3xl w-full h-full overflow-hidden">
            <div className="relative">
              <motion.img
                src={imageSrc}
                alt={altText}
                className="w-full lg:w-[420px] h-[240px] lg:h-[275px] object-cover"
                style={{
                  borderRadius: "48px",
                }}
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.1 + 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              />
              <motion.div
                style={{
                  mixBlendMode: "plus-lighter",
                  boxShadow:
                    "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
                }}
                className="absolute inset-0 bg-gradient-to-b from-[#190670] to-[#1B0A41] opacity-100 pointer-events-none rounded-[48px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1 + 0.5,
                }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="col-span-4 lg:col-span-6 md:col-span-7 md:col-start-6 mt-6 md:mt-0 md:pl-10 flex flex-col space-y-4 items-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.7,
            delay: index * 0.1 + 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1 + 0.4,
            }}>
            <h2 className="text-2xl font-bold text-black">{title}</h2>
            <h4 className="text-lg font-semibold max-w-dvh text-[#333333]">
              {subtitle}
            </h4>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1 + 0.5,
            }}>
            {description.map((paragraph, idx) => (
              <motion.p
                key={idx}
                className="text-gray-700 leading-relaxed max-w-[590px] font-medium text-base"
                dangerouslySetInnerHTML={{ __html: paragraph }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.6 + idx * 0.1,
                }}
              />
            ))}
          </motion.div>

          {extraContent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1 + 0.7,
              }}>
              {extraContent}
            </motion.div>
          )}
        </motion.div>
      </div>

      <div className="block md:hidden">
        <motion.div
          className="w-full mt-6 h-[2px] border-t-2 border-dotted"
          style={{ borderColor: "rgba(170, 170, 170, 1)" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: index * 0.1 + 0.8,
          }}
        />
      </div>
    </motion.div>
  );
};

export default ImageTextBlock;
