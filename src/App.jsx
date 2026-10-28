import { Routes, Route } from "react-router-dom";
import About from "./pages/About"
import Testimonial from "./pages/Testimonial"
import Home from "./pages/Home";
import Clinics from "./pages/Clinics";
import ClinicDetails from "./pages/ClinicDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/clinics" element={<Clinics />} />
      <Route path="/clinics/:id" element={<ClinicDetails />} />
      <Route path="/About" element={<About />}/>
      <Route path="/Testimonial" element={<Testimonial />}/>
    </Routes>
  );
}

export default App;
