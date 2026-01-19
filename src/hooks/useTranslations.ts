import { useLanguage } from '@/context/LanguageContext';

const translations = {
  en: {
    // Navbar
    home: 'Home',
    community: 'Community',
    discover: 'Discover',
    submitProject: 'Submit Project →',

    // Hero
    heroTitle1: 'MEME SMARTCHAIN',
    heroTitle2: 'Build Your Exclusive MEME Community',
    heroSubtitle: 'Showcase your MEME to the community. In the form of a web space station, set up your station to tell all humanity about your links > the exclusive space for community and MEME projects.',
    createProject: 'Create Project →',
    exploreSquare: 'Explore Square',

    // Platform Features
    platformFeaturesTitle: 'Platform Core Features',
    platformFeaturesSubtitle: "Creating a simple and unique Solana main chain community with strong functionality. Giving community ecology and capital MEME can communicate easily and simply, allowing fans to get the brand community. Our practical features can help you brand your community, interact with token fans, and improve Solana tokens.",
    buildBscTitle: 'Build Solana Token Community',
    buildBscDesc: 'Build a token space in the community. High-end community in Beijing, let it become your own space now, let fans experience the exclusive token space.',
    buildBscBullets: [
      'Write to the community exclusive space, post polls for discussion',
      'Token resume statistics display and holdings - weekly new statistics mechanism',
      'Custom whiteboard and space theme to showcase community brand personality'
    ],
    createAirdropTitle: 'Create Community Airdrop',
    createAirdropDesc: 'Every seven airdrops in a space can issue updates to share progress, and there can be community voting activities. These issues are all community-focused.',
    createAirdropBullets: [
      'Secure photo announcement - showcase news and progress',
      'Multiple types of voting: text, image, video, multiple option settings for the community',
      'Long voting issuance to one-click interaction, easy to activate community atmosphere'
    ],
    discoverBscTitle: 'Discover Solana Hot Tokens',
    discoverBscDesc: 'The name FaceSwap will showcase the popular tokens on the Solana chain, browse popular projects with statistics at a glance, meta search and filtering functions.',
    discoverBscBullets: [
      'Display main chain DEX prices, Raydium, Orca, etc. working together',
      'Deep and clear business statistics and research',
      'Real-time data and autonomous filtering functions',
      'Find the most suitable project for the community or interact with community partners'
    ],

    // Footer
    footerBrand: 'MEMESMARTCHAIN',
    footerBrandDesc: 'Build exclusive MEME community - driven by the community, for the community.',
    quickLinks: 'Quick Links',
    resources: 'Resources',
    joinCommunity: 'Join Community',
    documentation: 'Documentation',
    api: 'API',
    brandAssets: 'Brand Assets',
    termsOfService: 'Terms of Service',
    socialText: 'Follow us for updates, memes and community news!',
    privacyPolicy: 'Privacy Policy',
    cookiePolicy: 'Cookie Policy',
    contactUs: 'Contact Us',

    // Community section
    joinRevolution: '🎉 Join the Meme Revolution',
    communitySubtext: 'Connect with thousands of degen traders and meme coin enthusiasts!',
    telegramCommunity: 'Telegram Community',
    telegramDesc: 'Get real-time alerts, discuss hot tokens, and connect with fellow degens',
    telegramMembers: '12,847 members online',
    twitterFollow: 'Follow on X / Twitter',
    twitterDesc: 'Stay updated with trending coins, market news, and spicy memes',
    twitterFollowers: '25.4K followers',
    submitNow: 'Submit Your Meme Coin',

    // Features section
    whyTitle: 'Why Meme SmartChain?',
    whySubtitle: 'The ultimate platform for discovering and tracking Solana meme coins',
    feature1Title: 'Real-time Meme Data',
    feature1Desc: 'Get instant updates on price movements, volume spikes, and trending tokens. Never miss a pump!',
    feature2Title: 'Verified Listings',
    feature2Desc: 'All tokens are thoroughly reviewed. We filter out rugs and scams so you can ape safely.',
    feature3Title: 'Fun + Fair + Fast',
    feature3Desc: 'Community-driven platform built by degens, for degens. No BS, just pure meme coin magic!',
    uptime: 'Uptime',
    activeUsers: 'Active Users',
    tokensListed: 'Tokens Listed',
    support: 'Support',

    // Trending Coins
    trendingTitle: '🔥 Top Trending Coins',
    trendingSubtext: 'The hottest meme coins that degens are aping into right now!',
    viewAllCoins: 'View All Coins',

    // 404 Page
    notFoundTitle: '404',
    notFoundSubtitle: 'Oops! Page not found',
    returnHome: 'Return to Home',

    // Social links
    twitter: 'Twitter',
    telegram: 'Telegram',
    github: 'GitHub'
  },
  zh: {
    // Navbar
    home: '首页',
    community: '社区',
    discover: '发现',
    submitProject: '提交项目 →',

    // Hero
    heroTitle1: 'MEME SMARTCHAIN',
    heroTitle2: '构建专属MEME社区',
    heroSubtitle: '向社区展示的MEME社区。以网络空间站的形式，设站鸣，告诉全人类，你的链接 &gt; 社区和MEME项目的专属空间。',
    createProject: '创建项目 →',
    exploreSquare: '探索广场',

    // Platform Features
    platformFeaturesTitle: '平台核心功能',
    platformFeaturesSubtitle: "打造一个简简单等的Solana 主链独创的社区，功能强。赐给社区生态与资本MEME可以沟单地让粉丝 代的。我们的行应功能可以帮助您品牌社区，与代币粉丝互动交流，改代 Solana 代的。",
    buildBscTitle: '构建Solana代币社区',
    buildBscDesc: '在社区、构建代币空间。北京高端社区，让其成为你们现在，让粉丝体验专属代币空间。',
    buildBscBullets: [
      '写给社区专属空间，发帖投票讨论',
      '代币简历统计展示与持仓——每周新统计机制',
      '定制白板与空间主题，展现社区品牌个性'
    ],
    createAirdropTitle: '创建社区空投',
    createAirdropDesc: '逢七一个空旭空空间可以给社区发发行更新分享进度，还可以做社区投票活动，这些东问都区',
    createAirdropBullets: [
      '安全配图的发布公告——展现新闻业与进度',
      '多种类型投票，文字、图片、视频、多种选项设置社',
      '长叁投票发行至一键互动，轻松活跃社区气氛'
    ],
    discoverBscTitle: '发现 Solana 热门代币',
    discoverBscDesc: '其名 FaceSwap 设盖上展示Solana三世的热门代币，浏览热门项统计一目了了然，元搜索和筛选功能',
    discoverBscBullets: [
      '展示主链 DEX 价格、Raydium、Orca 等一同工与',
      '深刻明鲜商统计与研究',
      '实时数据与自治筛选功能',
      '找到社区最适合的项目或和社区伙伴进定主'
    ],

    // Footer
    footerBrand: 'MEMESMARTCHAIN',
    footerBrandDesc: '构建专属MEME社区 — 由社区驱动，为社区服务。',
    quickLinks: '快速链接',
    resources: '资源',
    joinCommunity: '加入社区',
    documentation: '文档',
    api: 'API 接口',
    brandAssets: '品牌资料',
    termsOfService: '服务条款',
    socialText: '关注我们获取更新、迷因和社区动态！',
    privacyPolicy: '隐私政策',
    cookiePolicy: 'Cookie 政策',
    contactUs: '联系我们',

    // Community section
    joinRevolution: '🎉 加入 Meme 革命',
    communitySubtext: '与数千名交易者和迷因币爱好者连接！',
    telegramCommunity: 'Telegram 社区',
    telegramDesc: '获取实时警报，讨论热门代币，与其他交易者连接',
    telegramMembers: '12,847 名在线成员',
    twitterFollow: '关注 X / Twitter',
    twitterDesc: '关注热门币种、市场新闻和有趣迷因的更新',
    twitterFollowers: '25.4K 名关注者',
    submitNow: '提交您的迷因币',

    // Features section
    whyTitle: '为什么选择 Meme SmartChain？',
    whySubtitle: '发现和追踪 Solana 迷因币的终极平台',
    feature1Title: '实时迷因数据',
    feature1Desc: '获取价格波动、交易量激增和热门代币的即时更新。永远不错过拉盘！',
    feature2Title: '已验证列表',
    feature2Desc: '所有代币都经过彻底审查。我们过滤掉骗局和诈骗，让您安全投资。',
    feature3Title: '有趣 + 公平 + 快速',
    feature3Desc: '由交易者为交易者构建的社区平台。没有废话，只有纯粹的迷因币魔力！',
    uptime: '正常运行时间',
    activeUsers: '活跃用户',
    tokensListed: '已列出代币',
    support: '支持',

    // Trending Coins
    trendingTitle: '🔥 顶级热门币种',
    trendingSubtext: '交易者们正在疯狂买入的最热门迷因币！',
    viewAllCoins: '查看所有币种',

    // 404 Page
    notFoundTitle: '404',
    notFoundSubtitle: '抱歉！页面未找到',
    returnHome: '返回首页',

    // Social links
    twitter: '推特',
    telegram: '电报',
    github: 'GitHub'
  }
};

export const useTranslations = () => {
  const { language } = useLanguage();
  return translations[language];
};