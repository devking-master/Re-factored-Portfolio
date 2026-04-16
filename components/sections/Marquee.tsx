import styles from './Marquee.module.css'

const items = [
  'React & Next.js', 'Node.js & Express', 'TypeScript',
  'REST & GraphQL APIs', 'Docker & Kubernetes', 'AWS & GCP',
  'CI/CD Pipelines', 'System Architecture',
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className={styles.outer}>
      <div className={styles.track}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.dot} aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  )
}
