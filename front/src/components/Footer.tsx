import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col mb-8">
          <div className="space-y-10 ">
            <a className="text-xl font-bold text-white tracking-[5px] "> <img className='w-[6.8rem] h-[1.55rem]' src="/LookaiLogo.png" alt="LookaiLogo" /></a>
            <p className="text-sm w-[50%] tracking-[5px] m-auto">
              Transforming customer service through artificial intelligence. We help businesses automate, optimize, and scale their operations.  &copy; {new Date().getFullYear()}  LOOKAI AI Technologies. All rights reserved.
            </p>
            <div className="text-sm w-[50%] mx-auto">

            <div className="flex flex-col space-y-6 xlcustom:space-y-0 xlcustom:flex-row justify-between mb-4 text-sm">
              <a href="#" className="hover:text-lokai-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-lokai-blue transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-lokai-blue transition-colors">Cookie Policy</a>
            </div>
          </div>
 
          </div>
          
          {/* <div>
            <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#modules" className="hover:text-lokai-blue transition-colors">Booking Automation</a></li>
              <li><a href="#modules" className="hover:text-lokai-blue transition-colors">Customer Support</a></li>
              <li><a href="#modules" className="hover:text-lokai-blue transition-colors">Sales Support</a></li>
              <li><a href="#" className="hover:text-lokai-blue transition-colors">Custom Solutions</a></li>
            </ul>
          </div> */}
          
          {/* <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-lokai-blue transition-colors">About Us</a></li>
              <li><a href="#case-studies" className="hover:text-lokai-blue transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-lokai-blue transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-lokai-blue transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
            <p className="text-sm mb-4">Stay updated with the latest in AI automation</p>
            <div className="flex gap-2">
              <Input 
                placeholder="Your email address" 
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="bg-lokai-blue hover:bg-lokai-blue-dark">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div> */}
        </div>
        <figure>
              <div className="flex justify-between w-fit space-x-8 mt-[3rem]">
                <img src="/TiktokLogo.svg" alt="" />
                <img src="/XLogo.svg" alt="" />
                <img src="/FacebookLogo.svg" alt="" />
                <img src="/InstagramLogo.svg" alt="" />
              </div>

              {/* <div className="ml-auto w-fit flex space-x-6">
                <a href="#" className="hover:text-lokai-blue transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="hover:text-lokai-blue transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="hover:text-lokai-blue transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="hover:text-lokai-blue transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div> */}
              
          </figure>

      </div>
    </footer>
  );
};

export default Footer;