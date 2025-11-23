import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "eLogic Tech",
    role: "Intern – Web Development",
    status: "Present",
    date: "15 Jul 2025",
    description:
      "Working on frontend development using React.js to build responsive, interactive, and optimized user interfaces. Actively supporting backend workflows by integrating cloud-based features using AWS services such as Lambda, API Gateway, DynamoDB, S3, and IoT Core. Involved in creating serverless APIs, handling real-time data flows, managing cloud storage, and improving system performance.",
  },
  {
    company: "Vector India",
    role: "MERN Stack Developer",
    date: "26 Jul 2024 - 26 Jan 2025",
    description:
      "Certification in MERN Stack Development with practical, hands-on experience. Worked on building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Contributed to creating REST APIs, developing responsive user interfaces, managing database operations, and optimizing application performance.",
  },
  {
    company: "Agrwal Technology Pvt Ltd",
    role: "Full Stack Web Development",
    date: "04 Feb 2024 - 01 Apr 2024",
    description:
      "Certification in Full Stack Web Development. Learned to build complete and functional websites using HTML, CSS, and JavaScript. Designed and developed fully responsive web pages, managed form handling and validations, and implemented interactive features to enhance user experience.",
  },
];

const InternshipSection = () => {
  return (
    <section id="internship" className="scroll-mt-24 animate-fade-in">
      <h2 className="section-title">Internship Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card
            key={index}
            className="p-6 md:p-8 card-hover shadow-lg border-l-4 border-l-primary"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 rounded-lg bg-primary/10">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    {exp.company}
                  </h3>
                  <p className="text-muted-foreground font-medium">{exp.role}</p>
                </div>
              </div>
              {exp.status && (
                <Badge className="bg-accent text-accent-foreground w-fit">
                  {exp.status}
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-3">{exp.date}</p>
            <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default InternshipSection;
