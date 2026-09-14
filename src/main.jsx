import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  { title: 'Terrain worlds', label: 'ENVIRONMENT DESIGN', image: '/work/terrain-1.jpg', url: '#work' },
  { title: 'Interface systems', label: 'UI / SCRIPTING', image: '/work/ui-1.jpg', url: '#work' },
  { title: 'Ancient Sith Empire', label: 'IMPERIAL ARCHITECT', image: '/work/build-1.jpg', url: 'https://www.roblox.com/groups/6057477/SWTOR-The-Ancient-Sith-Empire#!/about' },
  { title: 'World building', label: 'ROBLOX STUDIO', image: '/work/build-2.jpg', url: '#work' },
  { title: 'Interactive systems', label: 'GAMEPLAY', image: '/work/ui-2.jpg', url: '#work' },
  { title: 'Visual direction', label: 'DESIGN', image: '/work/terrain-2.jpg', url: '#work' },
]

function DotWord({ word, label }) {
  const letters = useMemo(() => ({
    A:['01110','10001','10001','11111','10001','10001','10001'],
    R:['11110','10001','10001','11110','10100','10010','10001'],
    I:['11111','00100','00100','00100','00100','00100','11111'],
    F:['11111','10000','10000','11110','10000','10000','10000'],
  }), [])
  return <div className="dot-word" role="img" aria-label={label}>{word.split('').map((letter, n) =>
    <div className="dot-letter" key={`${letter}-${n}`}>{letters[letter].flatMap((row, y) => row.split('').map((cell, x) =>
      <i key={`${x}-${y}`} className={cell === '1' ? 'on' : ''} />))}</div>)}</div>
}

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="header">
    <a className="brand" href="#top" aria-label="Arif Iskandar, home"><span>A</span><b>ARIF<br/>ISKANDAR</b></a>
    <nav className={open ? 'open' : ''} aria-label="Primary navigation">
      <a href="#about" onClick={() => setOpen(false)}>ABOUT</a>
      <a href="#work" onClick={() => setOpen(false)}>WORK</a>
      <a href="#experience" onClick={() => setOpen(false)}>EXPERIENCE</a>
      <a href="#contact" onClick={() => setOpen(false)}>CONTACT</a>
    </nav>
    <button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><span/><span/></button>
  </header>
}

function Chapter({ number, title, children, className='' }) {
  return <section className={`chapter ${className}`}>
    <div className="chapter-label"><span>{number}</span><b>{title}</b></div>
    {children}
  </section>
}

function App() {
  const [cursor, setCursor] = useState({x:-100,y:-100})
  useEffect(() => {
    const update = e => setCursor({x:e.clientX,y:e.clientY})
    window.addEventListener('pointermove', update)
    return () => window.removeEventListener('pointermove', update)
  }, [])

  return <main id="top">
    <div className="cursor" style={{transform:`translate(${cursor.x}px,${cursor.y}px)`}} aria-hidden="true" />
    <Header />
    <section className="hero" aria-labelledby="hero-title">
      <div className="shape shape-red"/><div className="shape shape-yellow"/><div className="shape shape-blue"/><div className="shape shape-orange"/>
      <div className="grid-scribble" aria-hidden="true" />
      <h1 id="hero-title" className="sr-only">Arif Iskandar — developer and builder</h1>
      <DotWord word="ARIF" label="ARIF" />
      <p className="hero-kicker">DEVELOPER <span>+</span> BUILDER <span>+</span> DESIGNER</p>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><b>↓</b></a>
    </section>

    <Chapter number="01" title="INTRODUCTION" className="intro" >
      <div id="about" className="statement reveal">
        <h2>I BUILD DIGITAL WORLDS<br/>WHERE CODE, DESIGN<br/>AND PLAY MEET.</h2>
      </div>
      <div className="intro-grid">
        <figure className="feature-media"><img src="/work/build-3.jpg" alt="A Roblox environment designed by Arif"/><figcaption>SELECTED ENVIRONMENT / ROBLOX STUDIO</figcaption></figure>
        <div className="copy-stack">
          <p>I’m Arif Iskandar, a university student in Melaka, Malaysia, exploring digital and computer systems at UTeM.</p>
          <p>My work moves between programming, interface design and world building. I enjoy turning a rough idea into something people can see, use and play.</p>
          <p>Every project is a chance to solve a new problem—and make the final experience feel considered.</p>
        </div>
      </div>
    </Chapter>

    <Chapter number="02" title="SELECTED WORK" className="work-section">
      <div id="work" className="statement">
        <h2>FROM TERRAIN TO SYSTEMS,<br/>I MAKE EXPERIENCES<br/>THAT FEEL ALIVE.</h2>
      </div>
      <div className="project-grid">
        {projects.map((p, i) => <a className={`project-card card-${i+1}`} href={p.url} target={p.url.startsWith('http')?'_blank':undefined} rel="noreferrer" key={p.title}>
          <img src={p.image} alt={`${p.title} project preview`} />
          <span className="project-index">0{i+1}</span>
          <div><small>{p.label}</small><h3>{p.title}</h3></div><b className="project-arrow">↗</b>
        </a>)}
      </div>
    </Chapter>

    <Chapter number="03" title="APPROACH" className="values">
      <div className="statement"><h2>NEW IDEAS DESERVE<br/>THOUGHTFUL SYSTEMS.</h2></div>
      <div className="value-grid">
        <article><span>01</span><h3>BUILD WITH PURPOSE.</h3><p>Start from the experience. Every visual and technical choice should make the final interaction clearer.</p></article>
        <article><span>02</span><h3>MAKE IT YOURS.</h3><p>References are a starting point. The strongest work carries a specific voice, not a generic template.</p></article>
        <article><span>03</span><h3>KEEP EXPLORING.</h3><p>Learn by prototyping, testing and refining. Curiosity turns unfamiliar problems into useful skills.</p></article>
      </div>
    </Chapter>

    <Chapter number="04" title="EXPERIENCE" className="experience">
      <div id="experience" className="statement"><h2>ROLES THAT SHAPED<br/>HOW I CREATE.</h2></div>
      <div className="role-list">
        <a href="https://www.roblox.com/groups/9068739/Bloxers-Supermarket#!/about" target="_blank" rel="noreferrer"><span>FORMER CHIEF DEVELOPER OFFICER</span><strong>BLOXXER SUPERMARKET</strong><b>↗</b></a>
        <a href="https://www.roblox.com/groups/6057477/SWTOR-The-Ancient-Sith-Empire#!/about" target="_blank" rel="noreferrer"><span>IMPERIAL ARCHITECT</span><strong>THE ANCIENT SITH EMPIRE</strong><b>↗</b></a>
        <a href="https://www.roblox.com/communities/17407473/The-Crimson-Organization#!/about" target="_blank" rel="noreferrer"><span>“THE ARCHITECT”</span><strong>THE CRIMSON ORGANIZATION</strong><b>↗</b></a>
      </div>
    </Chapter>

    <section id="contact" className="contact">
      <div className="contact-mark">A<span>✳</span></div>
      <p>HAVE AN IDEA WORTH BUILDING?</p>
      <h2>LET’S MAKE<br/>SOMETHING<br/>MEMORABLE.</h2>
      <a className="contact-link" href="mailto:arif.iskandar275@gmail.com">START A CONVERSATION <b>↗</b></a>
    </section>

    <footer><a href="#top">ARIF ISKANDAR</a><p>DEVELOPER / BUILDER / DESIGNER</p><p>© {new Date().getFullYear()} — MELAKA, MALAYSIA</p><a href="#top">BACK TO TOP ↑</a></footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
