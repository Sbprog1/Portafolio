import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

const navLinks = [
  { to: 'about', label: 'Sobre Mí' },
  { to: 'technologies', label: 'Tecnologías' },
  { to: 'projects', label: 'Proyectos' },
  { to: 'contact', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: '0 2rem',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        background: scrolled ? 'rgba(6, 9, 18, 0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <Link to="hero" smooth duration={500} style={{ cursor: 'pointer' }}>
        <span style={{
          fontFamily: 'var(--font-code)',
          fontSize: '1.15rem',
          fontWeight: 600,
          background: 'var(--gradient-text)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          &lt;{personalInfo.name.split(' ')[0]} /&gt;
        </span>
      </Link>

      {/* Desktop Links */}
      <ul style={{
        display: 'flex', gap: '0.25rem', listStyle: 'none',
        alignItems: 'center',
      }} className="nav-desktop">
        {navLinks.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              smooth
              duration={600}
              offset={-68}
              spy
              activeClass="nav-active"
              style={{
                padding: '0.45rem 0.9rem',
                borderRadius: '0.4rem',
                fontSize: '0.88rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'var(--transition)',
                display: 'block',
              }}
              onMouseEnter={e => {
                e.target.style.color = 'var(--text-primary)'
                e.target.style.background = 'rgba(255,255,255,0.06)'
              }}
              onMouseLeave={e => {
                e.target.style.color = 'var(--text-secondary)'
                e.target.style.background = 'transparent'
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-68}
            className="btn btn-primary"
            style={{ padding: '0.5rem 1.25rem', fontSize: '0.88rem', cursor: 'pointer' }}
          >
            Contáctame
          </Link>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        id="nav-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'none', border: 'none', color: 'var(--text-primary)',
          fontSize: '1.4rem', cursor: 'pointer', display: 'none',
          padding: '0.25rem',
        }}
        className="hamburger-btn"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '68px', left: 0, right: 0,
              background: 'rgba(6, 9, 18, 0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border)',
              padding: '1.5rem 2rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                offset={-68}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .hamburger-btn { display: block !important; }
        }
        .nav-active { color: var(--text-primary) !important; }
      `}</style>
    </motion.nav>
  )
}
