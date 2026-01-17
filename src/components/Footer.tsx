import { Home, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Browse Rooms", href: "/" },
    { label: "Add Room", href: "/add-room" },
    { label: "My Listings", href: "/my-listings" },
  ];
  
  const developer = {
    name: "Abhishek Prasad Verma",
    email: "abhishekprasadverma546@gmail.com",
    phone: "+91 9507277348",
    linkedin: "https://linkedin.com/in/abhishek19",
    github: "https://github.com/abhishekverma19",
  };

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">RoomFinder</span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Your trusted platform for finding the perfect rental room. Connect with property owners directly and find your home.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Developer</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${developer.email}`}
                  className="flex items-center gap-2 text-white/70 hover:text-primary text-sm transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {developer.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${developer.phone}`}
                  className="flex items-center gap-2 text-white/70 hover:text-primary text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {developer.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4" />
                Bhopal, Madhya Pradesh
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href={developer.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={developer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${developer.email}`}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm flex items-center justify-center gap-1 flex-wrap">
            © {currentYear} RoomFinder. Developed by Abhishek Verma
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
