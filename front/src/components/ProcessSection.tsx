import React from 'react';
import { CalendarClock, Bot, BarChart2, CheckCircle, Headphones } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      icon: <CalendarClock className="h-8 w-8 text-white" />,
      title: "Diagnostic Meeting with CEO",
      description: "We understand your business needs and objectives in a half-hour consultation with the possibility of scheduling another meeting.",
      color: "bg-lokai-blue"
    },
    {
      icon: <Bot className="h-8 w-8 text-white" />,
      title: "Personalized Agent Design",
      description: "We design a custom AI solution tailored to your specific business requirements.",
      color: "bg-lokai-blue-dark"
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-white" />,
      title: "Development and Integration",
      description: "We develop and seamlessly integrate the AI system with your existing platforms.",
      color: "bg-lokai-blue"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "Testing and Optimization",
      description: "We rigorously test the system and optimize for maximum efficiency and accuracy.",
      color: "bg-lokai-blue-dark"
    },
    {
      icon: <Headphones className="h-8 w-8 text-white" />,
      title: "Continuous Support",
      description: "We provide ongoing technical support and performance enhancements.",
      color: "bg-lokai-blue"
    }
  ];

  return (
    <section id="process" className="py-20">
      <div className="container px-4 md:px-6 ">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Implementation Process</h2>
          <p className="text-lg text-gray-600">
            A simple, transparent path to implementing AI automation in your business
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="w-[94%] flex flex-col md:flex-row gap-4">
                <div className="flex items-center pt-5 md:flex-col gap-4 md:w-48">
                  <div className={`${step.color}  p-3 rounded-full z-10`}>
                    {step.icon}
                  </div>
                  <div className="md:text-center">
                    <h3 className="font-semibold">{`Step ${index + 1}`}</h3>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;