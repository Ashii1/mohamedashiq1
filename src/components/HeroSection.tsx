import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import { useParallax } from "@/hooks/useScrollAnimation";

interface HeroSectionProps {
  onScrollToSection: (section: string) => void;
}

interface SocialIconProps {
  href: string;
  icon: React.ComponentType;
  delay?: number;
}

const SocialIcon = ({ href, icon: Icon, delay = 0 }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-card/50 border border-border hover:bg-card hover:scale-125 hover:rotate-12  "
  >
    <Icon className="w-6 h-6" />
  </a>
);

interface HeroButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant: "premium" | "glass";
  delay?: number;
}

const HeroButton = ({
  onClick,
  children,
  variant,
  delay = 0,
}: HeroButtonProps) => (
  <Button
    size="xl"
    variant={variant}
    onClick={onClick}
    className="group relative overflow-hidden animate-scale-in"
    style={{ animationDelay: `${delay}s` }}
  >
    <span className="relative z-10">{children}</span>
  </Button>
);

interface FloatingElementProps {
  className: string;
  style?: React.CSSProperties;
}

const FloatingElement = ({ className, style }: FloatingElementProps) => (
  <div
    className={`absolute rounded-full blur-3xl animate-float ${className}`}
    style={style}
  />
);

export const HeroSection = ({ onScrollToSection }: HeroSectionProps) => {
  const parallaxRef = useParallax(-0.3);

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(34, 40, 49, 0.8)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
       <div className="absolute inset-0 overflow-hidden" ref={parallaxRef}>
        <FloatingElement className="top-1/4 left-1/4 w-64 h-64 bg-primary/20 animate-morph" />
        <FloatingElement
          className="bottom-1/3 right-1/4 w-80 h-80 bg-accent/20 animate-float-delayed"
          style={{ animationDelay: "1s" }}
        />
        <FloatingElement
          className="top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 animate-pulse-soft"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
            <Sparkles className="w-8 h-8 text-primary/60 absolute -top-4 -left-8 animate-pulse-soft" />
          <Sparkles
            className="w-6 h-6 text-accent/60 absolute -top-2 -right-6 animate-pulse-soft"
            style={{ animationDelay: "0.5s" }}
          />

           <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-foreground animate-slide-in-left">
              Hello, I'm
            </span>
            <span className="block bg-gradient-animated bg-clip-text text-transparent animate-slide-in-right text-shimmer">
              Mohamed Ashiq
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in-right"
            style={{ animationDelay: 0.2 }}
          >
            Front End Developer
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-in-right">
            I create beautiful, functional, and user-centered digital
            experiences. Passionate about clean code, innovative design, and
            solving complex problems.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <HeroButton
              onClick={() => onScrollToSection("projects")}
              variant="premium"
              delay={0.6}
            >
              View My Work
            </HeroButton>
            <HeroButton
              onClick={() => onScrollToSection("contact")}
              variant="glass"
              delay={0.6}
            >
              Get In Touch
            </HeroButton>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <SocialIcon href="https://github.com" icon={Github} />
            <SocialIcon
              href="https://linkedin.com"
              icon={Linkedin}
              delay={0.5}
            />
            <SocialIcon href="mailto:alex@example.com" icon={Mail} delay={1} />
          </div>
        </div>
      </div>
    </section>
  );
};
