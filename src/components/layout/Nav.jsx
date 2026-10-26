import useActiveSection, { scrollToSection } from '../../hooks/useActiveSection';
import { sections } from '../../data/content';
import './Nav.css';

export default function Nav() {
  const active = useActiveSection(sections);

  const handleClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <nav className="nav mono intro-anim">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={id === active ? 'active' : ''}
          onClick={(e) => handleClick(e, id)}
        >
          {id}
        </a>
      ))}
    </nav>
  );
}
