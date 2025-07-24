// src/pages/Home.tsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import BellIcon from '../assets/icons/bell.svg'
// import SettingsIcon from '../assets/icons/settings.svg'
// import HeartIcon from '../assets/icons/heart.svg'
// import FilterIcon from '../assets/icons/filter.svg'
// import SearchIcon from '../assets/icons/search.svg'
// import HomeIcon from '../assets/icons/home.svg'
// import JournalIcon from '../assets/icons/journal.svg'
// import ScheduleIcon from '../assets/icons/schedule.svg'
// import ProfileIcon from '../assets/icons/profile.svg'
// import AvatarImg from '../assets/avatar.jpg'

const dates = [
  { day: 'MON', date: 9 },
  { day: 'TUE', date: 10 },
  { day: 'WED', date: 11 },
  { day: 'THU', date: 12 },
  { day: 'FRI', date: 13 },
  { day: 'SAT', date: 14 },
]

const features = [
  {
    icon: '📅',
    title: 'Create a NoVape Schedule',
    desc: 'Establish your vape-free life!',
    path: '/feature/no-vape',
  },
  {
    icon: '📝',
    title: 'Journal',
    desc: 'Tell us how your NoVape journey is',
    path: '/feature/journal',
  },
  {
    icon: '⌚️',
    title: 'Alerts on your Smartwatch',
    desc: 'See notifications on your Smartwatch',
    path: '/feature/smartwatch',
  },
  {
    icon: '💬',
    title: 'Seek Professional help',
    desc: 'Discuss your vaping habits with a doctor',
    path: '/feature/professional',
  },
]

export default function Home() {
  const nav = useNavigate()
  const [selected, setSelected] = useState(11)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-3">
          {/* Replace with <img src={AvatarImg} ... /> */}
          <div className="w-10 h-10 bg-gray-300 rounded-full" />
          <div>
            <p className="text-sm text-gray-500">Hi, WelcomeBack</p>
            <p className="text-base font-semibold text-gray-900">Alexander</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 bg-brand-light rounded-full">
            {/* <BellIcon className="w-5 h-5 text-brand" /> */}
            🔔
          </button>
          <button className="p-2 bg-brand-light rounded-full">
            {/* <SettingsIcon className="w-5 h-5 text-brand" /> */}
            ⚙️
          </button>
        </div>
      </header>

      {/* Favorite & Search */}
      <div className="flex items-center space-x-2 px-4 pb-3">
        <button className="flex-1 flex items-center space-x-2 px-3 py-2 bg-brand-light rounded-full">
          {/* <HeartIcon className="w-5 h-5 text-brand" /> */}
          <span className="text-brand font-medium">Favorite</span>
        </button>
        <button className="p-2 bg-brand-light rounded-full">
          {/* <FilterIcon className="w-5 h-5 text-brand" /> */}
          🔍
        </button>
      </div>

      {/* Dates & Progress (light-blue bg) */}
      <div className="bg-brand-light px-4 pt-2 pb-5">
        {/* Date carousel */}
        <div className="flex space-x-2 overflow-x-auto">
          {dates.map(d => {
            const isActive = d.date === selected
            return (
              <button
                key={d.date}
                onClick={() => setSelected(d.date)}
                className={`
                  flex flex-col items-center justify-center
                  w-12 h-12
                  ${isActive ? 'bg-brand text-white' : 'bg-white text-gray-800'}
                  rounded-full
                  flex-shrink-0
                `}
              >
                <span className="text-sm font-semibold">{d.date}</span>
                <span className="text-xs">{d.day}</span>
              </button>
            )
          })}
        </div>

        {/* Progress card */}
        <div className="mt-4 p-4 bg-white rounded-lg">
          <p className="text-base">
            <span className="text-red-500 font-bold">60% </span>
            done on your{' '}
            <span className="text-brand font-bold">30 day no vape challenge.</span>
          </p>
        </div>
      </div>

    {/* Feature list: each card is its own button */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 space-y-3">
        {features.map((f) => (
          <button
            key={f.title}
            onClick={() => nav(f.path)}
            className="
              w-full flex items-center
              bg-white border border-brand-light rounded-lg p-3
              hover:shadow-lg transition-shadow duration-200
              focus:outline-none
            "
          >
            <div className="text-2xl mr-3">{f.icon}</div>
            <div className="flex-1">
              <p className="text-gray-800 font-medium">{f.title}</p>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
            <div className="text-gray-400 text-xl">?</div>
          </button>
        ))}
      </div>

      {/* Bottom Navigation */}
      <nav className="flex items-center justify-around p-3 bg-white border-t border-gray-200">
        {/* Swap in real icons */}
        <button className="text-brand text-2xl">🏠</button>
        <button className="text-gray-400 text-2xl">💬</button>
        <button className="text-gray-400 text-2xl">📅</button>
        <button className="text-gray-400 text-2xl">👤</button>
      </nav>
    </div>
  )
}
