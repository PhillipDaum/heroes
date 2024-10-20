export const heroes = {
    heroes: [
      {
        id: 0,
        name: 'Bladewitch',
        speed: 7,
        attack: 3,  // basic attack (dice roll) // change to integer 
        defense: 2, // basic defense (dice roll)
        health: 8,
        description: 'A fierce sorceress who channels arcane powers through her blade. She moves with deadly grace.',
        abilities: ['Whirlwind Slash', 'Blade Dance', 'Shadow Step']
      },
      {
        id: 1,
        name: 'Wizard',
        speed: 5,
        attack: 2,
        defense: 1,
        health: 6,
        description: 'Master of the arcane arts, the wizard bends reality with incantations of old. More frail than most, but wields immense power.',
        abilities: ['Fireball', 'Ice Spear', 'Arcane Blast']
      },
      {
        id: 2,
        name: 'Assassin',
        speed: 9,
        attack: '4d6',
        defense: 2,
        health: 7,
        description: 'Quick and silent, the assassin strikes without warning. Death follows in the shadows.',
        abilities: ['Backstab', 'Poisoned Blade', 'Shadow Strike']
      },
      {
        id: 3,
        name: 'Rogue',
        speed: 8,
        attack: 3,
        defense: 3,
        health: 7,
        description: 'A sly trickster with nimble fingers and a quick wit. The rogue never plays fair, but always comes out ahead.',
        abilities: ['Stealth', 'Pickpocket', 'Sneak Attack']
      },
      {
        id: 4,
        name: 'Druid',
        speed: 6,
        attack: 2,
        defense: 3,
        health: 9,
        description: 'A protector of nature, the druid commands the forces of the wild. Though peaceful, the druid can unleash fury when threatened.',
        abilities: ['Entangle', 'Heal', 'Nature’s Wrath']
      },
      {
        id: 5,
        name: 'Warrior',
        speed: 6,
        attack: '4d6',
        defense: '4d6',
        health: 10,
        description: 'A battle-hardened fighter, the warrior is built to withstand the hardest blows and deliver punishing strikes.',
        abilities: ['Power Strike', 'Shield Bash', 'Battle Cry']
      }
    ],
  
    items: [
      { id: 0, name: 'Sword of Valor', effect: '+2d6 attack roll', description: 'An ancient blade forged for champions.' },
      { id: 1, name: 'Shield of Light', effect: '+2d6 defense roll', description: 'A gleaming shield that can block the darkest of forces.' },
      { id: 2, name: 'Potion of Healing', effect: '+1d4 health', description: 'A shimmering liquid that restores vitality.' },
      { id: 3, name: 'Armor of the Bear', effect: '+3d6 defense roll', description: 'Heavy armor that grants the wearer the strength of a bear.' },
      { id: 4, name: 'Boots of Swiftness', effect: '+2 speed', description: 'Lightweight boots that enhance the wearer’s agility.' }
    ],
  
    monsters: [
      {
        id: 0,
        name: 'Goblin',
        attack: 2,
        defense: 1,
        health: 12,
        description: 'A small, green-skinned creature with a nose too large for its face. Despite their appearance, goblins are quick and vicious fighters, known for their cunning and dirty tricks.'
      },
      {
        id: 1,
        name: 'Orc',
        attack: 3,
        defense: 2,
        health: 20,
        description: 'Large and brutish, orcs are often seen as the muscle of the monster world. They grunt as they charge, their faces twisted into permanent scowls, but they’re not entirely without honor.'
      },
      {
        id: 2,
        name: 'Troll',
        attack: '4d6',
        defense: 3,
        health: 30,
        description: 'Lumbering creatures with rough, greenish skin and the smell of a damp cellar. They regenerate health slowly, but their weakness is fire.'
      },
      {
        id: 3,
        name: 'Skeleton Warrior',
        attack: 2,
        defense: 2,
        health: 10,
        description: 'Clattering bones and empty eye sockets, the skeleton warrior has no flesh, but its sword strikes as swiftly as the living. The eerie glow of its eyes follows your every move.'
      },
      {
        id: 4,
        name: 'Vampire Bat',
        attack: 1,
        defense: 1,
        health: 8,
        description: 'A flurry of wings and fangs, the vampire bat swoops down to drain the life of its victims. Its leathery wings are silent, making it a difficult foe to spot before it’s too late.'
      }
    ]
  };