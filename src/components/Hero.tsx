
import { useEffect, useState } from 'react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-purple-darkest">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-dark/30 to-transparent opacity-60"></div>
      </div>
      
      {/* Animated spotlight */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-primary/5 rounded-full blur-[100px] animate-spotlight"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-space text-shadow-glow
              transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <span className="animate-pulse-slow">N</span>
            <span className="animate-pulse-slow delay-75">a</span>
            <span className="animate-pulse-slow delay-150">h</span>
            <span className="animate-pulse-slow delay-225">m</span>
            <span className="animate-pulse-slow delay-300">o</span>
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
              className="group px-6 py-3 bg-purple-primary text-white rounded-md hover:bg-purple-dark transition-colors duration-300 font-medium relative overflow-hidden"
            >
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-purple-primary via-purple-light to-purple-primary group-hover:w-full transition-all duration-700 opacity-50"></span>
              <span className="relative z-10">Explore Expertise</span>
            </a>
            <a 
              href="#projects" 
              className="group px-6 py-3 border border-purple-primary text-white rounded-md hover:bg-purple-primary/20 transition-colors duration-300 font-medium relative overflow-hidden"
            >
              <span className="absolute -inset-full skew-x-12 group-hover:animate-[shine_1.5s_ease-in-out] bg-gradient-to-r from-transparent via-white/10 to-transparent"></span>
              <span className="relative z-10">View Projects</span>
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
