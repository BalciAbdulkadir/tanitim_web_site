import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-max section-padding">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text">Abdülkadir Balcı</span>
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Modern web uygulamaları ve backend sistemleri geliştiren Back-End Developer. 
              Teknoloji tutkunu ve sürekli öğrenen bir yazılımcı.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://github.com/BalciAbdulkadir" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profili"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="https://linkedin.com/in/abdülkadir-balcı" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profili"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a 
                  href="mailto:balciabdulkadir61@gmail.com"
                  aria-label="E-posta Gönder"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hızlı Erişim</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="#about" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Hakkımda
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Yeteneklerim
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projelerim
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">İletişim Bilgileri</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <strong className="text-foreground">E-posta:</strong><br />
                <a 
                  href="mailto:emirhan@example.com" 
                  className="hover:text-primary transition-colors"
                >
                  balciabdulkadir61@gmail.com
                </a>
              </p>
              <p>
                <strong className="text-foreground">Telefon:</strong><br />
                +90 541 815 66 61
              </p>
              <p>
                <strong className="text-foreground">Konum:</strong><br />
                İstanbul, Türkiye
              </p>
              <p>
                <strong className="text-foreground">Durum:</strong><br />
                <span className="text-success font-medium">Çalışmaya açık</span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Abdülkadir Balcı. Tüm hakları saklıdır.
              </p>
              <p className="text-muted-foreground text-xs mt-1 flex items-center justify-center md:justify-start">
                
                
              </p>
            </div>

            {/* Back to Top */}
            <Button 
              variant="outline" 
              size="sm" 
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ArrowUp className="h-4 w-4" />
              Başa Dön
            </Button>
          </div>
        </div>

        {/* Tech Stack Credit */}
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-center text-xs text-muted-foreground">
           
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;