class Monster {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
}

class Dragon extends Monster {
    constructor(type, color, element) {
        super(type, color);
        this.element = element;
    }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps its wings and begins to fly.`);
    }
    summon() {
      console.log(`The ${this.element} dragon has been summoned.`);
    }
}

class Werewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`The ${this.type} howls loudly.`);
    }
}

class Gremlin extends Monster {
  constructor(type, color, weapon) {
    super(type, color);
    this.weapon = weapon;
  }
  taunt() {
    console.log(`I'm going to enjoy hitting you with my ${this.weapon}`);
  }
} //new

const woodDragon = new Dragon("dragon", "brown", "wood");
const werewolf1 = new Werewolf("steppe", "grey"); //new
const gremlin1 = new Gremlin("short", "green", "rusty rod"); //new



woodDragon.roar();
woodDragon.fly();
woodDragon.summon(); //new
werewolf1.howl(); //new
gremlin1.taunt(); //new



