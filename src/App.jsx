import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Clinics from "./pages/Clinics";
import ClinicDetails from "./pages/ClinicDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clinics" element={<Clinics />} />
        <Route path="/clinics/:id" element={<ClinicDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
