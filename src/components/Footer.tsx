import { Twitter, MessageCircle, Github, Heart } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations();

  const handleContractClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contractAddress = "7pPHHsS8zXH2M33TqvxvN3QnXPpJe2wX74GHDstCpump";
    navigator.clipboard.writeText(contractAddress);
    alert(`Contract Address copied to clipboard: ${contractAddress}`);
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-2xl font-bold text-foreground">{t.footerBrand}</span>
            <p className="text-sm text-muted-foreground">
              {t.footerBrandDesc}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.home}
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.platformFeaturesTitle}
                </a>
              </li>
              <li>
                <a href="#discover" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.discover}
                </a>
              </li>
              <li>
                <a href="#submit" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.submitProject}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t.resources}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.documentation}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.api}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.brandAssets}
                </a>
              </li>
              <li>
                <button
                  onClick={handleContractClick}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left w-full"
                >
                  {t.contractAddress}
                </button>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.termsOfService}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t.joinCommunity}</h4>
            <div className="flex space-x-4">
              <a
                href="https://x.com/Meme_smartchain"
                className="w-10 h-10 bg-muted/50 border border-border rounded-2xl flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://t.me/Meme_SmartChain"
                className="w-10 h-10 bg-muted/50 border border-border rounded-2xl flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group"
              >
                <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="https://docs.memesmartchain.xyz"
                className="w-10 h-10 bg-muted/50 border border-border rounded-2xl flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              {t.socialText}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground flex items-center">
              © {currentYear} {t.footerBrand} — {t.privacyPolicy}{" "}
              <Heart className="w-4 h-4 mx-1 text-primary fill-primary" />
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                {t.privacyPolicy}
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                {t.cookiePolicy}
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                {t.contactUs}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
