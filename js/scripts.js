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

var pizzaOrder = [];

var calculateTotalPrice = function() {
  var totalPrice = 0;
  pizzaOrder.forEach(function(Pizza) {
    totalPrice += Pizza.calculatePizzaPrice();
  });
  return totalPrice;
};

// Front-end logic
$(document).ready(function() {

  $(".addPizza").click(function() {
    event.preventDefault();
    debugger;
    var inputtedPizzaSize = $("input:radio[name=size]:checked").val();
    var newPizza = new Pizza(inputtedPizzaSize);

    $("input:checkbox:checked").each(function() {
      var checkedTopping = $(this).find("input:checkbox:checked").val();
      newPizza.toppings.push(newAddress);
    });
    newPizza.calculatePizzaPrice();
    pizzaOrder.push(newPizza);

    $(".selectedPizzas").append("You have chosen a " + newPizza.size + " pizza with " + newPizza.toppings.length + " toppings: " + newPizza.toppings + ". Price: $" + newPizza.price);
  });

  $(".completeOrder").click(function() {});
});
