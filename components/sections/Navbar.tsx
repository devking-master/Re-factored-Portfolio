'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'

const links = [
  { label: 'Work',    href: '#work' },
  { label: 'About',   href: '#about' },
  { label: 'Stack',   href: '#stack' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={styles.shell}>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#" className={styles.brand}>
          <Image 
            src="/Main-Logo.png" 
            alt="DevKing Logo" 
            width={120} 
            height={40} 
            className={styles.logoImg}
            priority
          />
        </a>

        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.label}>
              <a href={l.href} className={styles.link}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href="#contact" className={`btn btn-primary btn-sm ${styles.cta}`}>
          Hire Me
        </a>
      </nav>
    </header>
  )
}
