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
          title: "项目：负责去中心化交易协议 DODO 内容品牌与产品增长",
          subtitle:
            "Binance / Coinbase 投资 · 三百万用户 · 交易量超两千亿美金",
          bullets: [
            { label: "从 0 到 1 创建 Dr. DODO 内容品牌", text: "主笔及编辑 50 余篇深度研究报告，为公司品牌参加国际会议与社区 AMA，建立 APAC 区域核心媒体关系网络，在 DeFi 社区建立品牌认知与行业影响力" },
            { label: "链上数据分析赋能产品增长", text: "围绕做市算法、流动性池、资本效率、MEV 与套利等核心议题产出研究分析，建设对外 Dune 数据看板，研究结论赋能产品功能定义、GTM 策略制定与商务转化" },
            { label: "DeFi 与 AI 赛道投研", text: "负责公司 Ventures 投研工作，主导项目发掘、筛选与尽调，覆盖产品架构、代币模型、竞争格局与增长路径分析，建立并维护创始人、投资机构及行业 KOL 关系网络" },
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
            { label: "市场策略制定与整合传播", text: "负责《梦幻西游》系列产品的品牌传播与市场营销工作，制定年度整合传播策略，主导 TFBOYS 主题曲全案传播、「梦幻西游×北西」电影跨界等 IP 联动营销事件，任职期间产品流水及用户数创历史新高" },
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
      text: "长期关注人工智能前沿动态，并学会 Vibe Coding 个人网站",
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
    "10 years in marketing and PR, from strategic game launches at Tencent and NetEase to building a Web3 startup from zero — skilled in crisis PR, content strategy, and data-driven growth",
  ],
  labels: {
    summary: "Summary",
    education: "Education",
    experience: "Experience",
    more: "More Roles",
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
      degree: "B.A. in Drama, Film & Television Literature",
      dates: "2011.09 - 2015.07",
    },
  ],
  experience: [
    {
      company: "",
      role: "Growth & Research Lead, DODO",
      dates: "2021.07 - 2025.06",
      logo: "/logo/dodo.png",
      projects: [
        {
          title:
            "Project: Content brand building and product growth for DODO, a decentralized exchange protocol",
          subtitle:
            "Backed by Binance / Coinbase · Decentralized Exchange · $200B+ cumulative trading volume",
          bullets: [
            { label: "Built Dr. DODO content brand from 0 to 1", text: "authored and edited 50+ in-depth research reports, represented the brand at international conferences and community AMAs, established core media network across APAC, and built brand recognition and industry influence in the DeFi community" },
            { label: "On-chain data analysis for product growth", text: "produced research on market-making algorithms, liquidity pools, capital efficiency, MEV and arbitrage; built public Dune dashboards; research insights informed product feature definition, GTM strategy, and business development" },
            { label: "DeFi & AI investment research", text: "led the company's Ventures research, driving project sourcing, screening and due diligence covering product architecture, token models, competitive landscape and growth analysis; built and maintained a network of founders, investors and industry KOLs" },
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
            "Project: Led China launch communications for Tencent's strategic title PUBG",
          subtitle:
            "KRAFTON flagship IP · Tencent strategic title · 10M+ Steam users · Multi-million PR budget management",
          bullets: [
            { label: "Crisis PR under pressure", text: "amid the Korean content ban and CCTV criticism of the IP, led risk contingency planning and sentiment response strategy, coordinated multi-party stakeholders across China and Korea to balance localized narrative with international IP image; core contributor to the company-award-winning tactical shooter sentiment management project" },
            { label: "Creative campaigns & top-tier media relations", text: "conceived the viral 'Real-life Battle Royale' mini-program that attracted 2.1M active user sign-ups in 3 days; simultaneously orchestrated an interview matrix across top financial, tech, and gaming media to sustain high-density positive coverage offsetting negative sentiment, ultimately surpassing 10M pre-registrations" },
          ],
        },
        {
          title:
            "Project: Led PR communications for Naruto Mobile during its mature lifecycle (2 years)",
          subtitle:
            "Shueisha heavyweight IP · Top ACT-genre product · Won 2019 Tencent Games Best Growth Marketing Award",
          bullets: [
            { label: "Cross-regional communication strategy", text: "deep coordination with Japan's Shueisha on content review and release cadence, built long-term relationships with ACG vertical and domestic gaming media, developed a localized strategy combining IP with pop culture trends" },
            { label: "PR-driven business growth", text: "leveraged PR as the core growth lever, timed campaigns to product milestones to generate buzz, contributing to 15.3M new users for the year at 200% KPI achievement, validating PR's direct impact on user acquisition" },
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
            "Project: Brand PR & marketing for NetEase Games' Fantasy Westward Journey franchise",
          subtitle:
            "NetEase's flagship franchise · Benchmark turn-based game · TFBOYS brand partnership",
          bullets: [
            { label: "Marketing strategy & integrated communications", text: "led brand communications and marketing for the Fantasy Westward Journey franchise, developed annual integrated communication strategies, spearheaded TFBOYS theme song campaigns and the Fantasy Westward Journey × Beijing Meets Seattle cross-industry film collaboration; product revenue and user numbers hit all-time highs during tenure" },
            { label: "Executive communications & spokesperson management", text: "managed external messaging for brand ambassadors and C-suite executives, oversaw sentiment monitoring and crisis response at key milestones including mobile launch and major updates, ensuring brand safety during high-exposure periods" },
            { label: "Built social media marketing from zero", text: "as part of NetEase's earliest 5-person social media pioneering team, built the gaming social media communications system from scratch in 6 months, covering Weibo, WeChat, Zhihu and other core platforms, supporting user acquisition and daily communications across the entire product line" },
          ],
        },
      ],
    },
  ],
  more: [
    {
      label: "AI Enthusiast",
      text: "Follows AI developments closely, leverages various AI tools to enhance content production, sentiment monitoring, and data analysis; vibe-coded personal website (yaoblock.com)",
    },
    {
      label: "Runner",
      text: "From failing the 800m fitness test to completing 11 full marathons (42.195 km) across Singapore, Nagoya, Seoul, Taiwan, Budapest and more",
    },
    {
      label: "Writer",
      text: "Admitted to Peking University and Nanjing University via independent writing exams; long-time contributor to China's top tech, business, and current affairs publications (Huxiu, 36Kr, Southern Weekly, New Weekly), with 40+ in-depth articles published",
    },
  ],
};
