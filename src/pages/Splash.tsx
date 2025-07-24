import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg' 

export default function Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/welcome'), 2000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-blue-500 px-4">
      {/* Logo */}
      <img
        src={logo}
        alt="No Vape"
        className="w-40 h-auto mb-4"
      />

      {/* Bottom caption */}
      <p className="absolute bottom-8 w-full text-center text-white text-xs">
        4หน่อใส่ใข่
      </p>
    </div>
  )
}