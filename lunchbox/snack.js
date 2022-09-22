class Snack {
    constructor(name) {
        this.type = name;
        this.deliciousLevel = "extra";
        this.amount = 100;
        this.isInLunchBox = false;
        this.cuttingItClose = false;
    }
    getEaten() {
        this.amount -= 10;
        if (this.amount > 20) {
            this.cuttingItClose = false;
        } else if (this.amount <= 20) {
            this.cuttingItClose = true;
        }
    }
    checkForHealthy() {
        var name = this.type;
        if (name.includes("fruit")) {
            return true;
        } else if (name.includes("Fruit")) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Snack;
