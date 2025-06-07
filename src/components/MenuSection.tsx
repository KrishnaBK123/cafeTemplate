
const MenuSection = () => {
  const menuCategories = [
    {
      title: "Beverages",
      items: [
        { 
          name: "Espresso", 
          price: "$3.50", 
          description: "Rich and bold single shot",
          image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=100&h=100&fit=crop"
        },
        { 
          name: "Cappuccino", 
          price: "$4.50", 
          description: "Perfect blend of espresso and steamed milk",
          image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=100&h=100&fit=crop"
        },
        { 
          name: "Iced Latte", 
          price: "$5.00", 
          description: "Smooth espresso with cold milk and ice",
          image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=100&h=100&fit=crop"
        },
        { 
          name: "Green Tea", 
          price: "$3.00", 
          description: "Organic loose leaf green tea",
          image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=100&h=100&fit=crop"
        }
      ]
    },
    {
      title: "Fresh Juices",
      items: [
        { 
          name: "Orange Juice", 
          price: "$4.00", 
          description: "Freshly squeezed Valencia oranges",
          image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=100&h=100&fit=crop"
        },
        { 
          name: "Green Smoothie", 
          price: "$6.50", 
          description: "Spinach, apple, banana, and lime",
          image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=100&h=100&fit=crop"
        },
        { 
          name: "Berry Blast", 
          price: "$6.00", 
          description: "Mixed berries with Greek yogurt",
          image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=100&h=100&fit=crop"
        },
        { 
          name: "Tropical Mix", 
          price: "$5.50", 
          description: "Pineapple, mango, and coconut water",
          image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=100&h=100&fit=crop"
        }
      ]
    },
    {
      title: "Snacks",
      items: [
        { 
          name: "Croissant", 
          price: "$3.50", 
          description: "Buttery, flaky French pastry",
          image: "https://t4.ftcdn.net/jpg/01/53/41/53/360_F_153415341_JBUAbThjrPfBkVygG5aFnw7NmF9bnt8x.jpg"
        },
        { 
          name: "Avocado Toast", 
          price: "$8.00", 
          description: "Sourdough with fresh avocado and herbs",
          image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=100&h=100&fit=crop"
        },
        { 
          name: "Blueberry Muffin", 
          price: "$4.00", 
          description: "Fresh baked with organic blueberries",
          image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=100&h=100&fit=crop"
        },
        { 
          name: "Granola Bowl", 
          price: "$7.50", 
          description: "House-made granola with fresh fruit",
          image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=100&h=100&fit=crop"
        }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Menu</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our carefully curated selection of beverages, fresh juices, and artisan snacks
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {menuCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card p-8 rounded-lg shadow-lg hover-scale transform transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-primary mb-6 text-center border-b border-border pb-4">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-card-foreground">{item.name}</h4>
                        <span className="font-bold text-primary ml-4">{item.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
