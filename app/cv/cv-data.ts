export type CVData = {
  lang: "zh" | "en";
  name: string;
  website: string;
  contact: {
    email: string;
    phone: string;
  };
  summary: string[];
  education: {
    institution: string;
    degree: string;
    dates: string;
  }[];
  experience: {
    company: string;
    role: string;
    dates: string;
    logo?: string;
    projects: {
      title: string;
      subtitle?: string;
      bullets: { label: string; text: string }[];
    }[];
  }[];
  more: {
    label: string;
    text: string;
  }[];
  labels: {
    summary: string;
    education: string;
    experience: string;
    more: string;
    exportPdf: string;
  };
};

export const zh: CVData = {
  lang: "zh",
  name: "刘静一",
  website: "yaoblock.com",
  contact: {
    email: "yaoyaoliu611@gmail.com",
    phone: "(+86) 13924280625",
  },
  summary: [
    "10 年市场营销与公关经验，主导过腾讯绝地求生、网易梦幻西游等千万级用户产品的品牌传播，也经历过 Web3 初创企业从零至一，擅长危机公关、内容策略与数据驱动增长",
  ],
  labels: {
    summary: "个人简介",
    education: "教育背景",
    experience: "工作经历",
    more: "更多角色",
    exportPdf: "PDF",
  },
  education: [
    {
      institution: "纽约大学",
      degree: "电影研究（硕士）",
      dates: "2024.09 - 2026.02",
    },
    {
      institution: "南京大学",
      degree: "戏剧影视文学（本科）",
      dates: "2011.09 - 2015.07",
    },
  ],
  experience: [
    {
      company: "",
      role: "DODO 增长与研究负责人",
      dates: "2021.07 - 2025.06",
      logo: "/logo/dodo.png",
      projects: [
        {
          title: "项目：负责去中心化交易协议 DODO 的内容品牌建设与产品增长策略",
          subtitle:
            "Binance / Coinbase 投资 · 三百万用户 · 交易量超两千亿美金",
          bullets: [
            { label: "从零搭建内容驱动的 GTM 策略", text: "创建 Dr. DODO 研究品牌，组建并管理 6 人团队，主笔及编辑 50 余篇行业报告，通过深度内容建立产品在 DeFi 社区的认知与信任，配合国际会议演讲与社区 AMA 持续扩大品牌声量，构建 APAC 区域核心媒体关系网络" },
            { label: "数据洞察驱动产品定位与增长", text: "围绕做市算法、流动性池、资本效率、MEV 等核心议题进行链上数据分析，搭建公开 Dune 数据看板，研究结论直接输入产品功能优先级排序、市场定位策略与商务拓展方向" },
            { label: "竞品分析与市场研究", text: "负责 DeFi 与 AI 赛道的项目调研与竞争格局分析，覆盖产品架构、代币经济模型与增长路径，为公司战略决策与合作伙伴筛选提供依据，维护创始人、投资机构及行业 KOL 关系网络" },
          ],
        },
      ],
    },
    {
      company: "",
      role: "腾讯 高级产品营销经理",
      dates: "2017.06 - 2020.04",
      logo: "/logo/tencent.avif",
      projects: [
        {
          title: "项目：统筹腾讯战略级新品《绝地求生》国服上市传播",
          subtitle:
            "韩国 KRAFTON 旗舰 IP · 腾讯战略级新品 · Steam 用户破千万 · 千万级公关费用管理",
          bullets: [
            { label: "高压下的危机公关", text: "在「限韩令」政策背景及绝地求生 IP 被央视点名批评的双重高压环境下，主导制定风险预案与舆情应对策略，协同公司文产办、腾讯游戏安全中心、韩国 KRAFTON 及腾讯项目组，平衡本地化叙事与国际 IP 形象，统筹中韩双方内容审核与传播口径一致性，确保跨境敏感议题的传播合规性与品牌安全" },
            { label: "创意传播与顶级媒体关系", text: "主导创意「真实版吃鸡」小程序，3 天吸引 210 万活跃用户预约，同步策划顶级财经、科技及游戏媒体专访矩阵，持续高密度正向曝光对冲负面舆论，最终突破千万预约，奠定强势上市基础" },
          ],
        },
        {
          title: "项目：统筹两年《火影忍者》手游成熟期公关传播",
          subtitle:
            "日本集英社重量级 IP · ACT 品类头部产品 · 获 2019 年度腾讯游戏最佳增长营销项目奖",
          bullets: [
            { label: "跨区域传播策略", text: "深度对接日本集英社版权方，协调中日内容审核与传播节奏，建立 ACG 垂类与国内游戏媒体长期关系，提炼「IP 与潮流文化结合」的本地化传播策略" },
            { label: "PR 驱动业务增长", text: "以公关传播为核心杠杆，配合产品节点打造话题热度，助力产品全年完成 1530 万新增用户，200% 完成 KPI，验证 PR 对用户增长的直接贡献价值" },
          ],
        },
      ],
    },
    {
      company: "",
      role: "网易 - 产品营销经理",
      dates: "2014.11 - 2017.06",
      logo: "/logo/netease.png",
      projects: [
        {
          title: "项目：网易游戏《梦幻西游》系列产品与品牌公关营销",
          subtitle:
            "网易头部王牌产品 · 回合制品类标杆之作 · TFBOYS 品牌合作",
          bullets: [
            { label: "市场策略制定与整合传播", text: "负责《梦幻西游》系列产品的品牌传播与市场营销工作，制定年度整合传播策略，主导 TFBOYS 主题曲全案传播、「梦幻西游×北西」电影跨界等 IP 联动营销事件，统筹品牌嘉年华、发布会、城市玩家交流会及电竞赛事等线下活动策划与传播，任职期间产品流水及用户数创历史新高" },
            { label: "高管采访与发言人管理", text: "统筹品牌代言人及公司高层的对外发言管理，负责手游上线、版本更新等关键节点的舆情监控与危机应对，保障产品在高曝光周期内的品牌安全" },
            { label: "从零到一搭建社交媒体营销", text: "作为网易最早一批社媒营销探索者（5人团队），半年内从 0 到 1 搭建游戏社交媒体传播体系，覆盖微博、微信、知乎等核心平台，支持全线产品的上线获客与日常传播" },
          ],
        },
      ],
    },
  ],
  more: [
    {
      label: "AI 拥趸",
      text: "长期关注人工智能前沿动态，实践 Vibe Coding 个人网站",
    },
    {
      label: "跑者",
      text: "从 800 米体育测试不合格到 11 次海内外全程马拉松完赛（42.195 公里），参赛经历涵盖新加坡、名古屋、首尔、台湾、布达佩斯等多国际马拉松赛事",
    },
    {
      label: "写作者",
      text: "凭借写作特长通过北京大学、南京大学自主招生考试，长期为中国顶级科技、财经及时事媒体（虎嗅、36氪、南方周末、新周刊）供稿，发表 40 余篇深度文章",
    },
  ],
};

