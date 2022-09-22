const Material = require("./material");

class Craft {
    constructor(craft) {
        this.name = craft.type;
        this.materials = craft.materials;
        this.completed = false;
    }
    completeCraft() {
        this.completed = true;
        return "All done! It looks great!"
    }
    calculateProjectTotal() {
        var price1 = this.materials[0].price
        var amount1 = this.materials[0].amount
        var price2 = this.materials[1].price
        var amount2 = this.materials[1].amount
        var cost1 = price1 * amount1
        var cost2 = price2 * amount2
        var totalCost = cost1 + cost2
        return totalCost
    }
}

module.exports = Craft;
