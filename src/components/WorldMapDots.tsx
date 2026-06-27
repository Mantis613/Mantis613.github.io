const clusters = [
  { cx: 180, cy: 140, label: 'North America', r: 6 },
  { cx: 420, cy: 120, label: 'Europe', r: 5 },
  { cx: 680, cy: 160, label: 'Asia', r: 6 },
]

const dots: [number, number][] = [
  [120,100],[140,110],[160,95],[180,105],[200,115],[220,100],[250,110],[280,120],[300,105],
  [150,130],[170,140],[190,125],[210,135],[230,145],[260,130],[290,140],
  [380,90],[400,100],[420,85],[440,95],[460,105],[480,90],[500,100],[520,110],
  [390,120],[410,130],[430,115],[450,125],[470,135],[490,120],
  [600,130],[620,140],[640,125],[660,135],[680,145],[700,130],[720,140],[740,150],
  [610,160],[630,170],[650,155],[670,165],[690,175],[710,160],
  [350,200],[370,210],[390,195],[500,220],[520,230],[540,215],
]

export default function WorldMapDots() {
  return (
    <svg viewBox="0 0 900 420" className="w-full" aria-label="World map visualization">
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={2} fill="var(--cyan)" opacity={0.4 + (i % 3) * 0.15} />
      ))}
      {clusters.map((c) => (
        <g key={c.label}>
          <circle cx={c.cx} cy={c.cy} r={c.r * 4} fill="none" stroke="var(--blue)" strokeWidth={1} opacity={0.3}
            className="motion-safe:animate-[pulse-ring_2s_ease-out_infinite]" />
          <circle cx={c.cx} cy={c.cy} r={c.r} fill="var(--blue)" opacity={0.8}
            style={{ filter: 'drop-shadow(0 0 6px var(--blue))' }} />
          <text x={c.cx} y={c.cy + 22} textAnchor="middle" fill="var(--muted)" fontSize={10} fontFamily="monospace">
            {c.label}
          </text>
        </g>
      ))}
      <path d="M 180 140 Q 300 80 420 120" fill="none" stroke="var(--border-strong)" strokeWidth={1} opacity={0.5} strokeDasharray="4 4" />
      <path d="M 420 120 Q 550 100 680 160" fill="none" stroke="var(--border-strong)" strokeWidth={1} opacity={0.5} strokeDasharray="4 4" />
      <path d="M 180 140 Q 400 200 680 160" fill="none" stroke="var(--border)" strokeWidth={1} opacity={0.3} strokeDasharray="4 4" />
    </svg>
  )
}
