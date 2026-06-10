import React, { useId } from 'react';

// Rotating circular text badge ("OPEN TO WORK • LET'S TALK •") with an
// arbitrary centerpiece. Pure SVG textPath + CSS rotation.
const OrbitBadge = ({
  text = "OPEN TO WORK • LET'S TALK • OPEN TO WORK • LET'S TALK •",
  className = '',
  children,
}) => {
  const pathId = useId();
  return (
    <div className={`relative ${className}`} aria-hidden>
      <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slower">
        <defs>
          <path
            id={pathId}
            d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
          />
        </defs>
        <text
          fill="currentColor"
          fontSize="8"
          fontWeight="700"
          letterSpacing="1.6"
        >
          <textPath href={`#${pathId}`}>{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default OrbitBadge;
