import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiAward } from 'react-icons/fi'
import { experience } from '../data/portfolio'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section section-alt">
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Trayectoria</p>
          <h2 className="section-title">Mi <span className="gradient-text">Experiencia</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            El camino que he recorrido construyendo productos que importan.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto' }}>
          {/* Vertical line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              width: 2,
              background: 'linear-gradient(to bottom, var(--accent-purple), var(--accent-cyan), transparent)',
              transform: 'translateX(-50%)',
              borderRadius: 2,
            }}
          />

          {experience.map((exp, i) => {
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
                style={{
                  display: 'flex',
                  justifyContent: isLeft ? 'flex-start' : 'flex-end',
                  paddingBottom: '3rem',
                  position: 'relative',
                }}
              >
                {/* Dot on timeline */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: 28,
                  transform: 'translateX(-50%)',
                  width: 16, height: 16,
                  borderRadius: '50%',
                  background: exp.color,
                  border: '3px solid var(--bg-secondary)',
                  boxShadow: `0 0 12px ${exp.color}80`,
                  zIndex: 1,
                }} />

                {/* Card */}
                <div
                  className="glass-card"
                  style={{
                    width: 'calc(50% - 2.5rem)',
                    padding: '1.75rem',
                    position: 'relative',
                  }}
                >
                  {/* Accent top line */}
                  <div style={{
                    position: 'absolute', top: 0,
                    left: isLeft ? 0 : 'auto', right: isLeft ? 'auto' : 0,
                    width: '40%', height: 2,
                    background: exp.color,
                    borderRadius: '1rem',
                  }} />

                  {/* Header */}
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                      fontSize: '0.75rem', fontFamily: 'var(--font-code)',
                      color: exp.color, fontWeight: 600,
                      background: `${exp.color}15`,
                      border: `1px solid ${exp.color}30`,
                      borderRadius: '2rem',
                      padding: '0.2rem 0.65rem',
                      marginBottom: '0.6rem',
                    }}>
                      <FiCalendar style={{ fontSize: '0.7rem' }} />
                      {exp.period}
                    </span>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                      {exp.role}
                    </h3>
                    <p style={{
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                      fontSize: '0.88rem', color: exp.color, fontWeight: 600,
                    }}>
                      <FiBriefcase style={{ fontSize: '0.85rem' }} />
                      {exp.company}
                    </p>
                  </div>

                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                    {exp.achievements.map((ach) => (
                      <li key={ach} style={{
                        display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
                        fontSize: '0.82rem', color: 'var(--text-muted)',
                      }}>
                        <FiAward style={{ color: '#fbbf24', flexShrink: 0, marginTop: 2 }} />
                        {ach}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {exp.tech.map(t => (
                      <span key={t} className="tag" style={{ fontSize: '0.7rem', padding: '0.15rem 0.55rem' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Responsive timeline mobile */}
      <style>{`
        @media (max-width: 700px) {
          #experience .glass-card { width: 100% !important; }
          #experience [style*="justifyContent"] { justify-content: center !important; }
          #experience [style*="left: 50%"][style*="height: 2px"],
          #experience [style*="left: 50%; top: 28px"] { display: none; }
        }
      `}</style>
    </section>
  )
}
