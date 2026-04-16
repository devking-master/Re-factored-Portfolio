import styles from './About.module.css'

const jobs = [
  {
    role: 'Lead Developer',
    company: 'StreamVerse Upgraded',
    period: '2025 — Present',
    desc: 'Engineering a premium trailer streaming platform with React and Firebase. Focused on high-performance UI and seamless data synchronization.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Event Management System',
    period: '2025',
    desc: 'Architected and deployed a scalable event management platform. Integrated real-time updates and secure user authentication.',
  },
  {
    role: 'Web Developer',
    company: 'Luxe E-commerce & Mini-Mart',
    period: '2024 — 2025',
    desc: 'Built multiple e-commerce solutions using the MERN stack and Firebase. Delivered responsive interfaces with complex state management.',
  },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-inner">
        <div className={styles.grid}>

          {/* Left — bio */}
          <div className={styles.left}>
            <span className="section-label">About Me</span>
            <h2 className={`${styles.heading} display`}>
              <span className="grad-white">Turning ideas into</span>
              <br />
              <span className="grad-blue">digital reality.</span>
            </h2>
            <p className={styles.bio}>
              Hi, I'm <strong>Dev King</strong> — a passionate web developer
              who loves turning ideas into interactive digital experiences. I
              build clean, modern, and responsive websites that focus on both
              functionality and user experience.
            </p>
            <p className={styles.bio}>
              Based in <strong>Ibadan, Nigeria</strong> — I bring a 
              performance-first mindset to every project. Whether it's a 
              complex full-stack application or a sleek portfolio, I ensure 
              precision in every commit.
            </p>
            <div className={styles.certs}>
              {[
                'React & Next.js Expert',
                'Firebase Specialist',
                'Full-Stack Developer',
              ].map(c => (
                <span key={c} className={styles.cert}>{c}</span>
              ))}
            </div>
          </div>

          {/* Right — timeline */}
          <div className={styles.right}>
            <span className="section-label">Experience</span>
            <div className={styles.timeline}>
              {jobs.map((j, i) => (
                <div key={j.role} className={styles.job}>
                  <div className={styles.jobDot} />
                  {i < jobs.length - 1 && <div className={styles.jobLine} />}
                  <div className={styles.jobContent}>
                    <div className={styles.jobPeriod}>{j.period}</div>
                    <div className={styles.jobRole}>{j.role}</div>
                    <div className={styles.jobCompany}>{j.company}</div>
                    <p className={styles.jobDesc}>{j.desc}</p>
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
