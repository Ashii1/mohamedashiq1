import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Globe, Database, Cloud, Palette, Code2 } from "lucide-react";
import {
  useScrollAnimation,
  useStaggerAnimation,
} from "@/hooks/useScrollAnimation";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<any>;
  color: string;
  skills: Skill[];
}

interface Stat {
  number: string;
  label: string;
}

// Only include skills you have
const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Globe,
    color: "text-blue-500",
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "text-green-500",
    skills: [{ name: "Node.js", level: 90 }],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    color: "text-orange-500",
    skills: [{ name: "Docker", level: 88 }],
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    color: "text-pink-500",
    skills: [{ name: "Figma", level: 90 }],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    color: "text-cyan-500",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
    ],
  },
];

const STATS: Stat[] = [
  { number: "7+", label: "Projects Completed" },
  { number: "2+", label: "Years of Experience" },
  { number: "10+", label: "Technologies Mastered" },
  { number: "3+", label: "Industry Domains Worked In" },
  { number: "100%", label: "Commitment to Clean, Scalable Code" },
  { number: "5+", label: "Collaborative Teams Worked With" },
  { number: "∞", label: "Passion for Continuous Learning" },
];

const SkillCard = ({ category }: { category: SkillCategory }) => (
  <Card className="stagger-item p-6 bg-card/50 border border-border backdrop-blur-sm card-hover group magnetic animate-tilt">
    <div className="flex items-center space-x-3 mb-4">
      <div className="p-2 rounded-lg bg-secondary group-hover:scale-110 transition-transform duration-300">
        <category.icon className={`w-6 h-6 ${category.color}`} />
      </div>
      <h3 className="text-lg font-semibold">{category.title}</h3>
    </div>
    <div className="space-y-4">
      {category.skills.map((skill) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">{skill.name}</span>
            <span className="text-xs text-muted-foreground">
              {skill.level}%
            </span>
          </div>
          <Progress value={skill.level} className="h-2 bg-muted" />
        </div>
      ))}
    </div>
  </Card>
);

export const SkillsSection = () => {
  const titleRef = useScrollAnimation("animate-fade-in-up", {
    triggerOnce: true,
  });
  const skillsRef = useStaggerAnimation(
    SKILL_CATEGORIES,
    "animate-scale-in",
    200
  );
  const statsRef = useScrollAnimation("animate-slide-up", {
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16" ref={titleRef}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills &{" "}
            <span className="bg-gradient-animated bg-clip-text text-transparent text-shimmer">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive skill set spanning the entire development lifecycle,
            from design to deployment.
          </p>
        </div>

        {/* Skill Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={skillsRef}
        >
          {SKILL_CATEGORIES.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>

        {/* Stats */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          ref={statsRef}
        >
          {STATS.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-animated bg-clip-text text-transparent mb-2 group-hover:animate-bounce-subtle transition-all duration-300">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
