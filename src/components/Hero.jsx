import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiGithub, FiTwitter, FiArrowDown, FiMail, FiInstagram } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

const ROLES = [
  'Full Stack Developer',
  'UI/UX Designer',
  'Problem Solver',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = ROLES[roleIndex]
    let i = typing ? 0 : current.length
    const interval = setInterval(() => {
      if (typing) {
        setDisplayed(current.slice(0, i + 1))
        i++
        if (i === current.length) {
          clearInterval(interval)
          setTimeout(() => setTyping(false), 1800)
        }
      } else {
        setDisplayed(current.slice(0, i - 1))
        i--
        if (i === 0) {
          clearInterval(interval)
          setRoleIndex((prev) => (prev + 1) % ROLES.length)
          setTyping(true)
        }
      }
    }, typing ? 65 : 35)
    return () => clearInterval(interval)
  }, [roleIndex, typing])

  const socials = [
    { icon: <FiGithub />, href: personalInfo.social.github, label: 'GitHub' },
    { icon: <FiTwitter />, href: personalInfo.social.twitter, label: 'Twitter' },
    { icon: <FiInstagram />, href: personalInfo.social.instagram, label: 'Instagram' },
    { icon: <FiMail />, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ]

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '68px',
      }}
    >
      {/* Background Orbs */}
      <div aria-hidden="true">
        {[
          { size: 600, top: '-10%', left: '-15%', color: 'rgba(124,58,237,0.18)', duration: '18s' },
          { size: 500, bottom: '-5%', right: '-10%', color: 'rgba(6,182,212,0.12)', duration: '22s' },
          { size: 350, top: '40%', left: '55%', color: 'rgba(79,70,229,0.14)', duration: '14s' },
        ].map((orb, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: orb.size, height: orb.size,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              top: orb.top, bottom: orb.bottom,
              left: orb.left, right: orb.right,
              animation: `orb-drift ${orb.duration} ease-in-out infinite`,
              animationDelay: `${i * 3}s`,
              pointerEvents: 'none',
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(124,58,237,0.12)',
              border: '1px solid rgba(124,58,237,0.3)',
              borderRadius: '2rem',
              padding: '0.35rem 1rem',
              fontSize: '0.82rem', fontWeight: 500,
              color: '#a78bfa',
              fontFamily: 'var(--font-code)',
              marginBottom: '1.5rem',
            }}
          >
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#10b981',
              animation: 'pulse-glow 2s infinite',
              display: 'inline-block',
            }} />
            {personalInfo.availability}
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '0.5rem' }}
          >
            Hola, soy
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: '1rem',
              background: 'var(--gradient-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200% auto',
              animation: 'gradient-shift 4s linear infinite',
            }}
          >
            {personalInfo.name}
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              marginBottom: '1.5rem',
              minHeight: '2.5rem',
              fontFamily: 'var(--font-code)',
            }}
          >
            <span style={{ color: 'var(--accent-cyan)' }}>&gt;</span>{' '}
            {displayed}
            <span style={{ animation: 'blink 1s step-end infinite', color: 'var(--accent-purple)' }}>|</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
            }}
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}
          >
            <Link to="projects" smooth duration={600} offset={-68}>
              <button id="hero-cta-projects" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.85rem 2rem' }}>
                Ver Proyectos
              </button>
            </Link>
            <Link to="contact" smooth duration={600} offset={-68}>
              <button id="hero-cta-contact" className="btn btn-outline" style={{ fontSize: '1rem', padding: '0.85rem 2rem' }}>
                Contáctame
              </button>
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                title={s.label}
                style={{
                  width: 44, height: 44,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderRadius: '50%',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                  fontSize: '1.1rem',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--accent-purple)'
                  e.currentTarget.style.color = 'var(--accent-purple)'
                  e.currentTarget.style.boxShadow = '0 0 15px var(--glow-purple)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text-secondary)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'none'
                }}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
        >
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-code)' }}>scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <FiArrowDown style={{ color: 'var(--accent-purple)', fontSize: '1.1rem' }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
