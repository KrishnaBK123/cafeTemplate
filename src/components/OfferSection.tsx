
const OfferSection = () => {
  const offers = [
    {
      title: "Fresh Coffee Daily",
      description: "Ethically sourced beans roasted to perfection every morning",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop"
    },
    {
      title: "Fresh Juice Blends",
      description: "100% natural fruit juices with no artificial preservatives",
      image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop"
    },
    {
      title: "Artisan Snacks",
      description: "Handcrafted pastries and healthy snacks made daily",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">What We Offer</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our premium selection of beverages and snacks, crafted with the finest ingredients
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="text-center p-8 bg-card rounded-lg shadow-lg hover-scale transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground mb-4">{offer.title}</h3>
              <p className="text-muted-foreground">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
