'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { X, ArrowRight } from 'lucide-react';
import InfoCardService from '@/components/InfoCardService';
import { ICardTitleService } from '@/interfaces/types';

const CardServiceBluur: React.FC<ICardTitleService> = ({id ,title, icon, iconClassName, onClose}) => {
    const [ isMobileScreen, setIsMobileScreen ] = useState(false);
    const [ serviceID, setServiceID ] = useState<number | null>(null);

    const styledIcon = React.isValidElement(icon) 
    ? React.cloneElement(icon, {
        className: iconClassName
      } as React.Attributes)
    : icon;

    useEffect (() => {
        if (serviceID !== null ) {
          setTimeout(() => {
            alert('Scroll to see more')
          }, 100)
        }
        const checkMobileScreen = () => {
            setIsMobileScreen(window.innerWidth < 500)
        };
        checkMobileScreen();

        setServiceID(id)

        window.addEventListener('resize', checkMobileScreen);

        return () => {
            window.removeEventListener('resize', checkMobileScreen);
        }
    }, [id, serviceID])

  return (
      <div className="w-[100%] h-[100vh] flex justify-center items-center min-h-[100%] py-[2rem]">
        <Card className="w-[90%] h-fit pb-[2.5rem] md:w-[60%] xxlcustom:w-[50%] xllcustom:w-[45%] shadow-lg hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-4">
            <Button 
              className="text-white w-[2.5rem] ml-auto bg-[#2BAFD9] hover:bg-lokai-blue-dark"
              aria-label="Toggle menu"
              onClick={onClose}
            >
            <X className="h-6 w-6" />
            </Button>
            <div className="flex justify-center"> 
                {styledIcon}
             </div>
            <CardTitle className="text-2xl text-center"> {title} </CardTitle>
            <CardDescription className="text-center text-gray-600">
          
            </CardDescription>
          </CardHeader>

          <CardContent>             
            <InfoCardService serviceID={serviceID} />
          </CardContent>
          
          <Button className="mt-[2rem] mx-auto bg-lokai-blue hover:bg-lokai-blue-dark text-white font-medium py-[1.5rem] w-[60%] rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
          {isMobileScreen ? 'Consultation' : ' Schedule consultation'}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Card>
      
      </div>
  )
}

export default CardServiceBluur;