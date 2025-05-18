
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible && e.clientX !== 0 && e.clientY !== 0) {
        setIsVisible(true);
      }
    };
    
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    
    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <div 
      className="fixed pointer-events-none z-50 opacity-0 transition-opacity duration-300 mix-blend-screen"
      style={{
        opacity: isVisible ? 0.7 : 0,
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="w-6 h-6 bg-purple-primary rounded-full blur-sm" />
    </div>
  );
};

export default CustomCursor;
