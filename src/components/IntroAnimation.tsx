
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
      setTimeout(onComplete, 1000); // Wait for exit animation before triggering onComplete
    }, 2500); // Animation duration

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isAnimationComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-purple-darkest"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo/text container with animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold font-space mb-2">
                <span className="neon-text" style={{
                  color: "#b447ff", 
                  textShadow: "0 0 5px #b447ff, 0 0 10px #b447ff, 0 0 20px #b447ff, 0 0 30px #8a2be2",
                  animation: "pulsate 1.5s infinite alternate"
                }}>N</span>
                <span className="neon-text opacity-90 delay-75" style={{
                  color: "#b447ff", 
                  textShadow: "0 0 5px #b447ff, 0 0 10px #b447ff, 0 0 20px #b447ff, 0 0 30px #8a2be2",
                  animation: "pulsate 1.5s infinite alternate"
                }}>a</span>
                <span className="neon-text opacity-80 delay-150" style={{
                  color: "#b447ff", 
                  textShadow: "0 0 5px #b447ff, 0 0 10px #b447ff, 0 0 20px #b447ff, 0 0 30px #8a2be2",
                  animation: "pulsate 1.5s infinite alternate"
                }}>h</span>
                <span className="neon-text opacity-70 delay-225" style={{
                  color: "#b447ff", 
                  textShadow: "0 0 5px #b447ff, 0 0 10px #b447ff, 0 0 20px #b447ff, 0 0 30px #8a2be2",
                  animation: "pulsate 1.5s infinite alternate"
                }}>m</span>
                <span className="neon-text opacity-60 delay-300" style={{
                  color: "#b447ff", 
                  textShadow: "0 0 5px #b447ff, 0 0 10px #b447ff, 0 0 20px #b447ff, 0 0 30px #8a2be2",
                  animation: "pulsate 1.5s infinite alternate"
                }}>o</span>
              </h1>
            </motion.div>
            
            {/* Loading indicator */}
            <motion.div 
              className="mt-8 flex space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="w-3 h-3 bg-purple-primary rounded-full animate-pulse-slow"></div>
              <div className="w-3 h-3 bg-purple-primary opacity-60 rounded-full animate-pulse-slow delay-300"></div>
              <div className="w-3 h-3 bg-purple-primary opacity-30 rounded-full animate-pulse-slow delay-600"></div>
            </motion.div>
            
            {/* Animated background elements */}
            <div className="absolute -z-10 inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 bg-purple-primary/10 rounded-full blur-3xl"></div>
            </div>
            <motion.div 
              className="absolute -z-10 inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.2, duration: 1.5 }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-primary/5 rounded-full blur-[100px]"></div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
