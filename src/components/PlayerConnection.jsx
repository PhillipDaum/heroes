import React, { useState, useEffect } from 'react';
import Peer from 'peerjs';
// other data?

function PlayerConnection({getData}) { 

// PeerJS stuff
  const [peerId, setPeerId] = useState(null);
  const [conn, setConn] = useState(null);
  const [incomingData, setIncomingData] = useState(null);

  
// How is this working exactly? when is this useeffect running? IT will run based on the dependency array and when those change
  // so perhaps, I can update that dependency array each time a user takes therir turn 
  useEffect(() => {
    // Initialize a new peer (this connects to the PeerJS Cloud server by default)
    const peer = new Peer();

    // Once the peer connects to the server, get and store its ID
    peer.on('open', (id) => {
      setPeerId(id);
      console.log('My Peer ID is:', id);
      getData(peerId)
    });

    // Handle incoming connection from another peer
    peer.on('connection', (conn) => {
      conn.on('data', (data) => {
        console.log('Received data:', data);
        setIncomingData(data); // Store received game state or other data
      });

      setConn(conn); // Save the connection for later communication
    });
  }, []);

  const connectToPeer = (otherPeerId) => {
    const connection = peer.connect(otherPeerId);
    connection.on('open', () => {
      setConn(connection); // Save the connection once established
      console.log('Connected to peer:', otherPeerId);
    });
  };

  const sendData = (data) => {
    if (conn && conn.open) {
      conn.send(data);
      console.log('Sent data:', data);
    }
  };


  return (
<div>
        {/* why does this go twice quickly then stop? */}
        <p>Your Peer ID: {peerId}</p>

        {/* Input box to connect to another peer */}
        <input
          type="text"
          placeholder="Enter Peer ID to connect"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              connectToPeer(e.target.value);
            }
          }}
        />

        <button onClick={() => sendData({ gameState: 'update' })}>
          Send Game Update
        </button>

        <div>
          <h2>Incoming Data:</h2>
          {incomingData ? JSON.stringify(incomingData) : 'No data received yet.'}
        </div>
      </div>
  );
}

export default PlayerConnection;
