function Pizza(size) {
  this.size = size;
  this.price = 0;
  this.toppings = [];
}

Pizza.prototype.calculatePrice = function() {
  if (this.size === "S") {
    this.price = 10;
    if (this.toppings.length > 1) {
      this.price += (this.toppings.length - 1) * 4;
    }
  } else if (this.size === "M") {
    this.price = 14;
    if (this.toppings.length > 1) {
      this.price += (this.toppings.length - 1) * 4;
    }
  } else if (this.size === "L") {
    this.price = 18;
    if (this.toppings.length > 2) {
      this.price += (this.toppings.length - 2) * 4;
    }
  } else if (this.size === "XL") {
    this.price = 22;
    if (this.toppings.length > 3) {
      this.price += (this.toppings.length - 3) * 4;
    }
  }
}
