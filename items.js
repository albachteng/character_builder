 class Item {
    constructor(name, description, weight, price) {
        this.name = name; // string;
        this.description = description; // string;
        this.weight = weight; // in pounds
        this.price = price; // in GP
    }
 }

 class Potion extends Item {
     constructor(name, description, weight, price) {
         super(name, description, weight, price);
     }
 }

 class Weapon extends Item {
     constructor(name, description, weight, price, modifier, damage, properties) {
         super(name, description, weight, price);
         this.modifier = modifier; // array of modifiers
         this.damage = damage; // array with either 1 or two numbers (for versatile)
         this.properties = properties; // array of properties
        };
         attack() {
            let attack = Math.floor(Math.random() * this.damage[0]) + 1;
            console.log(`attack = ${attack}`);
            if this.properties.includes('two-handed') {
                return this.twoHandAttack();
            } else {
                return attack;
            }
        }
        twoHandAttack() {
            if (this.damage[1]) {
                let attack = Math.floor(Math.random() * this.damage[1]) + 1;
                if (this.properties.includes('multiple dice')) {
                    attack *= 2;
                }
                console.log(`attack = ${attack}`);
                return attack;
            } else {
                return this.attack();
            }
        }
 }

 class Armor extends Item {
     constructor(name, description, weight, price, AC) {
         super(name, description, weight, price);
         this.AC = AC;
     }
 }

 // ARMOR 

// WEAPONS 
// simple melee weapons 

const club = new Weapon(
    'Club',
    'A simple, light wooden club, which deals bludgeoning damage.',
    2,
    .1,
    ['STR'],
    [4],
    ['light'],
);

const dagger = new Weapon(
    'Dagger',
    'A small, sharp dagger, which deals piercing damage.',
    1,
    2,
    ['STR', 'DEX'],
    [4],
    ['finesse', 'light', 'thrown: range 20/60'],
);

const greatclub = new Weapon(
    'Greatclub',
    'A large wooden club, which deals bludgeoning damage.',
    10,
    .2,
    ['STR'],
    [0, 8],
    ['two-handed'],
);

const handaxe = new Weapon(
    'Handaxe',
    'A small axe, which deals slashing damage.',
    2,
    5,
    ['STR'],
    [6],
    ['light', 'thrown: 20/60'],
);

const javelin = new Weapon(
    'Javelin',
    'A pointed wooden spear, which deals piercing damage.',
    2,
    .5,
    ['STR', 'DEX'],
    [6],
    ['thrown: 30/120'],
);

const lightHammer = new Weapon(
    'Light hammer',
    'An iron mallet, which deals bludgeoning damage.',
    2,
    2,
    ['STR'],
    [4],
    ['light', 'thrown: 20/60'],
);

const mace = new Weapon(
    'Mace',
    'A metal club, which deals bludgeoning damage.',
    4,
    5,
    ['STR'],
    [6],
);

const quarterstaff = new Weapon(
    'Quarterstaff',
    'A wooden staff, which deals bludgeoning damage.',
    4,
    .2,
    ['STR'],
    [6, 8],
    ['versatile'],
);

const sickle = new Weapon(
    'Sickle',
    'A curved blade on a wooden haft, which deals slashing damage.',
    2,
    1,
    ['STR'],
    [4],
    ['light'],
);

const spear = new Weapon(
    'Spear',
    'A metal spear, which deals piercing damage.',
    3,
    1,
    ['STR', 'DEX'],
    [6, 8],
    ['versatile', 'thrown: 20/60'],
);

// simple ranged weapons 

const lightCrossbow = new Weapon(
    'Crossbow, light',
    'A light crossbow, which deals piercing damage.',
    5,
    25,
    ['DEX'],
    [0, 8],
    ['ammunition', 'range: 80/320', 'loading', 'two-handed'],
);

const dart = new Weapon(
    'Dart',
    'A thrown dart, which deals piercing damage.',
    .25,
    .05,
    ['DEX'],
    [4],
    ['finesse', 'thrown: 20/60'],
);

const shortbow = new Weapon(
    'Shortbow',
    'A light bow, which deals piercing damage.',
    2,
    25,
    ['DEX'],
    [0, 6],
    ['ammunition', 'range: 80/320', 'two-handed'],
);

const sling = new Weapon(
    'Sling',
    'A leather sling, which deals bludgeoning damage.',
    0,
    .1,
    ['DEX'],
    [4],
    ['ammunition', 'range: 30/120',],
);

// martial melee weapons 

const battleaxe = new Weapon(
    'Battleaxe',
    'A double-headed metal axe, which deals slashing damage.',
    4,
    10,
    ['STR'],
    [8, 10],
    ['versatile'],
);

const flail = new Weapon(
    'Flail',
    'A spiked head at the end of a metal chain, which deals bludgeoning damage.',
    2,
    10,
    ['STR'],
    [8],
);

const glaive = new Weapon(
    'Glaive',
    'A curved blade at the end of a metal haft, which deals slashing damage.',
    6,
    20,
    ['STR'],
    [0, 10],
    ['heavy', 'reach', 'two-handed'],
);

const greataxe = new Weapon(
    'Greataxe',
    'A heavy metal axe, which deals slashing damage.',
    7,
    30,
    ['STR'],
    [0, 12],
    ['heavy', 'reach', 'two-handed'],
);

const greatsword = new Weapon(
    'Greatsword',
    'A curved blade at the end of a metal haft, which deals slashing damage.',
    6,
    50,
    ['STR'],
    [0, 6],
    ['heavy', 'reach', 'two-handed', 'multiple dice'],
);

 const longsword = new Weapon(
    'Longsword', // name
    'A one or two-handed weapon dealing slashing damage', // description
    3, // weight
    15, // price
    ['STR'], // STR or DEX
    [8, 10], // attack damage
    ['versatile'],
    ); // versatile attack damage, if any


 export default longsword;