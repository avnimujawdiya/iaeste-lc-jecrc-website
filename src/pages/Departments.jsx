import "../styles/Departments.css";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import DepartmentCard from "../components/DepartmentCard.jsx";
import { departments, workflow, JOIN_URL } from "../data/content.js";

export default function Departments() {
  return (
    <>
      <section className="dept-hero">
        <span className="dept-hero__circle dept-hero__circle--1" />
        <span className="dept-hero__circle dept-hero__circle--2" />
        <div className="container dept-hero__inner">
          <span className="eyebrow">Our Departments</span>
          <h1>Meet the Teams Behind the Experience.</h1>
          <p>Every successful international exchange is powered by dedicated teams working together.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="dept-grid dept-grid--full">
            {departments.map((d, i) => (
              <Reveal key={d.id} delay={(i % 3) * 0.08}>
                <DepartmentCard dept={d} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            eyebrow="Teamwork"
            title="How Our Teams Work Together"
            text="Each department plays a part in turning an opportunity into an international experience."
          />
          <ol className="flow">
            {workflow.map((w, i) => (
              <Reveal key={w.dept} delay={i * 0.08}>
                <li className="flow__step">
                  <span className="flow__num">{i + 1}</span>
                  <div>
                    <h3>{w.dept}</h3>
                    <p>{w.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="cta">
        <Reveal className="container cta__inner">
          <h2>Want to be part of a team?</h2>
          <p>Join IAESTE LC JECRC and work with people from every department.</p>
          <a href={JOIN_URL} target="_blank" rel="noreferrer" className="btn btn--accent btn--lg">Become a Member</a>
        </Reveal>
      </section>
    </>
  );
}