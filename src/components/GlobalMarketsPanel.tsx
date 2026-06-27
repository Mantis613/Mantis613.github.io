import GlowCard from './GlowCard'
import WorldMapDots from './WorldMapDots'
import { tickers } from '../data/marketData'

export default function GlobalMarketsPanel() {
  return (
    <GlowCard title=">_ GLOBAL MARKETS OVERVIEW" delay={0.15} className="h-full">
      <span className="mb-3 inline-block rounded border px-2 py-0.5 font-mono text-[10px] text-[var(--cyan)]"
        style={{ borderColor: 'var(--border)' }}>
        LIVE SIMULATION
      </span>
      <WorldMapDots />
      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-5">
        {tickers.map((t) => (
          <div key={t.pair} className="rounded border p-2 text-center font-mono text-xs"
            style={{ borderColor: 'var(--border)', background: 'var(--panel-strong)' }}>
            <div className="text-[var(--muted)]">{t.pair}</div>
            <div className={t.up ? 'text-[var(--cyan)]' : 'text-[var(--red)]'}>
              {t.up ? '▲' : '▼'} {Math.abs(t.change).toFixed(2)}%
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center font-mono text-[10px] text-[var(--muted)]">
        Mock data • No real market feed
      </p>
    </GlowCard>
  )
}
