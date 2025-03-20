'use client'
import React, { useState, useEffect } from 'react';
import ChatAI from './ChatAI';

const SphericalWaveBigger = () => {
  const [ openModalchatAI, setOpenModalchatAI ] = useState(false);

  const onCLickOpenaModal = () => {
    setOpenModalchatAI(true)
  }

  const onClickCloseModal = () => {
    setOpenModalchatAI(false)
  }

  useEffect(() => {
    if (openModalchatAI) {
      // Deshabilitar scroll
      document.body.style.overflow = 'hidden';
      
      // Posicionar en la parte superior
      window.scrollTo(0, 0);
    } else {
      // Restaurar scroll cuando se cierra el modal
      document.body.style.overflow = 'unset';
    }

    // Limpiar efecto al desmontar
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [openModalchatAI]);

  return (
    <>
      <div onClick={onCLickOpenaModal} className='fixed z-[2222] right-4 bottom-4 cursor-pointer'>
        {/* Outer container that holds all the waves */}
        <div className="relative w-[4rem] h-[4rem]"> {/* Adjusted size to make the effect more visible */}    
          {/* Outer wave effects */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D1CDBD] via-[#AAB3BC] to-[#D1CDBD] blur-md animate-pulse"></div>
          <div className="absolute inset-0 rounded-full bg-lokai-blue"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#AAB3BC] via-[#D5CDD4] to-[#AAB3BC] opacity-25"></div>  
          {/* Inner circle (white sky) */}
          <div className="absolute inset-0 m-auto w-[2rem] h-[2rem] rounded-full bg-white blur-sm animate-latido"></div>
        </div>
      </div>
      {openModalchatAI && (
        <div className='fixed inset-0 z-[3333] flex items-center justify-center bg-black bg-opacity-[70%] backdrop-blur-xl overflow-auto'>
          <ChatAI
            onCLose={onClickCloseModal}
          />
        </div>
      )}
    </>
  );
};

export default SphericalWaveBigger;
