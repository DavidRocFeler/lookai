'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
// import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
// import { useIsMobile } from '@/hooks/use-mobile';
// import ThemeToggle from './ThemeToggle';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
// import { Wallet } from 'lucide-react';
import WebToken from './WebToken';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMovileScreen, setIsMobileScreen ] = useState(false);
  const navigate = useRouter();
  // const isMobile = useIsMobile();

  const handleRedirectAuth = () => {
    navigate.push('/auth')
  }
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
    const checkMobileScreen = () => {
      setIsMobileScreen(window.innerWidth > 500)
    };

    checkMobileScreen()

    window.addEventListener('resize', checkMobileScreen);

    return () => {
      window.removeEventListener('resize', checkMobileScreen);
    }
  })

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
            <img className='w-[6.8rem] h-[1.55rem]' src="/LookaiLogo.png" alt="LookaiLogo" />
          </Link>
          
          {/* <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className=" hover:text-lokai-blue dark:hover:text-lokai-blue-light transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav> */}
          
          <div className= 'flex flex-row space-x-2'>
            <div className="hidden md:flex items-center gap-4">
              {/* <ThemeToggle /> */}
              <Button className="bg-[#2BAFD9] hover:bg-lokai-blue-dark text-white">
                Free Consultation 
              </Button>
            </div>
            
            <div className="flex items-center gap-2">
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
      </div>
      
      {/* Mobile menu - ahora con origen en la barra de navegación */}
      <div 
        className={`left-[-0.1rem] absolute w-[101%] flex flex-col justify-center items-center transform transition-all duration-500 ease-in-out origin-top
          ${isOpen ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-0 opacity-0 pointer-events-none"}
          h-screen top-full shadow-md bg-gradient-to-br from-[#2BAFD9] to-[#1a6a85]`}
        style={{ transformOrigin: 'top' }}
      >
        <div className="container py-4 absolute left-0 top-0">
            <nav className="grid grid-cols-2 md:grid-cols-none md:flex md:space-x-4 relative">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-gray-200 py-2 transition-colors tracking-[5px] font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button
                className=" md:hidden tracking-[5px] w-fit rounded-md text-white hover:text-gray-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
               {isMovileScreen ? 'Free Consultation' : 'Consultation'}
              </button>
            </nav>
          </div>

          <div className="text-center space-y-8 max-w-md">
            <h1 className="text-5xl font-bold text-white mb-4">Agent Lookai</h1>
            
            <p className="text-agent-light text-xl text-white">
              Create your secure blockchain wallet with document storage and continue
            </p>
         
            <div className="group w-fit rounded-full m-auto shadow-2xl">
              <WebToken 
                onClick={handleRedirectAuth}
                className='
                  cursor-pointer 
                  transition-all 
                  duration-300 
                  ease-in-out 
                  group-hover:scale-110
                  origin-center 
                  rounded-full
                '  
              />
            </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;