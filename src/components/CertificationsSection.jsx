import { ChevronRight } from 'lucide-react';
import './CertificationsSection.css';

const certifications = [
  { name: 'Certification Placeholder 1', org: 'Organization A' },
  { name: 'Certification Placeholder 2', org: 'Organization B' },
  { name: 'Certification Placeholder 3', org: 'Organization C' },
  { name: 'Certification Placeholder 4', org: 'Organization D' },
];

export default function CertificationsSection() {
  return (
    <section className="certifications-section card animate-fade-in-up animate-delay-4">
      <div className="section-header">
        <h2 className="section-title">Recent Certifications</h2>
        <a href="#" className="view-all-btn">
          View All <ChevronRight size={16} />
        </a>
      </div>
      <div className="cert-list">
        {certifications.map((cert, idx) => (
          <div className="cert-item" key={idx}>
            <div className="cert-info">
              <h4 className="cert-name">{cert.name}</h4>
              <p className="cert-org">{cert.org}</p>
            </div>
            <ChevronRight size={16} className="cert-arrow" />
          </div>
        ))}
      </div>
    </section>
  );
}
