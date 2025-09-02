import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Zap, Users } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "@/hooks/useScrollAnimation";

interface Highlight {
  icon: React.ComponentType;
  title: string;
  description?: string;
}

interface TechBadgeProps {
  name: string;
}

const TechBadge = ({ name }: TechBadgeProps) => (
  <Badge
    variant="secondary"
    className="px-3 py-1 bg-card border border-border hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
  >
    {name}
  </Badge>
);

const HighlightCard = ({ highlight }: { highlight: Highlight }) => {
  const { icon: Icon, title, description } = highlight;
  return (
    <Card className="stagger-item p-6 bg-card/50 border border-border backdrop-blur-sm card-hover group magnetic">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-3 rounded-full bg-hero-gradient/10 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </Card>
  );
};

export const AboutSection = () => {
  const titleRef = useScrollAnimation("animate-fade-in-up", {
    triggerOnce: true,
  });
  const imageRef = useScrollAnimation("animate-scale-in", {
    triggerOnce: true,
  });
  const contentRef = useScrollAnimation("animate-slide-in-right", {
    triggerOnce: true,
  });

  const highlights: Highlight[] = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code following best practices.",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description:
        "Creating beautiful, intuitive interfaces that users love to interact with.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed, accessibility, and great user experience.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working effectively with teams to deliver projects on time and within scope.",
    },
  ];

  const technologies = [
    "React",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "MongoDB",
    "Docker",
    "Figma",
    "Git",
    "GraphQL",
    "Next.js",
  ];

  const highlightsRef = useStaggerAnimation(
    highlights,
    "animate-fade-in-up",
    150
  );

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16" ref={titleRef}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About{" "}
              <span className="bg-gradient-animated bg-clip-text text-transparent text-shimmer">
                Me
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate developer with 5+ years of experience building
              digital solutions that make a difference in people's lives.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6" ref={imageRef}>
              <div className="relative group">
                <img
                  src={profileImage}
                  alt="Mohamed Ashiq"
                  className="w-80 h-80 object-cover rounded-2xl mx-auto shadow-card transition-all duration-500 group-hover:scale-105 group-hover:rotate-2"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-hero-gradient rounded-full blur-2xl opacity-50 animate-pulse-soft" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/30 rounded-full blur-xl opacity-60 animate-float" />
              </div>
            </div>

            <div className="space-y-8" ref={contentRef}>
              <div>
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className="text-muted-foreground mb-4">
                  Started my journey as a self-taught developer with a passion
                  for problem-solving and creating digital experiences. Over the
                  years, I've worked with startups and established companies,
                  helping them build scalable web applications.
                </p>
                <p className="text-muted-foreground mb-4">
                  I specialize in full-stack development with a strong focus on
                  user experience, performance optimization, and clean,
                  maintainable code. I love learning new technologies and
                  staying up-to-date with industry trends.
                </p>
                <p className="text-muted-foreground">
                  When I'm not coding, you can find me contributing to
                  open-source projects, writing technical blog posts, or
                  exploring the latest in web development.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">
                  Technologies I Work With
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            ref={highlightsRef}
          >
            {highlights.map((highlight) => (
              <HighlightCard key={highlight.title} highlight={highlight} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
