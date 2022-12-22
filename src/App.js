import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Menu from "./pages/Menu"
import Qrcode from "./pages/Qrcode"
import Restaurant from "./pages/Restaurant"
import Settings from "./pages/Settings"

function App() {
  const [login, setLogin] = useState(false)


  return (
    <div
      dir="rtl"
      className="flex flex-col lg:flex-row text-indigo-900  bg-gray-50 min-h-[100vh] select-none"
    >
      {login ? <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Menu/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/qr-code" element={<Qrcode />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router> : <Login />}
      
    </div>
  )
}

export default App
