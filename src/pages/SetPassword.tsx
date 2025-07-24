// src/pages/SetPassword.tsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SetPassword() {
  const nav = useNavigate()
  const [pwd, setPwd] = useState('')
  const [confirm, setConfirm] = useState('')

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault()
    // After creating password, send them to the login screen
    nav('/login')
  }

  return (
    <div className="min-h-screen bg-white p-4 flex items-center justify-center">
      <form onSubmit={handleCreate} className="w-full max-w-xs space-y-4">
        <h2 className="text-xl font-semibold text-brand text-center">Set Password</h2>

        <label>
          <span className="block text-gray-700">Password</span>
          <input
            type="password"
            value={pwd}
            onChange={e => setPwd(e.target.value)}
            className="mt-1 w-full px-3 py-2 bg-brand-light rounded focus:outline-none focus:ring-2 focus:ring-brand"
            required
          />
        </label>

        <label>
          <span className="block text-gray-700">Confirm Password</span>
          <input
            type="password"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
            className="mt-1 w-full px-3 py-2 bg-brand-light rounded focus:outline-none focus:ring-2 focus:ring-brand"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full py-3 bg-brand text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-200"
        >
          Create New Password
        </button>
      </form>
    </div>
  )
}
