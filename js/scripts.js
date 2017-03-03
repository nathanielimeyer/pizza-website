function Pizza(size) {
  this.size = size;
  this.price = 0;
  this.toppings = [];
}

Pizza.prototype.calculatePrice = function() {
  if (this.size === "S") {
    this.price = 10;
  } else if (this.size === "M") {
    this.price = 14;
  } else if (this.size === "L") {
    this.price = 18;
  } else if (this.size === "XL") {
    this.price = 22;
  }
}
