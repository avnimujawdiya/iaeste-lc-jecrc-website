import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/Departments.css"; // reuses the page hero styles
import "../styles/Gallery.css";
import Reveal from "../components/Reveal.jsx";
import { galleryPhotos, galleryFilters, JOIN_URL } from "../data/content.js";

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null); // index inside `visible`

  const visible =
    filter === "All" ? galleryPhotos : galleryPhotos.filter((p) => p.category === filter);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % visible.length)),
    [visible.length]
  );
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + visible.length) % visible.length)),
    [visible.length]
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  const changeFilter = (f) => {
    setFilter(f);
    setActive(null);
  };

  return (
    <>
      <section className="dept-hero">
        <span className="dept-hero__circle dept-hero__circle--1" />
        <span className="dept-hero__circle dept-hero__circle--2" />
        <div className="container dept-hero__inner">
          <span className="eyebrow">Gallery</span>
          <h1>Moments Beyond Borders.</h1>
          <p>Events, trips and celebrations from the IAESTE LC JECRC family.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="gallery-filters" role="tablist" aria-label="Filter photos">
            {galleryFilters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                className={`chip ${filter === f ? "is-active" : ""}`}
                onClick={() => changeFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {visible.map((p, i) => (
              <button
                key={p.src}
                className="gallery-item"
                onClick={() => setActive(i)}
                aria-label={`Open photo: ${p.title}`}
              >
                <img src={p.src} alt={p.title} loading="lazy" />
                <span className="gallery-item__caption">{p.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <Reveal className="container cta__inner">
          <h2>Be part of the next story</h2>
          <p>Join IAESTE LC JECRC and create memories beyond borders.</p>
          <a href={JOIN_URL} target="_blank" rel="noreferrer" className="btn btn--accent btn--lg">
            Become a Member
          </a>
        </Reveal>
      </section>

      <AnimatePresence>
        {active !== null && visible[active] && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
          >
            <button className="lightbox__btn lightbox__close" onClick={close} aria-label="Close">
              <X size={26} />
            </button>
            <button
              className="lightbox__btn lightbox__prev"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={30} />
            </button>
            <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
              <img src={visible[active].src} alt={visible[active].title} />
              <figcaption>{visible[active].title}</figcaption>
            </figure>
            <button
              className="lightbox__btn lightbox__next"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next photo"
            >
              <ChevronRight size={30} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}