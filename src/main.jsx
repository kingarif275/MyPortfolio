import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  { title: 'Terrain worlds', label: 'ENVIRONMENT DESIGN', image: '/work/terrain-1.jpg', url: '#work' },
  { title: 'Interface systems', label: 'UI / SCRIPTING', image: '/work/ui-1.jpg', url: '#work' },
  { title: 'Gameplay architecture', label: 'SERVER SYSTEMS', image: '/work/build-1.jpg', url: '#experience' },
  { title: 'World building', label: 'ROBLOX STUDIO', image: '/work/build-2.jpg', url: '#work' },
  { title: 'Interaction design', label: 'PRODUCT UI', image: '/work/ui-2.jpg', url: '#work' },
  { title: 'Visual direction', label: 'DESIGN', image: '/work/terrain-2.jpg', url: '#work' },
]

const experience = [
  {
    index: '01',
    type: 'ANDROID / AI AGENT',
    name: 'SLASH',
    summary: 'A local-first Android agent that combines natural-language conversation, accessibility-grounded actions, local GGUF models and Vertex AI with outcome verification.',
    stack: ['JAVA', 'ANDROID', 'VERTEX AI', 'LLAMA.CPP'],
    url: 'https://github.com/kingarif275/slash-android-agent',
    action: 'VIEW SOURCE',
  },
  {
    index: '02',
    type: 'WEB PLATFORM',
    name: 'UTEM ATECH',
    summary: 'A platform for discovering and managing university training activities, with profiles, registration, collections, moderation and Firebase-backed access.',
    stack: ['REACT', 'VITE', 'FIREBASE', 'CLOUD FUNCTIONS'],
    url: 'https://www.atechutem.com',
    action: 'VISIT LIVE SITE',
  },
  {
    index: '03',
    type: 'OPEN-SOURCE ROBLOX TOOLING',
    name: 'ROUI TOOLKIT',
    summary: 'A Roblox Studio plugin that scans interfaces, ranks UI issues by severity and produces actionable audit reports without modifying a creator’s game.',
    stack: ['LUAU', 'ROJO', 'PLUGIN UI', 'AUTOMATED CHECKS'],
    url: 'https://github.com/kingarif275/RoUI-Toolkit',
    action: 'VIEW SOURCE',
  },
  {
    index: '04',
    type: 'AI LEARNING PRODUCT',
    name: 'LUMINA',
    summary: 'A personalised quiz and exercise experience built around Firebase and Vertex AI, including generated questions, image generation and resilient offline answer syncing.',
    stack: ['REACT', 'FIREBASE', 'VERTEX AI', 'OFFLINE SYNC'],
    url: 'https://github.com/kingarif275',
    action: 'GITHUB PROFILE',
  },
  {
    index: '05',
    type: 'BUSINESS AUTOMATION',
    name: 'NEXUS AI',
    summary: 'A multi-surface WhatsApp operations platform spanning inbox workflows, contacts, automation, AI agents, channel configuration and workspace settings.',
    stack: ['REACT', 'FIREBASE', 'WHATSAPP API', 'AI WORKFLOWS'],
    url: 'https://nexus-ai-platform-arif.web.app',
    action: 'VISIT LIVE SITE',
  },
  {
    index: '06',
    type: 'BOOKING PLATFORM',
    name: 'STAYNEST',
    summary: 'A Firebase-native accommodation platform with authentication, listings, booking validation, reviews, host operations and administrative workflows.',
    stack: ['REACT', 'TYPESCRIPT', 'FIRESTORE', 'FIREBASE'],
    url: 'https://staynest-beta-376917.web.app',
    action: 'VISIT LIVE SITE',
  },
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
      <p className="hero-kicker">WEB APPS <span>+</span> AI AGENTS <span>+</span> INTERACTIVE SYSTEMS</p>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><b>↓</b></a>
    </section>

    <Chapter number="01" title="INTRODUCTION" className="intro" >
      <div id="about" className="statement reveal">
        <h2>I BUILD DIGITAL PRODUCTS<br/>WHERE SYSTEMS, DESIGN<br/>AND AI MEET.</h2>
      </div>
      <div className="intro-grid">
        <figure className="feature-media"><img src="/work/build-3.jpg" alt="A Roblox environment designed by Arif"/><figcaption>SELECTED ENVIRONMENT / ROBLOX STUDIO</figcaption></figure>
        <div className="copy-stack">
          <p>I’m Arif Iskandar, a digital and computer systems student at UTeM in Melaka, Malaysia.</p>
          <p>My current work spans React and Firebase products, Android AI agents, and interactive systems for Roblox. I care about the complete path from architecture to the interface people actually use.</p>
          <p>I learn by shipping: building the system, testing real flows, refining the rough edges and making the final experience feel considered.</p>
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
      <div id="experience" className="statement"><h2>THE WORK IS<br/>THE EXPERIENCE.</h2></div>
      <div className="experience-list">
        {experience.map(item => <article className="experience-card" key={item.name}>
          <div className="experience-meta"><span>{item.index}</span><b>{item.type}</b></div>
          <div className="experience-body">
            <h3>{item.name}</h3>
            <p>{item.summary}</p>
            <ul aria-label={`${item.name} technologies`}>{item.stack.map(tag => <li key={tag}>{tag}</li>)}</ul>
          </div>
          <a href={item.url} target="_blank" rel="noreferrer" aria-label={`${item.action}: ${item.name}`}><span>{item.action}</span><b>↗</b></a>
        </article>)}
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
