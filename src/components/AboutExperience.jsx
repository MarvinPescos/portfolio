import './AboutExperience.css';

const experiences = [
  { role: 'BSIT Student', desc: 'Davao del Norte State College · Graduating 2027', year: '2022–2027', active: true },
  { role: 'Hello World! 👋', desc: 'Wrote my first line of code', year: '', active: false },
];

export default function AboutExperience() {
  return (
    <section className="about-exp card animate-in delay-1">
      <div className="about-exp-grid">
        <div className="about-col">
          <h2 className="section-title">About</h2>
          <div className="about-text">
            <p>
              I'm an aspiring back-end developer specializing in Python, FastAPI, and PostgreSQL, building clean and scalable server-side applications with solid architecture.
            </p>
            <p>
              I've taken projects from concept to deployment, building and contributing to back-end systems that solve real problems. Each project has sharpened my ability to write efficient, maintainable code and make thoughtful decisions across the entire stack.
            </p>
            <p>
              I'm driven by a passion for learning and building things that matter. My goal is to grow as a developer who doesn't just ship features but creates meaningful digital experiences that leave a lasting impression.
            </p>
          </div>
        </div>
        <div className="exp-col">
          <h2 className="section-title">Experience</h2>
          <div className="exp-timeline">
            {experiences.map((exp, idx) => (
              <div className="exp-item" key={idx}>
                <div className="exp-dot-wrap">
                  <div className={`exp-dot ${exp.active ? 'active' : ''}`}></div>
                  {idx < experiences.length - 1 && <div className="exp-line"></div>}
                </div>
                <div className="exp-details">
                  <h4 className="exp-role">{exp.role}</h4>
                  <p className="exp-desc">{exp.desc}</p>
                </div>
                {exp.year && <span className="exp-year">{exp.year}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
