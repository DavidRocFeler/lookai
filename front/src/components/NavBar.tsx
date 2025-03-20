'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
// import { useIsMobile } from '@/hooks/use-mobile';
import ThemeToggle from './ThemeToggle';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Benefits", href: "#benefits" },
    { name: "Services", href: "#modules" },
    // { name: "Case Studies", href: "#case-studies" },
    { name: "Process", href: "#process" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 bg-white/50 backdrop-blur-md py-2 xl:py-4 transition-all duration-300 border-s ${
        isScrolled ? 'shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-lokai-blue dark:text-lokai-blue-light"> 
            <img className='w-[6.8rem] h-[1.55rem]' src="/LookaiLogo.png" alt="" />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className=" hover:text-lokai-blue dark:hover:text-lokai-blue-light transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            {/* <ThemeToggle /> */}
            <Button className="bg-[#2BAFD9] hover:bg-lokai-blue-dark text-white">
              Free Consultation
            </Button>
          </div>
          
          <div className="md:hidden flex items-center gap-2">
            {/* <ThemeToggle /> */}
            <Button 
              className="text-white bg-[#2BAFD9] hover:bg-lokai-blue-dark"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile & isMobile menu */}
      {isOpen && (
        <div className="md:hidden left-[-0.1rem] absolute w-[101%] top-full bg-white dark:bg-gray-900 shadow-md">
          <div className="container px-5 py-4">
            <nav className="flex flex-col items-center space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-lokai-blue dark:hover:text-lokai-blue-light py-2 transition-colors tracking-[5px] font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button
                className="bg-lokai-blue hover:bg-lokai-blue-dark tracking-[5px] w-full py-[0.35rem] rounded-md text-white dark:bg-lokai-blue-light"
                onClick={() => setIsOpen(false)}
              >
                Free Consultation
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
