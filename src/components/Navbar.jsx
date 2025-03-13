import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Detects current page

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if current page is Home or Services
  const isHomeOrServicePage = location.pathname === "/" || location.pathname === "/services";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
        isHomeOrServicePage
          ? isScrolled
            ? "bg-white shadow-md"
            : "bg-transparent"
          : "bg-white shadow-md"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/Logoc.png" alt="Logo" className="h-10 mr-3" />
          <Link
            to="/"
            className={`text-2xl font-semibold tracking-wide transition-colors ${
              isHomeOrServicePage && !isScrolled ? "text-white" : "text-[#0A043C]"
            }`}
          >
            Thanosphere 
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul
          className={`hidden md:flex space-x-10 text-lg font-medium transition-colors ${
            isHomeOrServicePage && !isScrolled ? "text-white" : "text-[#0A043C]"
          }`}
        >
          <li><Link to="/" className="px-4 py-2 hover:text-gray-500 transition duration-300">Home</Link></li>
          <li><Link to="/about" className="px-4 py-2 hover:text-gray-500 transition duration-300">About</Link></li>
          <li><Link to="/services" className="px-4 py-2 hover:text-gray-500 transition duration-300">Services</Link></li>
          <li><Link to="/contact" className="px-4 py-2 hover:text-gray-500 transition duration-300">Contact Us</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none transition-colors ${
            isHomeOrServicePage && !isScrolled ? "text-white" : "text-[#0A043C]"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="absolute top-16 right-6 w-48 bg-white rounded-lg shadow-lg transition-transform">
            <ul className="flex flex-col text-center py-4 space-y-2">
              <li><Link to="/" className="block py-2 text-lg text-[#0A043C] font-medium hover:bg-gray-100" onClick={() => setIsOpen(false)}>Home</Link></li>
              <li><Link to="/about" className="block py-2 text-lg text-[#0A043C] font-medium hover:bg-gray-100" onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link to="/services" className="block py-2 text-lg text-[#0A043C] font-medium hover:bg-gray-100" onClick={() => setIsOpen(false)}>Services</Link></li>
              <li><Link to="/contact" className="block py-2 text-lg text-[#0A043C] font-medium hover:bg-gray-100" onClick={() => setIsOpen(false)}>Contact Us</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;