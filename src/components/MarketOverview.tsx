import { LineChart, Line, ResponsiveContainer } from 'recharts'
import GlowCard from './GlowCard'
import { marketOverview } from '../data/marketData'

export default function MarketOverview() {
  return (
    <GlowCard title=">_ MARKET OVERVIEW" delay={0.25}>
      <div className="space-y-3">
        {marketOverview.map((row) => (
          <div key={row.name} className="flex items-center justify-between gap-2 text-xs">
            <span className="w-24 font-mono text-[var(--muted)]">{row.name}</span>
            <span className="font-mono text-[var(--white-glow)]">{row.value}</span>
            <span className={row.up ? 'text-[var(--cyan)]' : 'text-[var(--red)]'}>
              {row.up ? '▲' : '▼'} {Math.abs(row.change).toFixed(2)}%
            </span>
            <div className="h-8 w-16">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={row.spark.map((v, i) => ({ i, v }))}>
                  <Line type="monotone" dataKey="v" stroke={row.up ? '#38BDF8' : '#FF4D4D'} dot={false} strokeWidth={1.5} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>
    </GlowCard>
  )
}
