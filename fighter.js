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
                description: 'You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action. Once you use this feature, you cannot use it again until you finish a long or short rest.',
                requiredLevel: 2,
            },
            {
                name: 'Action Surge 2',
                description: 'You can use your Action Surge ability twice between each long or short rest, but only once per turn.',
                requiredLevel: 17,
            },
            {
                name: 'Extra Attack',
                description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.',
                requiredLevel: 5,
            },
            {
                name: 'Extra Attack 2',
                description: 'You can attack three times whenever you take the Attack action on your turn.',
                requiredLevel: 11,
            },
            {
                name: 'Extra Attack 3',
                description: 'You can attack four times whenever you take the Attack action on your turn.',
                requiredLevel: 20,
            },
            {
                name: 'Indomitable',
                description: 'You can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can’t use this feature again until you finish a long rest.',
                requiredLevel: 9,
            },
            {
                name: 'Indomitable 2',
                description: 'You can use your Indomitable feature twice per long or short rest.',
                requiredLevel: 13,
            },
            {
                name: 'Indomitable 3',
                description: 'You can use your Indomitable feature three times per long or short rest.',
                requiredLevel: 17,
            },

        );
        this.proficiencies.push(
            'light armor', 'medium armor', 'heavy armor', 'shields', 'simple weapons', 'martial weapons',
        );
        this.savingThrowsProficiencies = ['STR', 'CON',];
        this.combatManeuvers = [
            {
                name: 'Commander\'s Strike',
                description: `When you take the Attack action on your turn, you can forgo one of your attacks and use a bonus action to direct one of your companions to strike. When you do so, choose a friendly creature who can see or hear you and expend one superiority die. That creature can immediately use its reaction to make one weapon attack, adding the superiority die (1d${this.superiorityDiceType}) to the attack’s damage roll.`,
                requiredLevel: 3,
            },
            {
                name: 'Disarming Attack',
                description: `When you hit a creature with a weapon attack, you can expend one superiority die to attempt to disarm the target, forcing it to drop one item of your choice that it’s holding. You add the superiority die (1d${this.superiorityDiceType}) to the attack’s damage roll, and the target must make a Strength saving throw. On a failed save, it drops the object you choose. The object lands at its feet.`,
                requiredLevel: 3,
            },
            {
                name: 'Distracting Strike',
                description: `When you hit a creature with a weapon attack, you can expend one superiority die to distract the creature, giving your allies an opening. You add the superiority die (1d${this.superiorityDiceType}) to the attack’s damage roll. The next attack roll against the target by an attacker other than you has advantage if the attack is made before the start of your next turn.`,
                requiredLevel: 3,
            },
            {
                name: 'Evasive Footwork',
                description: 'When you move, you can expend one superiority die, rolling the die and adding the number rolled to your AC until you stop moving.',
                requiredLevel: 3,
            },
            {
                name: 'Feinting Attack',
                description: `You can expend one superiority die and use a bonus action on your turn to feint, choosing one creature within 5 feet of you as your target. You have advantage on your next attack roll against that creature. If that attack hits, add the superiority die (1d${this.superiorityDiceType}) to the attack’s damage roll.`,
                requiredLevel: 3,
            },
            {
                name: 'Goading Attack',
                description: `When you hit a creature with a weapon attack, you can expend one superiority die to attempt to goad the target into attacking you. You add the superiority die (1d${this.superiorityDiceType}) to the attack’s damage roll, and the target must make a W isdom saving throw. On a failed save, the target has disadvantage on all attack rolls against targets other than you until the end of your next turn.`,
                requiredLevel: 3,
            },
            {
                name: 'Lunging Attack',
                description: `When you make a melee weapon attack on your turn, you can expend one superiority die to increase your reach for that attack by 5 feet. If you hit, you add the superiority die (1d${this.superiorityDiceType}) to the attack’s damage roll.`,
                requiredLevel: 3,
            },
            {
                name: 'Maneuvering Attack',
                description: `When you hit a creature with a weapon attack, you can expend one superiority die to maneuver one of your comrades into a more advantageous position. You add the superiority die (1d${this.superiorityDiceType}) to the attack’s damage roll, and you choose a friendly creature who can see or hear you. That creature can use its reaction to move up to half its speed without provoking opportunity attacks from the target of your attack.`,
                requiredLevel: 3,
            },
            {
                name: 'Menacing Attack',
                description: `When you hit a creature with a weapon attack, you can expend one superiority die to attempt to frighten the target. You add the superiority die (1d${this.superiorityDiceType}) to the attack’s damage roll, and the target must make a Wisdom saving throw. On a failed save, it is frightened of you until the end of your next turn.`,
                requiredLevel: 3,
            },
            {
                name: 'Parry',
                description: `When another creature damages you with a melee attack, you can use your reaction and expend one superiority die to reduce the damage by the number you roll on your superiority die (1d${this.superiorityDiceType}) + your Dexterity modifier (${dice.mod(this.abilityScore.DEX)}).`,
                requiredLevel: 3,
            },
            {
                name: 'Precision Attack',
                description: `When you make a weapon attack roll against a creature, you can expend one superiority die (1d${this.superiorityDiceType}) to add it to the roll. You can use this maneuver before or after making the attack roll, but before any effects of the attack are applied.`,
                requiredLevel: 3,
            },
            {
                name: 'Pushing Attack',
                description: `When you hit a creature with a weapon attack, you can expend one superiority die to attempt to drive the target back. You add the superiority die (1d${this.superiorityDiceType}) to the attack\'s damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you push the target up to 15 feet away from you.`,
                requiredLevel: 3,
            },
            {
                name: 'Rally',
                description: `On your turn, you can use a bonus action and expend one superiority die to bolster the resolve of one of your companions. When you do so, choose a friendly creature who can see or hear you. That creature gains temporary hit points equal to the superiority die roll (1d${this.superiorityDiceType}) + your Charisma modifier (${dice.mod(this.abilityScore.CHA)}).`,
                requiredLevel: 3,
            },
            {
                name: 'Riposte',
                description: `When a creature misses you with a melee attack, you can use your reaction and expend one superiority die to make a melee weapon attack against the creature. If you hit, you add the superiority die (1d${this.superiorityDiceType}) to the attack\'s damage roll.`,
                requiredLevel: 3,
            },
            {
                name: 'Sweeping Attack',
                description: `When you hit a creature with a melee weapon attack, you can expend one superiority die to attempt to damage another creature with the same attack. Choose another creature within 5 feet of the original target and within your reach. If the original attack roll would hit the second creature, it takes damage equal to the number you roll on your superiority die (1d${this.superiorityDiceType}). The damage is of the same type dealt by the original attack.`,
                requiredLevel: 3,
            },
            {
                name: 'Trip Attack',
                description: `When you hit a creature with a weapon attack, you can expend one superiority die to attempt to knock the target down. You add the superiority die (1d${this.superiorityDiceType}) to the attack’s damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you knock the target prone.`,
                requiredLevel: 3,
            },
        ];
        console.log(`Fighter ${this.name} initialized at level 1. Set attributes and use setFightingStyle() to continue.`);
    }
    // end of constructor, begin methods below
    levelUp(attribute1, attribute2) {
        this.level++;
        this.hitDiceNumber++; // increase hitDice number by 1;
        this.MAXHP += dice.d(this.hitDiceType); // automatically rolls HP
        this.HP = this.MAXHP; // full HP upon level up
        if (this.level === 4 || this.level === 6 || this.level === 8 || this.level === 12 || this.level === 14 || this.level === 16 || this.level ===19) {
            this.abilityScore[attribute1]++;
            this.abilityScore[attribute2]++;
        }
        if (this.level === 7 || this.level === 15 && this.archetype === 'Battle Master') {
            this.maxSuperiorityDice++;
            this.superiorityDice = this.maxSuperiorityDice;
        }
        if (this.level === 10 && this.archetype === 'Battle Master') {
            this.superiorityDiceType = 10;
        }
        if (this.level === 18 && this.archetype === 'Battle Master') {
            this.superiorityDiceType = 12;
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
    addMartialArchetype(archetype) {
        if (this.level === 3) {
            this.archetype = archetype;
            switch(archetype) {
                case 'Champion':
                    this.abilities.push(
                        {
                            name: 'Improved Critical',
                            description: 'Your weapon attacks score a critical hit on a roll of 19 or 20.',
                            requiredLevel: 3,
                        },
                        {
                            name: 'Remarkable Athlete',
                            description: `You can add half your proficiency bonus (round up) (${Math.ceil(this.proficiencyBonus / 2)}) to any Strength, Dexterity, or Constitution check you make that doesn’t already use your proficiency bonus. In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier (${dice.mod(this.abilityScore.STR)}).`,
                            requiredLevel: 7,
                        },
                        {
                            name: 'Additional Fighting Style',
                            description: 'You can choose a second option from the Fighting Style class feature.',
                            requiredLevel: 10,
                        },
                        {
                            name: 'Superior Critical',
                            description: 'Your weapon attacks score a critical hit on an attack roll of 18, 19 or 20.',
                            requiredLevel: 15,
                        },
                        {
                            name: 'Survivor',
                            description: `You attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier (${dice.mod(this.abilityScore.CON)}) if you have no more than half of your hit points left. You don’t gain this benefit if you have 0 hit points.`,
                            requiredLevel: 18,
                        },
                    );
                    break;
                    case 'Battle Master': 
                        this.abilities.push(
                            {
                                name: 'Combat Superiority',
                                description: 'You learn three maneuvers of your choice. Many maneuvers enhance an attack in some way. You can use only one maneuver per attack.',
                                requiredLevel: 3,
                            },
                            {
                                name: 'Combat Superiority 2',
                                description: 'You learn two additional maneuvers of your choice. You can also replace one maneuver you know with a different one.',
                                requiredLevel: 7,
                            },
                            {
                                name: 'Combat Superiority 3',
                                description: 'You learn two additional maneuvers of your choice. You can also replace one maneuver you know with a different one.',
                                requiredLevel: 10,
                            },
                            {
                                name: 'Combat Superiority 4',
                                description: 'You learn two additional maneuvers of your choice. You can also replace one maneuver you know with a different one.',
                                requiredLevel: 15,
                            },
                            {
                                name: 'Know Your Enemy',
                                description: 'If you spend at least 1 minute observing or interacting with another creature outside of combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice: Strength score, Dexterity score, Constitution score, Armor Class, current total Hit Points, total class levels (if any), fighter levels (if any).',
                                requiredLevel: 7,
                            },
                            {
                                name: 'Relentless',
                                description: 'when you roll initiative and have no superiority dice remaining, you regain 1 superiority die.',
                                requiredLevel: 15,
                            },
                        );
                        this.superiorityDice = 4;
                        this.maxSuperiorityDice = 4;
                        this.superiorityDiceType = 8;
                        if (dice.mod(this.abilityScore.STR) >= dice.mod(this.abilityScore.DEX)) {
                            this.maneuverSave = 8 + this.proficiencyBonus + dice.mod(this.abilityScore.STR);
                        } else {
                            this.maneuverSave = 8 + this.proficiencyBonus + dice.mod(this.abilityScore.DEX);
                        }
                        this.spendSuperiorityDice = function(num) { // NTS: rest function should recover
                            this.superiorityDice -= num;
                            return this.superiorityDice;
                        }
                        this.proficiencies.push('one artisan\'s tools choice');
                        break;
            }
            
        }
    }
    addCombatManeuvers(...name) {
        this.combatManeuvers.forEach((maneuver) => {
            if (maneuver.name === name[name.length]) {
                this.abilities.push(maneuver);
            }
        })
    }
}

// test subject

const isho = new Fighter('Isho-Genni', 'human', 'none');
isho.setFightingStyle('Great Weapon Fighting');
isho.levelUp();
isho.levelUp();
isho.addCombatManeuvers(['Parry']);
console.log(isho.abilities);