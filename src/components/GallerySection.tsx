
const GallerySection = () => {
  const galleryImages = [
    {
      id: 1,
      alt: "Fresh coffee brewing",
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop"
    },
    {
      id: 2,
      alt: "Colorful fresh juices",
      src: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=400&fit=crop"
    },
    {
      id: 3,
      alt: "Artisan pastries",
      src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop"
    },
    {
      id: 4,
      alt: "Cozy cafe interior",
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=400&fit=crop"
    },
    {
      id: 5,
      alt: "Latte art",
      src: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=400&fit=crop"
    },
    {
      id: 6,
      alt: "Fresh ingredients",
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a visual journey through our cafe and discover the artistry behind every cup
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="aspect-square rounded-lg overflow-hidden shadow-lg hover-scale transform transition-all duration-300 hover:shadow-xl"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
