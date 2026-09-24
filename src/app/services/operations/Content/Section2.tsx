import ImageTextBlock from "@/components/ImageTextBlock";
import { operationsCards } from "@/data/service-operations";
import React from "react";

const Section2 = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(217, 229, 251, 1) 0%, #ffff 40%)",
      }}>
      <div className="flex flex-col gap-10 py-20">
        {operationsCards.map((card, index) => (
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
  );
};

export default Section2;
