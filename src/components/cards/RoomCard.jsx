// RoomCard.jsx
import React from 'react';
import './RoomCard.css'; // We'll define some styles later

const RoomCard = ({ room }) => {
    const grid = Array.from({ length: 16 }, () => Array.from({ length: 16 }, () => '')); // 16x16 blank grid

    // Place the chest in its random location
    if (room.chest) {
        const [x, y] = room.chest;
        grid[y][x] = 'Chest';
    }

    return (
        <div className="room-card">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, cellIndex) => (
                        <div key={cellIndex} className={`cell ${cell}`}>
                            {cell === 'Chest' && <span role="img" aria-label="chest">🧰</span>}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default RoomCard;
