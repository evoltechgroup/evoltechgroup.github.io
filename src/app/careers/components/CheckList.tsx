import { CheckCircle } from "@/assets/svg";
import React from "react";

interface CheckListItems {
  id: number;
  title: string;
  description: string[];
  bgColor: string;
}

const CheckList: React.FC<CheckListItems> = ({ id, title, description }) => {
  return (
    <div
      key={id}
      className="flex justify-start gap-4 lg:gap-2 max-w-[290px] w-full mx-auto">
      <div className="flex items-start md:mt-2 gap-2">
        <div>{CheckCircle}</div>
      </div>
      <div>
        <div className="p-0 lg:p-1.5 w-fit flex font-semibold text-black text-base">
          {title}
        </div>
        <p className="p-0 lg:p-1.5 text-sm text-[#444444] font-medium max-w-[280px]">
          {description.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default CheckList;
