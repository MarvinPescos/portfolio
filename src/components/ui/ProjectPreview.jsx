import { useState } from 'react';
import './ProjectPreview.css';

const pad = (n) => String(n).padStart(2, '0');

// Browser-window style frame with an optional screenshot carousel.
export default function ProjectPreview({ slides }) {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const slide = slides[index];
  const go = (i) => setIndex((i + count) % count);

  return (
    <div className="preview">
      <div className="preview-bar mono">
        <span className="preview-light" />
        <span className="preview-light" />
        <span className="preview-light" />
        <span className="preview-url">{slide.url}</span>
        {count > 1 && <span className="preview-count">{`${pad(index + 1)} / ${pad(count)}`}</span>}
      </div>

      <div className="preview-viewport">
        <div className="preview-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((s) => (
            <div className="preview-slide" key={s.src}>
              <img src={s.src} alt={s.alt} loading="lazy" className={s.dim ? 'on-white' : ''} />
              {s.dim && <span className="preview-dim" />}
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <div className="preview-controls">
          <div className="preview-caption">
            <span className="preview-title">{slide.title}</span>
            <span className="preview-note mono">{slide.note}</span>
          </div>
          <div className="preview-dots">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                aria-label={`Show slide ${i + 1}`}
                className={i === index ? 'active' : ''}
                onClick={() => go(i)}
              />
            ))}
          </div>
          <div className="preview-arrows mono">
            <button type="button" aria-label="Previous" onClick={() => go(index - 1)}>
              ←
            </button>
            <button type="button" aria-label="Next" onClick={() => go(index + 1)}>
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
