
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
      scrolled ? 'bg-purple-darkest/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
    )}>
      <nav className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white font-space">
          <span className="text-purple-primary">N</span>ahmo
        </a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="relative text-white hover:text-purple-primary font-medium transition-colors px-1 py-2"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-purple-primary transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 bg-purple-darkest bg-opacity-95 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="container mx-auto px-4 py-20">
          <ul className="flex flex-col space-y-6 items-center">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full text-center">
                <a 
                  href={link.href} 
                  className="text-2xl font-medium text-white hover:text-purple-primary block py-2 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
