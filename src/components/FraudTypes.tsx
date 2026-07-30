import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpenText,
  Lightbulb,
  ListChecks,
  Quote,
  ShieldCheck,
  Sparkles,
  StepForward,
} from 'lucide-react'
import { fraudCategories, type FraudCategory } from '../data/fraudKnowledge'

const toneClass: Record<FraudCategory['tone'], string> = {
  warning: 'text-warning-300',
  danger: 'text-rose-300',
  accent: 'text-accent-300',
  primary: 'text-primary-300',
}

const toneBg: Record<FraudCategory['tone'], string> = {
  warning: 'from-warning-500/25 via-warning-500/10 to-transparent border-warning-400/30',
  danger: 'from-rose-500/25 via-rose-500/10 to-transparent border-rose-400/30',
  accent: 'from-accent-500/25 via-accent-500/10 to-transparent border-accent-400/30',
  primary: 'from-primary-500/25 via-primary-500/10 to-transparent border-primary-400/30',
}

const toneBorder: Record<FraudCategory['tone'], string> = {
  warning: 'border-warning-400/40',
  danger: 'border-rose-400/40',
  accent: 'border-accent-400/40',
  primary: 'border-primary-400/40',
}

const toneChip: Record<FraudCategory['tone'], string> = {
  warning: 'bg-warning-500/12 text-warning-300 border-warning-400/25',
  danger: 'bg-rose-500/12 text-rose-300 border-rose-400/25',
  accent: 'bg-accent-500/12 text-accent-300 border-accent-400/25',
  primary: 'bg-primary-500/12 text-primary-300 border-primary-400/25',
}

