function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const FIELD_SIZE = 10;

class Character {
  constructor() {
    if (new.target === Character) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
    this._x = getRandomInt(FIELD_SIZE);
    this._y = getRandomInt(FIELD_SIZE);
    this.id = Character.count;
    Character.count++;
  }

  get x() {
    return this._x; 
  }

  get y() {
    return this._y;
  }

  setPosition (x, y) {
    if (x < 0 || x > FIELD_SIZE || y < 0 || y > FIELD_SIZE) {
      throw new RangeError(`X and Y must be between 0 and ${FIELD_SIZE}.`);
    }
    this._x = x;
    this._y = y;
  }

  printPosition(characterType) {
    console.log(`${characterType} id: ${this.id} x: ${this.x}, y: ${this.y}`);
  }
}

class PlayerCharacter extends Character {
  constructor() {
    super();
  }
  
  printPosition() {
    super.printPosition('Player');
  }
}

class NonPlayerCharacter extends Character {
  constructor() {
    super();
  }

  printPosition() {
    super.printPosition('Non-Player');
  }
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