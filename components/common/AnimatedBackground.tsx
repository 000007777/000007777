import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-purple-500/10"
          style={{
            width: '1px',
            height: `${Math.random() * 60 + 20}%`,
            left: `${Math.random() * 100}%`,
            animation: `fall ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: `${Math.random() * -20}s`,
            top: '-70%',
          }}
        />
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(0); }
          100% { transform: translateY(220vh); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;