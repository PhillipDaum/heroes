import React, { useState, useEffect } from 'react';
import { heroes } from '../data/heroes'; // Import your heroes data

function WaitingToStart({ gameState, setGameState, peerId }) {

    return (
        <div>
            <h2>Invite your friends!</h2>
            {/* peer ID */}
            <p>I am {peerId}</p>
            {/* instructions */}
            {/* other players will go to a different screen */}
            {/* go to different page! enter code. - or generate HTML that will do the correct thing! */}
            {/* if you have joined xxxs game, submit form */}
            <p>I don't know how to do this yet</p>
            {/* other players pop up */}
            <ol>players
                <li>other players join here</li>
            </ol>
            <button>initilize</button>
        </div>
    );
}

export default WaitingToStart;