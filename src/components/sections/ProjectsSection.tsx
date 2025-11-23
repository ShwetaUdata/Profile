import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "OneIot Factory",
    url: "https://factory-zeta-livid.vercel.app/",
    description:
      "Real-Time Data Collection and Analytics: Captures live operational data directly from the factory floor, processes it instantly, and converts it into actionable insights. This enables continuous monitoring of machine performance, early detection of anomalies, and proactive issue resolution.",
    skills: ["React.js", "Tailwind CSS"],
  },
  {
    title: "Project Quotation Tools",
    url: "https://quotation-tools.vercel.app/",
    description:
      "A comprehensive tool designed to generate accurate and detailed project quotations by calculating costs, features, resources, and timelines based on user inputs. It automates the entire estimation process, reducing manual errors and ensuring consistency across all project proposals.",
    skills: ["React", "AWS"],
  },
  {
    title: "JIRA Work Management",
    url: "",
    description:
      "It is a task-tracking and collaboration tool designed for business teams, especially non-technical departments like marketing, HR, finance, and operations. The platform enables users to create tasks, assign them to team members, set deadlines, and monitor progress in real time.",
    skills: ["React", "Express", "MongoDB"],
  },
  {
    title: "Fitzone: Building a Dynamic Gym Website",
    url: "https://gym-alpha-puce.vercel.app/",
    description:
      "Fitzone is a simple yet user-friendly gym website designed to showcase fitness services, membership plans, and training programs. Developed using HTML, CSS, and JavaScript, the platform focuses on clean UI, responsive design, and smooth navigation.",
    skills: ["React", "Express", "MongoDB"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-24 animate-fade-in">
      <h2 className="section-title">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="p-6 card-hover shadow-lg flex flex-col"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-heading font-bold text-foreground flex-1">
                {project.title}
              </h3>
              {project.url && (
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-primary hover:text-accent"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </Button>
              )}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
              {project.skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  variant="outline"
                  className="border-primary text-primary"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
