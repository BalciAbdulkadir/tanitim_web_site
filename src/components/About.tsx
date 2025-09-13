import { Card } from "@/components/ui/card";
import { GraduationCap, Target, Code, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Hakkımda</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Teknolojiyi yalnızca kod yazmak değil, aynı zamanda bir problem çözme sanatı olarak gören bir bireyim. Bilgisayar Programcılığı eğitimim boyunca özellikle backend alanına odaklandım ve ASP.NET Core gibi teknolojilerle projeler geliştirdim. Yeni bilgileri hızla öğrenme ve farklı ortamlara kolayca adapte olma becerim, beni takım çalışmaları için uygun bir aday haline getiriyor. Junior Backend Developer olarak sektöre katkı sağlamak ve uzun vadede yazılım güvenliği ile sistem mimarisi gibi alanlarda uzmanlaşmak istiyorum.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="animate-slide-up">
            <div className="glass-effect rounded-2xl p-8 card-hover">
              <div className="flex items-center mb-6">
                <Heart className="h-6 w-6 text-accent mr-3" />
                <h3 className="text-2xl font-semibold">Kişisel Hikayem</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Yazılım geliştirme alanında 2 yıllık deneyime sahip bir Back-End Developer'ım. 
                Bilgisayar Programcılığı eğitimim sırasında backend ve frontend teknolojilerine olan ilgim 
                derinleşti ve bu alanda kendimi sürekli geliştirmeye devam ediyorum. 
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Problem çözmeyi seven, takım çalışmasına yatkın ve kullanıcı deneyimini ön planda tutan 
                bir yaklaşımla projeler geliştiriyorum. Özellikle modern web teknolojileri ve 
                siber güvenlik alanlarında uzmanlaşmaya odaklanıyorum.
              </p>
            </div>
          </div>

          {/* Education & Goals */}
          <div className="space-y-6">
            {/* Education Card */}
            <Card className="glass-effect border-border p-6 card-hover animate-slide-up">
              <div className="flex items-start">
                <div className="p-3 bg-primary/10 rounded-lg mr-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Eğitim</h4>
                  <p className="text-primary font-medium mb-1">Bilgisayar Programcılığı</p>
                  <p className="text-muted-foreground text-sm mb-3">Karadeniz Teknik Üniversitesi • 2023-2025</p>
                  <p className="text-muted-foreground text-sm">
                    Yazılım geliştirme, algoritma tasarımı, veri yapıları ve sistem tasarımı konularında 
                    temel eğitim aldım. Ayrıca Photoshop ile tasarım düzenleme alanında da gördüm. 
                  </p>
                </div>
              </div>
            </Card>

            {/* Goals Card */}
            <Card className="glass-effect border-border p-6 card-hover animate-slide-up">
              <div className="flex items-start">
                <div className="p-3 bg-accent/10 rounded-lg mr-4">
                  <Target className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Hedeflerim</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-center">
                      <Code className="h-4 w-4 mr-2 text-primary" />
                      Senior Back-End Developer olmak
                    </li>
                    <li className="flex items-center">
                      <Code className="h-4 w-4 mr-2 text-primary" />
                      Siber güvenlik alanında uzmanlaşmak
                    </li>
                    <li className="flex items-center">
                      <Code className="h-4 w-4 mr-2 text-primary" />
                      Açık kaynak projelere katkı sağlamak
                    </li>
                    <li className="flex items-center">
                      <Code className="h-4 w-4 mr-2 text-primary" />
                      Teknoloji topluluğuna değer katmak
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Quick Facts */}
            <Card className="glass-effect border-border p-6 card-hover animate-slide-up">
              <h4 className="text-xl font-semibold mb-4">Hızlı Bilgiler</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Konum:</span>
                  <p className="font-medium">İstanbul, Türkiye</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Durum:</span>
                  <p className="font-medium text-success">Çalışmaya açık</p>
                </div>
                <div>
                  <span className="text-muted-foreground">İlgi Alanları:</span>
                  <p className="font-medium">Web Dev, DevOps, Siber Güvenlik</p>
                </div>
                <div>
                  <span className="text-muted-foreground">Diller:</span>
                  <p className="font-medium">Türkçe, İngilizce</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;