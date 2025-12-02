import Hero from '@/components/Hero'
import About from '@/components/About'
import Memories from '@/components/Memories'
import Message from '@/components/Message'
import HeartRain from '@/components/HeartRain'
import ImageGallery from '@/components/ImageGallery'
import SurpriseReveal from '@/components/SurpriseReveal'
import Slideshow from '@/components/Slideshow'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeartRain />
      <Hero />
      <About />
      <Memories />
      <Slideshow />
      <ImageGallery />
      <Message />
      <SurpriseReveal />
    </main>
  )
}

