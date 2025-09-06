import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navigation = ({ isDark, toggleTheme }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Pricing", id: "pricing" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ✅ Logo (Left) */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("home")}
              className="focus:outline-none"
            >
              <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm"></div>
              <img
                src="/logo.png"
                alt="Elevique Logo"
                className="h-[90px] w-auto drop-shadow-[0_0_8px_rgba(0,255,200,0.5)] hover:drop-shadow-[0_0_14px_rgba(0,255,200,0.8)] transition-all duration-300"
              />
            </button>
          </div>

          {/* ✅ Right Side: Theme Toggle + Navigation + Mobile Menu */}
          <div className="flex items-center space-x-4 ml-auto">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2 hover:bg-brand-primary/10 hover:text-brand-primary transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Desktop Navigation (Right aligned) */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-brand-primary link-underline font-medium transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 hover:bg-brand-primary/10 hover:text-brand-primary transition-colors"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* ✅ Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border border-border rounded-lg mt-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-brand-primary hover:bg-brand-primary/10 rounded-md transition-colors duration-200 w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
