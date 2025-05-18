
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import IntroAnimation from '@/components/IntroAnimation';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  const [showContent, setShowContent] = useState(false);
  
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
    
    if (showContent) {
      sections.forEach(section => {
        observer.observe(section);
      });
    }
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, [showContent]);

  const handleIntroComplete = () => {
    setShowContent(true);
  };

  return (
    <>
      <IntroAnimation onComplete={handleIntroComplete} />
      
      <AnimatePresence>
        {showContent && (
          <motion.div 
            className="bg-purple-darkest min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <CustomCursor />
            <Navbar />
            <Hero />
            <Expertise />
            <Projects />
            <Contact />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
