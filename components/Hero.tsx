'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 overflow-hidden">
      {/* Background image: prefer local file at /images/couple.jpg (save your attached image there). Falls back to Unsplash if missing. */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/couple.jpg"
          alt="Couple embracing"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement
            if (!el.dataset.fallback) {
              el.dataset.fallback = '1'
              el.src = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80'
            }
          }}
          className="w-full h-full object-cover hero-bg filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
      </div>

      <div className="text-center z-10 max-w-3xl px-4">
        <div className="mb-8 animate-fade-in">
          <div className="text-6xl md:text-8xl mb-4">💕</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Drishu
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium animate-fade-in" style={{ animationDelay: '0.4s' }}>
            You are my sunshine, my only sunshine
          </p>
          <p className="text-lg md:text-xl text-gray-600 mt-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            You make me happy when skies are gray
          </p>
        </div>
        <div className="mt-12 animate-bounce">
          <div className="text-4xl">↓</div>
        </div>
      </div>
      {/* Animated floating hearts (decorative) */}
      <span aria-hidden="true" className="floating-heart left-10 top-24">💖</span>
      <span aria-hidden="true" className="floating-heart right-16 top-40 delay-1000">💗</span>
      <span aria-hidden="true" className="floating-heart left-20 bottom-36 delay-2000">💝</span>
      <span aria-hidden="true" className="floating-heart right-10 bottom-16 delay-1500">💕</span>
    </section>
  )
}

