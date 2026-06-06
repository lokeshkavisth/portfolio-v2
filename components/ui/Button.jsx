"use client";

import Link from "next/link";
import { cn } from "@/utils/cn";
import { trackEvent } from "@/utils/analytics";
import { buttonvariants } from "./button-variants";

export { buttonvariants } from "./button-variants";

export const Button = ({
  variant,
  size,
  className,
  analyticsEvent,
  analyticsProps,
  onClick,
  href,
  ...props
}) => {
  const handleClick = (e) => {
    if (analyticsEvent) {
      trackEvent(analyticsEvent, analyticsProps);
    }
    onClick?.(e);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      {...props}
      className={cn(buttonvariants({ variant, size }), className)}
    />
  );
};
