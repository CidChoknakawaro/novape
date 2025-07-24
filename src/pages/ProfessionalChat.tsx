import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'

// mock doctor lookup
const DOCTORS: Record<string,{ name: string; avatar: string }> = {
  '1': { name: 'Dr. Olivia Turner', avatar: '/assets/olivia.jpg' },
  '2': { name: 'Dr. Alexander Bennett', avatar: '/assets/alex.jpg' },
  // …
}

export default function ProfessionalChat() {
  const nav = useNavigate()
  const { id } = useParams<{ id: string }>()
  const doc = DOCTORS[id!] || { name: 'Doctor', avatar: '' }

  const [messages, setMessages] = useState<
    { from: 'me' | 'them'; text: string; time: string }[]
  >([
    { from: 'them', text: 'hello doctor, i would like to discuss…', time: '09:00' },
    { from: 'them', text: 'hello, how are you feeling…', time: '09:30' },
    { from: 'me',   text: 'it has been about a week…', time: '09:43' },
    { from: 'them', text: '⌛ Voice message …', time: '09:50' },
    { from: 'me',   text: 'thank you very much…', time: '09:55' },
  ])
  const [input, setInput] = useState('')

  const send = () => {
    if (!input.trim()) return
    const tm = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    setMessages((m) => [...m, { from: 'me', text: input, time: tm }])
    setInput('')
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="flex items-center bg-brand px-4 py-3 text-white">
        <button onClick={() => nav(-1)} className="text-2xl">
          ←
        </button>
        <div className="flex-1 text-center font-semibold">{doc.name}</div>
        <button className="p-2">📞</button>
        <button className="p-2">📹</button>
      </header>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`
              max-w-[70%] p-3 rounded-xl
              ${m.from === 'me'
                ? 'bg-brand-light self-end text-gray-800'
                : 'bg-brand text-white self-start'}
            `}
          >
            {m.text}
            <div className="text-xs text-gray-500 text-right mt-1">
              {m.time}
            </div>
          </div>
        ))}
        {/* typing indicator */}
        <div className="text-gray-500 text-sm">Dr. Olivia is typing…</div>
      </div>

      {/* Input */}
      <div className="flex items-center px-4 py-2 border-t">
        <button className="p-2 text-gray-400">📎</button>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 mx-2 px-4 py-2 bg-brand-light rounded-full focus:outline-none"
          placeholder="Write Here..."
        />
        <button className="p-2 text-gray-400">🎤</button>
        <button onClick={send} className="p-2 text-brand text-2xl">
          ➤
        </button>
      </div>
    </div>
)
}
