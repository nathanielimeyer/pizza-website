function Pizza(size) {
  this.size = size;
  this.price = 0;
  this.toppings = [];
}

// ["size", base price, #of free toppings]
var pricingGuidelines = [["S",10,1],["M",14,1],["L",18,2],["XL",22,3]];

Pizza.prototype.calculatePizzaPrice = function() {
  numberOfToppings = this.toppings.length;
  size = this.size;
  pricingGuidelines.forEach(function(element) {
    if (size === element[0]) {
      price = element[1];
      if (numberOfToppings > element[2]) {
        price += (numberOfToppings - element[2]) * 4;
      }
    }
  });
  return this.price = price;
}
