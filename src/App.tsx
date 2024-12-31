import React from 'react';
import { GameProvider } from './context/GameContext';
import { HomeScreen } from './components/HomeScreen';
import { GameScreen } from './components/GameScreen';
import { useGame } from './context/GameContext';

function GameContainer() {
  const { gameState } = useGame();
  return gameState === 'home' ? <HomeScreen /> : <GameScreen />;
}

function App() {
  return (
    <GameProvider>
      <GameContainer />
    </GameProvider>
  );
}

export default App;