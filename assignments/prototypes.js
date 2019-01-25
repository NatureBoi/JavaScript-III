/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
};

function CharacterStats(charattributes) {
  GameObject.call(this, charattributes);
  this.healthPoints = charattributes.healthPoints;
  this.name = charattributes.name;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
};

function Humanoid(humanattributes) {
  CharacterStats.call(this, humanattributes);
  this.team = humanattributes.team;
  this.weapons = humanattributes.weapons;
  this.language = humanattributes.language;
  this.ultimate = humanattributes.ultimate;
}
Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
};
Humanoid.prototype.ult = function(enemy) {
  let damage = Math.floor(Math.random() * (100 - 50) + 50);
  enemy.healthPoints -= damage;
  if (enemy.healthPoints <= 0) {
    return `${this.name} uses ${this.ultimate} on ${
      enemy.name
    } for ${damage} points! ${enemy.destroy()}`;
  } else {
    return `${this.name} uses ${this.ultimate} on ${
      enemy.name
    }, and deals ${damage} points of damage`;
  }
};

function Hero(heroattributes) {
  Humanoid.call(this, heroattributes);
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.att = function(enemy) {
  let damage = Math.floor(Math.random() * 50);
  enemy.healthPoints -= damage;
  if (enemy.healthPoints <= 0) {
    return enemy.destroy();
  } else {
    return `${enemy.name} took ${damage} points of damage`;
  }
};

function Villain(villainattributes) {
  Humanoid.call(this, villainattributes);
}

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.att = function(enemy) {
  let damage = Math.floor(Math.random(100) * 50);
  enemy.healthPoints -= damage;
  if (enemy.healthPoints <= 0) {
    return enemy.destroy();
  } else {
    return `${enemy.name} took ${damage} points of damage`;
  }
};

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

const licht = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 6
  },
  healthPoints: 200,
  name: "Licht",
  team: "Diamond Kingdom",
  weapons: ["Light-Magic", "Spatial-Magic", "Fire"],
  language: "Elvish",
  ultimate: "Light Blade"
});

const yami = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 6
  },
  healthPoints: 150,
  name: "Yami",
  team: "Black Bulls",
  weapons: ["Katana", "Dark-Magic"],
  language: "Common Tongue",
  ultimate: "Shadow Slash"
});

console.log(yami.att(licht));
console.log(licht.att(yami));
console.log(yami.att(licht));
console.log(licht.att(yami));
console.log(yami.ult(licht));
console.log(licht.ult(yami));
console.log(yami.ult(licht));
