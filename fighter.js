import armory from './items';
import Character from './characters.js';
import dice from './dice.js';

class Fighter extends Character {
    constructor(name, race, subrace) {
        super(name, race, subrace);
        this.hitDiceType += 10; // the VALUE of hit dice, not number. See hitDiceNumber property
        this.MAXHP += 10;
        this.HP += 10 + dice.mod(this.abilityScore.CON);
        this.abilities.push(
            {
                name: 'Second Wind',
                description: 'You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.',
                requiredLevel: 1,
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