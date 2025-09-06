import { useState } from "react";
import { Check, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const PricingSection = () => {
  const [openPanel, setOpenPanel] = useState<string | null>(null);

  const togglePanel = (panelId: string) => {
    setOpenPanel(openPanel === panelId ? null : panelId);
  };

  const packages = [
    {
      id: "essential",
      name: "Essential",
      subtitle: "(Rapid, polished AI ad)",
      badge: "Duration: up to 25 sec",
      price: "₹3,500",
      features: [
        "Realistic AI characters",
        "Clean edit",
        "Brand intro & messaging",
        "Professional voiceover + BG music",
        "Single product highlight",
        "End-card logo placement",
        "1 Free revision",
      ],
      miniPricing: [
        { label: "3 Videos", amount: "₹10,500" },
        { label: "5 Videos", amount: "₹17,000" },
        { label: "10 Videos", amount: "₹32,000" },
      ],
      suitable: "Fast promos, offers, product teasers, UGC-style reels.",
      process: [
        "Brief & asset intake (logo, product refs)",
        "Script & storyboard (quick approval)",
        "AI generation + clean edit",
        "Final Delivery",
      ],
    },
    {
      id: "impact",
      name: "Impact",
      subtitle: "(Brand film with premium product integration)",
      badge: "Duration: up to 40 sec",
      price: "₹5,000",
      features: [
        "Realistic AI characters + premium elements",
        "Advanced edit with tasteful transitions",
        "Story-led script engineered for reach",
        "Professional voiceover + BG music",
        "End-to-end product integration across scenes",
        "Advanced logo animation",
        "2 Free revisions",
        "VFX effects",
        "4:5 Instagram export",
      ],
      miniPricing: [
        { label: "3 Videos", amount: "₹15,000" },
        { label: "5 Videos", amount: "₹24,500" },
        { label: "10 Videos", amount: "₹47,000" },
      ],
      suitable:
        "Product showcases, launch films, performance creatives with premium look.",
      process: [
        "Brief & asset intake (logo, product refs)",
        "Script & storyboard (quick approval)",
        "AI generation + clean edit",
        "Final Delivery",
      ],
    },
    {
      id: "signature",
      name: "Signature",
      subtitle: "(Flagship luxury brand film — full cinematic)",
      badge: "Duration: 30–60 sec",
      price: "₹30,000",
      features: [
        "TV-grade visuals & finishing",
        "Premium cinematic edit",
        "Full narrative arcs & storytelling",
        "Professional voiceover + BG music",
        "Complete brand integration across shots",
        "Campaign brand kit",
        "3 Free revisions",
        "Complex, dynamic camera moves",
        "3–5 custom HD/3D images",
        "Dedicated project manager & oversight",
      ],
      miniPricing: [
        { label: "1 Video", amount: "Starting ₹30,000" },
        { label: "3/5/10 Videos", amount: "Price on request" },
      ],
      suitable:
        "Luxury campaigns, hero films, high-polish cinematic brand storytelling.",
      process: [
        "Brief & asset intake (logo, product refs)",
        "Script & storyboard (quick approval)",
        "AI generation + clean edit",
        "Final Delivery",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-b from-brand-dark/90 via-brand-dark/70 to-brand-dark/90"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-4">
            Elevique — Pricing Packages
          </h2>
          <p className="text-lg text-brand-secondary max-w-2xl mx-auto">
            Transform your brand with AI-powered video creation. No shoots, no
            crew — just high-converting viral content.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.id}
              className="relative border-brand-primary/20 bg-gradient-to-b from-brand-dark/60 via-brand-dark/40 to-brand-dark/60 
              transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-primary/20 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                {/* Package Name */}
                <h3
                  className="text-2xl font-bold text-brand-primary mb-1 
                  transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-secondary 
                  group-hover:bg-clip-text group-hover:text-transparent"
                >
                  {pkg.name}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-brand-secondary mb-4 transition-colors duration-300 group-hover:text-brand-primary">
                  {pkg.subtitle}
                </p>

                {/* Badge */}
                <div
                  className="inline-block px-3 py-1 bg-brand-primary/10 border border-brand-primary/30 
                  rounded-full text-xs text-brand-secondary mb-4 
                  transition-all duration-300 group-hover:bg-brand-primary/20 group-hover:text-brand-primary"
                >
                  {pkg.badge}
                </div>

                {/* Price */}
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-sm text-brand-primary transition-colors duration-300 group-hover:text-brand-secondary">
                    Starting
                  </span>
                  <span
                    className="text-2xl font-bold text-brand-primary 
                    transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-brand-secondary group-hover:to-brand-primary 
                    group-hover:bg-clip-text group-hover:text-transparent"
                  >
                    {pkg.price}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-brand-secondary"
                    >
                      <Check className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Mini Pricing Table */}
                <div className="bg-brand-dark/70 border border-brand-primary/20 rounded-lg overflow-hidden">
                  {pkg.miniPricing.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center px-4 py-3 border-t border-brand-primary/10 first:border-t-0"
                    >
                      <span className="text-sm text-brand-secondary">
                        {item.label}
                      </span>
                      <span className="text-sm font-semibold text-brand-primary">
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => togglePanel(pkg.id)}
                  className="w-full bg-transparent border-brand-primary text-brand-primary hover:bg-brand-primary/10 hover:text-brand-primary transition-all duration-300"
                  variant="outline"
                >
                  Explore
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detail Panels */}
        {packages.map((pkg) => (
          <div
            key={`panel-${pkg.id}`}
            className={`transition-all duration-500 overflow-hidden ${
              openPanel === pkg.id
                ? "max-h-screen opacity-100 mb-8"
                : "max-h-0 opacity-0"
            }`}
          >
            <Card className="border-brand-primary/30 bg-gradient-to-br from-brand-dark/70 via-brand-dark/50 to-brand-dark/70 glow-card">
              <CardHeader>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <h3 className="text-2xl font-bold text-brand-primary">
                    {pkg.name} — Details
                  </h3>
                  <div className="flex gap-3">
                    <Button
                      variant="ghost"
                      onClick={() => setOpenPanel(null)}
                      className="text-brand-secondary hover:text-brand-primary"
                    >
                      <X className="mr-2 h-4 w-4" />
                      Close
                    </Button>
                    <Button
                      className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90"
                      onClick={() =>
                        window.open(
                          "https://wa.me/917217832613?text=Hey%2C%20I%20want%20to%20get%20Ai%20content%20created%20for%20my%20brand.",
                          "_blank"
                        )
                      }
                    >
                      Consult Now
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="mb-6">
                  <p className="text-brand-primary font-semibold mb-2">
                    Smart Brands Save Lakhs With AI-Powered visuals…
                  </p>
                  <p className="text-brand-secondary">
                    No actual shoots, crew, locations.
                  </p>
                  <p className="text-brand-secondary">
                    Just high-converting, viral AI Content!
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-brand-dark/50 border border-brand-primary/20 rounded-lg p-6">
                      <h4 className="text-brand-secondary font-semibold mb-3">
                        Suitable for
                      </h4>
                      <p className="text-sm text-brand-secondary mb-6">
                        {pkg.suitable}
                      </p>

                      <h4 className="text-brand-secondary font-semibold mb-3">
                        Process
                      </h4>
                      <ol className="space-y-2">
                        {pkg.process.map((step, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-brand-secondary"
                          >
                            {idx + 1}. {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>

                  <div>
                    <div className="bg-brand-dark/50 border border-brand-primary/20 rounded-lg p-6">
                      <h4 className="text-brand-secondary font-semibold mb-4">
                        Pricing
                      </h4>
                      <div className="space-y-3">
                        {pkg.miniPricing.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center p-3 bg-brand-dark/70 border border-brand-primary/10 rounded-lg"
                          >
                            <span className="text-sm text-brand-secondary">
                              {item.label}
                            </span>
                            <span className="font-semibold text-brand-primary">
                              {item.amount}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 p-4 bg-brand-primary/5 border border-brand-primary/20 rounded-lg">
                        <h5 className="text-brand-secondary font-semibold mb-2">
                          Notes
                        </h5>
                        <ul className="space-y-2 text-xs text-brand-secondary">
                          <li>
                            • The AI videos created may be showcased as
                            testimonials on our website and social media. If you
                            have any concerns, feel free to let us know.
                          </li>
                          <li>
                            • Also, any exceptional editing or product
                            showcasing might have additional charges. If
                            applicable, you will be notified before processing
                            of the video.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
