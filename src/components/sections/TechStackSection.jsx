import SectionTitle from '../ui/SectionTitle';
import { stagger } from '../../hooks/useReveal';
import { stack } from '../../data/content';
import './TechStackSection.css';

export default function TechStackSection() {
  return (
    <section id="stack" className="section">
      <SectionTitle number="02">Skills &amp; Tech Stack</SectionTitle>
      <div className="stack-grid">
        {stack.map(({ group, items }, i) => (
          <div className="stack-cell" key={group} data-reveal style={stagger(i)}>
            <span className="stack-group mono">{group}</span>
            <div className="stack-items mono">
              {items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
