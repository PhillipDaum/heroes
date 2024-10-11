// why is this .js?
// utils.js
export const generateRandomChestLocation = () => {
    const x = Math.floor(Math.random() * 16);  // Random number between 0 and 15
    const y = Math.floor(Math.random() * 16);  // Same for y
    return [x, y];
};
