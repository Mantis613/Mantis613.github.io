import GlowCard from './GlowCard'
import { skills } from '../data/marketData'

export default function SkillsPanel() {
  return (
    <GlowCard title=">_ TECH STACK" delay={0.5}>
      <div className="space-y-4">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <h3 className="mb-2 font-mono text-[10px] text-[var(--blue)]">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span key={skill} className="rounded border px-2 py-1 font-mono text-xs text-[var(--white-glow)] transition-colors hover:border-[var(--border-strong)] hover:shadow-[0_0_12px_rgba(47,140,255,0.2)]"
                  style={{ borderColor: 'var(--border)', background: 'rgba(47,140,255,0.06)' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </GlowCard>
  )
}
