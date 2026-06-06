"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonvariants } from "./ui/button-variants";
import { cn } from "@/utils/cn";
import { HiArrowUpRight } from "react-icons/hi2";
import { trackEvent } from "@/utils/analytics";

export function StickyCTA() {
  const pathname = usePathname();

  if (pathname === "/contact") return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-4 md:hidden pointer-events-none">
      <Link
        href="/contact"
        onClick={() => trackEvent("contact_cta_click", { location: "sticky_mobile" })}
        className={cn(
          buttonvariants({ variant: "primary" }),
          "w-full justify-center shadow-glow pointer-events-auto py-3.5"
        )}
      >
        Start a project
        <HiArrowUpRight />
      </Link>
    </div>
  );
}
