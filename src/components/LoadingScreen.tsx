import { useEffect, useState } from "react";

export const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 25;  
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 50);
          return 100;
        }
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute inset-0 bg-hero-gradient rounded-full animate-pulse-soft"></div>
          <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              MA
            </span>
          </div>

           <div className="absolute inset-0 animate-spin">
            <div className="w-2 h-2 bg-primary rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
          </div>
          <div
            className="absolute inset-0 animate-spin"
            style={{ animationDelay: "0.5s", animationDirection: "reverse" }}
          >
            <div className="w-1.5 h-1.5 bg-accent rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>

         <div className="text-xl font-medium text-shimmer">
          Loading Portfolio
        </div>

         <div className="w-64 mx-auto">
          <div className="w-full bg-muted rounded-full h-1 overflow-hidden">
            <div
              className="h-full bg-hero-gradient rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute inset-0 bg-shimmer-gradient animate-slide-in-right"></div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground mt-2">
            {Math.round(Math.min(progress, 100))}%
          </div>
        </div>
      </div>
    </div>
  );
};
