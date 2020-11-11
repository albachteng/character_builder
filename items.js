 class Item {
    constructor(name, description) {
        this.name = name; // string;
        this.description = description; // string;
    }
 }

 class Potion extends Item {
     constructor(name, description) {
         super(name, description);
     }
 }

 class Weapon extends Item {
     constructor(name, description, damage) {
         super(name, description);
         this.damage = damage; // might have to represent this with more than one property
     }
 }