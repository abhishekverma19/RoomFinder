import heroImage from "@/assets/hero-room.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful modern living room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl animate-slide-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
            Find Your Perfect
            <br />
            <span className="text-primary-foreground/90">Rental Home</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
            Discover comfortable rooms and apartments that match your lifestyle. 
            Browse verified listings and connect directly with owners.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
