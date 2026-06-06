import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2 font-display text-lg sm:text-xl font-semibold text-white_01 tracking-tight"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
      </span>
      <span>
        Lokesh
        <span className="text-white_02/70 group-hover:text-accent transition-colors">
          .dev
        </span>
      </span>
    </Link>
  );
};

export default Logo;
