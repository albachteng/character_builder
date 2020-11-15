import dice from './dice.js';

const races = {
    dwarf: {
        abilities: [
            {
                name: 'Darkvision',
                description: 'Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.',
                requiredLevel: 1,
            },
            {
                name: 'Dwarven Resilience',
                description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.',
                requiredLevel: 1,
            },
            {
                name: 'Stonecunning', 
                description: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.',
                requiredLevel: 1,
            },
            {
                name: 'Tool Proficiency',
                description: 'ToolProficiency. You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.',
                requiredLevel: 1,
            }
        ],
        proficiencies: [
            'battleaxe', 'handaxe', 'throwing hammer', 'warhammer',
        ],
    },
    mountainDwarf: {
        abilities: [],
        proficiencies: [
            'light armor', 'medium armor'
        ],
    },
    elf: {
        abilities: [
            {
                name: 'Darkvision',
                description: 'Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.',
                requiredLevel: 1,
            },
            {
                name: 'Fey Ancestry',
                description: 'You have advantage on saving throws against being charmed, and magic can’t put you to sleep.',
                requiredLevel: 1,
            },
            {
                name: 'Trance', 
                description: 'Elvesdon’tneedtosleep.Instead,they meditate deeply, remaining semiconscious, for 4 hours a day. While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.',
                requiredLevel: 1,
            },
        ],
        proficiencies: [
            'perception',
        ],
    },
    woodElf: {
        abilities: [
            {
                name: 'Mask of the Wild',
                description: 'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.',
                requiredLevel: 1,
            },
        ],
        proficiencies: [
            'longsword', 'shortsword', 'shortbow', 'longbow',
        ],
    },
    highElf: {
        abilities: [
            {
                name: 'Cantrip',
                description: 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.',
                requiredLevel: 1,
            },
            {
                name: 'Extra Language',
                description: 'You can speak, read, and write one extra language of your choice.',
                requiredLevel: 1,
            },
        ],
        proficiencies: [
            'one additional language',
        ],
    },
    drow: {
        abilities: [
            {
                name: 'Superior Darkvision',
                description: 'Your darkvision has a radius of 120 feet.', 
                requiredLevel: 1,
            },
            {
                name: 'Sunlight Sensitivity', 
                description: 'You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.',
                requiredLevel: 1,
            },
            {
                name: 'Drow Magic',
                description: 'You know the dancing lights cantrip. When you reach 3rd level, you can cast the faerie fire spell once per day. When you reach 5th level, you can also cast the darkness spell once per day. Charisma is your spellcasting ability for this spell.',
                requiredLevel: 1,
            },
            {
                name: 'Drow Magic 2',
                description: 'When you reach 3rd level, you can cast the faerie fire spell once per day. Charisma is your spellcasting ability for this spell.',
                requiredLevel: 3,
            },
            {
                name: 'Drow Magic 3',
                description: 'When you reach 5th level, you can  cast the darkness spell once per day. Charisma is your spellcasting ability for this spell.',
                requiredLevel: 5,
            },
        ],
        proficiencies: [
            'rapier', 'shortsword', 'hand crossbow',
        ],
    },
    human: {
        abilities: [
            {
                name: 'Bonus Language',
                description: 'You can speak, read and write one additional language of your choice.',
                requiredLevel: 1,
            }
        ],
        proficiencies: [
            'one additional language', 
        ],
    },
    goblin: {
        abilities: [
            {
                name: 'Dakvision',
                description: 'You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.',
                requiredLevel: 1,
            },
            {
                name: 'Fury of the Small',
                description: `When you damage a creature with an attack or a spell and the creature\'s size is larger than yours, you can cause the attack or spell to deal extra damage to the creature. The extra damage equals your level. One you use this trait, you can\'t use it again until you finish a long or short rest.`,
                requiredLevel: 1,
            },
            {
                name: 'Nimble Escape',
                description: 'You can take the Disengage or Hide action as a bonus action on each of your turns.',
                requiredLevel: 1,
            },
        ],
        proficiencies: [],
    },
    minotaur: {
        abilities: [
            {
                name: 'Goring Rush',
                description: 'Immediately after you use the Dash action on your turn and move at least as far as your speed, you can make one melee attack with your horns as a bonus action.', 
                requiredLevel: 1,
            },
            {
                name: 'Hammering Horns',
                description: 'Immediately after you hit a creature with a melee attack with a melee attack as part of the Attack action on your turn, you can attempt to shove that creature with your horns using your reaction. The creature must be no more than one size larger than you and within 5 feet of you. It must make a Strength saving throw against a DC equal to 8 + your proficiency bonus + your STR modifier. If it fails, you push it up to 5 feet away from you.',
                requiredLevel: 1,
            },
            {
                name: 'Hybrid Nature', 
                description: 'You have two creature types: humanoid and monstrosity. You can be affected by a game effects if it works on either of your creature types.',
                requiredLevel: 1,
            },
        ],
        proficiencies: [
            'intimidation',
        ],
    },
    dragonborn: {
        abilities: [
            {
                name: 'Draconic Ancestry',
                description: 'You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.',
                requiredLevel: 1,
            },
            {
                name: 'Breath Weapon',
                description: 'You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. After you use your breath weapon, you can’t use it again until you complete a short or long rest.',
                requiredLevel: 1,
            },
            {
                name: 'Breath Weapon 2',
                description: 'The damage of your breath weapon increases to 3d6. 4d6 at 11th level, and 5d6 at 16th level.',
                requiredLevel: 6,
            },
            {
                name: 'Breath Weapon 3',
                description: 'The damage of your breath weapon increases to 4d6.',
                requiredLevel: 11,
            },
            {
                name: 'Breath Weapon 4',
                description: 'The damage of your breath weapon increases to 5d6.',
                requiredLevel: 16,
            },
        ],
        proficiencies: [

        ],
        ancestry: [
            {
                dragon: 'black',
                damageType: 'acid', 
                breathWeapon: 'Your breath weapon deals acid damage in a 5 by 30ft line. Each creature affected must make a Dexterity saving throw.'
            },
            {
                dragon: 'blue',
                damageType: 'lightning', 
                breathWeapon: 'Your breath weapon deals lightning damage in a 5 by 30ft line. Each creature affected must make a Dexterity saving throw.'
            },
            {
                dragon: 'brass',
                damageType: 'fire', 
                breathWeapon: 'Your breath weapon deals fire damage in a 5 by 30ft line. Each creature affected must make a Dexterity saving throw.'
            },
            {
                dragon: 'bronze',
                damageType: 'lightning', 
                breathWeapon: 'Your breath weapon deals lightning damage in a 5 by 30ft line. Each creature affected must make a Dexterity saving throw.'
            },
            {
                dragon: 'copper',
                damageType: 'acid', 
                breathWeapon: 'Your breath weapon deals acid damage in a 5 by 30ft line. Each creature affected must make a Dexterity saving throw.'
            },
            {
                dragon: 'gold',
                damageType: 'fire', 
                breathWeapon: 'Your breath weapon deals fire damage in a 15ft cone. Each creature affected must make a Dexterity saving throw.'
            },
            {
                dragon: 'green',
                damageType: 'poison', 
                breathWeapon: 'Your breath weapon deals poison damage in a 15ft cone. Each creature affected must make a Constitution saving throw.'
            },
            {
                dragon: 'red',
                damageType: 'fire', 
                breathWeapon: 'Your breath weapon deals fire damage in a 15ft cone. Each creature affected must make a Dexterity saving throw.'
            },
            {
                dragon: 'silver',
                damageType: 'cold', 
                breathWeapon: 'Your breath weapon deals cold damage in a 15ft cone. Each creature affected must make a Constitution saving throw.'
            },
            {
                dragon: 'white',
                damageType: 'cold', 
                breathWeapon: 'Your breath weapon deals cold damage in a 15ft cone. Each creature affected must make a Constitution saving throw.'
            },
        ],
    },
}

export default races;