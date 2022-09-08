class Skier {
    constructor(name) {
        this.name = name
        this.hasLiftTicket = true;
        this.skillLevel = 1;
        this.nextSlope = "green circle";
    }

    takeLesson(){
        this.skillLevel++;
    }

//green cricle = 1
//blue square >= 2
//black diamond >=4

    pickSlope() {
        if (this.skillLevel == 2  || this.skillLevel === 3) {
            this.nextSlope = "blue square";
        } 
        else if (this.skillLevel >= 4) {
            this.nextSlope = "black diamond";
        }
    }

}

module.exports = Skier;