import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats } from "../data/content.js";
import Reveal from "./Reveal.jsx";

function Counter({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{n}</span>;
}

export default function Statistics() {
  return (
    <div className="stats-grid">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08}>
          <div className="stat-card">
            <div className="stat-card__num"><Counter to={s.value} />{!s.placeholder && "+"}</div>
            <div className="stat-card__label">{s.label}</div>
            {s.placeholder && <span className="badge">Placeholder</span>}
          </div>
        </Reveal>
      ))}
    </div>
  );
}