
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from '@/hooks/use-toast';

const contactLinks = [
  {
    platform: "Discord Username",
    link: "https://discord.com/users/naj.hq",
    label: "naj.hq",
    copyText: "naj.hq",
    tooltipText: "Copy Username",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M9 8h-3a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h3" />
        <path d="M15 8h3a5 5 0 0 1 5 5v2a5 5 0 0 1-5 5h-3" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    )
  },
  {
    platform: "Discord Server",
    link: "https://discord.gg/vdx",
    label: "discord.gg/vdx",
    copyText: "discord.gg/vdx",
    tooltipText: "Join Server",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    )
  },
  {
    platform: "Instagram",
    link: "https://www.instagram.com/nahmoooo/",
    label: "@nahmoooo",
    copyText: "@nahmoooo",
    tooltipText: "Open Instagram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
      </svg>
    )
  }
];

const Contact = () => {
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

  const handleCopy = (text: string, platform: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${platform} has been copied to clipboard.`,
      duration: 2000,
    });
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 px-4 bg-purple-darkest relative"
    >
      {/* Animated divider at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-primary to-transparent w-full animate-pulse"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl">
        <div 
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-space text-shadow-glow">Get In Touch</h2>
          <div className="w-20 h-1 bg-purple-primary mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-xl mx-auto">
            Feel free to reach out for collaborations or inquiries about Linux solutions, VPS hosting, or Minecraft server development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TooltipProvider>
            {contactLinks.map((item, index) => (
              <Tooltip key={item.platform}>
                <TooltipTrigger asChild>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "bg-purple-dark/30 border border-purple-dark/60 rounded-lg p-6 text-center group",
                      "hover:border-purple-primary hover:bg-purple-dark/50 transition-all duration-500",
                      "hover:shadow-glow hover:scale-105",
                      "transform transition-all cursor-pointer",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                      isVisible && index === 0 ? "delay-100" : "",
                      isVisible && index === 1 ? "delay-300" : "",
                      isVisible && index === 2 ? "delay-500" : ""
                    )}
                    onClick={(e) => {
                      if (item.copyText) {
                        e.preventDefault();
                        handleCopy(item.copyText, item.platform);
                      }
                    }}
                  >
                    <div className="text-purple-primary mb-4 mx-auto flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">{item.platform}</h3>
                    <p className="text-gray-400">{item.label}</p>
                    
                    {/* Subtle pulse indicator */}
                    <div className="mt-2 flex justify-center">
                      <div className="w-1.5 h-1.5 bg-purple-primary rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
                    </div>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.tooltipText}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </div>
      
      {/* Animated divider at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-primary to-transparent w-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default Contact;
