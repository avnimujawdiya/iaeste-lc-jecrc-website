import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";
import { navLinks, LOGIN_URL, JOIN_URL } from "../data/content.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const renderLink = (l) => {
    if (l.href) return <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>;
    if (l.to === "/" || l.to === "/departments")
      return <NavLink key={l.label} to={l.to} end>{l.label}</NavLink>;
    return <Link key={l.label} to={l.to}>{l.label}</Link>;
  };

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Logo />
        <nav className={`navbar__links ${open ? "is-open" : ""}`} aria-label="Main">
          {navLinks.map(renderLink)}
          <div className="navbar__cta-mobile">
            <a className="btn btn--outline" href={LOGIN_URL} target="_blank" rel="noreferrer">Login</a>
            <a className="btn btn--primary" href={JOIN_URL} target="_blank" rel="noreferrer">Join IAESTE</a>
          </div>
        </nav>
        <div className="navbar__cta">
          <a className="btn btn--outline btn--sm" href={LOGIN_URL} target="_blank" rel="noreferrer">Login</a>
          <a className="btn btn--primary btn--sm" href={JOIN_URL} target="_blank" rel="noreferrer">Join IAESTE</a>
        </div>
        <button className="navbar__toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  );
}