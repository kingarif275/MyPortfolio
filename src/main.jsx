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
    <div className="dot-letter" key={`${letter}-${n}`}>{letters[letter.toUpperCase()].flatMap((row, y) => row.split('').map((cell, x) =>
      <i key={`${x}-${y}`} className={cell === '1' ? 'on' : ''} />))}</div>)}</div>
}

function WaveGrid() {
  const ref = React.useRef(null)
  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let frame = 0
    let pointer = { x: 0.5, y: 0.5 }
    const resize = () => { const dpr = window.devicePixelRatio || 1; canvas.width = innerWidth*dpr; canvas.height = innerHeight*dpr; canvas.style.width = `${innerWidth}px`; canvas.style.height = `${innerHeight}px`; ctx.setTransform(dpr,0,0,dpr,0,0) }
    const move = e => { pointer = { x: e.clientX / innerWidth, y: e.clientY / innerHeight } }
    const draw = () => { ctx.clearRect(0,0,innerWidth,innerHeight); ctx.strokeStyle='rgba(120,120,120,.18)'; ctx.lineWidth=1; const step=Math.max(24, innerWidth/52); const amp=Math.min(42, innerWidth*.035); for(let x=-step;x<innerWidth+step;x+=step){ctx.beginPath(); for(let y=0;y<innerHeight;y+=12){const dx=(x-innerWidth*pointer.x)/innerWidth; const dy=(y-innerHeight*pointer.y)/innerHeight; const wave=Math.sin(y*.018+dx*5+frame*.012)*amp*Math.exp(-(dx*dx+dy*dy)*2); const px=x+wave; y===0?ctx.moveTo(px,y):ctx.lineTo(px,y)} ctx.stroke()} for(let y=0;y<innerHeight;y+=step){ctx.beginPath(); for(let x=0;x<innerWidth;x+=12){const dx=(x-innerWidth*pointer.x)/innerWidth; const dy=(y-innerHeight*pointer.y)/innerHeight; const wave=Math.sin(x*.018+dy*5+frame*.012)*amp*Math.exp(-(dx*dx+dy*dy)*2); const py=y+wave; x===0?ctx.moveTo(x,py):ctx.lineTo(x,py)} ctx.stroke()} frame=requestAnimationFrame(draw) }
    resize(); addEventListener('resize',resize); addEventListener('pointermove',move); frame=requestAnimationFrame(draw); return()=>{cancelAnimationFrame(frame);removeEventListener('resize',resize);removeEventListener('pointermove',move)}
  }, [])
  return <canvas ref={ref} className="wave-grid" aria-hidden="true" />
}

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="header">
    <a className="brand" href="#top" aria-label="Arif Iskandar, home"><b>ARIF<br/>ISKANDAR</b></a>
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
      <WaveGrid />
      <h1 id="hero-title" className="sr-only">Arif Iskandar — developer and builder</h1>
      <div className="dot-word" aria-label="arif">arif</div>
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
          <div className="description-footer"><span>INTRODUCTION</span><b>○</b></div>
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
          <div><small>{p.label}</small><h3 className="typing-title">{p.title}</h3></div><b className="project-arrow">↗</b>
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
            <h3 className="typing-title">{item.name}</h3>
            <p>{item.summary}</p>
            <ul aria-label={`${item.name} technologies`}>{item.stack.map(tag => <li key={tag}>{tag}</li>)}</ul>
          </div>
          <a href={item.url} target="_blank" rel="noreferrer" aria-label={`${item.action}: ${item.name}`}><span>{item.action}</span><b>↗</b></a>
        </article>)}
      </div>
      <div className="legacy-chapters">
        <div className="legacy-heading"><span>EARLIER CHAPTERS</span><p>The projects below remain part of the story: collaborative Roblox worlds, environment work and the associate communities that helped shape how I build.</p></div>
        <a href="https://www.roblox.com/groups/9068739/Bloxers-Supermarket#!/about" target="_blank" rel="noreferrer"><span>FORMER CHIEF DEVELOPER OFFICER</span><strong>BLOXXER SUPERMARKET</strong><b>↗</b></a>
        <a href="https://www.roblox.com/groups/6057477/SWTOR-The-Ancient-Sith-Empire#!/about" target="_blank" rel="noreferrer"><span>IMPERIAL ARCHITECT</span><strong>THE ANCIENT SITH EMPIRE</strong><b>↗</b></a>
        <a href="https://www.roblox.com/communities/17407473/The-Crimson-Organization#!/about" target="_blank" rel="noreferrer"><span>“THE ARCHITECT”</span><strong>THE CRIMSON ORGANIZATION</strong><b>↗</b></a>
      </div>
    </Chapter>

    <section className="recognition" id="recognition">
      <div className="chapter-label"><span>05</span><b>RECOGNITION</b></div>
      <div className="statement"><h2>PROOF OF<br/>CURIOSITY.</h2></div>
      <div className="recognition-list">
        <article><span>2021—2022 / NATIONAL</span><h3>MAXIS eKELAS Misi Jelajah Digital</h3><p>Grand Prize winner — one of four students recognised nationwide. The winning work explored Malay-culture houses, townships and islands through a Roblox-based STEM simulation.</p><a href="https://www.maxis.com.my/en/about-maxis/newsroom/2022/april/maxis-ekelas-awards-most-innovative-space-explorers-in-inaugural-stem-competition-for-students.html" target="_blank" rel="noreferrer">ARIF / OFFICIAL FEATURE ↗</a></article>
        <article><span>2025 / OPEN SOURCE</span><h3>BETTERCHAT V4 CONTRIBUTOR</h3><p>Publicly credited for UI fixes, bubble and billboard synchronisation, multiline messages, hover resizing, colour consistency, interface restructuring and an animated context menu.</p><a href="https://devforum.roblox.com/t/betterchat-v4-continued-development/3738472" target="_blank" rel="noreferrer">PUBLIC CREDITS ↗</a></article>
        <article><span>2025 / GAME JAM</span><h3>ROBLOX INSPIRE</h3><p>Participant and team organiser for the 2025 Inspire Challenge, helping assemble a development team and build a game under the event brief.</p><a href="https://devforum.roblox.com/t/roblox-inspire-2025/3809748?page=7" target="_blank" rel="noreferrer">EVENT DISCUSSION ↗</a></article>
        <article><span>2025—2026 / CREDENTIALS</span><h3>GOOGLE CLOUD FOUNDATIONS</h3><p>Completed credentials covering data, machine learning and AI, networking and security, infrastructure, secure network design, ML APIs and application development environments.</p><a href="https://www.cloudskillsboost.google/" target="_blank" rel="noreferrer">CREDENTIALS ↗</a></article>
        <article className="recognition-essential"><span>2026 / GLOBAL SHORTLIST</span><h3>NOTHING ESSENTIAL LAB</h3><p>Shortlisted in the global Top 50 for Essential Lab Season 1. Listed as a shortlist distinction, not a final winner claim.</p><a href="https://nothing.community/d/52838-essential-lab-season-1-student-contest/82" target="_blank" rel="noreferrer">CONTEST RECORD ↗</a></article>
        <article><span>2026 / AI HACKATHON</span><h3>HACKATHON SEDIA!</h3><p>Participant at the GDGoC Multimedia University AI hackathon in Cyberjaya, building solutions for real-world challenges.</p><a href="https://gdg.community.dev/events/details/google-gdg-on-campus-multimedia-university-selangor-malaysia-presents-hackathon-sedia/" target="_blank" rel="noreferrer">EVENT PAGE ↗</a></article>
      </div>
    </section>

    <section id="contact" className="contact">
      <p>HAVE AN IDEA WORTH BUILDING?</p>
      <h2>LET’S MAKE<br/>SOMETHING<br/>MEMORABLE.</h2>
      <a className="contact-link" href="mailto:arif.iskandar275@gmail.com">START A CONVERSATION <b>↗</b></a>
    </section>

    <footer><a href="#top">ARIF ISKANDAR</a><p>DEVELOPER / BUILDER / DESIGNER</p><p>© {new Date().getFullYear()} — MELAKA, MALAYSIA</p><a href="#top">BACK TO TOP ↑</a></footer>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)

