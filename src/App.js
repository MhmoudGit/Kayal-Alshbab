import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Loader from "./components/Loader"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Menu from "./pages/Menu"
import NotFoundPage from "./pages/NotFoundPage"
import Qrcode from "./pages/Qrcode"
import Restaurant from "./pages/Restaurant"
import Settings from "./pages/Settings"

function App() {
  const [login, setLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div
      dir="rtl"
      className="flex flex-col lg:flex-row text-indigo-900  bg-gray-50 min-h-[100vh] select-none"
    >
      {login ? (
        <Router>
          <Navbar />
          {isLoading ? <Loader /> : null}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Menu setIsLoading={setIsLoading} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/qr-code" element={<Qrcode />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Router>
      ) : (
        <Login />
      )}
    </div>
  )
}

export default App
