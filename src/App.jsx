import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'

import Projects from './components/Projects'

import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technologies />

        <Projects />

        <Contact />
      </main>
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: 'var(--text-muted)',
        fontSize: '0.85rem',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-secondary)',
      }}>
        <p>Diseñado & Desarrollado por <span style={{ color: 'var(--accent-purple)' }}>Sebastian Bustamante</span> © {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}
