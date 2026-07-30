import { motion } from 'framer-motion'
import { Shield, Phone, TriangleAlert } from 'lucide-react'

const columns = [
  {
    title: '平台导航',
    links: [
      { label: '首页', href: '#home' },
      { label: '诈骗类型', href: '#fraud-types' },
      { label: '真实案例', href: '#cases' },
      { label: '防骗指南', href: '#guide' },
      { label: '常见问题', href: '#faq' },
      { label: '互动学习', href: '#challenge' },
    ],
  },
  {
    title: '快速提醒',
    items: [
      '不要点击陌生链接',
      '不要先转账再核实',
      '不要把验证码给别人',
      '熟人借钱也要二次确认',
    ],
  },
  {
    title: '紧急求助',
    contacts: [
      { icon: TriangleAlert, label: '澳门司警局', text: '993' },
      { icon: Phone, label: '警察总局', text: '2833 9999' },
      { icon: Phone, label: 'UM ICTO', text: '8822 4095' },
    ],
  },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-24 md:mt-32 border-t border-white/5 overflow-hidden"
    >
      <div
        className="absolute inset-x-0 -top-px h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(59,130,246,0.6), rgba(139,92,246,0.6), transparent)',
        }}
      />
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[360px] rounded-full opacity-25 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.14), transparent 60%)',
        }}
      />

      <div className="container-page relative py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr,0.9fr,0.9fr] gap-10 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5"
          >
            <a href="#home" className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_60%)]" />
                <Shield className="relative w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] tracking-[0.22em] text-slate-400 font-semibold uppercase">
                  MACAU STUDENT
                </span>
                <span className="text-lg font-bold gradient-text">
                  Anti-Fraud Hub
                </span>
              </div>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              面向澳门大学生的反诈骗教育宣传平台。
              用更容易理解的方式，帮助学生认识骗局、学会判断、知道遇事该怎么做。
            </p>
            <div className="rounded-2xl p-4 bg-white/[0.03] border border-white/[0.07] max-w-sm">
              <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-primary-300 mb-2">
                浏览建议
              </div>
              <p className="text-sm text-slate-300 leading-[1.8]">
                第一次访问时，建议按「诈骗类型 → 真实案例 → 防骗指南 → 互动学习」的顺序阅读。
              </p>
            </div>
          </motion.div>

          {columns.map((col, idx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.08 * (idx + 1) }}
              className="flex flex-col gap-4"
            >
              <h4 className="text-sm font-semibold text-white tracking-wide uppercase">
                {col.title}
              </h4>
              <div className="h-px w-10 rounded-full bg-gradient-to-r from-primary-400 to-accent-500" />
              <ul className="flex flex-col gap-3">
                {col.links &&
                  col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-2 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-primary-400 transition-colors" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                {col.items &&
                  col.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-slate-400 leading-relaxed inline-flex items-start gap-2"
                    >
                      <span className="mt-[9px] w-1 h-1 rounded-full bg-slate-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                {col.contacts &&
                  col.contacts.map((c) => (
                    <li key={c.text} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-white/[0.03] border border-white/5 text-primary-400 flex-shrink-0">
                        <c.icon className="w-4 h-4" />
                      </div>
                      <div className="pt-1">
                        <div className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                          {c.label}
                        </div>
                        <span className="text-sm text-slate-300">{c.text}</span>
                      </div>
                    </li>
                  ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 md:mt-20 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs md:text-sm text-slate-500">
            © {new Date().getFullYear()} MACAU STUDENT ANTI-FRAUD HUB · University of Macau.
          </p>
          <p className="text-xs md:text-sm text-slate-500">
            让更多同学在遇到骗局前，先学会识别它。
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
