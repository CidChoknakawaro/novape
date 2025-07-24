import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const nav = useNavigate()
  const [identifier, setIdentifier] = useState('')
  const [pwd, setPwd] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // mock auth success → go to home
    localStorage.setItem('token', 'dummy-token')
    nav('/home')
  }

  return (
    <div className="min-h-screen bg-white p-4 flex items-center justify-center">
      <form onSubmit={handleLogin} className="w-full max-w-xs space-y-4">
        <h2 className="text-xl font-semibold text-brand text-center">Log In</h2>
        <h3 className="text-xl font-semibold text-brand">Welcome</h3>
        <label>
          <span className="block text-gray-700">Email or Mobile Number</span>
          <input
            type="text"
            value={identifier}
            onChange={e => setIdentifier(e.target.value)}
            className="mt-1 w-full px-3 py-2 bg-brand-light rounded focus:outline-none focus:ring-2 focus:ring-brand"
            required
          />
        </label>

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

        <button
          type="submit"
          className="w-full py-3 bg-brand text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-200"
        >
          Log In
        </button>
      </form>
    </div>
  )
}
