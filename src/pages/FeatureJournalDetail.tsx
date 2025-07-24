// src/pages/FeatureJournalDetail.tsx
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

interface Entry {
  title: string
  date: string
  fullText: string
  author: string
  dayCount: number
  timestamp: string
}

// mock data — replace with real fetch/store
const SAMPLE_ENTRIES: Record<string, Entry> = {
  '0': {
    title: 'I did 10 Push Ups today!!',
    date: '27/02/2025',
    fullText:
      'Today was an amazing day, I was struggling to even 2 push ups around a month ago but today i did 10! I hope I will hit my PR at the gym soon!!',
    author: 'Alexander',
    dayCount: 28,
    timestamp: 'Thursday 27 Feb, 23:02',
  },
  // …other entries…
}

export default function FeatureJournalDetail() {
  const nav = useNavigate()
  const { id } = useParams<{ id: string }>()
  const entry = SAMPLE_ENTRIES[id!] || SAMPLE_ENTRIES['0']

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3">
        <button onClick={() => nav(-1)} className="text-2xl">←</button>
        <h1 className="flex-1 text-center text-lg font-semibold text-gray-800">
          Journals
        </h1>
        <div className="flex space-x-2">
          <button className="p-2 bg-brand-light rounded-full text-brand">🔍</button>
          <button className="p-2 bg-brand-light rounded-full text-brand">⚙️</button>
        </div>
      </header>

      {/* Entry header */}
      <div className="px-4 pt-4">
        <h2 className="text-xl font-medium text-gray-800">{entry.title}</h2>
        <p className="text-sm text-brand mb-4">{entry.date}</p>
      </div>

      {/* Detail card */}
      <div className="flex-1 px-4 overflow-y-auto">
        <div className="bg-brand-light p-4 rounded-2xl space-y-4">
          {/* Full text bubble */}
          <div className="bg-brand text-white p-3 rounded-xl">
            {entry.fullText}
          </div>

          {/* Author & day */}
          <div className="bg-white text-center py-2 rounded-xl font-medium text-gray-800">
            {entry.author} · Day {entry.dayCount} NoVape
          </div>

          {/* Footer row */}
          <div className="flex items-center justify-between">
            {/* Left icons + timestamp */}
            <div className="flex items-center space-x-2 text-sm">
              <button className="p-1 text-brand">★</button>
              <button className="p-1 text-brand">🔔</button>
              <span className="text-gray-600">{entry.timestamp}</span>
            </div>
            {/* Action icons */}
            <div className="flex items-center space-x-2 text-lg">
              <button className="p-1 text-gray-500">ℹ️</button>
              <button className="p-1 text-brand">❓</button>
              <button className="p-1 text-gray-500">☆</button>
              <button className="p-1 text-red-500">♥︎</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <nav className="flex items-center justify-around p-3 bg-white border-t">
        <button onClick={() => nav('/home')} className="text-brand text-2xl">🏠</button>
        <button onClick={() => nav('/feature/journal')} className="text-gray-400 text-2xl">💬</button>
        <button onClick={() => nav('/feature/no-vape')} className="text-gray-400 text-2xl">📅</button>
        <button onClick={() => nav('/feature/professional')} className="text-gray-400 text-2xl">👤</button>
      </nav>
    </div>
  )
}
