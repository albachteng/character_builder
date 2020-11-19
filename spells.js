class Spell {
    constructor(name, level, school, ritual, time, range, components, duration, concentration, description) {
        this.name = name; 
        this.level = level; // number
        this.school = school; // string
        this.ritual = ritual; // true or false
        this.time = time; // string, typically action, bonus action, reaction or else a more descriptive string
        this.range = range; // in feet, 0 can mean either self or touch, see description
        this.components = components; // array includes any or none of the strings verbal, sommatic, material: [...]
        this.duration = duration; // string
        this.concentration = concentration; // true or false
        this.description = description; // string
    }
}

const alarm = new Spell(
    'Alarm', 1, 'abjuration', true, 
    '1 minute', 30, ['verbal', 'somatic', 'material: a tiny bell and a piece of fine silver wire',], '8 hours', false,
    'You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won’t set off the alarm. You also choose whether the alarm is mental or audible. A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping. An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.'
);

const animalFriendship = new Spell(
    'Animal Friendship', 1, 'enchantment', false, 
    'action', 30, ['verbal', 'somatic', 'material: a morsel of food',], '24 hours', false, 
    'This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast’s Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell’s duration. If you or one of your companions harms the target, the spells ends. At Higher Levels. When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st.'
);

const cureWounds = new Spell(
    'Cure Wounds', 1, 'evocation', false, 
    'action', 0, ['verbal', 'somatic',], 'instantaneous', false, 
    'A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.'
);

const detectMagic = new Spell(
    'Detect Magic', 1, 'divination', true, 
    'action', 0, ['verbal', 'somatic',], '10 minutes', true, 
    'For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any. The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.'
);

const detectPoisonAndDisease = new Spell(
    'Detect Poison and Disease', 1, 'divination', true, 
    'action', 0, ['verbal', 'somatic', 'material: a yew leaf',], '10 minutes', true,
    'For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case. The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.'
);

const ensnaringStrike = new Spell(
    'Ensnaring Strike', 1, 'conjuration', false, 
    'bonus action', 0, ['verbal',], '1 minute', true,
    'The next time you hit a creature with a weapon attack before this spell ends, a writhing mass of thorny vines appears at the point of impact, and the target must succeed on a Strength saving throw or be restrained by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. If the target succeeds on the save, the vines shrivel away. While restrained by this spell, the target takes 1d6 piercing damage at the start of each of its turns. A creature restrained by the vines or one that can touch the creature can use its action to make a Strength check against your spell save DC. On a success, the target is freed. At Higher Levels: If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.'
);

const fogCloud = new Spell(
    'Fog Cloud', 1, 'conjuration', false, 
    'action', 120, ['verbal', 'somatic',], '1 hour', true,
    'You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st.'
);

const goodberry = new Spell(
    'Goodberry', 1, 'transmutation', false, 
    'action', 0, ['verbal', 'somatic', 'material: a sprig of mistletoe',], 'instantaneous', false,
    'Up to ten berries appear in your hand and are infused with magic for the duration. A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry provides enough nourishment to sustain a creature for one day. The berries lose their potency if they have not been consumed within 24 hours of the casting of this spell.'
);

const hailOfThorns = new Spell(
    'Hail of Thorns', 1, 'conjuration', false, 
    'bonus', 0, ['verbal',], '10 minutes', true,
    'The next time you hit a creature with a ranged weapon attack before the spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effect of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes 1dlO piercing damage on a failed save, or half as much damage on a successful one. At Higher Levels: If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st (to a maximum of 6d10).'
);

const huntersMark = new Spell(
    'Hunter\'s Mark', 1, 'divination', false, 
    'bonus', 90, ['verbal',], '10 minutes', true,
    'You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any W isdom (Perception) or W isdom (Survival) check you make to find it. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature. At Higher Levels: When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours.'
);

const jump = new Spell(
    'Jump', 1, 'transmutation', false, 
    'action', 0, ['verbal', 'somatic', 'material: a grasshopper\'s hind leg',], '1 minute', false,
    'You touch a creature. The creature’s jump distance is tripled until the spell ends.'
);

const longstrider = new Spell(
    'Longstrider', 1, 'transmutation', false, 
    'action', 0, ['verbal', 'somatic', 'material: a pinch of dirt',], '1 hour', false,
    'You touch a creature. The target’s speed increases by 10 feet until the spell ends. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.'
);

const speakWithAnimals = new Spell(
    'Speak with Animals', 1, 'divination', true, 
    'action', 0, ['verbal', 'somatic',], '10 minutes', false,
    'You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the DM’s discretion.'
);

const x = new Spell(
    '', 1, 'divination', true, 
    'action', 0, ['verbal', 'somatic', 'material: ',], '10 minutes', true,
    'description'
);

const spellbook = {
    ranger: {
        first: [
            alarm, animalFriendship, cureWounds, detectMagic, detectPoisonAndDisease,
            ensnaringStrike, fogCloud, goodberry, hailOfThorns, huntersMark, jump, 
            longstrider, speakWithAnimals, 
        ],
        second: [
            // animalMessenger, barkskin, beastSense, cordonOfArrows, darkvision, 
            // findTraps, lesserRestoration, locateAnimalsOrPlants, locateObject, 
            // passWithoutATrace, protectionFromPoison, silence, spikeGrowth, 
        ],
        third: [
            // conjureAnimals, conjureBarrage, daylight, lightningArrow, 
            // nondetection, plantGrowth, protectionFromEnergy, speakWithPlants, 
            // waterBreathing, waterWalk, windWall,
        ],
        fourth: [
            // conjureWoodlandBeings, freedomOfMovement, graspingVine, 
            // locateCreature, stoneskin,
        ],
        fifth: [
            // communeWithNature, conjureVolley, swiftQuiver, treeStride,
        ],
    },
    wizard: {
        cantrip: [], 
        first: [],
        second: [],
        third: [],
        fourth: [],
        fifth: [],
        sixth: [],
        seventh: [],
        eighth: [],
        ninth: [],
    },
    artificer: {
        cantrip: [
            // mending,
        ], 
        first: [
            // alarm, cureWounds, disguiseSelf, expeditiousRetreat, 
            // falseLife, jump, longstrider, sanctuary, shieldOfFaith
        ],
        second: [
            // aid, alterSelf, arcaneLock, blur, continualFlame, 
            // darkvision, enhanceAbility, enlargeReduce, invisibility,
            // lesserRestoration, levitate, magicWeapon,
            // protectionFromPoison, ropeTrick, seeInvisibility,
            // spiderClimb,
        ],
        third: [
            // blink, fly, gaseousForm, glyphOfWarding,
            // haste, protectionFromEnergy, revivify, 
            // waterBreathing, waterWalk,
        ],
        fourth: [
            // arcaneEye, deathWard, fabricate, freedomOfMovement, 
            // leomundsSecretChest, mordenkainensFaithfulHound, 
            // mordenkainensPrivateSanctum, otilukesResilientSphere,
            // stoneShape, stoneskin,
        ],
    }, 
};

export default spellbook; 