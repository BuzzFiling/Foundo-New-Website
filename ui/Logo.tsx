import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  /** Pixel size for the square logo icon (default 32) */
  size?: number;
  /** Optional additional classes for the wrapper */
  className?: string;
  /** Show brand text next to the icon */
  showText?: boolean;
  /** Brand name (used when showText is true) */
  brand?: string;
};

export default function Logo({
  size = 200,
  className = "",
  showText = true,
  brand = "Incorz",
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${brand} — go to homepage`}
      className={`inline-flex items-center gap-2 select-none ${className}`}
    >
      {/* Light mode logo */}
      <Image
        src="/images/Logo.svg"
        alt={`${brand} logo`}
        width={size}
        height={size}
        priority
        className="dark:hidden"
      />
      {/* Dark mode logo */}
      <Image
        src="/images/Logo.svg"
        alt={`${brand} logo`}
        width={size}
        height={size}
        priority
        className="hidden dark:block"
      />

      {showText && (
        <span className="hidden sm:inline font-semibold tracking-tight">
          {brand}
        </span>
      )}
    </Link>
  );
}
