import styles from './Projects.module.css'

const projects = [
  {
    num: '01',
    name: 'StreamVerse Upgraded',
    desc: 'A modern trailer streaming platform built with React and Tailwind, featuring a seamless user interface and optimized streaming performance.',
    tags: ['React', 'Tailwind CSS', 'Firebase', 'Vite', 'API'],
    year: '2025',
    color: 'blue',
    stat: { value: '98%', label: 'user rating' },
    link: 'https://stream-verse-five.vercel.app/',
  },
  {
    num: '02',
    name: 'Event Management System',
    desc: 'Comprehensive event planning and management platform. Allows users to create, discover, and manage events with real-time updates.',
    tags: ['React', 'Tailwind', 'Firebase', 'Authentication'],
    year: '2025',
    color: 'purple',
    stat: { value: '500+', label: 'events hosted' },
    link: 'http://event-managment-ruby-ten.vercel.app',
  },
  {
    num: '03',
    name: 'Luxe E-commerce Store',
    desc: 'High-performance full-stack online store with a custom shopping cart, product management, and secure checkout experience.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    year: '2025',
    color: 'gold',
    stat: { value: '99.9%', label: 'uptime' },
    link: 'https://luxe-vert.vercel.app/',
  },
  {
    num: '04',
    name: 'Mini Mart Web App',
    desc: 'A lightweight and efficient marketplace for buying and selling products, integrated with Firebase for real-time inventory management.',
    tags: ['React', 'Tailwind', 'Firebase', 'Firestore'],
    year: '2024',
    color: 'green',
    stat: { value: '1.2k', label: 'active listings' },
    link: 'https://mini-mart-kappa.vercel.app/',
  },
  {
    num: '05',
    name: 'SkyPulse Weather App',
    desc: 'Real-time weather tracking application providing accurate forecasts and environmental data for any city worldwide.',
    tags: ['React', 'Weather API', 'CSS3', 'Geolocation'],
    year: '2024',
    color: 'blue',
    stat: { value: '50ms', label: 'avg response' },
    link: 'https://sky-pulse-nine.vercel.app/',
  },
  {
    num: '06',
    name: 'Sleek Portfolio',
    desc: 'A minimalist, performance-driven portfolio designed to showcase projects with clean typography and smooth animations.',
    tags: ['HTML5', 'Tailwind CSS', 'JavaScript', 'GSAP'],
    year: '2024',
    color: 'purple',
    stat: { value: '100', label: 'lighthouse score' },
    link: 'https://e-star-three.vercel.app/',
  },
]

const colorMap: Record<string, string> = {
  blue:   'var(--blue)',
  purple: 'var(--purple)',
  green:  'var(--green)',
  gold:   'var(--gold)',
}

export default function Projects() {
  return (
    <section className="section" id="work">
      <div className="section-inner">
        <span className="section-label">Selected Work</span>
        <div className={styles.header}>
          <h2 className="section-title">
            Projects that <span className="grad-blue">ship.</span>
          </h2>
          <span className={styles.count}>0{projects.length} projects</span>
        </div>

        <div className={styles.list}>
          {projects.map(p => (
            <article key={p.num} className={styles.row}>
              <a 
                href={p.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.rowLink}
                aria-label={`View ${p.name}`}
              />
              <span className={styles.num} style={{ color: colorMap[p.color] }}>
                {p.num}
              </span>

              <div className={styles.info}>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.desc}>{p.desc}</p>
                <div className={styles.tags}>
                  {p.tags.map(t => (
                    <span key={t} className="chip" style={{ fontSize: '11px', padding: '4px 10px' }}>{t}</span>
                  ))}
                </div>
              </div>

              <div className={styles.stat}>
                <span className={`display ${styles.statVal}`} style={{ color: colorMap[p.color] }}>
                  {p.stat.value}
                </span>
                <span className={styles.statLbl}>{p.stat.label}</span>
              </div>

              <span className={styles.year}>{p.year}</span>

              <div className={styles.arrow} style={{ '--c': colorMap[p.color] } as React.CSSProperties}>
                →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
