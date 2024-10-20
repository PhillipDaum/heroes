# Heroes

### Ask what parts to have in a good readme what to have in repo








--- it would be cool for it to be something you can spin up with you friends and have a simultaneous chat
----- chat could be very minimal or full on video chat, or  you can play in person
------ it would be a great memecoin, the nfts are the quests
------ run a hackathon and those are some of the ideas because its extensible! its open source 
------ CSS could be skins we could do skins
--- or you could just print it and play IRL, LaTeX...? 


## User Interface
### gabeboard 
### skins
- start with one bare-bones skin

## Game Logic and Structure
### Starting the game
1. each player 
	- chooses a character
	- issued 3 gold
	- allowed to purchase items
    - rolls d20 for inititive // inititive is a variable


### Game structure
 - players take turns in order according to initial inititive
 - mosters take one turn
	 => each monster who has spawned takes a subTurn

### Global Variables
// when this is switches to true game can be ended a message is displayed  
let hasWon = false
// what information does the DM need, the computer is gonna be DM basically 
playerInfo {
    charcater: string, one of the choices
    items: array or object
    current health: number
    conditions: array of strings could be a good start
    position: string cell or cell id
    inTurn: boolean
}

### quests
--- say something like 'spinning up a quest!'

#### components
1. introduction story
2. players spawn in first room
3. quest checklist
    - list of items that must be fulfilled in order to 

### Sheets
## character sheet
- Name
- speed
** attributes do they need ????*** - most basic
- strength
- insight

### Cards
## room - special type of card
## item
    - item subtypes
        - weapon
        - armour/clothing
        - potion
        - quest item

### Gameboard
- consists of 'rooms' /// make this variable 
-- rooms are square tiles of cells
    - 16 x 16 is a good starter for this
    - during a player's turn, if they enter a tile on the outmost layer of the room
        - if this occurs player can look in room or not look in
        - if they look in the room


### Turn Structure
	1 movement of their speed s
	1 action - actions can be a movement
	1 bonus-action




#### More psedudocode 

  // accepts between 2 and 6 players
  // asks for name for each player - to keep track
  // each player rolls for inititive
  // it reorders the array in order of initiative 

  // first turn 
  // players select a character
  // have 3 gold
  // buy any items from a list of items
  // place themselves in 

  // subsequent turns 
  //   movement: true,
  //   action: true,
  //   bonusAction: true,


  /// state 1 - 
  // between 2 and 6 players
  // no need to program in the monster logic. The other player will drive the 

  // const [turn, setTurn] = useState({
  //   movement: true,
  //   action: true,
  //   bonusAction: true,
  // });

  // const selectHero = (hero) => {
  //   setGameState((prevState) => ({
  //     ...prevState,
  //     players: [...prevState.players, hero],
  //   }));
  // };

  // const endTurn = () => {
  //   setTurn({
  //     movement: true
  // movement will happen one space at a time, if it is takes place on the edge of a tile and more tiles exist, then ask if they want to look in
  //     action: true, // hit something, open chests, or move again.
  //     bonusAction: true, // take 
  //   });
  //   setGameState((prevState) => ({
  //     ...prevState,
  //     currentPlayerIndex: (prevState.currentPlayerIndex + 1) % prevState.players.length,
  //   }));
  // };

  /// some kind of game function that runs in order
  //// first how many people are playing? - it can be an integer between one and four
  //// players 
  //// new state - that many people choose a hero, once someone chooses one, its gone, player one is lucky 
