import { Home, Users, MapPin, Star } from "lucide-react";

const stats = [
  {
    icon: Home,
    value: "500+",
    label: "Listed Rooms",
  },
  {
    icon: Users,
    value: "1000+",
    label: "Happy Tenants",
  },
  {
    icon: MapPin,
    value: "50+",
    label: "Cities Covered",
  },
  {
    icon: Star,
    value: "4.8",
    label: "User Rating",
  },
];

const StatsSection = () => {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-3">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-white/80 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
