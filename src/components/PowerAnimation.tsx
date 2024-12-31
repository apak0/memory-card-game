import React from 'react';
import { Sparkles } from 'lucide-react';

export const PowerAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-purple-600 bg-opacity-90 z-50 flex items-center justify-center animate-powerIn">
      <Sparkles className="w-32 h-32 text-white animate-pulse" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>
    </div>
  );
};