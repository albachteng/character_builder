import Character from './characters.js';
import armory from './items.js';
import dice from './dice.js';
import races from './races.js';
import classes from './abilities.js';

class Artificer extends Character {
    constructor(name, race, subrace, STR, DEX, CON, INT, WIS, CHA) {
        super(name, race, subrace, STR, DEX, CON, INT, WIS, CHA);
        this.HP.hitdiceType += 8;
        this.HP.max += 8 + dice.mod(this.abilityScore.CON);
        this.HP.current = this.HP.max;
        this.class = 'artificer';
        this.savingThrows.push('CON', 'INT');
        this.proficiencies.push(...classes.artificer.proficiencies);
        this.abilities.push(...classes.artificer.abilities);
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
        }
    }
    levelUp(ability1, ability2) {
        super.levelUp();
        if (this.level === 4 || this.level === 8 || this.level === 12 || this.level === 16 || this.level === 18) {
            this.abilityScore[ability1]++;
            this.abilityScore[ability2]++;
        }
    }
}