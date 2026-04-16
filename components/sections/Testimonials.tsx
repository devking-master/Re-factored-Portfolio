import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote: 'Delivered a production-grade platform in 8 weeks that our previous team couldn\'t ship in a year. The architecture is clean, scalable, and genuinely a joy to build on.',
    name: 'Adaeze Okonkwo',
    role: 'CTO, FinVault Africa',
    initials: 'AO',
    gradient: 'linear-gradient(135deg, #5e5ce6, #bf5af2)',
  },
  {
    quote: 'Not just a developer — a true systems thinker. He caught architectural issues before they became problems and proactively suggested optimisations we hadn\'t considered.',
    name: 'James Mwangi',
    role: 'VP Engineering, Axon Systems',
    initials: 'JM',
    gradient: 'linear-gradient(135deg, #30d158, #0071e3)',
  },
  {
    quote: 'API response times dropped 4x after his optimisation sprint. Exceptional technical depth, crystal-clear communication, zero hand-holding required.',
    name: 'Sara Kowalski',
    role: 'Product Lead, Synthex EU',
    initials: 'SK',
    gradient: 'linear-gradient(135deg, #ff375f, #ff9f0a)',
  },
]

export default function Testimonials() {
  return (
    <section className="section">
      <div className="section-inner">
        <span className="section-label">Testimonials</span>
        <h2 className="section-title">
          Clients who've <span className="grad-blue">shipped with me.</span>
        </h2>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.name} className={`card ${styles.card}`}>
              {/* Top gradient line */}
              <div className={styles.topLine} />

              {/* Stars */}
              <div className={styles.stars} aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#ffd60a" aria-hidden="true">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>

              <blockquote className={styles.quote}>{t.quote}</blockquote>

              <div className={styles.author}>
                <div className={styles.avatar} style={{ background: t.gradient }}>
                  {t.initials}
                </div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
