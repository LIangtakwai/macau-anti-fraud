import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Archive,
  ArrowRight,
  CalendarDays,
  ChevronDown,
  CircleAlert,
  FileText,
  Handshake,
  HeartHandshake,
  MapPin,
  Minus,
  Plus,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  User,
  Wallet,
} from 'lucide-react'
import {
  caseCategories,
  caseStudiesV2,
  type CaseCategoryId,
  type CaseStudyV2,
} from '../data/caseLibrary'

const toneChip: Record<CaseCategory['tone'], string> = {
  warning:
    'bg-warning-500/12 text-warning-300 border-warning-400/25',
  danger: 'bg-rose-500/12 text-rose-300 border-rose-400/25',
  accent:
    'bg-accent-500/12 text-accent-300 border-accent-400/25',
  primary:
    'bg-primary-500/12 text-primary-300 border-primary-400/25',
}

const toneGrad: Record<CaseCategory['tone'], string> = {
  warning:
    'from-warning-500/22 via-warning-500/10 to-transparent border-warning-400/30',
  danger: 'from-rose-500/22 via-rose-500/10 to-transparent border-rose-400/30',
  accent:
    'from-accent-500/22 via-accent-500/10 to-transparent border-accent-400/30',
  primary:
    'from-primary-500/22 via-primary-500/10 to-transparent border-primary-400/30',
}

