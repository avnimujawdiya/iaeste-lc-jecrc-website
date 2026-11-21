import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import Logo from "./Logo.jsx";
import { socialIcons } from "./SocialIcons.jsx";
import { contact, socials, OFFICIAL_SITE, JOIN_URL } from "../data/content.js";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer__grid">
        <div>
          <div className="footer__logo">
            <Logo dark />
          </div>
          <p className="footer__about">
            IAESTE LC JECRC is the local chapter of IAESTE India at JECRC University,
            offering paid STEM internships abroad and hosting international interns.
            Work. Experience. Discover.
          </p>
          <div className="footer__socials">
            {socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/#about">About</Link>
          <Link to="/departments">Departments</Link>
          <Link to="/gallery">Gallery</Link>
        </div>

        <div>
          <h4>Student Resources</h4>
          <a href={OFFICIAL_SITE} target="_blank" rel="noreferrer">Opportunities</a>
          <a href={JOIN_URL} target="_blank" rel="noreferrer">Become a Member</a>
          <Link to="/#journey">Global Journey</Link>
          <a href="https://iaeste.org" target="_blank" rel="noreferrer">IAESTE Global</a>
        </div>

        <div>
          <h4>Contact</h4>
          <p><Mail size={16} /> {contact.email}</p>
          <p><MapPin size={16} /> {contact.address}</p>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          © {new Date().getFullYear()} IAESTE LC JECRC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}