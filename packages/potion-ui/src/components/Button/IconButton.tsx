import React from "react";
import { BaseButton, ButtonProps } from "./BaseButton";
import { cn } from "../../lib";

export interface IconButtonProps extends Omit<ButtonProps, 'label'> {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const iconButtonVariants = cn(
  "p-2",
  "aspect-square"
);

export const IconButton: React.FC<IconButtonProps> = ({
  className,
  icon: Icon,
  ...props
}) => {
  return (
    <BaseButton
      {...props}
      className={cn(iconButtonVariants, className)}
      iconLeft={Icon}
      label=""
    />
  );
};