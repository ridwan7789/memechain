import { Button } from "@/components/ui/button";
import { Rocket, Coins } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-cream"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              MEME SMARTCHAIN
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl">
                构建专属MEME社区
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              向社区展示的MEME社区。以网络空间站的形式，设站鸣，告诉全人类，你的链接 &gt; 社区和MEME项目的专属空间。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-full glow-orange group shadow-lg"
              >
                <Rocket className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                创建项目 →
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary/10 text-base px-8 py-6 rounded-full"
              >
                <Coins className="w-5 h-5 mr-2" />
                探索广场
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden card-shadow">
              <img
                src={heroIllustration}
                alt="Meme characters celebrating on BSC"
                className="w-full h-auto animate-float"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-bsc-yellow rounded-full flex items-center justify-center text-3xl animate-bounce-slow shadow-lg">
              🚀
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-bsc-orange rounded-full flex items-center justify-center text-2xl animate-bounce-slow shadow-lg" style={{ animationDelay: "0.5s" }}>
              💰
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
