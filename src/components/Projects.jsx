import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolio'

const FILTERS = ['Todos', 'Full Stack', 'Frontend']

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="section">
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Portafolio</p>
          <h2 className="section-title">Proyectos <span className="gradient-text">destacados</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            Una selección de los proyectos en los que he trabajado, desde MVPs hasta productos en producción.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}
        >
          {FILTERS.map(f => (
            <button
              key={f}
              id={`project-filter-${f.toLowerCase().replace(' ', '-')}`}
              onClick={() => setActive(f)}
              style={{
                padding: '0.45rem 1.2rem',
                borderRadius: '2rem',
                border: active === f ? '1px solid var(--accent-cyan)' : '1px solid var(--border)',
                background: active === f ? 'rgba(6,182,212,0.15)' : 'transparent',
                color: active === f ? '#22d3ee' : 'var(--text-muted)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'var(--transition)',
                fontFamily: 'var(--font-code)',
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {filtered.map((project, i) => (
            <motion.article
              key={project.id}
              className="glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
              style={{ overflow: 'hidden', cursor: 'default' }}
            >
              {/* Project Image / Gradient Banner */}
              <div style={{
                height: 180,
                background: project.image ? '#0c1124' : project.gradient,
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <>
                    {/* Subtle pattern overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)`,
                      backgroundSize: '24px 24px',
                    }} />
                    <div style={{
                      position: 'relative',
                      fontSize: '4rem',
                      filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.4))',
                    }}>
                      {['🚀', '📊', '🛍️',][i % 3]}
                    </div>
                  </>
                )}
                {project.featured && (
                  <span style={{
                    position: 'absolute', top: 12, right: 12,
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '2rem',
                    padding: '0.2rem 0.65rem',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: '#fbbf24',
                    backdropFilter: 'blur(8px)',
                  }}>
                    ⭐ Destacado
                  </span>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.05rem', fontWeight: 700,
                  color: 'var(--text-primary)', marginBottom: '0.6rem',
                }}>
                  {project.title}
                </h3>

                <p style={{
                  fontSize: '0.88rem', color: 'var(--text-secondary)',
                  lineHeight: 1.65, marginBottom: '1.1rem',
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                      style={{ flex: 1, justifyContent: 'center', padding: '0.55rem 1rem', fontSize: '0.85rem' }}
                    >
                      <FiGithub /> Código
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                      style={{ flex: 1, justifyContent: 'center', padding: '0.55rem 1rem', fontSize: '0.85rem' }}
                    >
                      <FiExternalLink /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
