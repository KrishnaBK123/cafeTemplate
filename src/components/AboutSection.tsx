
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">About BrewCafé</h2>
            <p className="text-muted-foreground text-lg mb-6">
              Founded in 2020, BrewCafé has been serving the community with exceptional coffee, 
              fresh juices, and artisan snacks. Our mission is to create a warm, welcoming space 
              where people can connect, relax, and enjoy the finest beverages and treats.
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              We source our coffee beans directly from sustainable farms, ensuring fair trade 
              practices and the highest quality. Our fresh juices are made from locally sourced 
              fruits, and our snacks are prepared daily by our skilled pastry chefs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-muted rounded-lg">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-muted-foreground">Menu Items</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop"
                alt="Cozy cafe interior with warm lighting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
