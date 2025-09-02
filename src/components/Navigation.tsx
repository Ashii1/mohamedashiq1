import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

interface MenuItem {
  id: string;
  label: string;
}

const MENU_ITEMS: MenuItem[] = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const NavItem = ({
  item,
  isActive,
  onClick,
}: {
  item: MenuItem;
  isActive: boolean;
  onClick: (id: string) => void;
}) => (
  <button
    onClick={() => onClick(item.id)}
    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
    }`}
  >
    {item.label}
    {isActive && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-hero-gradient rounded-full" />
    )}
  </button>
);

export const Navigation = ({
  activeSection,
  onSectionClick,
}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
          Portfolio
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {MENU_ITEMS.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              isActive={activeSection === item.id}
              onClick={onSectionClick}
            />
          ))}
        </div>

        <Button
          onClick={() => onSectionClick("contact")}
          className="hidden md:block bg-hero-gradient text-primary-foreground hover:opacity-90"
        >
          Get In Touch
        </Button>
      </div>
    </nav>
  );
};
