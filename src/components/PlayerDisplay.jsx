import React from 'react';

function PlayerDisplay({ currentPlayer }) {
  if (!currentPlayer) {
    return <p>No player selected.</p>;
  }

  return (
    <div>
      <h2>{currentPlayer.name}'s Turn</h2>
      <p>Health: {currentPlayer.health}</p>
      <p>Actions: Movement - {currentPlayer.movement}, Attack - {currentPlayer.attack}</p>
      {/* Add more player details as needed */}
    </div>
  );
}

export default PlayerDisplay;
