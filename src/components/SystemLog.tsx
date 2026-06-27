import GlowCard from './GlowCard'
import { systemLogs } from '../data/marketData'

export default function SystemLog() {
  return (
    <GlowCard title=">_ SYSTEM LOG" delay={0.4}>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1 space-y-1 font-mono text-[10px]">
          {systemLogs.map((log) => (
            <div key={log} className="text-[var(--cyan)]">{log}</div>
          ))}
        </div>
        <div className="flex items-center justify-center" aria-hidden="true">
          <div className="relative h-28 w-28">
            <div className="absolute inset-0 rounded-full border border-[var(--border)]"
              style={{ background: 'repeating-conic-gradient(from 0deg, transparent 0deg 10deg, rgba(56,189,248,0.05) 10deg 20deg)' }} />
            <div className="absolute inset-2 rounded-full border border-[var(--border)]" />
            <div className="absolute inset-0 motion-safe:animate-[radar-spin_4s_linear_infinite]">
              <div className="absolute left-1/2 top-1/2 h-1/2 w-0.5 origin-bottom -translate-x-1/2"
                style={{ background: 'linear-gradient(to top, var(--blue), transparent)' }} />
            </div>
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--cyan)]"
              style={{ boxShadow: '0 0 12px var(--cyan)' }} />
          </div>
        </div>
      </div>
    </GlowCard>
  )
}
