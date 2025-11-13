import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const languages = ["EN", "中文", "ID"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl font-bold text-foreground">MEME SMARTCHAIN</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm text-foreground hover:text-primary transition-colors">
              首页
            </a>
            <a href="#features" className="text-sm text-foreground hover:text-primary transition-colors">
              社区
            </a>
            <a href="#discover" className="text-sm text-foreground hover:text-primary transition-colors">
              发现
            </a>
            
            {/* Language Selector 
            <div className="relative group">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-1 text-sm"
              >
                <Globe className="w-4 h-4" />
                <span>{language}</span>
              </Button>
              <div className="absolute right-0 mt-2 w-24 bg-card border border-border rounded-2xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className="block w-full px-4 py-2 text-sm text-left hover:bg-muted transition-colors first:rounded-t-2xl last:rounded-b-2xl"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>*/}

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              提交项目 →
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in-up">
            <a
              href="#home"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              首页
            </a>
            <a
              href="#features"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              社区
            </a>
            <a
              href="#discover"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              发现
            </a>
            <div className="flex items-center space-x-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded-full text-sm ${
                    language === lang
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
              提交项目 →
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
