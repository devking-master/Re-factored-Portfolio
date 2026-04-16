import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className={styles.card}>
          {/* Radial glow behind the card */}
          <div className={styles.glowTop} />
          <div className={styles.glowBottom} />

          {/* Bottom shimmer line */}
          <div className={styles.shimmerLine} />

          <div className={styles.inner}>
            <p className={styles.eyebrow}>Ready to build?</p>
            <h2 className={`${styles.title} display`}>
              <span className="grad-white">Let's create something</span>
              <br />
              <span className="grad-blue">the internet remembers.</span>
            </h2>
            <p className={styles.sub}>
              Taking on 2 new full-stack projects from May 2026.
              Remote worldwide. I respond within 24 hours.
            </p>
            <div className={styles.actions}>
              <a href="#contact" className="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Start a Project
              </a>
              <a href="mailto:oluwaseunabass267@gmail.com" className="btn btn-ghost">
                oluwaseunabass267@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
