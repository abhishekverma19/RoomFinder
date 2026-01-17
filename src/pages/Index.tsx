import { useState, useEffect, useMemo } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SearchFilters from "@/components/SearchFilters";
import RoomCard from "@/components/RoomCard";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DeveloperSection from "@/components/DeveloperSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Building2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

// Import sample images for fallback
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";
import room4 from "@/assets/room-4.jpg";
import room5 from "@/assets/room-5.jpg";
import room6 from "@/assets/room-6.jpg";

type Room = Tables<"rooms">;

// Sample rooms for when database is empty
const sampleRooms = [
  {
    id: "sample-1",
    title: "Modern 1BHK with Natural Light",
    location: "Koramangala, Bangalore",
    price: 15000,
    property_type: "1 BHK",
    tenant_preference: "Working",
    contact_number: "+919876543210",
    images: [room1],
    is_available: true,
    owner_id: "",
    description: null,
    created_at: "",
    updated_at: "",
  },
  {
    id: "sample-2",
    title: "Cozy Furnished Apartment",
    location: "Indiranagar, Bangalore",
    price: 18000,
    property_type: "2 BHK",
    tenant_preference: "Family",
    contact_number: "+919876543211",
    images: [room2],
    is_available: true,
    owner_id: "",
    description: null,
    created_at: "",
    updated_at: "",
  },
  {
    id: "sample-3",
    title: "Bright Studio with City View",
    location: "HSR Layout, Bangalore",
    price: 12000,
    property_type: "1 Bed",
    tenant_preference: "Bachelor",
    contact_number: "+919876543212",
    images: [room3],
    is_available: true,
    owner_id: "",
    description: null,
    created_at: "",
    updated_at: "",
  },
  {
    id: "sample-4",
    title: "Elegant Premium Room",
    location: "Whitefield, Bangalore",
    price: 22000,
    property_type: "2 BHK",
    tenant_preference: "Family",
    contact_number: "+919876543213",
    images: [room4],
    is_available: true,
    owner_id: "",
    description: null,
    created_at: "",
    updated_at: "",
  },
  {
    id: "sample-5",
    title: "Spacious 2BHK with Balcony",
    location: "Electronic City, Bangalore",
    price: 14000,
    property_type: "2 BHK",
    tenant_preference: "Working",
    contact_number: "+919876543214",
    images: [room5],
    is_available: true,
    owner_id: "",
    description: null,
    created_at: "",
    updated_at: "",
  },
  {
    id: "sample-6",
    title: "Furnished Room for Students",
    location: "BTM Layout, Bangalore",
    price: 8000,
    property_type: "1 Bed",
    tenant_preference: "Girls",
    contact_number: "+919876543215",
    images: [room6],
    is_available: true,
    owner_id: "",
    description: null,
    created_at: "",
    updated_at: "",
  },
];

const Index = () => {
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [propertyType, setPropertyType] = useState("all");
  const [tenantPreference, setTenantPreference] = useState("all");
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const { data, error } = await supabase
        .from("rooms")
        .select("*")
        .eq("is_available", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      
      // Use sample rooms if database is empty
      setRooms(data && data.length > 0 ? data : sampleRooms as Room[]);
    } catch (error) {
      console.error("Error fetching rooms:", error);
      setRooms(sampleRooms as Room[]);
    } finally {
      setLoading(false);
    }
  };

  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      // Location filter (case-insensitive)
      if (location && !room.location.toLowerCase().includes(location.toLowerCase())) {
        return false;
      }

      // Price range filter
      if (priceRange !== "all") {
        const [min, max] = priceRange.includes("+")
          ? [parseInt(priceRange), Infinity]
          : priceRange.split("-").map(Number);
        if (room.price < min || room.price > max) {
          return false;
        }
      }

      // Property type filter
      if (propertyType !== "all" && room.property_type !== propertyType) {
        return false;
      }

      // Tenant preference filter
      if (tenantPreference !== "all" && room.tenant_preference !== tenantPreference) {
        return false;
      }

      return true;
    });
  }, [rooms, location, priceRange, propertyType, tenantPreference]);

  const handleSearch = () => {
    // Filters are applied reactively
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        
        {/* Search Section */}
        <section className="container mx-auto px-4 -mt-12 relative z-10">
          <SearchFilters
            location={location}
            setLocation={setLocation}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            propertyType={propertyType}
            setPropertyType={setPropertyType}
            tenantPreference={tenantPreference}
            setTenantPreference={setTenantPreference}
            onSearch={handleSearch}
          />
        </section>

        {/* Listings Section */}
        <section id="listings" className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Available Rooms
              </h2>
              <p className="text-muted-foreground mt-1">
                {filteredRooms.length} {filteredRooms.length === 1 ? "room" : "rooms"} found
              </p>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : filteredRooms.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRooms.map((room, index) => (
                <div
                  key={room.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <RoomCard
                    id={room.id}
                    title={room.title}
                    location={room.location}
                    price={room.price}
                    propertyType={room.property_type}
                    tenantPreference={room.tenant_preference}
                    contactNumber={room.contact_number}
                    imageUrl={room.images?.[0] || "/placeholder.svg"}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
                <Building2 className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No rooms found
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Try adjusting your filters or search for a different location to find available rooms.
              </p>
            </div>
          )}
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* Stats Section */}
        <StatsSection />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* CTA Section */}
        <CTASection />

        {/* Developer Section */}
        <DeveloperSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
