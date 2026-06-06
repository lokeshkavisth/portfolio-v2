"use client";

import { IoMail, IoTimeOutline, IoGlobeOutline, IoLogoWhatsapp } from "react-icons/io5";
import { trackEvent } from "@/utils/analytics";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

const trustSignals = [
  {
    icon: IoTimeOutline,
    label: "Response time",
    value: "Within 24 hours",
  },
  {
    icon: IoGlobeOutline,
    label: "Timezone",
    value: "IST (GMT+5:30) · Remote worldwide",
  },
  {
    icon: IoMail,
    label: "Direct email",
    value: "lokeshkavisth.dev@gmail.com",
    href: "mailto:lokeshkavisth.dev@gmail.com",
  },
];

export function ContactTrustStrip() {
  const signals = whatsappNumber
    ? [
        ...trustSignals,
        {
          icon: IoLogoWhatsapp,
          label: "WhatsApp",
          value: "Quick chat available",
          href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            "Hi Lokesh, I'd like to discuss a website project for my business."
          )}`,
          external: true,
        },
      ]
    : trustSignals;

  return (
    <ul className={`grid gap-4 ${signals.length > 3 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3"}`}>
      {signals.map(({ icon: Icon, label, value, href, external }) => {
        const content = (
          <>
            <Icon className="text-accent-cyan text-xl shrink-0 mt-0.5" />
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wide text-white_02/50">
                {label}
              </p>
              <p className="text-sm text-white_01 mt-0.5">{value}</p>
            </div>
          </>
        );

        return (
          <li key={label}>
            {href ? (
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                onClick={() =>
                  external &&
                  trackEvent("whatsapp_click", { location: "contact_page" })
                }
                className="glass rounded-xl p-4 flex items-start gap-3 hover:border-accent/30 transition-colors h-full"
              >
                {content}
              </a>
            ) : (
              <div className="glass rounded-xl p-4 flex items-start gap-3 h-full">
                {content}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
