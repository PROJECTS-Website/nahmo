
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  useEffect(() => {
    // Add scroll animation observer for sections
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, 
      { threshold: 0.1 }
    );
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Add keyframes for the glint animation
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shine {
        from {
          left: -100%;
        }
        to {
          left: 100%;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-purple-darkest min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
