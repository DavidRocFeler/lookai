import React from "react";

interface RobotIconProps {
    className?: string;
  }
  
  const RobotAutomate: React.FC<RobotIconProps> = ({ className }) => {
    return (
        <svg 
        className={`svg-inline--fa fa-robot fa-w-20 ${className || ''}`} 
        aria-hidden="true" 
        focusable="false" 
        data-prefix="fas" 
        data-icon="robot" 
        role="img" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 640 512" 
        >
            <path 
            fill="currentColor" 
            d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z">
            </path>
        </svg>
    );
  };
  
  export default RobotAutomate;