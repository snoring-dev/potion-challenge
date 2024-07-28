import React, { forwardRef } from "react";
import { Description, Field, Input, Label } from "@headlessui/react";
import { Typography } from "../Typography";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib";

const inputVariants = cva(
  "flex flex-row space-x-2 items-center justify-center bg-white text-ink-50 focus-within:text-ink-300 border rounded-[3px] transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "border-cloud-700 focus-within:border-blue-300 focus-within:shadow-input",
        error:
          "border-red-500 focus-within:border-red-600 focus-within:shadow-input-error",
      },
      size: {
        small: "px-2 py-2 text-sm mt-1 w-full",
        normal: "px-3 py-3 text-base mt-1 w-full",
        large: "px-4 py-4 text-lg mt-1 w-full",
      },
      isDisabled: {
        true: "bg-cloud-300 border-cloud-700 text-ink-50 cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "normal",
    },
  }
);

const iconVariants = cva("", {
  variants: {
    size: {
      small: "w-3 h-3",
      normal: "w-4 h-4",
      large: "w-5 h-5",
    },
  },
  defaultVariants: {
    size: "normal",
  },
});

export interface InputFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  label?: string;
  description?: string;
  errorMessage?: string;
  iconLeft?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconRight?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      className,
      variant,
      size,
      label,
      description,
      errorMessage,
      iconLeft: IconLeft,
      iconRight: IconRight,
      ...props
    },
    ref
  ) => {
    return (
      <Field>
        {label && (
          <Label>
            <Typography className="font-semibold text-base text-ink-700">
              {label}
            </Typography>
          </Label>
        )}
        {description && (
          <Description>
            <Typography variant="small" className="text-ink-100">
              {description}
            </Typography>
          </Description>
        )}
        <div
          className={cn(
            inputVariants({
              variant,
              size,
              className,
              isDisabled: props.disabled,
            })
          )}
        >
          {IconLeft && <IconLeft className={cn(iconVariants({ size }))} />}
          <Input
            {...props}
            ref={ref}
            aria-describedby={
              description
                ? description
                : errorMessage
                  ? errorMessage
                  : undefined
            }
            className="w-full focus:outline-none disabled:bg-transparent disabled:cursor-not-allowed"
          />
          {IconRight && <IconRight className={cn(iconVariants({ size }))} />}
        </div>
        {errorMessage && (
          <Description>
            <Typography variant="small" className="text-red-300">
              {errorMessage}
            </Typography>
          </Description>
        )}
      </Field>
    );
  }
);

InputField.displayName = "InputField";
