import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";

const certificates = [
  "Basics of Python",
  "JavaScript",
  "Responsive Web Development with HTML and CSS",
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="scroll-mt-24 animate-fade-in">
      <h2 className="section-title">Certificates</h2>
      <Card className="p-6 md:p-8 shadow-lg">
        <ul className="space-y-4">
          {certificates.map((cert, index) => (
            <li
              key={index}
              className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <div className="p-2 rounded-lg bg-accent/10">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <span className="text-foreground font-medium">{cert}</span>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default CertificatesSection;
