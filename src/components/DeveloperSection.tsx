import { Mail, Phone, Github, Linkedin, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import developerPhoto from "@/assets/developer-photo.png";

const DeveloperSection = () => {
  const developer = {
    name: "Abhishek Verma",
    role: "Full-Stack Developer",
    email: "abhishekprasadverma546@gmail.com",
    phone: "+91 9507277348",
    linkedin: "https://linkedin.com/in/abhishek19",
    github: "https://github.com/abhishekverma19",
    skills: ["React", "TypeScript", "Java", "Python", "SQL", "Power BI"],
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Meet the Developer
          </h2>
          <p className="text-muted-foreground">
            The person who built RoomFinder
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6">
              {/* Photo */}
              <div className="w-28 h-28 rounded-full border-4 border-primary/20 overflow-hidden flex-shrink-0">
                <img
                  src={developerPhoto}
                  alt={developer.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(developer.name)}&background=E8734E&color=fff&size=112`;
                  }}
                />
              </div>
              
              {/* Info */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {developer.name}
                </h3>
                <p className="text-muted-foreground flex items-center justify-center sm:justify-start gap-2 mb-4">
                  <Code className="w-4 h-4" />
                  {developer.role}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mb-4">
                  {developer.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Contact Buttons */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                  <Button
                    size="sm"
                    onClick={() => window.open(`mailto:${developer.email}`, '_blank')}
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(`tel:${developer.phone}`, '_blank')}
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() => window.open(developer.linkedin, '_blank')}
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9"
                    onClick={() => window.open(developer.github, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DeveloperSection;
