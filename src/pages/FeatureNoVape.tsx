import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const daysOfWeekFull = ['MON','TUE','WED','THU','FRI','SAT','SUN']

export default function FeatureNoVape() {
  const nav = useNavigate()
  const [duration, setDuration] = useState<'7days'|'30days'|'custom'>('7days')
  const [selectedDay, setSelectedDay] = useState(24)

  // build a simple 35-cell calendar for demo
  const calendarCells = Array.from({ length: 35 }, (_, i) => {
    const day = i - 3 // shift so that 1 lands under WED (index 2)
    return day >= 1 && day <= 31 ? day : null
  })

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3">
        {/* Back */}
        <button onClick={() => nav('/home')} className="text-2xl">←</button>

        {/* Clickable Schedule pill */}
        <button
          onClick={() => nav('/feature/no-vape/schedule')}
          className="flex items-center space-x-2 px-3 py-1 bg-brand text-white rounded-full text-sm"
        >
          <svg className="w-4 h-4" /* calendar icon */></svg>
          <span>Schedule</span>
        </button>

        {/* Help & Favorite */}
        <div className="flex space-x-2">
          <button className="p-2 bg-brand-light rounded-full text-brand">?</button>
          <button className="p-2 bg-brand-light rounded-full text-red-500">♥︎</button>
        </div>
      </header>

      {/* Duration selector */}
      <div className="px-4 mb-4">
        <div className="bg-brand-light rounded-3xl p-4">
          <div className="flex space-x-2 mb-3">
            {[
              { key: '7days', label: '7 days' },
              { key: '30days', label: '30 days' },
            ].map(opt => (
              <button
                key={opt.key}
                onClick={() => setDuration(opt.key as any)}
                className={`
                  flex-1 flex items-center justify-center
                  h-16
                  rounded-2xl
                  font-semibold text-xl
                  ${
                    duration === opt.key
                      ? 'bg-brand text-white'
                      : 'bg-white text-brand'
                  }
                `}
              >
                {opt.label.split(' ')[0]}
                <span className="block text-sm">{opt.label.split(' ')[1]}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setDuration('custom')}
            className={`
              w-full h-16
              bg-${duration === 'custom' ? 'brand' : 'brand-light'}
              ${duration === 'custom' ? 'text-white' : 'text-brand'}
              rounded-2xl
              text-2xl font-light
            `}
          >
            Custom
          </button>
        </div>
      </div>

      {/* Date Selection */}
      <div className="px-4 mb-2">
        <h3 className="text-xl font-semibold text-brand mb-1">Date Selection</h3>
        <p className="text-gray-600 text-sm">
          Select the day you want to start your NoVape Journey
        </p>
      </div>

      {/* Month nav + day pills */}
      <div className="px-4 bg-brand-light py-3">
        <div className="flex items-center justify-center text-sm font-medium text-gray-700 mb-2">
          <button className="px-2">‹</button>
          <span className="px-4">MONTH</span>
          <button className="px-2">›</button>
        </div>
        <div className="flex items-center justify-between mb-2">
          {daysOfWeekFull.map((d, i) => (
            <span
              key={i}
              className={`
                px-2 py-1 text-xs rounded-full
                ${d === 'WED'
                  ? 'bg-brand text-white'
                  : 'bg-white text-gray-700'}
              `}
            >
              {d}
            </span>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1 p-3 bg-white rounded-2xl">
          {calendarCells.map((day, i) => (
            <button
              key={i}
              onClick={() => day && setSelectedDay(day)}
              className={`
                h-8 flex items-center justify-center text-sm
                ${day === selectedDay
                  ? 'bg-brand text-white'
                  : 'text-gray-600'}
                ${day ? '' : 'opacity-0'}
                rounded
              `}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom navigation */}
      <nav className="flex items-center justify-around p-3 bg-white border-t">
        <button onClick={() => nav('/home')} className="text-gray-400 text-2xl">🏠</button>
        <button onClick={() => nav('/feature/journal')} className="text-gray-400 text-2xl">💬</button>
        <button onClick={() => nav('/feature/no-vape')} className="text-brand text-2xl">📅</button>
        <button onClick={() => nav('/feature/professional')} className="text-gray-400 text-2xl">👤</button>
      </nav>
    </div>
  )
}
