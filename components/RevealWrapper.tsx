'use client'
import { useReveal } from './useReveal'

export default function RevealWrapper({ children }: { children: React.ReactNode }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  )
}
