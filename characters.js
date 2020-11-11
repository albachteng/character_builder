import longsword from './items.js';

// NTS: node -r ems characters.js to allow imports in node.js
// characters and their class extensions (fighter, etc)

class Character {
    constructor(name, race, subrace) {
        this.name = name; // string
        this.level = 1; // number; important for class abilities later on
        this.items = []; // array of items, see 'item.js'; initialized empty
        this.abilities = [];
        this.proficiencies = [];
        this.speed = 0;
        this.languages = ['Common'];
        this.hitDiceNumber = 1; // number of hit dice, type is determined by class 
        this.hitDiceType = 0;
        this.MAXHP = 0; // starting HP determined by class
        this.HP = 0; // current HP determined by class
        this.AC = 10; // partly determined by items; w/out armor or shield 10+DEX
        this.abilityScore = { // object, start all stats at 10
            STR: 10,
            DEX: 10,
            CON: 10,
            INT: 10,
            WIS: 10,
            CHA: 10,
        };
        this.race = race; // string
        this.subrace = subrace;

// here we start the race section, which I think just has to be a part of the character creation
// NTS: need to update to include subraces;

        // DWARVES

        if (race === 'dwarf') {
            if (subrace === 'hill') {
                this.abilityScore.WIS += 1;
                this.MAXHP += 1 * this.level;
            }
            if (subrace === 'mountain') {
                this.abilityScore.STR += 2;
                this.proficiencies.push('light armor', 'medium armor',);
            }
            this.abilityScore.CON += 2;
            this.languages.push('Dwarven');
            this.size = 'medium';
            this.speed += 25;
            this.abilities.push({
                name: 'Darkvision',
                description: 'Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.',
            },
            {
                name: 'Dwarven Resilience',
                description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.',
            },
            {
                name: 'Stonecunning', 
                description: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.',
            },
            {
                name: 'Tool Proficiency',
                description: 'ToolProficiency. You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.',
            }
            )
            this.proficiencies.push(
                'battleaxe', 'handaxe', 'throwing hammer', 'warhammer',
                );
        }

        // ELVES
        
        if (race === 'elf') {
            if (this.subrace === 'high') {
                this.abilityScore.INT += 1;
                this.proficiencies.push(
                    'longsword', 'shortsword', 'shortbow', 'longbow',
                );
                this.abilities.push(
                    {
                        name: 'Cantrip',
                        description: 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.',
                    },
                    {
                        name: 'Extra Language',
                        description: 'You can speak, read, and write one extra language of your choice.',
                    },
                )
            }
            if (this.subrace === 'wood') {
                this.abilityScore.WIS += 1;
                this.proficiencies.push(
                    'longsword', 'shortsword', 'shortbow', 'longbow',
                );
                this.speed += 5;
                this.abilities.push(
                    {
                        name: 'Mask of the Wild',
                        description: 'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.',
                    },
                );
            }
            if (this.subrace === 'drow') {
                this.abilityScore.CHA += 1;
                this.abilities.push(
                    {
                        name: 'Superior Darkvision',
                        description: 'Your darkvision has a radius of 120 feet.', 
                    },
                    {
                        name: 'Sunlight Sensitivity', 
                        description: 'You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.',
                    },
                    {
                        name: 'Drow Magic',
                        description: 'You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once per day. When you reach 5th level, you can also cast the darkness spell once per day. Charisma is your spellcasting ability for these spells.',
                    },
                );
                this.proficiencies.push('rapier', 'shortsword', 'hand crossbow',);
            }
            this.abilityScore.DEX += 2;
            this.languages.push('Elvish');
            this.size = 'medium';
            this.speed += 30;
            this.abilities.push(
                {
                    name: 'Darkvision',
                    description: 'Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.',
                },
                {
                    name: 'Fey Ancestry',
                    description: 'You have advantage on saving throws against being charmed, and magic can’t put you to sleep.',
                },
                {
                    name: 'Trance', 
                    description: 'Elvesdon’tneedtosleep.Instead,they meditate deeply, remaining semiconscious, for 4 hours a day. While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.',
                },
            );
            this.proficiencies.push('perception',);
        }
        // HUMANS
        
        if (race === 'human') {
            this.abilityScore.STR++;
            this.abilityScore.DEX++;
            this.abilityScore.CON++;
            this.abilityScore.INT++;
            this.abilityScore.WIS++;
            this.abilityScore.CHA++;
            this.size = 'medium';
            this.speed += 30;
            this.abilities.push(
                {
                    name: 'Bonus Language',
                    description: 'You can speak, read and write one additional language of your choice.'
                }
            )
        }
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        this.items.push(item); // adds an item object to the items array
        return this.items;
    }
    setAbilityScore(stat, num) { // takes a stat key and a number
        this.abilityScore[stat] = num;
        return this.abilityScore;
    }
    attack(item, stat) {
        let modifier = Math.floor((this.abilityScore[stat] - 10) / 2);
        let attackRoll = Math.floor(Math.random() * 20) + 1;
        console.log(`modifier = ${modifier}`);
        console.log(`attack roll = ${attackRoll}`);
        if (item.versatile && attackRoll === 20) {
            return [attackRoll + modifier, 2 * (item.twoHandAttack() + modifier)];
        } else if (item.versatile && attackRoll !== 20) {
            return [attackRoll + modifier, item.twoHandAttack() + modifier];
        } else if (!item.versatile && attackRoll === 20) {
            return [attackRoll + modifier, 2 * (item.attack() + modifier)];
        } else {
            return [attackRoll + modifier, item.attack() + modifier];
        }
    }
    levelUp(attribute1, attribute2) {
        this.level++;
        this.hitDiceNumber++;
        this.MAXHP += Math.floor(Math.random() * this.hitDiceType);
        this.HP = this.MAXHP;
        if (this.level % 4 === 0) {
            this.abilityScore[attribute1]++;
            this.abilityScore[attribute2]++;
        }
    }
}

// character classes below

class Fighter extends Character {
    constructor(name, race, subrace) {
        super(name, race, subrace);
        this.hitDiceType += 10; // the VALUE of hit dice, not number. See hitDiceNumber property
        this.MAXHP += 10;
        this.HP += 10;
        this.abilities.push(
            {
                name: 'Second Wind',
                description: 'You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.',
            },
        );
        this.proficiencies.push(
            'all armor', 'shields', 'simple weapons', 'martial weapons',
        );
        this.savingThrowsProficiencies = ['STR', 'CON',];
    }
}

// test subject

const isho = new Fighter('Isho-Genni', 'elf', 'drow');
isho.setAbilityScore('STR', 15);
isho.addItem(longsword);
isho.levelUp();
isho.levelUp();
isho.levelUp('DEX', 'STR');
console.log(isho);
console.log(isho.attack(longsword, 'STR'));

