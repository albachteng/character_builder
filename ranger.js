import Character from './characters.js';
import armory from './items.js';
import dice from './dice.js';
import races from './races.js';
import classes from './abilities.js';

class Ranger extends Character {
    constructor(name, race, subrace, STR, DEX, CON, INT, WIS, CHA) {
        super(name, race, subrace, STR, DEX, CON, INT, WIS, CHA);
        this.class = 'ranger';
        this.languages.push('one additional language (known by your favored enemy)')
        this.startingWealth = 5;
        this.spellcasting = {
            first: {
                spellsKnown: [], 
                spellSlots: 0,
            },
            second: {
                spellsKnown: [], 
                spellSlots: 0,
            },
            third: {
                spellsKnown: [], 
                spellSlots: 0,
            }, 
            fourth: {
                spellsKnown: [], 
                spellSlots: 0,
            }, 
            fifth: {
                spellsKnown: [], 
                spellSlots: 0,
            },
        };
        this.fightingStyle = '';
        this.HP.hitDiceType += 10;
        this.HP.max += 10 + dice.mod(this.abilityScore.CON);
        this.savingThrows.push('STR','DEX');
        this.proficiencies.push(...classes.ranger.proficiencies);
        this.abilities.push(...classes.ranger.abilities);
    }// end of constructor
    addFightingStyle(fightingStyle) {
        switch(fightingStyle) {
            case 'Archery': 
            this.abilities.push(
                {
                    name: 'Archery Fighting Style',
                    description: 'You gain a +2 bonus to attack rolls you make with ranged weapons.',
                    requiredLevel: 1,
                },
            );
            break;
            case 'Defense': 
            this.abilities.push(
                {
                    name: 'Defense Fighting Style',
                    description: 'While you are wearing armor, you gain a +1 bonus to your AC.',
                    requiredLevel: 1,
                },
            );
            break;
            case 'Dueling': 
            this.abilities.push(
                {
                    name: 'Dueling Fighting Style',
                    description: 'When you are wielding a melee weapon in one hand and no other weapons,you gain a +2 bonus to damage rolls with that weapon.',
                    requiredLevel: 1,
                },
            );
            break;
            case 'Great Weapon Fighting': 
            this.abilities.push(
                {
                    name: 'Great Weapon Fighting Style',
                    description: 'When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit.',
                    requiredLevel: 1,
                },
            );
            break;
            case 'Protection': 
            this.abilities.push(
                {
                    name: 'Protection Fighting Style',
                    description: 'When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield.',
                    requiredLevel: 1,
                },
            );
            break;
            case 'Two Weapon Fighting': 
            this.abilities.push(
                {
                    name: 'Two Weapon Fighting Style',
                    description: 'When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack.',
                    requiredLevel: 1,
                },
            );
            break;
        }
    }
    setFightingStyle(fightingStyle) {
        this.fightingStyle += fightingStyle;
        this.addFightingStyle(fightingStyle);
    }
    levelUp(ability1, ability2) {
        super.levelUp();
        if (this.level === 4 || this.level === 8 || this.level === 12 || this.level === 16 || this.level === 19) {
            this.abilityScore[ability1]++;
            this.abilityScore[ability2]++;
        }
    }
}