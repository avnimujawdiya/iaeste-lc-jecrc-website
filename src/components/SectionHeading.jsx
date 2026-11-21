import Reveal from "./Reveal.jsx";

export default function SectionHeading({ eyebrow, title, text, center = true }) {
  return (
    <Reveal className={`section-heading ${center ? "center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}