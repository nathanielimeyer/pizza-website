function Pizza(size) {
  this.size = size;
  this.price = 0;
  this.toppings = [];
}

Pizza.prototype.calculatePrice = function() {
  if (this.size === "S") {
    this.price = 10 + this.toppings.length * 4;
  } else if (this.size === "M") {
    this.price = 14 + this.toppings.length * 4;
  } else if (this.size === "L") {
    this.price = 18 + this.toppings.length * 4;
  } else if (this.size === "XL") {
    this.price = 22 + this.toppings.length * 4;
  }
}
