import armory from './items.js';
import dice from './dice.js';
import races from './races.js';
import classes from './abilities.js';

// NTS: node -r esm characters.js to allow ECMA Script Module imports in node.js
// characters and their class extensions (fighter, etc)

// Character class

class Character {
    constructor(name, race, subrace, STR, DEX, CON, INT, WIS, CHA) {
        this.name = name; // string
        this.level = 1; // number; important for class abilities later on
        this.items = []; // array of items, see 'item.js'; initialized empty
        this.abilities = []; // an array, maybe better as an object?
        this.proficiencyBonus = 2; // start at two, increases every third level?
        this.savingThrows = [];
        this.proficiencies = []; // also might be better as an object... 
        this.speed = 0; // start at zero and add to it based on race, class, abilities
        this.languages = ['Common'];
        this.encumberance = 0; // initialize to zero;
        this.resistances = []; // empty array of strings
        this.archetype = '';
        this.HP = { // the HP object, keeps all the related ideas together
            current: 0,
            max: 0,
            hitDice: 1,
            hitDiceType: 0, // set by class;
            temporary: 0,
        }; 
        this.abilityScore = { // object, start all stats at 10??
            STR: STR,
            DEX: DEX,
            CON: CON,
            INT: INT,
            WIS: WIS,
            CHA: CHA,
        };
        this.AC = 10 + dice.mod(this.abilityScore.DEX); // partly determined by items; w/out armor or shield 10+DEX
        this.isWearingArmor = false;
        this.isShieldEquipped = false;
        this.leftHand = false;
        this.rightHand = false;
        this.race = race; // string
        this.subrace = subrace;

// here we start the race section, which I think just has to be a part of the character creation

        // DWARVES

        if (race === 'dwarf') {
            if (subrace === 'hill') {
                this.abilityScore.WIS += 1;
                this.HP.max += 1; // NTS this has to run every level up
            }
            if (subrace === 'mountain') {
                this.abilityScore.STR += 2;
                this.proficiencies.push(...races.mountainDwarf.proficiencies);
            }
            this.abilityScore.CON += 2;
            this.languages.push('Dwarven');
            this.size = 'medium';
            this.speed += 25;
            this.abilities.push(...races.dwarf.abilities);
            this.proficiencies.push(...races.dwarf.proficiencies);
        }

        // ELVES
        
        if (race === 'elf') {
            if (this.subrace === 'high') {
                this.abilityScore.INT += 1;
                this.proficiencies.push(...races.highElf.proficiencies);
                this.abilities.push(...races.highElf.abilities);
            }
            if (this.subrace === 'wood') {
                this.abilityScore.WIS += 1;
                this.proficiencies.push(...races.woodElf.proficiencies);
                this.speed += 5;
                this.abilities.push(...races.woodElf.abilities);
            }
            if (this.subrace === 'drow') {
                this.abilityScore.CHA += 1;
                this.abilities.push(...races.drow.abilities);
                this.proficiencies.push(...races.drow.proficiencies);
            }
            this.abilityScore.DEX += 2;
            this.languages.push('Elvish');
            this.size = 'medium';
            this.speed += 30;
            this.abilities.push(...races.elf.abilities);
            this.proficiencies.push(...races.elf.proficiencies);
        }

        // HUMANS
        
        if (race === 'human') {
            this.abilityScore.STR++;
            this.abilityScore.DEX++;
            this.abilityScore.CON++;
            this.abilityScore.INT++;
            this.abilityScore.WIS++;
            this.abilityScore.CHA++;
            this.size = 'medium';
            this.speed += 30;
            this.abilities.push(
                {
                    name: 'Bonus Language',
                    description: 'You can speak, read and write one additional language of your choice.',
                    requiredLevel: 1,
                }
            )
        }

        // GOBLINS

        if (race === 'goblin') {
            this.abilityScore.DEX += 2;
            this.abilityScore.CON++;
            this.size = 'small';
            this.speed += 30;
            this.languages.push('Goblin');
            this.abilities.push(...races.goblin.abilities);
        }

        // MINOTAUR

        if (this.race === 'minotaur') {
            this.abilityScore.STR += 2;
            this.abilityScore.CON ++;
            this.speed += 30;
            this.hornAttack = function() {
                return dice.d(6) + dice.mod(this.abilityScore.STR);
            };
            this.proficiencies.push('intimidation');
            this.languages.push('Minotaur');
            this.abilities.push(...races.minotaur.abilities);
        }
        if (this.race === 'dragonborn') {
            this.abilityScore.STR += 2;
            this.abilityScore.CHA += 1;
            this.speed += 30;
            this.languages.push('Draconic');
            this.abilities.push(...races.dragonborn.abilities);
            let breath = this.abilities.find((ability) => {
                if (ability.name === 'Breath Weapon') {
                    return true;
                };
            });
            let ancestry = races.dragonborn.ancestry.find((ancestor) => {
                if (this.subrace === ancestor.dragon) {
                    return true;
                };
            }); 
            breath.description += ' ' + ancestry.breathWeapon;
            this.resistances.push(ancestry.damageType);
            }
        }

