import { useEffect, useState } from 'react'

export function useScrollParallax() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [currentTheme, setCurrentTheme] = useState('theme-dark-green')

  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position as percentage of total scrollable height
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      
      setScrollProgress(scrollPercent)

      // Theme transitions based on scroll position
      if (scrollPercent < 15) {
        setCurrentTheme('theme-dark-green')
      } else if (scrollPercent < 30) {
        setCurrentTheme('theme-dark-blue')
      } else if (scrollPercent < 50) {
        setCurrentTheme('theme-dark-purple')
      } else if (scrollPercent < 70) {
        setCurrentTheme('theme-dark-teal')
      } else {
        setCurrentTheme('theme-dark-slate')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollProgress, currentTheme }
}
