import { Link, useParams } from "react-router-dom";
import { Footer, Header } from "../components/MockupChrome.jsx";
import { mockupClinics } from "../data/mockupClinics.js";

function ClinicDetails() {
  const { id } = useParams();
  const clinic = mockupClinics.find((item) => item.id === id);

  if (!clinic) {
    return (
      <>
        <Header />
        <main className="shell main-content">
          <h1 className="page-title">Clinic not found</h1>
          <Link className="text-link" to="/clinics">Back to clinics</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="shell main-content">
        <Link className="text-link" to="/clinics">← Back to clinics</Link>
        <div className="card mockup-clinic-detail">
          <div className="detail-photo photo" style={{ backgroundImage: `url("${clinic.image}")` }} />
          <span className="eyebrow"><span className="eyebrow-dot" />{clinic.status}</span>
          <h1 className="page-title">{clinic.name}</h1>
          <p className="page-subtitle">{clinic.specialties} · {clinic.address}</p>
          <p>Open today {clinic.hours}. Current average wait is about {clinic.wait} minutes.</p>
          <Link className="btn btn-primary" to="/queue">Join this clinic's queue →</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ClinicDetails;
