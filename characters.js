// characters and their class extensions (fighter, etc)

class Character {
    constructor(name, level, race, subrace) {
        this.name = name; // string
        this.level = level; // number; important for class abilities later on
        this.items = []; // array of items, see 'item.js'; initialized empty
        this.abilities = [];
        this.proficiencies = [];
        this.languages = ['Common'];
        this.hitDiceNumber = 1; // number of hit dice, type is determined by class 
        this.MAXHP = 0; // starting HP determined by class
        this.HP = 0; // current HP determined by class
        this.AC = 10; // partly determined by items; w/out armor or shield 10+DEX
        this.abilityScore = { // object, start all stats at 10
            STR: 10,
            DEX: 10,
            CON: 10,
            INT: 10,
            WIS: 10,
            CHA: 10,
        };
        this.race = race; // string
        this.subrace = subrace;

// here we start the race section, which I think just has to be a part of the character creation
// NTS: need to update to include subraces;

        if (race === 'dwarf') {
            if (subrace === 'hill') {
                this.abilityScore.WIS += 1;
                this.MAXHP += 1 * this.level;
            }
            if (subrace === 'mountain') {
                this.abilityScore.STR += 2;
                this.proficiencies.push('light armor', 'medium armor',);
            }
            this.abilityScore.CON += 2;
            this.languages.push('Dwarven');
            this.size = 'medium';
            this.speed = 25;
            this.abilities.push({
                name: 'Darkvision',
                description: 'Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.',
            },
            {
                name: 'Dwarven Resilience',
                description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.',
            },
            {
                name: 'Stonecunning', 
                description: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.',
            },
            {
                name: 'Tool Proficiency',
                description: 'ToolProficiency. You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.',
            }
            )
            this.proficiencies.push(
                'battleaxe', 'handaxe', 'throwing hammer', 'warhammer',
                );
        }
        if (race === 'human') {

        }
        if (race === 'elf') {
            this.abilityScore.DEX += 2;
            this.languages.push('elvish');
            this.size = 'medium';
            this.speed = 30;
            this.abilities.push(
                {
                    name: 'Darkvision',
                    description: 'Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.',
                }
            )
        }
        if (race === '')
    }
    getItems() {
        return this.items;
    }
    setAbilityScore(stat, num) { // takes a stat key and a number
        this.abilityScore[stat] = num;
        return this.abilityScore;
    }
    addItem(item) {
        this.items.push(item); // adds an item object to the items array
        return this.items;
    }
}

// character classes below

class Fighter extends Character {
    constructor(name, level, race, subrace) {
        super(name, level, race, subrace);
        this.hitDice = 10; // the TYPE of hit dice, not number. See hitDiceNumber property
        this.MAXHP += 10;
        this.HP += 10;
        this.abilities.push(
            {
                name: 'Second Wind',
                description: 'You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again.',
            },
        );
        this.proficiencies.push(
            'all armor', 'shields', 'simple weapons', 'martial weapons',
        );
        this.savingThrowsProficiencies = ['STR', 'CON',];
    }
}

// test subject

const isho = new Fighter('Isho-Genni', 1, 'dwarf', 'mountain');
console.log(isho.proficiencies);