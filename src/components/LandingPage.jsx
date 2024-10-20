import React from 'react';
import { heroes } from '../data/heroes'; // Import your heroes data

function LandingPage({ gameState, setGameState, playerObject, generatePeer}) {

    let isPLayer0 = false;

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Wait for the Peer ID to be generated before proceeding
        try {
            const generatedPeerId = await generatePeer();

            // Get the form data
            const data = new FormData(e.target);
            const dataObject = Object.fromEntries(data.entries());

            // Make a copy of playerObject and update it with the selected hero
            let myHero = { ...playerObject };
            myHero.hero = Number(dataObject.hero);
            myHero.health = heroes.heroes[dataObject.hero].health;
            myHero.peerId = generatedPeerId;  // Use the generated Peer ID

            // Merge the new player into the gameState.players array
            const updatedPlayers = [...gameState.players, myHero];
            console.log("updatedPlayers", updatedPlayers);

            // Update the gameState, merging the new players array with the rest of the gameState
            setGameState(prevState => ({
                ...prevState,   // Keep the other parts of gameState
                players: updatedPlayers, // Update the players array
                preGameStarted: true
            }));

        } catch (error) {
            console.error("Error generating Peer ID:", error);
        }
    };

    // do another function like the one above, it can call this function. I think the await thing hasta be like that. 

    return (

        <div>
            <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Select your Hero</legend>
                {heroes.heroes.map((item, key) => (
                    <div key={key}>
                        <input type="radio" id={item.id} name="hero" value={item.id} />
                        <label htmlFor={item.id}>{item.name}</label>
                    </div>
                ))}
                <button type="submit">Submit</button>
            </fieldset>
        </form>
      </div>
    );
}

export default LandingPage;