        // end of constructor, methods begin below
    levelUp() {
        this.level++;
        this.HP.hitDice++;
        this.HP.max += dice.d(this.HP.hitDiceType) + dice.mod(this.abilityScore.CON); // automatically rolls HP
        if (this.subrace === 'hill') {
            this.HP.max++;
        }
        this.HP.current = this.HP.max; // full HP upon level up
        this.proficiencyBonus = 2 + Math.floor((this.level - 1) / 4 );
    }
    shortRest(number) {
        let heal = dice.d(this.HP.hitDiceType) * number;
        this.HP.current += heal;
        if (this.HP.current > this.HP.max) {
            this.HP.current = this.HP.max;
        }
        return this.HP.current;
    }
    longRest() {
        this.HP.current = this.HP.max;
    }
    setArchetype(archetype) {
        this.abilities.push(...classes[archetype].abilities);
        this.proficiencies.push(...classes[archetype].proficiencies);
        this.archetype = archetype;
        return this.archetype;
        }
    getItems() {
        return this.items;
    }
    addItem(item) {
        this.items.push(item); // adds an item object to the items array
        this.encumberance += item.weight;
        return this.items;
    }
    removeItem(item) {
        if (this.items.includes(item)) {
            this.items.splice(this.items.indexOf(item), 1);
            this.encumberance -= item.weight; 
            return item;
        }
    }
    getAbilityScores() {
        return this.abilityScore;
    }
    getAbilityScore(stat) {
        return this.abilityScore[stat];
    }
    setAbilityScore(stat, num) { // takes a stat key and a number
        this.abilityScore[stat] = num;
        return this.abilityScore[stat];
    }
    getAbilities() { // returns only abilities the character can use at current level;
        let available = [];
        for (let i = 0; i < this.abilities.length; i++) {
            if (this.abilities[i].requiredLevel <= this.level) {
                available.push(this.abilities[i]);
            }
        }
        return available;
    }
    showCharacter() {
        return `
        ${this.name} level ${this.level} ${this.race}
        HP: ${this.HP.current + this.HP.temporary} / ${this.HP.max} AC: ${this.AC} Speed: ${this.speed}
        STR: ${this.abilityScore.STR} (+${dice.mod(this.abilityScore.STR)})
        DEX: ${this.abilityScore.DEX} (+${dice.mod(this.abilityScore.DEX)})
        CON: ${this.abilityScore.CON} (+${dice.mod(this.abilityScore.CON)})
        INT: ${this.abilityScore.INT} (+${dice.mod(this.abilityScore.INT)})
        WIS: ${this.abilityScore.WIS} (+${dice.mod(this.abilityScore.WIS)})
        CHA: ${this.abilityScore.CHA} (+${dice.mod(this.abilityScore.CHA)})
        `
    }
    attack(weapon, stat, twoHand, advantage) {
        let modifier = dice.mod(this.abilityScore[stat]);
        let rawAttackRoll = dice.d(20, advantage);
        let attackRoll = rawAttackRoll;
        if (this.proficiencies.includes(weapon.name)) {
            attackRoll += this.proficiencyBonus;
        }
        if (rawAttackRoll === 1) {
            return 'critical failure';
        } else if (rawAttackRoll === 20) {
            return [attackRoll + modifier, (2 * (weapon.attack(twoHand)) + modifier), 'critical hit'];
        } else if (rawAttackRoll < 20) {
            return [attackRoll + modifier, weapon.attack(twoHand) + modifier];
        }
    }
    equip(armor) {
        let dex = dice.mod(this.abilityScore.DEX);
        if (armor.strength > this.abilityScore.STR) {
            return 'Insufficient strength.';
        } else if (armor.type === 'light') {
            this.AC = armor.AC + dex;
            this.isWearingArmor = true;
        } else if (armor.type === 'medium') {
            if (dex > 2) {
                this.AC = armor.AC + 2;
                this.isWearingArmor = true;
            } else if (dex <= 2) {
                this.AC = armor.AC + dex;
                this.isWearingArmor = true;
            }
        } else if (armor.type === 'heavy') {
            this.AC = armor.AC;
            this.isWearingArmor = true;
        } else if (armor.type === 'shield') {
            this.isShieldEquipped = true;
            this.leftHand = true;
        }
        if (this.isShieldEquipped) {
            this.AC += 2;
        }
        return this.AC;
    }
}

// character classes below

export default Character;

// const isho = new Character("Isho", 'dragonborn', 'red', 17, 14, 15, 5, 9, 13);
// console.log(isho.attack(armory.weapons.glaive, 'STR', true));
// console.log(isho.attack(armory.weapons.glaive, 'STR', false, 'advantage'));
// console.log(isho.attack(armory.weapons.glaive, 'STR', true));
// console.log(isho.attack(armory.weapons.glaive, 'STR', true, 'advantage'));
// console.log(isho.attack(armory.weapons.glaive, 'STR', true, 'disadvantage'));
// console.log(isho.showCharacter());
// isho.equip(armory.armor.scaleMail);
// console.log(isho.showCharacter());

// console.log(isho.getAbilities());
// console.log(isho.resistances);