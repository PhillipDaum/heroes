import React from 'react';
import Button from './Button';

function Buttons({ endTurn, logGameState }) {
  return (
    <div>
      <Button onClick={endTurn} label="End Turn" />
      <Button onClick={logGameState} label="Log Game State" />
    </div>
  );
}

export default Buttons;
