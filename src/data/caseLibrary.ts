import type { LucideIcon } from 'lucide-react'
import {
  Briefcase,
  ShoppingBag,
  Home,
  Package,
  GraduationCap,
  HeartHandshake,
} from 'lucide-react'

export type CaseCategoryId =
  | 'job'
  | 'secondhand'
  | 'rental'
  | 'shopping'
  | 'school'
  | 'dating'

export interface CaseCategory {
  id: CaseCategoryId
  icon: LucideIcon
  label: string
  tone: 'warning' | 'danger' | 'accent' | 'primary'
}

export const caseCategories: CaseCategory[] = [
  { id: 'job', icon: Briefcase, label: '兼职诈骗', tone: 'accent' },
  { id: 'secondhand', icon: ShoppingBag, label: '二手交易诈骗', tone: 'primary' },
  { id: 'rental', icon: Home, label: '租房诈骗', tone: 'warning' },
  { id: 'shopping', icon: Package, label: '网购诈骗', tone: 'primary' },
  { id: 'school', icon: GraduationCap, label: '冒充学校人员', tone: 'warning' },
  { id: 'dating', icon: HeartHandshake, label: '网络交友诈骗', tone: 'danger' },
]

export interface CaseStudyV2 {
  id: string
  code: string
  title: string
  category: CaseCategoryId
  location: string
  date: string
  victim: {
    gender: '男' | '女'
    year: number
    major: string
    situation: string
  }
  cover: string
  whyBelieve: string
  process: {
    contact: string
    trust: string
    induce: string
  }
  result: {
    loss: string
    impact: string[]
  }
  tip: string
  tips: string[]
}

