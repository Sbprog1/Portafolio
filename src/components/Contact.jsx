import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiTwitter, FiInstagram, FiCheck, FiAlertCircle } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import { personalInfo } from '../data/portfolio'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        'service_2n9ppa4',
        'template_aki5eux',
        {
          name: form.name,
          email: form.email,
          title: form.subject,
          message: form.message,
        },
        'rjjoszmAhBuxtAePg'
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(null), 5000)
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
      setTimeout(() => setStatus(null), 5000)
    }
  }

  const contactItems = [
    { icon: <FiMail />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <FiMapPin />, label: 'Ubicación', value: personalInfo.location, href: '#' },
  ]

  const socials = [
    { icon: <FiGithub />, href: personalInfo.social.github, label: 'GitHub' },
    { icon: <FiTwitter />, href: personalInfo.social.twitter, label: 'Twitter' },
    { icon: <FiInstagram />, href: personalInfo.social.instagram, label: 'Instagram' },
  ]

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--border)',
    borderRadius: '0.6rem',
    padding: '0.85rem 1rem',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
    fontFamily: 'var(--font-primary)',
    outline: 'none',
    transition: 'var(--transition)',
  }

  return (
    <section id="contact" className="section">
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">¿Hablamos?</p>
          <h2 className="section-title">Ponte en <span className="gradient-text">Contacto</span></h2>
          <div className="divider" />
          <p className="section-subtitle">
            ¿Tienes un proyecto en mente o quieres colaborar? Estoy a un mensaje de distancia.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          alignItems: 'start',
        }}>
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Availability badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: 'rgba(16,185,129,0.1)',
              border: '1px solid rgba(16,185,129,0.3)',
              borderRadius: '0.6rem',
              padding: '0.75rem 1.1rem',
              marginBottom: '2rem',
            }}>
              <div style={{
                width: 10, height: 10, borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 8px #10b981',
                animation: 'pulse-glow 2s infinite',
              }} />
              <span style={{ fontSize: '0.88rem', color: '#10b981', fontWeight: 600 }}>
                {personalInfo.availability}
              </span>
            </div>

            {/* Contact items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {contactItems.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    padding: '1rem 1.25rem',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '0.75rem',
                    textDecoration: 'none',
                    transition: 'var(--transition)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--border-accent)'
                    e.currentTarget.style.background = 'var(--bg-card-hover)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.background = 'var(--bg-card)'
                  }}
                >
                  <div style={{
                    width: 42, height: 42,
                    borderRadius: '0.6rem',
                    background: 'rgba(124,58,237,0.15)',
                    border: '1px solid rgba(124,58,237,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem', color: 'var(--accent-purple)', flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.15rem' }}>{item.label}</p>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 500 }}>{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social icons */}
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem', fontFamily: 'var(--font-code)' }}>
              // Sígueme en redes
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  title={s.label}
                  style={{
                    width: 42, height: 42,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    borderRadius: '0.6rem',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                    fontSize: '1.05rem',
                    transition: 'var(--transition)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--accent-purple)'
                    e.currentTarget.style.color = 'var(--accent-purple)'
                    e.currentTarget.style.background = 'rgba(124,58,237,0.1)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)'
                    e.currentTarget.style.color = 'var(--text-secondary)'
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.transform = 'none'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <form
              id="contact-form"
              onSubmit={handleSubmit}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '1rem',
                padding: '2rem',
                display: 'flex', flexDirection: 'column', gap: '1.1rem',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                    Nombre *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Tu nombre"
                    value={form.name}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--accent-purple)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="sbprog1@gmail.com"
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--accent-purple)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                  Asunto *
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="¿En qué te puedo ayudar?"
                  value={form.subject}
                  onChange={handleChange}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent-purple)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
                  Mensaje *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto..."
                  value={form.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = 'var(--accent-purple)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'}
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                    padding: '0.75rem 1rem',
                    background: 'rgba(16,185,129,0.1)',
                    border: '1px solid rgba(16,185,129,0.3)',
                    borderRadius: '0.5rem',
                    color: '#10b981', fontSize: '0.88rem', fontWeight: 500,
                  }}
                >
                  <FiCheck /> ¡Mensaje enviado con éxito! Te responderé pronto.
                </motion.div>
              )}
              {status === 'error' && (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.6rem',
                  padding: '0.75rem 1rem',
                  background: 'rgba(239,68,68,0.1)',
                  border: '1px solid rgba(239,68,68,0.3)',
                  borderRadius: '0.5rem',
                  color: '#ef4444', fontSize: '0.88rem',
                }}>
                  <FiAlertCircle /> Hubo un error. Intenta de nuevo o escríbeme directamente.
                </div>
              )}

              <button
                id="contact-submit"
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '0.9rem',
                  fontSize: '0.95rem',
                  opacity: status === 'sending' ? 0.7 : 1,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                }}
              >
                {status === 'sending' ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      style={{ width: 16, height: 16, border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%' }}
                    />
                    Enviando...
                  </>
                ) : (
                  <><FiSend /> Enviar Mensaje</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
