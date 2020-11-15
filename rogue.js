import Character from './characters.js';
import dice from './dice.js';
import classes from './abilities';
import armory from './items.js';

class Rogue extends Character {
    constructor(name, race, subrace, STR, DEX, CON, INT, WIS, CHA) {
        super(name, race, subrace, STR, DEX, CON, INT, WIS, CHA);
        this.HP.hitDiceType += 8; // the VALUE of hit dice, not number. See hitDiceNumber property
        this.HP.max += 8 + dice.mod(this.abilityScore.CON); 
        this.HP.current = this.HP.max;
        this.abilities.push(...classes.rogue.abilities);
        this.proficiencies.push(...classes.rogue.proficiencies);
        this.savingThrows.push('DEX', 'INT');
        this.languages.push('thieves\' cant');
        this.sneakAttack = 1; // the number of d6 you get to roll on a sneak attack
    } // end of constructor
    levelUp() {
        super.levelUp();
        if (this.level % 2 !== 0) {
            this.sneakAttack++;
        }
        // need to add to sneakAttack dice for each other level
    }
    chooseSkills() { // add skills to proficiencies if they are on the class list
        for (let i = 0; i < arguments.length; i++) {
            for (let j = 0; j < classes.rogue.skills.length; ++j) {
                if (arguments[i] === classes.rogue.skills[j]) {
                    this.proficiencies.push(classes.rogue.skills[j]);
                }
            }
        }
    }

}

const lem = new Rogue("Lem", 'goblin', 'none', 12, 18, 14, 16, 15, 11);
// console.log(lem.getAbilities());
// console.log(lem.showCharacter());
lem.chooseSkills('insight', 'deception', 'acrobatics', 'sleight of hand');
lem.levelUp();
lem.levelUp();
lem.levelUp();
lem.levelUp();
lem.levelUp();
lem.levelUp();
lem.levelUp();
lem.levelUp();
lem.levelUp();
console.log(lem.setArchetype('mastermind'));
console.log(lem.abilities);
