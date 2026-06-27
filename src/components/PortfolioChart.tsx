import { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import GlowCard from './GlowCard'
import { portfolioChartData } from '../data/portfolioData'

const ranges = ['1D', '1W', '1M', '3M', '1Y', 'ALL']

export default function PortfolioChart() {
  const [active, setActive] = useState('1M')

  return (
    <GlowCard title=">_ PORTFOLIO PERFORMANCE" delay={0.2}>
      <p className="mb-3 text-xs text-[var(--muted)]">Synthetic portfolio model</p>
      <div className="mb-4 flex flex-wrap gap-4 font-mono text-xs">
        <span>Total Value: <strong className="text-[var(--white-glow)]">$128,450</strong></span>
        <span className="text-[var(--cyan)]">▲ 12.8%</span>
        <span>Risk Score: <strong className="text-[var(--blue)]">LOW-MED</strong></span>
      </div>
      <div className="mb-3 flex gap-1">
        {ranges.map((r) => (
          <button key={r} type="button" onClick={() => setActive(r)}
            className="rounded px-2 py-1 font-mono text-[10px] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--cyan)]"
            style={{
              background: active === r ? 'rgba(47,140,255,0.2)' : 'transparent',
              color: active === r ? 'var(--cyan)' : 'var(--muted)',
              border: `1px solid ${active === r ? 'var(--border-strong)' : 'var(--border)'}`,
            }}>
            {r}
          </button>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={portfolioChartData}>
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2F8CFF" stopOpacity={0.4} />
              <stop offset="100%" stopColor="#2F8CFF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(56,189,248,0.1)" />
          <XAxis dataKey="date" tick={{ fill: '#94A3B8', fontSize: 10 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#94A3B8', fontSize: 10 }} axisLine={false} tickLine={false} width={50} />
          <Tooltip
            contentStyle={{ background: '#0f172a', border: '1px solid rgba(56,189,248,0.38)', fontSize: 12 }}
            labelStyle={{ color: '#EAF6FF' }}
          />
          <Area type="monotone" dataKey="value" stroke="#38BDF8" fill="url(#grad)" strokeWidth={2} />
        </AreaChart>
      </ResponsiveContainer>
    </GlowCard>
  )
}
