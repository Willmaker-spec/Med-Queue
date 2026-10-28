import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { clinicDirectory } from "../data/medqueueClinics";

const departments = ["All care", "General Medicine", "Dental Care", "Women's Health", "Pediatrics", "Cardiology"];

function Clinics() {
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All care");
  const [location, setLocation] = useState("Any location");
  const [sort, setSort] = useState("Recommended");
  const [selectedId, setSelectedId] = useState(clinicDirectory[0].id);
  const selectedClinic = clinicDirectory.find((clinic) => clinic.id === selectedId) ?? clinicDirectory[0];

  const filteredClinics = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();
    const filtered = clinicDirectory.filter((clinic) => {
      const matchesQuery = !searchTerm || `${clinic.name} ${clinic.specialties} ${clinic.location}`.toLowerCase().includes(searchTerm);
      const matchesDepartment = department === "All care" || clinic.specialties.includes(department);
      const matchesLocation = location === "Any location" || clinic.location === location;
      return matchesQuery && matchesDepartment && matchesLocation;
    });
    return sort === "Shortest wait" ? [...filtered].sort((a, b) => a.wait - b.wait) : filtered;
  }, [department, location, query, sort]);

  return (
    <>
      <Header />
      <main className="shell main-content">
        <span className="eyebrow"><span className="eyebrow-dot" />Find care near you</span>
        <h1 className="page-title clinics-title">Find a Clinic</h1>
        <p className="page-subtitle">Explore trusted clinics and see current wait times before you go.</p>
        <form className="card search-panel" onSubmit={(event) => event.preventDefault()}>
          <label className="form-field"><span aria-hidden="true">⌕</span><input aria-label="Search clinics" placeholder="Clinic name, specialty, or keyword" value={query} onChange={(event) => setQuery(event.target.value)} /></label>
          <select className="select-field" aria-label="Department" value={department} onChange={(event) => setDepartment(event.target.value)}>
            <option>All care</option>{departments.slice(1).map((item) => <option key={item}>{item}</option>)}
          </select>
          <select className="select-field" aria-label="Location" value={location} onChange={(event) => setLocation(event.target.value)}>
            {["Any location", "Central District", "Midtown", "Metro Centre", "Riverside"].map((item) => <option key={item}>{item}</option>)}
          </select>
          <button className="btn btn-primary" type="submit">Search clinics</button>
        </form>
        <div className="directory-layout">
          <section>
            <div className="section-head">
              <div><h2>Clinics near you</h2><p>Showing {filteredClinics.length} trusted clinics in your area</p></div>
              <select className="select-field" aria-label="Sort clinics" value={sort} onChange={(event) => setSort(event.target.value)}>
                <option value="Recommended">Sort: Recommended</option><option value="Shortest wait">Shortest wait</option>
              </select>
            </div>
            <div className="category-row">
              {departments.map((item) => <button className={`category${department === item ? " active" : ""}`} key={item} onClick={() => setDepartment(item)} type="button">{item}</button>)}
            </div>
            <div className="directory-grid">
              {filteredClinics.map((clinic) => (
                <article className="card directory-card" key={clinic.id} onMouseEnter={() => setSelectedId(clinic.id)} onFocus={() => setSelectedId(clinic.id)}>
                  <div className="directory-image photo" style={{ backgroundImage: `url("${clinic.image}")` }}><span className={`status ${clinic.status === "Busy" ? "status-yellow" : "status-green"}`}>{clinic.status}</span></div>
                  <div className="clinic-body">
                    <h3>{clinic.name}</h3><div className="clinic-dept">{clinic.specialties}</div>
                    <div className="clinic-meta"><span>⌖ {clinic.address}</span><span>◷ <strong>{clinic.wait} min</strong> estimated wait</span></div>
                    <div className="clinic-bottom">
                      <span className="wait">★ <strong>{clinic.rating}</strong> <span className="muted">({clinic.reviews} reviews)</span></span>
                      <Link className="btn btn-outline btn-sm" to={`/clinics/${clinic.id}`}>View Details →</Link>
                    </div>
                  </div>
                </article>
              ))}
              {filteredClinics.length === 0 && <p className="empty-results">No clinics match your search. Try another specialty or location.</p>}
            </div>
          </section>
          <aside className="card detail-panel">
            <span className="eyebrow"><span className="eyebrow-dot" />Clinic preview</span>
            <div className="detail-photo photo" style={{ backgroundImage: `url("${selectedClinic.image}")` }} />
            <h3>{selectedClinic.name}</h3>
            <p className="small muted detail-description">Comprehensive care, close to home.</p>
            <div className="detail-info"><span aria-hidden="true">⌖</span><div><b>{selectedClinic.location}</b>{selectedClinic.address} · nearby</div></div>
            <div className="detail-info"><span aria-hidden="true">◷</span><div><b>Today, {selectedClinic.hours}</b>Average wait about {selectedClinic.wait} minutes</div></div>
            <div className="divider" />
            <strong className="small">Available departments</strong>
            <div className="dept-list"><div className="dept-item"><span>{selectedClinic.department}</span><span className="status status-green">{selectedClinic.wait} min</span></div></div>
            <Link className="btn btn-primary preview-action" to={`/clinics/${selectedClinic.id}`}>View clinic details →</Link>
          </aside>
        </div>
      </main>
      <Footer className="directory-footer" />
    </>
  );
}

export default Clinics;
