import React from "react";
import { Description, Field, Textarea, Label } from "@headlessui/react";
import { Typography } from "../Typography";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib";

const textareaVariants = cva(
  "flex flex-col bg-white text-ink-50 focus-within:text-ink-300 border rounded-[3px] transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "border-cloud-700 focus-within:border-blue-300 focus-within:shadow-input",
        error:
          "border-red-500 focus-within:border-red-600 focus-within:shadow-input-error",
      },
      size: {
        small: "text-sm mt-1 w-full",
        normal: "text-base mt-1 w-full",
        large: "text-lg mt-1 w-full",
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

export interface TextFieldProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    VariantProps<typeof textareaVariants> {
  label?: string;
  description?: string;
  errorMessage?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  className,
  variant,
  size,
  label,
  description,
  errorMessage,
  ...props
}) => {
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
          textareaVariants({
            variant,
            size,
            className,
            isDisabled: props.disabled,
          })
        )}
      >
        <Textarea
          {...props}
          aria-describedby={
            description ? description : errorMessage ? errorMessage : undefined
          }
          className={cn(
            "w-full focus:outline-none disabled:bg-transparent disabled:cursor-not-allowed resize-none",
            size === "small"
              ? "px-2 py-2"
              : size === "large"
                ? "px-4 py-4"
                : "px-3 py-3"
          )}
        />
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
};
