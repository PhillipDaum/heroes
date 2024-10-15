import React, { useState } from 'react';
import Gameboard from './components/Gameboard';
import PlayerDisplay from './components/PlayerDisplay';
import Buttons from './components/Buttons';
import { heroes } from './data/heroes'; // import heroes data
import { rooms } from './data/rooms'; // import rooms data
import { monsters } from './data/monsters'; // import monsters data
import { generateRandomChestLocation } from './utils/utils.jsx'; // helper function for random chest location

function App() {
  const [gameState, setGameState] = useState({
    playerQuantity: 0, // this is making things easier for me
    playerInTurn: null,
    players: [], // players in order of initiative
    rooms: [], // rooms in play
    monsters: [], // monsters in play
    quest: "The Great Goblin Hunt",
    currentPlayerIndex: 0, // track whose turn it is
  });

  // between 2 and 6 players
  // no need to program in the monster logic. The other player will drive the 

  // const [turn, setTurn] = useState({
  //   movement: true,
  //   action: true,
  //   bonusAction: true,
  // });

  // const selectHero = (hero) => {
  //   setGameState((prevState) => ({
  //     ...prevState,
  //     players: [...prevState.players, hero],
  //   }));
  // };

  // const endTurn = () => {
  //   setTurn({
  //     movement: true
          // movement will happen one space at a time, if it is takes place on the edge of a tile and more tiles exist, then ask if they want to look in
  //     action: true, // hit something, open chests, or move again.
  //     bonusAction: true, // take 
  //   });
  //   setGameState((prevState) => ({
  //     ...prevState,
  //     currentPlayerIndex: (prevState.currentPlayerIndex + 1) % prevState.players.length,
  //   }));
  // };

    /// some kind of game function that runs in order
    //// first how many people are playing? - it can be an integer between one and four
    //// players 
    //// new state - that many people choose a hero, once someone chooses one, its gone, player one is lucky 


  return (
    <div>
      {/* I want this to be in another component */}
      {console.log(gameState)}
      {/* make this a quest info functional component */}
      <h1>Quest: {gameState.quest}</h1>
      {/* change to if it is less than 0 */}
      {gameState.players.length < 2 ? (
        // make this a functional component
        <div>
          <h2>Select a Hero</h2>
          <h3>player { 2 }</h3>
          {heroes.map((hero) => (
            <button key={hero.name} onClick={() => selectHero(hero)}>
              {hero.name}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <Gameboard rooms={gameState.rooms} />
          <PlayerDisplay player={gameState.players[gameState.currentPlayerIndex]} />
          <Buttons turn={turn} setTurn={setTurn} endTurn={endTurn} />
        </div>
      )}
    </div>
  );
}

export default App;
