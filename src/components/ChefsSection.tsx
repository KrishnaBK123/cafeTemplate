
import { Coffee, ChefHat, Grape } from "lucide-react";

const ChefsSection = () => {
  const chefs = [
    {
      name: "Maria Santos",
      role: "Head Barista",
      specialty: "Espresso & Latte Art",
      experience: "8 years",
      image: "https://nationaltoday.com/wp-content/uploads/2021/07/shutterstock_1518533924-min.jpg",
      icon: Coffee
    },
    {
      name: "David Kim",
      role: "Pastry Chef", 
      specialty: "Artisan Pastries & Desserts",
      experience: "6 years",
      image: "https://img.freepik.com/free-photo/portrait-male-chef-kitchen_23-2149646279.jpg?semt=ais_hybrid&w=740",
      icon: ChefHat
    },
    {
      name: "Lisa Thompson",
      role: "Juice Specialist",
      specialty: "Fresh Smoothies & Healthy Blends",
      experience: "4 years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
      icon: Grape
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The passionate professionals behind every perfect cup and delicious treat
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {chefs.map((chef, index) => {
            const IconComponent = chef.icon;
            return (
              <div
                key={index}
                className="text-center group hover-scale transform transition-all duration-300"
              >
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                  <img 
                    src={chef.image} 
                    alt={chef.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center mb-3">
                  <IconComponent className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold text-primary mb-2">{chef.name}</h3>
                <p className="text-accent font-medium mb-2">{chef.role}</p>
                <p className="text-muted-foreground mb-1">{chef.specialty}</p>
                <p className="text-sm text-muted-foreground">{chef.experience} experience</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChefsSection;
