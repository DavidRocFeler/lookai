import React from 'react';
import {
  AccordionRoot,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FaqSection = () => {
  const faqs = [
    {
      question: "How does it really work?",
      answer: "Our AI agents use advanced natural language processing to understand and serve your customers and execute applications based on programmed instructions. The system integrates with your frequently used software platforms and existing databases to access relevant information, allowing it to autonomously manage, book, answer questions, and support sales processes. For complex issues, AI seamlessly scales to human agents."
    },
    {
      question: "What is the cost?",
      answer: "Pricing depends on your business needs and scale. We offer flexible subscription plans starting at 10% of the cost of a LOOKAI agent. Each agent costs between $500 and $1,000 and is a one-time payment. The subscription includes options to scale with your business growth. Each plan includes implementation, training, and ongoing support. We'll be happy to provide a detailed quote based on your needs during a consultation."
    },
    {
      question: "Can I customize the agent?",
      answer: "Absolutely! Our AI agents are fully customizable to match your brand voice, industry terminology, and specific business processes. You can define response styles, escalation rules, and integration points with your existing systems. The AI continuously learns from interactions to improve its performance over time."
    },
    {
      question: "Which industries can benefit?",
      answer: "Our AI solutions have successfully transformed operations across multiple industries, including healthcare, e-commerce, financial services, travel, hospitality, real estate, and professional services. Any business with repetitive manual information processes benefits from our automation solutions."
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation takes 1 to 3 days from the moment you make the payment and provide us with your database information, which will then train your new agent to manage your business operations. This lead time includes customization, consultations, integration, testing, and training. We work closely with your team throughout the entire process to ensure a smooth transition and minimal disruption to your operations."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive ongoing support, including technical assistance, performance monitoring, regular updates, and optimization recommendations. Our support team is available via email, phone, and chat to address any issues promptly. We also provide regular performance reports and quarterly review meetings to ensure your AI solution continues to meet your evolving business needs."
    },
    {
      question: "If I am not satisfied, can I request a refund?",
      answer: "Our product includes a full support guarantee and comprehensive solutions from 9 a.m. to 5 p.m., Monday through Saturday. If you're still not satisfied, you can request a refund before the end of your first month of use."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our AI automation solutions
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <AccordionRoot type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Can&apos;t find the answer you&apos;re looking for?{" "}
            <a href="#contact" className="text-lokai-blue font-medium hover:underline">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;