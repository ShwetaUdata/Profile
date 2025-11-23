import { Briefcase, GraduationCap, Code, FolderGit2, Award, Download, X, User as UserIcon } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import profileImg from "../Shweta.jpg";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { id: "details", label: "Details", icon: UserIcon },
  { id: "internship", label: "Internship", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "certificates", label: "Certificates", icon: Award },
  { id: "download", label: "Download", icon: Download },
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
      if (window.innerWidth < 1024) {
        onClose();
      }
    }
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:fixed top-0 left-0 h-full w-80 bg-card border-r border-border shadow-xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ScrollArea className="h-full">
          <div className="p-6">
            {/* Close button for mobile */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 lg:hidden"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>

            {/* Profile Section */}
            <div className="text-center mb-8 pt-8 lg:pt-4">
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1 animate-scale-in">
                  <div className="w-full h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    <img src={profileImg} alt="Shweta Udata" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full border-4 border-card"></div>
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                Shweta Udata
              </h3>
              <p className="text-sm text-muted-foreground">Full Stack Developer</p>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 hover:bg-secondary hover:text-primary group"
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </ScrollArea>
      </aside>
    </>
  );
};

export default Sidebar;
