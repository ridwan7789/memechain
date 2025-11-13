import { Button } from "@/components/ui/button";
import { MessageCircle, Twitter } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

const Community = () => {
  const t = useTranslations();

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mint-green to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              {t.joinRevolution}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.communitySubtext}
            </p>
          </div>

          {/* Social Cards */}
          <div className="grid md:grid-cols-2 gap-6 pt-8">
            {/* Telegram Card */}
            <div className="bg-card border border-border rounded-xl p-8 hover-lift glow-yellow group">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-bsc-yellow to-bsc-yellow-bright rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-bsc-dark" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t.telegramCommunity}</h3>
                <p className="text-muted-foreground">
                  {t.telegramDesc}
                </p>
                <div className="flex items-center justify-center space-x-2 text-primary font-semibold">
                  <div className="w-2 h-2 bg-mint-green rounded-full animate-pulse"></div>
                  <span>{t.telegramMembers}</span>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {t.telegramCommunity}
                </Button>
              </div>
            </div>

            {/* Twitter Card */}
            <div className="bg-card border border-border rounded-xl p-8 hover-lift glow-green group">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-mint-green to-mint-green-light rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Twitter className="w-8 h-8 text-bsc-dark" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{t.twitterFollow}</h3>
                <p className="text-muted-foreground">
                  {t.twitterDesc}
                </p>
                <div className="flex items-center justify-center space-x-2 text-mint-green font-semibold">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span>{t.twitterFollowers}</span>
                </div>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-mint-green text-mint-green hover:bg-mint-green hover:text-bsc-dark"
                >
                  {t.twitter}
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="pt-8">
            <p className="text-lg text-muted-foreground mb-4">
              {t.submitNow} 🚀
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-bsc-yellow to-mint-green text-bsc-dark hover:opacity-90 font-bold"
            >
              {t.submitNow}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
