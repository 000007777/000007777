import React from 'react';
import GlowingButton from '../common/GlowingButton';

interface Screen3GameSelectionProps {
  onGameSelect: () => void;
}

const Screen3GameSelection: React.FC<Screen3GameSelectionProps> = ({ onGameSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center animate-fadeIn">
      <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.2em] mb-12 text-shadow-purple">
        Выберите игру
      </h1>
      <GlowingButton onClick={onGameSelect}>
        First Person Baccarat Evolution
      </GlowingButton>
      <style>{`
        .animate-fadeIn { animation: fadeIn 1s ease-in-out; }
        @keyframes fadeIn { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        .text-shadow-purple { text-shadow: 0 0 5px #9D00FF, 0 0 10px #9D00FF; }
      `}</style>
    </div>
  );
};

export default Screen3GameSelection;