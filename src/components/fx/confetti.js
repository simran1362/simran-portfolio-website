import { animate, utils } from 'animejs';

// Fire a confetti burst from a screen point using anime.js.
// Spawns a throwaway fixed-position layer, flings particles with physics-y
// easing, and cleans the whole thing up when the last particle settles.
const PALETTE = ['#9ACD32', '#C5E869', '#FF1B8D', '#FF6B35', '#2196F3', '#FF9800', '#FFFFFF'];

const SHAPES = {
  square: (color) =>
    `<div style="width:10px;height:10px;background:${color};"></div>`,
  circle: (color) =>
    `<div style="width:9px;height:9px;border-radius:50%;background:${color};"></div>`,
  triangle: (color) =>
    `<div style="width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:11px solid ${color};"></div>`,
  star: (color) =>
    `<svg width="14" height="14" viewBox="0 0 100 100"><path d="M50 5 L62 38 L97 38 L69 59 L79 93 L50 72 L21 93 L31 59 L3 38 L38 38 Z" fill="${color}"/></svg>`,
};

export function fireConfetti(originX, originY, count = 42) {
  if (typeof document === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const layer = document.createElement('div');
  layer.setAttribute('aria-hidden', 'true');
  layer.style.cssText =
    'position:fixed;inset:0;pointer-events:none;z-index:10000;overflow:hidden;';
  document.body.appendChild(layer);

  const shapeKeys = Object.keys(SHAPES);
  const particles = [];

  for (let i = 0; i < count; i += 1) {
    const wrap = document.createElement('div');
    const color = PALETTE[i % PALETTE.length];
    const shape = shapeKeys[i % shapeKeys.length];
    wrap.innerHTML = SHAPES[shape](color);
    wrap.style.cssText = `position:absolute;left:${originX}px;top:${originY}px;will-change:transform,opacity;`;
    layer.appendChild(wrap);
    particles.push(wrap);
  }

  let remaining = particles.length;
  const done = () => {
    remaining -= 1;
    if (remaining <= 0) layer.remove();
  };

  particles.forEach((p) => {
    const angle = utils.random(0, 360) * (Math.PI / 180);
    const power = utils.random(90, 320);
    animate(p, {
      x: Math.cos(angle) * power,
      y: [
        { to: Math.sin(angle) * power - utils.random(60, 160), ease: 'outCubic', duration: utils.random(450, 700) },
        { to: Math.sin(angle) * power + utils.random(220, 420), ease: 'inQuad', duration: utils.random(650, 950) },
      ],
      rotate: utils.random(-540, 540),
      scale: [
        { to: utils.random(0.7, 1.3), duration: 80 },
        { to: 0, delay: 500, ease: 'inQuad' },
      ],
      opacity: [{ to: 1, duration: 50 }, { to: 0, delay: 700, duration: 600 }],
      duration: utils.random(1100, 1650),
      onComplete: done,
    });
  });

  // Safety net in case an animation is interrupted (tab hidden, etc.).
  setTimeout(() => layer.remove(), 2600);
}

// Convenience: burst from the center of a DOM element.
export function fireConfettiFrom(el, count) {
  if (!el) return;
  const r = el.getBoundingClientRect();
  fireConfetti(r.left + r.width / 2, r.top + r.height / 2, count);
}
