import React, { useState } from 'react';
// import MonsterCard from './components/MonsterCards';
import { monsters } from './data/monsters';
import { heroes } from './data/heroes';
// import { generateRandomChestLocation } from '../utils/utils';

function App() {
  // global variables
  const [gameState, setGameState] = useState({
    players: [], // players and monsters in the order of initiative
    rooms: [], // rooms in play
    monsters: [], // monsters in play
    quest: "The Great Goblin Hunt", // Current quest name or details
    currentPlayerIndex: 0, // Tracks whose turn it is
  });
  const [turn, setTurn] = useState({
    movement: true,
    action: true,
    bonusAction: true,
  });
  const [selectedHero, setSelectedHero] = useState(null);

  // Function to log game state
  const logGameState = () => {
    console.log(gameState);
  };

  // Function to handle player hero selection
  const selectHero = (hero) => {
    setSelectedHero(hero);
    setGameState((prevState) => ({
      ...prevState,
      players: [...prevState.players, hero],
    }));
  };

  // Function to end turn and switch to the next player
  const endTurn = () => {
    setTurn({
      movement: true,
      action: true,
      bonusAction: true,
    });

    setGameState((prevState) => ({
      ...prevState,
      currentPlayerIndex: (prevState.currentPlayerIndex + 1) % prevState.players.length,
    }));

    logGameState(); // Log the game state after each turn
  };

  // Function to perform actions during a turn
  const performAction = (actionType) => {
    if (turn[actionType]) {
      console.log(`${gameState.players[gameState.currentPlayerIndex].name} performed ${actionType}`);
      setTurn((prevTurn) => ({
        ...prevTurn,
        [actionType]: false,
      }));
    } else {
      console.log(`${actionType} already used this turn!`);
    }
  };

  // Display heroes to choose from
  const heroSelectionDisplay = heroes.map((hero) => (
    <button key={hero.name} onClick={() => selectHero(hero)}>
      {hero.name}
    </button>
  ));

  return (
    <div>
      <h1>{gameState.quest}</h1>

      {/* Hero selection phase */}
      {gameState.players.length < 2 && (
        <div>
          <h2>Select Your Hero</h2>
          {heroSelectionDisplay}
        </div>
      )}

      {/* Game Play Phase */}
      {gameState.players.length === 2 && (
        <div>
          <h2>It's {gameState.players[gameState.currentPlayerIndex]?.name}'s Turn</h2>
          <p>Movement: {turn.movement ? "Available" : "Used"}</p>
          <p>Action: {turn.action ? "Available" : "Used"}</p>
          <p>Bonus Action: {turn.bonusAction ? "Available" : "Used"}</p>

          {/* Buttons to perform actions */}
          <div>
            <button onClick={() => performAction('movement')}>Move</button>
            <button onClick={() => performAction('action')}>Attack</button>
            <button onClick={() => performAction('bonusAction')}>Use Bonus Action</button>
          </div>

          {/* End turn button */}
          <button onClick={endTurn}>End Turn</button>

          {/* Button to log game state */}
          <button onClick={logGameState}>Log Game State</button>
        </div>
      )}
    </div>
  );
}

export default App;
