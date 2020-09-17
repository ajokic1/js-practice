function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const FIELD_SIZE = 10;

const Character = function () {
  if (new.target === Character) {
    throw new TypeError("Cannot construct Abstract instances directly");
  }
  this.id = Character.count;
  this.x = getRandomInt(FIELD_SIZE);
  this.y = getRandomInt(FIELD_SIZE);
  Character.count++;
}
Character.prototype.setPosition = function (x, y) {
  if (x < 0 || x > FIELD_SIZE || y < 0 || y > FIELD_SIZE) {
    throw new RangeError(`X and Y must be between 0 and ${FIELD_SIZE}.`);
  }
  this.x = x;
  this.y = y;
}
Character.prototype.printPosition = function (characterType) {
  console.log(`${characterType} id: ${this.id} x: ${this.x}, y: ${this.y}`);
}

const PlayerCharacter = function() {
  Character.call(this);
}
PlayerCharacter.prototype = Object.create(Character.prototype);
PlayerCharacter.prototype.constructor = PlayerCharacter;
PlayerCharacter.prototype.printPosition = function () {
  Character.prototype.printPosition.call(this, 'Player');
}

const NonPlayerCharacter = function() {
  Character.call(this);
}
NonPlayerCharacter.prototype = Object.create(Character.prototype);
NonPlayerCharacter.prototype.constructor = NonPlayerCharacter;
NonPlayerCharacter.prototype.printPosition = function () {
  Character.prototype.printPosition.call(this, 'Non-Player');
}

Character.count = 0;

const player = new PlayerCharacter();
player.printPosition();
const npcs = [];
for (let i = 0; i < 3; i++) {
  const npc = new NonPlayerCharacter();
  npcs.push(npc);
  npc.printPosition();
}

player.setPosition(10, 10)
player.printPosition();