import SectionTitle from '../ui/SectionTitle';
import { stagger } from '../../hooks/useReveal';
import { education } from '../../data/content';
import './EducationSection.css';

export default function EducationSection() {
  return (
    <section id="education" className="section">
      <SectionTitle number="03">Education</SectionTitle>
      {education.map((entry, i) => (
        <div className="edu-row" key={entry.title} data-reveal style={stagger(i, 120)}>
          <span className="edu-period mono">{entry.period}</span>
          <div className="edu-body">
            <span className="edu-title">{entry.title}</span>
            <span className="edu-detail">{entry.detail}</span>
            {entry.capstone && (
              <span className="edu-detail edu-capstone">
                <span className="mono accent">Capstone —</span> {entry.capstone}
              </span>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
