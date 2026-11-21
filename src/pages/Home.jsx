import { Link } from "react-router-dom";
import "../styles/Home.css";
import Hero from "../components/Hero.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import Statistics from "../components/Statistics.jsx";
import DepartmentCard from "../components/DepartmentCard.jsx";
import Testimonial from "../components/Testimonial.jsx";
import { iconMap } from "../components/iconMap.js";
import { features, departments, testimonials, journey, JOIN_URL } from "../data/content.js";

export default function Home() {
  return (
    <>
      <Hero />

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="container about">
          <Reveal className="about__image">
            <div className="about__img" />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">About IAESTE</span>
            <h2>Connecting Students. Creating Global Experiences.</h2>
            <p>
              Established in 2014, IAESTE LC JECRC is the local chapter of IAESTE India
              at JECRC University, Jaipur. It nurtures future professionals through paid
              STEM internships, skill-building workshops, networking events and cultural
              exchange programmes, organised by seven collaborative departments.
            </p>
            <p>
              Till now, the LC has hosted 109 incoming interns from across the globe, and
              78 of its students have gone abroad. Our aim is simple: Work. Experience. Discover.
            </p>
            <a href="https://iaeste.org" target="_blank" rel="noreferrer" className="btn btn--primary">
              Know More
            </a>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="Why Choose IAESTE?" title="Opportunities that shape your future" />
          <div className="feature-grid">
            {features.map((f, i) => {
              const Icon = iconMap[f.icon];
              return (
                <Reveal key={f.title} delay={i * 0.08}>
                  <div className="feature-card">
                    <div className="feature-card__icon"><Icon size={28} /></div>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="section impact">
        <div className="container">
          <SectionHeading
            eyebrow="Our Impact"
            title="Our journey so far"
            text="Figures from the IAESTE LC JECRC Beyond Borders brochure."
          />
          <Statistics />
        </div>
      </section>

      {/* DEPARTMENTS PREVIEW */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Our Teams" title="Explore Our Departments" />
          <div className="dept-grid">
            {departments.slice(0, 6).map((d, i) => (
              <Reveal key={d.id} delay={i * 0.06}>
                <DepartmentCard dept={d} preview />
              </Reveal>
            ))}
          </div>
          <div className="center" style={{ marginTop: 40 }}>
            <Link to="/departments" className="btn btn--accent">Explore All Departments</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="Student Experiences" title="Stories from our interns" />
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}><Testimonial t={t} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="section" id="journey">
        <div className="container">
          <SectionHeading eyebrow="Global Journey" title="Your path with IAESTE, step by step" />
          <ol className="timeline">
            {journey.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <li className="timeline__item">
                  <span className="timeline__dot">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta">
        <Reveal className="container cta__inner">
          <h2>Ready to Explore Beyond Borders?</h2>
          <p>Your international journey begins with one step.</p>
          <a href={JOIN_URL} target="_blank" rel="noreferrer" className="btn btn--accent btn--lg">
            Become a Member
          </a>
        </Reveal>
      </section>
    </>
  );
}