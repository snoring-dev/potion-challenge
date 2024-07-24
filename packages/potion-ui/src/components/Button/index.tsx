import React from "react";
import { Typography } from "../Typography";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib";

const buttonVariants = cva(
  "flex flex-row space-x-2 items-center justify-center rounded-[3px] transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "text-white bg-product-300 hover:bg-product-400 active:bg-product-500",
      },
      size: {
        default: "px-4 py-3",
        small: "px-3 py-2",
        large: "px-6 py-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const iconVariants = cva("", {
  variants: {
    size: {
      small: "w-3 h-3",
      default: "w-4 h-4",
      large: "w-5 h-5",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const labelVariants = cva("font-normal", {
  variants: {
    size: {
      small: "text-sm",
      default: "text-base",
      large: "text-lg",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label: string;
  iconLeft?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconRight?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  label,
  iconLeft: IconLeft,
  iconRight: IconRight,
  onClick,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {IconLeft && <IconLeft className={cn(iconVariants({ size }))} />}
      <Typography className={cn(labelVariants({ size }))}>{label}</Typography>
      {IconRight && <IconRight className={cn(iconVariants({ size }))} />}
    </button>
  );
};
