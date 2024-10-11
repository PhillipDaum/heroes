import React from 'react';

function PlayerDisplay({ player }) {
  return (
    <div>
      <h2>{player.name}'s Turn</h2>
      <p>Health: {player.health}</p>
      <p>Strength: {player.strength}</p>
      <p>Special Ability: {player.ability}</p>
    </div>
  );
}

export default PlayerDisplay;
