import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BadgeAlert,
  CheckCircle2,
  ChevronRight,
  MessageCircleMore,
  ShieldCheck,
  ShieldQuestion,
  TriangleAlert,
  XCircle,
} from 'lucide-react'
import SectionTitle from './SectionTitle'

type Choice = '可信' | '可疑'

interface ChatMessage {
  from: 'other' | 'student'
  name: string
  text: string
}

interface Scenario {
  id: string
  label: string
  title: string
  channel: string
  answer: Choice
  messages: ChatMessage[]
  analysis: string[]
  prevention: string[]
}

const scenarios: Scenario[] = [
  {
    id: 'job-chat',
    label: '场景 1',
    title: '兼职招聘聊天',
    channel: 'WhatsApp · 兼职群私聊',
    answer: '可疑',
    messages: [
      {
        from: 'other',
        name: '兼职导师',
        text: '同学你好，我们是澳门商户合作兼职，日结 MOP 300-800，今天就能开始。',
      },
      {
        from: 'student',
        name: '你',
        text: '需要做什么？',
      },
      {
        from: 'other',
        name: '兼职导师',
        text: '很简单，帮商家做数据任务。先完成一单体验任务，垫付 MOP 100，5 分钟返你 130。',
      },
      {
        from: 'other',
        name: '兼职导师',
        text: '名额不多，今天不做就要等下周了。',
      },
    ],
    analysis: [
      '先用“日结高收益”吸引学生，再用小额返利建立信任。',
      '要求你先垫钱做任务，是刷单诈骗最典型的信号。',
      '“名额不多”“今天截止”是在制造压力，不给你思考时间。',
    ],
    prevention: [
      '兼职只看学校、劳工事务局或正规招聘平台，不信陌生私聊。',
      '凡是先交钱、先垫钱、先充值的兼职，直接停止联系。',
      '把聊天记录保存下来，不要因为想试试看就先做第一单。',
    ],
  },
  {
    id: 'secondhand',
    label: '场景 2',
    title: '二手交易',
    channel: '微信 · 二手群转私聊',
    answer: '可疑',
    messages: [
      {
        from: 'other',
        name: '卖家',
        text: '这台 iPhone 15 我急出，只要 MOP 2800，今天能直接转给你。',
      },
      {
        from: 'student',
        name: '你',
        text: '可以走平台吗？',
      },
      {
        from: 'other',
        name: '卖家',
        text: '平台太麻烦了，而且手续费高。你先转 500 定金，我帮你留着，晚上见面再付尾款。',
      },
      {
        from: 'other',
        name: '卖家',
        text: '刚刚已经有别人问了，你不定就没了。',
      },
    ],
    analysis: [
      '价格明显低于正常市场价，本身就很异常。',
      '卖家主动要求离开平台、先交定金，是常见骗钱套路。',
      '“别人也在问”是在制造稀缺感，催你快速转账。',
    ],
    prevention: [
      '热门电子产品、门票、球鞋等交易尽量走担保平台。',
      '没见到实物、没验机、没确认身份之前，不先转任何钱。',
      '价格低得离谱时，先怀疑是不是骗局，而不是先怀疑自己运气好。',
    ],
  },
  {
    id: 'refund',
    label: '场景 3',
    title: '假冒客服退款',
    channel: '短信 + 电话',
    answer: '可疑',
    messages: [
      {
        from: 'other',
        name: '平台客服',
        text: '您好，您上周购买的商品因仓库异常，现为您办理三倍退款。',
      },
      {
        from: 'other',
        name: '平台客服',
        text: '请立刻点击短信里的链接填写银行卡信息，不操作将视为自动放弃赔付。',
      },
      {
        from: 'student',
        name: '你',
        text: '为什么还要填银行卡和验证码？',
      },
      {
        from: 'other',
        name: '平台客服',
        text: '这是系统验证流程，您现在不配合，后续就无法补办。',
      },
    ],
    analysis: [
      '所谓“三倍退款”常用来吸引注意，让人以为自己占便宜。',
      '退款本不需要你提供验证码，要求验证码就是要盗刷或登录你的账户。',
      '“立刻处理”“过期作废”是典型施压话术。',
    ],
    prevention: [
      '退款问题只在你下单的平台官方 App 内处理，不点短信链接。',
      '验证码、支付密码、银行卡完整信息都不能通过电话或聊天提供。',
      '如果不确定，主动拨打官方客服电话，不回拨陌生来电。',
    ],
  },
  {
    id: 'school-notice',
    label: '场景 4',
    title: '学校通知诈骗',
    channel: '邮箱 + 假登录页',
    answer: '可疑',
    messages: [
      {
        from: 'other',
        name: 'UM Admin Notice',
        text: 'Your mailbox will be suspended within 24 hours. Please verify immediately.',
      },
      {
        from: 'other',
        name: 'UM Admin Notice',
        text: '点击此链接登录学校系统，否则将影响课程通知与选课。',
      },
      {
        from: 'student',
        name: '你',
        text: '为什么这么急？',
      },
      {
        from: 'other',
        name: 'UM Admin Notice',
        text: '系统已多次提醒，若继续忽略，将永久停用账号。',
      },
    ],
    analysis: [
      '用学校名义发送“24 小时内处理”的通知，很容易利用学生对账号停用的焦虑。',
      '真正的学校系统不会要求你通过陌生邮件链接重新登录。',
      '“永久停用”“影响选课”是在放大后果，让你来不及核实。',
    ],
    prevention: [
      '学校账号问题只通过官网、书签或学校正式系统查询。',
      '先看发件域名，再看链接域名，任何陌生域名都不要登录。',
      '拿不准时直接联系 UM ICTO，不要先输入账号密码。',
    ],
  },
]

