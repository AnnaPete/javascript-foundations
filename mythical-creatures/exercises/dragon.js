class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.eatFood = 0
  }
  greet() {
    return `Hi, ${this.rider}!`
  }
  eat() {
    if (this.eatFood < 2) {
      this.eatFood += 1
    } else {
      this.hungry = false
    }
  }
}


module.exports = Dragon;
