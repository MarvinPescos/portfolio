import { useEffect } from 'react';

// Fades in every [data-reveal] element the first time it scrolls into view.
export default function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// Inline style for staggering items in a list.
export const stagger = (index, step = 70) => ({ '--delay': `${index * step}ms` });
