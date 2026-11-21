import { useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Departments from "./pages/Departments.jsx";
import Gallery from "./pages/Gallery.jsx";

// Scrolls to top on page change, or to the #section if the URL has a hash
function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0 });
  }, [pathname, hash, key]);
  return null;
}

function NotFound() {
  return (
    <section className="section container" style={{ textAlign: "center", minHeight: "50vh" }}>
      <h1>Page not found</h1>
      <p style={{ margin: "12px 0 24px" }}>The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn--primary">Back to Home</Link>
    </section>
  );
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}