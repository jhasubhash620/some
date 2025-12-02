"use client"

import { useEffect, useState } from 'react'

export default function SurpriseReveal() {
  const PASS = 'iloveyou' // default passphrase; change if you like
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [showHearts, setShowHearts] = useState(false)

  useEffect(() => {
    try {
      const seen = localStorage.getItem('surprise_unlocked')
      if (seen === '1') setUnlocked(true)
    } catch (e) {}
  }, [])

  function tryUnlock(e?: React.FormEvent) {
    e?.preventDefault()
    if (input.trim().toLowerCase() === PASS) {
      setUnlocked(true)
      setOpen(true)
      try {
        localStorage.setItem('surprise_unlocked', '1')
      } catch (e) {}
      // trigger confetti hearts
      setShowHearts(true)
      setTimeout(() => setShowHearts(false), 5000)
      // play soft audio if available
      const audio = document.getElementById('surprise-audio') as HTMLAudioElement | null
      if (audio) {
        audio.currentTime = 0
        audio.play().catch(() => {})
      }
    } else {
      // small shake animation by toggling class
      const el = document.getElementById('surprise-input')
      if (el) {
        el.classList.remove('shake')
        // force reflow
        void el.offsetWidth
        el.classList.add('shake')
      }
    }
  }

  function openPrompt() {
    setOpen(true)
    setInput('')
  }

  return (
    <>
      {/* Small fixed trigger button */}
      <button
        onClick={openPrompt}
        className="fixed bottom-6 left-6 z-50 px-4 py-2 rounded-full bg-pink-500 text-white shadow-lg hover:scale-105 transition-transform"
        aria-haspopup="dialog"
      >
        Open Surprise
      </button>

      {open && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-xl p-6 bg-white rounded-2xl shadow-2xl relative">
            <button className="absolute top-4 right-4 text-gray-700" onClick={() => setOpen(false)} aria-label="Close">✕</button>

            {!unlocked ? (
              <form onSubmit={tryUnlock} className="space-y-4">
                <h3 className="text-2xl font-bold">A Secret For You</h3>
                <p className="text-gray-600">Enter the passphrase to reveal a special message.</p>
                <input
                  id="surprise-input"
                  className="w-full p-3 rounded-lg border border-gray-200 focus:outline-none"
                  placeholder="Enter passphrase"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <div className="flex justify-end">
                  <button type="submit" className="px-4 py-2 bg-pink-500 text-white rounded-lg">Unlock</button>
                </div>
              </form>
            ) : (
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-bold">For My Love ❤️</h3>
                <p className="text-gray-700">You are my everything. Every moment with you is a treasure. This little corner is for you.</p>
                <img src="/images/couple.jpg" alt="Couple" className="mx-auto rounded-xl shadow-lg w-64 h-64 object-cover" />
                <p className="text-pink-600 font-semibold">Forever yours.</p>
                <div className="flex justify-center gap-3">
                  <button onClick={() => { setOpen(false) }} className="px-4 py-2 rounded-md border">Close</button>
                </div>
                <audio id="surprise-audio" src="/audio/love.mp3" preload="auto" />
              </div>
            )}
          </div>
        </div>
      )}

      {/* Confetti hearts overlay */}
      {showHearts && (
        <div aria-hidden className="fixed inset-0 pointer-events-none z-50">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className={`confetti-heart confetti-${i}`}>💘</span>
          ))}
        </div>
      )}
    </>
  )
}
