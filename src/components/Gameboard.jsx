import React from 'react';

function Gameboard({ rooms }) {
  return (
    <div>
      <h2>Game Board</h2>
      <div className="room-grid">
        {rooms.map((room, index) => (
          <div key={index} className="room-card">
            {room.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gameboard;
