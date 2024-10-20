import React, { useState, useEffect } from 'react';
// P2P protocol
import Peer from 'peerjs';
// components
import LandingPage from './components/LandingPage.jsx';
import OtherLandingPage from './components/OtherLandingPage.jsx';
import WaitingToStart from './components/WaitingToStart.jsx';
// errors and waiting
import Spinner from './components/animations/Spinner.jsx'

function App() {
  // PeerJS stuff
  const [peerId, setPeerId] = useState(null);
  const [peer, setPeer] = useState(null)
  const [conn, setConn] = useState(null);
  const [incomingData, setIncomingData] = useState(null);
  // // Generates peer asynchronously
  const generatePeer = () => {
    // Initialize a new peer (this connects to the PeerJS Cloud server by default)
    let peer = new Peer();

    // Handle incoming connection from another peer
    peer.on('connection', (conn) => {
      conn.on('data', (data) => {
        console.log('Received data:', data);
        setIncomingData(data); // Store received game state or other data
      });

      setConn(conn); // Save the connection for later communication
    });

    // Once the peer connects to the server, get and store its ID
    peer.on('open', (id) => {
      setPeerId(id);
    });
    setPeer(peer);
  };


  // Connects to a peer

  const connectToPeer = (otherPeerId) => {
    const connection = peer.connect(otherPeerId); /// i needo have peer up here
    connection.on('open', () => {
      setConn(connection); // Save the connection once established
      console.log('Connected to peer:', otherPeerId);
    });
  };

  // game state object
  const [gameState, setGameState] = useState({
    preGameStarted: false,
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
    peerId: null,
  });

  // Log whenever the game state updates
  useEffect(() => {
    console.log("GameState has updated:", gameState);
  }, [gameState]);

  // // Handle player turns
  // const handlePlayerTurn = () => {
  //   let nextPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;

  //   setGameState(prevState => ({
  //     ...prevState,
  //     currentPlayerIndex: nextPlayerIndex,
  //     playerInTurn: gameState.players[nextPlayerIndex],
  //   }));
  // };

  /// ustates for conditional rendering of the game 
  const [response, setResponse] = useState(null);
  /// 2 new thingss
  //// gameStarted
  //// preGameStarted

  //// make the connection a seperate page with an async await function

  return (
    <div>
      {/* if the game has begun*/}
      {/* I can put the others at the top maybe?  */}
      {
        gameState.gameStarted === true ? (
          <Gameboard />
        ) : gameState.preGameStarted === true ? (
          <WaitingToStart
            gameState={gameState}
            setGameState={setGameState}
            peerId={peerId}
          />

        ) : gameState.preGameStarted === true ? (

          <p>hi mom</p>

        ) : response === null ? (
            <div>
              <p>Do you have a code?</p>
              <button onClick={() => setResponse("yes")}>Yes</button>
              <button onClick={() => setResponse("no")}>No</button>
            </div>
            // if do not have a code 
          ) : response === "no" ? (
            <LandingPage
              gameState={gameState}
              peer={peer}
              setGameState={setGameState}
              playerObject={playerObject}
              setPeerId={setPeerId}
              peerId={peerId}
              generatePeer={generatePeer}
            />
          ) : response === "yes" ? (
            <OtherLandingPage
              gameState={gameState}
              setGameState={setGameState}
              peer={peer}
              playerObject={playerObject}
              setPeerId={setPeerId}
              peerId={peerId}
              generatePeer={generatePeer}
              connectToPeer={connectToPeer}
            />
          ) : (
            <Spinner />
          )}
      {/* then at the bottom I can put the spinner thing????  */}
    </div>
  );
}

export default App;