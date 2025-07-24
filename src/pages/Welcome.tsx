// src/pages/Welcome.tsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo_welcome.svg'

export default function Welcome() {
  const nav = useNavigate()

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4">
      {/* Centered logo + tagline */}
      <div className="flex-1 flex items-center justify-center">
        <img src={logo} alt="NoVape Logo" className="w-56 h-auto" />
      </div>

      {/* Bottom buttons */}
      <div className="w-full max-w-xs mb-12 space-y-4">
          <button
            onClick={() => nav('/login')}
            className="
              w-full py-3
              bg-brand-light text-brand font-semibold
              rounded-full
              hover:opacity-90 transition-opacity duration-200
            "
          >
            Log In
          </button>
          <button
            onClick={() => nav('/signup')}
            className="
              w-full py-3
              bg-brand-light text-brand font-semibold
              rounded-full
              hover:opacity-90 transition-opacity duration-200
            "
          >
            Sign Up
          </button>
      </div>
    </div>
  )
}
