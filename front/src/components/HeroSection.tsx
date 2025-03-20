'use client'
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, CheckCircle } from 'lucide-react';
import SphericalWave from './SphericalWave';

const HeroSection = () => {
  const [ isMobileScreen, setIsMobileScreen ] = useState(false);

  useEffect(() => {
    const checkMobileScree = () => {
      setIsMobileScreen(window.innerWidth < 650)
    };

    checkMobileScree();

    // add listener to chage in sceen
    window.addEventListener('resize', checkMobileScree)

    // clean the listener when the component is disassembled
    return () => {
      window.addEventListener('resize', checkMobileScree)
    };

  },[])
  return (
    <section className="relative overflow-hidden py-20 lg:pb-20 lg:pt-12">
      {/* Background Decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-lokai-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-lokai-blue/10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-lokai-blue/10 text-lokai-blue rounded-full mb-4 w-fit">
              <SphericalWave/>
              <span>AI-Powered Customer Service</span>
            </div>

           <div className='mb-[3rem]'>
            <h1 className=" mt-[3rem] text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Automate your bussisnes with
              </h1>
              <p className="text-lokai-blue text-4xl md:text-5xl lg:text-6xl font-bold">Artificial Intelligence</p>
            </div> 
            
            <p className="text-xl text-gray-600 md:text-2xl">
            Deploy AI agents that work 24/7, reduce costs, improve customer experience, and increase sales by up to 40%.
            </p>
  
            <Button className="mt-[5rem] bg-lokai-blue hover:bg-lokai-blue-dark text-white font-medium py-[1.5rem] w-[60%] rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              {isMobileScreen ? 'Consultation' : 'Schedule Your Free Consultation'}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <div className="flex items-center gap-6 mt-8">
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-lokai-blue">30%</p>
                <p className="text-sm text-gray-600">Cost Reduction</p>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-lokai-blue">25%</p>
                <p className="text-sm text-gray-600">Sales Increase</p>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div className="flex flex-col items-center">
                <p className="text-3xl font-bold text-lokai-blue">40%</p>
                <p className="text-sm text-gray-600">Wait Time Reduction</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Clock className="h-4 w-4 text-lokai-blue" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Shield className="h-4 w-4 text-lokai-blue" />
                <span>Secure Integration</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle className="h-4 w-4 text-lokai-blue" />
                <span>Continuous Support</span>
              </div>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mb-[5rem] h-[500px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-white via-lokai-blue/5 to-lokai-blue/10 rounded-3xl"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-5/6 rounded-xl overflow-hidden shadow-2xl bg-white">
                <div className="p-4 bg-lokai-blue text-white flex items-center gap-2">
                  <SphericalWave/>
                  <span className="font-medium">Lookai Agent</span>
                </div>
                <div className="p-4 h-96 overflow-y-auto">
                  <div className="flex gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-lokai-blue/10 flex items-center justify-center">
                    <SphericalWave/>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-gray-800">
                      Hi, I&apos;m Lookai! Your AI agent with the ability to understand human language, reason, automate, and run applications hosted on the internet through prior training. If you&apos;d like, I can tell you more about Lookai, or if you need us to answer any questions you may have about our service, I&apos;ll also be happy to assist you with anything you need.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 mb-4 justify-end">
                    <div className="bg-lokai-blue rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-white">
                        Hi! I have a travel agency and I want to improve my operation.
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-xs font-medium">JD</span>
                    </div>
                  </div>
                  <div className="flex gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-lokai-blue/10 flex items-center justify-center">
                    <SphericalWave/>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-gray-800">
                        Of course! At Lookai, we offer intelligent automation solutions to boost your travel business. Our service focuses on four strategic areas. In Appointment Booking, we develop a system that allows your clients to schedule consultations and tours quickly and easily, optimizing your schedule and reducing wait times. We also specialize in other areas such as customer service, sales, marketing, and content. In which of these areas would you like us to help you optimize your travel agency?
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 mb-4 justify-end">
                    <div className="bg-lokai-blue rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-white">
                        Yes, I&apos;m interested in improving my sales service
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-xs font-medium">JD</span>
                    </div>
                  </div>
                  <div className="flex mb-4 gap-3">
                    <div className="w-8 h-8 rounded-full bg-lokai-blue/10 flex items-center justify-center">
                    <SphericalWave/>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-gray-800">
                      Our travel agency sales service uses artificial intelligence to completely transform your sales strategy. We develop a system that analyzes your customers behavior, predicts their travel preferences, and creates personalized sales paths. We can automate lead follow-up, generate instant quotes, and create unique value propositions for each type of traveler, significantly increasing your closing rates and improving the customer experience.
                      Would you like to learn more about how we can boost your travel agency&apos;s sales?
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 mb-4 justify-end">
                    <div className="bg-lokai-blue rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm text-white">
                      Yes, I want to know more about how you can help me.
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-xs font-medium">JD</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-t border-gray-100">
                  <div className="relative">
                    <input
                      disabled
                      type="text"
                      placeholder="Type your message..."
                      className="w-full p-2 pl-4 pr-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lokai-blue/50 text-sm"
                    />
                    <Button className="absolute right-1 top-1 bg-lokai-blue text-white h-8 w-8 rounded-full p-0 flex items-center justify-center">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;