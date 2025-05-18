
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const projectsData = [
  {
    title: "Void Nodes",
    description: "A Linux-based VPS hosting service providing reliable, high-performance virtual private servers. Focused on security, uptime, and excellent customer support.",
    link: "https://voidhost.pro/",
    buttonText: "Learn More",
  },
  {
    title: "Void Nodes MC",
    description: "A Minecraft server network with multiple game modes and optimized performance. Featuring custom plugins, active community, and unique gameplay experiences.",
    link: "https://voidhost.pro/",
    buttonText: "View Network",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 px-4 bg-gradient-to-b from-purple-darkest to-purple-dark/20"
    >
      <div className="container mx-auto">
        <div 
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-space">My Projects</h2>
          <div className="w-20 h-1 bg-purple-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "relative bg-purple-dark/20 backdrop-blur-sm rounded-lg p-8 border border-purple-dark overflow-hidden group transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                isVisible && index === 0 ? "delay-200" : "",
                isVisible && index === 1 ? "delay-400" : ""
              )}
            >
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-purple-primary opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-primary to-purple-dark opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-lg"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-purple-gradient text-white rounded-md font-medium relative overflow-hidden group"
                >
                  {/* Glint animation effect */}
                  <span className="absolute -inset-full skew-x-12 group-hover:animate-[shine_1.5s_ease-in-out] bg-gradient-to-r from-transparent via-white/10 to-transparent"></span>
                  {project.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
