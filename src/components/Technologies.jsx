import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiReact, SiTypescript, SiNextdotjs, SiVuedotjs, SiHtml5, SiTailwindcss,
  SiNodedotjs, SiPython, SiExpress, SiFastapi, SiGraphql,
  SiMongodb, SiPostgresql, SiMysql, SiRedis,
  SiDocker, SiGit, SiFigma,
  SiRust, SiGo, SiKubernetes, SiTerraform, SiSvelte, SiFlutter, SiCss, SiFirebase, SiSupabase, SiRender, SiN8N,
} from 'react-icons/si'
import {FaJs, FaGithub,} from 'react-icons/fa';
import {VscVscode, } from "react-icons/vsc";
import { technologies, learningTechnologies } from '../data/portfolio'

const ICON_MAP = {
  SiReact, SiTypescript, SiNextdotjs, SiVuedotjs, SiHtml5, SiTailwindcss,
  SiNodedotjs, SiPython, SiExpress, SiFastapi, SiGraphql,
  SiMongodb, SiPostgresql, SiMysql, SiRedis,
  SiDocker, SiGit, SiFigma,
  SiRust, SiGo, SiKubernetes, SiTerraform, SiSvelte, SiFlutter, SiCss, FaJs, FaGithub,VscVscode, SiFirebase, SiSupabase, SiRender, SiN8N,
}

const CATEGORIES = ['Todas', 'Frontend','Mobile', 'Backend', 'Databases', 'Tools']

export default function Technologies() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState('Todas')

  const filtered = active === 'Todas' ? technologies : technologies.filter(t => t.category === active)

  return (
    <section id="technologies" className="section">
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Stack Tecnológico</p>
          <h2 className="section-title">Tecnologías que <span className="gradient-text">domino</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            Un arsenal de herramientas modernas con las que construyo productos robustos y escalables.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              id={`tech-filter-${cat.toLowerCase()}`}
              onClick={() => setActive(cat)}
              style={{
                padding: '0.45rem 1.1rem',
                borderRadius: '2rem',
                border: active === cat ? '1px solid var(--accent-purple)' : '1px solid var(--border)',
                background: active === cat ? 'rgba(124,58,237,0.18)' : 'transparent',
                color: active === cat ? '#a78bfa' : 'var(--text-muted)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition)',
                fontFamily: 'var(--font-code)',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Tech Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
          gap: '1rem',
        }}>
          {filtered.map((tech, i) => {
            const IconComponent = ICON_MAP[tech.icon]
            return (
              <motion.div
                key={tech.name}
                className="glass-card"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 + i * 0.04, duration: 0.4 }}
                style={{
                  padding: '1.5rem 1rem',
                  textAlign: 'center',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                {/* Glow backdrop */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(circle at 50% 30%, ${tech.color}15 0%, transparent 65%)`,
                  pointerEvents: 'none',
                  borderRadius: 'inherit',
                }} />
                {/* Icon */}
                <div style={{
                  fontSize: '2.2rem',
                  color: tech.color,
                  marginBottom: '0.75rem',
                  filter: `drop-shadow(0 0 8px ${tech.color}55)`,
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                  {IconComponent ? <IconComponent /> : <span>⚡</span>}
                </div>
                {/* Name */}
                <p style={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-code)',
                }}>
                  {tech.name}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* ======== LEARNING / COMING SOON SECTION ======== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ marginTop: '4.5rem' }}
        >
          <p className="section-label">En crecimiento</p>
          <h3 style={{
            fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
            fontWeight: 700,
            marginBottom: '0.5rem',
            color: 'var(--text-primary)',
          }}>
            Aprendiendo & <span className="gradient-text">Próximamente</span>
          </h3>
          <div className="divider" />
          <p style={{
            fontSize: '0.95rem',
            color: 'var(--text-secondary)',
            maxWidth: '520px',
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}>
            Siempre estoy explorando nuevas tecnologías para mantenerme al día en la industria.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: '1rem',
          }}>
            {learningTechnologies.map((tech, i) => {
              const IconComponent = ICON_MAP[tech.icon]
              const isLearning = tech.status === 'Aprendiendo'
              return (
                <motion.div
                  key={tech.name}
                  className="glass-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  style={{
                    padding: '1.4rem 1rem',
                    textAlign: 'center',
                    cursor: 'default',
                    position: 'relative',
                    overflow: 'hidden',
                    border: isLearning
                      ? '1px solid rgba(124, 58, 237, 0.25)'
                      : '1px solid var(--border)',
                  }}
                >
                  {/* Subtle animated border glow for learning items */}
                  {isLearning && (
                    <div style={{
                      position: 'absolute',
                      inset: -1,
                      borderRadius: 'inherit',
                      background: 'linear-gradient(135deg, rgba(124,58,237,0.08), rgba(6,182,212,0.06))',
                      pointerEvents: 'none',
                    }} />
                  )}

                  {/* Glow backdrop */}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `radial-gradient(circle at 50% 30%, ${tech.color}10 0%, transparent 65%)`,
                    pointerEvents: 'none',
                    borderRadius: 'inherit',
                  }} />

                  {/* Icon */}
                  <div style={{
                    fontSize: '2rem',
                    color: tech.color,
                    marginBottom: '0.65rem',
                    filter: `drop-shadow(0 0 6px ${tech.color}44)`,
                    display: 'flex',
                    justifyContent: 'center',
                    opacity: isLearning ? 1 : 0.6,
                  }}>
                    {IconComponent ? <IconComponent /> : <span>⚡</span>}
                  </div>

                  {/* Name */}
                  <p style={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-code)',
                    marginBottom: '0.55rem',
                  }}>
                    {tech.name}
                  </p>

                  {/* Status Badge */}
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.18rem 0.65rem',
                    borderRadius: '2rem',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-code)',
                    background: isLearning ? 'rgba(124, 58, 237, 0.15)' : 'rgba(6, 182, 212, 0.1)',
                    color: isLearning ? '#a78bfa' : '#22d3ee',
                    border: `1px solid ${isLearning ? 'rgba(124,58,237,0.3)' : 'rgba(6,182,212,0.25)'}`,
                  }}>
                    {/* Pulsing dot for learning, clock for upcoming */}
                    <span style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: isLearning ? '#a78bfa' : '#22d3ee',
                      display: 'inline-block',
                      animation: isLearning ? 'pulse-dot 1.5s ease-in-out infinite' : 'none',
                      opacity: isLearning ? 1 : 0.7,
                    }} />
                    {tech.status}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Keyframe for pulsing dot */}
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
      `}</style>
    </section>
  )
}
