import { Link, useParams } from "react-router-dom";
import { clinics } from "../data/clinics";

function ClinicDetails() {
  const { id } = useParams();
  const clinic = clinics.find((item) => String(item.id) === id);

  if (!clinic) {
    return (
      <main>
        <h1>Clinic not found</h1>
        <Link to="/clinics">Back to clinics</Link>
      </main>
    );
  }

  return (
    <main>
      <Link to="/clinics">Back to clinics</Link>
      <h1>{clinic.name}</h1>
      <p>{clinic.location}</p>
      <h2>Departments</h2>
      <ul>
        {clinic.departments.map((department) => (
          <li key={department.id}>
            <h3>{department.name}</h3>
            <p>Now serving: {department.nowServing}</p>
            <p>People waiting: {department.waiting}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ClinicDetails;