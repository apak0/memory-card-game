import React from 'react';
import { Trophy } from 'lucide-react';
import { useGame } from '../context/GameContext';

interface WinModalProps {
  onClose: () => void;
}

export const WinModal: React.FC<WinModalProps> = ({ onClose }) => {
  const { score, resetGame } = useGame();

  const handlePlayAgain = () => {
    resetGame();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className="bg-white rounded-xl p-8 max-w-md w-full transform transition-all animate-scaleIn">
        <div className="text-center space-y-4">
          <Trophy className="mx-auto h-16 w-16 text-yellow-400" />
          <h2 className="text-3xl font-bold text-gray-900">Congratulations!</h2>
          <p className="text-xl text-gray-600">You won with a score of {score}!</p>
          <button
            onClick={handlePlayAgain}
            className="w-full mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors transform hover:scale-105"
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};