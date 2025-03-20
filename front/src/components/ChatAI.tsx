import SphericalWave from '@/components/SphericalWave'
import { Button } from '@/components/ui/button'
import { IChatAI } from '@/interfaces/types'
import { ArrowRight, X } from 'lucide-react'
import React from 'react'

const ChatAI: React.FC<IChatAI> = ({onCLose}) => {

  return (
      <div className="w-full xlcustom:w-[50%] shadow-2xl bg-white relative pt-[53rem] xlcustom:pt-[7rem]">
        <div className="p-4 bg-lokai-blue text-white flex items-center fixed top-0 gap-2 w-[100%] xlcustom:w-[50%] z-[3333]">
          <SphericalWave/>
          <span className="font-medium">Lookai Agent</span>
            <button onClick={onCLose} className='ml-auto'>
             <X/>
            </button>
        </div>
        <div className="p-4">
          <div className="flex gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-lokai-blue/10 flex items-center justify-center">
            <SphericalWave/>
            </div>
            <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
              <p className="text-sm text-gray-800">
              Hi, I'm Lookai! Your AI agent with the ability to understand human language, reason, automate, and run applications hosted on the internet through prior training. If you'd like, I can tell you more about Lookai, or if you need us to answer any questions you may have about our service, I'll also be happy to assist you with anything you need.
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
                Yes, I'm interested in improving my sales service
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
              Our travel agency sales service uses artificial intelligence to completely transform your sales strategy. We develop a system that analyzes your customers' behavior, predicts their travel preferences, and creates personalized sales paths. We can automate lead follow-up, generate instant quotes, and create unique value propositions for each type of traveler, significantly increasing your closing rates and improving the customer experience.
              Would you like to learn more about how we can boost your travel agency's sales?
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
        <div className="fixed bottom-0 px-3 py-4 w-full xlcustom:w-[50%] border-t border-gray-100 bg-white  bg-opacity-[70%] backdrop-blur-md">
          <div className="relative">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 pl-4 pr-10 rounded-full border border-gray-200 focus:outline-none bg-white focus:ring-2 focus:ring-lokai-blue/50 text-sm"
            />
            <Button className="absolute right-1 top-1 bg-lokai-blue text-white h-8 w-8 rounded-full p-0 flex items-center justify-center">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
  )
}

export default ChatAI;