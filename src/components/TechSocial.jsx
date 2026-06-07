import { ChevronRight } from 'lucide-react';
import './TechSocial.css';

const techStack = {
  'Backend': [
    { name: 'Python', icon: '🐍' },
    { name: 'FastAPI', icon: '⚡' },
    { name: 'PostgreSQL', icon: '🐘' },
  ],
  'Blockchain': [
    { name: 'Solidity', icon: '💎' },
  ],
  'DevOps': [
    { name: 'Docker', icon: '🐳' },
  ],
};

const socials = [
  {
    name: 'GitHub',
    url: 'https://github.com/MarvinPescos',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    ),
    color: '#333',
  },
];

export default function TechSocial() {
  return (
    <section className="tech-social card animate-in delay-2">
      <div className="tech-social-grid">
        <div className="tech-col">
          <div className="section-header">
            <h2 className="section-title">Tech Stack</h2>
            <a href="#" className="view-all-btn">
              View All <ChevronRight size={14} />
            </a>
          </div>
          {Object.entries(techStack).map(([category, skills]) => (
            <div className="tech-category" key={category}>
              <h3 className="tech-category-title">{category}</h3>
              <div className="tech-tags">
                {skills.map((skill) => (
                  <span className="tag" key={skill.name}>
                    <span className="tag-icon">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="social-col">
          <h2 className="section-title">Social Links</h2>
          <p className="social-subtitle">Follow me on</p>
          <div className="social-list">
            {socials.map((social) => (
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-item"
                key={social.name}
              >
                <div className="social-icon-badge" style={{ background: social.color }}>
                  {social.icon}
                </div>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