export const en: CVData = {
  lang: "en",
  name: "JINGYI LIU",
  website: "yaoblock.com",
  contact: {
    email: "yaoyaoliu611@gmail.com",
    phone: "(+86) 13924280625",
  },
  summary: [
    "10 years of product marketing across gaming & fintech — from marketing China's most iconic game IP (NetEase) to launching a heavily regulated AAA title with 100M+ players (Tencent) to building brand and GTM from zero for a DEX startup (DODO)",
  ],
  labels: {
    summary: "Summary",
    education: "Education",
    experience: "Experience",
    more: "Beyond Work",
    exportPdf: "PDF",
  },
  education: [
    {
      institution: "New York University",
      degree: "M.A. in Cinema Studies",
      dates: "2024.09 - 2026.02",
    },
    {
      institution: "Nanjing University",
      degree: "B.A. in Drama & Film Studies",
      dates: "2011.09 - 2015.07",
    },
  ],
  experience: [
    {
      company: "",
      role: "Product Marketing Lead, DODO",
      dates: "2021.07 - 2025.06",
      logo: "/logo/dodo.png",
      projects: [
        {
          title:
            "Built brand and GTM from zero for a decentralized exchange",
          subtitle:
            "Backed by Binance & Coinbase · 3M+ users · $200B+ trading volume",
          bullets: [
            { label: "Zero-to-one brand building", text: "created the Dr. DODO research brand — 50+ industry reports that established product credibility and community trust; spoke at international conferences and ran AMAs; built an APAC media network from scratch" },
            { label: "Data-informed product marketing", text: "analyzed on-chain metrics around AMM algorithms, liquidity, and capital efficiency; built public Dune dashboards; insights directly shaped product messaging, feature prioritization, and partnership outreach" },
            { label: "Market & competitive analysis", text: "owned landscape analysis across DeFi and AI — product architecture, tokenomics, and growth trajectories — to inform positioning, partnership strategy, and investment decisions" },
          ],
        },
      ],
    },
    {
      company: "",
      role: "Senior Product Marketing Manager, Tencent",
      dates: "2017.06 - 2020.04",
      logo: "/logo/tencent.avif",
      projects: [
        {
          title:
            "Led full go-to-market for PUBG China under high regulatory pressure",
          subtitle:
            "KRAFTON flagship IP · 10M+ Steam players · Multi-million dollar budget",
          bullets: [
            { label: "Navigated a crisis launch", text: "the game faced a national broadcast ban and regulatory scrutiny; aligned 4 stakeholders across China and Korea — compliance, platform safety, the Korean developer, and Tencent's team — to secure market entry" },
            { label: "Drove 10M+ pre-registrations", text: "built a viral mini-app that drove 2.1M sign-ups in 3 days; ran a coordinated media campaign across finance, tech, and gaming press to shift sentiment and build launch momentum" },
          ],
        },
        {
          title:
            "Sustained growth for Naruto Mobile through a 2-year mature lifecycle",
          subtitle:
            "Shueisha licensed IP · #1 action game in China · 2019 Best Growth Marketing Award",
          bullets: [
            { label: "Cross-border IP management", text: "managed content approvals and release cadence directly with Japan's Shueisha; built lasting relationships with anime and gaming media across both markets" },
            { label: "PR as a growth channel", text: "designed campaigns around product milestones to generate organic buzz — delivered 15.3M new users that year, 200% of target, proving PR's direct contribution to user acquisition" },
          ],
        },
      ],
    },
    {
      company: "",
      role: "Product Marketing Manager, NetEase",
      dates: "2014.11 - 2017.06",
      logo: "/logo/netease.png",
      projects: [
        {
          title:
            "Grew China's most iconic game IP — 梦幻西游",
          subtitle:
            "NetEase's flagship title · #1 turn-based RPG in China · TFBOYS brand partnership",
          bullets: [
            { label: "IP-driven campaigns", text: "developed annual marketing strategies and led cross-industry collaborations — TFBOYS theme song campaign and a film IP cross-promotion — driving product revenue and MAU to all-time highs" },
            { label: "Built social channels from zero", text: "founding member of a 5-person team that launched NetEase Games' social presence in 6 months — Weibo, WeChat, and Zhihu across the full product portfolio" },
            { label: "Spokesperson & crisis management", text: "owned external messaging for C-suite and brand ambassadors; ran crisis response and sentiment monitoring during high-exposure launch windows" },
          ],
        },
      ],
    },
  ],
  more: [
    {
      label: "Maker",
      text: "Keeping up with the AI frontier — vibe-coded personal website yaoblock.com",
    },
    {
      label: "Runner",
      text: "11 marathons across Singapore, Japan, Korea, Taiwan, Hungary and more",
    },
    {
      label: "Writer",
      text: "40+ articles in top Chinese tech and business publications",
    },
  ],
};
