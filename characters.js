import armory from './items.js';
import dice from './dice.js';

// NTS: node -r esm characters.js to allow ECMA Script Module imports in node.js
// characters and their class extensions (fighter, etc)

// Character class

class Character {
    constructor(name, race, subrace) {
        this.name = name; // string
        this.level = 1; // number; important for class abilities later on
        this.items = []; // array of items, see 'item.js'; initialized empty
        this.abilities = []; // an array, maybe better as an object?
        this.proficiencyBonus = 2; // start at two, increases every third level?
        this.proficiencies = []; // also might be better as an object... 
        this.speed = 0; // start at zero and add to it based on race, class, abilities
        this.languages = ['Common'];
        this.encumberance = 0; // initialize to zero;
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

        // DWARVES

        if (race === 'dwarf') {
            if (subrace === 'hill') {
                this.abilityScore.WIS += 1;
                this.MAXHP += 1 * this.level; // NTS this has to run every level up
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
                requiredLevel: 1,
            },
            {
                name: 'Dwarven Resilience',
                description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.',
                requiredLevel: 1,
            },
            {
                name: 'Stonecunning', 
                description: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.',
                requiredLevel: 1,
            },
            {
                name: 'Tool Proficiency',
                description: 'ToolProficiency. You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.',
                requiredLevel: 1,
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
                        requiredLevel: 1,
                    },
                    {
                        name: 'Extra Language',
                        description: 'You can speak, read, and write one extra language of your choice.',
                        requiredLevel: 1,
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
                        requiredLevel: 1,
                    },
                );
            }
            if (this.subrace === 'drow') {
                this.abilityScore.CHA += 1;
                this.abilities.push(
                    {
                        name: 'Superior Darkvision',
                        description: 'Your darkvision has a radius of 120 feet.', 
                        requiredLevel: 1,
                    },
                    {
                        name: 'Sunlight Sensitivity', 
                        description: 'You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.',
                        requiredLevel: 1,
                    },
                    {
                        name: 'Drow Magic',
                        description: 'You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once per day. When you reach 5th level, you can also cast the darkness spell once per day. Charisma is your spellcasting ability for this spell.',
                        requiredLevel: 1,
                    },
                    {
                        name: 'Drow Magic 2',
                        description: 'When you reach 3rd level, you can cast the faerie fire spell once per day. Charisma is your spellcasting ability for this spell.',
                        requiredLevel: 3,
                    },
                    {
                        name: 'Drow Magic 3',
                        description: 'When you reach 5th level, you can  cast the darkness spell once per day. Charisma is your spellcasting ability for this spell.',
                        requiredLevel: 5,
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
                    requiredLevel: 1,
                },
                {
                    name: 'Fey Ancestry',
                    description: 'You have advantage on saving throws against being charmed, and magic can’t put you to sleep.',
                    requiredLevel: 1,
                },
                {
                    name: 'Trance', 
                    description: 'Elvesdon’tneedtosleep.Instead,they meditate deeply, remaining semiconscious, for 4 hours a day. While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.',
                    requiredLevel: 1,
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
                    description: 'You can speak, read and write one additional language of your choice.',
                    requiredLevel: 1,
                }
            )
        }

        // GOBLINS

        if (race === 'goblin') {
            this.abilityScore.DEX += 2;
            this.abilityScore.CON++;
            this.size = 'small';
            this.speed += 30;
            this.languages.push('Goblin');
            this.abilities.push(
                {
                    name: 'Dakvision',
                    description: 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.',
                    requiredLevel: 1,
                },
                {
                    name: 'Fury of the Small',
                    description: `When you damage a creature with an attack or a spell and the creature\'s size is larger than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your level (${this.level}). One you use this trait, you can\'t use it again until you finish a long or short rest.`,
                    requiredLevel: 1,
                },
                {
                    name: 'Nimble Escape',
                    description: 'You can take the Disengage or Hide action as a bonus action on each of your turns.',
                    requiredLevel: 1,
                },
            );
        }

