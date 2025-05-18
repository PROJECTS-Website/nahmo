
import { useEffect, useRef, useState } from 'react';
import { Server, Terminal, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

const expertiseData = [
  {
    title: "VPS Hosting",
    description: "Setting up and managing high-performance virtual private servers with emphasis on security, reliability, and speed.",
    icon: Server,
  },
  {
    title: "Linux Administration",
    description: "Expert in managing Ubuntu, Debian, and other Linux distributions, with a focus on server optimization and maintenance.",
    icon: Terminal,
  },
  {
    title: "Minecraft Server Development",
    description: "Building and optimizing Minecraft servers with custom plugins, configurations, and scaling solutions.",
    icon: Database,
  },
];

const Expertise = () => {
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
      id="expertise" 
      ref={sectionRef}
      className="py-20 px-4 bg-purple-darkest/80 relative"
    >
      {/* Animated divider at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-primary to-transparent w-full animate-pulse"></div>
      </div>
      
      <div className="container mx-auto">
        <div 
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-space text-shadow-glow">My Expertise</h2>
          <div className="w-20 h-1 bg-purple-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <div
              key={item.title}
              className={cn(
                "bg-purple-dark/30 backdrop-blur-sm rounded-lg p-8 border border-purple-dark transition-all duration-700",
                "hover:border-purple-primary hover:shadow-glow hover:scale-105",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                // Add staggered delay for each card
                isVisible && index === 0 ? "delay-100" : "",
                isVisible && index === 1 ? "delay-300" : "",
                isVisible && index === 2 ? "delay-500" : ""
              )}
            >
              <div className="mb-6 text-purple-primary bg-purple-primary/10 p-4 inline-block rounded-full hover:bg-purple-primary/20 transition-all group">
                <item.icon size={40} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Animated divider at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-primary to-transparent w-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default Expertise;
