import { Linkedin, Mail, Instagram, Github } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "http://www.linkedin.com/in/shweta-udata",
      label: "LinkedIn",
      color: "text-[#0077B5] hover:text-[#0077B5]",
    },
    {
      icon: Mail,
      href: "https://www.shwetabu07@gmail.com",
      label: "Email",
      color: "text-foreground hover:text-primary",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/_shweta_0702/",
      label: "Instagram",
      color: "text-[#E4405F] hover:text-[#E4405F]",
    },
    {
      icon: Github,
      href: "https://github.com/ShwetaUdata/",
      label: "GitHub",
      color: "text-foreground hover:text-primary",
    },
  ];

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                asChild
                className={`transition-all duration-200 ${social.color}`}
              >
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              </Button>
            );
          })}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-4">
          © 2025 Shweta Udata. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
