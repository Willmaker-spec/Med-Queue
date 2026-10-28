import { Link } from "react-router-dom";
import Brand from "./Brand";

function Footer({ children = "© 2025 MedQueue. Care, without the wait.", className = "" }) {
  return (
    <footer className={`footer ${className}`}>
      <div className="shell footer-inner">
        <Brand />
        <span>{children}</span>
        <address className="footer-location">Lagos, Lekki Phase 1, off Betano Enterprises</address>
        <div className="footer-links">
          <Link to="/privacy">Privacy</Link>
          <Link to="/help">Help centre</Link>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
