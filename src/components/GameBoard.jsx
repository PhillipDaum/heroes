import React from 'react';

function Gameboard({ rooms }) {
  return (
    <div>
      <h2>Rooms in Play</h2>
      <div className="room-grid">
        {rooms.length > 0 ? (
          rooms.map((room, index) => (
            <div key={index} className={`room-card ${room.orientation}`}>
              {room.name}
            </div>
          ))
        ) : (
          <p>No rooms in play yet.</p>
        )}
      </div>
    </div>
  );
}

export default Gameboard;
