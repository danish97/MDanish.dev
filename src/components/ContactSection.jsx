import { Linkedin, Mail, MapPin, PinIcon } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Let's Get In <span className="text-primary">Touch</span>
        </h2>
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 p-6 bg-primary/20 rounded-lg gap-6">
          
              <div className="flex items-center gap-4 mx-auto">
                <div className="bg-primary/80 rounded-full p-4">
                  <Mail size={24} />
                </div>
                <div>
                  <a href="mailto:danishayaz97@gmail.com" className="font-bold">
                    danishayaz97@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 mx-auto">
                <div className="bg-primary/80 rounded-full p-4">
                  <Linkedin size={24} />
                </div>
                <div>
                  <a href="https://linkedin.com/in/danishwbb" target="_blank" className="font-bold">
                    Muhammad Danish
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 mx-auto">
                <div className="bg-primary/80 rounded-full p-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <a className="font-bold">
                    Lahore, Pakistan
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
