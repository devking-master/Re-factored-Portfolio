'use client'
import { useState } from 'react'
import styles from './Contact.module.css'

type FormState = {
  firstName: string
  lastName: string
  email: string
  budget: string
  message: string
}

const budgets = ['< $5k', '$5k – $15k', '$15k – $40k', '$40k+']

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    firstName: '', lastName: '', email: '', budget: '', message: '',
  })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = (e: React.MouseEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="section" id="contact">
      <div className="section-inner">
        <div className={styles.grid}>

          {/* Left — contact info */}
          <div className={styles.left}>
            <span className="section-label">Contact</span>
            <h2 className={`${styles.heading} display`}>
              <span className="grad-white">Let's build</span>
              <br />
              <span className="grad-blue">together.</span>
            </h2>
            <p className={styles.info}>
              Have a full-stack project in mind? I'd love to hear about it.
              Tell me what you're building and I'll get back to you within
              24 hours.
            </p>

            <div className={styles.contactLinks}>
              <a href="mailto:oluwaseunabass267@gmail.com" className={styles.contactLink}>
                <span className={styles.contactIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                oluwaseunabass267@gmail.com
              </a>
              <a href="https://github.com/devking-sammy" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                <span className={styles.contactIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </span>
                @devking-sammy
              </a>
              <div className={styles.contactLink} style={{ cursor: 'default' }}>
                <span className={styles.contactIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                Ibadan, Nigeria · Remote worldwide
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className={styles.formWrap}>
            {sent ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#30d158" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className={styles.successTitle}>Message received!</h3>
                <p className={styles.successSub}>I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.group}>
                    <label className={`${styles.label} ${focused === 'firstName' ? styles.focused : ''}`}>
                      First name
                    </label>
                    <input
                      className={styles.input}
                      type="text" name="firstName"
                      placeholder="John"
                      value={form.firstName}
                      onChange={handle}
                      onFocus={() => setFocused('firstName')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div className={styles.group}>
                    <label className={`${styles.label} ${focused === 'lastName' ? styles.focused : ''}`}>
                      Last name
                    </label>
                    <input
                      className={styles.input}
                      type="text" name="lastName"
                      placeholder="Doe"
                      value={form.lastName}
                      onChange={handle}
                      onFocus={() => setFocused('lastName')}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                <div className={styles.group}>
                  <label className={`${styles.label} ${focused === 'email' ? styles.focused : ''}`}>
                    Email address
                  </label>
                  <input
                    className={styles.input}
                    type="email" name="email"
                    placeholder="john@company.com"
                    value={form.email}
                    onChange={handle}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div className={styles.group}>
                  <label className={styles.label}>Project budget</label>
                  <div className={styles.budgetRow}>
                    {budgets.map(b => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm(f => ({ ...f, budget: b }))}
                        className={`${styles.budgetChip} ${form.budget === b ? styles.budgetActive : ''}`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.group}>
                  <label className={`${styles.label} ${focused === 'message' ? styles.focused : ''}`}>
                    Project brief
                  </label>
                  <textarea
                    className={styles.textarea}
                    name="message"
                    placeholder="Tell me what you're building..."
                    rows={5}
                    value={form.message}
                    onChange={handle}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <button className={`btn btn-primary ${styles.submit}`} onClick={submit}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Send Message
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
