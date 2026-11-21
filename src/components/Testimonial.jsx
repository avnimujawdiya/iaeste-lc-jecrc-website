import { useState } from "react";
import { Quote } from "lucide-react";

export default function Testimonial({ t }) {
  const [expanded, setExpanded] = useState(false);
  const initials = t.name.split(" ").map((w) => w[0]).join("").slice(0, 2);

  return (
    <div className="testimonial">
      <Quote className="testimonial__quote" size={30} />
      <p>{expanded ? t.full : t.short}</p>
      {t.full && t.full !== t.short && (
        <button className="link-btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
      <div className="testimonial__author">
        {t.photo ? <img src={t.photo} alt={t.name} /> : <div className="avatar">{initials}</div>}
        <div>
          <b>{t.name}</b>
          <small>{t.country}</small>
        </div>
        <span className={`tag tag--${t.type.toLowerCase()}`}>{t.type}</span>
      </div>
      {t.placeholder && <span className="badge">Placeholder</span>}
    </div>
  );
}