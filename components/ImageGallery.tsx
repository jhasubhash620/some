"use client"

import { useEffect, useState } from 'react'

const images = [
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1526864361802-2c3a9f8b4b8a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
]

export default function ImageGallery() {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!open) return
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'ArrowRight') setIndex((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setIndex((i) => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function openAt(i: number) {
    setIndex(i)
    setOpen(true)
  }

  function next() {
    setIndex((i) => (i + 1) % images.length)
  }

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length)
  }

  return (
    <section className="py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gradient">Gallery</h2>
        <p className="text-center text-gray-600 mb-8">A few captured moments — click to enlarge</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => openAt(i)}
              className="overflow-hidden rounded-2xl w-full h-48 md:h-56 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-300"
              aria-label={`Open image ${i + 1}`}
            >
              <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white bg-black/40 p-2 rounded-full hover:bg-black/60"
              aria-label="Close gallery"
            >
              ✕
            </button>

            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-black/50"
              aria-label="Previous image"
            >
              ‹
            </button>

            <img src={images[index]} alt={`Large ${index + 1}`} className="w-full h-[70vh] object-contain rounded-lg shadow-2xl" />

            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-black/50"
              aria-label="Next image"
            >
              ›
            </button>

            <div className="mt-3 text-center text-sm text-white">{index + 1} / {images.length}</div>
          </div>
        </div>
      )}
    </section>
  )
}
