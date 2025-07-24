// src/pages/FeatureJournal.tsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface Entry {
  date: string
  text: string
}

export default function FeatureJournal() {
  const nav = useNavigate()
  // sample data – you can replace with real state or props
  const [entries] = useState<Entry[]>([
    { date: '27/02/2025', text: 'I did 10 Push Ups today!!' },
    { date: '05/02/2025', text: 'Went to the temple' },
    { date: '01/02/2025', text: 'How I almost vaped' },
    { date: '29/01/2025', text: 'This is hard…' },
  ])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3">
        <button onClick={() => nav('/home')} className="text-2xl">←</button>
        <h1 className="flex-1 text-center text-lg font-semibold text-gray-800">
          Journals
        </h1>
        <div className="flex items-center space-x-2">
          <button className="p-2 bg-brand-light rounded-full text-brand">
            🔍
          </button>
          <button className="p-2 bg-brand-light rounded-full text-brand">
            ⚙️
          </button>
        </div>
      </header>

      {/* Sort + Add */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Sort By:</span>
          <button className="px-3 py-1 bg-brand text-white rounded-full text-xs">
            Latest
          </button>
          <button className="p-1 text-gray-500">★</button>
          <button className="p-1 text-red-500">♥︎</button>
        </div>
        <button
          onClick={() => nav('/feature/journal/new')}
          className="p-2 bg-brand-light rounded-full text-brand text-xl"
          aria-label="Add Entry"
        >
          ＋
        </button>
      </div>

      {/* Entries List */}
      <div className="flex-1 overflow-y-auto px-4 space-y-4 pb-6">
        {entries.map((e, i) => (
          <button
            key={i}
            onClick={() => nav(`/feature/journal/${i}`)}
            className="w-full bg-brand-light p-4 rounded-2xl text-left hover:shadow-lg transition-shadow"
          >
            <p className="text-sm text-gray-700 mb-2">{e.date}</p>
            <p className="text-gray-800 mb-3">{e.text}</p>
            <div className="flex items-center space-x-2 text-xs">
              <button className="px-2 py-1 bg-brand text-white rounded-full">
                Info
              </button>
              <button className="px-2 py-1 bg-brand-light text-brand rounded-full">
                📅
              </button>
              <button className="px-2 py-1 bg-brand-light text-brand rounded-full">
                ?
              </button>
              <button className="px-2 py-1 bg-brand-light text-red-500 rounded-full">
                ♥︎
              </button>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