export default function LearningGame() {
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<Choice | null>(null)

  const current = scenarios[index]
  const isCorrect = picked !== null && picked === current.answer

  return (
    <section
      id="challenge"
      className="relative py-24 md:py-32 scroll-mt-24"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <div className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_55%)]" />
      </div>

      <div className="container-page relative">
        <div className="mb-14 md:mb-20 max-w-3xl mx-auto">
          <SectionTitle
            icon={ShieldQuestion}
            eyebrow="05 · Interactive Learning"
            title="你能识破骗局吗？"
            description="不是拼手速，也不是刷分游戏。你只需要像真实聊天一样读一遍，再判断它是可信还是可疑。"
            align="center"
          />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-[30px] overflow-hidden glass-card">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-6 md:px-8 py-5 border-b border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(59,130,246,0.55)]">
                  <MessageCircleMore
                    className="w-5 h-5 text-white"
                    strokeWidth={2.1}
                  />
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-widest uppercase text-slate-400">
                    Scenario Simulation · 聊天判断练习
                  </div>
                  <div className="text-sm md:text-base font-semibold text-white">
                    {current.label} / 共 {scenarios.length} 个场景
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                {scenarios.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 w-9 rounded-full transition-all ${
                      i === index
                        ? 'bg-gradient-to-r from-primary-400 to-accent-400'
                        : i < index
                          ? 'bg-emerald-400/70'
                          : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr,1.05fr] gap-0">
              <div className="p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full bg-primary-500/12 text-primary-300 border border-primary-400/20">
                    {current.channel}
                  </span>
                  <span className="text-sm md:text-base font-semibold text-white">
                    {current.title}
                  </span>
                </div>

                <div className="rounded-[28px] bg-[#09101d]/85 border border-white/[0.06] p-4 md:p-5">
                  <div className="flex items-center justify-between mb-4 px-1">
                    <div className="text-xs font-medium text-slate-400">
                      模拟聊天记录
                    </div>
                    <div className="text-[11px] text-slate-500">仅用于学习判断</div>
                  </div>

                  <div className="space-y-3.5">
                    {current.messages.map((msg, i) => (
                      <motion.div
                        key={`${current.id}-${i}`}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.35 }}
                        className={`flex ${msg.from === 'student' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[88%] rounded-2xl px-4 py-3 border ${
                            msg.from === 'student'
                              ? 'bg-primary-500/14 border-primary-400/20 text-slate-100'
                              : 'bg-white/[0.04] border-white/[0.08] text-slate-200'
                          }`}
                        >
                          <div className="text-[11px] font-semibold mb-1 text-slate-400">
                            {msg.name}
                          </div>
                          <p className="text-sm md:text-[14px] leading-[1.8]">
                            {msg.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-10">
                <div className="mb-6">
                  <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-slate-400 mb-2">
                    你的判断
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    这是诈骗吗？
                  </h3>
                  <p className="mt-2 text-sm md:text-[14.5px] text-slate-400 leading-[1.8]">
                    先做一个简单判断，不用追求满分。关键是学会看出哪些地方不对劲。
                  </p>
                </div>

                <div className="space-y-3">
                  {(['可信', '可疑'] as Choice[]).map((choice, i) => {
                    const selected = picked === choice
                    const correct = picked !== null && choice === current.answer
                    const wrong = picked !== null && selected && choice !== current.answer

                    return (
                      <button
                        key={choice}
                        disabled={picked !== null}
                        onClick={() => setPicked(choice)}
                        className={`w-full text-left rounded-2xl p-4 md:p-5 border transition-all ${
                          picked === null
                            ? 'bg-white/[0.03] border-white/[0.07] hover:bg-white/[0.05] hover:border-primary-400/25'
                            : correct
                              ? 'bg-emerald-500/[0.12] border-emerald-400/35'
                              : wrong
                                ? 'bg-rose-500/[0.12] border-rose-400/35'
                                : 'bg-white/[0.02] border-white/[0.06] opacity-70'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-mono text-sm font-bold ${
                              correct
                                ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30'
                                : wrong
                                  ? 'bg-rose-400/20 text-rose-300 border border-rose-400/30'
                                  : 'bg-white/[0.04] text-slate-300 border border-white/[0.08]'
                            }`}
                          >
                            {String.fromCharCode(65 + i)}
                          </div>
                          <div className="flex-1">
                            <div className="text-base font-semibold text-white">
                              {choice}
                            </div>
                            <div className="text-xs md:text-[13px] text-slate-400 mt-0.5">
                              {choice === '可信'
                                ? '看起来像正常通知或正常交易'
                                : '出现了明显风险信号，需要停下来核实'}
                            </div>
                          </div>
                          {correct && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                          )}
                          {wrong && (
                            <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>

                <AnimatePresence initial={false}>
                  {picked !== null && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 space-y-4">
                        <div
                          className={`rounded-2xl p-5 md:p-6 border ${
                            isCorrect
                              ? 'bg-gradient-to-br from-emerald-500/[0.12] via-transparent to-primary-500/[0.06] border-emerald-400/20'
                              : 'bg-gradient-to-br from-rose-500/[0.12] via-transparent to-warning-500/[0.06] border-rose-400/20'
                          }`}
                        >
                          <div className="flex items-start gap-3.5">
                            {isCorrect ? (
                              <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                            ) : (
                              <BadgeAlert className="w-6 h-6 text-rose-400 shrink-0 mt-0.5" />
                            )}
                            <div>
                              <div
                                className={`text-[11px] font-bold tracking-[0.2em] uppercase mb-2 ${
                                  isCorrect ? 'text-emerald-300' : 'text-rose-300'
                                }`}
                              >
                                正确答案：{current.answer}
                              </div>
                              <p className="text-sm md:text-[14.5px] text-slate-200 leading-[1.85]">
                                {isCorrect
                                  ? '判断正确。重点不是“会不会答题”，而是你已经能看出这段对话里的危险信号。'
                                  : '这段对话应该判断为「可疑」。现实里只要你迟疑一下、先停住不操作，就已经很有帮助。'}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.07]">
                            <div className="flex items-center gap-2 mb-3">
                              <TriangleAlert className="w-4 h-4 text-warning-300" />
                              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-warning-300">
                                诈骗套路解析
                              </div>
                            </div>
                            <ul className="space-y-2.5">
                              {current.analysis.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2.5 text-sm text-slate-300 leading-[1.8]"
                                >
                                  <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-warning-300 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="rounded-2xl p-5 bg-gradient-to-br from-emerald-500/[0.08] via-transparent to-primary-500/[0.05] border border-emerald-400/15">
                            <div className="flex items-center gap-2 mb-3">
                              <ShieldCheck className="w-4 h-4 text-emerald-300" />
                              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-300">
                                防范方法
                              </div>
                            </div>
                            <ul className="space-y-2.5">
                              {current.prevention.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2.5 text-sm text-slate-200 leading-[1.8]"
                                >
                                  <span className="mt-[8px] w-1.5 h-1.5 rounded-full bg-emerald-300 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-7 flex items-center justify-between gap-4 flex-wrap">
                  <button
                    onClick={() => {
                      setPicked(null)
                      setIndex((v) => Math.max(0, v - 1))
                    }}
                    disabled={index === 0}
                    className="btn-secondary !px-5 !py-3 text-sm disabled:opacity-40 disabled:pointer-events-none"
                  >
                    上一个场景
                  </button>

                  <div className="text-[11px] md:text-xs text-slate-500">
                    重点不是得分，而是学会先判断“哪里不对劲”
                  </div>

                  <button
                    onClick={() => {
                      setPicked(null)
                      if (index < scenarios.length - 1) {
                        setIndex((v) => v + 1)
                      } else {
                        setIndex(0)
                      }
                    }}
                    className="btn-primary !px-5 !py-3 text-sm"
                  >
                    {index < scenarios.length - 1 ? '下一个场景' : '重新开始'}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
