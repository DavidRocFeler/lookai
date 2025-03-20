import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ShoppingBag, Lightbulb } from 'lucide-react';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      industry: "Healthcare",
      icon: <Heart className="h-10 w-10 text-white" />,
      title: "Medical Clinic Chain",
      improvement: "30% less waiting time",
      description: "Implemented an AI booking system that reduced patient wait times and administrative workload while improving appointment adherence.",
      iconBg: "bg-red-500"
    },
    {
      industry: "E-commerce",
      icon: <ShoppingBag className="h-10 w-10 text-white" />,
      title: "Online Retailer",
      improvement: "25% more conversions",
      description: "Deployed an AI sales assistant that provides personalized product recommendations and answers questions 24/7, increasing conversion rates.",
      iconBg: "bg-green-500"
    },
    {
      industry: "Marketing",
      icon: <Lightbulb className="h-10 w-10 text-white" />,
      title: "Advertising Agency",
      improvement: "40% more efficiency",
      description: "Created a custom AI workflow that automates client communications, project updates, and basic creative briefs, freeing staff for strategic work.",
      iconBg: "bg-amber-500"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-lokai-gray-light">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            See how businesses like yours have transformed their operations with Lokai AI agents
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`${study.iconBg} p-2 rounded-lg`}>
                    {study.icon}
                  </div>
                  <span className="text-gray-500 font-medium">{study.industry}</span>
                </div>
                <CardTitle className="text-xl">{study.title}</CardTitle>
                <div className="mt-2 inline-block bg-lokai-blue/10 text-lokai-blue font-medium text-sm py-1 px-3 rounded-full">
                  {study.improvement}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {study.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lokai-blue font-medium hover:underline cursor-pointer">
            View more case studies →
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;