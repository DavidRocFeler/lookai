import React from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  Clock, 
  Smartphone, 
  Zap, 
  BarChart4, 
  Users, 
  Shield 
} from 'lucide-react';

const benefits = [
  {
    icon: <DollarSign className="h-10 w-10 p-2 bg-lokai-blue/10 text-lokai-blue rounded-xl" />,
    title: "Cost Reduction",
    description: "Reduce operating costs by up to 30% by replacing repetitive manual tasks with AI automation.",
    metric: "30%"
  },
  {
    icon: <TrendingUp className="h-10 w-10 p-2 bg-lokai-blue/10 text-lokai-blue rounded-xl" />,
    title: "Sales Increase",
    description: "Boost conversions by 25% through instant responses and personalized interactions AI.",
    metric: "25%"
  },
  {
    icon: <Clock className="h-10 w-10 p-2 bg-lokai-blue/10 text-lokai-blue rounded-xl" />,
    title: "Wait Time Reduction",
    description: "Reduce customer waiting time by 40% with immediate AI responses.",
    metric: "40%"
  },
  {
    icon: <Smartphone className="h-10 w-10 p-2 bg-lokai-blue/10 text-lokai-blue rounded-xl" />,
    title: "24/7 Availability",
    description: "Provide round-the-clock service without additional staffing costs.",
    metric: "100%"
  },
  {
    icon: <Users className="h-10 w-10 p-2 bg-lokai-blue/10 text-lokai-blue rounded-xl" />,
    title: "Total Personalization",
    description: "Tailor interactions to each customer's needs, preferences, and history.",
    metric: ""
  },
  {
    icon: <Zap className="h-10 w-10 p-2 bg-lokai-blue/10 text-lokai-blue rounded-xl" />,
    title: "Immediate Scalability",
    description: "Instantly scale your customer service capacity during peak periods.",
    metric: ""
  },
  {
    icon: <BarChart4 className="h-10 w-10 p-2 bg-lokai-blue/10 text-lokai-blue rounded-xl" />,
    title: "Seamless Integration",
    description: "Transparently connect with your existing systems and workflows.",
    metric: ""
  },
  {
    icon: <Shield className="h-10 w-10 p-2 bg-lokai-blue/10 text-lokai-blue rounded-xl" />,
    title: "Continuous Support",
    description: "Get ongoing technical assistance and regular AI performance updates.",
    metric: ""
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Quantifiable Benefits for Your Business</h2>
          <p className="text-lg text-gray-600">
            Our AI agents deliver measurable improvements to your operations, customer satisfaction, and bottom line.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out benefit-card relative overflow-hidden"
            >
              {benefit.metric && (
                <div className="absolute top-3 right-3 bg-lokai-blue text-white text-sm font-bold px-2 py-1 rounded-md">
                  {benefit.metric}
                </div>
              )}
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;