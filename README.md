# Heroes

--- it would be cool for it to be something you can spin up with you friends and have a simultaneous chat
----- chat could be very minimal or full on video chat, or  you can play in person
------ it would be a great memecoin, the nfts are the quests
------ run a hackathon and those are some of the ideas because its extensible! its open source 
------ CSS could be skins we could do skins


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

