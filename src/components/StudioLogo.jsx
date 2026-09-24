import React from 'react';

/**
 * StudioLogo - Recreates the signature "Newlook PHOTO STUDIO" logo
 * with the dramatic sweeping upper loop, handwritten script, and spaced modern sub-header.
 */
export default function StudioLogo({ className = 'h-14', color = 'currentColor', badge = false }) {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 420 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full"
        aria-label="Newlook Photo Studio"
      >
        {/* Dynamic sweeping signature loop arc */}
        <path
          d="M 40 98 Q 230 45 260 55 C 285 64 275 105 230 115 C 205 120 185 105 195 85 L 235 55"
          stroke={color}
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-95"
        />

        {/* Large sweeping diagonal flourish from left to top right */}
        <path
          d="M 42 98 L 245 56 C 275 50 282 85 240 120 L 165 175"
          stroke={color}
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Horizontal dividing crossing stroke */}
        <line
          x1="38"
          y1="98"
          x2="350"
          y2="98"
          stroke={color}
          strokeWidth="2.8"
          strokeLinecap="round"
          className="opacity-90"
        />

        {/* Calligraphic Signature "Newlook" text */}
        <text
          x="220"
          y="108"
          fontFamily="'Alex Brush', 'Playfair Display', cursive"
          fontSize="72"
          fontWeight="400"
          fontStyle="italic"
          fill={color}
          letterSpacing="0.04em"
        >
          Newlook
        </text>

        {/* Clean Spaced Modern Sub-header: P H O T O   S T U D I O */}
        <text
          x="44"
          y="136"
          fontFamily="'Montserrat', 'Inter', sans-serif"
          fontSize="17"
          fontWeight="400"
          fill={color}
          letterSpacing="0.48em"
          className="uppercase"
        >
          PHOTO STUDIO
        </text>
      </svg>
    </div>
  );
}
