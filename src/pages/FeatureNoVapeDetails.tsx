import { useNavigate } from 'react-router-dom'
// import Avatar from '../assets/avatar.jpg'

export default function FeatureNoVapeDetails() {
  const nav = useNavigate()

  return (
    <div className="min-h-screen bg-white flex flex-col px-4">
      {/* Header */}
      <header className="flex items-center py-3">
        <button onClick={() => nav(-1)} className="text-2xl">←</button>
        <h2 className="flex-1 text-center font-semibold text-gray-800">Your Appointment</h2>
        <div className="w-6" />
      </header>

      {/* Profile Card */}
      <div className="flex items-center bg-brand-light rounded-xl p-3 mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-3" /> {/* avatar */}
        <div className="flex-1">
          <p className="font-medium">Alexander</p>
          <p className="text-sm text-gray-600">18, Male</p>
        </div>
        <button className="p-2 bg-brand-light rounded-full text-gray-500">?</button>
        <button className="p-2 bg-brand-light rounded-full text-red-500">♥︎</button>
      </div>

      {/* Question Message */}
      <div className="mb-4">
        <p className="bg-brand text-white px-3 py-2 rounded-full inline-block">
          WOULD YOU LIKE A MESSAGE TO PREVENT YOU FROM VAPING…
        </p>
        <div className="mt-2 flex items-center">
          <p className="text-gray-800 font-medium mr-2">10:00 AM</p>
          <button className="p-2 text-gray-500">✕</button>
          <button className="p-2 text-brand">✔︎</button>
        </div>
      </div>

      {/* Future‐self Message */}
      <button className="bg-brand text-white px-4 py-2 rounded-full mb-4">
        MESSAGE TO YOUR FUTURE SELF
      </button>

      {/* Full text */}
      <p className="flex-1 text-gray-700 leading-relaxed">
        Vaping has ruined your life, from family to health you know what you have been through …
      </p>

      {/* CTA */}
      <div className="mt-4 text-center">
        <p
          onClick={() => nav('/feature/no-vape/success')}
          className="text-brand font-semibold mb-4 cursor-pointer"
        >
          I AM READY LETS GO!
        </p>
        <button
          onClick={() => nav('/feature/no-vape/success')}
          className="bg-brand px-6 py-3 rounded-full"
        >
          ✔︎
        </button>
      </div>
    </div>
  )
}
