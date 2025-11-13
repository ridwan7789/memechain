import { Twitter, MessageCircle, Github, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-2xl font-bold text-foreground">MEMESMARTCHAIN</span>
            <p className="text-sm text-muted-foreground">
              构建专属MEME社区 — 由社区驱动，为社区服务。
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  首页
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  平台功能
                </a>
              </li>
              <li>
                <a href="#discover" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  发现代币
                </a>
              </li>
              <li>
                <a href="#submit" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  提交项目
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">资源</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  文档
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  API 接口
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  品牌资料
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  服务条款
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">加入社区</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-muted/50 border border-border rounded-2xl flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group"
              >
                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted/50 border border-border rounded-2xl flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group"
              >
                <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted/50 border border-border rounded-2xl flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              关注我们获取更新、迷因和社区动态！
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground flex items-center">
              © {currentYear} MEMESMARTCHAIN — 由社区驱动{" "}
              <Heart className="w-4 h-4 mx-1 text-primary fill-primary" />
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                隐私政策
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie 政策
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                联系我们
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
