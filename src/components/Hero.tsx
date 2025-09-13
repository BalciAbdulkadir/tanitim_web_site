import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center animate-fade-in">
          

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Abdülkadir</span>
            <br />
            <span className="text-foreground">Balcı</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Back-End Developer & Yazılım Geliştirici
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Modern web uygulamaları ve backend sistemleri geliştiriyorum. 
            ASP.NET Core, React ve modern teknolojilerle kullanıcı deneyimini ön planda tutan çözümler üretiyorum.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={scrollToProjects}
              className="btn-hero-primary group"
            >
              Projelerime Göz At
              <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <button 
              onClick={scrollToContact}
              className="btn-hero-secondary group"
            >
              <Mail className="mr-2 h-5 w-5" />
              Bana Ulaş
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">2</div>
              <div className="text-muted-foreground">Yıl Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">4</div>
              <div className="text-muted-foreground">Tamamlanan Proje</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">5</div>
              <div className="text-muted-foreground">Teknoloji Stack</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;