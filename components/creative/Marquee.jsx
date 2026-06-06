"use client";

const DEFAULT_ITEMS = [
  "React",
  "Node.js",
  "TypeScript",
  "Next.js",
  "MongoDB",
  "PostgreSQL",
  "Tailwind",
  "Framer Motion",
  "UI/UX",
  "REST APIs",
  "Prisma",
  "Vercel",
];

export function Marquee({ items = DEFAULT_ITEMS }) {
  const track = [...items, ...items];

  return (
    <div className="relative -mx-5 sm:-mx-6 overflow-hidden py-1">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-black_01 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-black_01 to-transparent z-10 pointer-events-none" />

      <ul className="flex w-max gap-3 animate-marquee hover:[animation-play-state:paused]">
        {track.map((item, i) => (
          <li
            key={`${item}-${i}`}
            className="shrink-0 px-4 py-2 rounded-full glass font-mono text-xs text-white_02/80 border border-white/[0.04] hover:border-accent/40 hover:text-accent-cyan transition-colors"
          >
            <span className="text-accent/60 mr-2">◆</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
