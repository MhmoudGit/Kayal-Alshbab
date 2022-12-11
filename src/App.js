import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";
import Qrcode from "./pages/Qrcode";
import Restaurant from "./pages/Restaurant";

function App() {
  return (
    <div dir="rtl" className="flex flex-col lg:flex-row text-indigo-900  bg-gray-50">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/" element={<Menu />} />
          <Route path="/qr-code" element={<Qrcode />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
