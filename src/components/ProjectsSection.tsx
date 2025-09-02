import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Eye,
  Users,
  BarChart3,
  Bot,
  CreditCard,
  MonitorSmartphone,
  DollarSign,
} from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Digital Revenue Collection System",
      description:
        "A system designed to improve transparency and efficiency in revenue collection by streamlining operations and reporting for both admin and individual users.",
      contributions: [
        "Resolved UI-related issues to enhance usability",
        "Developed detailed reporting functionalities for users and admins",
        "Streamlined revenue collection processes, improving transparency",
        "Ensured seamless user experience across activity-tracking modules",
      ],
      image: null,
      icon: DollarSign,
      technologies: ["React JS", "Tailwind CSS", "TypeScript", "Material UI"],
      liveUrl: "",
      githubUrl: "",
      featured: true,
      category: "FinTech",
    },
    {
      id: 2,
      title: "Novatrack",
      description:
        "An integrated merchant and operations portal connected with mPOS machines to simplify transactions, dispute resolution, and merchant management.",
      contributions: [
        "Led front-end development for merchant and operational portals",
        "Built user-friendly interfaces for multi-merchant transactions",
        "Designed and implemented dispute resolution workflows",
        "Ensured cross-portal consistency and smooth external/internal integration",
      ],
      image: null,
      icon: MonitorSmartphone,
      technologies: [
        "React JS",
        "Next JS",
        "Node JS",
        "Express",
        "MongoDB",
        "Tailwind CSS",
      ],
      liveUrl: "",
      githubUrl: "",
      featured: true,
      category: "Payments",
    },
    {
      id: 3,
      title: "Debit Card Management System",
      description:
        "A scalable system enabling banks to manage debit cards, offering feature customization and multi-card operations for personalized banking experiences.",
      contributions: [
        "Developed intuitive front-end interfaces for card management",
        "Enabled customization of features like PIN length and card numbers",
        "Created dynamic solutions to support multiple card operations",
        "Ensured responsive and scalable design for diverse user needs",
      ],
      image: null,
      icon: CreditCard,
      technologies: [
        "React JS",
        "Node JS",
        "Express",
        "MongoDB",
        "Tailwind CSS",
      ],
      liveUrl: "",
      githubUrl: "",
      featured: true,
      category: "Banking",
    },
    {
      id: 4,
      title: "AI-Powered Chatbot",
      description:
        "A chatbot powered by GPT APIs for customer support automation, FAQ handling, and ticket escalation. Includes conversation flow manager, context memory, and analytics dashboard.",
      contributions: [
        "Integrated OpenAI API for intelligent responses",
        "Implemented conversation memory for context-aware chats",
        "Built admin dashboard to monitor user interactions",
        "Deployed scalable backend with Node.js & Express",
      ],
      image: "/chatbot-project.png",
      icon: Bot,
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Gemini API",
        "Tailwind CSS",
      ],
      liveUrl: "https://chatbot-demo.example.com",
      githubUrl: "https://github.com/yourusername/chatbot-project",
      featured: true,
      category: "AI/ML",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured{" "}
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my professional and personal projects, including
              fintech platforms, merchant portals, card management systems, and
              AI-driven applications.
            </p>
          </div>

          <div className="space-y-16 mb-20">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-cols-2" : ""
                }`}
              >
                <div
                  className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div>
                    <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                      {project.category}
                    </Badge>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {project.contributions && (
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {project.contributions.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}

                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="px-3 py-1 bg-card border border-border"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {project.liveUrl && project.githubUrl && (
                    <div className="flex space-x-4">
                      <Button asChild variant="premium" size="lg">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Eye className="w-5 h-5 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="glass" size="lg" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5 mr-2" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  )}
                </div>

                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="card-premium rounded-xl relative overflow-hidden group">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <project.icon className="w-20 h-20 text-primary opacity-80" />
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
