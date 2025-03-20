'use client'
import { cardInfoService } from '@/helpers/infoService.helpers'
import { IInforCardServiceProps } from '@/interfaces/types'
import React, { useEffect, useState } from 'react'

const InfoCardService: React.FC<IInforCardServiceProps>= ({serviceID}) => {
  const [currentGroupItems, setCurrentGroupItems] = useState<any[]>([]);

  useEffect(() => {
    if (serviceID !== null) {
      console.log('ServiceID', serviceID)
      
      // Encuentra el grupo que coincide con serviceID
      const selectedGroup = cardInfoService.find(group => group.id === serviceID);
      
      // Establece los groupItems de ese grupo
      if (selectedGroup) {
        setCurrentGroupItems(selectedGroup.groupItems);
      }
    }
  }, [serviceID])

  return (  
    <div className='grid grid-cols-1 space-y-4 h-[8rem] xsscustom:h-[20rem] overflow-auto'>
        {currentGroupItems.map((item) => 
           <section key={item.id} className="grid grid-cols-2 w-[80%] mx-auto">
           <img className='w-[4rem]' src={item.iconService} />
           <div className='flex flex-col'>
               <p className="text-gray-700 font-bold w-fit"> {item.typeService} </p>
               <p className="text-gray-700 text-sm w-[100%]"> {item.descriptionService} </p>
           </div>
          </section>
        )}
    </div>
  )
}

export default InfoCardService