export const caseStudiesV2: CaseStudyV2[] = [
  {
    id: 'case-job-01',
    code: 'CASE · 01',
    title: '兼职刷单骗局：先赚 400，四天被骗 2.3 万澳门币',
    category: 'job',
    location: '澳门氹仔 · 某大学宿舍',
    date: '2026 年 3 月',
    victim: {
      gender: '女',
      year: 20,
      major: '工商管理学士 · 大二',
      situation: '想攒暑假去台湾旅行的钱',
    },
    cover:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=75&auto=format&fit=crop',
    whyBelieve:
      '第 1、2 单真的在 10 分钟内返现了，到账截图发在 Telegram 群里 200 个人都晒，以为是真的官方兼职平台。',
    process: {
      contact:
        '小红书私信："帮澳门酒店刷 Google 点评，1 单 MOP 60，日结，不限时。"附带 Telegram 群二维码。',
      trust:
        '进群有 200+ 人，管理员发"入职登记"，第 1 单 100 返 130，第 2 单 300 返 380 — 全部到账她的微信钱包。',
      induce:
        '第 4 单开始管理员说"接下来是三连任务套餐"，必须按顺序完成 8000 / 12000 / 3000 三笔充完才解锁结算。每充完一笔对方就说"还差一步"，到第三笔时管理员又说"IP 异常，要再充 5000 验证金"，她才意识到不对。',
    },
    result: {
      loss: 'MOP 23,000',
      impact: [
        '妈妈给的半年生活费没了 2/3',
        '不敢立刻告诉父母，吃了一个月的宿舍白面包 + 饭堂 25 元特价餐',
        '报案后 4 个月仍无进展',
      ],
    },
    tip: '如果对方发的"任务 App"不是从 App Store / Google Play 正规下载页来的，就是假平台。里面的"余额数字"只是一个字符串，和你真钱没任何关系。',
    tips: [
      '"先转 100 返 130"是经典的钓鱼返利，后面一定会要求更大的"连单"才能提现。',
      '刷单 / 刷评 / 刷注册量本身就是欺诈商业行为，干了也违法，不要碰。',
      '正规校园兼职只在 SAO 官网 / 劳工事务局发布，绝不在小红书 Telegram 私发招募。',
    ],
  },
  {
    id: 'case-secondhand-01',
    code: 'CASE · 02',
    title: 'FB 二手群：买周杰伦演唱会门票，转账后对方失联',
    category: 'secondhand',
    location: '澳门 · 某大学 FACEBOOK 二手交易群',
    date: '2026 年 4 月',
    victim: {
      gender: '男',
      year: 22,
      major: '土木工程 · 大三',
      situation: '和女朋友约好去看嘉年华世界巡迴演唱会',
    },
    cover:
      'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&q=75&auto=format&fit=crop',
    whyBelieve:
      '卖家在群里发了票据截图、身份证照片（马赛克过）、还有 2 条群友评价"靠谱，上次我也买过"——看上去和普通同学一模一样。',
    process: {
      contact:
        '群里有人发"临时出差，转两张嘉年华内地场门票 1380 票面，2200 澳门币一对不议价，急出"。他抢到过 5 次秒杀抢不到票，立刻私信。',
      trust:
        '卖家发来大麦网订单截图、座位号、自己手持身份证的照片（名字打码），还有两段对话截图是"之前和同校同学的成功交易"。他加了卖家微信，看朋友圈都是正常生活照，完全没怀疑。',
      induce:
        '卖家说"走闲鱼麻烦，也不敢点收货，我也怕被骗 —— 你先付一半定金 1100，我立刻快递寄出，你收到票再付尾款。"他微信转了 1100。等了 3 天没快递，再问已经被拉黑，查手机号是内地虚拟号。',
    },
    result: {
      loss: 'MOP 1,100',
      impact: [
        '最后只能再高价从别的黄牛手上买，整个行程成本翻倍',
        '自己也是工程系学生，觉得"居然还能被这种 P 图骗了"，郁闷了两周',
      ],
    },
    tip: '热门演唱会门票 / 球鞋 / iPhone 只要低于市场价 30% 以上，基本都是假的。真的便宜货轮不到你一个陌生人。',
    tips: [
      '二手交易一定走官方担保渠道，票要当面取票验真 / 官方电子票转赠成功再确认。',
      '"手持身份证照片"最容易伪造，骗子只需要找一张网上公开的证件照 P 就行。',
      '群里的"好评截图"可以是小号自导自演，不要信任何文字证明，要实物+担保。',
    ],
  },
  {
    id: 'case-rental-01',
    code: 'CASE · 03',
    title: '珠海横琴租房：被"房东太太"骗走 12,000 澳门币',
    category: 'rental',
    location: '横琴口岸 · 微信租房群',
    date: '2026 年 1 月',
    victim: {
      gender: '女',
      year: 23,
      major: '法学院 · 研一',
      situation: '学校宿舍申请没抽中，急着找横琴合租',
    },
    cover:
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=75&auto=format&fit=crop',
    whyBelieve:
      '房子装修非常好看 + 价格 2800 人民币一个月比市场价便宜 1500，房东说自己是澳门人急着出租给学生，还发了房产证照片，以为真的捡到便宜。',
    process: {
      contact:
        '微信租房群里有人发"横琴口岸步行 3 分钟，一房一厅整租 2800 人民币，只限学生，押二付一"，附大量精装实拍图。',
      trust:
        '微信视频通话看房（其实是之前录好的房屋视频，房东在"电梯信号不好"，所以直接播放），发来房产证照片、身份证照片，还和她讨价还价了一天，很像真实房东。',
      induce:
        '"今天还有另一个 UM 的女生想看，你先转 5000 订金锁房，明天来签合同就抵消。"她想着 5000 不多就转了，第二天对方说"我老公又说 2800 太亏，要 3800，你补个差价就算了"，她又转 7000。到约定签合同那天，房东再也没上线。',
    },
    result: {
      loss: 'MOP 12,000（约 RMB 11,200）',
      impact: [
        '没租到房，回学校找 SAO 申请临时宿舍，最后睡了一周同学沙发',
        '读法律的她事后才想到"没看房产证原件 + 私人转账"根本没有法律效力',
      ],
    },
    tip: '任何"视频看房但永远见不到真人 + 必须先转账锁房"都是租房诈骗 99%。',
    tips: [
      '租房必须 3 件事同时发生：①当面见房东 ②核对房产证原件身份证原件 ③当面签正规合同。',
      '"押二付一"是中国标准，但是一定要在见面签合同当天才给钱。',
      '横琴/珠海的房源如果比同地段低超过 30%，一定是假房源引流骗定金。',
    ],
  },
  {
    id: 'case-shopping-01',
    code: 'CASE · 04',
    title: 'Instagram"澳门代购"：买全新 MacBook Pro，钱打了货没发',
    category: 'shopping',
    location: 'Instagram · 小红书推荐帖引流',
    date: '2026 年 2 月',
    victim: {
      gender: '男',
      year: 21,
      major: '计算机科学 · 大二',
      situation: '需要一台 M3 Pro 16 寸做项目，官网 24,999 太贵',
    },
    cover:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=75&auto=format&fit=crop',
    whyBelieve:
      'IG 账号有 1.2 万 followers，每天更新大量"发货实拍视频"（澳门顺丰门店寄件的真实画面），还晒了不少学生的 Thank You 贴纸。',
    process: {
      contact:
        '小红书刷到一篇"澳门留学代购避雷｜推荐这几家靠谱的"，下面前 3 条评论推荐了这个 IG 账号"价格是教育优惠再 9 折，我帮室友买过两台"。',
      trust:
        '加了 IG，对方发来报价"16寸 M3 Pro 512G 教育优惠 + 渠道返点 = MOP 18,800（官网 24,999）"。看朋友圈确实每天在澳门门店拍视频，还有学生和他的聊天转账截图好评。',
      induce:
        '"现在有学生团购，今天下单明天去银河 Apple Store 拿机，今晚之前转账才能锁价。"他通过中银澳门手机银行转了 18,800。第二天卖家说"今天店里没货，要等两天"，然后说"海关扣了，要你补 3000 保证金才能取货"，他补了 3000 之后对方就失联了。',
    },
    result: {
      loss: 'MOP 21,800',
      impact: [
        '最后还是向父母坦白，官网买了一台，前后多花了 4 万多',
        '账号本身是盗来的 IG，粉丝数是刷的，真实店主根本不知道自己被克隆',
      ],
    },
    tip: '"代购价 < Apple 官方教育优惠价 95%"基本不可能。Apple 教育优惠已经是对学生的最低价，再低对方自己就要亏本。',
    tips: [
      'Mac/iPad/iPhone 建议直接从 Apple Store 澳门银河 / 苹果官网教育优惠走。',
      '任何代购要求"先转账再拿货"=有风险。要么面交当场验机付钱，要么走闲鱼等担保。',
      '小红书推荐帖 + 评论号全是新号 0 发帖 = 典型的托儿矩阵。',
    ],
  },
  {
    id: 'case-school-01',
    code: 'CASE · 05',
    title: '"UM ICTO 邮件"骗研究生登录假 SSO 页面，第二天微信银行卡被刷 1.8 万',
    category: 'school',
    location: '某大学宿舍 · 深夜复习',
    date: '2025 年 11 月',
    victim: {
      gender: '男',
      year: 24,
      major: '电机及电脑工程 · 研二',
      situation: '论文 Deadline 前，每天都熬夜在实验室',
    },
    cover:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=75&auto=format&fit=crop',
    whyBelieve:
      '邮件做得和学校 ICTO 一模一样：UM 紫色 Logo、完全一样的字体、同样的官方模板排版、日期是半夜 11:43 ICTO 常发邮件的时段。最关键的是发件域名只差一个字母：icto@um-mo.org，他没仔细看。',
    process: {
      contact:
        '深夜 11:43 收到一封邮件，寄件人写着"UM Information and Communication Technology Office (ICTO)"，标题：URGENT: 你的学生邮箱将于 24H 内停用，请立即点击链接验证。',
      trust:
        '邮件内引用了他真实的 UM Student ID（学校数据库有泄露过，骗子能买到）。Logo / 格式 / 行文都是官方语气，和他上个月刚收到的 ICTO 邮件几乎一样。',
      induce:
        '点进去是一个几乎 1:1 复刻的 UM SSO 登录页（只差域名是 `um-login.xyz`，而且浏览器已经显示"不安全"）。困意中的他直接输入了 SSO 用户名密码，页面跳到了真网站，以为操作成功了。第二天早上起床，微信余额 3000 + 绑定工行卡 15,000 被分 9 笔小额（2000 / 2000 … ）转走。',
    },
    result: {
      loss: 'MOP 18,000',
      impact: [
        '密码被用来撞库攻击：UM SSO、微信、Apple ID 密码全改了两周才完全恢复',
        '实验室项目代码也差点被远程登录删了，幸好开启了 Time Machine 备份',
      ],
    },
    tip: '学校 ICTO 和所有官方机构永远不会"邮件里发链接让你登录"。记住这一条就可以挡住 90% 的校园钓鱼。',
    tips: [
      '永远不要通过邮件里的链接登学校 SSO，直接在浏览器书签里打开 um.edu.mo 自己进去。',
      'UM 官方域名只有 `@um.edu.mo`。任何 `@um-mo.org` / `@umac.hk` / `@umac.mo` 结尾全是假。',
      '看地址栏左边的 🔒：真 SSO 一定是"绿锁 + Extended Validation 证书"，假钓鱼页面是 HTTP 或 🔒 上带感叹号。',
    ],
  },
  {
    id: 'case-dating-01',
    code: 'CASE · 06',
    title: 'Tinder"完美男友"带她博彩套利，最后账户被"风控冻结"7 万',
    category: 'dating',
    location: 'Tinder → Telegram · 视频聊天 3 周',
    date: '2026 年 5 月',
    victim: {
      gender: '女',
      year: 22,
      major: '传播学 · 大三',
      situation: '刚分手不久，情绪低落的时候刷到',
    },
    cover:
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=75&auto=format&fit=crop',
    whyBelieve:
      '对方头像帅气、是澳门投行 Associate、身高 183、喜欢健身和摄影。聊天 3 周无微不至，每天晚上打 2 小时电话互道晚安 —— 即使永远只露半张脸（说"我室友在背景不方便"）。',
    process: {
      contact:
        'Tinder 右滑匹配，对方立刻写了很长一条自我介绍（不是 Hi 那种），说自己在澳门做债券投行、平时忙所以很少用软件，第一次遇到聊得来的。加了 Telegram 私聊。',
      trust:
        '天天聊天聊到凌晨，"老公老婆"相称，和她规划寒假一起去北海道看雪。她朋友圈也发了合照（当然是对方发来的单人照 P 的）。3 周之后的感情浓度已经到了"对方说什么都信"的地步。',
      induce:
        '"我有朋友在新濠博彩系统做，内部有个 15 分钟的套利窗口，我今天帮你投 2 万，操作完你可以立刻提 24,000"。第一次真的提到了 24,000，她完全放下戒心。第二次投 5 万，第三天"风控审计，要再充 2 万验资"，再充 2 万，App 直接登不上去，男友也消失了。',
    },
    result: {
      loss: 'MOP 70,000（寒假去北海道的钱 + 过年的利是 + 信用卡提现 3 万）',
      impact: [
        '还信用卡 + 父母的钱，花了整整 6 个月才平账',
        '事后发现"男友照片"是香港 KOL 的公开 Instagram 照片，视频是录屏',
        '心理伤害远大于经济损失，休学半学期看心理医生',
      ],
    },
    tip: '杀猪盘的识别口诀：①完美人设永不奔现 ②聊天永远在 Telegram/Signal 不用微信 ③带你赚钱。全中 100% 诈骗。',
    tips: [
      '任何网上认识的对象，提出"内部投资 / 博彩套利 / 数字货币搬砖"，立刻拉黑。',
      '必须真的约出来见面！一次不赴约就是有问题，三次不赴约直接拉黑。',
      '不要在对方给的任何链接 / TestFlight App 里充钱，不是 AppStore 上架的正规平台=假。',
    ],
  },
  {
    id: 'case-secondhand-02',
    code: 'CASE · 07',
    title: '闲鱼微信"代充游戏"：以为便宜 50%，号被封永久 + 钱被追款 8 千',
    category: 'secondhand',
    location: '闲鱼 · Discord 原神代充群',
    date: '2026 年 6 月',
    victim: {
      gender: '男',
      year: 19,
      major: '数学 · 大一',
      situation: '原神 4.8 卡池想抽满命水神 + 专武，预算不够',
    },
    cover:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=75&auto=format&fit=crop',
    whyBelieve:
      '闲鱼上"原神 648 档位代充只收 324 RMB"，下面几百条评价都是"秒到" "已经在他家充了一年"。头像还是原神官方插画，账号注册已经 1348 天，以为绝对靠谱。',
    process: {
      contact:
        '闲鱼搜"原神代充"排序价格，找到了最便宜的一档：创世结晶 648RMB 档位只要 324RMB，比官方便宜 50%。私信秒回，说要加 Discord 群领优惠券额外 8 折。',
      trust:
        '进群 1500 人，管理员发了之前一年的"充值成功订单截图"，说自己是"外服礼品卡渠道"所以便宜。第一单 324 充 648 确实 5 分钟内到账，他以为完全没问题。',
      induce:
        '"现在 5 周年活动，满 5 单送 3 单"，他一次充了 10 单共 3240 人民币，又介绍了两个室友一起充共 4800。三天后游戏弹出封禁通知：账号被官方以"盗刷信用卡充值"为由永久封禁。同时米哈游通过苹果/谷歌追款，他自己 Apple ID 被欠账 5000 人民币，不还就锁 ID。',
    },
    result: {
      loss: 'MOP 8,800（含两位室友的）+ 原神 60 级账号永久封禁 + Apple ID 被锁定',
      impact: [
        '玩了 3 年的号没了，所有角色进度全部清零',
        '还倒欠苹果官方的追款 5000，不还 Mac / iPhone 都登不上',
        '和两个室友闹翻了，最后自己垫了 4800',
      ],
    },
    tip: '"代充便宜一半"基本都是用黑卡（盗刷别人信用卡）买的，官方迟早会追溯封号+追款。省那一半最终亏十倍。',
    tips: [
      '手游、Steam、Apple ID 充值一律只在 App 内购买 / 官方网页。没有第三种合法渠道。',
      '不要把自己 Apple ID 密码/验证码给任何人做"代充"，对方会直接锁你的手机。',
      '游戏账号 2FA（米游社安全令牌）一定要开，充完立刻改密码。',
    ],
  },
  {
    id: 'case-job-02',
    code: 'CASE · 08',
    title: '"帮我代收 5 万过海关流水"：以为帮未来男朋友，结果自己被指控洗钱',
    category: 'job',
    location: '微信 · Instagram 私信',
    date: '2026 年 1 月',
    victim: {
      gender: '女',
      year: 21,
      major: '会计 · 大二',
      situation: '刚考完期末，闲着没事想帮家里减轻负担',
    },
    cover:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=75&auto=format&fit=crop',
    whyBelieve:
      '对方说是做澳门-内地跨境电商的"学长"，和她同一个学院毕业的。她查了一下学院毕业生名字，还真有一个同名的人（骗子就是搜出来借名的）。',
    process: {
      contact:
        'Instagram 私信："学妹好，我是你学院 19 届的阿俊，现在做澳珠两地电商，想找澳门本地银行卡的同学帮忙走一下澳门的货款流水，每笔抽 2%。"',
      trust:
        '对方说自己也是 UM 会计毕业，发了一张"毕业照截图"和公司名片照片，还有学院官方公众号一篇老文章里确实也有这个名字。对方说"我下个月公司在澳门要开分公司，你来做兼职财务助理，一个月 8k"，她已经在幻想毕业后直接进学长公司了。',
      induce:
        '"你先把 BCM 卡号发我，我打 5 万人民币进去，你收到后立刻帮我转去这个工行内地卡号（其实是他买的别人账户）—— 这是 2% 手续费 1000 你先留着。"她照做。两周之后 BCM 银行打电话通知她：澳门司警局已经冻结账户，怀疑涉嫌电信诈骗洗钱，金额涉及 38 万，要求她去警局做笔录。',
    },
    result: {
      loss: 'MOP 1,000（所谓的"手续费"） + 留下刑事笔录记录',
      impact: [
        '所有澳门银行账户被冻结 6 个月，学费交不了最后向学院申请延迟缴付',
        '警局做笔录 3 次，留下怀疑洗钱的刑事案件登记，未来考公务员/进银行政审可能不通过',
        '心理压力极大，整整一个学期都没心思上课',
      ],
    },
    tip: '帮任何人"代收款项然后转走" = 帮别人洗钱。无论对方说什么原因（海关过账 / 货款 / 过流水 / 换汇），一律是违法！',
    tips: [
      '"过流水"就是洗钱的黑话。一沾到，银行自动上报司法警察局，你解释不清就要上刑事法庭。',
      '银行卡 / MPay / 支付宝 / 微信收款码都不能借给任何人。哪怕是最好的朋友，也不要。',
      '有人说"你帮我收款我给你 1%-5% 返点"，直接举报给司警局 993，这是重大的上游犯罪。',
    ],
  },
]
