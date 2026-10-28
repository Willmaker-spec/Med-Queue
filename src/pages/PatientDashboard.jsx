import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { DashboardSidebar } from "../components/MedQueueLayout";
import { getCurrentUser } from "../utils/demoAuth";

function PatientDashboard() {
  const user = getCurrentUser();
  const fullName = `${user.firstName} ${user.lastName}`;
  const initials = `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();

  return (
    <>
      <div className="dashboard-wrap">
        <DashboardSidebar role="patient" active="Dashboard" />
        <main className="dash-main">
          <div className="dash-top">
            <div><h1>Good morning, {user.firstName}</h1><p>Here's your care at a glance. Take it one step at a time.</p></div>
            <div className="user-menu"><span className="avatar avatar-lg">{initials}</span><span><strong>{fullName}</strong><small>Patient account</small></span><span className="muted">⌄</span></div>
          </div>
          <div className="patient-grid">
            <section className="card panel queue-current">
              <div className="panel-head"><h3>Your current queue</h3><span className="status">In progress</span></div>
              <div className="current-clinic"><span className="clinic-square">✚</span><span><strong>General Hospital</strong><small>General Medicine · Today, 10:24 am</small></span></div>
              <div className="queue-numbers"><div className="queue-number-box"><strong>A12</strong><span>Your ticket</span></div><div className="queue-number-box"><strong>12<small className="ordinal">th</small></strong><span>Position in line</span></div><div className="queue-number-box"><strong>18 min</strong><span>Estimated wait</span></div></div>
              <div className="meter"><span className="queue-meter-progress" /></div><div className="progress-copy"><span>Queue progress</span><span>6 of 18 patients served</span></div>
              <Link className="btn btn-outline btn-sm queue-details-link" to="/queue">View queue details →</Link>
            </section>
            <section className="card panel">
              <div className="panel-head"><h3>Upcoming appointment</h3><a className="text-link" href="#appointments">View all →</a></div>
              <div className="appointment-date"><span className="date-block">JUN<b>18</b></span><span><strong>Annual wellness check</strong><span>Wednesday · 2:30 pm</span><br /><span>City Family Clinic</span></span></div>
              <div className="divider" /><div className="appointment-meta"><span className="small muted">Dr. Olivia Bennett</span><span className="status status-blue">Confirmed</span></div>
            </section>
          </div>
          <section className="card panel recent">
            <div className="panel-head"><h3>Recent visits</h3><a className="text-link" href="#history">View history →</a></div>
            <table className="recent-table"><thead><tr><th>CLINIC</th><th>VISIT</th><th>DATE</th><th>STATUS</th></tr></thead>
              <tbody><tr><td>City Family Clinic</td><td>General check-up</td><td>May 24, 2025</td><td><span className="status status-green">Completed</span></td></tr><tr><td>Metro Women's Clinic</td><td>Women's health</td><td>Apr 09, 2025</td><td><span className="status status-green">Completed</span></td></tr></tbody>
            </table>
          </section>
          <section className="card panel quick-actions-panel">
            <div className="panel-head"><h3>Quick actions</h3><span className="muted">What would you like to do?</span></div>
            <div className="quick-actions"><Link className="btn btn-primary" to="/queue">＋ Join Another Queue</Link><a className="btn btn-outline" href="#history">◴ View History</a><a className="btn btn-outline" href="#profile">♙ Update Profile</a></div>
          </section>
        </main>
      </div>
      <Footer>© 2025 MedQueue · Your care, at your pace.</Footer>
    </>
  );
}

export default PatientDashboard;
