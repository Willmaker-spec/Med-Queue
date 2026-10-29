import { Link, NavLink } from "react-router-dom";
import Brand from "./Brand";

function Header({ accountLabel = "Sign up" }) {
  return (
    <header className="topbar">
      <div className="shell topbar-inner">
        <Brand />
        <nav className="nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/clinics">Clinics</NavLink>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="nav-actions">
          <Link className="btn btn-outline" to="/login">Log in</Link>
          <Link className="btn btn-primary" to="/signup">{accountLabel} <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
