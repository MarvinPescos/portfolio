import { useEffect, useState } from 'react';

// Tracks which section is currently near the top of the viewport.
export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.35) current = id;
      }
      // The last section may be too short to reach the threshold.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = ids[ids.length - 1];
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ids]);

  return active;
}

export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  // The sticky nav grows with the layout zoom, so scale its offset too.
  const scale = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--scale')) || 1;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72 * scale, behavior: 'smooth' });
}
