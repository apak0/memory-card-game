import React, { useEffect, useState } from 'react';
import { useGame } from '../context/GameContext';
import { Shuffle, RefreshCw } from 'lucide-react';
import { Card } from './Card';
import { WinModal } from './WinModal';
import { PowerButton } from './PowerButton';
import { PowerAnimation } from './PowerAnimation';
import { usePowerAnimation } from '../hooks/usePowerAnimation';

export const GameScreen: React.FC = () => {
  const { cards, score, handleCardClick, shuffleCards, resetGame, solveAll } = useGame();
  const [showWinModal, setShowWinModal] = useState(false);
  const [powerUsed, setPowerUsed] = useState(false);
  const { showAnimation, triggerPower } = usePowerAnimation(() => {
    solveAll();
    setPowerUsed(true);
  });

  useEffect(() => {
    const allMatched = cards.length > 0 && cards.every(card => card.isMatched);
    if (allMatched) {
      setShowWinModal(true);
    }
  }, [cards]);

  const handleCloseWinModal = () => {
    setShowWinModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white rounded-lg shadow-lg p-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-purple-600">Eşleşmece</h1>
          <div className="text-2xl font-semibold">Score: {score}</div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {cards.map((card) => (
            <Card key={card.id} card={card} onClick={handleCardClick} />
          ))}
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={shuffleCards}
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-lg text-purple-600 hover:bg-purple-50 transition-all transform hover:scale-105"
          >
            <Shuffle className="w-5 h-5" />
            Shuffle Cards
          </button>
          <button
            onClick={resetGame}
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-lg text-purple-600 hover:bg-purple-50 transition-all transform hover:scale-105"
          >
            <RefreshCw className="w-5 h-5" />
            New Game
          </button>
          <PowerButton onClick={triggerPower} disabled={powerUsed} />
        </div>
      </div>
      {showWinModal && <WinModal onClose={handleCloseWinModal} />}
      {showAnimation && <PowerAnimation />}
    </div>
  );
};