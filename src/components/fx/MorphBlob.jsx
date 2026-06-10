import React, { useEffect, useId, useMemo, useRef } from 'react';
import { createTimeline, svg } from 'animejs';

// Organic gradient blob that endlessly morphs between generated shapes via
// anime.js SVG morphing. Shapes share a point count so the morph is smooth.

// Deterministic PRNG so every blob with the same seed renders identically.
const mulberry32 = (seed) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// Closed Catmull-Rom spline through N radial points → cubic bezier path.
const blobPath = (rand, pointCount = 8, variance = 0.16) => {
  const pts = [];
  for (let i = 0; i < pointCount; i += 1) {
    const angle = (i / pointCount) * Math.PI * 2;
    const radius = 78 * (1 - variance + rand() * variance * 2);
    pts.push([100 + Math.cos(angle) * radius, 100 + Math.sin(angle) * radius]);
  }
  const n = pts.length;
  let d = `M ${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)} `;
  for (let i = 0; i < n; i += 1) {
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    d += `C ${(p1[0] + (p2[0] - p0[0]) / 6).toFixed(2)} ${(p1[1] + (p2[1] - p0[1]) / 6).toFixed(2)} `;
    d += `${(p2[0] - (p3[0] - p1[0]) / 6).toFixed(2)} ${(p2[1] - (p3[1] - p1[1]) / 6).toFixed(2)} `;
    d += `${p2[0].toFixed(2)} ${p2[1].toFixed(2)} `;
  }
  return `${d}Z`;
};

const MorphBlob = ({
  className = '',
  seed = 7,
  shapes = 4,
  morphDuration = 3800,
  from = '#C5E869',
  to = '#9ACD32',
  opacity = 0.5,
}) => {
  const gradientId = useId();
  const pathRef = useRef(null);
  const hiddenRefs = useRef([]);

  const variants = useMemo(() => {
    const rand = mulberry32(seed);
    return Array.from({ length: shapes }, () => blobPath(rand));
  }, [seed, shapes]);

  useEffect(() => {
    const target = pathRef.current;
    if (!target) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const tl = createTimeline({
      loop: true,
      defaults: { duration: morphDuration, ease: 'inOutSine' },
    });
    hiddenRefs.current.forEach((hidden) => {
      if (hidden) tl.add(target, { d: svg.morphTo(hidden) });
    });
    return () => tl.revert();
  }, [variants, morphDuration]);

  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <path ref={pathRef} d={variants[0]} fill={`url(#${gradientId})`} opacity={opacity} />
      {/* Invisible morph targets — cycle back to the first shape to loop seamlessly. */}
      {[...variants.slice(1), variants[0]].map((d, i) => (
        <path
          key={i}
          ref={(el) => {
            hiddenRefs.current[i] = el;
          }}
          d={d}
          fill="none"
          style={{ display: 'none' }}
        />
      ))}
    </svg>
  );
};

export default MorphBlob;