        // MINOTAUR

        if (this.race === 'minotaur') {
            this.abilityScore.STR += 2;
            this.abilityScore.CON ++;
            this.speed += 30;
            this.hornAttack = function() {
                return dice.d(6) + dice.mod(this.abilityScore.STR);
            };
            this.proficiencies.push('intimidation');
            this.languages.push('Minotaur');
            this.abilities.push(
                {
                    name: 'Goring Rush',
                    description: 'Immediately after you use the Dash action on your turn and move at least as far as your speed, you can make one melee attack with your horns as a bonus action.', 
                    requiredLevel: 1,
                },
                {
                    name: 'Hammering Horns',
                    description: `Immediately after you hit a creature with a melee attack with a melee attack as part of the Attack action on your turn, you can attempt to shove that creature with your horns using your reaction. The creature must be no more than one size larger than you and within 5 feet of you. It must make a Strength saving throw against a DC equal to 8 + your proficiency bonus (${this.proficiencyBonus})+ your STR modifier (${dice.mod(this.abilityScore.STR)}). If it fails, you push it up to 5 feet away from you.`,
                    requiredLevel: 1,
                },
                {
                    name: 'Hybrid Nature', 
                    description: 'You have two creature types: humanoid and monstrosity. You can be affected by a game effects if it works on either of your creature types.',
                    requiredLevel: 1,
                },
            );
        }

    } // end of constructor, methods begin below

    getItems() {
        return this.items;
    }
    addItem(item) {
        this.items.push(item); // adds an item object to the items array
        this.encumberance += item.weight;
        return this.items;
    }
    removeItem(item) {
        if (this.items.includes(item)) {
            this.items.splice(this.items.indexOf(item), 1);
            this.encumberance -= item.weight; 
            return item;
        } 
    }
    getAbilityScores() {
        return this.abilityScore;
    }
    getAbilityScore(stat) {
        return this.abilityScore[stat];
    }
    setAbilityScore(stat, num) { // takes a stat key and a number
        this.abilityScore[stat] = num;
        return this.abilityScore[stat];
    }
    getAbilities() {
        let available = [];
        for (let i = 0; i < this.abilities.length; i++) {
            if (this.abilities[i].requiredLevel <= this.level) {
                available.push(this.abilities[i]);
            }
        }
        return available;
    }
    attack(weapon, stat, twoHand) {
        let modifier = dice.mod(this.abilityScore[stat]);
        let attackRoll = dice.d(20);
        console.log(`modifier = ${modifier}`);
        console.log(`attack roll = ${attackRoll}`);
        if (weapon.properties.includes('versatile') && attackRoll === 20 && twoHand) {
            return [attackRoll + modifier, 2 * (weapon.twoHandAttack() + modifier)];
        } else if (weapon.properties.includes('versatile') && attackRoll !== 20 && twoHand) {
            return [attackRoll + modifier, weapon.twoHandAttack() + modifier];
        } else if (attackRoll === 20 && !twoHand) {
            return [attackRoll + modifier, 2 * (weapon.attack() + modifier)];
        } else {
            return [attackRoll + modifier, weapon.attack() + modifier];
        }
    }
    equip(armor) {
        let dexMod = dice.mod(this.abilityScore.DEX);
        if (armor.strength > this.abilityScore.STR) {
            return 'Insufficient strength.';
        } else if (armor.type === 'light') {
            this.AC = armor.AC + dexMod;
        } else if (armor.type === 'medium') {
            if (dexMod > 2) {
                this.AC = armor.AC + 2;
            } else if (dexMod <= 2) {
                this.AC = armor.AC + dexMod;
            }
        } else if (armor.type === 'heavy') {
            this.AC = armor.AC;
        } else if (armor.type === 'shield') {
            this.AC += 2;
        }
        return this.AC;
    }
}

// character classes below

export default Character;