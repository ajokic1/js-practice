const colors = ['Blue', 'Red', 'Green', 'Orange', 'Yellow'];

function rotateRight (array, steps) {
  return [...array.slice(-steps), ...array.slice(0, -steps)];
}

console.log(rotateRight(colors, 2));
