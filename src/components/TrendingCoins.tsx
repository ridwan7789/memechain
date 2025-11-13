import { TrendingUp, TrendingDown, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/useTranslations";

const mockCoins = [
  {
    id: 1,
    name: "Pepe Moon",
    symbol: "PEPE",
    logo: "🐸",
    price: "$0.000042",
    change24h: 156.8,
    volume: "$2.4M",
    marketCap: "$12.5M",
  },
  {
    id: 2,
    name: "Doge Rocket",
    symbol: "DOGER",
    logo: "🐕",
    price: "$0.0089",
    change24h: 89.3,
    volume: "$1.8M",
    marketCap: "$8.3M",
  },
  {
    id: 3,
    name: "Wojak Finance",
    symbol: "WOJAK",
    logo: "😢",
    price: "$0.0156",
    change24h: -12.4,
    volume: "$987K",
    marketCap: "$5.2M",
  },
  {
    id: 4,
    name: "Milady Coin",
    symbol: "MILADY",
    logo: "👸",
    price: "$0.0234",
    change24h: 45.7,
    volume: "$1.2M",
    marketCap: "$6.8M",
  },
  {
    id: 5,
    name: "Chad Token",
    symbol: "CHAD",
    logo: "💪",
    price: "$0.0067",
    change24h: 234.5,
    volume: "$3.1M",
    marketCap: "$15.4M",
  },
  {
    id: 6,
    name: "Ape Together",
    symbol: "APE",
    logo: "🦍",
    price: "$0.0198",
    change24h: 78.9,
    volume: "$2.7M",
    marketCap: "$11.2M",
  },
];

const TrendingCoins = () => {
  const t = useTranslations();

  return (
    <section id="trending" className="py-20 bg-bsc-darker">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            {t.trendingTitle}
          </h2>
          <p className="text-xl text-muted-foreground">
            {t.trendingSubtext}
          </p>
        </div>

        {/* Coins Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCoins.map((coin, index) => (
            <Card
              key={coin.id}
              className="bg-card border-border hover-lift glow-yellow overflow-hidden group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-4xl">{coin.logo}</div>
                    <div>
                      <h3 className="font-bold text-lg text-foreground">{coin.name}</h3>
                      <p className="text-sm text-muted-foreground">{coin.symbol}</p>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>

                {/* Price & Change */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{coin.price}</span>
                    <div
                      className={`flex items-center space-x-1 px-2 py-1 rounded-full ${
                        coin.change24h > 0
                          ? "bg-mint-green/20 text-mint-green"
                          : "bg-destructive/20 text-destructive"
                      }`}
                    >
                      {coin.change24h > 0 ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <span className="text-sm font-semibold">
                        {coin.change24h > 0 ? "+" : ""}
                        {coin.change24h}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Volume 24h</p>
                    <p className="font-semibold text-foreground">{coin.volume}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Market Cap</p>
                    <p className="font-semibold text-foreground">{coin.marketCap}</p>
                  </div>
                </div>
              </div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-bsc-yellow/20 to-mint-green/20 rounded-lg"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            {t.viewAllCoins}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingCoins;
