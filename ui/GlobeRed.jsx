"use client";

export default function GlobeRed({ size = 512, className = "" }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="redGradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#880000" />
          <stop offset="100%" stopColor="#ff0d13" />
        </linearGradient>
      </defs>
      {/* Circle globe (no map, no stylization) */}
      <circle cx="512" cy="512" r="480" fill="url(#redGradient)" />
    </svg>
  );
}
