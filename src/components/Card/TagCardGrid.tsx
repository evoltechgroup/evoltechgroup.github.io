// components/TagCardGridSection.tsx
import React from "react";
import CardWithChip from "./CardWithChip";

interface TagCard {
  id: number;
  title: string;
  description: string;
  bgColor: string;
}

interface TagCardGridSectionProps {
  title?: string;
  subtitle?: string;
  cards: TagCard[];
}

const TagCardGridSection: React.FC<TagCardGridSectionProps> = ({
  title,
  subtitle,
  cards,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        {title && <h3 className="text-xl font-bold text-black">{title}</h3>}
        {subtitle && <p className="text-lg text-[#333333]">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 justify-center">
        {cards.map((card) => (
          <CardWithChip
            id={card.id}
            title={card.title}
            description={card.description}
            bgColor={card.bgColor}
            key={card.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TagCardGridSection;
