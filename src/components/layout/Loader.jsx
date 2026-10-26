import { useEffect, useState } from 'react';
import { loaderLogs } from '../../data/content';
import './Loader.css';

const DURATION = 1900;

// "00:01.026" style timestamp for a log line.
const timestamp = (ms) => `00:0${Math.floor(ms / 1000)}.${String(ms % 1000).padStart(3, '0')}`;

// Fake server boot screen shown on first load.
export default function Loader() {
  const [pct, setPct] = useState(0);
  const [stage, setStage] = useState('on'); // on → out (fading) → done (removed)

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('is-loading');
    document.body.style.overflow = 'hidden';
    let raf;
    let fadeTimer;
    let doneTimer;
    const start = performance.now();

    const finish = () => {
      document.body.style.overflow = '';
      root.classList.remove('is-loading');
    };

    const tick = () => {
      const p = Math.min(100, Math.round(((performance.now() - start) / DURATION) * 100));
      setPct(p);
      if (p < 100) {
        raf = requestAnimationFrame(tick);
        return;
      }
      fadeTimer = setTimeout(() => {
        setStage('out');
        finish();
      }, 250);
      doneTimer = setTimeout(() => setStage('done'), 900);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
      finish();
    };
  }, []);

  if (stage === 'done') return null;

  return (
    <div className={`loader mono${stage === 'out' ? ' loader-out' : ''}`} aria-hidden="true">
      <div className="loader-top">
        <span>MARVIN PESCOS / PORTFOLIO</span>
        <span className="loader-status">
          <span className="loader-dot" />
          {pct < 100 ? 'STARTING' : 'READY'}
        </span>
      </div>

      <div className="loader-logs">
        {loaderLogs
          .filter((log) => pct >= log.at)
          .map((log) => (
            <div className="loader-line" key={log.text}>
              <span className="loader-time">{timestamp(log.at * 19)}</span>
              <span className={`loader-level${log.level === 'GET' ? ' accent' : ''}`}>{log.level}</span>
              <span>{log.text}</span>
            </div>
          ))}
      </div>

      <div className="loader-bottom">
        <div className="loader-heading">
          <span className="serif-italic loader-title">Starting server</span>
          <span className="loader-pct">{String(pct).padStart(3, '0')}</span>
        </div>
        <div className="loader-bar">
          <div className="loader-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>
    </div>
  );
}
