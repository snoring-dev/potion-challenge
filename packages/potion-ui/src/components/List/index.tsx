import React from "react";
import { Typography } from "../Typography";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib";

const listVariants = cva("w-full mx-auto rounded-xl p-6", {
  variants: {
    variant: {
      default: "bg-white",
      outlined: "border border-gray-200",
      elevated: "shadow-md",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const ListHeader: React.FC<{ title: string }> = ({ title }) => (
  <Typography variant="h3" className="mb-4">
    {title}
  </Typography>
);

interface ListItemProps {
  index: number;
  label: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  useIcon: boolean;
  color?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  index,
  label,
  icon: Icon,
  useIcon,
  color = "#000000",
}) => (
  <li className="flex items-start">
    <div className="w-6 h-6 flex-shrink-0 relative top-1">
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

export interface ListProps extends VariantProps<typeof listVariants> {
  title?: string;
  items: {
    label: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  }[];
  useIcons?: boolean;
  className?: string;
  color?: string;
}

export const List: React.FC<ListProps> = ({
  variant,
  title,
  items,
  useIcons = false,
  className,
  color = "#000000",
}) => {
  return (
    <div className={cn(listVariants({ variant }), className)}>
      {title && <ListHeader title={title} />}
      <ul className="space-y-4">
        {items.map((item, index) => (
          <ListItem
            key={index}
            index={index}
            label={item.label}
            icon={item.icon}
            useIcon={useIcons}
            color={color}
          />
        ))}
      </ul>
    </div>
  );
};
