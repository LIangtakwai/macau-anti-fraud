import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface CardProps {
  icon?: LucideIcon
  iconColor?: 'primary' | 'accent' | 'warning'
  title?: string
  description?: string
  children?: ReactNode
  delay?: number
  className?: string
}

export default function Card({
  icon: Icon,
  iconColor = 'primary',
  title,
  description,
  children,
  delay = 0,
  className = '',
}: CardProps) {
  const colorMap: Record<string, string> = {
    primary: 'from-primary-500/25 to-primary-500/0 text-primary-400',
    accent: 'from-accent-500/25 to-accent-500/0 text-accent-400',
    warning: 'from-warning-500/25 to-warning-500/0 text-warning-400',
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`glass-card gradient-border rounded-3xl p-6 md:p-7 flex flex-col gap-4 overflow-hidden ${className}`}
    >
      {Icon && (
        <div
          className={`relative w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${colorMap[iconColor]}`}
          style={{
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        >
          <Icon className="w-7 h-7" strokeWidth={1.8} />
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
        </div>
      )}

      {(title || description || children) && (
        <div className="flex flex-col gap-3">
          {title && (
            <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-sm md:text-[15px] text-slate-400 leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </div>
      )}
    </motion.article>
  )
}
