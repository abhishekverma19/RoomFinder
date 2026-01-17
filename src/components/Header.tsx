import { Home, Plus, LogIn, LogOut, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const Header = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center group-hover:scale-105 transition-transform">
            <Home className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl text-foreground">RoomFinder</span>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3">
          <ThemeSwitcher />
          {user ? (
            <>
              <Button 
                variant="default" 
                size="sm"
                onClick={() => navigate('/add-room')}
              >
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Add Room</span>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => navigate('/my-listings')}
              >
                <LayoutDashboard className="w-4 h-4" />
                <span className="hidden sm:inline">My Listings</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleSignOut}
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </>
          ) : (
            <Button 
              variant="default" 
              size="sm"
              onClick={() => navigate('/login')}
            >
              <LogIn className="w-4 h-4" />
              Login
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
