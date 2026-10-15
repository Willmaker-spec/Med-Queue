import { Route, Routes } from "react-router-dom";
import Clinics from "./pages/Clinics.jsx";
import ClinicDetails from "./pages/ClinicDetails.jsx";
import Home from "./pages/Home.jsx";
import JoinQueue from "./pages/JoinQueue.jsx";
import PatientDashboard from "./pages/PatientDashboard.jsx";
import StaffDashboard from "./pages/StaffDashboard.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clinics" element={<Clinics />} />
      <Route path="/clinics/:id" element={<ClinicDetails />} />
      <Route path="/queue" element={<JoinQueue />} />
      <Route path="/patient-dashboard" element={<PatientDashboard />} />
      <Route path="/staff-dashboard" element={<StaffDashboard />} />
    </Routes>
  );
}

export default App;
