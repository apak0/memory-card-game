import React from 'react';
import { Card as CardType } from '../types';

interface CardProps {
  card: CardType;
  onClick: (card: CardType) => void;
}

export const Card: React.FC<CardProps> = ({ card, onClick }) => {
  return (
    <div
      onClick={() => onClick(card)}
      className={`aspect-square cursor-pointer transform transition-all duration-500 ${
        card.isFlipped ? 'rotate-y-180' : ''
      } ${
        card.isMatched ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
      }`}
    >
      <div
        className={`relative w-full h-full transform-style-3d transition-transform duration-500 ${
          card.isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center backface-hidden border-2 border-purple-200">
          <div className="w-12 h-12 rounded-full bg-purple-100" />
        </div>
        <div className="absolute w-full h-full bg-purple-500 rounded-xl shadow-lg flex items-center justify-center backface-hidden rotate-y-180 text-6xl">
          {card.pattern}
        </div>
      </div>
    </div>
  );
};