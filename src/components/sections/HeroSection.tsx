
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-20">
      <div className="absolute inset-0 z-0 opacity-20 bg-gradient-radial from-dev-purple/20 to-transparent" />
      
      <div className="container px-4 z-10 animate-fade-in">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block mb-6 p-2 rounded-full bg-secondary/50 backdrop-blur-sm">
            <span className="px-4 py-1.5 rounded-full bg-dev-purple/20 text-dev-purple font-medium text-sm">
              Full Stack Developer & Web3 Engineer
            </span>
          </div>
          
          <h1 className="mb-6 font-bold leading-tight">
            Creating <span className="gradient-text">innovative</span> web experiences & <span className="gradient-text">decentralized</span> applications
          </h1>
          
          <p className="max-w-2xl mb-8 text-lg text-muted-foreground">
            I build modern web applications and blockchain solutions, combining cutting-edge technologies 
            with elegant design to deliver exceptional digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg">
              View Projects
              <span className="ml-2">→</span>
            </Button>
            <Button variant="outline" size="lg">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="text-muted-foreground"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
