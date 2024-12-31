import React from 'react';
import { Zap } from 'lucide-react';

interface PowerButtonProps {
  onClick: () => void;
  disabled: boolean;
}

export const PowerButton: React.FC<PowerButtonProps> = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105 ${
        disabled 
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
          : 'bg-yellow-400 text-purple-900 hover:bg-yellow-300'
      }`}
    >
      <Zap className="w-5 h-5" />
      Eşmeli Power
    </button>
  );
};