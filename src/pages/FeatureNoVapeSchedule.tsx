// src/pages/FeatureNoVapeSchedule.tsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const days = [
  { label: 'MON', date: 22 },
  { label: 'TUE', date: 23 },
  { label: 'WED', date: 24 },
  { label: 'THU', date: 25 },
  { label: 'FRI', date: 26 },
  { label: 'SAT', date: 27 },
]

const times = [
  '9:00 AM','9:30 AM','10:00 AM','11:00 AM',
  '11:30 AM','12:00 PM','12:30 PM','1:00 PM',
  '1:30 PM','2:00 PM','2:30 PM','3:00 PM',
  '3:30 PM','4:00 PM'
]

export default function FeatureNoVapeSchedule() {
  const nav = useNavigate()
  const [selectedDay, setSelectedDay] = useState(24)
  const [selectedTime, setSelectedTime] = useState('10:00 AM')

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center px-4 py-3">
        <button onClick={() => nav(-1)} className="text-2xl">←</button>
        <span className="ml-2 px-4 py-1 bg-brand text-white rounded-full text-sm flex-1 text-center">
          Date Selection
        </span>
        <div className="flex space-x-2 ml-2">
          <button className="p-2 bg-brand-light rounded-full text-brand">?</button>
          <button className="p-2 bg-brand-light rounded-full text-red-500">♥︎</button>
        </div>
      </header>

      {/* Day picker */}
      <div className="px-4 py-2 bg-brand-light flex items-center space-x-1 overflow-x-auto">
        <button onClick={() => {/* TODO: prev month */}} className="px-2">‹</button>
        {days.map(d => (
          <button
            key={d.date}
            onClick={() => setSelectedDay(d.date)}
            className={`
              px-3 py-1 rounded-full flex flex-col items-center
              ${selectedDay === d.date ? 'bg-brand text-white' : 'bg-white text-gray-800'}
            `}
          >
            <span className="text-xs">{d.label}</span>
            <span className="text-sm font-semibold">{d.date}</span>
          </button>
        ))}
        <button onClick={() => {/* TODO: next month */}} className="px-2">›</button>
      </div>

      {/* Time picker */}
      <div className="px-4 py-2 border-b border-gray-200">
        <p className="text-gray-800 font-medium mb-2">
          What is the typical time you have the urge to vape?
        </p>
        <div className="flex flex-wrap gap-2">
          {times.map(t => (
            <button
              key={t}
              onClick={() => setSelectedTime(t)}
              className={`
                px-3 py-1 text-sm rounded-full
                ${selectedTime === t 
                  ? 'bg-brand text-white' 
                  : 'bg-brand-light text-brand'}
              `}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Commitment form */}
      <div className="flex-1 overflow-y-auto px-4 py-3">
        <p className="text-brand font-medium mb-2">Write your details to the commitment</p>
        <input
          placeholder="Full Name"
          className="w-full px-3 py-2 mb-3 bg-brand-light rounded focus:ring-2 focus:ring-brand"
        />
        <input
          placeholder="Age"
          className="w-full px-3 py-2 mb-3 bg-brand-light rounded focus:ring-2 focus:ring-brand"
        />
        <div className="flex space-x-2 mb-3">
          {['Male','Female','Other'].map(g => (
            <button
              key={g}
              className="px-4 py-1 bg-brand-light text-brand rounded-full"
            >
              {g}
            </button>
          ))}
        </div>
        <textarea
          placeholder="Enter Your Message Here..."
          rows={4}
          className="w-full px-3 py-2 bg-brand-light rounded focus:ring-2 focus:ring-brand resize-none"
        />
      </div>

      {/* Next button → navigate to Appointment Details */}
      <div className="px-4 pb-4">
        <button
          onClick={() => nav('/feature/no-vape/details')}
          className="w-full py-3 bg-brand text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-200"
        >
          Next
        </button>
      </div>

      {/* Bottom nav */}
      <nav className="flex items-center justify-around p-3 bg-white border-t">
        <button onClick={() => nav('/feature/no-vape')} className="text-gray-400">🏠</button>
        <button onClick={() => nav('/feature/journal')} className="text-gray-400">💬</button>
        <button onClick={() => nav('/feature/no-vape/schedule')} className="text-brand">📅</button>
        <button onClick={() => nav('/feature/professional')} className="text-gray-400">👤</button>
      </nav>
    </div>
  )
}
