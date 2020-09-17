const myZoo = [
  ["King Kong", ["gorilla", 42]],
  ["Nemo", ["fish", 5]],
  ["Punxsutawney Phil", ["groundhog", 11]]
];

function zooInventory(inventory) {
  return inventory.map(animal => `${animal[0]} the ${animal[1][0]} is ${animal[1][1]}`);
}

console.log(zooInventory(myZoo));