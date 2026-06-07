import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './GallerySection.css';

const galleryItems = [
  { color: '#4f46e5', label: 'Photo 1' },
  { color: '#0891b2', label: 'Photo 2' },
  { color: '#059669', label: 'Photo 3' },
  { color: '#d97706', label: 'Photo 4' },
  { color: '#dc2626', label: 'Photo 5' },
  { color: '#7c3aed', label: 'Photo 6' },
  { color: '#0d9488', label: 'Photo 7' },
];

export default function GallerySection() {
  const [scrollPos, setScrollPos] = useState(0);

  const scroll = (direction) => {
    const container = document.querySelector('.gallery-track');
    if (!container) return;
    const scrollAmount = 200;
    const newPos = direction === 'left'
      ? Math.max(0, container.scrollLeft - scrollAmount)
      : container.scrollLeft + scrollAmount;
    container.scrollTo({ left: newPos, behavior: 'smooth' });
  };

  return (
    <section className="gallery-section card animate-fade-in-up animate-delay-5">
      <h2 className="section-title" style={{ marginBottom: 'var(--space-lg)' }}>Gallery</h2>
      <div className="gallery-wrapper">
        <button className="gallery-nav gallery-nav-left" onClick={() => scroll('left')} aria-label="Scroll left">
          <ChevronLeft size={20} />
        </button>
        <div className="gallery-track">
          {galleryItems.map((item, idx) => (
            <div
              className="gallery-item"
              key={idx}
              style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)` }}
            >
              <span className="gallery-label">{item.label}</span>
            </div>
          ))}
        </div>
        <button className="gallery-nav gallery-nav-right" onClick={() => scroll('right')} aria-label="Scroll right">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
