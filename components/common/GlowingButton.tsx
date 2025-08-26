import React from 'react';

interface GlowingButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const GlowingButton: React.FC<GlowingButtonProps> = ({ onClick, children, className = '', disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        bg-transparent border-2 border-[#9D00FF] text-[#9D00FF] font-bold py-4 px-8 
        text-xl md:text-2xl tracking-widest uppercase transition-all duration-300 transform
        shadow-[0_0_10px_#9D00FF,0_0_20px_#9D00FF,0_0_30px_#9D00FF]
        hover:bg-[#9D00FF] hover:text-[#1a1a1d] 
        hover:shadow-[0_0_20px_#9D00FF,0_0_40px_#9D00FF,0_0_60px_#9D00FF]
        hover:scale-105
        active:scale-95
        disabled:border-gray-600 disabled:text-gray-600 disabled:shadow-none disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:scale-100
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default GlowingButton;
