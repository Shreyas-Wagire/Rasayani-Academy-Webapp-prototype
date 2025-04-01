import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Book, Video, Headphones, FileText, Award, User } from 'lucide-react';
import './Navbar.css';

const navigation = [
  {
    name: 'Programs',
    items: [
      { name: 'Audio Library', href: '/audio-library', icon: <Headphones className="nav-icon w-5 h-5" /> },
      { name: 'Video Library', href: '/video-library', icon: <Video className="nav-icon w-5 h-5" /> },
      { name: 'NCERT/CBSE Videos', href: '/ncert-video-library', icon: <Book className="nav-icon w-5 h-5" /> }
    ]
  },
  {
    name: 'Previous Year Questions',
    items: [
      { name: 'MHT-CET PYQs', href: '/mht-cet-pyq/physics', icon: <FileText className="nav-icon w-5 h-5" /> },
      { name: 'NEET & JEE PYQs', href: '/neet-jee-pyq/physics', icon: <FileText className="nav-icon w-5 h-5" /> },
      { name: 'CSIR NET/SET', href: '/csir-net-set', icon: <Award className="nav-icon w-5 h-5" /> }
    ]
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Rasayani
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownClick(index)}
                  className="nav-link flex items-center space-x-1 px-3 py-2 text-gray-700 hover:text-blue-600 font-medium rounded-md group"
                >
                  <span>{item.name}</span>
                  <ChevronDown className={`nav-icon w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === index ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === index && (
                  <div className="dropdown-menu absolute left-0 mt-2 w-56 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="py-2">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="group flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-3 group-hover:bg-blue-200">
                            {subItem.icon}
                          </span>
                          <span className="font-medium group-hover:text-blue-600">
                            {subItem.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Contact & Login Buttons */}
            <Link
              to="/contact"
              className="nav-link px-4 py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="login-button flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              <User className="nav-icon w-4 h-4 mr-2" />
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="nav-icon block h-6 w-6" />
              ) : (
                <Menu className="nav-icon block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="mobile-menu md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name} className="space-y-2">
                <div className="px-3 py-2 text-base font-medium text-gray-900">
                  {item.name}
                </div>
                {item.items.map((subItem) => (
                  <Link
                    key={subItem.name}
                    to={subItem.href}
                    className="flex items-center px-3 py-2 text-base text-gray-700 hover:bg-blue-50 rounded-md"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-3">
                      {subItem.icon}
                    </span>
                    {subItem.name}
                  </Link>
                ))}
              </div>
            ))}
            <div className="px-3 py-3 space-y-3">
              <Link
                to="/contact"
                className="nav-link block px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/login"
                className="login-button flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                <User className="nav-icon w-5 h-5 mr-2" />
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 