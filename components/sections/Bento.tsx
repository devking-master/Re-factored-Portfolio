import styles from './Bento.module.css'

const skills = [
  { label: 'Frontend Architecture', pct: 98 },
  { label: 'Backend & Firebase', pct: 95 },
  { label: 'Responsive Design', pct: 96 },
  { label: 'Full-Stack Integration', pct: 92 },
]

const tools = [
  'React', 'Next.js', 'Firebase', 'JavaScript', 'HTML5', 'CSS3',
  'Tailwind CSS', 'Node.js', 'MongoDB', 'Vercel', 'Web3Forms', 
  'Git', 'GitHub', 'Responsive UI',
]

export default function Bento() {
  return (
    <section className="section" id="stack">
      <div className="section-inner">
        <div className={styles.label}>
          <span className="section-label">Stack & Skills</span>
        </div>
        <h2 className={`section-title ${styles.heading}`}>
          Built with the <span className="grad-blue">right tools.</span>
        </h2>

        <div className={styles.grid}>

          {/* Card 1 — Skills bars */}
          <div className={`card card-blue ${styles.card} ${styles.span2}`}>
            <div className={styles.cardGlowBlue} />
            <span className={styles.cardTag} style={{ color: 'var(--blue)' }}>Core Skills</span>
            <h3 className={styles.cardTitle}>Full-Stack Proficiency</h3>
            <p className={styles.cardSub}>Fluent across the entire web stack — from interface to infrastructure.</p>
            <div className={styles.skillBars}>
              {skills.map(s => (
                <div key={s.label} className={styles.skillRow}>
                  <div className={styles.skillMeta}>
                    <span className={styles.skillName}>{s.label}</span>
                    <span className={styles.skillPct}>{s.pct}%</span>
                  </div>
                  <div className={styles.skillTrack}>
                    <div className={styles.skillFill} style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 — Availability */}
          <div className={`card card-green ${styles.card} ${styles.availCard}`}>
            <div className={styles.cardGlowGreen} />
            <span className={styles.availDot} />
            <span className={styles.cardTag} style={{ color: 'var(--green)' }}>Status</span>
            <h3 className={styles.cardTitle}>Open for Work</h3>
            <p className={styles.cardSub}>Taking on 2 new projects from May 2026. Remote worldwide.</p>
            <a href="#contact" className={`btn btn-ghost btn-sm ${styles.availBtn}`}>
              Start a Project →
            </a>
          </div>

          {/* Card 3 — Tools grid */}
          <div className={`card ${styles.card} ${styles.span3}`}>
            <span className={styles.cardTag} style={{ color: 'var(--white2)' }}>Toolbox</span>
            <h3 className={styles.cardTitle}>Technologies I use daily</h3>
            <div className={styles.chips}>
              {tools.map(t => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>

          {/* Card 4 — Experience stat */}
          <div className={`card card-purple ${styles.card}`}>
            <div className={styles.cardGlowPurple} />
            <span className={styles.cardTag} style={{ color: 'var(--purple)' }}>Experience</span>
            <div className={styles.bigStat}>
              <span className={`display grad-blue ${styles.bigNum}`}>7+</span>
              <span className={styles.bigLabel}>Years building production systems</span>
            </div>
          </div>

          {/* Card 5 — Approach */}
          <div className={`card card-blue ${styles.card} ${styles.span2}`}>
            <div className={styles.cardGlowBlue} />
            <span className={styles.cardTag} style={{ color: 'var(--blue)' }}>Approach</span>
            <h3 className={styles.cardTitle}>How I work</h3>
            <div className={styles.approachList}>
              {[
                { icon: '⚡', title: 'Performance-first', desc: 'Every line of code is written with speed and scale in mind.' },
                { icon: '🔒', title: 'Security by default', desc: 'Auth, validation, and hardening baked in from day one.' },
                { icon: '🧪', title: 'Test-driven', desc: 'Unit, integration, and E2E coverage before every ship.' },
              ].map(a => (
                <div key={a.title} className={styles.approachItem}>
                  <span className={styles.approachIcon}>{a.icon}</span>
                  <div>
                    <div className={styles.approachTitle}>{a.title}</div>
                    <div className={styles.approachDesc}>{a.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
