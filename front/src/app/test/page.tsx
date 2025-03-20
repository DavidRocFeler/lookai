'use client'
import ChatAI from '@/components/ChatAI'
import { servicesAreasHelpers } from '@/helpers/servicesAreas.helpers'
import React from 'react'
import { useState } from 'react'

const Test = () => {
  const [ openModalchatAI, setOpenModalchatAI ] = useState(false);

  const onClickCloseModal = () => {
    setOpenModalchatAI(false)
  }


  return (
    <div className='bg-red-500 flex justify-center'>
      <ChatAI
      onCLose={onClickCloseModal}
      />
    </div>
  )
}

export default Test