
import { useState } from "react";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  category: "web" | "web3" | "mobile";
}

const projects: Project[] = [
  {
    id: 1,
    title: "NFT Marketplace",
    description: "A decentralized marketplace for trading NFTs with MetaMask integration, built on Ethereum.",
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmZ0fGVufDB8fDB8fHww",
    tags: ["React", "Solidity", "Ethereum", "Web3.js"],
    githubUrl: "#",
    liveUrl: "#",
    category: "web3"
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    description: "Full-stack e-commerce admin dashboard with analytics, inventory management, and order processing.",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFzaGJvYXJkfGVufDB8fDB8fHww",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
    category: "web"
  },
  {
    id: 3,
    title: "DeFi Staking Platform",
    description: "A decentralized finance application for staking tokens and earning yield on crypto assets.",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNyeXB0b3xlbnwwfHwwfHx8MA%3D%3D",
    tags: ["React", "Smart Contracts", "Hardhat", "Ethers.js"],
    githubUrl: "#",
    liveUrl: "#",
    category: "web3"
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "A responsive social media web app with real-time messaging, notifications, and content sharing.",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D",
    tags: ["Next.js", "Firebase", "Tailwind CSS", "Socket.io"],
    githubUrl: "#",
    liveUrl: "#",
    category: "web"
  },
  {
    id: 5,
    title: "Crypto Wallet App",
    description: "A mobile wallet application for managing cryptocurrency assets with biometric authentication.",
    image: "https://images.unsplash.com/photo-1613919113640-25765029bfff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3J5cHRvJTIwd2FsbGV0fGVufDB8fDB8fHww",
    tags: ["React Native", "Redux", "Blockchain API"],
    githubUrl: "#",
    liveUrl: "#",
    category: "mobile"
  },
  {
    id: 6,
    title: "DAO Governance Portal",
    description: "A governance portal for DAOs to propose, vote, and execute decisions on the blockchain.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsb2NrY2hhaW58ZW58MHx8MHx8fDA%3D",
    tags: ["React", "TypeScript", "Graph Protocol", "Solidity"],
    githubUrl: "#",
    liveUrl: "#",
    category: "web3"
  }
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<"all" | "web" | "web3" | "mobile">("all");
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="container px-4">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A curated collection of my most impactful work across web development and blockchain technologies."
        />
        
        <div className="flex justify-center mb-12 gap-2 flex-wrap">
          <Button 
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="mb-2"
          >
            All Projects
          </Button>
          <Button 
            variant={filter === "web" ? "default" : "outline"}
            onClick={() => setFilter("web")}
            className="mb-2"
          >
            Web Apps
          </Button>
          <Button 
            variant={filter === "web3" ? "default" : "outline"}
            onClick={() => setFilter("web3")}
            className="mb-2"
          >
            Web3 / Blockchain
          </Button>
          <Button 
            variant={filter === "mobile" ? "default" : "outline"}
            onClick={() => setFilter("mobile")}
            className="mb-2"
          >
            Mobile Apps
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="project-card h-full flex flex-col">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
