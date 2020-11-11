 class Item {
    constructor(name, description, weight) {
        this.name = name; // string;
        this.description = description; // string;
        this.weight = weight;
    }
 }

 class Potion extends Item {
     constructor(name, description, weight) {
         super(name, description);
     }
 }

 class Weapon extends Item {
     constructor(name, description, modifier, weight, damage, versatile) {
         super(name, description, weight);
         this.versatile = versatile;
         this.modifier = modifier;
         this.damage = damage; // might have to represent this with more than one property
         };
         attack() {
            let attack = Math.floor(Math.random() * this.damage) + 1;
            console.log(`attack = ${attack}`);
            return attack;
        }
        twoHandAttack() {
            if (this.versatile) {
                let attack = Math.floor(Math.random() * this.versatile) + 1;
                console.log(`attack = ${attack}`);
                return attack;
            } else {
                return this.attack();
            }
        }
 }

 class Armor extends Item {
     constructor(name, description, weight, AC) {
         super(name, description, weight);
         this.AC = AC;
     }
 }

const longsword = new Weapon('Longsword', 'A one or two-handed weapon dealing slashing damage', ['STR'], 3, 8, 10);

 export default longsword;