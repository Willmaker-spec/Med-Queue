import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer, Header } from "../components/MedQueueLayout";

const careTeams = [
  { name: "General Medicine", waiting: 18, minutes: 18 },
  { name: "Cardiology", waiting: 11, minutes: 32 },
  { name: "Pediatrics", waiting: 4, minutes: 9 },
  { name: "Women's Health", waiting: 7, minutes: 22 },
];

function JoinQueue() {
  const [department, setDepartment] = useState(careTeams[0].name);
  const [joined, setJoined] = useState(false);
  const selectedTeam = careTeams.find((team) => team.name === department) ?? careTeams[0];

  return (
    <>
      <Header />
      <main className="shell main-content">
        <span className="eyebrow"><span className="eyebrow-dot" />Your visit, on your time</span>
        <h1 className="page-title clinics-title">Join the Queue</h1>
        <p className="page-subtitle">Choose a department and save your place. We'll keep you updated as your turn gets closer.</p>
        <div className="steps" aria-label="Queue registration progress">
          <div className="step done"><span className="step-number">✓</span>Select Department</div><span className="step-line" />
          <div className="step done"><span className="step-number">✓</span>Confirm Details</div><span className="step-line" />
          <div className="step active"><span className="step-number">3</span>Join Queue</div>
        </div>
        <div className="queue-layout">
          <section className="card queue-main">
            <div className="section-head"><div><h2>Choose your care team</h2><p>Select the department for your visit today.</p></div><Link className="text-link" to="/clinics">Change clinic</Link></div>
            <div className="selected-clinic"><span className="clinic-square">✚</span><div><h3>General Hospital</h3><p>12 Central Avenue, Central District · Open until 8:00 pm</p></div><span className="status status-green">Open now</span></div>
            <div className="divider" />
            <div className="panel-head"><h3>Available departments</h3><span className="muted">Select one to continue</span></div>
            <div className="dept-choice-grid">
              {careTeams.map((team) => (
                <label className={`dept-choice${department === team.name ? " selected" : ""}`} key={team.name}>
                  <input className="department-radio" type="radio" name="department" value={team.name} checked={department === team.name} onChange={() => setDepartment(team.name)} />
                  <span className="radio" aria-hidden="true" />
                  <span><strong>{team.name}</strong><small>{team.waiting} people waiting · about {team.minutes} min</small></span>
                </label>
              ))}
            </div>
            <div className="divider" />
            <div className="queue-actions"><p>Preview sample queue information for your selected department. This does not create a queue entry.</p><button className="btn btn-primary" onClick={() => setJoined(true)} type="button">{joined ? "Preview selected ✓" : <>Preview Queue <span aria-hidden="true">→</span></>}</button></div>
            {joined && <p className="queue-confirmation" role="status">Sample ticket A12 is displayed for {department}. No queue entry was created.</p>}
          </section>
          <aside className="queue-side">
            <section className="card ticket-card"><div className="ticket-label">Your queue ticket</div><div className="ticket-number">A12</div><p>{department} · General Hospital</p>
              <div className="ticket-stats"><div className="ticket-stat"><strong>12<small>th</small></strong><span>in line</span></div><div className="ticket-stat"><strong>~{selectedTeam.minutes}</strong><span>minutes wait</span></div></div>
              <div className="meter"><span className="queue-meter-progress" /></div><div className="small"><span>Queue progress</span><span>56%</span></div>
            </section>
            <section className="card now-serving"><div className="now-serving-head"><h3>Now serving</h3><span className="status status-green">Live</span></div><div className="serving-num"><strong>A06</strong><span>{department}</span></div><div className="divider" /><div className="queue-side-actions"><span className="small muted">Your turn is getting closer</span><button className="btn btn-outline btn-sm" type="button" onClick={() => setJoined(false)}>Leave Queue</button></div></section>
          </aside>
        </div>
      </main>
      <Footer className="queue-footer">© 2026 MedQueue. Care, without the wait.</Footer>
    </>
  );
}

export default JoinQueue;
