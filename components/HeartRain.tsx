'use client'

import { useEffect, useState } from 'react'

interface Heart {
  id: number
  left: number
  delay: number
  duration: number
}

export default function HeartRain() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    const heartEmojis = ['💕', '💖', '💗', '💝', '❤️', '💜', '🧡']
    const newHearts: Heart[] = []
    
    for (let i = 0; i < 20; i++) {
      newHearts.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
      })
    }
    
    setHearts(newHearts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-2xl opacity-20 animate-heart-fall"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          {['💕', '💖', '💗', '💝', '❤️'][Math.floor(Math.random() * 5)]}
        </div>
      ))}
    </div>
  )
}

