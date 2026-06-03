import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Fuel from './pages/Fuel'
import Service from './pages/Service'
import Spares from './pages/Spares'
import Trips from './pages/Trips'
import Settings from './pages/Settings'

export default function App(){
  return (
    <div className="container py-4">
      <header className="text-center mb-4">
        <h1>🏍️ My Bike Track</h1>
        <p className="text-muted">Fuel • Mileage • Service • Maintenance</p>
      </header>

      <nav className="mb-4 d-flex justify-content-center gap-2">
        <Link className="btn btn-sm btn-outline-primary" to="/">Dashboard</Link>
        <Link className="btn btn-sm btn-outline-primary" to="/fuel">Fuel</Link>
        <Link className="btn btn-sm btn-outline-primary" to="/service">Service</Link>
        <Link className="btn btn-sm btn-outline-primary" to="/spares">Spares</Link>
        <Link className="btn btn-sm btn-outline-primary" to="/trips">Trips</Link>
        <Link className="btn btn-sm btn-outline-secondary" to="/settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/fuel" element={<Fuel />} />
        <Route path="/service" element={<Service />} />
        <Route path="/spares" element={<Spares />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  )
}
