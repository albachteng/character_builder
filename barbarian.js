import Character from './characters.js';
import dice from './dice.js';
import classes from './abilities';
import armory from './items.js';

class Barbarian extends Character{
    constructor(name, race, subrace, STR, DEX, CON, INT, WIS, CHA) {
        super(name, race, subrace, STR, DEX, CON, INT, WIS, CHA);
        this.HP.hitDiceType += 12;
        this.HP.max += 12 + dice.mod(this.abilityScore.CON);
        this.savingThrows.push('STR','CON');
        this.proficiencies.push(...classes.barbarian.proficiencies);
        this.abilities.push(...classes.barbarian.abilities);
        this.rages = 2; // increases at specific levels
        this.rageDamage = 2; // increases at specific levels
        if (this.archetype === 'beserker') {
            this.abilities.push(...classes.beserker.abilities);
        }
    }
    // end of constructor
    levelUp() {
        super.levelUp();
        if (this.level === 3 || this.level === 6 || this.level === 12 || this.level === 17) {
            this.rages++;
        }
        if (this.level === 9 || this.level === 16) {
            this.rageDamage++;
        }
        if (this.level === 20) {
            this.rages = 100;
        }
    }
}


const ulrach = new Barbarian('Ulrach', 'minotaur', 'none', 18, 14, 16, 12, 12, 10);
console.log(ulrach.showCharacter());
