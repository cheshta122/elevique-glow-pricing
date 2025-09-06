import { useTheme } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FloatingSocial from "@/components/FloatingSocial";
import { VideoGrid } from "@/components/video-grid";
import AIImagesPricing from "@/components/ai-images-pricing";

const Index = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation isDark={theme === 'dark'} toggleTheme={toggleTheme} />
      
      {/* Floating Social Icons */}
      <FloatingSocial />
      
      {/* Hero Section */}
      <section id="home" className="pt-20 pb-10 bg-gradient-to-br from-background via-background to-brand-primary/5 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-brand-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary bg-clip-text text-transparent">
                Transform Your Brand with AI Powered Visuals Creation

              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              No shoots, no crew, no locations — just high-converting, viral AI content that saves you lakhs in production costs.

            </p>
            
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-brand-primary text-brand-dark font-semibold rounded-lg hover:bg-brand-primary/90 hover-lift transition-all duration-300 text-lg"
              >
                View Pricing
              </button>
              <button
                onClick={() => window.open('https://wa.me/917217832613?text=Hi%2C%20I%27m%20interested%20in%20your%20AI%20video%20services.', '_blank')}
                className="px-8 py-4 bg-transparent border-2 border-brand-primary text-brand-primary font-semibold rounded-lg hover:bg-brand-primary hover:text-brand-dark hover-lift transition-all duration-300 text-lg"
              >
                Get Started
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-primary/20">
                  <span className="text-2xl">🎬</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-primary mb-2">AI-Powered Creation</h3>
                <p className="text-sm text-muted-foreground">Cutting-edge AI technology creates realistic characters and scenarios</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-primary/20">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-primary mb-2">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground">From brief to final video in 3-14 days, depending on complexity</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-primary/20">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-primary mb-2">Cost Effective</h3>
                <p className="text-sm text-muted-foreground">Save lakhs compared to traditional video production</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <PricingSection />

      {/*AI Images Section */}
      <AIImagesPricing />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/*video grid section*/}
      <VideoGrid/>
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-brand-dark/10 border-t border-brand-primary/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                Elevique
              </h3>
              <p className="text-sm text-muted-foreground mt-1">AI-Powered Video Creation</p>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p>&copy; 2024 Elevique. All rights reserved.</p>
              <p className="mt-1">Transforming brands with AI technology</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
