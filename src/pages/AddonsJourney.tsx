// src/pages/AddonsJourney.tsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
// import your map image
import journeyMap from '../assets/TICTAMap.jpg'

export default function AddonsJourney() {
  const nav = useNavigate()

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="flex items-center bg-brand px-4 py-3">
        <button onClick={() => nav('/home')} className="text-white text-2xl">
          ←
        </button>
        <h2 className="flex-1 text-center text-white text-lg font-semibold">
          Your Journey <span role="img" aria-label="key">🔑</span>
        </h2>
        <div className="w-6">{/* placeholder for right icon */}</div>
      </header>
      <h1 className="flex-1 text-center font-semibold text-gray-800">30 Days NoVape Challenge</h1>

      {/* Map Image centered */}
      <div className="flex-1 flex items-center justify-center p-4 bg-white">
        <img
          src={journeyMap}
          alt="30 Days NoVape Challenge Map"
          className="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Bottom Navigation */}
      <nav className="flex items-center justify-around p-3 bg-white border-t">
        <button onClick={() => nav('/home')} className="text-brand text-2xl">🏠</button>
        <button onClick={() => nav('/feature/journal')} className="text-gray-400 text-2xl">💬</button>
        <button onClick={() => nav('/feature/no-vape')} className="text-gray-400 text-2xl">📅</button>
        <button onClick={() => nav('/feature/professional')} className="text-gray-400 text-2xl">👤</button>
      </nav>
    </div>
  )
}
