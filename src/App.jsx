import { useEffect, useState } from 'react'
import './App.css'
import './fullscreen.css'
import Loader from './components/Loader'
import Header from './components/Header'
import Hero from './components/Hero'
import { About, Contact, Footer, Stack, Trusted, Work } from './components/Sections'
import { Education, Experience, Metrics } from './components/ResumeSections'

function App() {
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1400)
    return () => window.clearTimeout(timer)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  if (loading) return <Loader />
  return <main><Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} /><Hero scrollTo={scrollTo} /><Metrics /><Trusted /><Experience /><Work /><About scrollTo={scrollTo} /><Stack /><Education /><Contact /><Footer /></main>
}

export default App
