import CertificationsSection from './CertificationsSection';
import RecommendationsSection from './RecommendationsSection';
import './CertRecRow.css';

export default function CertRecRow() {
  return (
    <div className="cert-rec-row">
      <CertificationsSection />
      <RecommendationsSection />
    </div>
  );
}
