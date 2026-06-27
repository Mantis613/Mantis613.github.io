import GlowCard from './GlowCard'
import { projects } from '../data/projects'

export default function ProjectsPanel() {
  return (
    <GlowCard title=">_ FEATURED PROJECTS" delay={0.45}>
      <div className="space-y-4">
        {projects.map((p) => (
          <div key={p.id} className="rounded border p-3" style={{ borderColor: 'var(--border)', background: 'var(--panel-strong)' }}>
            <div className="mb-1 flex items-center justify-between">
              <h3 className="font-mono text-sm text-[var(--white-glow)]">{p.title}</h3>
              <span className="rounded border px-2 py-0.5 font-mono text-[10px] text-[var(--blue)]"
                style={{ borderColor: 'var(--border)' }}>{p.status}</span>
            </div>
            <p className="mb-2 text-xs text-[var(--muted)]">{p.description}</p>
            <div className="mb-2 flex flex-wrap gap-1">
              {p.stack.map((s) => (
                <span key={s} className="rounded px-1.5 py-0.5 font-mono text-[10px] text-[var(--cyan)]"
                  style={{ background: 'rgba(47,140,255,0.1)' }}>{s}</span>
              ))}
            </div>
            <div className="flex gap-3 font-mono text-xs">
              <a href={p.github} className="text-[var(--blue)] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--cyan)]">GitHub</a>
              <a href={p.demo} className="text-[var(--muted)] hover:text-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--cyan)]">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </GlowCard>
  )
}
