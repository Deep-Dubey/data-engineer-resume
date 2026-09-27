import { ArrowUpRight, Database, Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export default function Header({ menuOpen, setMenuOpen, scrollTo }) {
  const { theme, toggle } = useTheme()

  return (
    <header className="topbar">
      <button className="brand" onClick={() => scrollTo('home')} aria-label="Back to top">
        <span className="brand-icon">
          <Database size={18} />
        </span>
        <span>DEEP <span className="text-secondary">DUBEY</span></span>
      </button>

      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
        <button onClick={() => scrollTo('experience')}>Experience</button>
        <button onClick={() => scrollTo('work')}>Projects</button>
        <button onClick={() => scrollTo('stack')}>Skills</button>
        <button onClick={() => scrollTo('about')}>About</button>
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="theme-toggle"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <button className="nav-cta" onClick={() => scrollTo('contact')}>
          Let's talk <ArrowUpRight size={15} />
        </button>
      </nav>

      <div className="header-actions">
        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="theme-toggle"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  )
}
