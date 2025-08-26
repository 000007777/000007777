import React, { useState, useEffect } from 'react';

interface ScreenAccountVerificationProps {
  onVerificationComplete: () => void;
}

const ScreenAccountVerification: React.FC<ScreenAccountVerificationProps> = ({ onVerificationComplete }) => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verificationTimer = setTimeout(() => {
      setIsVerified(true);
    }, 4000); // 4 seconds for verification

    return () => clearTimeout(verificationTimer);
  }, []);

  useEffect(() => {
    if (isVerified) {
      const transitionTimer = setTimeout(() => {
        onVerificationComplete();
      }, 1500); // 1.5 seconds to show the success message
      return () => clearTimeout(transitionTimer);
    }
  }, [isVerified, onVerificationComplete]);

  return (
    <div className="flex flex-col items-center justify-center text-center animate-fadeIn">
      {isVerified ? (
        <div className="flex flex-col items-center justify-center animate-fadeIn">
             <svg className="w-48 h-48 text-[#00FF7F]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 12.5L11 15L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-checkmark" />
            </svg>
          <h1 className="mt-8 text-4xl md:text-5xl font-bold uppercase tracking-widest text-[#00FF7F] text-shadow-green">
            Аккаунт подтвержден
          </h1>
        </div>
      ) : (
        <>
          <div className="relative w-48 h-48 mb-8 flex items-center justify-center">
            <svg className="w-full h-full text-[#9D00FF] animate-pulse" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 10C17 12.7614 14.7614 15 12 15C9.23858 15 7 12.7614 7 10C7 7.23858 9.23858 5 12 5C14.7614 5 17 7.23858 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M19.9998 20C19.9998 17.2386 16.4181 15 11.9998 15C7.5815 15 3.99976 17.2386 3.99976 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-full">
                <div className="absolute w-full h-2 bg-[#9D00FF]/50 shadow-[0_0_10px_#9D00FF] animate-scanner"></div>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold uppercase tracking-[0.2em] text-shadow-purple">
            Проверка аккаунта...
          </h1>
        </>
      )}
      <style>{`
        .animate-fadeIn { animation: fadeIn 1s ease-in-out; }
        @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
        .text-shadow-purple { text-shadow: 0 0 5px #9D00FF, 0 0 10px #9D00FF; }
        .text-shadow-green { text-shadow: 0 0 10px #00FF7F, 0 0 20px #00FF7F; }

        @keyframes scanner {
            0% { top: -10%; }
            50% { top: 100%; }
            100% { top: -10%; }
        }
        .animate-scanner {
            animation: scanner 2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        }

        .animate-checkmark {
            stroke-dasharray: 50;
            stroke-dashoffset: 50;
            animation: draw 0.5s ease-out forwards;
            animation-delay: 0.2s;
        }
        @keyframes draw {
            to {
                stroke-dashoffset: 0;
            }
        }
      `}</style>
    </div>
  );
};

export default ScreenAccountVerification;