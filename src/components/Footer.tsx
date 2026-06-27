import { profileData } from '../data/profileData'

export default function Footer() {
  return (
    <footer id="contact" className="border-t py-6 text-center" style={{ borderColor: 'var(--border)' }}>
      <p className="mb-4 font-mono text-xs tracking-wider text-[var(--cyan)]">
        &gt; BUILT WITH DATA. DRIVEN BY CURIOSITY.
      </p>
      <div className="mb-4 flex flex-wrap justify-center gap-4 font-mono text-xs">
        <a href={profileData.githubUrl} className="text-[var(--blue)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--cyan)]">GitHub</a>
        <a href={profileData.portfolioUrl} className="text-[var(--muted)] hover:text-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--cyan)]">Portfolio</a>
        <a href="#" className="text-[var(--muted)] hover:text-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--cyan)]">Contact</a>
      </div>
      <p className="font-mono text-[10px] text-[var(--muted)]">© 2026 Mantis613</p>
    </footer>
  )
}
