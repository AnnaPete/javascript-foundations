class LunchBox {
    constructor(box) {
           this.owner = box.owner
            this.madeOf = box.madeOf
            this.shape = box.shape
            this.color = box.color
            this.material = box.madeOf
            this.snacks = []
    }
    acquireSnack(snack) {
        this.snacks.push(snack)
        snack.isInLunchBox = true
    }
    findHealthySnacks() {
        var healthySnacks = []
        for (var i = 0; i < this.snacks.length; i++) {
            this.snacks[i].checkForHealthy()
            var healthy = this.snacks[i].checkForHealthy()
            if (healthy === true) {
                healthySnacks.push(this.snacks[i].type)
            }
        }
       return healthySnacks
    }
}

module.exports = LunchBox;
