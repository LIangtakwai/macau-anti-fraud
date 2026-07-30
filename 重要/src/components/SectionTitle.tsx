import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface SectionTitleProps {
  eyebrow?: string
  title: string
  description?: string
  icon?: LucideIcon
  align?: 'left' | 'center'
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  icon: Icon,
  align = 'center',
}: SectionTitleProps) {
  return (
    <div
      className={`flex flex-col gap-5 ${
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs md:text-sm font-medium ${
          align === 'center' ? 'justify-center' : ''
        }`}
        style={{ color: '#93C5FD' }}
      >
        {Icon && <Icon className="w-3.5 h-3.5 text-primary-400" />}
        <span className="tracking-wider uppercase">
          {eyebrow || 'Macau Student Anti-Fraud'}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="text-3xl md:text-5xl 2xl:text-[56px] font-bold leading-[1.15] tracking-tight max-w-3xl"
      >
        <span className="text-white">{title}</span>
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
        className={`h-[2px] w-40 rounded-full origin-left ${
          align === 'center' ? 'mx-auto origin-center' : ''
        }`}
        style={{
          background:
            'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 50%, rgba(139,92,246,0) 100%)',
        }}
      />
    </div>
  )
}
