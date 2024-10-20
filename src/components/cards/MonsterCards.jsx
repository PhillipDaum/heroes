import React from 'react';

const MonsterCard = ({ monster }) => {
    return (
        <div className="monster-card">
            <h3>{monster.name}</h3>
            <p>Health: {monster.health}</p>
            <p>Attack: {monster.attack}</p>
        </div>
    );
};

export default MonsterCard;
