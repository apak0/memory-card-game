export type GameState = 'home' | 'playing';

export interface Card {
  id: number;
  pattern: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameContextType {
  cards: Card[];
  score: number;
  selectedCards: Card[];
  gameState: GameState;
  cardCount: number;
  setCardCount: (count: number) => void;
  startGame: () => void;
  resetGame: () => void;
  handleCardClick: (card: Card) => void;
  shuffleCards: () => void;
  solveAll: () => void;
}