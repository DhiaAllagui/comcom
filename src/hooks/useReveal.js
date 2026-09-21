import { useEffect, useRef, useState } from 'react';

/**
 * Adds the `.is-visible` class once an element enters the viewport.
 * Pairs with the `.reveal` / `.reveal-blur` utility classes in index.css.
 */
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}

/** Counts a numeric value up from 0 once visible. Non-numeric values pass through unchanged. */
export function useCountUp(target, isVisible, duration = 1200) {
  const [value, setValue] = useState(0);
  const numeric = typeof target === 'string' ? parseInt(target, 10) : target;
  const isNumber = !isNaN(numeric) && /^[0-9]+$/.test(String(target).trim());

  useEffect(() => {
    if (!isVisible || !isNumber) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(numeric);
      return;
    }
    let start = null;
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const step = (ts) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setValue(Math.round(ease(progress) * numeric));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isVisible, isNumber, numeric, duration]);

  return isNumber ? value : target;
}
