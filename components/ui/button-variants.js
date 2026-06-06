import { cva } from "class-variance-authority";

export const buttonvariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 max-w-max",
  {
    variants: {
      variant: {
        primary:
          "px-5 py-2.5 rounded-full text-white_01 bg-gradient-to-r from-accent/90 to-accent-violet/90 hover:from-accent hover:to-accent-violet shadow-glow hover:shadow-[0_0_48px_-6px_rgba(129,140,248,0.5)] hover:gap-3 text-sm md:text-base",
        secondary:
          "px-5 py-2.5 rounded-full text-white_01 glass hover:border-accent/40 hover:gap-3 text-sm md:text-base",
        link: "text-accent-cyan hover:text-white_01 underline-offset-4 decoration-accent/50 hover:underline text-sm md:text-base gap-2 hover:gap-3",
        ghost:
          "px-4 py-2 rounded-full text-white_02 hover:text-white_01 hover:bg-black_02 text-sm",
        disabled:
          "pointer-events-none px-5 py-2.5 rounded-full glass opacity-50 text-sm",
      },
      size: {
        sm: "text-xs px-3 py-1.5",
        md: "text-sm px-4 py-2",
        lg: "text-base px-5 py-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);
