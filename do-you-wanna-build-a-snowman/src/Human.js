var Snowman = require('./Snowman');

class Human {
    constructor(name, wantsToBuildASnowman) {
        this.name = name;
        this.wantsToBuildASnowman = true;
        this.materials = {
            snowballs: 0,
            coal: 0,
            buttons: 0,
            carrots: 0
        };
    };
    gatherMaterials() {
        
    }
}

module.exports = Human;