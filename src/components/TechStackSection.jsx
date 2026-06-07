import { ChevronRight } from 'lucide-react';
import './TechStackSection.css';

const PythonLogo = () => (
  <svg viewBox="0 0 256 255" width="16" height="16"><defs><linearGradient id="pa" x1="12.96" y1="12.04" x2="79.64" y2="78.18" gradientUnits="userSpaceOnUse" gradientTransform="scale(2.56)"><stop offset="0" stopColor="#387EB8"/><stop offset="1" stopColor="#366994"/></linearGradient><linearGradient id="pb" x1="19.6" y1="20.22" x2="85" y2="84.57" gradientUnits="userSpaceOnUse" gradientTransform="scale(2.56)"><stop offset="0" stopColor="#FFE052"/><stop offset="1" stopColor="#FFC331"/></linearGradient></defs><path d="M126.9.1C62.5.1 66.7 28.4 66.7 28.4l.1 29.4h61.3v8.8H41.6S0 61 0 127.2s36.3 63.8 36.3 63.8h21.7v-30.7s-1.2-36.3 35.7-36.3h61.4s34.6.5 34.6-33.5V33.6S194.5.1 126.9.1zM92.3 19.6a11.1 11.1 0 11-.1 22.2 11.1 11.1 0 01.1-22.2z" fill="url(#pa)"/><path d="M128.8 254.1c64.4 0 60.2-28.3 60.2-28.3l-.1-29.4h-61.3v-8.8h86.5s41.6 4.7 41.6-61.4-36.3-63.8-36.3-63.8h-21.7v30.7s1.2 36.3-35.7 36.3h-61.4s-34.6-.5-34.6 33.5v56.9s-5.2 34.3 62.8 34.3zm34.5-19.6a11.1 11.1 0 110-22.2 11.1 11.1 0 010 22.2z" fill="url(#pb)"/></svg>
);

const FastAPILogo = () => (
  <svg viewBox="0 0 154 154" width="16" height="16"><circle cx="77" cy="77" r="77" fill="#009688"/><path d="M81.4 32.1L46.7 95.6h29.1L71 121.9l38.7-63.5H80.6l4.8-26.3z" fill="#fff"/></svg>
);

const PostgreSQLLogo = () => (
  <svg viewBox="0 0 256 264" width="16" height="16"><path d="M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664-2.452-.366-5.26-.21-8.583.475-5.792 1.195-10.089 1.65-13.225 1.738 11.837-19.985 21.462-42.775 27.003-64.228 8.96-34.689 4.172-50.492-1.423-57.64C239.944 20.063 224.08 9.645 206.1 4.626c-13.848-3.866-28.067-4.33-37.827-2.125-9.697-5.59-21.237-8.291-33.758-5.903C120.562-.48 107.45 6.24 98.724 17.11c-10.168-.684-19.86 1.727-28.252 7.058C58.703 31.96 50.14 45.564 46.79 61.354c-7.758 1.622-14.702 4.98-20.457 9.907C18.72 78.024 13.04 87.716 10.04 98.9c-5.593 20.86-2.233 42.584 9.466 61.217-1.535 4.649-5.556 7.887-10.756 8.664 0 0 0 0 0 0-3.968.593-7.036 1.893-9.121 3.865-3.452 3.268-4.255 8.26-2.386 14.849 3.378 11.906 14.843 24.384 27.94 30.396 3.584 1.645 7.35 2.78 11.198 3.37 1.488.228 2.987.347 4.487.347 6.952 0 13.626-2.434 18.498-7.572 4.908-5.175 7.552-12.308 7.453-20.103l-.008-.684.005-.038c.013-.142.024-.282.032-.425.034-.616.04-1.236.018-1.86 1.447-1.86 2.773-3.842 3.972-5.938l.374-.663-.004-.002c3.536-6.327 5.793-13.402 6.558-20.64 28.5 8.063 57.1-.445 72.105-20.942 3.138 1.266 6.468 2.3 9.889 3.097 5.112 1.19 9.845 1.786 14.141 1.786 8.677 0 15.55-2.467 20.2-7.353 5.068-5.327 7.395-13.143 6.4-21.442z" fill="#336791"/><text x="128" y="180" textAnchor="middle" fill="#fff" fontSize="100" fontWeight="700" fontFamily="sans-serif">P</text></svg>
);

const SolidityLogo = () => (
  <svg viewBox="0 0 256 417" width="16" height="16"><path d="M127.998 0L63.998 108.333h128.001L127.998 0z" fill="#2B247C" opacity=".45"/><path d="M191.999 108.333H63.998l64 108.334 64.001-108.334z" fill="#2B247C" opacity=".6"/><path d="M63.998 108.333l64 108.334L63.998 325h.001l-64-108.333 64-108.334z" fill="#2B247C" opacity=".8"/><path d="M128.002 416.667l63.999-108.334H64.001l63.001 108.334h1z" fill="#2B247C" opacity=".45"/><path d="M64.001 308.333h128.001l-64-108.333-64.001 108.333z" fill="#2B247C" opacity=".6"/><path d="M192.002 308.333l-64-108.333 64.001-108.333-.001-.001 64 108.334-64 108.333z" fill="#2B247C" opacity=".8"/></svg>
);

const DockerLogo = () => (
  <svg viewBox="0 0 256 185" width="18" height="16"><path d="M250.716 70.497c-5.437-3.727-17.905-5.092-27.466-3.18-1.252-9.16-6.35-17.153-15.623-24.348l-5.318-3.727-3.727 5.318c-4.747 7.174-7.124 17.134-6.35 26.694.364 3.39 1.477 9.503 5.2 14.834-3.63 1.95-10.803 4.67-20.266 4.49H.359l-.36 1.694c-1.635 9.837-1.583 40.56 18.2 64.147 15.078 17.976 37.39 27.115 66.294 27.115 63.186 0 109.993-29.1 131.946-82.023 8.62.17 27.163.544 36.674-18.2 0 0 .594-1.05 2.43-5.078l.89-2.06-5.717-3.676zM141.07 32.6H118.31v22.17h22.76V32.6zm0-27.467H118.31V27.3h22.76V5.133zm-27.466 27.467H90.845v22.17h22.76V32.6zm0-27.467H90.845V27.3h22.76V5.133zm-27.466 27.467H63.38v22.17h22.758V32.6zM58.672 59.767H35.91v22.168h22.762V59.767zM86.138 59.767H63.38v22.168h22.758V59.767zm27.466 0H90.845v22.168h22.76V59.767zm27.466 0H118.31v22.168h22.76V59.767z" fill="#2496ED"/></svg>
);

const techStack = {
  'Backend': [
    { name: 'Python', Logo: PythonLogo },
    { name: 'FastAPI', Logo: FastAPILogo },
    { name: 'PostgreSQL', Logo: PostgreSQLLogo },
  ],
  'Blockchain': [
    { name: 'Solidity', Logo: SolidityLogo },
  ],
  'DevOps': [
    { name: 'Docker', Logo: DockerLogo },
  ],
};

export default function TechStackSection() {
  return (
    <section className="tech-stack-card card animate-in delay-2">
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
                <skill.Logo />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
