import type { LucideIcon } from 'lucide-react'
import {
  MailWarning,
  Briefcase,
  Gavel,
  Landmark,
  CreditCard,
  UserCheck,
} from 'lucide-react'

export type FraudColor = 'primary' | 'accent' | 'warning'

export interface FraudType {
  id: string
  icon: LucideIcon
  color: FraudColor
  title: string
  summary: string
  signals: string[]
  losses: string
}

export const fraudTypes: FraudType[] = [
  {
    id: 'phishing',
    icon: MailWarning,
    color: 'warning',
    title: '钓鱼邮件与短信',
    summary:
      '伪装成澳门大学、DSAT、银行或快递公司，通过邮件 / SMS / WhatsApp 发送"验证账户、领取包裹、更新资料"链接，诱导输入账号密码或验证码。',
    signals: [
      '发件邮箱不是官方 @um.edu.mo / 银行域名',
      '链接域名拼写奇怪（um-mo.org, bcm-check.com 等）',
      '要求立即点击，否则冻结/停权',
    ],
    losses: '账号被盗、银行卡被盗刷、个人信息出售给黑产。',
  },
  {
    id: 'fake-job',
    icon: Briefcase,
    color: 'accent',
    title: '虚假兼职与刷单',
    summary:
      '在 Instagram / 小红书 / WhatsApp 群发布"在家办公、日结 MOP 800+"，先给小额返利建立信任，再以"任务连单、充值解锁"为由要求大额转账。',
    signals: [
      '不面试、无合同，先下载陌生 App',
      '承诺"稳赚不赔、刷多少返多少"',
      '要求先转一笔"押金 / 保证金 / 税款"',
    ],
    losses: '本金被吞、越陷越深，单案损失从 5 千到 30 万不等。',
  },
  {
    id: 'impersonate',
    icon: Gavel,
    color: 'warning',
    title: '冒充公检法',
    summary:
      '假冒澳门司法警察局、澳门海关或内地公安来电，谎称"涉嫌洗钱 / 包裹有违禁品 / 电话将停机"，要求保密配合，把钱打入所谓"安全账户"核验。',
    signals: [
      '来电显示为 +86 / 未知号码，口音为内地普通话',
      '不许告诉家人、不许挂断，要求加 Telegram 继续',
      '给你看"通缉令 / 逮捕证"图片',
    ],
    losses: '存款被一次性卷走，学生积蓄 / 学费一夜清零。',
  },
  {
    id: 'scholarship',
    icon: Landmark,
    color: 'primary',
    title: '假冒奖学金与资助',
    summary:
      '声称来自澳门基金会、教青局、UM FSA，"恭喜你获得 MOP 2 万奖学金 / 助学金"，要求提供银行卡号 + 手机验证码"确认账户"或先交"税费 / 手续费"。',
    signals: [
      '你没有申请过却"中奖"了',
      '需要先交钱才能拿钱',
      '要求短信验证码 / 网银登录信息',
    ],
    losses: '生活费、学费被骗走，甚至背上贷款。',
  },
  {
    id: 'campus-loan',
    icon: CreditCard,
    color: 'accent',
    title: '校园贷与注销征信',
    summary:
      '"你之前注册过校园贷，不注销将影响征信 / 毕业"，诱导你下载视频会议共享屏幕，指导你去银行、支付宝、微信借款平台借出，再把钱打入对方账户"清零记录"。',
    signals: [
      '能准确说出你的学校 / 姓名，说是"教育部 / 征信中心"',
      '要求下载瞩目 / Zoom，开屏幕共享',
      '指导你在各大平台"先借出来冲正"',
    ],
    losses: '背负数万到数十万贷款，征信真正受损。',
  },
  {
    id: 'social',
    icon: UserCheck,
    color: 'primary',
    title: '社交账号冒充求助',
    summary:
      '克隆同学、老师、社团好友的 WhatsApp / 微信 / IG 头像昵称，"我微信限额 / 家人住院 / 急需 MOP，能不能先代付 / 转账到我朋友账户，明天还你"。',
    signals: [
      '对方说"换新号了"，号码不是你存的那个',
      '不肯打电话 / 不肯视频 / 只用文字',
      '钱要转到"第三人 / 内地朋友"账户',
    ],
    losses: '单次几千到几万，熟人信任被利用最难防范。',
  },
]
