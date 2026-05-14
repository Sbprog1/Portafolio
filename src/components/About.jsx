import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiUser, FiMapPin, FiMail } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  })

  return (
    <section id="about" className="section section-alt">
      <div className="container" ref={ref}>
        {/* Section Header */}
        <motion.div {...fadeUp(0)} className="section-header" style={{ textAlign: 'center' }}>
          <p className="section-label">Sobre Mí</p>
          <h2 className="section-title">
            Conóceme un poco <span className="gradient-text">más</span>
          </h2>
          <div className="divider" style={{ margin: '0.75rem auto 2rem' }} />
        </motion.div>

        {/* Bio Text */}
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {personalInfo.bio.map((para, i) => (
            <motion.p
              key={i}
              {...fadeUp(0.15 + i * 0.1)}
              style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.85,
                marginBottom: '1.25rem',
                fontSize: '1.02rem',
                textAlign: 'center',
              }}
            >
              {para}
            </motion.p>
          ))}

          {/* Info chips */}
          <motion.div
            {...fadeUp(0.35)}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              justifyContent: 'center',
              margin: '2rem 0 1.5rem',
            }}
          >
            {[
              { icon: <FiUser />, text: personalInfo.name },
              { icon: <FiMapPin />, text: personalInfo.location },
              { icon: <FiMail />, text: personalInfo.email },
            ].map((item) => (
              <div key={item.text} style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '0.5rem',
                padding: '0.5rem 0.9rem',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
              }}>
                <span style={{ color: 'var(--accent-cyan)' }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </motion.div>

          {/* Traits */}
          <motion.div
            {...fadeUp(0.45)}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center',
              marginBottom: '2rem',
            }}
          >
            {personalInfo.traits.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '1.5rem',
            marginTop: '2.5rem',
          }}
        >
          {personalInfo.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
              style={{ padding: '1.75rem 1.25rem', textAlign: 'center' }}
            >
              <div style={{
                fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: 900,
                background: 'var(--gradient-text)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.4rem',
              }}>{stat.value}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
