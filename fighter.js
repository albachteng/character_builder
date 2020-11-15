import armory from './items';
import Character from './characters.js';
import dice from './dice.js';
import classes from './abilities.js';

class Fighter extends Character {
    constructor(name, race, subrace, STR, DEX, CON, INT, WIS, CHA) {
        super(name, race, subrace, STR, DEX, CON, INT, WIS, CHA);
        this.startingWealth = 5;
        this.HP.hitDiceType += 10; // the VALUE of hit dice, not number. See hitDiceNumber property
        this.HP.max += 10 + dice.mod(this.abilityScore.CON); 
        this.HP.current = this.HP.max;
        this.abilities.push(...classes.fighter.abilities);
        this.proficiencies.push(...classes.fighter.proficiencies);
        this.savingThrows.push('STR','CON');
        this.fightingStyle = '';
        this.superiorityDice = { 
            type: 8,
            max: 4,
            current: 4,
        };
        if (this.archetype === 'battleMaster') {
            if (dice.mod(this.abilityScore.STR) >= dice.mod(this.abilityScore.DEX)) {
                this.maneuverSave = 8 + this.proficiencyBonus + dice.mod(this.abilityScore.STR);
            } else {
                this.maneuverSave = 8 + this.proficiencyBonus + dice.mod(this.abilityScore.DEX);
            }
            this.spendSuperiorityDice = function(num) { // NTS: rest function should recover
                this.superiorityDice.current -= num;
                return this.superiorityDice;
            }}
        console.log(`Fighter ${this.name} initialized at level 1. Set attributes and use setFightingStyle() to continue.`);
    }
    // end of constructor, begin methods below
    levelUp(attribute1, attribute2) {
        super.levelUp();
        if (this.level === 4 || this.level === 6 || this.level === 8 || this.level === 12 || this.level === 14 || this.level === 16 || this.level ===19) {
            this.abilityScore[attribute1]++;
            this.abilityScore[attribute2]++;
        } // fighters get to up their stats a whole lot
        if (this.level === 7 || this.level === 15 && this.archetype === 'battleMaster') {
            this.superiorityDice.max++;
            this.superiorityDice.current = this.superiorityDice.max;
        } // might be cleaner to make superiorityDice an object with a max/current/type property
        if (this.level === 10 && this.archetype === 'battleMaster') {
            this.superiorityDice.type = 10;
        }
        if (this.level === 18 && this.archetype === 'battleMaster') {
            this.superiorityDice.type = 12;
        }
    }
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
    addCombatManeuvers() {
        for (let j = 0; j < arguments.length; j++) {
            for (let i = 0; i < classes.battleMaster.combatManeuvers.length; i++) {
                if (classes.battleMaster.combatManeuvers[i].name === arguments[j]) {
                    this.abilities.push(classes.battleMaster.combatManeuvers[i]);
                }}
        }}
    }

// test subject

const isho = new Fighter('Isho-Genni', 'human', 'none', 17, 14, 15, 5, 9, 13);
isho.setFightingStyle('Defense');
isho.setArchetype('battleMaster');
isho.levelUp();
isho.levelUp();
isho.levelUp();
isho.levelUp();
isho.levelUp();
isho.levelUp();
isho.setAbilityScore('STR', 18);
isho.setAbilityScore('DEX', 15);
isho.setAbilityScore('CON', 16);
isho.setAbilityScore('INT', 6);
isho.setAbilityScore('WIS', 10);
isho.setAbilityScore('CHA', 14);
isho.addCombatManeuvers('Disarming Attack', 'Riposte', 'Menacing Attack', "Commander's Strike", "Distracting Strike");
isho.addItem(armory.weapons.spear);
isho.addItem(armory.armor.scaleMail);
isho.addItem(armory.armor.shield);
isho.addItem(armory.weapons.shortbow);
isho.equip(armory.armor.scaleMail);
isho.equip(armory.armor.shield);
// console.log(isho.getAbilities());
console.log(isho.archetype);
console.log(isho.getAbilities());