
import SectionHeading from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "HTML/CSS", "JavaScript", "Vue.js"]
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express", "Django", "PostgreSQL", "MongoDB", "REST API", "GraphQL", "Firebase"]
  },
  {
    title: "Web3 & Blockchain",
    skills: ["Solidity", "Ethereum", "Web3.js", "Ethers.js", "Smart Contracts", "Hardhat", "Truffle", "IPFS"]
  },
  {
    title: "Tools & Others",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Cypress", "Figma", "Agile/Scrum"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container px-4">
        <SectionHeading 
          title="Skills & Technologies" 
          subtitle="A comprehensive overview of my technical skills and the technologies I work with."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg shadow-md relative overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-dev-purple to-blue-500" />
              
              <h3 className="font-bold text-xl mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    className="bg-secondary text-sm py-1 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
