// React stuff
import React, { useState, useEffect } from 'react';
// P2P protocol
import Peer from 'peerjs';
// components
import LandingPage from './components/LandingPage.jsx';
import PlayerConnection from './components/PlayerConnection.jsx';
import GameBoard from './components/GameBoard.jsx';
import Spinner from './components/animations/Spinner.jsx';

function App() {
  // stuff to connect to other users
  // PeerJS stuff
  const [peerId, setPeerId] = useState(null);
  const [conn, setConn] = useState(null);
  const [incomingData, setIncomingData] = useState(null);

  // Why is this running twice?
  useEffect(() => {
    // Initialize a new peer (this connects to the PeerJS Cloud server by default)
    const peer = new Peer();

    // could give them a player number here?

    // Once the peer connects to the server, get and store its ID
    peer.on('open', (id) => {
      setPeerId(id);
      console.log('My Peer ID is:', id);
      // getData(peerId)
    });

    // Handle incoming connection from another peer
    peer.on('connection', (conn) => {
      conn.on('data', (data) => {
        console.log('Received data:', data);
        setIncomingData(data); // Store received game state or other data
      });

      setConn(conn); // Save the connection for later communication
    });

  }, []); // What can I add here so this only goes once?


  // how to connect to a peer
  const connectToPeer = (otherPeerId) => {
    const connection = peer.connect(otherPeerId);
    connection.on('open', () => {
      setConn(connection); // Save the connection once established
      console.log('Connected to peer:', otherPeerId);
    });
  };

  // how to send data
  const sendData = (data) => {
    if (conn && conn.open) {
      conn.send(data);
      console.log('Sent data:', data);
    }
  };

  // variables I can access: peerId, conn, incomingData
  //-------------------------------------------------------------------------------

  // game state object
  const [gameState, setGameState] = useState({
    gameStarted: false,
    players: [], // players in order of initiative
    playerQuantity: 0,
    playerInTurn: null,
    rooms: [], // rooms in play
    monsters: [], // monsters in play
    quest: "Ghost Chickens in My Eye", // placeholder for now
    currentPlayerIndex: 0, // track whose turn it is
  });

  // player object
  const [playerObject, setPlayerObject] = useState({
    hero: null,
    health: null,
    playerId: null
  });

  //-------------------------------------------------------------------
  // 1)
  // Initialize game UI
  // Starts with landing page
  const [gameUi, setGameUi] = useState(<LandingPage gameState={gameState} setGameState={setGameState} playerObject={playerObject} peerId={peerId} />);
  // makes sure game state updates after user gameStarted === true
  // may be unnecesary or ought to be wrapped in a function
  useEffect(() => {
    console.log("GameState has updated:", gameState);
    /// display the user's connection stuff
  }, [gameState.gameStarted]); // This will log the updated gameState whenever it changes


  // ------------------------------------------------------------------------------

  // 2) 



  // State 3: Gameplay
  /// players modify game object, any functions are called and 
  const handlePlayerTurn = () => {
    // Logic to handle each player’s turn
    let nextPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;

    setGameState(prevState => ({
      ...prevState,
      currentPlayerIndex: nextPlayerIndex,
      playerInTurn: gameState.players[nextPlayerIndex]
    }));

    // Optionally update UI during turns
    setGameUi(<GameBoard />);
  };

  // Could use event listeners for turn management, e.g. when it's their turn

  return (
    <div>
      {/* Render the current UI (LandingPage, PlayerForm, GameBoard) */}
      {gameUi}
    </div>
  );
}

export default App;