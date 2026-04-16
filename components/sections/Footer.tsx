import Image from 'next/image'
import styles from './Footer.module.css'
import { GitHubIcon, LinkedInIcon, TwitterIcon, DribbbleIcon } from '../icons/SocialIcons'

const socials = [
  { label: 'GitHub',   href: 'https://github.com/devking-sammy',   Icon: GitHubIcon },
  { label: 'WhatsApp', href: 'https://wa.me/2347079292865', Icon: LinkedInIcon }, // Using LinkedInIcon as placeholder if WhatsApp icon isn't available, or I'll check if I can add one.
  { label: 'X',  href: 'https://twitter.com/', Icon: TwitterIcon },
]

const navCols = [
  {
    title: 'Navigation',
    links: [
      { label: 'Work',    href: '#work' },
      { label: 'About',   href: '#about' },
      { label: 'Stack',   href: '#stack' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Frontend Engineering', href: '#contact' },
      { label: 'Backend & APIs',       href: '#contact' },
      { label: 'Cloud & DevOps',       href: '#contact' },
      { label: 'Full-Stack Projects',  href: '#contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'oluwaseunabass267@gmail.com',   href: 'mailto:oluwaseunabass267@gmail.com' },
      { label: 'WhatsApp Chat',    href: 'https://wa.me/2347079292865' },
      { label: 'Ibadan, Nigeria',     href: '#' },
      { label: 'Remote Worldwide',   href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Top section */}
        <div className={styles.top}>

          {/* Brand block */}
          <div className={styles.brand}>
            <div className={styles.brandLogo}>
              <Image 
                src="/Main-Logo.png" 
                alt="DevKing Logo" 
                width={150} 
                height={50} 
                className={styles.footerLogo}
              />
            </div>
            <p className={styles.brandTagline}>
              Passionate Web Developer building modern digital experiences.
              Based in Ibadan, Nigeria.
            </p>

            {/* Social icons */}
            <div className={styles.socials}>
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={styles.socialBtn}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navCols.map(col => (
            <div key={col.title} className={styles.col}>
              <h4 className={styles.colTitle}>{col.title}</h4>
              <ul className={styles.colLinks}>
                {col.links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className={styles.colLink}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} DevKing. All rights reserved.
          </p>
          <div className={styles.status}>
            <span className={styles.statusDot} />
            All systems operational
          </div>
          <p className={styles.version}>Build v2.0.26</p>
        </div>

      </div>
    </footer>
  )
}
