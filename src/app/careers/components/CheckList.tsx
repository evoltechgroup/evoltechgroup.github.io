import { CheckCircle } from "@/assets/svg";
import React from "react";

interface CheckListItems {
    id: number;
    title: string;
    description: string[];
    bgColor: string;
}

const CheckList: React.FC<CheckListItems> = ({
    id,
    title,
    description,
}) => {
    return (
        <div key={id} className="flex flex-col gap-1 lg:gap-2 max-w-[290px] w-full mx-auto">
            <div className="flex items-center gap-2">
                <div>
                    {CheckCircle}
                </div>
                <div className="p-0 lg:p-1.5 w-fit flex font-semibold text-black text-base">
                    {title}
                </div>
            </div>
            <p className="p-0 lg:p-1.5 text-sm text-[#444444] font-medium max-w-[280px]">
                {description.join(", ")}
            </p>
        </div>
    );
};

export default CheckList;
