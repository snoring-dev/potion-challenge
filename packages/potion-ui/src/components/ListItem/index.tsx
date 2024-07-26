import React from "react";
import { Typography } from "../Typography";

interface ListItemProps {
  index: number;
  label: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  useIcon: boolean;
  color?: string;
}

export const ListItem: React.FC<ListItemProps> = ({
  index,
  label,
  icon: Icon,
  useIcon,
  color = "#000000",
}) => (
  <li className="flex items-start">
    <div className="w-6 h-6 flex-shrink-0">
      {useIcon && Icon ? (
        <Icon color={color} className="w-full h-full" />
      ) : (
        <div
          style={{ backgroundColor: color }}
          className="w-full h-full flex items-center justify-center text-white text-sm"
        >
          {index + 1}
        </div>
      )}
    </div>
    <div className="w-full max-w-md ml-2">
      <Typography>{label}</Typography>
    </div>
  </li>
);
