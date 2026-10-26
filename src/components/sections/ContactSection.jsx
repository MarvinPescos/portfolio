import RichText from '../ui/RichText';
import SectionTitle from '../ui/SectionTitle';
import { contact, profile } from '../../data/content';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <section id="contact" className="section contact">
      <SectionTitle number="04">Contact</SectionTitle>
      <p className="contact-headline serif" data-reveal>
        <RichText parts={contact.headline} />
      </p>
      <div className="contact-actions mono" data-reveal style={{ '--delay': '120ms' }}>
        <a href={`mailto:${profile.email}`} className="btn btn-solid">
          Send a message →
        </a>
        <a href={profile.resume} download className="btn btn-outline">
          Download résumé ↓
        </a>
      </div>
    </section>
  );
}
