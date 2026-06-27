import GlowCard from './GlowCard'
import { profileData } from '../data/profileData'

export default function HeroPanel() {
  return (
    <GlowCard className="h-full" delay={0.1}>
      <p className="mb-4 font-mono text-xs text-[var(--muted)]">
        <span className="cursor-blink">&gt;_ INITIALIZING PROFILE</span>
      </p>
      <p className="text-sm text-[var(--muted)]">Hi, I&apos;m</p>
      <h1 className="text-glow mb-2 text-4xl font-bold text-[var(--white-glow)] md:text-5xl">
        {profileData.displayName}
      </h1>
      <p className="mb-3 text-sm text-[var(--cyan)]">{profileData.role}</p>
      <p className="mb-6 text-sm leading-relaxed text-[var(--muted)]">{profileData.description}</p>
      <div className="mb-6 flex flex-wrap gap-3">
        <a href={profileData.githubUrl} className="btn-terminal" target="_blank" rel="noreferrer">GITHUB</a>
        <a href="#projects" className="btn-terminal">{'>_ VIEW PROJECTS'}</a>
        <a href="#contact" className="btn-terminal">CONTACT</a>
      </div>
      <div className="mb-4 flex flex-wrap gap-4 font-mono text-xs">
        <span className="text-[var(--cyan)]">BUILD: PASSING</span>
        <span className="text-[var(--cyan)]">UPTIME: 99.9%</span>
        <span className="text-[var(--blue)]">MODE: LIVE</span>
      </div>
      <p className="font-mono text-xs tracking-wider text-[var(--muted)]">
        SYSTEM ONLINE • BUILDING MODE ACTIVE
      </p>
    </GlowCard>
  )
}
