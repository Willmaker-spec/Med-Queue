import { Link } from "react-router-dom";
import Brand from "./Brand";

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
          <Link className="text-link" to="/help">{isStaff ? "Contact support" : "Visit help centre"} →</Link>
        </div>
      </div>
    </aside>
  );
}
