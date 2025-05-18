
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-purple-darkest">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-dark/30 to-transparent opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-heartbeat font-space glow-text
              transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Nahmo
          </h1>
          
          <p 
            className={`text-lg md:text-xl text-gray-300 mb-8 leading-relaxed
              transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Experienced with Linux distributions including Ubuntu, Debian, and more. 
            <br className="hidden md:block" />
            Based in the USA.
          </p>
          
          <div 
            className={`flex flex-wrap justify-center gap-4
              transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <a 
              href="#expertise" 
              className="px-6 py-3 bg-purple-primary text-white rounded-md hover:bg-purple-dark transition-colors duration-300 font-medium"
            >
              Explore Expertise
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border border-purple-primary text-white rounded-md hover:bg-purple-primary/20 transition-colors duration-300 font-medium"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-purple-primary text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-purple-primary rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-purple-primary rounded-full animate-cursor-blink"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
