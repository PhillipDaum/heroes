import React from 'react';
import Button from './Button';

function Buttons({ turn, setTurn, endTurn }) {
  const handleAction = (actionType) => {
    if (turn[actionType]) {
      setTurn((prevTurn) => ({
        ...prevTurn,
        [actionType]: false,
      }));
    } else {
      console.log(`${actionType} already used this turn!`);
    }
  };

  return (
    <div>
      <Button label="Move" onClick={() => handleAction('movement')} disabled={!turn.movement} />
      <Button label="Attack" onClick={() => handleAction('action')} disabled={!turn.action} />
      <Button label="Bonus Action" onClick={() => handleAction('bonusAction')} disabled={!turn.bonusAction} />
      <Button label="End Turn" onClick={endTurn} />
    </div>
  );
}

export default Buttons;
