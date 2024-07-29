import React from "react";
import { Typography } from "../Typography";
import { ListItem } from "../ListItem";
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

export interface ListEntry {
  label: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface ListProps extends VariantProps<typeof listVariants> {
  title?: string;
  items: ListEntry[];
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
