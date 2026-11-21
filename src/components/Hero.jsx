import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plane, Globe, Users } from "lucide-react";
import { JOIN_URL } from "../data/content.js";

const float = (delay) => ({
  animate: { y: [0, -10, 0] },
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay },
});

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="container hero__grid">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Beyond Borders · Explore. Experience. Evolve.</span>
          <h1>Your Journey <span>Beyond Borders</span> Starts Here.</h1>
          <p>
            Discover international internships, experience new cultures and build a
            future without boundaries with IAESTE LC JECRC.
          </p>
          <div className="hero__buttons">
            <Link to="/#journey" className="btn btn--accent">Explore Opportunities</Link>
            <a href={JOIN_URL} target="_blank" rel="noreferrer" className="btn btn--outline">Become a Member</a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {/* Put a real IAESTE photo at public/images/hero.jpg */}
          <div className="hero__image" />
          <motion.div className="float-card float-card--a" {...float(0)}>
            <Plane size={20} /> <div><b>International Internships</b><small>Paid, course-related</small></div>
          </motion.div>
          <motion.div className="float-card float-card--b" {...float(1.2)}>
            <Globe size={20} /> <div><b>Work. Experience. Discover.</b><small>IAESTE motto</small></div>
          </motion.div>
          <motion.div className="float-card float-card--c" {...float(2.2)}>
            <Users size={20} /> <div><b>LC JECRC</b><small>Student-run committee</small></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}