
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Clock10 } from "lucide-react";




const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Visit us, call, or send us a message
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
               <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl">
                <MapPin className="w-6 h-6" />
              </div>

                <div>
                  <h3 className="font-semibold text-primary mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    123 Coffee Street<br />
                    Downtown District<br />
                    City, State 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl">
      <Phone className="w-6 h-6" />
    </div>

                <div>
                  <h3 className="font-semibold text-primary mb-2">Phone</h3>
                  <p className="text-muted-foreground">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                 <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl">
                <Clock10 className="w-6 h-6" />
              </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 6:00 AM - 8:00 PM<br />
                    Saturday - Sunday: 7:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div>
                <Input placeholder="Your Name" className="w-full" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" className="w-full" />
              </div>
              <div>
                <Input placeholder="Subject" className="w-full" />
              </div>
              <div>
                <Textarea placeholder="Your Message" rows={5} className="w-full" />
              </div>
              <Button className="w-full hover-scale">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
