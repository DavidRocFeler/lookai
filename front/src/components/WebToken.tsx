import React, { CSSProperties, MouseEvent } from "react";

const WebToken = ({className, style, onClick}: {
    className?: string; 
    style?: CSSProperties
    onClick?: (e: MouseEvent<SVGSVGElement>) => void;
}) => {
    return (
      <svg
        width="153"
        height="153"
        viewBox="0 0 153 153"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
        onClick={onClick}
      >
        <circle cx="76.5" cy="76.5" r="76.5" fill="url(#paint0_linear_436_1176)" />
        <path
          d="M72.9331 18.018C78.5599 13.3352 86.368 13.5956 90.3684 18.4024L136.229 73.5069C138.127 75.788 137.607 79.4817 134.867 81.7624C132.126 84.0431 128.4 83.8836 126.501 81.6025L82.5518 28.794C81.2854 27.2723 78.9184 27.281 77.3128 28.6173C75.7071 29.9536 75.2687 32.2796 76.5351 33.8013L120.484 86.6098C124.485 91.4165 123.323 99.1421 117.696 103.825L80.9598 134.398C75.333 139.081 67.5249 138.821 63.5245 134.014L17.6644 78.9095C13.664 74.1028 14.8258 66.3772 20.4526 61.6944L72.9331 18.018ZM95.09 105.957C95.3782 104.147 94.9283 102.37 93.8152 101.032C92.702 99.6949 91.0367 98.9298 89.2038 98.8845C87.3737 98.8392 85.5196 99.5132 84.0413 100.744C82.5629 101.974 81.5634 103.675 81.2756 105.483C80.9874 107.293 81.4373 109.07 82.5504 110.407C83.6636 111.745 85.3289 112.51 87.1618 112.555C88.9919 112.601 90.846 111.927 92.3243 110.696C93.8027 109.466 94.8021 107.765 95.09 105.957Z"
          fill="black"
          stroke="black"
        />
        <defs>
          <linearGradient
            id="paint0_linear_436_1176"
            x1="76.5"
            y1="0"
            x2="76.5"
            y2="153"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="#999999" />
          </linearGradient>
        </defs>
      </svg>
    );
  };
  
  export default WebToken;