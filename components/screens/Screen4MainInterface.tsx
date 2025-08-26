import React, { useState, useEffect } from 'react';
import { Signal } from '../../types';
import GlowingButton from '../common/GlowingButton';
import SignalResultDisplay from './SignalResultDisplay';

type Status = 'IDLE' | 'ANALYZING' | 'RESULT';

const NeuralNetworkAnimation = () => (
    <div className="relative w-64 h-48 my-8 flex items-center justify-center flex-col">
        <div className="absolute w-full h-full border border-purple-500/30 rounded-lg animate-pulse"></div>
        <div className="absolute w-3/4 h-3/4 border border-purple-500/50 rounded-lg animate-pulse" style={{ animationDelay: '200ms' }}></div>
        <div className="absolute w-1/2 h-1/2 border border-purple-500/70 rounded-lg animate-pulse" style={{ animationDelay: '400ms' }}></div>
        <p className="text-xl md:text-2xl text-[#9D00FF] z-10 animate-pulse tracking-widest">ИДЕТ АНАЛИЗ...</p>
    </div>
);


const Screen4MainInterface: React.FC = () => {
    const [status, setStatus] = useState<Status>('IDLE');
    const [signal, setSignal] = useState<Signal | null>(null);
    const [countdown, setCountdown] = useState(30);

    useEffect(() => {
        if (status === 'RESULT' && countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [status, countdown]);

    const handleGetSignal = () => {
        setStatus('ANALYZING');
        setTimeout(() => {
            const newSignal = Math.random() > 0.5 ? Signal.PLAYER : Signal.BANKER;
            setSignal(newSignal);
            setStatus('RESULT');
            setCountdown(30); // Reset countdown on new signal
        }, 4500); // 4.5 second animation
    };
    
    const handleReset = () => {
        setStatus('IDLE');
        setSignal(null);
    };

    const renderContent = () => {
        switch (status) {
            case 'ANALYZING':
                return <NeuralNetworkAnimation />;
            case 'RESULT':
                return (
                    <div className="w-full flex flex-col items-center">
                        <div className="mb-8 w-full flex justify-center">
                            <SignalResultDisplay signal={signal} />
                        </div>
                        {countdown > 0 ? (
                            <GlowingButton onClick={() => {}} disabled={true}>
                                Новый сигнал через: {countdown}с
                            </GlowingButton>
                        ) : (
                            <GlowingButton onClick={handleReset}>
                                Получить новый сигнал
                            </GlowingButton>
                        )}
                    </div>
                );
            case 'IDLE':
            default:
                return (
                    <GlowingButton onClick={handleGetSignal}>
                        Получить сигнал
                    </GlowingButton>
                );
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center text-center animate-fadeIn min-h-[400px]">
            <header className="w-full max-w-3xl mb-12">
                <div className="flex justify-between items-center border-2 border-[#9D00FF]/50 p-4">
                    <h1 className="text-2xl md:text-4xl font-bold tracking-widest text-shadow-purple">HACKBACCARAT</h1>
                    <div className="flex items-center space-x-2">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF7F] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00FF7F]"></span>
                        </span>
                        <p className="text-lg md:text-xl text-[#00FF7F] uppercase tracking-wider">Статус: Подключено</p>
                    </div>
                </div>
            </header>
            <div className="flex-grow flex items-center justify-center">
                {renderContent()}
            </div>
            <style>{`
                .animate-fadeIn { animation: fadeIn 1s ease-in-out; }
                @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
                .text-shadow-purple { text-shadow: 0 0 5px #9D00FF, 0 0 10px #9D00FF; }
            `}</style>
        </div>
    );
};

export default Screen4MainInterface;