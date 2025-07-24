import { useNavigate } from 'react-router-dom'

export default function FeatureNoVapeSuccess() {
  const nav = useNavigate()

  return (
    <div className="min-h-screen bg-brand flex flex-col items-center justify-center px-4">
      {/* Back arrow */}
      <button
        onClick={() => nav(-1)}
        className="absolute top-4 left-4 text-white text-2xl"
      >
        ←
      </button>

      {/* Checkmark */}
      <div className="bg-white rounded-full p-6 mb-6">
        <span className="text-brand text-4xl">✔︎</span>
      </div>

      {/* Text */}
      <h1 className="text-white text-3xl font-bold mb-2">Congratulation</h1>
      <p className="text-white mb-6">Your journey has started!</p>

      {/* Go to journey */}
      <button
        onClick={() => nav('/addons/journey')}
        className="bg-brand-light text-brand px-6 py-3 rounded-full flex items-center space-x-2"
      >
        <span>Go to Journey</span>
        <span>🔍</span>
      </button>
    </div>
  )
}
