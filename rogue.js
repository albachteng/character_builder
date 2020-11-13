import Character from './characters.js';
import dice from './dice.js';
import classes from './abilities';

class Rogue extends Character {
    constructor(name, race, subrace, STR, DEX, CON, INT, WIS, CHA) {
        super(name, race, subrace, STR, DEX, CON, INT, WIS, CHA);
        this.HP.hitDiceType += 8; // the VALUE of hit dice, not number. See hitDiceNumber property
        this.HP.max += 8 + dice.mod(this.abilityScore.CON); 
        this.HP.current = this.HP.max;
        this.abilities.push(...classes.rogue.abilities);
        this.proficiencies.push(...classes.rogue.proficiencies);
        this.savingThrowsProficiencies = ['DEX', 'INT',];
        this.languages.push('thieves\' cant');
        this.sneakAttack = Math.ceil(this.level / 2); // the number of d6 you get to roll
    }
    // end of constructor
    // will need a "choose skills" function to select 4 proficiencies to add from rogue.skills list
}

const lem = new Rogue("Lem", 'goblin', 'none', 12, 18, 14, 16, 15, 11);
lem.addItem('assassin');
console.log(lem.getAbilities());
