import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, CheckCircle2, Users } from "lucide-react";
import { iconMap } from "./iconMap.js";

// preview = true  -> compact card for the Home page (links to Departments page)
// preview = false -> full card with click-to-expand details
export default function DepartmentCard({ dept, preview = false }) {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[dept.icon] || Users; // fallback so a wrong name never crashes

  return (
    <motion.article
      id={preview ? undefined : dept.id}
      className={`dept-card ${open ? "is-open" : ""}`}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <div className="dept-card__icon"><Icon size={28} /></div>
      {dept.placeholder && <span className="badge badge--corner">Placeholder</span>}
      <h3>{dept.name}</h3>
      <p>{dept.short}</p>

      {!preview && (
        <ul className="dept-card__list">
          {dept.responsibilities.map((r) => (
            <li key={r}><CheckCircle2 size={16} /> {r}</li>
          ))}
        </ul>
      )}

      <AnimatePresence initial={false}>
        {!preview && open && (
          <motion.div
            className="dept-card__more"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{dept.more}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {preview ? (
        <Link to={`/departments#${dept.id}`} className="dept-card__btn">
          Explore <ArrowRight size={16} />
        </Link>
      ) : (
        <button className="dept-card__btn" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? "Show Less" : "Explore Department"}
          <ChevronDown size={16} className={open ? "rot" : ""} />
        </button>
      )}
    </motion.article>
  );
}