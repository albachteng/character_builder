import armory from './items';
import Character from './characters.js';
import dice from './dice.js';

class Fighter extends Character {
    constructor(name, race, subrace, fightingStyle) {
        super(name, race, subrace);
        this.hitDiceType += 10; // the VALUE of hit dice, not number. See hitDiceNumber property
        this.MAXHP += 10;
        this.HP += 10 + dice.mod(this.abilityScore.CON);
        this.abilities.push(
            {
                name: 'Second Wind',
                description: `You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level (${this.level}). Once you use this feature, you must finish a short or long rest before you can use it again.`,
                requiredLevel: 1,
            },
            {
                name: 'Action Surge',
                description: 'Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action. Once you use this feature, you cannot use it again until you finish a long or short rest.',
                requiredLevel: 2,
            },
            {
                name: 'Action Surge 2',
                description: 'Starting at 17th level, you can use your Action Surge ability twice between each long or short rest, but only once per turn.',
                requiredLevel: 17,
            },

        );
        this.proficiencies.push(
            'light armor', 'medium armor', 'heavy armor', 'shields', 'simple weapons', 'martial weapons',
        );
        this.savingThrowsProficiencies = ['STR', 'CON',];
    }
    // end of constructor, begin methods below
    levelUp(attribute1, attribute2) {
        this.level++;
        this.hitDiceNumber++; // increase hitDice number by 1;
        this.MAXHP += dice.d(this.hitDiceType); // automatically rolls HP
        this.HP = this.MAXHP; // full HP upon level up
        if (this.level % 4 === 0) {
            this.abilityScore[attribute1]++;
            this.abilityScore[attribute2]++;
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
        this.fightingStyle = fightingStyle;
        this.addFightingStyle(fightingStyle);
    }
}

// test subject

const isho = new Fighter('Isho-Genni', 'human', 'none');
isho.setAbilityScore('STR', 15);
let spear = armory.weapons.spear;
let shield = armory.armor.shield;
isho.addItem(spear);
isho.addItem(shield);
isho.equip(shield);
isho.equip(armory.armor.plate);
console.log(isho);
console.log(isho.encumberance);