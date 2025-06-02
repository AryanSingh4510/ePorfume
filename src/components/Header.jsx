import React, { useEffect, useState } from 'react';
import {
  FiHeart,
  FiMenu,
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiX,
} from 'react-icons/fi';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const navItems = [
    { id: 1, name: 'Home', link: '#home' },
    { id: 2, name: 'Products', link: '#products' },
    { id: 3, name: 'Categories', link: '#categories' },
    { id: 4, name: 'Offers', link: '#offers' },
    { id: 5, name: 'About', link: '#about' },
    { id: 6, name: 'Contact', link: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navItems.map((item) =>
        document.querySelector(item.link)
      );
      const scrollPos = window.scrollY + 100;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].link);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      <div
        className={`${
          isScrolled
            ? 'bg-[#1E1B2E]/95 backdrop-blur shadow-md py-2'
            : 'bg-[#121212] py-4'
        } transition-all`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo + Menu */}
            <div className="flex justify-between items-center w-full md:w-auto">
              <a
                href="/"
                className="text-2xl font-bold text-[#D6BBFB] tracking-tight"
              >
                SugandhaLok
              </a>
              <button
                className="md:hidden text-[#D6BBFB] hover:text-[#C026D3]"
                onClick={toggleMobileMenu}
                aria-label="Toggle Mobile Menu"
              >
                {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>

            {/* Search */}
            <div className="w-full md:flex-1 max-w-sm">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 text-sm border border-gray-600 bg-[#1F2937] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-[#C026D3] placeholder:text-gray-400"
                />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#C026D3]"
                  aria-label="Search button"
                >
                  <FiSearch size={18} />
                </button>
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button
                className="relative p-2 text-gray-300 hover:text-[#9D174D]"
                aria-label="Wishlist"
              >
                <FiHeart size={20} />
                <span className="absolute -top-1 -right-1 bg-[#C026D3] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button
                className="relative p-2 text-gray-300 hover:text-[#9D174D]"
                aria-label="Cart"
              >
                <FiShoppingCart size={20} />
                <span className="absolute -top-1 -right-1 bg-[#C026D3] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  5
                </span>
              </button>
              <button
                className="p-2 text-gray-300 hover:text-[#9D174D]"
                aria-label="User"
              >
                <FiUser size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="bg-[#1E1B2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hidden md:flex justify-center py-3">
            <ul className="flex flex-wrap gap-x-6 text-sm font-medium text-[#D6BBFB]">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className={`hover:text-[#F472B6] transition-colors ${
                      activeSection === item.link ? 'text-[#F472B6]' : ''
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen ? 'max-h-[300px] mt-2' : 'max-h-0'
            }`}
          >
            <div className="bg-[#1F2937] rounded-lg shadow-md p-4 space-y-3 text-[#5EEAD4] text-center">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  onClick={handleMobileLinkClick}
                  className="block hover:text-white hover:bg-[#0F766E] rounded py-2 transition"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;