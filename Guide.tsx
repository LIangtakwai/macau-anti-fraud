import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
  BellOff,
  BookCheck,
  CopyCheck,
  FileSearch,
  HandCoins,
  Link2Off,
  LockKeyhole,
  PhoneCall,
  ScanSearch,
  ShieldCheck,
  ShieldEllipsis,
  ShieldQuestion,
  Siren,
  WalletCards,
} from 'lucide-react'
import SectionTitle from './SectionTitle'

interface ActionStep {
  step: string
  title: string
  description: string
  icon: LucideIcon
  tone: 'danger' | 'warning' | 'primary'
}

interface HabitItem {
  title: string
  description: string
  icon: LucideIcon
}

interface RuleItem {
  id: string
  title: string
  description: string
}

const emergencySteps: ActionStep[] = [
  {
    step: '01',
    title: '立即停止联系',
    description:
      '先挂断电话、退出聊天、停止回复。骗子最擅长连续施压，你越继续聊，越容易被牵着走。',
    icon: BellOff,
    tone: 'danger',
  },
  {
    step: '02',
    title: '保存聊天记录',
    description:
      '马上截图保存微信、WhatsApp、Telegram、短信、邮件、收款账户、二维码和语音记录。',
    icon: CopyCheck,
    tone: 'warning',
  },
  {
    step: '03',
    title: '不要继续转账',
    description:
      '无论对方说是保证金、解冻费、税费还是安全验证费，都不要再付。后续每一笔都只是在扩大损失。',
    icon: HandCoins,
    tone: 'danger',
  },
  {
    step: '04',
    title: '联系相关机构',
    description:
      '先打 993 或 2833 9999 报案，再联系银行冻结账户；如果牵涉学校邮箱或账号，立刻联系 UM ICTO 8822 4095。',
    icon: PhoneCall,
    tone: 'primary',
  },
]

const habits: HabitItem[] = [
  {
    title: '不要点击陌生链接',
    description:
      '邮件、短信、WhatsApp 里发来的验证链接和二维码，先默认可疑。学校系统和银行页面只从官网或书签进入。',
    icon: Link2Off,
  },
  {
    title: '不要泄露个人资料',
    description:
      '身份证、学生证、验证码、银行卡照片、地址、课程表和宿舍信息，都是骗子建立信任和冒充身份的素材。',
    icon: LockKeyhole,
  },
  {
    title: '不要相信高收益兼职',
    description:
      '凡是写着轻松、日结、高回报、先做一单试试的兼职，都要提高警惕。先转钱再赚钱的模式一定有问题。',
    icon: ScanSearch,
  },
  {
    title: '不要私下交易',
    description:
      '二手、门票、租房、游戏账号、代购都尽量走担保平台或当面验货。离开平台私转，风险会直接翻倍。',
    icon: WalletCards,
  },
]

const rules: RuleItem[] = [
  {
    id: '01',
    title: '先停 3 秒，再决定',
    description: '只要对方催你马上处理、马上转账、马上点开链接，就先停下来。',
  },
  {
    id: '02',
    title: '不认识的人，不给验证码',
    description: '验证码就是钥匙。客服、警察、老师、银行都不会找你要。',
  },
  {
    id: '03',
    title: '任何“安全账户”都是假的',
    description: '政府、警方、银行不会要求你把钱转到所谓安全账户做验证。',
  },
  {
    id: '04',
    title: '不见面，不先付',
    description: '租房、二手、门票、代购，只要没见到人和货，就不要先转账。',
  },
  {
    id: '05',
    title: '陌生来电先挂，再回拨官方号码',
    description: '不要在同一通电话里被带节奏，挂断后自己查官网号码再打回去。',
  },
  {
    id: '06',
    title: '奖学金、兼职、退款不先交钱',
    description: '先收保证金、行政费、手续费、税费的“好事”，本质都一样。',
  },
  {
    id: '07',
    title: '熟人借钱也要二次确认',
    description: '同学、室友、学长学姐换号借钱，必须打电话或视频确认。',
  },
  {
    id: '08',
    title: '个人资料只给正规系统',
    description: '简历、证件照、银行卡照片、学生证，不要随便发给私聊联系人。',
  },
  {
    id: '09',
    title: '遇事先告诉一个人',
    description: '被骗不丢人。告诉室友、家人或辅导员，往往比你一个人判断更安全。',
  },
  {
    id: '10',
    title: '收藏求助电话',
    description: '把 993、2833 9999、银行客服、UM ICTO 8822 4095 存进通讯录。',
  },
]

const toneStyles = {
  danger:
    'from-rose-500/22 via-rose-500/10 to-transparent border-rose-400/25 text-rose-300',
  warning:
    'from-warning-500/22 via-warning-500/10 to-transparent border-warning-400/25 text-warning-300',
  primary:
    'from-primary-500/22 via-primary-500/10 to-transparent border-primary-400/25 text-primary-300',
} as const

