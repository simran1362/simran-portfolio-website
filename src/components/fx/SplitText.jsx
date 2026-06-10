import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

// anime.js-powered per-character headline reveal. Each character sits inside
// an overflow-hidden mask and slides up into place with a stagger, so text
// appears to rise out of an invisible baseline. Words stay intact (no
// mid-word line breaks) because chars are grouped into inline-block words.
const SplitText = ({
  text,
  as: Tag = 'span',
  className = '',
  delay = 0,
  charStagger = 28,
  duration = 850,
  once = true,
}) => {
  const rootRef = useRef(null);
  const playedRef = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const chars = root.querySelectorAll('[data-char]');
    if (!chars.length) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const play = () => {
      if (playedRef.current && once) return;
      playedRef.current = true;
      if (reduce) {
        chars.forEach((c) => {
          c.style.transform = 'none';
          c.style.opacity = '1';
        });
        return;
      }
      animate(chars, {
        y: ['115%', '0%'],
        rotate: [8, 0],
        opacity: [0, 1],
        duration,
        delay: stagger(charStagger, { start: delay }),
        ease: 'outExpo',
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          play();
          if (once) observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, [delay, charStagger, duration, once]);

  const words = String(text).split(' ');

  return (
    <Tag ref={rootRef} className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span
          key={`${word}-${wi}`}
          aria-hidden
          className="inline-block whitespace-pre"
        >
          {Array.from(word).map((char, ci) => (
            <span key={ci} className="inline-block overflow-hidden align-bottom">
              <span
                data-char
                className="inline-block will-change-transform"
                style={{ transform: 'translateY(115%)', opacity: 0 }}
              >
                {char}
              </span>
            </span>
          ))}
          {wi < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
