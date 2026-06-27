export const tickers = [
  { pair: 'BTC/USDT', change: 2.35, up: true },
  { pair: 'ETH/USDT', change: 1.84, up: true },
  { pair: 'NASDAQ', change: 0.82, up: true },
  { pair: 'AI INDEX', change: 4.88, up: true },
  { pair: 'VIX', change: -2.13, up: false },
]

export const marketOverview = [
  { name: 'S&P 500', value: '5,842.10', change: 0.64, up: true, spark: [40, 42, 41, 43, 44, 45, 46] },
  { name: 'NASDAQ 100', value: '20,512.30', change: 0.82, up: true, spark: [30, 32, 31, 34, 35, 36, 38] },
  { name: 'BTC DOM', value: '54.2%', change: 0.31, up: true, spark: [50, 51, 52, 52, 53, 54, 54] },
  { name: 'AI INDEX', value: '1,248.50', change: 4.88, up: true, spark: [20, 22, 25, 28, 30, 32, 35] },
  { name: 'VIX', value: '14.82', change: -2.13, up: false, spark: [18, 17, 16, 15, 15, 14, 14] },
]

export const transactions = [
  { pair: 'BTC/USDT', side: 'BUY', amount: '0.1250 BTC', price: '$64,230', total: '$8,028.75', time: '15:42' },
  { pair: 'ETH/USDT', side: 'BUY', amount: '1.2500 ETH', price: '$3,420', total: '$4,275.00', time: '15:39' },
  { pair: 'SOL/USDT', side: 'SELL', amount: '10.000 SOL', price: '$142', total: '$1,420.00', time: '15:31' },
  { pair: 'AAPL', side: 'BUY', amount: '5.000 AAPL', price: '$213', total: '$1,065.00', time: '15:22' },
  { pair: 'NVDA', side: 'BUY', amount: '2.000 NVDA', price: '$128', total: '$256.00', time: '15:14' },
]

export const systemLogs = [
  '[15:42:10] DATA FEED OK CONNECTED TO MARKETS',
  '[15:42:12] PORTFOLIO SYNC OK ALL SYSTEMS NOMINAL',
  '[15:42:14] RISK ENGINE OK PARAMETERS OPTIMAL',
  '[15:42:16] AI MODULE OK SIGNALS UPDATED',
  '[15:42:20] BACKUP OK LAST RUN 02:13 UTC',
]

export const statusMetrics = [
  { label: 'CPU LOAD', value: 28 },
  { label: 'MEMORY', value: 46 },
  { label: 'NETWORK', value: 72 },
  { label: 'DATA FEED', value: 91 },
]

export const skills = {
  Frontend: ['React', 'TypeScript', 'JavaScript', 'Tailwind', 'Vite'],
  'Backend / Automation': ['Node.js', 'Python', 'APIs', 'Automation'],
  'Data / Finance': ['SQL', 'Analytics', 'Dashboards', 'Risk Metrics'],
  Tools: ['Git', 'GitHub', 'GitHub Actions', 'Cursor', 'VS Code'],
}