export default function Guide() {
  return (
    <section id="guide" className="relative py-24 md:py-32 scroll-mt-24">
      <div className="container-page">
        <div className="mb-14 md:mb-20 max-w-3xl mx-auto">
          <SectionTitle
            icon={ShieldCheck}
            eyebrow="03 · Guide"
            title="防骗指南"
            description="不是口号，而是一套学生真的能马上用上的做法。先处理眼前风险，再养成日常习惯，最后记住 10 条安全守则。"
            align="center"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 md:mb-18 rounded-[30px] glass-card overflow-hidden"
        >
          <div className="relative p-6 md:p-8 lg:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.08] via-transparent to-primary-500/[0.06]" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/15 border border-rose-400/25 flex items-center justify-center">
                  <Siren className="w-5 h-5 text-rose-300" strokeWidth={2.1} />
                </div>
                <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-rose-300">
                  Part 01 · 遇到诈骗怎么办？
                </span>
              </div>

              <div className="max-w-2xl mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                  先止损，再处理。
                </h3>
                <p className="mt-3 text-sm md:text-[15px] text-slate-300 leading-[1.85]">
                  如果你已经开始怀疑对方是骗子，不要继续解释、不要试探、不要和他争论。你现在最重要的任务只有一个：把损失停住。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
                {emergencySteps.map((item, i) => {
                  const Icon = item.icon
                  const tone = toneStyles[item.tone]
                  return (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{
                        duration: 0.55,
                        delay: i * 0.06,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`rounded-3xl p-5 md:p-6 border bg-gradient-to-br ${tone}`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-5">
                        <span className="font-mono text-[11px] tracking-[0.2em] text-slate-400">
                          STEP {item.step}
                        </span>
                        <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                          <Icon className="w-5 h-5" strokeWidth={2.1} />
                        </div>
                      </div>
                      <h4 className="text-base md:text-lg font-bold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm md:text-[14px] text-slate-200 leading-[1.8]">
                        {item.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-[0.92fr,1.08fr] gap-6 md:gap-7">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[30px] glass-card p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-primary-500/15 border border-primary-400/25 flex items-center justify-center">
                <BookCheck className="w-5 h-5 text-primary-300" strokeWidth={2.1} />
              </div>
              <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-primary-300">
                Part 02 · 日常防骗习惯
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
              每天做到这 4 件小事，
              <br />
              风险会小很多。
            </h3>
            <p className="mt-3 text-sm md:text-[14.5px] text-slate-400 leading-[1.85]">
              大多数诈骗不是因为你不会技术，而是因为你在某一个瞬间没有多想一步。日常习惯，比临时补救更重要。
            </p>

            <div className="mt-7 space-y-3.5">
              {habits.map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="rounded-2xl p-4 md:p-5 bg-white/[0.03] border border-white/[0.07]"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary-300" strokeWidth={2} />
                      </div>
                      <div>
                        <h4 className="text-sm md:text-base font-semibold text-white mb-1.5">
                          {item.title}
                        </h4>
                        <p className="text-xs md:text-[13.5px] text-slate-400 leading-[1.8]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[30px] glass-card p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-accent-500/15 border border-accent-400/25 flex items-center justify-center">
                <ShieldQuestion className="w-5 h-5 text-accent-300" strokeWidth={2.1} />
              </div>
              <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-accent-300">
                Part 03 · 大学生安全守则
              </span>
            </div>

            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                  10 条简单规则
                </h3>
                <p className="mt-2 text-sm md:text-[14.5px] text-slate-400 leading-[1.8] max-w-xl">
                  不需要全部背下来。你只要记住这些判断标准，大部分骗局在前两步就会露馅。
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full glass text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-300">
                <ShieldEllipsis className="w-4 h-4 text-accent-300" />
                Quick Rules
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {rules.map((rule, i) => (
                <motion.div
                  key={rule.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{
                    duration: 0.48,
                    delay: i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="rounded-2xl p-4 md:p-5 bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.07] group hover:border-accent-400/20 hover:bg-white/[0.05] transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-accent-500/15 border border-accent-400/25 flex items-center justify-center shrink-0 font-mono text-xs font-bold text-accent-300">
                      {rule.id}
                    </div>
                    <div>
                      <h4 className="text-sm md:text-[15px] font-semibold text-white mb-1.5">
                        {rule.title}
                      </h4>
                      <p className="text-xs md:text-[13px] text-slate-400 leading-[1.75]">
                        {rule.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 md:mt-18 rounded-[28px] overflow-hidden glass-card"
        >
          <div className="relative p-6 md:p-8 lg:p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-warning-500/[0.08] via-transparent to-accent-500/[0.06]" />
            <div className="relative grid grid-cols-1 md:grid-cols-[1.1fr,0.9fr] gap-6 md:gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-warning-500/15 border border-warning-400/25 flex items-center justify-center">
                    <FileSearch className="w-5 h-5 text-warning-300" strokeWidth={2.1} />
                  </div>
                  <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-warning-300">
                    Quick Reminder
                  </span>
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-white leading-tight">
                  真正的防骗，不是记住所有骗局，
                  <br />
                  而是记住判断方法。
                </h3>
                <p className="mt-3 text-sm md:text-[15px] text-slate-300 leading-[1.85] max-w-2xl">
                  只要有人让你着急、让你保密、让你先付钱、让你离开平台、让你点击陌生链接，你就应该立刻提高警惕。
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  '着急处理',
                  '要求保密',
                  '先交钱',
                  '点链接',
                ].map((tag, i) => (
                  <div
                    key={tag}
                    className="rounded-2xl p-4 bg-white/[0.04] border border-white/[0.07]"
                  >
                    <div className="font-mono text-[10px] tracking-[0.2em] text-slate-500 mb-2">
                      0{i + 1}
                    </div>
                    <div className="text-sm md:text-base font-semibold text-white">
                      {tag}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
