

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">BrewCafé</h3>
            <p className="text-primary-foreground/80 mb-4">
              Serving exceptional coffee, fresh juices, and artisan snacks since 2020.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:scale-105 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM12 8a4 4 0 110 8 4 4 0 010-8zm6.5-.25a1 1 0 110 2 1 1 0 010-2zM12 10a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
              </div>
                  <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:scale-105 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="w-4 h-4 fill-white"
                      fill="currentColor"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91V129.09c0-25.35 
                        12.42-50.06 52.24-50.06H293V6.26S259.5 0 
                        225.36 0c-73.22 0-121.36 44.38-121.36 
                        124.72v70.62H22.89V288h81.11v224h100.2V288z" />
                    </svg>
                  </div>


             <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center hover:scale-105 cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-4 h-4 fill-white"
                  fill="currentColor"
                >
                  <path d="M459.4 151.7c.3 4.1.3 8.2.3 
                  12.4 0 126.1-95.9 271.5-271.5 
                  271.5-54 0-104.3-15.8-146.5-42.9 
                  7.4.9 14.8 1.2 22.5 1.2 44.8 
                  0 86-15.2 118.8-41.1-42-1-77.5-28.5-89.7-66.7 
                  5.9.9 11.5 1.5 17.4 1.5 8.4 
                  0 16.5-1.2 24.3-3.3-44-8.9-77.1-47.8-77.1-94.3 
                  0-.3 0-.3 0-.6 13 7.2 28 11.5 
                  44 12-26.1-17.4-43.2-47.1-43.2-81 
                  0-17.7 4.8-34.3 13.2-48.6 
                  48.3 59.3 120.3 98.1 201.5 
                  102.1-1.5-7.2-2.4-14.8-2.4-22.5 
                  0-54.3 44.3-98.6 98.6-98.6 
                  28.5 0 54.3 12 72.4 31.4 
                  22.5-4.1 43.8-12.6 62.8-24 
                  -7.4 23.1-23.1 42.6-43.8 54.9 
                  20.1-2.1 39.2-7.7 57-15.3 
                  -13.5 19.8-30.4 37.4-49.8 51.4z" />
                </svg>
              </div>

            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#home" className="hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#menu" className="hover:text-primary-foreground transition-colors">Menu</a></li>
              <li><a href="#gallery" className="hover:text-primary-foreground transition-colors">Gallery</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Coffee & Espresso</li>
              <li>Fresh Juices</li>
              <li>Smoothies</li>
              <li>Pastries & Snacks</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>123 Coffee Street</p>
              <p>City, State 12345</p>
              <p>(555) 123-4567</p>
              <p>hello@brewcafe.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 BrewCafé. All rights reserved. Made with ❤️ for coffee lovers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
