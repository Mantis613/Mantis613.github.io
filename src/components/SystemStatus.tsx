import GlowCard from './GlowCard'
import { statusMetrics } from '../data/marketData'

const terminal = ['core.sync: ok', 'risk.engine: active', 'ui.render: stable']

export default function SystemStatus() {
  return (
    <GlowCard title=">_ SYSTEM STATUS" delay={0.3}>
      <div className="mb-4 space-y-3">
        {statusMetrics.map((m) => (
          <div key={m.label}>
            <div className="mb-1 flex justify-between font-mono text-xs">
              <span className="text-[var(--muted)]">{m.label}</span>
              <span className="text-[var(--cyan)]">{m.value}%</span>
            </div>
            <div className="h-1.5 rounded-full" style={{ background: 'rgba(56,189,248,0.1)' }}>
              <div className="h-full rounded-full" style={{
                width: `${m.value}%`,
                background: 'linear-gradient(90deg, var(--blue), var(--cyan))',
                boxShadow: '0 0 8px rgba(56,189,248,0.5)',
              }} />
            </div>
          </div>
        ))}
        <div className="flex justify-between font-mono text-xs">
          <span className="text-[var(--muted)]">LATENCY</span>
          <span className="text-[var(--cyan)]">18ms</span>
        </div>
        <div className="flex justify-between font-mono text-xs">
          <span className="text-[var(--muted)]">STATUS</span>
          <span className="text-[var(--blue)]">ONLINE</span>
        </div>
      </div>
      <div className="rounded border p-2 font-mono text-[10px]" style={{ borderColor: 'var(--border)', background: 'var(--panel-strong)' }}>
        {terminal.map((t) => (
          <div key={t} className="text-[var(--cyan)]">&gt; {t}</div>
        ))}
      </div>
    </GlowCard>
  )
}
