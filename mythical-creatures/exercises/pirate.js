class Pirate {
    constructor(name, job = 'scallywag', cursed = false, booty = 0) {
        this.name = name
        this.job = job
        this.cursed = cursed
        this.booty = booty
        this.callCount = 0
    }

    robShip() {
        this.callCount += 1;
        if (this.callCount >= 6) {
            this.cursed = true
            return 'ARG! I\'ve been cursed!'
        } else {
            this.booty += 100
            return 'YAARRR!'
        };
     };

    liftCurse() {
        if (this.cursed == true && this.booty >= 500) {
            this.booty -= 300
            this.cursed = false
            return 'Your curse has been lifted!'
        } else {
            return 'You don\'t need to lift a curse!'
        }
    }
}



module.exports = Pirate