export default function CaseLibrary() {
  const [filter, setFilter] = useState<CaseCategoryId | 'all'>('all')
  const [expandedId, setExpandedId] = useState<string | null>(
    caseStudiesV2[0]?.id ?? null
  )

  const filtered = useMemo(
    () =>
      filter === 'all'
        ? caseStudiesV2
        : caseStudiesV2.filter((c) => c.category === filter),
    [filter]
  )

  const getCategory = (id: CaseCategoryId) =>
    caseCategories.find((c) => c.id === id)!

  return (
    <section
      id="cases"
      className="relative py-24 md:py-32 scroll-mt-24 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-70"
        aria-hidden
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.12),transparent_55%)]" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.10),transparent_55%)]" />
      </div>

      <div className="container-page relative">
        {/* ============== 标题 ============== */}
        <div className="mb-12 md:mb-16 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-5"
          >
            <FileText className="w-3.5 h-3.5 text-accent-400" />
            <span className="text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">
              02 · Case Library
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            真实案例档案
            <br />
            <span className="gradient-text">
              这种事情，可能就发生在你身边。
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto"
          >
            8 个改编自澳门大学生真实经历的档案 — 受害者不是"笨"，只是在特定时刻
            选择了相信。读完每一个，你就多一次免疫力。
          </motion.p>
        </div>

        {/* ============== 分类筛选 ============== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14 md:mb-18"
        >
          <motion.button
            variants={{
              hidden: { opacity: 0, y: 16 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45 },
              },
            }}
            onClick={() => setFilter('all')}
            className={`relative px-4 md:px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold border transition-all duration-300 ${
              filter === 'all'
                ? 'bg-white/[0.08] text-white border-white/[0.2] shadow-[0_20px_40px_-16px_rgba(129,140,248,0.45)]'
                : 'bg-white/[0.025] text-slate-300 border-white/[0.08] hover:bg-white/[0.05] hover:text-white'
            }`}
          >
            <span className="flex items-center gap-2">
              <Archive className="w-[16px] h-[16px]" />
              全部档案
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded-md bg-white/[0.08] border border-white/[0.08] text-slate-400 ml-1">
                {String(caseStudiesV2.length).padStart(2, '0')}
              </span>
            </span>
            {filter === 'all' && (
              <motion.span
                layoutId="case-filter-pill"
                className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary-500/25 via-accent-500/20 to-transparent"
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              />
            )}
          </motion.button>

          {caseCategories.map((cat) => {
            const selected = filter === cat.id
            const count = caseStudiesV2.filter((c) => c.category === cat.id).length
            const Icon = cat.icon
            return (
              <motion.button
                key={cat.id}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.45 },
                  },
                }}
                onClick={() => setFilter(cat.id)}
                className={`relative px-4 md:px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold border transition-all duration-300 ${
                  selected
                    ? 'text-white border-white/[0.18] shadow-[0_20px_40px_-16px_rgba(129,140,248,0.45)]'
                    : 'bg-white/[0.025] text-slate-300 border-white/[0.08] hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Icon className="w-[16px] h-[16px]" strokeWidth={1.9} />
                  {cat.label}
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded-md bg-white/[0.08] border border-white/[0.08] text-slate-400 ml-0.5">
                    {String(count).padStart(2, '0')}
                  </span>
                </span>
                {selected && (
                  <motion.span
                    layoutId="case-filter-pill"
                    className={`absolute inset-0 -z-10 rounded-full bg-gradient-to-r ${toneGrad[cat.tone]}`}
                    transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                  />
                )}
              </motion.button>
            )
          })}
        </motion.div>

        {/* ============== 案例档案列表 ============== */}
        <div className="space-y-4 md:space-y-6 max-w-5xl mx-auto">
          <AnimatePresence initial={false} mode="popLayout">
            {filtered.map((c, i) => {
              const category = getCategory(c.category)
              const CatIcon = category.icon
              const expanded = expandedId === c.id
              return (
                <motion.article
                  key={c.id}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8, scale: 0.985 }}
                  transition={{
                    duration: 0.42,
                    delay: i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative rounded-[26px] md:rounded-[32px] glass-card overflow-hidden border border-white/[0.07] group"
                >
                  {/* ---------- 档案头部：封面 + meta + 摘要 ---------- */}
                  <button
                    onClick={() =>
                      setExpandedId((prev) => (prev === c.id ? null : c.id))
                    }
                    className="w-full text-left"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-[280px,1fr] gap-0">
                      {/* 封面图 */}
                      <div className="relative h-[190px] md:h-auto overflow-hidden shrink-0">
                        <img
                          src={c.cover}
                          alt={c.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.06]"
                          onError={(e) => {
                            ;(e.currentTarget as HTMLImageElement).style.opacity = '0'
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/60 to-transparent" />
                        <div className="absolute inset-0 opacity-40 mix-blend-overlay"
                          style={{
                            backgroundImage:
                              'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
                            backgroundSize: '22px 22px',
                          }}
                        />
                        <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between">
                          <div className="flex items-center justify-between gap-2">
                            <span
                              className={`text-[10px] md:text-[11px] font-bold tracking-[0.22em] uppercase px-2.5 py-1 rounded-full border ${toneChip[category.tone]}`}
                            >
                              {category.label}
                            </span>
                            <span className="font-mono text-[11px] tracking-[0.2em] text-slate-200/80 bg-black/40 backdrop-blur px-2 py-1 rounded-md border border-white/[0.08]">
                              {c.code}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-[10px] md:text-[11px] text-slate-200/85">
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-[13px] h-[13px] text-primary-300" />
                              {c.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <CalendarDays className="w-[13px] h-[13px] text-accent-300" />
                              {c.date}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* 文字摘要 */}
                      <div className="p-5 md:p-7 flex flex-col justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <div className={`w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center shrink-0 ${toneChip[category.tone].replace('bg-', 'bg-').replace('text-', 'text-').split(' ').filter(c=>!c.includes('border'))[0] ?? 'text-primary-300'}`}>
                              <CatIcon className="w-[18px] h-[18px]" strokeWidth={2} />
                            </div>
                            <div className="flex items-center gap-3 text-[11px] md:text-xs text-slate-400">
                              <span className="flex items-center gap-1.5">
                                <User className="w-[13px] h-[13px]" />
                                {c.victim.gender}同学 · {c.victim.year}岁
                              </span>
                              <span className="hidden md:inline text-slate-600">·</span>
                              <span className="hidden md:inline">
                                {c.victim.major}
                              </span>
                            </div>
                          </div>

                          <h3 className="text-lg md:text-[22px] font-bold text-white leading-[1.35] mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-white group-hover:to-accent-200 group-hover:bg-clip-text transition-all duration-500">
                            {c.title}
                          </h3>

                          <p className="text-sm md:text-[13.5px] text-slate-400 leading-[1.8] line-clamp-2">
                            {c.whyBelieve}
                          </p>
                        </div>

                        <div className="flex items-center justify-between gap-4 pt-2 border-t border-dashed border-white/[0.06]">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-xs md:text-sm">
                              <Wallet className="w-[15px] h-[15px] text-rose-300" />
                              <span className="font-mono text-rose-200 font-bold text-sm md:text-[15px] tracking-wide">
                                {c.result.loss}
                              </span>
                            </div>
                            <div className="hidden sm:flex items-center gap-2 text-[11px] md:text-xs text-slate-400">
                              <Handshake className="w-[13px] h-[13px] text-warning-300" />
                              {c.victim.situation}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-[11px] md:text-xs font-semibold tracking-wider text-slate-300 group-hover:text-white transition-colors">
                              {expanded ? '收起档案' : '阅读档案'}
                            </span>
                            <motion.div
                              animate={{ rotate: expanded ? 180 : 0 }}
                              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                              className="w-8 h-8 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors"
                            >
                              {expanded ? (
                                <Minus className="w-3.5 h-3.5 text-white" />
                              ) : (
                                <Plus className="w-3.5 h-3.5 text-white" />
                              )}
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* ---------- 展开详情：阅读动画 ---------- */}
                  <AnimatePresence>
                    {expanded && (
                      <motion.div
                        key={`${c.id}-body`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.55,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 md:px-7 pb-7 md:pb-9 pt-1 md:pt-2 border-t border-white/[0.06] bg-gradient-to-b from-transparent to-white/[0.015]">
                          {/* 进度感的阅读步骤条 */}
                          <div className="mb-6 md:mb-8 py-4 px-4 md:px-5 rounded-2xl bg-black/35 border border-white/[0.07]">
                            <div className="flex flex-wrap items-center gap-3 md:gap-6 text-[11px] md:text-xs font-semibold tracking-[0.2em] uppercase text-slate-400">
                              {[
                                { n: '01', t: '为什么相信？', i: HeartHandshake },
                                { n: '02', t: '诈骗过程', i: TriangleAlert },
                                { n: '03', t: '最终结果', i: Wallet },
                                { n: '04', t: '防骗提醒', i: ShieldCheck },
                              ].map((s, idx) => {
                                const StepIcon = s.i
                                return (
                                  <div key={s.n} className="flex items-center gap-2">
                                    <motion.div
                                      initial={{ x: -20, opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      transition={{ delay: 0.1 + idx * 0.08, duration: 0.5 }}
                                      className="w-7 h-7 rounded-lg border border-white/[0.08] flex items-center justify-center font-mono text-[10px] bg-white/[0.04] text-slate-200"
                                    >
                                      {s.n}
                                    </motion.div>
                                    <motion.span
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ delay: 0.14 + idx * 0.08, duration: 0.45 }}
                                      className="flex items-center gap-1.5"
                                    >
                                      <StepIcon className="w-[13px] h-[13px] text-primary-300" />
                                      {s.t}
                                    </motion.span>
                                    {idx < 3 && (
                                      <span className="hidden md:block w-10 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
                                    )}
                                  </div>
                                )
                              })}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr,1fr] gap-5 md:gap-6">
                            {/* 左：为什么相信 + 诈骗过程 3 步 + 最终结果 */}
                            <div className="space-y-5 md:space-y-6">
                              {/* 为什么相信 */}
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.22, duration: 0.45 }}
                                className={`rounded-2xl p-5 md:p-6 bg-gradient-to-br ${toneGrad[category.tone]} border`}
                              >
                                <CaseSectionHeader
                                  icon={HeartHandshake}
                                  num="01"
                                  title="受害场景：学生为什么相信？"
                                  tone={category.tone}
                                />
                                <p className="mt-4 text-sm md:text-[14.5px] text-slate-100/95 leading-[1.95]">
                                  {c.whyBelieve}
                                </p>
                              </motion.div>

                              {/* 诈骗过程 3 步 */}
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.32, duration: 0.45 }}
                                className="rounded-2xl p-5 md:p-6 bg-white/[0.03] border border-white/[0.07]"
                              >
                                <CaseSectionHeader
                                  icon={TriangleAlert}
                                  num="02"
                                  title="诈骗过程：骗子的三步套路"
                                  tone="danger"
                                />
                                <ol className="mt-5 space-y-5">
                                  {(
                                    [
                                      [
                                        '骗子如何接触学生',
                                        c.process.contact,
                                      ],
                                      ['如何建立信任', c.process.trust],
                                      ['如何诱导转账', c.process.induce],
                                    ] as const
                                  ).map(([label, text], idx) => (
                                    <motion.li
                                      key={label}
                                      initial={{ opacity: 0, x: -14 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        delay: 0.38 + idx * 0.12,
                                        duration: 0.4,
                                      }}
                                      className="relative pl-14 md:pl-16"
                                    >
                                      <div className="absolute left-0 top-0 w-11 h-11 rounded-2xl font-mono font-bold text-xs flex items-center justify-center bg-gradient-to-br from-rose-500/20 via-warning-500/20 to-transparent border border-rose-400/25 text-rose-200 shadow-[0_0_0_4px_rgba(244,63,94,0.05)]">
                                        Step{' '}
                                        <span className="text-base text-white ml-0.5">
                                          {idx + 1}
                                        </span>
                                      </div>
                                      {idx < 2 && (
                                        <span className="absolute left-[21px] top-full w-px h-5 bg-gradient-to-b from-rose-400/50 to-transparent" />
                                      )}
                                      <div className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-warning-300 mb-1.5">
                                        {label}
                                      </div>
                                      <p className="text-sm md:text-[14px] text-slate-200 leading-[1.9]">
                                        {text}
                                      </p>
                                    </motion.li>
                                  ))}
                                </ol>
                              </motion.div>

                              {/* 最终结果 */}
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.55, duration: 0.45 }}
                                className="rounded-2xl p-5 md:p-6 bg-black/40 border border-rose-400/20"
                              >
                                <CaseSectionHeader
                                  icon={Wallet}
                                  num="03"
                                  title="最终结果：损失金额 & 影响"
                                  tone="danger"
                                />
                                <div className="mt-4 grid grid-cols-[auto,1fr] gap-5 items-start">
                                  <div className="shrink-0 w-[126px] md:w-[146px] p-4 rounded-2xl bg-gradient-to-br from-rose-500/30 via-rose-500/10 to-transparent border border-rose-400/25 flex flex-col justify-center">
                                    <div className="text-[10px] font-bold tracking-[0.22em] uppercase text-rose-300 mb-1.5">
                                      Loss Amount
                                    </div>
                                    <div className="font-mono text-xl md:text-2xl font-bold text-white leading-tight tracking-wide">
                                      {c.result.loss}
                                    </div>
                                  </div>
                                  <ul className="space-y-2.5">
                                    {c.result.impact.map((m, i) => (
                                      <motion.li
                                        key={m}
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                          delay: 0.62 + i * 0.1,
                                          duration: 0.4,
                                        }}
                                        className="flex items-start gap-2.5 text-sm md:text-[14px] text-slate-200/95 leading-[1.8]"
                                      >
                                        <CircleAlert className="mt-[3px] w-[14px] h-[14px] text-rose-300 shrink-0" />
                                        {m}
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            </div>

                            {/* 右：防骗提醒 · 4 条 */}
                            <div className="space-y-5 md:space-y-6">
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.28, duration: 0.45 }}
                                className="relative h-full rounded-2xl p-5 md:p-6 bg-gradient-to-br from-emerald-500/[0.13] via-white/[0.02] to-primary-500/[0.1] border border-emerald-400/20 overflow-hidden"
                              >
                                <div
                                  className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-50 blur-3xl"
                                  style={{
                                    background:
                                      'radial-gradient(circle at 30% 30%, rgba(52,211,153,0.45), transparent 60%)',
                                  }}
                                />

                                <CaseSectionHeader
                                  icon={ShieldCheck}
                                  num="04"
                                  title="防骗提醒：如果是你，怎么办？"
                                  tone="primary"
                                />

                                <div className="relative mt-5">
                                  <div className="relative rounded-2xl p-4 md:p-5 bg-black/40 border border-emerald-400/15 mb-5">
                                    <div className="flex items-start gap-3">
                                      <div className="mt-0.5 shrink-0 w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-400/25 flex items-center justify-center">
                                        <Sparkles className="w-[17px] h-[17px] text-emerald-300" strokeWidth={2} />
                                      </div>
                                      <div>
                                        <div className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-300 mb-1.5">
                                          一句话记住
                                        </div>
                                        <p className="text-[14px] md:text-[15px] font-medium text-white leading-[1.9]">
                                          {c.tip}
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  <ul className="space-y-3.5">
                                    {c.tips.map((t, i) => (
                                      <motion.li
                                        key={t}
                                        initial={{ opacity: 0, x: 12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                          delay: 0.42 + i * 0.1,
                                          duration: 0.4,
                                        }}
                                        className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.035] border border-white/[0.07]"
                                      >
                                        <span className="shrink-0 mt-0.5 w-6 h-6 rounded-lg bg-emerald-500/15 border border-emerald-400/20 flex items-center justify-center font-mono text-[11px] font-bold text-emerald-300">
                                          {i + 1}
                                        </span>
                                        <p className="text-[13px] md:text-sm text-slate-200 leading-[1.85]">
                                          {t}
                                        </p>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </div>

                                {/* 卡片底部 CTA */}
                                <motion.div
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.9, duration: 0.4 }}
                                  className="mt-6 pt-5 border-t border-dashed border-emerald-400/15 flex items-center justify-between gap-3"
                                >
                                  <div className="text-[11px] md:text-xs text-slate-400">
                                    记下来这 4 条，
                                    <span className="text-emerald-200 font-semibold">
                                      {' '}
                                      下次遇到立刻想起
                                    </span>
                                  </div>
                                  <a
                                    href="#guide"
                                    onClick={(e) => {
                                      e.preventDefault()
                                      const el = document.getElementById('guide')
                                      if (el)
                                        el.scrollIntoView({
                                          behavior: 'smooth',
                                          block: 'start',
                                        })
                                    }}
                                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[11px] md:text-xs font-semibold bg-emerald-500/15 border border-emerald-400/25 text-emerald-200 hover:bg-emerald-500/25 transition"
                                  >
                                    打开完整防骗指南
                                    <ArrowRight className="w-[13px] h-[13px]" />
                                  </a>
                                </motion.div>
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              )
            })}
          </AnimatePresence>

          {/* 空态 */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl p-10 text-center glass"
            >
              <ChevronDown className="w-10 h-10 text-slate-500 mx-auto mb-3" />
              <p className="text-slate-400">这个分类暂时没有案例，切换其他分类看看 👀</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

function CaseSectionHeader({
  icon: Icon,
  num,
  title,
  tone,
}: {
  icon: any
  num: string
  title: string
  tone: CaseCategory['tone']
}) {
  const chip = toneChip[tone]
  return (
    <div className="flex items-center gap-3">
      <div
        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${chip}`}
      >
        <Icon className="w-[18px] h-[18px]" strokeWidth={2.1} />
      </div>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500">
          {num}
        </span>
        <h4 className="text-sm md:text-[15px] font-bold text-white tracking-tight">
          {title}
        </h4>
      </div>
    </div>
  )
}
