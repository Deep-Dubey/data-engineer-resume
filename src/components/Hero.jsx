import { ArrowUpRight, ChevronDown, Play } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function Hero({ scrollTo }) {
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        heroRef.current.style.transform = `translateY(${scrollY * 0.5}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <section className="hero" id="home"><div className="hero-grid" ref={heroRef} /><div className="hero-copy"><div className="eyebrow"><span className="pulse" /> SOFTWARE ENGINEER <span className="eyebrow-line" /></div><h1>Deep Dubey<br /><em>Data Engineer</em></h1><p className="hero-intro">Software Engineer with 4+ years of experience building secure, compliant, and scalable data pipelines for financial services, lending, and investment platforms across Azure and Snowflake ecosystems.</p><div className="hero-actions"><button className="button-primary" onClick={() => scrollTo('experience')}>View my experience <ArrowUpRight size={17} /></button><a className="button-primary secondary" href="/Deep_Dubey.pdf" download="Deep_Dubey_Resume.pdf">Download CV <ArrowUpRight size={17} /></a><button className="button-quiet" onClick={() => scrollTo('about')}><span className="play"><Play size={11} fill="currentColor" /></span> About me</button></div></div><div className="hero-aside"><span className="vertical-label">SCROLL TO EXPLORE</span><ChevronDown size={16} /></div><div className="hero-metric glass"><span>04+ YEARS</span><strong>DATA<br /><b>ENGINEERING</b></strong><div className="metric-rule" /><small>Azure · Snowflake<br />DBT · Python</small></div></section>
}
