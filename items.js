import dice from './dice.js';

class Item {
    constructor(name, description, weight, price) {
        this.name = name; // string;
        this.description = description; // string;
        this.weight = weight; // in pounds
        this.price = price; // in GP
    }
 }

const abacus = new Item('abacus', '', 2, 2);
const acid = new Item('acid', 
    'As an action, you can splash the contents ofthis vial onto a creature within 5 feet of you or throw the vial up to 20 feet, shattering it on impact. In either case,makearangedattackagainstacreatureorobject, treating the acid as an improvised weapon. On a hit, the target takes 2d6 acid damage.', 
    2, 2);
const alchemistsFire = new Item('alchemist\'s fire', 'This sticky, adhesive fluid ignites when exposed to air. As an action, you can throw this flask up to 20 feet, shattering it on impact. Make a ranged attack against a creature or object, treating e alchemist\'s fire as an improvised weapon. On a hit, the target takes 1d4 fire damage at the start of each of its turns. A creature can end this damage by using its action to make a DC 10 Dexterity check to extinguish the flames.', 1, 50);
const arrow = new Item('arrow', '', .05, .05);
const crossbowBolt = new Item('crossbow bolt', '', .075, .05);
const antitoxin = new Item('antitoxin', ' creature that drinks this vial of liquid gains advantage on saving throws against poison for 1 hour. It confers no benefit to undead or constructs.', 0, 50);
const arcaneCrystal = new Item('arcane focus - crystal', '', 1, 10);
const arcaneOrb = new Item('arcane focus - orb', '', 3, 20);
const arcaneRod = new Item('arcane focus - rod', '', 2, 10);
const arcaneStaff = new Item('arcane focus - staff', '', 4, 5);
const arcaneWand = new Item('arcane focus - wand', '', 1, 10);
const backpack = new Item('backpack', '', 5, 2);
const ballBearings = new Item('ballBearings(1000)', 'As an action, you can spill these tiny metal balls from their pouch to cover a level area 10 feet square. A creature moving across the covered area must succeed on a DC 10 Dexterity saving throw or fall prone. A creature moving through the area at half speed doesn’t need to make the saving throw.', 2, 1);
const barrel = new Item('barrel', '', 70, 2);
const basket = new Item('basket', '', 2, .4);
const bedroll = new Item('bedroll', '', 7, 1);
const bell = new Item('bell', '', 0, 1);
const blanket = new Item('blanket', '', 3, .5);
const blockAndTackle = new Item('block and tackle', 'A set of pulleys with a cable threaded through them and a hook to attach to objects, a block and tackle allows you to hoist up to four times the weight you can normally lift.', 5, 1);
const book = new Item('book', 'a mundane book, not a spellbook', 5, 25);
const bottle = new Item('bottle', '', 2, 2);
const bucket = new Item('bucket', '', 2, .05);
const caltrops = new Item('caltrops', 'As an action, you can spread a single bag of caltrops to cover a 5-foot-square area. Any creature that enters the area must succeed on a DC 15 Dexterity saving throw or stop moving and take 1 piercing damage. Until the creature regains at least 1 hit point, its walking speed is reduced by 10 feet. A creature moving through the area at half speed doesn’t need to make the saving throw.', .1, .05);
const candle = new Item('candle', 'For 1 hour, a candle sheds bright light in a 5-foot radius and dim light for an additional 5 feet.', 0, .01);
const caseBolt = new Item('crossbow bolt case', 'This wooden case can hold up to twenty crossbow bolts.', 1, 1);
const caseScroll = new Item('scroll case', 'his cylindrical leather case can hold up to ten rolled-up sheets of paper or five rolled-up sheets of parchment.', 1, 1);
const chain = new Item('chain (10ft)', 'A chain has 10 hit points. It can be burst with a successful DC 20 Strength check.', 10, 5);
const chalk = new Item('chalk', '', 0, .01);
const chest = new Item('chest', '', 25, 5);
const climbersKit = new Item('climber\'s kit', 'A climber’s kit includes special pitons, boot tips, gloves, and a harness. You can use the climber’s kit as an action to anchor yourself; when you do, you can’t fall more than 25 feet from the point where you anchored yourself, and you can\t climb more than 25 feet away from that point without undoing the anchor.', 12, 25);
const commonClothes = new Item('common clothes', '', 3, .5);
const costumeClothes = new Item('costume clothes', '', 4, 5);
const fineClothes = new Item('fine clothes', '', 6, 15);
const travelersClothes = new Item('traveler\'s clothes', '', 4, 2);
const componentPouch = new Item('component pouch', 'A component pouch is a small, watertight leather belt pouch that has compartments to hold all the material components and other special items you need to cast your spells, except for those components that have a specific cost (as indicated in a spell\'s description).', 2, 25);
const crowbar = new Item('crowbar', 'Using a crowbar grants advantage to Strength checks where the crowbar’s leverage can be applied.', 5, 2);
const fishingTackle = new Item('fishing tackle', 'This kit includes a wooden rod, silken line, corkwood bobbers, steel hooks, lead sinkers, velvet lures, and narrow netting.', 1, 4);
const flask = new Item('flask or tankard', '', 1, .02);
const grapplingHook = new Item('grappling hook', '', 4, 2);
const hammer = new Item('hammer', '', 3, 1);
const sledgehammer = new Item('sledge hammer', '', 10, 2);
const healersKit = new Item('healer\'s kit', 'This kit is a leather pouch containing bandages, salves, and splints. The kit has ten uses. As an action, you can expend one use of the kit to stabilize a creature that has 0 hit points, without needing to make a Wisdom (Medicine) check.', 3, 5);
const holyAmulet = new Item('holy symbol - amulet', '', 1, 5);
const holyEmblem = new Item('holy symbol - emblem', '', 0, 5);
const holyReliquary = new Item('holy symbol - reliquary', '', 2, 5);
const holyWater = new Item('flask of holy water', 'As an action, you can splash the contents of this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. In either case, make a ranged attack against a target creature, treating the holy water as an improvised weapon. If the target is a fiend or undead, it takes 2d6 radiant damage.  cleric or paladin may create holy water by performing a special ritual. The ritual takes 1 hour to perform, uses 25 gp worth of powdered silver, and requires the caster to expend a 1st-level spell slot.', 1, 25);
const hourglass = new Item('hourglass', '', 1, 25);
const huntingTrap = new Item('hunting trap', 'When you use your action to set it, this trap forms a saw-toothed steel ring that snaps shut when a creature steps on a pressure plate in the center. The trap is affixed by a heavy chain to an immobile object, such as a tree or a spike driven into the ground. A creature that steps on the plate must succeed on a DC 13 Dexterity saving throw or take 1d4 piercing damage and stop moving. Thereafter, until the creature breaks free of the trap, its movement is limited by the length of the chain (typically 3 feet long). A creature can use its action to make a DC 13 Strength check, freeing itself or another creature within its reach on a success. Each failed check deals 1 piercing damage to the trapped creature.', 25, 5);
const ink = new Item('ink - 1oz bottle', '', 0, 10);
const inkPen = new Item('ink pen', '', 0, .02);
const jug = new Item('jug or pitcher', '', 4, .02);
const ladder = new Item('ladder', '', 25, .1);
const lamp = new Item('lamp', 'A lamp casts bright light in a 15-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.', 1, .5);
const bullseyeLantern = new Item('bullseye lantern', 'A bullseye lantern casts bright light in a 60-foot cone and dim light for an additional 60 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil.', 2, 10);
const hoodedLantern = new Item('hooded lantern', 'A hooded lantern casts bright light in a 30-foot radius and dim light for an additional 30 feet. Once lit, it burns for 6 hours on a flask (1 pint) of oil. As an action, you can lower the hood, reducing the light to dim light in a 5-foot radius.', 2, 5);
const lock = new Item('iron lock with key', 'A key is provided with the lock. Without the key, a creature proficient with thieves’ tools can pick this lock with a successful DC 15 Dexterity check. Your DM may decide that better locks are available for higher prices.', 1, 10);
const magnifyingGlass = new Item('magnifying glass', 'This lens allows a closer look at small objects. It is also useful as a substitute for flint and steel when starting fires. Lighting a fire with a magnifying glass requires light as bright as sunlight to focus, tinder to ignite, and about 5 minutes for the fire to ignite. A magnifying glass grants advantage on any ability check made to appraise or inspect an item that is small or highly detailed.', 0, 100);
const manacles = new Item('manacles', 'These metal restraints can bind a Small or Medium creature. Escaping the manacles requires a successful DC 20 Dexterity check. Breaking them requires a successful DC 20 Strength check. Each set of manacles comes with one key. Without the key, a creature proficient with thieves’ tools can pick the manacles’ lock with a successful DC 15 Dexterity check. Manacles have 15 hit points.', 6, 2);
const messKit = new Item('mess kit', 'This tin box contains a cup and simple cutlery. The box clamps together, and one side can be used as a cooking pan and the other as a plate or shallow bowl.', 1, .2);
const mirror = new Item('steel mirror', '', .5, 5);
const oil = new Item('oil (flask)', 'Oil usually comes in a clay flask that holds 1 pint. As an action, you can splash the oil in this flask onto a creature within 5 feet of you or throw it up to 20 feet, shattering it on impact. Make a ranged attack against a target creature or object, treating the oil as an improvised weapon. On a hit, the target is covered in oil. If the target takes any fire damage before the oil dries (after 1 minute), the target takes an additional 5 fire damage from the burning oil. You can also pour a flask of oil on the ground to cover a 5-foot-square area, provided that the surface is level. If lit, the oil burns for 2 rounds and deals 5 fire damage to any creature that enters the area or ends its turn in the area. A creature can take this damage only once per turn', 1, .1);
const paper = new Item('paper (one sheet)', '', 0, .2);
const parchment = new Item('manacles', '', 0, .1);
const perfume = new Item('perfume (vial)', '', 0, 5);
const pick = new Item('miner\'s pick', '', 10, 2);
const piton = new Item('piton', '', .25, .05);
const poison = new Item('basic poison (vial)', 'You can use the poison in this vial to coat one slashing or piercing weapon or up to three pieces of ammunition. Applying the poison takes an action. A creature hit by the poisoned weapon or ammunition must make a DC 10 Constitution saving throw or take 1d4 poison damage. Once applied, the poison retains potency for 1 minute before drying.', 0, 100);
const pole = new Item('10 foot pole', '', 7, .05);
const pot = new Item('iron pot', '', 10, 2);
const healingPotion = new Item('potion of healing', 'A character who drinks the magical red fluid in this vial regains 2d4 + 2 hit points. Drinking or administering a potion takes an action.', .5, 50);
const pouch = new Item('pouch', 'A cloth or leather pouch can hold up to 20 sling bullets or 50 blowgun needles, among other things. A compartmentalized pouch for holding spell components is called a component pouch.', 1, .5);
const quiver = new Item('manacles', 'A quiver can hold up to 20 arrows.', 1, 1);
const ram = new Item('portable ram', 'You can use a portable ram to break down doors. When doing so, you gain a +4 bonus on the Strength check. One other character can help you use the ram, giving you advantage on this check.', 35, 4);
const rations = new Item('1 days\' rations', 'Rations consist of dry foods suitable for extended travel, including jerky, dried fruit, hardtack, and nuts.', 2, .5);
const robes = new Item('manacles', '', 4, 1);
const rope = new Item('standard hempen rope (50ft)', 'Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check.', 10, 1);
const silkRope = new Item('silk braided rope (50ft)', 'Rope, whether made of hemp or silk, has 2 hit points and can be burst with a DC 17 Strength check.', 5, 10);
const sack = new Item('sack', '', .5, .01);
const scale = new Item('merchant\'s scale', 'A scale includes a small balance, pans, and a suitable assortment of weights up to 2 pounds. With it, you can measure the exact weight of small objects, such as raw precious metals or trade goods, to help determine their worth.', 3, 5);
const sealingWax = new Item('wax for sealing letters', '', 0, .5);
const shovel = new Item('shovel', '', 5, 2);
const whistle = new Item('whistle', '', 0, .05);
const signetRing = new Item('signet ring', '', 0, 5);
const soap = new Item('manacles', '', 0, .02);
const spellbook = new Item('empty spellbook', 'ssential for wizards, a spellbook is a leather-bound tome with 100 blank vellum pages suitable for recording spells.', 3, 50);
const spike = new Item('iron spike', '', .5, .1);
const spyglass = new Item('spyglass', 'Objects viewed through a spyglass are magnified to twice their size.', 1, 1000);
const tent = new Item('tent, two-person', 'A simple and portable canvas shelter, a tent sleeps two.', 20, 2);
const tinderbox = new Item('tinderbox', 'This small container holds flint, fire steel, and tinder (usually dry cloth soaked in light oil) used to kindle a fire. Using it to light a torch—or anything else with abundant, exposed fuel—takes an action. Lighting any other fire takes 1 minute.', 1, .5);
const torch = new Item('torch', 'A torch burns for 1 hour, providing bright light in a 20-foot radius and dim light for an additional 20 feet. If you make a melee attack with a burning torch and hit, it deals 1 fire damage.', 1, .01);
const vial = new Item('vial', '', 0, 1);
const waterskin = new Item('waterskin, full', '', 5, .2);
const whetstone = new Item('whetstone', '', 1, .01);


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

 const equipmentPacks = {
    burglarsPack: {
        price: 16,
        contents: 'backpack, a bag of 1,000 ball bearings, 10 feet of string, a bell, 5 candles, a crowbar, a hammer, 10 pitons, a hooded lantern, 2 flasks of oil, 5 days rations, a tinderbox, and a waterskin. The pack also has 50 feet of hempen rope strapped to the side of it.'
    },
    diplomatsPack: {
        price: 39,
        contents: 'a chest, 2 cases for maps and scrolls, a set o f fine clothes, a bottle o f ink, an ink pen, a lamp, 2 flasks o f oil, 5 sheets o f paper, a vial o f perfume, sealing wax, and soap.',
    } ,
    dungeoneersPack: {
        price: 12,
        contents: 'backpack, a crowbar, a hammer, 10 pitons, 10 torches, a tinderbox, 10 days o f rations, and a waterskin. The pack also has 50 feet o f hempen rope strapped to the side of it.',
    },
    entertainersPack: {
        price: 40,
        contents: 'backpack, a bedroll, 2 costumes, 5 candles, 5 days o f rations, a waterskin, and a disguise kit.',
    }, 
    explorersPack: {
        price: 10,
        contents: '(10 gp). Includes a backpack, a bedroll, a mess kit, a tinderbox, 10 torches, 10 days of rations, and a waterskin. The pack also has 50 feet o f hempen rope strapped to the side of it.',
    },
    priestsPack: {
        price: 19,
        contents: 'backpack, a blanket, 10 candles, a tinderbox, an alms box, 2 blocks o f incense, a censer, vestments, 2 days of rations, and a waterskin.',
    },
    scholarsPack: {
        price: 40,
        contents: 'backpack, a book o f lore, a bottle of ink, an ink pen, 10 sheets of parchment, a little bag of sand, and a small knife.',
    },
}