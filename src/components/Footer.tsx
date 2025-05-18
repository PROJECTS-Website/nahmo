
const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-purple-darkest border-t border-purple-dark/30 relative">
      {/* Animated divider at the top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div className="h-px bg-gradient-to-r from-transparent via-purple-primary to-transparent w-full"></div>
      </div>
      
      <div className="container mx-auto text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Made By Nahmo With Servers.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <div className="w-2 h-2 bg-purple-primary rounded-full animate-pulse-slow"></div>
          <div className="w-2 h-2 bg-purple-primary opacity-60 rounded-full animate-pulse-slow delay-300"></div>
          <div className="w-2 h-2 bg-purple-primary opacity-30 rounded-full animate-pulse-slow delay-600"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
