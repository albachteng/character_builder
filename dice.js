const dice = {
    d: (num, advantage) => { // takes a number as dice type and makes the appropriate roll
        let firstRoll = 1 + Math.floor(Math.random()*num);
        let secondRoll = 1 + Math.floor(Math.random()*num);
        if (num === 0) {
            return 0;
        } else if (advantage === 'advantage') {
            if (firstRoll >= secondRoll) {
                return firstRoll;
            } else if (secondRoll > firstRoll) {
                return secondRoll;
            }
        } else if (advantage === 'disadvantage') {
            if (firstRoll <= secondRoll) {
                return firstRoll;
            } else if (secondRoll < firstRoll) {
                return secondRoll;
            }
        }
        else {
            return 1 + Math.floor(Math.random()*num);
        }
    },
    
    mod: (stat) => { // takes an abilityScore stat and returns a modifier
        return Math.floor((stat - 10) / 2);
    },
}

export default dice;