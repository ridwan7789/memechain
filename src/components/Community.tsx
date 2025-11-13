import { Button } from "@/components/ui/button";
import { MessageCircle, Twitter } from "lucide-react";

const Community = () => {
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
              🎉 Join the <span className="text-gradient">Meme Revolution</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with thousands of degen traders and meme coin enthusiasts!
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
                <h3 className="text-2xl font-bold text-foreground">Telegram Community</h3>
                <p className="text-muted-foreground">
                  Get real-time alerts, discuss hot tokens, and connect with fellow degens
                </p>
                <div className="flex items-center justify-center space-x-2 text-primary font-semibold">
                  <div className="w-2 h-2 bg-mint-green rounded-full animate-pulse"></div>
                  <span>12,847 members online</span>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Join Telegram
                </Button>
              </div>
            </div>

            {/* Twitter Card */}
            <div className="bg-card border border-border rounded-xl p-8 hover-lift glow-green group">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-mint-green to-mint-green-light rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Twitter className="w-8 h-8 text-bsc-dark" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Follow on X / Twitter</h3>
                <p className="text-muted-foreground">
                  Stay updated with trending coins, market news, and spicy memes
                </p>
                <div className="flex items-center justify-center space-x-2 text-mint-green font-semibold">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span>25.4K followers</span>
                </div>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-mint-green text-mint-green hover:bg-mint-green hover:text-bsc-dark"
                >
                  Follow on X
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="pt-8">
            <p className="text-lg text-muted-foreground mb-4">
              Want your token featured? Submit it now! 🚀
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-bsc-yellow to-mint-green text-bsc-dark hover:opacity-90 font-bold"
            >
              Submit Your Meme Coin
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
