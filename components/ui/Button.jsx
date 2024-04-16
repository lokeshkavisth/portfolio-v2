import Link from "next/link";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

const Button = ({ variant, size, className, ...props }) => {
  return (
    <Link
      {...props}
      className={cn(buttonvariants({ variant, size }), className)}
    />
  );
};

const buttonvariants = cva(
  "text-white_01 text-sm transition-all max-w-max font-medium md:text-base flex items-center gap-2 hover:gap-4 min-w-max",
  {
    variants: {
      variant: {
        primary:
          "px-4 py-2 rounded-full border border-black_05 bg-black_04 hover:bg-black_02",
        link: "hover:underline underline-offset-4 decoration-2",
        tag: "bg-red-600 font-light",
        disabled:
          "pointer-events-none px-4 py-2 rounded-full border border-black_05 bg-black_04",
      },
      size: {
        sm: "text-xs max-w-max px-2 py-0.5",
        md: "text-xs max-w-max px-3 py-1",
        lg: "text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);

export default Button;
