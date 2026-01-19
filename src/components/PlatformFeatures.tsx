import { Users, LayoutDashboard, TrendingUp } from "lucide-react";
import dashboardMockup1 from "@/assets/me2.jpeg";
import dashboardMockup2 from "@/assets/c3.jpeg";
import dashboardMockup3 from "@/assets/me.jpeg";
import { useTranslations } from "@/hooks/useTranslations";

const PlatformFeatures = () => {
  const t = useTranslations();

  const features = [
    {
      id: 1,
      title: t.buildBscTitle,
      description: t.buildBscDesc,
      bullets: t.buildBscBullets,
      icon: Users,
      mockup: dashboardMockup1,
    },
    {
      id: 2,
      title: t.createAirdropTitle,
      description: t.createAirdropDesc,
      bullets: t.createAirdropBullets,
      icon: LayoutDashboard,
      mockup: dashboardMockup2,
    },
    {
      id: 3,
      title: t.discoverBscTitle,
      description: t.discoverBscDesc,
      bullets: t.discoverBscBullets,
      icon: TrendingUp,
      mockup: dashboardMockup3,
    },
  ];

  return (
    <section id="features" className="py-20 bg-cream-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t.platformFeaturesTitle}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.platformFeaturesSubtitle}
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
                  className="absolute -z-10 top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
                  style={{ animationDelay: `${index * 0.3}s` }}
                ></div>
                <div
                  className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
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
