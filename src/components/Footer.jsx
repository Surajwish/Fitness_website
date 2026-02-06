import { Link } from 'react-router-dom'
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './Icons.jsx'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="social" aria-label="Social links">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><InstagramIcon /></a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook"><FacebookIcon /></a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp"><WhatsAppIcon /></a>
        </div>
        <small style={{color:'var(--muted)'}}>© {new Date().getFullYear()} AVR Fitness Club. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
