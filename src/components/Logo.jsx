import { useState } from "react";
import { Link } from "react-router-dom";

export default function Logo({ dark = false }) {
  const [failed, setFailed] = useState(false);
  return (
    <Link to="/" className={`logo ${dark ? "logo--dark" : ""}`} aria-label="IAESTE LC JECRC home">
      {!failed && (
        <img src="/IaesteLogo.png" alt="IAESTE LC JECRC logo" onError={() => setFailed(true)} />
      )}
      {failed && <span className="logo__text">IAESTE <b>LC JECRC</b></span>}
    </Link>
  );
}