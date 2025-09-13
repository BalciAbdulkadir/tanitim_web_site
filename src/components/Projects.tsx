import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Zap, Shield, Gamepad2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Güvenli Ödeme Sistemi",
      description: "Modern bir Güvenli Ödeme Sistemi. Kullanıcı yönetimi, sipariş yönetimi ve güvenli ödeme adımları içerir.",
      longDescription: "Asp .NET Core 8.0 sürümü kullanılarak C# dilinde Backend geliştirmesi yapılmıştır. NuGet paketlerinden yardım alınmıştır. Model-View-Controller (MVC) yapısı kullanılmıştır. Frontend tarafında ise HTML, Bootstrap ve CSS kullanılmıştır. Veri tabanı işlemleri için Microsoft SQL Server Managment Studio kullanılmıştır.",
      technologies: ["ASP.NET Core", "React", "SQL Server", "Stripe API"],
      icon: Code,
      gradient: "from-primary to-primary-glow",
      
      githubUrl: "https://github.com/BalciAbdulkadir/Security_Payment_System",
      featured: true
    },
   
    {
      title: "Web Satış Sitesi",
      description: "Ticari kaygım olmadan geliştirdiğim bir satış sitesi.",
      longDescription: "WhatsApp API kullanılarak siparişlerin WhatsApp üzerinden alınmasını sağladım. Proje, ASP.NET Core ve React kullanılarak geliştirilmiştir. Kullanıcı dostu bir arayüz ve güvenli ödeme işlemleri sunar.",
      technologies: ["Angular", ".NET Core", "SignalR",  "Node.js"],
      icon: Shield,
      gradient: "from-success to-success-glow",
      demoUrl: "https://alokofte.shop",
      githubUrl: "#",
      featured: true
    },
    
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Projelerim</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Farklı teknolojiler kullanarak geliştirdiğim projeler ve çalışmalarım
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center"></h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="glass-effect border-border p-6 card-hover animate-slide-up group overflow-hidden relative">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 bg-gradient-to-br ${project.gradient} rounded-lg`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex gap-2">
                        <Button
  asChild
  variant="outline"
  size="sm"
  className="h-8 w-8 p-0"
>
  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
    <Github className="h-4 w-4" />
  </a>
</Button>
                        
                      </div>
                    </div>

                    <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="skill-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    
                    <div className="flex gap-3">
{project.demoUrl && project.demoUrl !== '#' && (
<a 
href={project.demoUrl} 
target="_blank" 
rel="noopener noreferrer" 
className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-success text-success-foreground shadow hover:bg-success/90 h-10 px-4 py-2"
>
<ExternalLink className="mr-2 h-4 w-4" />
Site Linki
</a>
)}
{project.githubUrl && project.githubUrl !== '#' && (
<a 
href={project.githubUrl} 
target="_blank" 
rel="noopener noreferrer" 
className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
>
<Github className="mr-2 h-4 w-4" />
Github Reposu
</a>
)}
</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
  <Card className="glass-effect border-border p-8 max-w-2xl mx-auto">
    <h3 className="text-2xl font-semibold mb-4">Daha Ayrıntılı Bilgi</h3>
    <p className="text-muted-foreground mb-6">
      GitHub profilimde daha fazla proje ve açık kaynak katkılarıma göz atabilirsiniz.
    </p>
    <a 
      href="https://github.com/BalciAbdulkadir" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-4 py-2"
    >
      <Github className="mr-2 h-5 w-5" />
      GitHub Profilim
    </a>
  </Card>
</div>
      </div>
    </section>
  );
};

export default Projects;
