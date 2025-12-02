'use client'

export default function About() {
  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
          About You
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-pink-100 to-rose-100 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Beautiful</h3>
            <p className="text-gray-700 leading-relaxed">
              Your beauty shines from within and brightens every moment. Your smile lights up the room and makes everything better.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">🌟</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Amazing</h3>
            <p className="text-gray-700 leading-relaxed">
              Your kindness, intelligence, and wonderful personality make you truly special. You bring joy wherever you go.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-rose-100 to-purple-100 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">💫</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Inspiring</h3>
            <p className="text-gray-700 leading-relaxed">
              Your strength and determination inspire everyone around you. You face challenges with grace and courage.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="text-5xl mb-4">🦋</div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Unique</h3>
            <p className="text-gray-700 leading-relaxed">
              There's no one else like you in this world. Your uniqueness is what makes you perfect just the way you are.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

