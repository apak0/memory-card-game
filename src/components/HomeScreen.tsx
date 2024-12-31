import React from 'react';
import { useGame } from '../context/GameContext';
import { Brain } from 'lucide-react';

export const HomeScreen: React.FC = () => {
  const { cardCount, setCardCount, startGame } = useGame();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full space-y-8 transform transition-all">
        <div className="text-center">
          <Brain className="mx-auto h-16 w-16 text-purple-600" />
          <h1 className="mt-4 text-4xl font-bold text-gray-900">Eşleşmece</h1>
          <p className="mt-2 text-gray-600">Test your memory with this matching game!</p>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="cardCount" className="block text-sm font-medium text-gray-700">
              Number of Cards
            </label>
            <select
              id="cardCount"
              value={cardCount}
              onChange={(e) => setCardCount(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            >
              {[4, 6, 8, 10].map((num) => (
                <option key={num} value={num}>
                  {num} Cards
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={startGame}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transform transition-all hover:scale-105"
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};