import { Card } from '../types';
import { PATTERNS } from '../constants/patterns';

export const generateCards = (count: number): Card[] => {
  const pairs = count / 2;
  const selectedPatterns = PATTERNS.slice(0, pairs);
  
  const cards: Card[] = [];
  selectedPatterns.forEach((pattern, index) => {
    cards.push(
      { id: index * 2, pattern, isFlipped: false, isMatched: false },
      { id: index * 2 + 1, pattern, isFlipped: false, isMatched: false }
    );
  });
  
  return shuffleArray(cards);
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};