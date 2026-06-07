import './AboutSection.css';

export default function AboutSection() {
  return (
    <section className="about-card card animate-in delay-1">
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
    </section>
  );
}
