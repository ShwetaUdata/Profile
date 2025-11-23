import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import resume from "../../SHWETA UDATA - 9404906271.pdf";

const DownloadSection = () => {
  const handleDownload = () => {
    // Use the imported resume URL so Vite serves the file correctly
    const link = document.createElement("a");
    link.href = resume;
    // Set a friendly filename for download
    link.download = "Shweta-Udata-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="download" className="scroll-mt-24 animate-fade-in">
      <Card className="p-8 md:p-12 text-center shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Download My Resume
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Get a comprehensive overview of my skills, experience, and achievements
        </p>
        <Button
          size="lg"
          onClick={handleDownload}
          className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 transition-opacity shadow-lg"
        >
          <Download className="w-5 h-5 mr-2" />
          Download Resume
        </Button>
      </Card>
    </section>
  );
};

export default DownloadSection;
