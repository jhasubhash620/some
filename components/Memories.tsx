'use client'

export default function Memories() {
  const memories = [
    {
      emoji: '🌅',
      title: 'First Meeting',
      description: 'The moment I first saw you, I knew something special was about to begin.',
    },
    {
      emoji: '💑',
      title: 'Our First Date',
      description: 'Every moment with you feels like a beautiful memory in the making.',
    },
    {
      emoji: '🎉',
      title: 'Special Moments',
      description: 'All the laughter, smiles, and joy we share together make life wonderful.',
    },
    {
      emoji: '🌙',
      title: 'Late Night Talks',
      description: 'Those conversations that go on forever because time stops when I\'m with you.',
    },
    {
      emoji: '☕',
      title: 'Coffee Together',
      description: 'Even the simplest moments become magical when we\'re together.',
    },
    {
      emoji: '🌟',
      title: 'Dreams Together',
      description: 'Looking forward to all the beautiful adventures we\'ll have together.',
    },
  ]

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center mb-16">
        {/* Blurry image section for couple - add your own image for real use! */}
        <div className="relative w-full max-w-md h-72 md:h-96 flex items-center justify-center">
          {/* Blurry background */}
          <div
            className="absolute inset-0 rounded-3xl overflow-hidden z-0"
            style={{ filter: 'blur(20px)', opacity: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1615966650071-855b15f29ad1?q=80&w=1266&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Couple blurry background"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Image on top */}
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
            alt="Couple"
            className="relative z-10 rounded-3xl shadow-2xl w-60 h-60 md:w-80 md:h-80 object-cover border-4 border-white"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Our Memories
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Every moment with you is a treasure
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memories.map((memory, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-pink-100"
            >
              <div className="text-5xl mb-4 text-center">{memory.emoji}</div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-800">
                {memory.title}
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                {memory.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

