import React, { useState } from 'react';
import GlowingButton from '../common/GlowingButton';

interface ScreenEnterIdProps {
  onIdSubmit: () => void;
}

const ScreenEnterId: React.FC<ScreenEnterIdProps> = ({ onIdSubmit }) => {
  const [id, setId] = useState('');

  return (
    <div className="flex flex-col items-center justify-center text-center animate-fadeIn">
      <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.2em] mb-12 text-shadow-purple">
        Введите ваш игровой ID 1WIN
      </h1>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Ваш ID..."
        className="bg-transparent border-2 border-[#9D00FF] text-white text-xl md:text-2xl text-center
                   w-full max-w-sm p-4 mb-12 tracking-widest focus:outline-none focus:shadow-[0_0_20px_#9D00FF]
                   transition-shadow duration-300"
      />
      <GlowingButton onClick={onIdSubmit} disabled={!id.trim()}>
        Подтвердить
      </GlowingButton>
      <style>{`
        .animate-fadeIn { animation: fadeIn 1s ease-in-out; }
        @keyframes fadeIn { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        .text-shadow-purple { text-shadow: 0 0 5px #9D00FF, 0 0 10px #9D00FF; }
        input::placeholder {
          color: #9D00FF;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default ScreenEnterId;
