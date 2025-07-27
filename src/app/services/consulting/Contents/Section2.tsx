import ImageTextBlock from "@/components/ImageTextBlock";
import { consultingCards } from "@/data/service-consulting";
import React from "react";

const Section2 = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(217, 229, 251, 1) 0%, #ffff 40%)",
      }}>
      <div className="flex w-full p-5 pt-20 pb-10 md:pb-28 sm:px-[5%] gap-10">
        <div className="w-full flex flex-col gap-5 sm:gap-10 sm:pl-20 relative">
          {consultingCards.map((card, index) => (
            <ImageTextBlock
              key={card.id}
              index={index}
              imageSrc={card.image.src}
              altText={card.title}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              extraContent={card?.extraContent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
