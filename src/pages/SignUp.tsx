import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {
  const nav = useNavigate()
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [dob, setDob] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // After they fill out “New Account”, send them to set-password
    nav('/set-password')
  }

  return (
    <div className="min-h-screen bg-white p-4 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
        <h2 className="text-xl font-semibold text-brand text-center">New Account</h2>

        {/* Full name */}
        <label>
          <span className="block text-gray-700">Full name</span>
          <input
            type="text"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            className="mt-1 w-full px-3 py-2 bg-brand-light rounded focus:outline-none focus:ring-2 focus:ring-brand"
            required
          />
        </label>

        {/* Password */}
        <label>
          <span className="block text-gray-700">Password</span>
          <div className="relative mt-1">
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-brand-light rounded focus:outline-none focus:ring-2 focus:ring-brand"
              required
            />
            <button type="button" className="absolute inset-y-0 right-3 flex items-center text-gray-500">
              👁️
            </button>
          </div>
        </label>

        {/* Email */}
        <label>
          <span className="block text-gray-700">Email</span>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="mt-1 w-full px-3 py-2 bg-brand-light rounded focus:outline-none focus:ring-2 focus:ring-brand"
            required
          />
        </label>

        {/* Mobile */}
        <label>
          <span className="block text-gray-700">Mobile Number</span>
          <input
            type="tel"
            value={mobile}
            onChange={e => setMobile(e.target.value)}
            className="mt-1 w-full px-3 py-2 bg-brand-light rounded focus:outline-none focus:ring-2 focus:ring-brand"
            required
          />
        </label>

        {/* DOB */}
        <label>
          <span className="block text-gray-700">Date Of Birth</span>
          <input
            type="text"
            value={dob}
            onChange={e => setDob(e.target.value)}
            placeholder="DD / MM / YYYY"
            className="mt-1 w-full px-3 py-2 bg-brand-light rounded focus:outline-none focus:ring-2 focus:ring-brand"
            required
          />
        </label>

        <button
          type="submit"
          className="w-full py-3 bg-brand text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}