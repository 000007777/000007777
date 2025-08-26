import React from 'react';
import { Signal } from '../../types';

interface SignalResultDisplayProps {
  signal: Signal | null;
}

const SignalResultDisplay: React.FC<SignalResultDisplayProps> = ({ signal }) => {
  if (!signal) return null;

  const isPlayer = signal === Signal.PLAYER;
  const baseColor = isPlayer ? '#007bff' : '#dc3545';
  const glowColor = isPlayer ? '#00aaff' : '#ff4757';
  const borderColor = isPlayer ? 'border-blue-500' : 'border-red-500';
  const animationName = isPlayer ? 'glow-pulse-blue' : 'glow-pulse-red';

  return (
    <div 
        className={`w-full max-w-md bg-black/30 border-2 ${borderColor} p-6 relative overflow-hidden flex flex-col items-center justify-center text-center animate-reveal`}
        style={{ '--base-color': baseColor, '--glow-color': glowColor, animationName: animationName, animationDuration: '3s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' } as React.CSSProperties}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10" style={{ backgroundImage: `linear-gradient(${baseColor} 1px, transparent 1px), linear-gradient(to right, ${baseColor} 1px, transparent 1px)` }}></div>
      <div className="absolute top-0 left-0 w-full h-2 bg-scanline animate-scanline" style={{ background: `linear-gradient(to bottom, ${baseColor}, transparent)` }}></div>

      <h2 className="text-xl md:text-2xl text-gray-400 tracking-[0.2em] uppercase mb-4">Сигнал определён:</h2>
      <p 
        className="text-5xl md:text-7xl font-bold tracking-[0.2em] uppercase text-white" 
        style={{ textShadow: `0 0 10px #fff, 0 0 20px ${baseColor}, 0 0 30px ${baseColor}` }}
      >
        {signal}
      </p>

      <style>{`
        .bg-grid-pattern {
          background-size: 20px 20px;
        }
        
        @keyframes reveal {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-reveal {
          animation: reveal 0.7s ease-out forwards;
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(2000%); }
        }
        .animate-scanline {
            animation: scanline 4s linear infinite;
            animation-delay: 1s;
        }

        @keyframes glow-pulse-blue {
          0%, 100% {
            box-shadow: 0 0 20px #007bff, 0 0 40px #007bff;
            border-color: #007bff;
          }
          50% {
            box-shadow: 0 0 30px #00aaff, 0 0 60px #00aaff;
            border-color: #00aaff;
          }
        }

        @keyframes glow-pulse-red {
          0%, 100% {
            box-shadow: 0 0 20px #dc3545, 0 0 40px #dc3545;
            border-color: #dc3545;
          }
          50% {
            box-shadow: 0 0 30px #ff4757, 0 0 60px #ff4757;
            border-color: #ff4757;
          }
        }
      `}</style>
    </div>
  );
};

export default SignalResultDisplay;
