import { Link, NavLink } from "react-router-dom";

function Brand() {
  return (
    <Link className="brand" to="/" aria-label="MedQueue home">
      <span className="brand-mark">
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M16 27s-10-5.8-10-13a5.8 5.8 0 0 1 10-3.9A5.8 5.8 0 0 1 26 14c0 7.2-10 13-10 13Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M7 16h5l2-4 3.4 8 2.1-4H25" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span>Med<span>Queue</span></span>
    </Link>
  );
}

export function Header({ accountLabel = "Sign up" }) {
  return (
    <header className="topbar">
      <div className="shell topbar-inner">
        <Brand />
        <nav className="nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/clinics">Clinics</NavLink>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <Link className="btn btn-outline" to="/patient-dashboard">Log in</Link>
          <Link className="btn btn-primary" to="/patient-dashboard">{accountLabel} <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </header>
  );
}

export function Footer({ children = "© 2025 MedQueue. Care, without the wait.", className = "" }) {
  return (
    <footer className={`footer ${className}`}>
      <div className="shell footer-inner">
        <Brand />
        <span>{children}</span>
        <div className="footer-links">
          <a href="#privacy">Privacy</a>
          <a href="#help">Help centre</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

const patientLinks = [
  ["▦", "Dashboard", "/patient-dashboard"],
  ["◷", "My Queue", "/queue"],
  ["▣", "Appointments", "#appointments"],
  ["◴", "Visit History", "#history"],
  ["♙", "Profile", "#profile"],
];

const staffLinks = [
  ["▦", "Dashboard", "/staff-dashboard"],
  ["☷", "Queue Management", "/staff-dashboard"],
  ["♙", "Patients", "#patients"],
  ["✚", "Clinic Info", "#clinic-info"],
  ["⚙", "Settings", "#settings"],
];

export function DashboardSidebar({ role, active }) {
  const isStaff = role === "staff";
  const links = isStaff ? staffLinks : patientLinks;
  return (
    <aside className="sidebar">
      <Brand />
      <p className="sidebar-label">{isStaff ? "Clinic workspace" : "Patient menu"}</p>
      <nav className="side-links" aria-label={`${role} menu`}>
        {links.map(([icon, label, to]) => (
          <Link className={`side-link${active === label ? " active" : ""}`} to={to} key={label}>
            <span className="side-icon" aria-hidden="true">{icon}</span>
            {label}
            {!isStaff && label === "My Queue" && <span className="status status-green sidebar-count">1</span>}
          </Link>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <a className="side-link" href="#logout"><span className="side-icon" aria-hidden="true">↪</span>Log out</a>
        <div className="help-card">
          <strong>{isStaff ? "Staff support" : "Need a hand?"}</strong>
          <p>{isStaff ? "Get help with queue tools and your clinic workspace." : "Our care team is here to help with your visits."}</p>
          <a className="text-link" href="#help">{isStaff ? "Contact support" : "Visit help centre"} →</a>
        </div>
      </div>
    </aside>
  );
}
