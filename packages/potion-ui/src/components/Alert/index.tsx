import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib";
import { Typography } from "../Typography";
import { Button } from "../Button";

const alertVariants = cva(
  "flex gap-2 text-sm rounded border border-solid backdrop-blur-sm relative overflow-hidden",
  {
    variants: {
      variant: {
        success: "bg-stone-100 border-green-600 border-opacity-10",
        error: "bg-red-50 border-red-600 border-opacity-10",
        warning: "bg-yellow-50 border-yellow-600 border-opacity-10",
        info: "bg-blue-50 border-blue-600 border-opacity-10",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  }
);

const stripVariants = cva("shrink-0 absolute top-0 bottom-0 w-[4px]", {
  variants: {
    variant: {
      success: "bg-green-600",
      error: "bg-red-600",
      warning: "bg-yellow-600",
      info: "bg-blue-600",
    },
  },
  defaultVariants: {
    variant: "success",
  },
});

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title: string;
  description: React.ReactNode;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  richText?: boolean;
}

export const Alert: React.FC<AlertProps> = ({
  className,
  variant,
  title,
  description,
  icon: Icon,
  primaryAction,
  secondaryAction,
  richText = false,
  ...props
}) => {
  return (
    <div className={cn(alertVariants({ variant, className }))} {...props}>
      <div className={stripVariants({ variant })} />
      <div className="flex flex-1 gap-2 pl-4 pt-3 pr-3 pb-4 max-md:flex-wrap">
        {Icon && <Icon className="shrink-0 self-start w-5 h-5" />}
        <div className="flex flex-col flex-1 max-md:max-w-full">
          <Typography variant="h4" className="font-bold text-zinc-800">
            {title}
          </Typography>
          {richText ? (
            description
          ) : (
            <Typography className="mt-1 text-zinc-800">
              {description}
            </Typography>
          )}
          {(primaryAction || secondaryAction) && (
            <div className="flex gap-2 mt-3">
              {primaryAction && (
                <Button
                  size="small"
                  variant={
                    variant === "success"
                      ? "success"
                      : variant === "error"
                        ? "danger"
                        : variant === "warning"
                          ? "warning"
                          : "info"
                  }
                  onClick={primaryAction.onClick}
                  label={primaryAction.label}
                />
              )}
              {secondaryAction && (
                <Button
                  size="small"
                  variant="secondary"
                  onClick={secondaryAction.onClick}
                  label={secondaryAction.label}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
