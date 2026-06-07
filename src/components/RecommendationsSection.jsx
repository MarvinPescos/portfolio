import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './RecommendationsSection.css';

const recommendations = [
  {
    text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. This person shows professionalism and dedication in whatever they do. Their software projects are up to standard and demonstrate social awareness and..."',
    author: 'Recommender Name 1',
    title: 'Professor at University Name',
  },
  {
    text: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. A talented developer who consistently delivers high-quality work..."',
    author: 'Recommender Name 2',
    title: 'CTO at Company Name',
  },
  {
    text: '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium. An exceptional team player with strong technical skills..."',
    author: 'Recommender Name 3',
    title: 'Senior Manager at Organization',
  },
];

export default function RecommendationsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="recommendations-section card animate-fade-in-up animate-delay-4">
      <h2 className="section-title" style={{ marginBottom: 'var(--space-lg)' }}>Recommendations</h2>
      <div className="rec-carousel">
        <blockquote className="rec-quote">
          <p>{recommendations[active].text}</p>
        </blockquote>
        <div className="rec-author">
          <strong>{recommendations[active].author}</strong>
          <span>{recommendations[active].title}</span>
        </div>
      </div>
      <div className="rec-dots">
        {recommendations.map((_, idx) => (
          <button
            key={idx}
            className={`rec-dot ${idx === active ? 'active' : ''}`}
            onClick={() => setActive(idx)}
            aria-label={`Recommendation ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
