import { MapPin, Home, Users, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface RoomCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  propertyType: string;
  tenantPreference: string;
  contactNumber: string;
  imageUrl: string;
}

const RoomCard = ({
  id,
  title,
  location,
  price,
  propertyType,
  tenantPreference,
  contactNumber,
  imageUrl,
}: RoomCardProps) => {
  const navigate = useNavigate();

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = encodeURIComponent(`Hi, I'm interested in your room listing: ${title}`);
    window.open(`https://wa.me/${contactNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  const handleCall = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(`tel:${contactNumber}`, '_self');
  };

  const handleCardClick = () => {
    navigate(`/room/${id}`);
  };

  return (
    <Card 
      className="group overflow-hidden bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-accent text-accent-foreground font-medium">
            {propertyType}
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-card/90 backdrop-blur-sm text-foreground">
            {tenantPreference}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-5">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg text-foreground line-clamp-1 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex items-center gap-1.5 mt-1 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span className="text-sm line-clamp-1">{location}</span>
            </div>
          </div>
          
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-price">₹{price.toLocaleString()}</span>
            <span className="text-muted-foreground text-sm">/month</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>{propertyType}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{tenantPreference}</span>
            </div>
          </div>
          
          <div className="flex gap-2 pt-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1"
              onClick={handleCall}
            >
              <Phone className="w-4 h-4" />
              Call
            </Button>
            <Button 
              size="sm" 
              className="flex-1 bg-accent hover:bg-accent/90"
              onClick={handleWhatsApp}
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
