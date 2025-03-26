'use client'
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Button } from './ui/button';
import { CheckCircle, Calendar, MessagesSquare, Users, Share2, ArrowRight } from 'lucide-react';
import CardServiceBluur from './CardServiceBluur';
import { servicesAreasHelpers } from '@/helpers/servicesAreas.helpers';

const ModulesSection = () => {
  const [ openModalService, setOpenModalService ] = useState(false);
  const [selectedServiceID, setSelectedServiceID] = useState<number | null>(null);

  const onClickOpenModal = (serviceID: number) => {
    setOpenModalService(true);
    setSelectedServiceID(serviceID);
  }

  const onCLickCloseModal = () => {
    setOpenModalService(false);
  }

  useEffect(() => {
    if (openModalService) {
      // Deshabilitar scroll
      document.body.style.overflow = 'hidden';

    } else {
      // Restaurar scroll cuando se cierra el modal
      document.body.style.overflow = 'unset';
    }

    // Limpiar efecto al desmontar
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [openModalService]);

  const modules = [
    {
      serviceID: 1,
      title: "Booking Automation",
      description: "Streamline your appointment scheduling process with AI",
      icon: <Calendar className="h-12 w-12 text-lokai-blue mb-4" />,
      features: [
        "Intelligent appointment management",
        "Reduction of human errors",
        "Automatic confirmations and reminders"
      ],
    },
    {
      serviceID: 2,
      title: "Automated Customer Support",
      description: "Provide instant solutions to customer inquiries",
      icon: <MessagesSquare className="h-12 w-12 text-lokai-blue mb-4" />,
      features: [
        "Instant responses to common questions",
        "Handling multiple simultaneous queries",
        "Intelligent escalation to human agents"
      ],
    },
    {
      serviceID: 3,
      title: "Marketing and content",
      description: "Convert prospects into customers more effectively",
      icon: <Share2 className="h-12 w-12 text-lokai-blue mb-4" />,
      features: [
        "AI-Driven Content Creation",
        "Personalized Marketing Strategies",
        "Real-Time Performance Analytics"
      ],
    },
    {
      serviceID: 4,
      title: "Sales Support",
      description: "Convert prospects into customers more effectively",
      icon: <Users className="h-12 w-12 text-lokai-blue mb-4" />,
      features: [
        "Lead qualification and prioritization",
        "Prospect tracking and follow-up",
        "Sales closure assistance"
      ],
    }
  ];

  return (
    <section id="modules" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">AI Agent Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Our autonomous AI agents can be tailored to various aspects of your business operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:w-[70%] m-auto">
          {modules.map((module, index) => (
            <Card key={index} className="relative pb-[7rem] items-center border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex justify-center">{module.icon}</div>
                <CardTitle className="text-2xl text-center">{module.title}</CardTitle>
                <CardDescription className="text-center text-gray-600">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-lokai-blue shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
                <Button 
                onClick={() => onClickOpenModal(module.serviceID)}
                className="absolute bottom-8 bg-lokai-blue hover:bg-lokai-blue-dark text-white font-medium py-[1.5rem] w-[60%] rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                  See service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
      {openModalService && selectedServiceID && (
        <div className="fixed inset-0 z-[3333] flex items-center justify-center bg-black bg-opacity-[70%] backdrop-blur-md">
          
            <CardServiceBluur 
              id={selectedServiceID}
              title={modules.find(m => m.serviceID === selectedServiceID)?.title || ''}
              icon={modules.find(m => m.serviceID === selectedServiceID)?.icon || null}
              iconClassName="h-12 w-12 text-lokai-blue mb-4"
              onClose={onCLickCloseModal}
            />
  
        </div>
      )}
    </section>
  );
};

export default ModulesSection;
