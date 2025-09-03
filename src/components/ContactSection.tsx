import { useState } from 'react';
import { Send, Instagram, MessageCircle, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/eleviquecreations',
      color: 'hover:text-pink-500'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://api.whatsapp.com/send/?phone=917217832613&text&type=phone_number&app_absent=0',
      color: 'hover:text-green-500'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/profile.php?id=61572559022754&mibextid=wwXIfr&rdid=qhZHy7Ke9unQIvLQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1GHYCwUkkp%2F%3Fmibextid%3DwwXIfr#',
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-brand-dark/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your brand with AI-powered videos? Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="border-brand-primary/20 bg-card/50 backdrop-blur-sm hover-lift animate-fade-in">
            <CardHeader>
              <h3 className="text-2xl font-semibold text-foreground mb-2">Send us a message</h3>
              <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border-brand-primary/20 focus:border-brand-primary focus:ring-brand-primary/20"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-brand-primary/20 focus:border-brand-primary focus:ring-brand-primary/20"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full border-brand-primary/20 focus:border-brand-primary focus:ring-brand-primary/20 resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-primary text-brand-dark hover:bg-brand-primary/90 hover-lift font-semibold py-3"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-brand-dark mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social Links */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="border-brand-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <h3 className="text-xl font-semibold text-foreground mb-4">Connect with us</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Follow us on social media for the latest updates, behind-the-scenes content, 
                  and examples of our AI video creations.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center p-4 bg-brand-primary/5 border border-brand-primary/20 rounded-lg hover:bg-brand-primary/10 transition-all duration-300 hover-lift group ${social.color}`}
                    >
                      <social.icon className="h-6 w-6 mr-3 text-brand-primary group-hover:scale-110 transition-transform duration-200" />
                      <span className="font-medium text-foreground">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-primary/20 bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-brand-primary mb-3">Quick Response</h4>
                <p className="text-muted-foreground mb-4">
                  Need immediate assistance? WhatsApp us for the fastest response!
                </p>
                <Button
                  onClick={() => window.open('https://wa.me/917217832613?text=Hi%2C%20I%27m%20interested%20in%20your%20AI%20video%20services.', '_blank')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white hover-lift"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Now
                </Button>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-muted-foreground">
              <p>We typically respond within 2-4 hours during business hours</p>
              <p className="mt-1">Monday - Saturday: 9:00 AM - 8:00 PM IST</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;