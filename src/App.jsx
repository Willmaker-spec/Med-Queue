import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Clinics from "./pages/Clinics";
import ClinicDetails from "./pages/ClinicDetails";
import JoinQueue from "./pages/JoinQueue";
import PatientDashboard from "./pages/PatientDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import ContactUS from "./pages/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clinics" element={<Clinics />} />
      <Route path="/clinics/:id" element={<ClinicDetails />} />
      <Route path="/queue" element={<JoinQueue />} />
      <Route path="/patient-dashboard" element={<PatientDashboard />} />
      <Route path="/staff-dashboard" element={<StaffDashboard />} />
      <Route path="/contact" element={<ContactUS />} />
    </Routes>
  );
}

export default App;
