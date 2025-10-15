import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Articles from './components/Articles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-navy">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-cyan font-mono text-xl">Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
