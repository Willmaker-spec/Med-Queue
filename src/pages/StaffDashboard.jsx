import { useState } from "react";
import Footer from "../components/Footer";
import { DashboardSidebar } from "../components/MedQueueLayout";

const initialPatients = [
  { position: "01", ticket: "A06", initials: "ML", name: "Michael Lee", status: "Ready", wait: "2 min", tone: "avatar" },
  { position: "02", ticket: "A07", initials: "SR", name: "Sofia Reyes", status: "Waiting", wait: "7 min", tone: "avatar-tone-peach" },
  { position: "03", ticket: "A08", initials: "DO", name: "David Okafor", status: "Waiting", wait: "11 min", tone: "avatar-tone-lavender" },
  { position: "04", ticket: "A09", initials: "AP", name: "Amara Patel", status: "Waiting", wait: "15 min", tone: "avatar-tone-pink" },
  { position: "05", ticket: "A10", initials: "TN", name: "Tunde Nwosu", status: "Waiting", wait: "18 min", tone: "avatar-tone-blue" },
];

function StaffDashboard() {
  const [patients, setPatients] = useState(initialPatients);
  const [search, setSearch] = useState("");
  const [serving, setServing] = useState("A06");
  const [notice, setNotice] = useState("");

  const visiblePatients = patients.filter((patient) => patient.name.toLowerCase().includes(search.toLowerCase()) || patient.ticket.toLowerCase().includes(search.toLowerCase()));

  function callPatient(patient) {
    setServing(patient.ticket);
    setPatients((current) => current.map((item) => item.ticket === patient.ticket ? { ...item, status: "Called" } : item));
    setNotice(`${patient.name} (${patient.ticket}) was called.`);
  }

  return (
    <>
      <div className="dashboard-wrap">
        <DashboardSidebar role="staff" active="Queue Management" />
        <main className="dash-main">
          <div className="dash-top">
            <div><span className="eyebrow"><span className="eyebrow-dot" />General Hospital · Central District</span><h1 className="staff-title">Queue Management</h1><p>Manage today's visits and keep your patients moving.</p></div>
            <div className="user-menu"><span className="avatar avatar-lg">OB</span><span><strong>Olivia Bennett</strong><small>Clinic staff</small></span><span className="muted">⌄</span></div>
          </div>
          <div className="staff-toolbar"><h2>Today's overview</h2><div className="staff-tools"><select className="select-field" aria-label="Department"><option>General Medicine</option><option>Cardiology</option><option>Pediatrics</option></select><button className="btn btn-outline btn-sm" type="button" onClick={() => setNotice("Queue data refreshed.")}>↻ Refresh</button></div></div>
          <div className="staff-summary">
            <article className="card summary-card"><div className="summary-top"><span>Waiting now</span><span className="summary-icon">◷</span></div><div className="stat">18</div><div className="summary-foot"><strong>↓ 3</strong> since 9:00 am</div></article>
            <article className="card summary-card"><div className="summary-top"><span>In queue</span><span className="summary-icon">☷</span></div><div className="stat">24</div><div className="summary-foot">Across today's visits</div></article>
            <article className="card summary-card"><div className="summary-top"><span>Completed</span><span className="summary-icon">✓</span></div><div className="stat">36</div><div className="summary-foot"><strong>↑ 12%</strong> vs. yesterday</div></article>
            <article className="card summary-card"><div className="summary-top"><span>Average wait</span><span className="summary-icon">⌛</span></div><div className="stat">18<span className="stat-unit"> min</span></div><div className="summary-foot">Within today's target</div></article>
          </div>
          <section className="card staff-table-wrap">
            <div className="staff-toolbar table-toolbar"><h2>Waiting patients <span className="muted patient-count">({patients.length})</span></h2><div className="staff-tools"><label className="form-field patient-search"><span aria-hidden="true">⌕</span><input aria-label="Search patient" placeholder="Search patient" value={search} onChange={(event) => setSearch(event.target.value)} /></label><button className="btn btn-primary btn-sm" type="button" onClick={() => setNotice("Walk-in registration is not available right now.")}>＋ Add walk-in</button></div></div>
            <table className="staff-table"><thead><tr><th>POSITION</th><th>TICKET</th><th>PATIENT NAME</th><th>STATUS</th><th>WAIT TIME</th><th>ACTIONS</th></tr></thead><tbody>
              {visiblePatients.map((patient) => <tr key={patient.ticket}><td>{patient.position}</td><td className="ticket-mini">{patient.ticket}</td><td><span className="patient-name"><span className={`avatar ${patient.tone}`}>{patient.initials}</span>{patient.name}</span></td><td><span className={`status ${patient.status === "Ready" ? "status-blue" : patient.status === "Called" ? "status-green" : "status-yellow"}`}>{patient.status}</span></td><td>{patient.wait}</td><td><div className="table-actions"><button className={`btn ${patient.status === "Ready" ? "btn-primary" : "btn-outline"} btn-sm`} type="button" onClick={() => callPatient(patient)}>{patient.status === "Ready" ? "Call Next" : "Call"}</button><button className="btn btn-outline btn-sm" type="button" onClick={() => setNotice(`${patient.name} was skipped.`)}>Skip</button></div></td></tr>)}
              {visiblePatients.length === 0 && <tr><td colSpan="6" className="no-patients">No patients match your search.</td></tr>}
            </tbody></table>
            {notice && <p className="staff-notice" role="status">{notice}</p>}
          </section>
          <div className="staff-bottom">
            <section className="card panel"><div className="panel-head"><h3>Current patient</h3><span className="status status-blue">In consultation</span></div><div className="current-patient"><span className="avatar">JD</span><span><strong>Jane Doe · A05</strong><span>General Medicine · Checked in 10:18 am</span></span><button className="btn btn-primary btn-sm complete-button" type="button" onClick={() => setNotice("Jane Doe's visit has been completed.")}>Complete visit</button></div></section>
            <section className="card panel" id="waiting-room-display"><div className="panel-head"><h3>Waiting room display</h3><a className="text-link" href="#waiting-room-display">Open display ↗</a></div><div className="display-card"><span><small>NOW SERVING</small><strong>{serving}</strong><small>General Medicine</small></span><span className="next-ticket"><small>NEXT UP</small><strong>{serving === "A06" ? "A07" : "A08"}</strong><small>Please be ready</small></span><span className="avatar display-open-icon">↗</span></div></section>
          </div>
        </main>
      </div>
      <Footer>© 2025 MedQueue · Staff workspace.</Footer>
    </>
  );
}

export default StaffDashboard;
