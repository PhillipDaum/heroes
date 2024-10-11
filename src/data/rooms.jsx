// rooms.jsx
import { generateRandomChestLocation } from '../utils/utils'; // helper function for random chest location

export const rooms = [
    {
        id: 1,
        type: 'Spawn Room',
        monsters: [],
        chest: null, // No chest in the spawn room
    },
    ...Array.from({ length: 5 }, (_, index) => ({
        id: index + 2,
        type: `Room ${index + 2}`,
        monsters: ['Monster1', 'Monster2'], // Placeholder monster names, will be replaced later
        chest: generateRandomChestLocation(),
    }))
];
