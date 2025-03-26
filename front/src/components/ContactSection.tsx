import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { Toaster } from "@/components/ui/sonner";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Form submitted! We'll get back to you within 24 hours.");
  };

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your customer service with AI? Contact us today for a free consultation.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-lokai-blue mt-1" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+31 6 86286897</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-lokai-blue mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">davidnatanrocfeler.gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-lokai-blue mt-1" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">
                    Dellenweg 115<br />
                    8161 PW Epe<br />
                    The Netherlands
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-lokai-blue mt-1" />
                <div>
                  <h3 className="font-semibold">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 5:00 PM CET<br />
                    Our AI agents: 24/7/365
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-semibold mb-3">Our Guarantees</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-lokai-blue"></div>
                  <span>Hassle-free implementation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-lokai-blue"></div>
                  <span>Adaptation to your business model</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-lokai-blue"></div>
                  <span>No long-term contracts</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-lokai-blue"></div>
                  <span>Permanent technical support</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle>Schedule Your Free Consultation</CardTitle>
                <CardDescription>
                  Fill out the form below and we will contact you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">
                        First Name*
                      </label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name*
                      </label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address*
                    </label>
                    <Input id="email" type="email" placeholder="john@company.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name*
                    </label>
                    <Input id="company" placeholder="Your Company" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="industry" className="text-sm font-medium">
                      Industry
                    </label>
                    <Input id="industry" placeholder="e.g., Healthcare, E-commerce, etc." />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      How can we help you?
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your business needs..."
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <div className="pt-2">
                    <Button type="submit" className="w-full bg-lokai-blue hover:bg-lokai-blue-dark text-white">
                    Request a meeting
                    </Button>
                  </div>
                  
                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="text-lokai-blue hover:underline">Privacy Policy</a>{" "}
                    and{" "}
                    <a href="#" className="text-lokai-blue hover:underline">Terms of Service</a>.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default ContactSection;