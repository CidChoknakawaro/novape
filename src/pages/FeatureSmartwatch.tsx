import React from 'react'
import { useNavigate } from 'react-router-dom'

interface Notification {
  id: number
  title: string
  description: string
  timeAgo: string
}

const mockData: { group: string; showMarkAll?: boolean; items: Notification[] }[] = [
  {
    group: 'Today',
    showMarkAll: true,
    items: [
      {
        id: 1,
        title: 'Unusual Biometric Data',
        description:
          'It seems like your heartbeat rate has increased…',
        timeAgo: '2 M',
      },
      {
        id: 2,
        title: '10.00 Alert Don’t Vape!',
        description:
          'It can get hard but you need to push through…',
        timeAgo: '2 H',
      },
      {
        id: 3,
        title: 'Congrats On 20 Days!',
        description:
          'Your no‑vape journey is about to come to an end…',
        timeAgo: '3 H',
      },
    ],
  },
  {
    group: 'Yesterday',
    items: [
      {
        id: 4,
        title: '10.00 Alert Don’t Vape!',
        description:
          'Life is hard you need to choose what you want…',
        timeAgo: '1 D',
      },
    ],
  },
  {
    group: '26 May',
    items: [
      {
        id: 5,
        title: '15 Days Half Way!',
        description:
          'We’re halfway through your challenge…',
        timeAgo: '5 D',
      },
    ],
  },
]

export default function FeatureSmartwatch() {
  const nav = useNavigate()

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center bg-brand px-4 py-3">
        <button onClick={() => nav(-1)} className="text-white text-2xl">
          ←
        </button>
        <h1 className="flex-1 text-center text-white text-lg font-semibold">
          Alerts
        </h1>
        <button className="text-white text-sm">
          News •
        </button>
      </header>

      {/* Body */}
      <div className="flex-1 overflow-y-auto">
        {mockData.map(({ group, showMarkAll, items }) => (
          <div key={group} className="mb-4">
            {/* Group header */}
            <div className="flex items-center justify-between px-4 mb-2">
              <span className="px-3 py-1 bg-brand-light text-brand text-xs rounded-full">
                {group}
              </span>
              {showMarkAll && (
                <button className="text-brand text-sm">Mark all</button>
              )}
            </div>

            {/* Notifications */}
            <div className="space-y-2 px-4">
              {items.map((n, idx) => {
                const isSelected = idx === 1 && group === 'Today'
                return (
                  <div
                    key={n.id}
                    className={`
                      flex items-start space-x-3 p-3 rounded-xl
                      ${isSelected ? 'bg-brand-light' : 'bg-white'}
                    `}
                  >
                    {/* Icon */}
                    <div
                      className={`
                        w-10 h-10 flex items-center justify-center
                        rounded-full text-white text-xl
                        ${isSelected ? 'bg-brand' : 'bg-brand-light'}
                      `}
                    >
                      📅
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <p className="font-medium text-gray-800">{n.title}</p>
                      <p className="text-gray-600 text-sm">{n.description}</p>
                    </div>

                    {/* Timestamp */}
                    <span className="text-gray-500 text-xs">{n.timeAgo}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <nav className="flex items-center justify-around p-3 bg-white border-t">
        <button onClick={() => nav('/home')} className="text-gray-400 text-2xl">🏠</button>
        <button onClick={() => nav('/feature/journal')} className="text-gray-400 text-2xl">💬</button>
        <button onClick={() => nav('/feature/smartwatch')} className="text-brand text-2xl">⌚️</button>
        <button onClick={() => nav('/feature/professional')} className="text-gray-400 text-2xl">👤</button>
      </nav>
    </div>
  )
}