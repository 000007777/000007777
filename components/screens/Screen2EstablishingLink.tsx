import React, { useState, useEffect } from 'react';

interface Screen2EstablishingLinkProps {
  onLinkEstablished: () => void;
}

const HACKING_MESSAGES = [
  '> Обход защиты Firewall...',
  '> Поиск уязвимостей в протоколе...',
  '> Расшифровка потока данных Evolution Gaming...',
  '> Инъекция скрипта HACKBACCARAT...',
  '> Получение доступа...',
  '> ...'
];

const TOTAL_DURATION = 30000; // 30 seconds
const MESSAGE_INTERVAL = 5000; // 5 seconds

const Screen2EstablishingLink: React.FC<Screen2EstablishingLinkProps> = ({ onLinkEstablished }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setMessageIndex(prevIndex => (prevIndex + 1));
    }, MESSAGE_INTERVAL);

    const startTime = Date.now();
    const progressTimer = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = Math.min(100, (elapsedTime / TOTAL_DURATION) * 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(progressTimer);
        clearInterval(messageTimer);
        setIsComplete(true);
        setTimeout(onLinkEstablished, 2000); 
      }
    }, 100);

    return () => {
      clearInterval(messageTimer);
      clearInterval(progressTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isComplete) {
    return (
      <div className="flex flex-col items-center justify-center text-center animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-[#00FF7F] text-shadow-green">
          Связь установлена!
        </h1>
        <style>{`
          .animate-fadeIn { animation: fadeIn 1s ease-in-out; }
          @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
          .text-shadow-green { text-shadow: 0 0 10px #00FF7F, 0 0 20px #00FF7F; }
        `}</style>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center animate-fadeIn">
      <div className="w-full max-w-2xl p-4 border-2 border-[#9D00FF]/50 min-h-[100px] flex items-center">
        <p className="text-lg md:text-xl h-8 text-[#9D00FF] animate-typing">{HACKING_MESSAGES[messageIndex]}</p>
      </div>
      <div className="w-full max-w-2xl mt-8">
        <div className="w-full bg-[#1a1a1d] border-2 border-[#9D00FF] h-8 p-1">
          <div
            className="bg-[#9D00FF] h-full transition-all duration-100 ease-linear shadow-[0_0_10px_#9D00FF]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-right text-xl md:text-2xl mt-2 text-[#9D00FF]">{Math.round(progress)}%</p>
      </div>
       <style>{`
        .animate-fadeIn { animation: fadeIn 1s ease-in-out; }
        @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
        .animate-typing::after {
          content: '_';
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Screen2EstablishingLink;
