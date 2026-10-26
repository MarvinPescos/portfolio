import { profile } from '../../data/content';
import './Footer.css';

export default function Footer() {
  const toTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer mono">
      <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
      <a href="#about" onClick={toTop}>
        Back to top ↑
      </a>
    </footer>
  );
}
