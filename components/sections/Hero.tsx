import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>

        {/* Status badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Available for projects · May 2026
        </div>

        {/* Main headline */}
        <h1 className={`${styles.title} display`}>
          <span className="grad-white">Hello, I'm</span>
          <br />
          <span className="grad-blue">Dev King</span>
        </h1>

        <p className={styles.sub}>
          I'm Abass Oluwaseun Samuel — a passionate web developer dedicated to building clean, 
          modern, and responsive digital experiences that scale.
        </p>

        <div className={styles.actions}>
          <a href="#work" className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            View My Work
          </a>
          <a href="/CV.pdf" className="btn btn-ghost" download>
            Download CV
          </a>
        </div>

        {/* Floating stat pills */}
        <div className={styles.stats}>
          <div className={styles.statPill}>
            <span className={styles.statNum}>10<span className="grad-blue">+</span></span>
            <span className={styles.statLabel}>Projects Shipped</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statPill}>
            <span className={styles.statNum}>5<span className="grad-blue">k+</span></span>
            <span className={styles.statLabel}>Users Served</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statPill}>
            <span className={styles.statNum}>2<span className="grad-blue">yr</span></span>
            <span className={styles.statLabel}>Experience</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statPill}>
            <span className={styles.statNum}>100<span className="grad-blue">%</span></span>
            <span className={styles.statLabel}>Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  )
}
