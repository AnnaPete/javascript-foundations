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
       this.materials[0]
    }
}

module.exports = Craft;
