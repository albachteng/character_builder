import armory from "./items";

class Ability {
    constructor(name, description, requiredLevel) {
        this.name = name;
        this.description = description;
        this.requiredLevel = requiredLevel;
    }
}

const classes = {
    barbarian: {
        abilities: [
            {
                name: 'Rage',
                description: 'On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren’t wearing heavy armor: 1) You have advantage on Strength checks and Strength saving throws. 2) When you make a melee weapon attack using Strength, you gain a bonus to the damage roll that increases as you gain levels as a barbarian. 3) You have resistance to bludgeoning, piercing, and slashing damage. If you are able to cast spells, you can’t cast them or concentrate on them while raging. Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven’t attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action. Once you have raged the number of times shown for your barbarian level in the Rages column of the Barbarian table, you must finish a long rest before you can rage again.',
                requiredLevel: 1,
            },
            {
                name: 'Unarmored Defense',
                description: 'While you are not wearing armor, your AC equals 10+ your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit.',
                requiredLevel: 1,
            },
            {
                name: 'Reckless Attack',
                description: 'You can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn.',
                requiredLevel: 2,
            },
            {
                name: 'Danger Sense',
                description: 'You gain an uncanny sense of when things nearby aren’t as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can’t be blinded, deafened, or incapacitated.',
                requiredLevel: 2,
            },
            {
                name: 'Extra Attack',
                description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.',
                requiredLevel: 5,
            },
            {
                name: 'Fast Movement',
                description: 'Your speed increases by 10 feet while you aren\'t wearing heavy armor.',
                requiredLevel: 5,
            },
            {
                name: 'Feral Instinct',
                description: 'Your instincts are so honed that you have advantage on initiative rolls. Additionally, if you are surprised at the beginning of combat and aren’t incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn.',
                requiredLevel: 7,
            },
            {
                name: 'Brutal Critical',
                description: 'You can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.',
                requiredLevel: 9,
            },
            {
                name: 'Brutal Critical 2',
                description: 'You can roll two additional weapon damage die when determining the extra damage for a critical hit with a melee attack.',
                requiredLevel: 13,
            },
            {
                name: 'Brutal Critical 3',
                description: 'You can roll three additional weapon damage die when determining the extra damage for a critical hit with a melee attack.',
                requiredLevel: 17,
            },
            {
                name: 'Relentless Rage',
                description: 'Your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you’re raging and don’t die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead. Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10.',
                requiredLevel: 11,
            },
            {
                name: 'Persistent Rage',
                description: 'Your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it.',
                requiredLevel: 15,
            },
            {
                name: 'Indomitable Might',
                description: 'If your total for a Strength check is less than your Strength score, you can use that score in place of the total.',
                requiredLevel: 18,
            },
            {
                name: 'Primal Champion',
                description: 'You embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.',
                requiredLevel: 20,
            },
        ],
        proficiencies: [
            'light armor', 'medium armor', 'shields', 
            'club', 'dagger', 'greatclub', 
            'handaxe', 'javelin', 'light hammer', 
            'mace', 'quarterstaff', 'sickle',
            'spear', 'light crossbow', 'dart',
            'shortbow', 'sling', 'battleaxe',
            'flail', 'glaive', 'greataxe',
            'greatsword', 'halberd', 'lance',
            'longsword', 'maul', 'morningstar',
            'pike', 'rapier', 'scimitar',
            'shortsword', 'trident', 'warpick',
            'warhammer', 'whip', 'blowgun',
            'hand crossbow', 'heavy crossbow', 'longbow',
            'net', 
        ],
        skills: [
            'animal handling', 'athletics', 'intimidation', 'nature', 'perception', 'survival',
        ],
    },
    beserker: {
        abilities: [
            {
                name: 'Frenzy',
                description: 'You can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion (as described in appendix A).', 
                requiredLevel: 3,
            },
            {
                name: 'Mindless Rage',
                description: 'You can’t be charmed or frightened while raging. Ifyou are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage.', 
                requiredLevel: 6,
            },
            {
                name: 'Intimidating Presence',
                description: 'You can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you. If the creature succeeds on its saving throw, you can\'t use this feature on that creature again for 24 hours.', 
                requiredLevel: 10,
            },
            {
                name: 'Retaliation',
                description: 'When you take damage from a creature that is within 5 feet of you. you can use your reaction to make a melee weapon attack against that creature.', 
                requiredLevel: 14,
            },
        ],
    },
    totemWarrior: {},
    fighter: {
        abilities: [
            {
                name: 'Second Wind',
                description: `You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.`,
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
        ],
        proficiencies: [
            'light armor', 'medium armor', 'heavy armor', 
            'shields', 'club', 'dagger', 'greatclub', 
            'handaxe', 'javelin', 'light hammer', 
            'mace', 'quarterstaff', 'sickle',
            'spear', 'light crossbow', 'dart',
            'shortbow', 'sling', 'battleaxe',
            'flail', 'glaive', 'greataxe',
            'greatsword', 'halberd', 'lance',
            'longsword', 'maul', 'morningstar',
            'pike', 'rapier', 'scimitar',
            'shortsword', 'trident', 'warpick',
            'warhammer', 'whip', 'blowgun',
            'hand crossbow', 'heavy crossbow', 'longbow',
            'net', 
        ],
    },
    champion: {
        abilities: [
            {
                name: 'Improved Critical',
                description: 'Your weapon attacks score a critical hit on a roll of 19 or 20.',
                requiredLevel: 3,
            },
            {
                name: 'Remarkable Athlete',
                description: `You can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn’t already use your proficiency bonus. In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier.`,
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
                description: `You attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don’t gain this benefit if you have 0 hit points.`,
                requiredLevel: 18,
            },
        ],
        proficiencies: [],
    },
    battleMaster: {
        abilities: [
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
        ],
        proficiencies: ['one additional artisan\'s tools'],
        combatManeuvers: [
            {
                name: 'Commander\'s Strike',
                description: `When you take the Attack action on your turn, you can forgo one of your attacks and use a bonus action to direct one of your companions to strike. When you do so, choose a friendly creature who can see or hear you and expend one superiority die. That creature can immediately use its reaction to make one weapon attack, adding the superiority die to the attack’s damage roll.`,
                requiredLevel: 3,
            },
            {
                name: 'Disarming Attack',
                description: `When you hit a creature with a weapon attack, you can expend one superiority die to attempt to disarm the target, forcing it to drop one item of your choice that it’s holding. You add the superiority die to the attack’s damage roll, and the target must make a Strength saving throw. On a failed save, it drops the object you choose. The object lands at its feet.`,
                requiredLevel: 3,
            },
            {
                name: 'Distracting Strike',
                description: `When you hit a creature with a weapon attack, you can expend one superiority die to distract the creature, giving your allies an opening. You add the superiority die to the attack’s damage roll. The next attack roll against the target by an attacker other than you has advantage if the attack is made before the start of your next turn.`,
                requiredLevel: 3,
            },
            {
                name: 'Evasive Footwork',
                description: 'When you move, you can expend one superiority die, rolling the die and adding the number rolled to your AC until you stop moving.',
                requiredLevel: 3,
            },
            {
                name: 'Feinting Attack',
                description: `You can expend one superiority die and use a bonus action on your turn to feint, choosing one creature within 5 feet of you as your target. You have advantage on your next attack roll against that creature. If that attack hits, add the superiority die to the attack’s damage roll.`,
                requiredLevel: 3,
            },
            {
                name: 'Goading Attack',
                description: `When you hit a creature with a weapon attack, you can expend one superiority die to attempt to goad the target into attacking you. You add the superiority die to the attack’s damage roll, and the target must make a W isdom saving throw. On a failed save, the target has disadvantage on all attack rolls against targets other than you until the end of your next turn.`,
                requiredLevel: 3,
            },
            {
                name: 'Lunging Attack',
                description: `When you make a melee weapon attack on your turn, you can expend one superiority die to increase your reach for that attack by 5 feet. If you hit, you add the superiority die to the attack’s damage roll.`,
                requiredLevel: 3,
            },
            {
                name: 'Maneuvering Attack',
                description: `When you hit a creature with a weapon attack, you can expend one superiority die to maneuver one of your comrades into a more advantageous position. You add the superiority die to the attack’s damage roll, and you choose a friendly creature who can see or hear you. That creature can use its reaction to move up to half its speed without provoking opportunity attacks from the target of your attack.`,
                requiredLevel: 3,
            },
            {
                name: 'Menacing Attack',
                description: `When you hit a creature with a weapon attack, you can expend one superiority die to attempt to frighten the target. You add the superiority die to the attack’s damage roll, and the target must make a Wisdom saving throw. On a failed save, it is frightened of you until the end of your next turn.`,
                requiredLevel: 3,
            },
            {
                name: 'Parry',
                description: `When another creature damages you with a melee attack, you can use your reaction and expend one superiority die to reduce the damage by the number you roll on your superiority die + your Dexterity modifier.`,
                requiredLevel: 3,
            },
            {
                name: 'Precision Attack',
                description: `When you make a weapon attack roll against a creature, you can expend one superiority die to add it to the roll. You can use this maneuver before or after making the attack roll, but before any effects of the attack are applied.`,
                requiredLevel: 3,
            },
            {
                name: 'Pushing Attack',
                description: `When you hit a creature with a weapon attack, you can expend one superiority die to attempt to drive the target back. You add the superiority die to the attack\'s damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you push the target up to 15 feet away from you.`,
                requiredLevel: 3,
            },
            {
                name: 'Rally',
                description: `On your turn, you can use a bonus action and expend one superiority die to bolster the resolve of one of your companions. When you do so, choose a friendly creature who can see or hear you. That creature gains temporary hit points equal to the superiority die roll + your Charisma modifier.`,
                requiredLevel: 3,
            },
            {
                name: 'Riposte',
                description: `When a creature misses you with a melee attack, you can use your reaction and expend one superiority die to make a melee weapon attack against the creature. If you hit, you add the superiority die to the attack\'s damage roll.`,
                requiredLevel: 3,
            },
            {
                name: 'Sweeping Attack',
                description: `When you hit a creature with a melee weapon attack, you can expend one superiority die to attempt to damage another creature with the same attack. Choose another creature within 5 feet of the original target and within your reach. If the original attack roll would hit the second creature, it takes damage equal to the number you roll on your superiority die. The damage is of the same type dealt by the original attack.`,
                requiredLevel: 3,
            },
            {
                name: 'Trip Attack',
                description: `When you hit a creature with a weapon attack, you can expend one superiority die to attempt to knock the target down. You add the superiority die to the attack’s damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you knock the target prone.`,
                requiredLevel: 3,
            },
        ],
    },
    rogue: {
        abilities: [
            {
                name: 'Expertise',
                description: `Choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves’ tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.`,
                requiredLevel: 1,
            },
            {
                name: 'Expertise 2',
                description: `Choose two more of your proficiencies (in skills or with thieves’ tools). Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.`,
                requiredLevel: 6,
            },
            {
                name: 'Sneak Attack',
                description: `You know how to strike subtly and exploit a foe’s distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon. You don’t need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn’t incapacitated, and you don’t have disadvantage on the attack roll. The amount of the extra damage increases as you gain levels in this class (your level, divided by two and rounded up).`,
                requiredLevel: 1,
            },
            {
                name: 'Thieves\' Cant',
                description: 'During your rogue training you learned thieves’ cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves’ cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly. In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves’ guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run.',
                requiredLevel: 1,
            },
            {
                name: 'Cunning Action',
                description: 'Your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action.',
                requiredLevel: 2,
            },
            {
                name: 'Uncanny Dodge',
                description: 'when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack’s damage against you.',
                requiredLevel: 5,
            },
            {
                name: 'Evasion',
                description: 'You can nimbly dodge out of the way of certain area effects, such as a red dragon’s fiery breath or an ice storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail.',
                requiredLevel: 7,
            },
            {
                name: 'Reliable Talent',
                description: 'You have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10.',
                requiredLevel: 11,
            },
            {
                name: 'Blindsense',
                description: 'If you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you.',
                requiredLevel: 14,
            },
            {
                name: 'Slippery Mind',
                description: 'You have acquired greater mental strength. You gain proficiency in W isdom saving throws.',
                requiredLevel: 15,
            },
            {
                name: 'Elusive',
                description: 'You are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren’t incapacitated.',
                requiredLevel: 18,
            },
            {
                name: 'Stroke of Luck',
                description: 'You have an uncanny knack for succeeding when you need to. Ifyour attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20. Once you use this feature, you can’t use it again until you finish a short or long rest.',
                requiredLevel: 20,
            },
        ],
        proficiencies: [
            'light armor', 'hand crossbow', 'longsword', 'rapier', 'shortsword', 'thieves\' tools', 
        ],
        skills: [
            'acrobatics', 'athletics', 'deception', 'insight', 'intimidation', 'investigation', 'perception', 'performance', 'persuasion', 'sleight of hand', 'stealth', 
        ],
    },
    thief: {
        abilities: [
            {
                name: 'Fast Hands',
                description: 'You can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves’ tools to disarm a trap or open a lock, or take the Use an Object action.',
                requiredLevel: 3,
            },
            {
                name: 'Second-Story Work',
                description: 'When you choose this archetype at 3rd level, you gain the ability to climb faster than normal; climbing no longer costs you extra movement. In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier.',
                requiredLevel: 3,
            },
            {
                name: 'Supreme Sneak',
                description: 'You have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn.',
                requiredLevel: 9,
            },
            {
                name: 'Use Magic Device',
                description: 'You have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items.',
                requiredLevel: 13,
            },
            {
                name: 'Thief\'s Reflexes',
                description: 'You have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can’t use this feature when you are surprised.',
                requiredLevel: 17,
            },
        ],
    },
    assassin: {
        abilities: [
            {
                name: 'Assassinate',
                description: 'You are at your deadliest when you get the drop on your enemies. You have advantage on attack rolls against any creature that hasn’t taken a turn in the combat yet. In addition, any hit you score against a creature that is surprised is a critical hit.',
                requiredLevel: 3,
            },
            {
                name: 'Infiltration Expertise',
                description: 'You can unfailingly create false identities for yourself. You must spend seven days and 25 gp to establish the history, profession, and affiliations for an identity. You can’t establish an identity that belongs to someone else. For example, you might acquire appropriate clothing, letters of introduction, and official- looking certification to establish yourself as a member of a trading house from a remote city so you can insinuate yourself into the company of other wealthy merchants. Thereafter, if you adopt the new identity as a disguise, other creatures believe you to be that person until given an obvious reason not to.',
                requiredLevel: 9,
            },
            {
                name: 'Imposter',
                description: 'You gain the ability to unerringly mimic another person’s speech, writing, and behavior. You must spend at least three hours studying these three components of the person’s behavior, listening to speech, examining handwriting, and observing mannerisms. Your ruse is indiscernible to the casual observer. If a wary creature suspects something is amiss, you have advantage on any Charisma (Deception) check you make to avoid detection.',
                requiredLevel: 13,
            },
            {
                name: 'Death Strike',
                description: 'You become a master of instant death. When you attack and hit a creature that is surprised, it must make a Constitution saving throw (DC 8 + your Dexterity modifier + your proficiency bonus). On a failed save, double the damage of your attack against the creature.',
                requiredLevel: 17,
            },
        ],
        proficiencies: ['disguise kit', 'poisoner\'s kit'],
    },
    mastermind: {
        abilities: [
            {
                name: 'Master of Intrigue',
                description: 'You gain proficiency with the disguise kit, the forgery kit, and one gaming set of your choice. You also learn two languages of your choice. Additionally, you can unerringly mimic the speech patterns and accent of a creature that you hear speak for at least 1 minute, enabling you to pass yourself off as a native speaker of a particular land, provided that you know the language.',
                requiredLevel: 3,
            },
            {
                name: 'Master of Tactics',
                description: 'You can use the Help action as a bonus action. Additionally, when you use the Help action to aid an ally in attacking a creature, the target of that attack can be within 30 feet of you, rather than 5 feet of you, if the target can see or hear you.',
                requiredLevel: 3,
            },
            {
                name: 'Insightful Manipulator', 
                description: 'If you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice: Intelligence, Wisdom, Charisma, Class levels (if any). At the DM\'s option, you might also realize you know a piece of the creature\'s history or one of its personality traits, if it has any.',
                requiredLevel: 9,
            },
            {
                name: 'Misdirection',
                description: 'You can sometimes cause another creature to suffer an attack meant for you. When you are targeted by an attack while a creature within 5 feet of you is granting you cover against that attack, you can use your reaction to have the attack target that creature instead of you.',
                requiredLevel: 13,
            },
            {
                name: 'Soul of Deceit',
                description: 'your thoughts can\'t be read by telepathy or other means, unless you allow it. You can present false thoughts by making a Charisma (Deception) check contested by the mind reader\'s Wisdom (Insight) check. Additionally, no matter what you say, magic that would determine if you are telling the truth indicates you are being truthful if you so choose, and you can\'t be compelled to tell the truth by magic.', 
                requiredLevel: 17,
            },
        ],
        proficiencies: ['disguise kit', 'forgery kit', 'one additional gaming set', 'two additional languages'], 
    },
    ranger: {
        abilities: [
            {
                name: 'Favored Enemy',
                description: 'You have significant experience studying, tracking, hunting, and even talking to a certain type of enemy. Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies. You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them. You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures.',
                requiredLevel: 1,
            },
            {
                name: 'Favored Enemy 2',
                description: 'Choose one additional favored enemy, as well as an associated language. Your choices should reflect the types of monsters you have encountered on your adventures.',
                requiredLevel: 6,
            },
            {
                name: 'Favored Enemy 3',
                description: 'Choose one additional favored enemy, as well as an associated language. Your choices should reflect the types of monsters you have encountered on your adventures.',
                requiredLevel: 14,
            },
            {
                name: 'Natural Explorer',
                description: 'You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you’re proficient in. While traveling for an hour or more in your favored terrain, you gain the following benefits: difficult terrain doesn’t slow your group’s travel; your group can’t becom e lost except by magical means; even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger; if you are traveling alone, you can move stealthily at a normal pace; when you forage, you find twice as much food as you normally would; while tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.',
                requiredLevel: 1,
            },
            {
                name: 'Natural Explorer 2',
                description: 'Choose one additional favored terrain.' , 
                requiredLevel: 6,
            },
            {
                name: 'Natural Explorer 3',
                description: 'Choose one additional favored terrain.' , 
                requiredLevel: 10,
            },
            {
                name: 'Primeval Awareness',
                description: 'You can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn’t reveal the creatures’ location or number.',
                requiredLevel: 3,
            },
            {
                name: 'Extra Attack',
                description: 'You can attack twice, instead of once, whenever you take the Attack action on your turn.',
                requiredLevel: 5,
            },
            {
                name: 'Land\'s Stride',
                description: 'Moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard. In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell.',
                requiredLevel: 8,
            },
            {
                name: 'Hide in Plain Sight',
                description: 'You can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage. Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit.',
                requiredLevel: 10,
            },
            {
                name: 'Vanish',
                description: 'You can use the Hide action as a bonus action on your turn. Also, you can’t be tracked by nonmagical means, unless you choose to leave a trail.',
                requiredLevel: 14,
            },
            {
                name: 'Feral Senses',
                description: 'You gain preternatural senses that help you fight creatures you can’t see. W hen you attack a creature you can’t see, your inability to see it doesn’t impose disadvantage on your attack rolls against it. You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn’t hidden from you and you aren’t blinded or deafened.',
                requiredLevel: 18,
            },
            {
                name: 'Foe Slayer',
                description: 'you becom e an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied.',
                requiredLevel: 1,
            },
        ],
        proficiencies: [
            'light armor', 'medium armor', 'shields', 
            'club', 'dagger', 'greatclub', 
            'handaxe', 'javelin', 'light hammer', 
            'mace', 'quarterstaff', 'sickle',
            'spear', 'light crossbow', 'dart',
            'shortbow', 'sling', 'battleaxe',
            'flail', 'glaive', 'greataxe',
            'greatsword', 'halberd', 'lance',
            'longsword', 'maul', 'morningstar',
            'pike', 'rapier', 'scimitar',
            'shortsword', 'trident', 'warpick',
            'warhammer', 'whip', 'blowgun',
            'hand crossbow', 'heavy crossbow', 'longbow',
            'net', 
        ], 
        skills: [
            'animal handling', 'athletics', 'insight', 'investigation', 'nature',
            'perception', 'stealth', 'survival',
        ], 
    },
    artificer: {},
}

export default classes;