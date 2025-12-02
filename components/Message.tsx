'use client'

import { useState, useEffect } from 'react'

export default function Message() {
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-pink-200">
          <div className="text-center">
            <div className="text-6xl mb-6 animate-bounce">💌</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              A Special Message
            </h2>
            
            <div className={`space-y-4 text-lg md:text-xl text-gray-800 leading-relaxed ${showMessage ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
              <p className="font-medium">
                Dear Drishu,
              </p>
              <p>
                You are the most amazing person I know. Your smile brightens my day, 
                your laughter fills my heart with joy, and your presence makes everything better.
              </p>
              <p>
                I wanted to create something special for you - a little corner of the internet 
                that celebrates how wonderful you are. Every day with you is a gift, and I'm 
                grateful for every moment we share together.
              </p>
              <p className="font-semibold text-pink-600 mt-6">
                You mean the world to me. ❤️
              </p>
              <p className="text-2xl mt-8">
                Forever yours,
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block animate-pulse">
            <div className="text-4xl">💕</div>
          </div>
        </div>
      </div>
    </section>
  )
}

