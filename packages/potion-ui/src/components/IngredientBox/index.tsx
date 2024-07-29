import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Typography } from "../Typography";
import { cn } from "@/lib";

export interface IngredientBoxProps {
  id?: string | number;
  title: string;
  description?: string;
  onChange?: (checked: boolean, id: string | number | undefined) => void;
  checked?: boolean;
}

export const IngredientBox: React.FC<IngredientBoxProps> = ({
  title,
  description,
  onChange,
  checked = false,
  id,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(newCheckedState, id);
    }
  };

  return (
    <div
      className={cn(
        `${isChecked ? "border-blue-300" : "border-cloud-300"}`,
        "bg-cloud-50 border-2 flex flex-row rounded-md p-2 items-start justify-start space-x-2 w-fit hover:shadow-sm hover:border-cloud-400 transition-all duration-300 cursor-pointer"
      )}
      onClick={handleToggle}
    >
      <div
        className={cn(
          `${isChecked ? "bg-blue-300 text-white" : "bg-white text-transparent"}`,
          "border border-white-active w-6 h-6 flex items-center justify-center"
        )}
      >
        <FaCheck />
      </div>
      <div className="flex flex-col pr-5">
        <Typography className="font-semibold">{title}</Typography>
        <Typography variant="small" className="font-light text-ink-50">
          {description ?? ""}
        </Typography>
      </div>
    </div>
  );
};
