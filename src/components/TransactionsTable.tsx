import GlowCard from './GlowCard'
import { transactions } from '../data/marketData'

export default function TransactionsTable() {
  return (
    <GlowCard title=">_ LATEST TRANSACTIONS" delay={0.35}>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[500px] font-mono text-xs">
          <thead>
            <tr className="text-left text-[var(--muted)]">
              {['PAIR', 'SIDE', 'AMOUNT', 'PRICE', 'TOTAL', 'TIME'].map((h) => (
                <th key={h} className="pb-2 pr-3 font-normal">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.time + tx.pair} className="border-t" style={{ borderColor: 'var(--border)' }}>
                <td className="py-2 pr-3 text-[var(--white-glow)]">{tx.pair}</td>
                <td className={`py-2 pr-3 ${tx.side === 'BUY' ? 'text-[var(--cyan)]' : 'text-[var(--red)]'}`}>{tx.side}</td>
                <td className="py-2 pr-3 text-[var(--muted)]">{tx.amount}</td>
                <td className="py-2 pr-3 text-[var(--muted)]">{tx.price}</td>
                <td className="py-2 pr-3 text-[var(--white-glow)]">{tx.total}</td>
                <td className="py-2 text-[var(--muted)]">{tx.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-center font-mono text-[10px] text-[var(--muted)]">Simulation log only</p>
    </GlowCard>
  )
}