export default function FraudTypes() {
  const [active, setActive] = useState(0)
  const cat = fraudCategories[active]

  return (
    <section
      id="fraud-types"
      className="relative py-24 md:py-32 scroll-mt-24"
    >
      <div className="container-page">
        <div className="mb-12 md:mb-16 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent-400" />
            <span className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">
              01 · Knowledge Centre
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            六类澳门大学生高发诈骗
            <br />
            <span className="gradient-text">一次看懂，不再上当。</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            先选一个你最可能碰到的类型 — 它是什么、骗子怎么做、怎么避免、典型话术怎么识别。看完 6 类，你就能识破 90% 的学生诈骗。
          </motion.p>
        </div>

        {/* ===================== 6 个分类 Tab 磁贴 ===================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-14 md:mb-20"
        >
          {fraudCategories.map((f, i) => {
            const selected = active === i
            const Icon = f.icon
            return (
              <motion.button
                key={f.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                onClick={() => setActive(i)}
                className={`group relative rounded-2xl p-4 md:p-5 text-left overflow-hidden border transition-all duration-300 ${
                  selected
                    ? `bg-gradient-to-br ${toneBg[f.tone]} ${toneBorder[f.tone]} -translate-y-1 shadow-[0_24px_60px_-18px_rgba(96,165,250,0.35)]`
                    : 'bg-white/[0.03] border-white/[0.07] hover:bg-white/[0.06] hover:border-white/[0.12] hover:-translate-y-0.5'
                }`}
              >
                <div
                  className={`absolute -top-6 -right-6 w-24 h-24 rounded-full ${
                    selected ? 'opacity-60' : 'opacity-20 group-hover:opacity-40'
                  } transition-opacity`}
                  style={{
                    background: `radial-gradient(circle at 30% 30%, rgba(167,139,250,0.6), transparent 60%)`,
                    filter: 'blur(10px)',
                  }}
                />
                <div className="relative z-10 flex flex-col gap-3">
                  <div
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border ${
                      selected
                        ? `bg-white/[0.06] border-white/[0.12] ${toneClass[f.tone]}`
                        : 'bg-white/[0.04] border-white/[0.08] text-slate-300 group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.9} />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.2em] text-slate-500 mb-1">
                      {f.index}
                    </div>
                    <div className="text-sm md:text-[15px] font-semibold text-white leading-snug">
                      {f.title}
                    </div>
                    <div className="mt-1 text-[11px] md:text-xs text-slate-400 leading-relaxed line-clamp-2">
                      {f.subtitle}
                    </div>
                  </div>
                </div>
              </motion.button>
            )
          })}
        </motion.div>

        {/* ===================== 详情：杂志式卡片 ===================== */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.article
              key={cat.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-[32px] md:rounded-[40px] overflow-hidden glass-card"
            >
              {/* Hero 封面 + 标题 */}
              <div className="grid grid-cols-1 lg:grid-cols-[0.95fr,1.05fr]">
                <div className="relative min-h-[260px] md:min-h-[320px] lg:min-h-[420px] overflow-hidden">
                  <img
                    src={cat.cover}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      ;(e.currentTarget as HTMLImageElement).style.opacity = '0'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/60 to-transparent" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${toneBg[cat.tone]} opacity-80 mix-blend-screen`}
                  />
                  <div className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
                      backgroundSize: '36px 36px',
                    }}
                  />

                  <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span
                        className={`text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full border ${toneChip[cat.tone]}`}
                      >
                        {cat.eyebrow}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.2em] text-slate-300/80">
                        CHAPTER · {cat.index}
                      </span>
                    </div>
                    <div className="font-mono text-[13px] md:text-sm text-slate-300/80 mb-2">
                      Anti-Fraud Guide · UM Students
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1] max-w-md">
                      {cat.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-slate-200/90 leading-relaxed max-w-lg">
                      {cat.subtitle}
                    </p>
                  </div>
                </div>

                {/* 右侧：诈骗是什么 & 总结摘要 */}
                <div className="p-6 md:p-8 lg:p-10 flex flex-col gap-6 border-t lg:border-t-0 lg:border-l border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-8 h-8 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center ${toneClass[cat.tone]}`}>
                        <BookOpenText className="w-4 h-4" strokeWidth={2} />
                      </div>
                      <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
                        Part 01 · 诈骗是什么
                      </span>
                    </div>
                    <p className="text-sm md:text-[15px] text-slate-200 leading-[1.9]">
                      {cat.what}
                    </p>
                  </div>

                  <div className={`rounded-2xl p-5 bg-gradient-to-br ${toneBg[cat.tone]} border`}>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className={`w-5 h-5 ${toneClass[cat.tone]}`} strokeWidth={2} />
                      </div>
                      <div>
                        <div className={`text-[11px] font-bold tracking-[0.2em] uppercase mb-1.5 ${toneClass[cat.tone]}`}>
                          一句话记住
                        </div>
                        <p className="text-sm md:text-[15px] text-white leading-[1.8]">
                          {cat.summary}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {[
                      ['9,284', '2024年澳门报案数（估算）'],
                      ['MOP 38万', '学生单案最高损失'],
                      ['23岁', '受害者平均年龄'],
                    ].map(([n, d]) => (
                      <div
                        key={d}
                        className="rounded-2xl p-3 md:p-4 bg-white/[0.03] border border-white/[0.06]"
                      >
                        <div className={`text-base md:text-lg font-bold ${toneClass[cat.tone]}`}>
                          {n}
                        </div>
                        <div className="text-[10px] md:text-[11px] text-slate-400 leading-snug mt-1">
                          {d}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 四部分正文：骗子怎么做 / 如何避免 / 常见话术 */}
              <div className="p-6 md:p-8 lg:p-10 border-t border-white/[0.06] grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7">
                {/* ===== Part 02 · 骗子通常怎么做？ ===== */}
                <div className={`rounded-3xl p-6 md:p-7 bg-gradient-to-br ${toneBg[cat.tone]} border`}>
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0">
                      <StepForward className={`w-[18px] h-[18px] ${toneClass[cat.tone]}`} strokeWidth={2} />
                    </div>
                    <div>
                      <div className={`text-[11px] font-bold tracking-[0.2em] uppercase ${toneClass[cat.tone]}`}>
                        Part 02
                      </div>
                      <div className="text-base md:text-lg font-bold text-white">
                        骗子通常怎么做？
                      </div>
                    </div>
                  </div>

                  <ol className="space-y-4">
                    {cat.how.map((step, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="shrink-0 relative">
                          <div className={`w-11 h-11 rounded-2xl font-mono font-bold text-sm flex items-center justify-center border ${toneChip[cat.tone]}`}>
                            Step {i + 1}
                          </div>
                          {i < cat.how.length - 1 && (
                            <div className="absolute left-1/2 top-full w-px h-4 bg-gradient-to-b from-current to-transparent -translate-x-1/2 mt-1 opacity-40"
                              style={{ color: 'inherit' }}
                            />
                          )}
                        </div>
                        <p className="pt-1.5 text-sm md:text-[15px] text-slate-100 leading-[1.85]">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* ===== Part 03 · 如何避免 ===== */}
                <div className="rounded-3xl p-6 md:p-7 bg-gradient-to-br from-emerald-500/[0.12] via-white/[0.02] to-primary-500/[0.08] border border-emerald-400/20">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-400/25 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-[18px] h-[18px] text-emerald-300" strokeWidth={2.1} />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-300">
                        Part 03
                      </div>
                      <div className="text-base md:text-lg font-bold text-white">
                        如何避免？
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {cat.avoid.map((a, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 shrink-0 w-6 h-6 rounded-lg bg-emerald-500/15 border border-emerald-400/25 flex items-center justify-center">
                          <ListChecks className="w-3.5 h-3.5 text-emerald-300" strokeWidth={2.2} />
                        </div>
                        <p className="text-sm md:text-[14.5px] text-slate-100/90 leading-[1.8]">
                          {a}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ===== Part 04 · 常见骗子话术（全宽） ===== */}
                <div className="lg:col-span-2 rounded-3xl p-6 md:p-7 md:p-9 bg-black/30 border border-white/[0.07] overflow-hidden">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5 md:mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-warning-500/15 border border-warning-400/25 flex items-center justify-center shrink-0">
                        <Quote className="w-[18px] h-[18px] text-warning-300" strokeWidth={2.1} />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-warning-300">
                          Part 04
                        </div>
                        <div className="text-base md:text-lg font-bold text-white">
                          常见骗子话术，和为什么这是诈骗
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass">
                      <Lightbulb className="w-3.5 h-3.5 text-primary-300" />
                      <span className="text-[11px] md:text-xs font-semibold text-slate-300">
                        看到 / 听到这些话，立刻停下
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                    {cat.lines.map((l, i) => (
                      <div
                        key={i}
                        className="relative rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 md:p-5 overflow-hidden"
                      >
                        <div className="absolute -top-2 -left-1 w-9 h-9 rounded-xl flex items-center justify-center font-mono text-sm font-bold gradient-text bg-white/[0.02] border border-white/[0.08]">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <div className="pt-6 pb-3 mb-3 border-b border-dashed border-white/[0.08]">
                          <div className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-warning-300 mb-2">
                            🎭 骗子说
                          </div>
                          <p className="text-sm md:text-[14.5px] text-white leading-[1.8]">
                            <span className="text-warning-300">“</span>
                            {l.line.replace(/^"/, '').replace(/"$/, '')}
                            <span className="text-warning-300">”</span>
                          </p>
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 mb-2">
                            <ArrowRight className="w-3 h-3 text-primary-300" />
                            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-primary-300">
                              为什么这是诈骗？
                            </span>
                          </div>
                          <p className="text-[12.5px] md:text-xs text-slate-300 leading-[1.8]">
                            {l.analysis}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 底部跳转提示 */}
              <div className="px-6 md:px-8 lg:px-10 pb-8 md:pb-10 border-t border-white/[0.06] bg-gradient-to-b from-transparent to-white/[0.015]">
                <div className="rounded-2xl p-4 md:p-5 glass flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(59,130,246,0.5)]">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm md:text-base font-semibold text-white">
                        觉得这篇有用？<span className="gradient-text"> 看看真实同学是怎么上当的 →</span>
                      </div>
                      <div className="text-[11px] md:text-xs text-slate-400 mt-0.5">
                        下一章：真实案例 · 4 位澳门同学的经历
                      </div>
                    </div>
                  </div>
                  <a
                    href="#cases"
                    className="btn-secondary !px-5 !py-3 text-sm"
                  >
                    阅读真实案例
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
