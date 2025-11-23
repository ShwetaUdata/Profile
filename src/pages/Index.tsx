import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DetailsSection from "@/components/sections/DetailsSection";
import InternshipSection from "@/components/sections/InternshipSection";
import EducationSection from "@/components/sections/EducationSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import DownloadSection from "@/components/sections/DownloadSection";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-secondary/20 to-background">
      <Header />
      
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 bg-card/80 backdrop-blur-sm shadow-md hover:bg-card lg:hidden"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <Menu className="h-5 w-5" />
      </Button>

      <div className="flex flex-1 relative">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main 
          className={`flex-1 transition-all duration-300 ${
            sidebarOpen ? 'lg:ml-80' : 'ml-0'
          }`}
        >
          <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-6xl space-y-16">
            <DetailsSection />
            <InternshipSection />
            <EducationSection />
            <SkillsSection />
            <ProjectsSection />
            <CertificatesSection />
            <DownloadSection />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
