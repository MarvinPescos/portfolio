import RichText from '../ui/RichText';
import { stagger } from '../../hooks/useReveal';
import { about } from '../../data/content';
import './AboutSection.css';

export default function AboutSection() {
  return (
    <section id="about" className="section about">
      <span className="eyebrow mono intro-anim" style={stagger(1, 120)}>
        {about.eyebrow}
      </span>
      <p className="about-headline intro-anim" style={stagger(2, 120)}>
        <RichText parts={about.headline} />
      </p>
      <p className="about-intro intro-anim" style={stagger(3, 120)}>
        {about.intro}
      </p>

      <div className="stats">
        {about.stats.map((stat, i) => (
          <div className="stat intro-anim" key={stat.label} style={stagger(4 + i, 120)}>
            <span className="stat-value mono">{stat.value}</span>
            <span className="stat-label mono">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
