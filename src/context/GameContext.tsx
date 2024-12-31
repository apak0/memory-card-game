import React, { createContext, useContext, useState, useCallback } from 'react';
import { GameContextType, Card, GameState } from '../types';
import { generateCards, shuffleArray } from '../utils/gameUtils';

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [score, setScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [gameState, setGameState] = useState<GameState>('home');
  const [cardCount, setCardCount] = useState(4);

  const startGame = useCallback(() => {
    const newCards = generateCards(cardCount);
    setCards(newCards);
    setScore(0);
    setSelectedCards([]);
    setGameState('playing');
  }, [cardCount]);

  const resetGame = useCallback(() => {
    const newCards = generateCards(cardCount);
    setCards(newCards);
    setScore(0);
    setSelectedCards([]);
  }, [cardCount]);

  const solveAll = useCallback(() => {
    setCards(prev => prev.map(card => ({ ...card, isMatched: true })));
    setScore(prev => prev + cards.length * 5);
  }, [cards.length]);

  const handleCardClick = useCallback((clickedCard: Card) => {
    if (selectedCards.length === 2 || clickedCard.isMatched || clickedCard.isFlipped) return;

    setCards(prev => 
      prev.map(card => 
        card.id === clickedCard.id ? { ...card, isFlipped: true } : card
      )
    );

    setSelectedCards(prev => [...prev, clickedCard]);

    if (selectedCards.length === 1) {
      if (selectedCards[0].pattern === clickedCard.pattern) {
        setTimeout(() => {
          setCards(prev =>
            prev.map(card =>
              card.pattern === clickedCard.pattern ? { ...card, isMatched: true } : card
            )
          );
          setScore(prev => prev + 10);
          setSelectedCards([]);
        }, 500);
      } else {
        setTimeout(() => {
          setCards(prev =>
            prev.map(card =>
              card.id === clickedCard.id || card.id === selectedCards[0].id
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setSelectedCards([]);
        }, 1000);
      }
    }
  }, [selectedCards]);

  const shuffleCards = useCallback(() => {
    setCards(prev => shuffleArray([...prev]));
  }, []);

  return (
    <GameContext.Provider
      value={{
        cards,
        score,
        selectedCards,
        gameState,
        cardCount,
        setCardCount,
        startGame,
        resetGame,
        handleCardClick,
        shuffleCards,
        solveAll,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};