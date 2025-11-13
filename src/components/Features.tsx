import { Zap, Shield, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Real-time Meme Data",
    description:
      "Get instant updates on price movements, volume spikes, and trending tokens. Never miss a pump!",
    gradient: "from-bsc-yellow to-bsc-yellow-bright",
  },
  {
    icon: Shield,
    title: "Verified Listings",
    description:
      "All tokens are thoroughly reviewed. We filter out rugs and scams so you can ape safely.",
    gradient: "from-mint-green to-mint-green-light",
  },
  {
    icon: Heart,
    title: "Fun + Fair + Fast",
    description:
      "Community-driven platform built by degens, for degens. No BS, just pure meme coin magic!",
    gradient: "from-bsc-yellow via-mint-green to-bsc-yellow",
  },
];

const Features = () => {
  return (
    <section id="about" className="py-20 bg-bsc-darker">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why <span className="text-gradient">Meme SmartChain</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The ultimate platform for discovering and tracking BSC meme coins
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="bg-card border-border p-8 hover-lift group relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity from-bsc-yellow to-mint-green"></div>

                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform glow-yellow`}
                  >
                    <Icon className="w-8 h-8 text-bsc-dark" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Corner decoration */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-bsc-yellow/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
              </Card>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-mint-green">50K+</div>
            <div className="text-sm text-muted-foreground">Active Users</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">1,234</div>
            <div className="text-sm text-muted-foreground">Tokens Listed</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-mint-green">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
