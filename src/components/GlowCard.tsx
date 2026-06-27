import { motion } from 'framer-motion'
import clsx from 'clsx'
import type { ReactNode } from 'react'

interface Props {
  title?: string
  className?: string
  children: ReactNode
  delay?: number
}

export default function GlowCard({ title, className, children, delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={clsx(
        'rounded-lg border p-4 backdrop-blur-sm transition-shadow hover:shadow-[0_0_24px_rgba(47,140,255,0.2)]',
        className,
      )}
      style={{
        background: 'var(--panel)',
        borderColor: 'var(--border)',
      }}
    >
      {title && (
        <h2 className="mb-3 font-mono text-xs tracking-wider text-[var(--cyan)]">{title}</h2>
      )}
      {children}
    </motion.div>
  )
}
