import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import doctorsImage from '../assets/TICTADoctors.png'
import servicesImage from '../assets/TICTAServices.png'

export default function ProfessionalHelp() {
  const nav = useNavigate()
  const [tab, setTab] = useState<'doctors' | 'services'>('doctors')

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3">
        <button onClick={() => nav('/home')} className="text-2xl">←</button>
        <h1 className="flex-1 text-center text-lg font-semibold text-gray-800">
          Professional Help
        </h1>
        <div className="flex space-x-2">
          <button className="p-2 bg-brand-light rounded-full text-brand">🔍</button>
          <button className="p-2 bg-brand-light rounded-full text-brand">⚙️</button>
        </div>
      </header>

      {/* Sort + Tabs */}
      <div className="px-4 py-2 space-y-2">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Sort By:</span>
          <button className="px-2 py-1 bg-brand text-white rounded-full text-xs">A→Z</button>
          <button className="p-1 text-gray-500">★</button>
          <button className="p-1 text-red-500">♥︎</button>
          <button className="p-1 text-gray-500">⟳</button>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setTab('doctors')}
            className={`flex-1 py-2 rounded-full text-center ${
              tab === 'doctors'
                ? 'bg-brand-light text-brand'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Doctors
          </button>
          <button
            onClick={() => setTab('services')}
            className={`flex-1 py-2 rounded-full text-center ${
              tab === 'services'
                ? 'bg-brand-light text-brand'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            Services
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-2 pb-6">
        {tab === 'doctors' ? (
          <div className="flex-1 flex items-center justify-center p-4">
            <img
              src={doctorsImage}
              alt="Doctors Overview"
              className="max-w-full h-auto rounded-lg shadow"
            />
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center p-4">
            <img
              src={servicesImage}
              alt="Services Overview"
              className="max-w-full h-auto rounded-lg shadow"
            />
          </div>
        )}
      </div>

      {/* Bottom Nav */}
      <nav className="flex items-center justify-around p-3 bg-white border-t">
        <button onClick={() => nav('/home')} className="text-gray-400 text-2xl">🏠</button>
        <button onClick={() => nav('/feature/journal')} className="text-gray-400 text-2xl">💬</button>
        <button onClick={() => nav('/feature/no-vape')} className="text-gray-400 text-2xl">📅</button>
        <button onClick={() => nav('/feature/professional')} className="text-brand text-2xl">👤</button>
      </nav>
    </div>
  )
}
