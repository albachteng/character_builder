import dice from './dice.js';

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
            let damage = dice.d(this.damage[0]);
            console.log(`attack = ${damage}`);
            if (this.properties.includes('two-handed')) {
                return this.twoHandAttack();
            } else {
                return damage;
            }
        }
        twoHandAttack() {
            if (this.damage[1]) {
                let damage = dice.d(this.damage[1]);
                if (this.properties.includes('multiple dice')) {
                    damage *= 2;
                }
                console.log(`attack = ${damage}`);
                return damage;
            } else {
                return this.attack();
            }
        }
 }

 class Armor extends Item {
     constructor(name, description, weight, price, AC, strength, stealth, type) {
         super(name, description, weight, price);
         this.AC = AC;
         this.strength = strength;
         this.stealth = stealth;
         this.type = type;
     }
 }

 // ARMOR 

 const padded = new Armor(
     'Padded', //name
     'Quilted layers of cloth and padding.', //desc
     8, //weight
     5, //price
     11, //ac, not including dex modifier
     0, //str
     'disadvantage', //stl
     'light', //type
 )

 const leather = new Armor(
    'Leather', //name
    'Stiffened leather chestpiece and pauldrons.', //desc
    10, //weight
    10, //price
    11, //ac, not including dex modifier
    0, //str
    '', //stl
    'light', //type
)

const studdedLeather = new Armor(
    'Studded leather', //name
    'Leather armor reinforced with close-set rivets or spikes.', //desc
    13, //weight
    45, //price
    12, //ac, not including dex modifier
    0, //str
    '', //stl
    'light', //type
)

const hide = new Armor(
    'Hide Armor', //name
    'Crude armor of thick furs and pelts.', //desc
    12, //weight
    10, //price
    12, //ac, not including dex modifier
    0, //str
    '', //stl
    'medium', //type NTS medium armor DEX bonus is maxed at 2;
)

const chainShirt = new Armor(
    'Chain shirt', //name
    'Interlocking metal links worn between layers of clothes or padding.', //desc
    20, //weight
    50, //price
    13, //ac, not including dex modifier
    0, //str
    '', //stl
    'medium', //type NTS medium armor DEX bonus is maxed at 2;
)

const scaleMail = new Armor(
    'Scale mail', //name
    'A leather coat, leggings and skirt covered with small, thin, overlapping metal plates.', //desc
    45, //weight
    50, //price
    14, //ac, not including dex modifier
    0, //str
    'disadvantage', //stl
    'medium', //type NTS medium armor DEX bonus is maxed at 2;
)

const breastplate = new Armor(
    'Breastplate', //name
    'A thin metal chest piece worn with flexible leather.', //desc
    20, //weight
    400, //price
    14, //ac, not including dex modifier
    0, //str
    '', //stl
    'medium', //type NTS medium armor DEX bonus is maxed at 2;
)

const halfPlate = new Armor(
    'Half plate', //name
    'Shaped metal plates cover most of the upper body, with simple leather-banded greaves to protect the shins.', //desc
    40, // weight
    750, // price
    15, // ac, not including dex modifier
    0, // str
    'disadvantage', // stl
    'medium', // type NTS medium armor DEX bonus is maxed at 2;
)

const ringMail = new Armor(
    'Ring mail', //name
    'Leather armor with heavy metal rings sewn into it. Inferior to chain mail, but cost-effective.', //desc
    40, // weight
    30, // price
    14, // flat ac, overriding dex modifier
    0, // str
    'disadvantage', // stl
    'heavy', // type NTS heavy adds no dex bonus;
)

const chainMail = new Armor(
    'Chain mail', //name
    'Interlocking metal rings make up a hood, shirt, skirt and gauntlets padded with quilted fabric.', //desc
    55, // weight
    75, // price
    16, // flat ac, overriding dex modifier
    13, // str
    'disadvantage', // stl
    'heavy', // type NTS heavy adds no dex bonus;
)

const splint = new Armor(
    'Splint', //name
    'Thin strips of shaped metal riveted to a backing of leather, with flexible chain linking to protect joints.', //desc
    60, // weight
    200, // price
    17, // flat ac, overriding dex modifier
    15, // str
    'disadvantage', // stl
    'heavy', // type NTS heavy adds no dex bonus;
)

const plate = new Armor(
    'Plate', //name
    'Shaped metal plates precisely interlocking to cover the entire body, including a helm with a visor, gauntlets, boots. Leather straps distribute the weight evenly over the body.', //desc
    65, // weight
    1500, // price
    18, // flat ac, overriding dex modifier
    15, // str
    'disadvantage', // stl
    'heavy', // type NTS heavy adds no dex bonus;
)

const shield = new Armor(
    'Shield', 'A metal or reinforced-wood shield', 6, 10, 2, 0, '', 'shield',
)

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
    'A small blade, which deals piercing damage.',
    1,
    2,
    ['STR', 'DEX'],
    [4],
    ['finesse', 'light', 'thrown: 20/60'],
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

