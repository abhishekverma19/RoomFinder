import { Search, MapPin, IndianRupee, Home, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFiltersProps {
  location: string;
  setLocation: (value: string) => void;
  priceRange: string;
  setPriceRange: (value: string) => void;
  propertyType: string;
  setPropertyType: (value: string) => void;
  tenantPreference: string;
  setTenantPreference: (value: string) => void;
  onSearch: () => void;
}

const SearchFilters = ({
  location,
  setLocation,
  priceRange,
  setPriceRange,
  propertyType,
  setPropertyType,
  tenantPreference,
  setTenantPreference,
  onSearch,
}: SearchFiltersProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-card p-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Location Search - Highest Priority */}
        <div className="lg:col-span-2">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="pl-10 h-12 bg-background border-border focus:border-primary"
            />
          </div>
        </div>

        {/* Price Range */}
        <div>
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="h-12 bg-background">
              <div className="flex items-center gap-2">
                <IndianRupee className="w-4 h-4 text-muted-foreground" />
                <SelectValue placeholder="Price Range" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Prices</SelectItem>
              <SelectItem value="0-5000">Under ₹5,000</SelectItem>
              <SelectItem value="5000-10000">₹5,000 - ₹10,000</SelectItem>
              <SelectItem value="10000-15000">₹10,000 - ₹15,000</SelectItem>
              <SelectItem value="15000-25000">₹15,000 - ₹25,000</SelectItem>
              <SelectItem value="25000+">Above ₹25,000</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Property Type */}
        <div>
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger className="h-12 bg-background">
              <div className="flex items-center gap-2">
                <Home className="w-4 h-4 text-muted-foreground" />
                <SelectValue placeholder="Property Type" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="1 BHK">1 BHK</SelectItem>
              <SelectItem value="2 BHK">2 BHK</SelectItem>
              <SelectItem value="1 Bed">1 Bed</SelectItem>
              <SelectItem value="2 Bed">2 Bed</SelectItem>
              <SelectItem value="3 Bed">3 Bed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tenant Preference */}
        <div>
          <Select value={tenantPreference} onValueChange={setTenantPreference}>
            <SelectTrigger className="h-12 bg-background">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <SelectValue placeholder="Tenant Type" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Tenants</SelectItem>
              <SelectItem value="Bachelor">Bachelor</SelectItem>
              <SelectItem value="Family">Family</SelectItem>
              <SelectItem value="Girls">Girls Only</SelectItem>
              <SelectItem value="Working">Working Professionals</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-center pt-2">
        <Button variant="hero" size="lg" onClick={onSearch} className="px-12">
          <Search className="w-5 h-5" />
          Search Rooms
        </Button>
      </div>
    </div>
  );
};

export default SearchFilters;
