
const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-purple-darkest border-t border-purple-dark/30">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Made By Nahmo With Servers.
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <div className="w-2 h-2 bg-purple-primary rounded-full"></div>
          <div className="w-2 h-2 bg-purple-primary opacity-60 rounded-full"></div>
          <div className="w-2 h-2 bg-purple-primary opacity-30 rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
