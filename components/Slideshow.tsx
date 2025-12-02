"use client"

import { useEffect, useRef, useState } from 'react'

const defaultImages = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
]

export default function Slideshow() {
  const [images, setImages] = useState<string[]>(defaultImages)
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(true)
  const [intervalMs, setIntervalMs] = useState(3500)
  const timerRef = useRef<number | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (playing) {
      timerRef.current = window.setInterval(() => {
        setIndex((i) => (i + 1) % images.length)
      }, intervalMs)
    } else if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [playing, intervalMs])

  useEffect(() => {
    // keep audio playing/paused in sync with slideshow
    const a = audioRef.current
    if (!a) return
    if (playing) a.play().catch(() => {})
    else a.pause()
  }, [playing])

  // Try to load images from the public/images folder via API
  useEffect(() => {
    let mounted = true
    fetch('/api/images')
      .then((r) => r.json())
      .then((list: string[]) => {
        if (!mounted) return
        if (Array.isArray(list) && list.length > 0) {
          setImages(list)
        }
      })
      .catch(() => {})
    return () => { mounted = false }
  }, [])

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length)
  }

  function next() {
    setIndex((i) => (i + 1) % images.length)
  }

  function goTo(i: number) {
    if (i === index) return
    setIndex(i)
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-gradient">Slideshow</h2>
        <p className="text-center text-gray-600 mb-6">Play a slideshow of memories with music.</p>

        <div
          className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100"
          onMouseEnter={() => setPlaying(false)}
          onMouseLeave={() => setPlaying(true)}
        >
          <img
            src={images[index]}
            alt={`Slide ${index + 1}`}
            loading="eager"
            className="w-full h-64 md:h-96 object-cover"
            onError={(e) => {
              const el = e.currentTarget as HTMLImageElement
              if (!el.dataset.fallback) {
                el.dataset.fallback = '1'
                el.src = 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1200&q=80'
              }
            }}
          />

          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button onClick={prev} className="p-2 bg-white/60 rounded-full backdrop-blur-sm">‹</button>
            <button onClick={next} className="p-2 bg-white/60 rounded-full backdrop-blur-sm">›</button>
          </div>

          <div className="absolute left-4 bottom-4 flex items-center gap-2">
            <button onClick={() => setPlaying((p) => !p)} className="px-3 py-1 rounded bg-pink-500 text-white">
              {playing ? 'Pause' : 'Play'}
            </button>
            <label className="text-sm text-gray-700">Interval:</label>
            <select value={String(intervalMs)} onChange={(e) => setIntervalMs(Number(e.target.value))} className="rounded p-1">
              <option value={2500}>2.5s</option>
              <option value={3500}>3.5s</option>
              <option value={5000}>5s</option>
            </select>
          </div>

          {/* slide indicators */}
          <div className="absolute right-4 bottom-4 flex items-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`w-3 h-3 rounded-full ${i === index ? 'bg-pink-500' : 'bg-white/60'} border border-white/30`}
              />
            ))}
          </div>


        {/* thumbnails */}
        <div className="mt-4 flex items-center justify-center gap-3 flex-wrap">
          {images.map((src, i) => (
            <button key={i} onClick={() => goTo(i)} className={`rounded overflow-hidden border-2 ${i === index ? 'border-pink-400' : 'border-transparent'}`} aria-label={`Thumbnail ${i + 1}`}>
              <img src={src} alt={`Thumbnail ${i + 1}`} loading="lazy" className="w-20 h-12 object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = '0.6' }} />
            </button>
          ))}
        </div>

        <div className="mt-4 text-center">
          <audio ref={audioRef} id="slideshow-audio" src="/audio/love.mp3" preload="auto" />
          <p className="text-sm text-gray-500">Tip: add an MP3 at <code>/public/audio/love.mp3</code> to enable music.</p>
        </div>
        </div>
      </div>
    </section>
  )
}
