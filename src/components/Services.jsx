import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiCode, FiLayout, FiServer, FiSmartphone, FiZap, FiMessageSquare, FiCheck } from 'react-icons/fi'
import { services } from '../data/portfolio'

const ICON_MAP = { FiCode, FiLayout, FiServer, FiSmartphone, FiZap, FiMessageSquare }

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="section section-alt">
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">¿Qué ofrezco?</p>
          <h2 className="section-title">Mis <span className="gradient-text">Servicios</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            Ofrezco soluciones digitales completas adaptadas a las necesidades de tu negocio.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(310px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((service, i) => {
            const Icon = ICON_MAP[service.icon]
            return (
              <motion.div
                key={service.id}
                className="glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                style={{
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                }}
              >
                {/* Background glow */}
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  width: 180, height: 180,
                  background: `radial-gradient(circle, ${service.color}18 0%, transparent 70%)`,
                  borderRadius: '50%',
                  transform: 'translate(30%, -30%)',
                  pointerEvents: 'none',
                }} />

                {/* Top border accent */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: 2,
                  background: `linear-gradient(90deg, ${service.color}, transparent)`,
                  borderRadius: '1rem 1rem 0 0',
                }} />

                {/* Icon */}
                <div style={{
                  width: 52, height: 52,
                  borderRadius: '0.75rem',
                  background: `${service.color}1a`,
                  border: `1px solid ${service.color}33`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem',
                  color: service.color,
                  marginBottom: '1.25rem',
                }}>
                  {Icon && <Icon />}
                </div>

                <h3 style={{
                  fontSize: '1.1rem', fontWeight: 700,
                  color: 'var(--text-primary)', marginBottom: '0.75rem',
                }}>
                  {service.title}
                </h3>

                <p style={{
                  fontSize: '0.9rem', color: 'var(--text-secondary)',
                  lineHeight: 1.7, marginBottom: '1.25rem',
                }}>
                  {service.description}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {service.features.map(feat => (
                    <li key={feat} style={{
                      display: 'flex', alignItems: 'center', gap: '0.6rem',
                      fontSize: '0.83rem', color: 'var(--text-muted)',
                    }}>
                      <FiCheck style={{ color: service.color, flexShrink: 0, fontSize: '0.85rem' }} />
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
