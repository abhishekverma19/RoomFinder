import { Search, MousePointer, Phone, Home } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Search",
    description: "Enter your preferred location and apply filters to find rooms that match your needs.",
  },
  {
    icon: MousePointer,
    step: "02",
    title: "Browse",
    description: "Explore detailed listings with photos, prices, and amenities information.",
  },
  {
    icon: Phone,
    step: "03",
    title: "Contact",
    description: "Connect directly with property owners via WhatsApp or phone call.",
  },
  {
    icon: Home,
    step: "04",
    title: "Move In",
    description: "Visit the property, finalize the deal, and move into your new home!",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Finding your perfect room is just four simple steps away.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="relative text-center animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              
              <div className="relative z-10 w-16 h-16 mx-auto rounded-full bg-primary flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              
              <div className="text-xs font-semibold text-primary mb-2">
                STEP {item.step}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
