import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CircleHelp, Minus, Plus, Search } from 'lucide-react'
import SectionTitle from './SectionTitle'
import { faqList } from '../data/guideAndFaq'

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-24 md:py-32 scroll-mt-24">
      <div className="container-page">
        <div className="mb-14 md:mb-20 max-w-3xl mx-auto">
          <SectionTitle
            icon={CircleHelp}
            eyebrow="04 · FAQ"
            title="大学生最常问的 15 个问题"
            description="先看答案，再做判断。每个回答都尽量简短，帮你在几秒内判断这是不是诈骗。"
            align="center"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-[30px] glass-card overflow-hidden">
            <div className="relative px-5 md:px-8 lg:px-10 py-6 md:py-8 border-b border-white/[0.06]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/[0.06] via-transparent to-accent-500/[0.05]" />
              <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-primary-500/15 border border-primary-400/25 flex items-center justify-center">
                      <Search className="w-5 h-5 text-primary-300" strokeWidth={2.1} />
                    </div>
                    <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-primary-300">
                      Apple Support 风格 · 简洁问答
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    看到类似情况，先来这里对照。
                  </h3>
                  <p className="mt-2 text-sm md:text-[14.5px] text-slate-400 leading-[1.8] max-w-2xl">
                    大多数答案都只有一句话原则：不点链接、不先转账、不离开平台、不把验证码给别人。
                  </p>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded-full glass text-[11px] md:text-xs font-semibold text-slate-300 w-fit">
                  <span className="font-mono text-primary-300">15</span>
                  常见问题
                </div>
              </div>
            </div>

            <div className="divide-y divide-white/[0.06]">
              {faqList.map((item, index) => {
                const open = openFaq === index
                return (
                  <motion.div
                    key={item.q}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.025,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group"
                  >
                    <button
                      onClick={() => setOpenFaq(open ? null : index)}
                      className="w-full text-left px-5 md:px-8 lg:px-10 py-5 md:py-6 hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="flex items-start gap-4 md:gap-5">
                        <div className="shrink-0 mt-0.5 w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center font-mono text-[11px] font-bold text-primary-300">
                          {String(index + 1).padStart(2, '0')}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <h4 className="text-sm md:text-[16px] font-semibold text-white leading-[1.7] pr-2">
                              {item.q}
                            </h4>

                            <div
                              className={`shrink-0 w-9 h-9 rounded-xl border flex items-center justify-center transition-all ${
                                open
                                  ? 'bg-primary-500/15 border-primary-400/25'
                                  : 'bg-white/[0.03] border-white/[0.08] group-hover:bg-white/[0.05]'
                              }`}
                            >
                              {open ? (
                                <Minus
                                  className="w-4 h-4 text-primary-300"
                                  strokeWidth={2.2}
                                />
                              ) : (
                                <Plus
                                  className="w-4 h-4 text-slate-300"
                                  strokeWidth={2.2}
                                />
                              )}
                            </div>
                          </div>

                          <AnimatePresence initial={false}>
                            {open && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.32,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                                className="overflow-hidden"
                              >
                                <div className="pt-4 md:pt-5">
                                  <div className="rounded-2xl px-4 md:px-5 py-4 bg-gradient-to-br from-primary-500/[0.08] via-white/[0.02] to-accent-500/[0.06] border border-primary-400/15">
                                    <div className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-primary-300 mb-2">
                                      Answer
                                    </div>
                                    <p className="text-sm md:text-[14px] text-slate-200 leading-[1.8]">
                                      {item.a}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </button>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
