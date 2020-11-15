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
}