import { Shield, Clock, Search, Users, Smartphone, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Easy Search",
    description: "Find rooms with powerful filters by location, price, and preferences.",
  },
  {
    icon: Shield,
    title: "Verified Listings",
    description: "All listings are verified for authenticity and safety.",
  },
  {
    icon: Clock,
    title: "Real-time Updates",
    description: "Get instant notifications when new rooms match your criteria.",
  },
  {
    icon: Users,
    title: "Tenant Preferences",
    description: "Filter by family, bachelor, working professionals, or students.",
  },
  {
    icon: Smartphone,
    title: "Direct Contact",
    description: "Connect directly with property owners via WhatsApp or call.",
  },
  {
    icon: CheckCircle,
    title: "Free to Use",
    description: "No hidden charges. List and find rooms completely free.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Why Choose RoomFinder?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We make finding your perfect rental home simple, safe, and stress-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card p-6 rounded-xl card-shadow hover:card-hover-shadow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
