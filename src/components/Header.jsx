import { ArrowUpRight, Database, Menu, X } from 'lucide-react'
import { SiGmail } from 'react-icons/si'

export default function Header({ menuOpen, setMenuOpen, scrollTo }) {
  return <header className="topbar"><button className="brand" onClick={() => scrollTo('home')} aria-label="Back to top"><span className="brand-icon"><Database size={18} /></span><span>DEEP<span className="muted">.DATA</span></span></button><nav className={menuOpen ? 'nav nav-open' : 'nav'}><button onClick={() => scrollTo('experience')}>Experience</button><button onClick={() => scrollTo('work')}>Selected work</button><button onClick={() => scrollTo('stack')}>Stack</button><button onClick={() => scrollTo('about')}>About</button><a className="contact-icon mail-icon" href="mailto:deepdubey1995@gmail.com" target="_blank" rel="noreferrer" aria-label="Email Deep Dubey"><SiGmail size={16} /></a><button className="nav-cta" onClick={() => scrollTo('contact')}>Let's talk <ArrowUpRight size={15} /></button></nav><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button></header>
}
