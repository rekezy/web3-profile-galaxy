
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Briefcase, Award, Code } from "lucide-react";
import SectionHeading from "../ui/section-heading";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4">
        <SectionHeading 
          title="About Me" 
          subtitle="Learn about my journey, experience, and approach to development."
        />
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-2/5">
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600" 
                  alt="Developer Profile" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-1 gradient-text">5+</div>
                  <div className="text-sm text-muted-foreground">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-3/5">
            <h3 className="text-2xl font-bold mb-4">Full Stack Developer & Web3 Engineer</h3>
            <p className="text-muted-foreground mb-6">
              With over 5 years of experience in web development and 3+ years in blockchain technologies, 
              I specialize in creating high-performance web applications and decentralized solutions. 
              My passion lies in leveraging cutting-edge technologies to build robust, 
              user-friendly applications that solve real-world problems.
            </p>
            
            <Tabs defaultValue="experience" className="mb-8">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="experience" className="flex items-center">
                  <Briefcase className="mr-2 h-4 w-4" />
                  Experience
                </TabsTrigger>
                <TabsTrigger value="education" className="flex items-center">
                  <Award className="mr-2 h-4 w-4" />
                  Education
                </TabsTrigger>
                <TabsTrigger value="approach" className="flex items-center">
                  <Code className="mr-2 h-4 w-4" />
                  Approach
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="experience" className="space-y-4">
                <div className="border-l-2 border-dev-purple pl-4">
                  <h4 className="font-bold">Senior Blockchain Developer</h4>
                  <p className="text-muted-foreground text-sm">Decentralized Finance, Inc. • 2021 - Present</p>
                  <p className="mt-1">Leading the development of smart contracts and DApps for a DeFi platform with over $10M TVL.</p>
                </div>
                <div className="border-l-2 border-dev-purple pl-4">
                  <h4 className="font-bold">Full Stack Developer</h4>
                  <p className="text-muted-foreground text-sm">Tech Innovations • 2019 - 2021</p>
                  <p className="mt-1">Developed and maintained multiple client web applications using React, Node.js, and PostgreSQL.</p>
                </div>
                <div className="border-l-2 border-dev-purple pl-4">
                  <h4 className="font-bold">Frontend Developer</h4>
                  <p className="text-muted-foreground text-sm">Digital Solutions • 2018 - 2019</p>
                  <p className="mt-1">Built responsive web interfaces using JavaScript, HTML/CSS, and various frontend frameworks.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="education" className="space-y-4">
                <div className="border-l-2 border-dev-purple pl-4">
                  <h4 className="font-bold">Master of Computer Science</h4>
                  <p className="text-muted-foreground text-sm">Tech University • 2017 - 2019</p>
                  <p className="mt-1">Specialized in Distributed Systems and Blockchain Technology.</p>
                </div>
                <div className="border-l-2 border-dev-purple pl-4">
                  <h4 className="font-bold">Bachelor of Science in Computer Engineering</h4>
                  <p className="text-muted-foreground text-sm">State University • 2013 - 2017</p>
                  <p className="mt-1">Graduated with honors, focused on software development and systems architecture.</p>
                </div>
                <div className="border-l-2 border-dev-purple pl-4">
                  <h4 className="font-bold">Blockchain Developer Certification</h4>
                  <p className="text-muted-foreground text-sm">Blockchain Academy • 2020</p>
                  <p className="mt-1">Advanced smart contract development and security practices.</p>
                </div>
              </TabsContent>
              
              <TabsContent value="approach" className="space-y-4">
                <p className="mb-4">
                  My development philosophy centers around creating solutions that are:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-md bg-dev-purple/20 p-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dev-purple">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span><strong>User-Centric:</strong> Prioritizing intuitive interfaces and smooth user experiences.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-md bg-dev-purple/20 p-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dev-purple">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span><strong>Performance-Optimized:</strong> Building applications that load fast and run efficiently.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-md bg-dev-purple/20 p-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dev-purple">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span><strong>Scalable:</strong> Designing systems that can grow with user demand and business needs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-md bg-dev-purple/20 p-1 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-dev-purple">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    <span><strong>Secure:</strong> Implementing robust security measures, especially for blockchain applications.</span>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                Download Resume
              </Button>
              <Button variant="outline" size="lg">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a Meeting
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
