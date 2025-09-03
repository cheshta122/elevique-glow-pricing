import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-brand-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-brand-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="text-center relative z-10 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Oops! Page not found
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved to a different location.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => window.history.back()}
            variant="outline"
            className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-dark hover-lift"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button
            onClick={() => window.location.href = '/'}
            className="bg-brand-primary text-brand-dark hover:bg-brand-primary/90 hover-lift"
          >
            <Home className="mr-2 h-4 w-4" />
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
