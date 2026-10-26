import ProjectPreview from '../ui/ProjectPreview';
import SectionTitle from '../ui/SectionTitle';
import { profile, projects } from '../../data/content';
import './ProjectsSection.css';

export default function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="projects-head" data-reveal>
        <SectionTitle number="01" bordered={false} reveal={false}>
          Projects
        </SectionTitle>
        <a href={profile.github} target="_blank" rel="noreferrer" className="mono">
          ALL ON GITHUB ↗
        </a>
      </div>

      {projects.map((project) => (
        <article className="project" key={project.title} data-reveal>
          <ProjectPreview slides={project.slides} />

          <div className="project-head">
            <h3>{project.title}</h3>
            <span className="mono">{project.role}</span>
          </div>
          <span className="project-subtitle">{project.subtitle}</span>

          <ul className="project-points">
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <div className="tags mono">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="project-links mono">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label} ↗
              </a>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
