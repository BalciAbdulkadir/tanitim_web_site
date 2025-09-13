import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mesaj Gönderildi! 📧",
        description: "En kısa sürede size geri dönüş yapacağım.",
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "E-posta",
      value: "balciabdulkadir61@gmail.com",
      href: "balciabdulkadir61@gmail.com",
      color: "primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/BalciAbdulkadir",
      href: "https://github.com/BalciAbdulkadir",
      color: "foreground"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/abdülkadir-balcı",
      href: "https://linkedin.com/in/abdülkadir-balcı",
      color: "accent"
    },
    {
      icon: Phone,
      label: "Telefon",
      value: "+90 541 815 66 61  ",
      
      color: "foreground"
    },
    {
      icon: MapPin,
      label: "Konum",
      value: "İstanbul, Türkiye",
      href: null,
      color: "success"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">İletişim</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Projeleriniz hakkında konuşalım. Size nasıl yardımcı olabileceğimi öğrenmek için benimle iletişime geçin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-8">Bana Ulaşın</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center group">
                    <div className={`p-3 bg-${info.color}/10 rounded-lg mr-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`h-5 w-5 text-${info.color}`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold mb-4">Hızlı İletişim</h4>
              <div className="flex flex-col gap-3">
                <Button className="btn-hero-primary justify-start" asChild>
                  <a href="mailto:balciabdulkadir61@gmail.com">
                    <Mail className="mr-3 h-5 w-5" />
                    E-posta Gönder
                  </a>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <a href="https://linkedin.com/in/abdülkadir-balcı" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-3 h-5 w-5" />
                    LinkedIn'de Bağlantı Kur
                  </a>
                </Button>
                <Button variant="outline" className="justify-start" asChild>
                  <a href="https://github.com/BalciAbdulkadir" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-3 h-5 w-5" />
                    GitHub Profilim
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-effect border-border p-8 animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6">Mesaj Gönderin</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Adınız *</Label>
                  <Input 
                    id="name" 
                    placeholder="Adınızı girin"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-posta *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="E-posta adresinizi girin"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject">Konu *</Label>
                <Input 
                  id="subject" 
                  placeholder="Mesaj konusunu girin"
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="message">Mesajınız *</Label>
                <Textarea 
                  id="message" 
                  placeholder="Detaylı mesajınızı yazın..."
                  rows={6}
                  required
                  className="mt-2 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full btn-hero-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <Send className="mr-3 h-5 w-5" />
                    Mesaj Gönder
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                ⚡ Genellikle 24 saat içinde yanıt veriyorum
              </p>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="glass-effect border-border p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Birlikte Çalışalım! 🚀</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Yeni bir proje mi planlıyorsunuz? Mevcut sisteminizi mi geliştirmek istiyorsunuz? 
              Modern teknolojiler kullanarak hayalinizdeki uygulamayı birlikte geliştirelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero-primary" asChild>
                <a href="mailto:balciabdulkadir61@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Hemen İletişime Geç
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">
                  Projelerimi İncele
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;