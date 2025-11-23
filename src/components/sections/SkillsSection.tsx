import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Database, FileCode } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
    color: "text-blue-500",
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Express.js", "Node.js", "AWS"],
    color: "text-green-500",
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL"],
    color: "text-purple-500",
  },
  {
    title: "Programming Language",
    icon: FileCode,
    skills: ["Python"],
    color: "text-orange-500",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-24 animate-fade-in">
      <h2 className="section-title">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card
              key={index}
              className="p-6 card-hover shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-primary/10`}>
                  <Icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
