
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&h=1080&fit=crop"
          alt="Cozy cafe interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Coffee Cup Image */}
      <div className="absolute top-20 right-10 animate-pulse z-10">
        <div className="w-32 h-32 rounded-full shadow-2xl transform rotate-12 animate-bounce overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=150&h=150&fit=crop" 
            alt="Coffee cup"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 rounded-full opacity-30 animate-pulse overflow-hidden z-10">
        <img 
          src="https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=80&h=80&fit=crop" 
          alt="Juice"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute bottom-1/4 right-20 w-20 h-20 rounded-full opacity-30 animate-bounce overflow-hidden z-10">
        <img 
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=100&h=100&fit=crop" 
          alt="Pastry"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
          Welcome to <span className="text-amber-400">BrewCafé</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-4 animate-fade-in drop-shadow-md">
          Discover the perfect blend of comfort and flavor in every cup
        </p>
        <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in drop-shadow-md max-w-3xl mx-auto">
          From our signature artisan coffee and fresh-pressed juices to handcrafted pastries and gourmet snacks, 
          every moment at BrewCafé is crafted to awaken your senses and nourish your soul.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
         <a href="#menu">
            <Button size="lg" className="hover-scale">
              Explore Menu
            </Button>
          </a>

         
        </div>
        
        {/* Additional attractive content */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-white animate-fade-in">
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-400">50+</div>
            <div className="text-sm uppercase tracking-wide">Premium Beverages</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-400">100%</div>
            <div className="text-sm uppercase tracking-wide">Fresh Ingredients</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/30"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-amber-400">Daily</div>
            <div className="text-sm uppercase tracking-wide">Handcrafted Pastries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;