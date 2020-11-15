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
        this.spellcasting = {};
        this.HP.hitDiceType += 10;
        this.HP.max += 10 + dice.mod(this.abilityScore.CON);
        this.savingThrows.push('STR','DEX');
        this.proficiencies.push(...classes.ranger.proficiencies);
        this.abilities.push(...classes.range.abilities);
    }// end of constructor
    addFightingStyle() {

    }
    levelUp(ability1, ability2) {
        super.levelUp();
        if (this.level === 4 || this.level === 8 || this.level === 12 || this.level === 16 || this.level === 19) {
            this.abilityScore[ability1]++;
            this.abilityScore[ability2]++;
        }
    }
}