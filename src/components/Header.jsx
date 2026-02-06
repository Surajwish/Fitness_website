import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LogoAVR } from './Icons.jsx'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="brand" aria-label="AVR Fitness Club Home">
          <LogoAVR className="logo-mark" />
          <span className="gradient-text">AVR Fitness Club</span>
        </Link>
        <button 
          className="menu-btn" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Primary">
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
