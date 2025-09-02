import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import resume from "../assets/Mohamed Ashiq.pdf";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  FileText,
} from "lucide-react";

interface ContactInfo {
  icon: React.ComponentType;
  label: string;
  value: string;
  link: string;
}

interface SocialLink {
  icon: React.ComponentType;
  label: string;
  url: string;
}

const ContactCard = ({ info }: { info: ContactInfo }) => (
  <a
    href={info.link}
    className="flex items-center gap-4 p-5 rounded-xl card-premium transition-transform hover:scale-105"
  >
    <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
      <info.icon className="w-6 h-6 text-primary" />
    </div>
    <div>
      <h4 className="font-medium">{info.label}</h4>
      <p className="text-muted-foreground">{info.value}</p>
    </div>
  </a>
);

const SocialButton = ({ social }: { social: SocialLink }) => (
  <a
    href={social.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={social.label}
    className="p-4 rounded-full card-premium transition-transform hover:scale-125"
  >
    <social.icon className="w-6 h-6" />
  </a>
);

const InfoListCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Card className="p-8 rounded-2xl shadow-md">
    <h4 className="font-semibold mb-4 text-premium text-lg">{title}</h4>
    {children}
  </Card>
);

export const ContactSection = () => {
  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      label: "Email",
      value: "ashiiqash@gmail.com",
      link: "mailto:ashiiqash@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 95854 86743",
      link: "tel:+919585486743",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu",
      link: "#",
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/mohamedashiq",
    },
    { icon: Github, label: "GitHub", url: "https://github.com/mohamedashiq" },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com/mohamedashiq",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s{" "}
            <span className="bg-hero-gradient bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm actively looking for opportunities and collaborations. Reach me
            instantly through the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="p-10 rounded-2xl shadow-lg flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-8 text-premium text-center">
              Direct Contact
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <ContactCard key={info.label} info={info} />
              ))}
            </div>

            <div className="mt-10">
              <Button asChild variant="premium" size="lg" className="w-full">
                <a
                  href={resume}
                  download="MohamedAshiq-Resume.pdf"
                  className="flex items-center px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>
            </div>
          </Card>

          {/* Social + Why Reach Out */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Find Me Online</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <SocialButton key={social.label} social={social} />
                ))}
              </div>
            </div>

            <InfoListCard title="Why Reach Out?">
              <p className="text-muted-foreground text-sm mb-4">
                I’m open to opportunities where I can contribute, learn, and
                grow. Let’s build impactful solutions together.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Full-time positions</li>
                <li>• Freelance / contract work</li>
                <li>• Open-source collaborations</li>
                <li>• Speaking & mentoring</li>
              </ul>
            </InfoListCard>
          </div>
        </div>
      </div>
    </section>
  );
};
