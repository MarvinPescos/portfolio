import portrait from '../../assets/portrait.png';
import portraitPixel from '../../assets/portrait-pixel.png';
import { stagger } from '../../hooks/useReveal';
import { profile, socials } from '../../data/content';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-dots" aria-hidden="true" />

      <div className="sidebar-top mono intro-anim">
        <span>PORTFOLIO / 2026</span>
        <span className="status">
          <span className="status-dot" />
          OPEN TO OPPORTUNITIES
        </span>
      </div>

      <div className="portrait intro-anim" style={stagger(1, 100)}>
        <img src={portrait} alt={profile.name} />
        <img src={portraitPixel} alt="" className="portrait-pixel" />
      </div>

      <div className="identity intro-anim" style={stagger(2, 100)}>
        <h1 className="mono">
          Marvin
          <br />
          Pescos
        </h1>
        <span className="mono">
          {profile.role}
          <br />
          {profile.location}
        </span>
      </div>

      <div className="social-list mono">
        {socials.map((s, i) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="intro-anim"
            style={stagger(3 + i, 80)}
          >
            <span>{s.label}</span>
            <span className="arrow">↗</span>
          </a>
        ))}
      </div>

      <div className="sidebar-actions mono intro-anim" style={stagger(8, 80)}>
        <a href={`mailto:${profile.email}`} className="btn btn-solid">
          <span>{profile.email}</span>
          <span>→</span>
        </a>
        <a href={profile.resume} download className="btn btn-outline">
          <span>Download résumé (PDF)</span>
          <span>↓</span>
        </a>
      </div>
    </aside>
  );
}
