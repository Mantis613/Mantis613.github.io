import { useEffect, useState } from 'react'

const links = [
  { href: '#home', label: 'HOME' },
  { href: '#markets', label: 'MARKETS' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#stack', label: 'STACK' },
  { href: '#contact', label: 'CONTACT' },
]

export default function Header() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      setTime(now.toUTCString().slice(17, 25) + ' UTC')
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ borderColor: 'var(--border)', background: 'rgba(2,6,23,0.85)' }}
    >
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-4 py-3">
        <a href="#home" className="font-mono text-sm text-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--cyan)]">
          &gt;_ MANTIS_TERMINAL
        </a>
        <nav className="flex flex-wrap gap-3 font-mono text-xs text-[var(--muted)]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-[var(--white-glow)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--cyan)]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted)]">
          <span>{time}</span>
          <span className="h-2 w-2 rounded-full bg-[var(--blue)] shadow-[0_0_8px_var(--blue)]" />
          <span className="text-[var(--cyan)]">ONLINE</span>
        </div>
      </div>
    </header>
  )
}
