import { Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

const CTASection = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <section className="py-16 bg-gradient-to-br from-primary to-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Find Your Perfect Room?
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Whether you're looking for a room or have one to rent, we've got you covered.
          Join thousands of happy users today!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="gap-2 bg-white text-primary hover:bg-white/90"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Search className="w-5 h-5" />
            Browse Rooms
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-white text-white hover:bg-white/10"
            onClick={() => navigate(user ? '/add-room' : '/login')}
          >
            <Plus className="w-5 h-5" />
            List Your Room
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
