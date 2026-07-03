import { useEffect, useRef, useState } from "react";

/**
 * Attaches an IntersectionObserver to a ref and flips `visible` to true
 * the first time the element scrolls into view. Pair the returned ref
 * with the `.reveal` / `.is-visible` classes from index.css, e.g.:
 *
 *   const [ref, visible] = useReveal();
 *   <div ref={ref} className={`reveal ${visible ? "is-visible" : ""}`}>
 */
export default function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}