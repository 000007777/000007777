import React from 'react';
import GlowingButton from '../common/GlowingButton';

interface Screen1ConnectionProps {
  onConnect: () => void;
}

const Screen1Connection: React.FC<Screen1ConnectionProps> = ({ onConnect }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center animate-fadeIn">
      <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.2em] mb-4 text-shadow-purple">
        Подключение к серверам казино
      </h1>
      <p className="text-md md:text-lg text-gray-300 max-w-3xl mb-10 leading-relaxed text-shadow-purple-light">
        Система HACKBACCARAT использует нейронную сеть для анализа зашифрованного потока данных с серверов Evolution. Проникая через уязвимости в протоколах, скрипт перехватывает пакеты данных за секунды до начала раздачи и с высокой точностью предсказывает исход.
      </p>
      <div className="w-48 h-48 md:w-64 md:h-64 border-2 border-[#9D00FF] p-4 mb-12 animate-pulse shadow-[0_0_20px_#9D00FF]">
        <div className="w-full h-full border border-[#9D00FF]/50 flex items-center justify-center">
            <svg className="w-24 h-24 md:w-32 md:h-32 text-[#9D00FF] animate-spin-slow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
        </div>
      </div>
      <GlowingButton onClick={onConnect}>
        Перейти на сайт казино
      </GlowingButton>
      <style>{`
        .animate-fadeIn { animation: fadeIn 1s ease-in-out; }
        @keyframes fadeIn { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        .text-shadow-purple { text-shadow: 0 0 5px #9D00FF, 0 0 10px #9D00FF; }
        .text-shadow-purple-light { text-shadow: 0 0 3px #9D00FF; }
        .animate-spin-slow { animation: spin 3s linear infinite; }
      `}</style>
    </div>
  );
};

export default Screen1Connection;