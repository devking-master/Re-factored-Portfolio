# DevKing Portfolio v2 — Next.js 14

A premium dark-mode full-stack developer portfolio. Apple-inspired design language with animated ambient orbs, glassmorphism cards, smooth scroll-reveal, and proper social icons.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# Open http://localhost:3000
```

---

## Project Structure

```
devking-v2/
├── app/
│   ├── layout.tsx          # Root layout + ambient orbs + metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Full design system (tokens, buttons, cards, animations)
│
├── components/
│   ├── icons/
│   │   └── SocialIcons.tsx         # SVG icons: GitHub, LinkedIn, Twitter/X, Dribbble
│   │
│   ├── sections/
│   │   ├── Navbar.tsx / .module.css        # Frosted glass pill nav, scroll-aware
│   │   ├── Hero.tsx / .module.css          # Full-screen hero, animated badge, stat row
│   │   ├── Marquee.tsx / .module.css       # Infinite scrolling ticker
│   │   ├── Bento.tsx / .module.css         # Skills bento grid (glassmorphism cards)
│   │   ├── Projects.tsx / .module.css      # List-style project rows with hover FX
│   │   ├── About.tsx / .module.css         # Bio + experience timeline
│   │   ├── Testimonials.tsx / .module.css  # 3-column client quotes
│   │   ├── CTA.tsx / .module.css           # Full-width CTA banner with shimmer line
│   │   ├── Contact.tsx / .module.css       # Contact form with budget chips
│   │   └── Footer.tsx / .module.css        # 4-column footer with icon social links
│   │
│   ├── RevealWrapper.tsx   # Client component: wraps sections for scroll-reveal
│   └── useReveal.ts        # IntersectionObserver hook for reveal animation
│
└── public/
    └── cv.pdf              # ← Drop your CV here
```

---

## Customise

### Personal details
Edit the data arrays at the top of each section component:

| File | What to edit |
|---|---|
| `Hero.tsx` | Tagline, stats |
| `Projects.tsx` | `projects[]` array |
| `About.tsx` | `jobs[]` array, bio text |
| `Testimonials.tsx` | `testimonials[]` array |
| `Footer.tsx` | `socials[]` href URLs, `navCols[]` links |
| `Contact.tsx` | Email address |
| `app/layout.tsx` | SEO metadata |

### Accent colour
Open `globals.css` and change `--blue`:
```css
--blue:  #2997ff;  /* ← Apple blue, change to any hex */
--purple: #bf5af2; /* ← gradient partner */
```

### Social links
Update the `href` values in `Footer.tsx`:
```tsx
const socials = [
  { label: 'GitHub',   href: 'https://github.com/YOUR_USERNAME', ... },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/YOUR_HANDLE', ... },
  ...
]
```

---

## Design System

| Token | Value |
|---|---|
| Background | `#000000` base, `#0a0a0a` cards |
| Accent blue | `#2997ff` (Apple blue) |
| Accent purple | `#bf5af2` |
| Green | `#30d158` (availability) |
| Font — Display | Cabinet Grotesk 800 |
| Font — Body | DM Sans 300/400/500 |
| Border radius | 22px cards, 100px pills, 10px inputs |
| Animations | CSS keyframes + IntersectionObserver |

---

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect GitHub repo at vercel.com for auto-deploys
```
