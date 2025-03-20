import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Star } from 'lucide-react';

const TrustSection = () => {
  // Placeholder client logos (would be replaced with actual images in a real implementation)
  const clientLogos = [
    "Company A", "Company B", "Company C", "Company D", "Company E", "Company F"
  ];

  const testimonials = [
    {
      quote: "The LOOKAI AI agents have revolutionized our customer service. We've seen a 35% reduction in operating costs while improving customer satisfaction scores.",
      author: "Sarah Johnson",
      position: "CEO, MediCare Clinics",
      rating: 5
    },
    {
      quote: "Implementation was smooth and the AI quickly learned our product catalog. Sales have increased by 28% since we deployed LOOKAI solution.",
      author: "Michael Chen",
      position: "E-commerce Director, HomeStyle",
      rating: 5
    },
    {
      quote: "The 24/7 availability of the LOOKAI AI has given us a competitive advantage. Our customers appreciate getting instant responses at any time.",
      author: "Ana Rodriguez",
      position: "Customer Success Manager, TechSolutions",
      rating: 4
    }
  ];

  return (
    <section id="trust" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Trusted by Innovative Companies</h2>
          <p className="text-lg text-gray-600">
            Join hundreds of forward-thinking businesses that have transformed their operations integrating AI
          </p>
        </div>

        {/* Client Logos */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {clientLogos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <div className="text-gray-400 font-medium">{logo}</div>
            </div>
          ))}
        </div> */}

        {/* Certifications */}
        {/* <div className="flex flex-wrap justify-center gap-6 mb-16">
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
            <BadgeCheck className="h-5 w-5 text-lokai-blue" />
            <span className="text-gray-700 font-medium">ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
            <BadgeCheck className="h-5 w-5 text-lokai-blue" />
            <span className="text-gray-700 font-medium">GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
            <BadgeCheck className="h-5 w-5 text-lokai-blue" />
            <span className="text-gray-700 font-medium">SOC 2 Type II</span>
          </div>
        </div> */}

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