const greatsword = new Weapon( // NTS: test this one
    'Greatsword',
    'A curved blade at the end of a metal haft, which deals slashing damage.',
    6,
    50,
    ['STR'],
    [0, 6],
    ['heavy', 'two-handed', 'multiple dice'],
);

const halberd = new Weapon(
    'Halberd',
    'A axe blade at the end of a metal haft, which deals slashing damage.',
    6,
    20,
    ['STR'],
    [0, 10],
    ['heavy', 'reach', 'two-handed'],
);

const lance = new Weapon(
    'Lance',
    'A long metal lance, which deals piercing damage.',
    6,
    10,
    ['STR'],
    [12, 12],
    ['reach', 'special: disadvantage when attacking creatures within 5ft of you. Also requires two hands when not mounted'],
);

const longsword = new Weapon(
    'Longsword', // name
    'A one or two-handed weapon dealing slashing damage', // description
    3, // weight
    15, // price
    ['STR'], // STR or DEX
    [8, 10], // attack damage
    ['versatile'],
); 

const maul = new Weapon(
    'Maul',
    'A heavy metal hammer, which deals bludgeoning damage.',
    10,
    10,
    ['STR'],
    [0, 6],
    ['heavy', 'two-handed', 'multiple dice'],
);

const morningstar = new Weapon(
    'Morningstar',
    'A spiked metal mace, which deals piercing damage.',
    4,
    15,
    ['STR'],
    [8],
);

const pike = new Weapon(
    'Pike',
    'A heavy metal spear, which deals piercing damage.',
    18,
    5,
    ['STR'],
    [0, 10],
    ['heavy', 'reach', 'two-handed'],
);

const rapier = new Weapon(
    'Rapier',
    'A thin, flexible blade, which deals piercing damage.',
    2,
    25,
    ['STR', 'DEX'],
    [8],
    ['finesse'],
);

const scimitar = new Weapon(
    'Scimitar',
    'A curved blade, which deals slashing damage.',
    3,
    25,
    ['STR', 'DEX'],
    [6],
    ['finesse', 'light'],
);

const shortsword = new Weapon(
    'Shortsword',
    'A straight blade, which deals slashing damage.',
    2,
    10,
    ['STR', 'DEX'],
    [6],
    ['finesse', 'light'],
);

const trident = new Weapon(
    'Trident',
    'A three-pronged spear, which deals piercing damage.',
    4,
    5,
    ['STR', 'DEX'],
    [6, 8],
    ['thrown: 20/60', 'versatile'],
);

const warpick = new Weapon(
    'War pick',
    'A sharp blade on a wooden haft, which deals piercing damage.',
    2,
    5,
    ['STR'],
    [8],
);

const warhammer = new Weapon(
    'Warhammer',
    'A metal hammer with a narrow head, which deals bludgeoning damage.',
    2,
    15,
    ['STR'],
    [8, 10],
    ['versatile'],
);

const whip = new Weapon(
    'Whip',
    'A braided leather whip, which deals slashing damage.',
    3,
    2,
    ['STR', 'DEX'],
    [4],
    ['finesse', 'reach'],
);

// martial ranged weapons

const blowgun = new Weapon(
    'Blowgun',
    'A wooden or metal tube, which deals piercing damage.',
    1,
    10,
    ['DEX'],
    [1],
    ['ammunition', 'range: 25/100', 'loading'],
);

const handCrossbow = new Weapon(
    'Crossbow, hand',
    'A small crossbow, which deals piercing damage.',
    3,
    75,
    ['DEX'],
    [6],
    ['ammunition', 'light', 'range: 30/120', 'loading'],
);

const heavyCrossbow = new Weapon(
    'Crossbow, heavy',
    'A heavy crossbow, which deals piercing damage.',
    18,
    50,
    ['DEX'],
    [0, 10],
    ['ammunition', 'heavy', 'range: 100/400', 'loading', 'two-handed'],
);

const longbow = new Weapon(
    'Longbow',
    'A large wooden bow, which deals piercing damage.',
    2,
    50,
    ['DEX'],
    [8],
    ['ammunition', 'heavy', 'range: 150/600', 'two-handed'],
);

const net = new Weapon(
    'Net',
    'A rope net, which deals no damage but can .',
    3,
    1,
    ['DEX'],
    [0],
    ['thrown: 5/15', 'special: a large or smaller creature hit with this weapon is restrained until freed with a DC10 STR check.'],
);

// the armory object, to be exported 
const armory = {
    weapons: {
        club, dagger, greatclub, 
        handaxe, javelin, lightHammer, 
        mace, quarterstaff, sickle,
        spear, lightCrossbow, dart,
        shortbow, sling, battleaxe,
        flail, glaive, greataxe,
        greatsword, halberd, lance,
        longsword, maul, morningstar,
        pike, rapier, scimitar,
        shortsword, trident, warpick,
        warhammer, whip, blowgun,
        handCrossbow, heavyCrossbow, longbow,
        net, 
    },
    armor: {
        padded, leather, studdedLeather,
        hide, chainShirt, scaleMail,
        breastplate, halfPlate, ringMail,
        chainMail, splint, plate, 
        shield,
    },
    items: {

    }, 
    potions: {

    },
}

 export default armory;