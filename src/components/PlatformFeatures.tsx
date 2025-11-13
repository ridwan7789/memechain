import { Users, LayoutDashboard, TrendingUp } from "lucide-react";
import dashboardMockup1 from "@/assets/dashboard-mockup-1.png";
import dashboardMockup2 from "@/assets/dashboard-mockup-2.png";
import dashboardMockup3 from "@/assets/dashboard-mockup-3.png";

const features = [
  {
    id: 1,
    title: "构建BSC代币社区",
    description: "在社区、构建代币空间。北京高端社区，让其成为你们现在，让粉丝体验专属代币空间。",
    bullets: [
      "写给社区专属空间，发帖投票讨论",
      "代币简历统计展示与持仓——每周新统计机制",
      "定制白板与空间主题，展现社区品牌个性",
    ],
    icon: Users,
    mockup: dashboardMockup1,
  },
  {
    id: 2,
    title: "创建社区空投",
    description: "逢七一个空旭空空间可以给社区发发行更新分享进度，还可以做社区投票活动，这些东问都区",
    bullets: [
      "安全配图的发布公告——展现新闻业与进度",
      "多种类型投票，文字、图片、视频、多种选项设置社",
      "长叁投票发行至一键互动，轻松活跃社区气氛",
    ],
    icon: LayoutDashboard,
    mockup: dashboardMockup2,
  },
  {
    id: 3,
    title: "发现 BSC 热门代币",
    description: "其名 FaceSwap 设盖上展示BSC三世的热门代币，浏览热门项统计一目了然，元搜索和筛选功能",
    bullets: [
      "展示主链 DEX 价格、PancakeSwap、Uniswap 等一同工与",
      "深刻明鲜商统计与研究",
      "实时数据与自治筛选功能",
      "找到社区最适合的项目或和社区伙伴进定主",
    ],
    icon: TrendingUp,
    mockup: dashboardMockup3,
  },
];

const PlatformFeatures = () => {
  return (
    <section id="features" className="py-20 bg-cream-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            平台核心功能
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            打造一个简简单等的BSC 主链独创的社区，功能强。赐给社区生态与资本MEME可以沟单地
            让粉丝 代的。我们的行应功能可以帮助您品牌社区，与代币粉丝互动交流，改代
            BSC 代的。
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div
                className={`space-y-6 animate-fade-in-up ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  {feature.title}
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                <ul className="space-y-3">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-primary text-xl mt-1">✓</span>
                      <span className="text-muted-foreground">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mockup */}
              <div
                className={`relative animate-fade-in-up ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div className="relative rounded-3xl overflow-hidden card-shadow hover-lift">
                  <img
                    src={feature.mockup}
                    alt={feature.title}
                    className="w-full h-auto"
                  />
                </div>

                {/* Decorative elements */}
                <div
                  className="absolute -z-10 top-8 -right-8 w-32 h-32 bg-bsc-orange/20 rounded-full blur-3xl"
                  style={{ animationDelay: `${index * 0.3}s` }}
                ></div>
                <div
                  className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-bsc-yellow/20 rounded-full blur-3xl"
                  style={{ animationDelay: `${index * 0.3 + 0.2}s` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
