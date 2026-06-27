export default function AnimatedGridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 600px 400px at 20% 30%, rgba(47,140,255,0.12), transparent),
            radial-gradient(ellipse 500px 350px at 80% 70%, rgba(56,189,248,0.08), transparent),
            var(--bg)
          `,
        }}
      />
      <div
        className="absolute inset-0 opacity-20 motion-safe:animate-[grid-drift_20s_linear_infinite]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,0.15) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute h-0.5 w-0.5 rounded-full bg-[var(--cyan)] opacity-40"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
          }}
        />
      ))}
      <div
        className="absolute inset-0 opacity-[0.03] motion-safe:animate-[scanline_8s_linear_infinite]"
        style={{
          background: 'linear-gradient(transparent 50%, rgba(56,189,248,0.5) 50%)',
          backgroundSize: '100% 4px',
        }}
      />
    </div>
  )
}
