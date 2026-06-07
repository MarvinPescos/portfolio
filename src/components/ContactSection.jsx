import { Mail } from 'lucide-react';
import './ContactSection.css';

export default function ContactSection() {
  return (
    <section className="contact-card card animate-in delay-3">
      <h2 className="section-title">Contact</h2>
      <div className="contact-list">
        <a href="mailto:marvinpescos@email.com" className="contact-item send-msg">
          <Mail size={16} />
          <div className="contact-info">
            <span className="contact-label">Send a Message</span>
            <span className="contact-value">marvinpescos@email.com</span>
          </div>
        </a>
      </div>
    </section>
  );
}
