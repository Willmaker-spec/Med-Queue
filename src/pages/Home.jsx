import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { clinicDirectory } from "../data/medqueueClinics";

function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <span className="eyebrow"><span className="eyebrow-dot" />Care that moves with you</span>
              <h1>Skip the Wait,<br /><span>Not the Care.</span></h1>
              <p>Find trusted clinics, join the queue from wherever you are, and spend less time waiting and more time feeling better.</p>
              <div className="hero-actions">
                <Link className="btn btn-primary" to="/clinics">Find a Clinic <span aria-hidden="true">→</span></Link>
                <a className="btn btn-outline" href="#how-it-works"><span aria-hidden="true">▷</span> How It Works</a>
              </div>
              <div className="hero-trust"><span className="avatar">✓</span><span><strong>Simple, secure, stress-free.</strong> Your care starts here.</span></div>
            </div>
            <div className="hero-image photo" role="img" aria-label="Bright, welcoming modern clinic reception">
              <div className="hero-note">
                <div className="hero-note-head"><span className="avatar">✓</span><span>You're all checked in!</span></div>
                <p>Your visit is in good hands.<br />Ticket <strong>A12</strong> · about 18 min</p>
              </div>
            </div>
          </div>
        </section>
        <section className="benefits" id="how-it-works">
          <div className="shell benefit-grid">
            <article className="benefit"><span className="benefit-icon">◷</span><div><h3>Save Time</h3><p>Join remotely. Arrive when it's your turn.</p></div></article>
            <article className="benefit"><span className="benefit-icon">♡</span><div><h3>Be Informed</h3><p>Know your place and wait time in real time.</p></div></article>
            <article className="benefit"><span className="benefit-icon">⌖</span><div><h3>Better Access</h3><p>Find the right care, close to home.</p></div></article>
          </div>
        </section>
        <section className="popular shell">
          <div className="section-head">
            <div><span className="eyebrow">Care near you</span><h2 className="popular-title">Popular Clinics</h2><p>Trusted local clinics, ready when you are.</p></div>
            <Link className="text-link" to="/clinics">Explore all clinics <span aria-hidden="true">→</span></Link>
          </div>
          <div className="clinic-grid">
            {clinicDirectory.map((clinic) => (
              <article className="card clinic-card" key={clinic.id}>
                <div className="clinic-img photo" style={{ backgroundImage: `url("${clinic.image}")` }}><span className="chip">{clinic.tag}</span></div>
                <div className="clinic-body">
                  <h3>{clinic.name}</h3>
                  <div className="clinic-dept">{clinic.department} · {clinic.id === "general-hospital" ? "8 departments" : "4 specialists"}</div>
                  <div className="clinic-meta"><span>⌖ {clinic.location}</span><span>◷ <strong>{clinic.wait} min</strong> average wait</span></div>
                  <div className="clinic-bottom"><span className="wait">Open today · <strong>{clinic.hours}</strong></span><Link className="text-link" to={`/clinics/${clinic.id}`}>View clinic →</Link></div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer className="home-footer" />
    </>
  );
}

export default Home;
