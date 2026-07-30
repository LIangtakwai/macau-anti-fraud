import { useMemo } from 'react'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  ArrowRight,
  BookOpen,
  Sparkles,
  Shield,
  TriangleAlert,
  GraduationCap,
} from 'lucide-react'

export default function Hero() {
  const quickFacts = useMemo(
    () => [
      {
        icon: TriangleAlert,
        t: '诈骗类型',
        d: '6 类高发风险',
        c: 'text-warning-300',
      },
      {
        icon: BookOpen,
        t: '真实案例',
        d: '8 个场景档案',
        c: 'text-primary-300',
      },
      {
        icon: GraduationCap,
        t: '互动学习',
        d: '4 段聊天判断',
        c: 'text-accent-300',
      },
    ],
    [],
  )

  return (
    <section
      id="home"
      className="relative min-h-[92svh] w-full overflow-hidden pt-28 md:pt-32 pb-16 md:pb-20 flex items-center"
    >
      <div className="absolute inset-0 bg-hero-gradient" />
      <div
        className="absolute top-[-10%] left-[10%] w-[560px] h-[560px] rounded-full opacity-35 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.18), rgba(59,130,246,0) 60%)',
        }}
      />
      <div
        className="absolute bottom-[-18%] right-[-10%] w-[620px] h-[620px] rounded-full opacity-25 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(139,92,246,0.18), rgba(139,92,246,0) 60%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.9) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.9) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse at center, black 20%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 20%, transparent 78%)',
        }}
      />

      <div className="container-page relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-7 flex flex-col gap-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full glass"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-primary-300" />
              <span className="text-xs md:text-sm font-medium text-slate-200 tracking-wide">
                澳门大学生反诈骗学习平台
              </span>
              <Sparkles className="w-3.5 h-3.5 text-accent-400" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <span className="block text-[40px] md:text-[62px] 2xl:text-[72px] font-bold tracking-tight leading-[1.04] text-white">
                让澳门大学生
                <span className="gradient-text"> 看懂骗局，学会应对。</span>
              </span>
              <span className="block mt-5 text-base md:text-[19px] text-slate-300 leading-[1.8] max-w-2xl">
                这是一个面向澳门大学生的反诈骗教育宣传网站。
                你会在这里快速了解常见诈骗、真实案例、处理方法和互动判断练习。
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-5 pt-2"
            >
              <motion.a
                href="#challenge"
                className="btn-primary text-sm md:text-base min-h-[52px]"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.985 }}
              >
                <ShieldCheck className="w-5 h-5" strokeWidth={2.2} />
                开始学习
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#fraud-types"
                className="btn-secondary text-sm md:text-base min-h-[52px]"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.985 }}
              >
                <BookOpen className="w-5 h-5 text-primary-300" strokeWidth={2} />
                浏览内容结构
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.24 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 pt-1 max-w-2xl"
            >
              {quickFacts.map(({ icon: Icon, t, d, c }) => (
                <div
                  key={t}
                  className="rounded-2xl p-4 md:p-5 bg-white/[0.03] border border-white/[0.07]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      <Icon className={`w-[18px] h-[18px] ${c}`} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-sm md:text-[15px] font-semibold text-white">
                        {t}
                      </div>
                      <div className="text-[11px] md:text-xs text-slate-400 mt-0.5">
                        {d}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <div className="relative glass-card rounded-[32px] p-6 md:p-8 overflow-hidden">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(59,130,246,0.55)]">
                    <Shield className="w-5 h-5 text-white" strokeWidth={2.3} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-400">
                      For UM Students
                    </div>
                    <div className="text-base md:text-lg font-bold text-white">
                      你会在这里学到什么？
                    </div>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {[
                    {
                      title: '先认识常见诈骗',
                      desc: '从兼职、二手交易、学校通知到假冒客服，先知道哪些最常见。',
                    },
                    {
                      title: '再看真实案例',
                      desc: '通过真实改编的学生经历，理解骗子是如何一步步建立信任的。',
                    },
                    {
                      title: '最后学会正确处理',
                      desc: '遇到可疑情况时，知道什么时候停止、保存证据、联系谁。',
                    },
                  ].map((s, i) => (
                    <motion.div
                      key={s.title}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.55,
                        delay: 0.2 + i * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="rounded-2xl p-4 md:p-5 bg-white/[0.03] border border-white/[0.07]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center font-mono text-sm font-bold text-primary-300">
                          0{i + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm md:text-[15px] font-semibold text-white">
                            {s.title}
                          </h3>
                          <p className="mt-1.5 text-xs md:text-sm text-slate-400 leading-relaxed">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-7 pt-5 border-t border-white/[0.06]">
                  <p className="text-sm md:text-[14px] text-slate-300 leading-[1.8]">
                    适合第一次接触反诈骗内容的同学浏览。
                    <span className="text-white font-medium"> 先建立判断力，</span>
                    再学会真正有用的处理方法。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
