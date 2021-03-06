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

Pizza.prototype.summaryBuilder = function() {
  return ("<li>a" + this.sizeTranslator() + " pizza with " + this.toppings.length + " toppings: " + this.toppings + ". Price: $" + this.price +"</li>")
}

Pizza.prototype.sizeTranslator = function() {
  switch(this.size) {
    case "S":
      return " small";
      break;
    case "M":
      return " medium";
      break;
    case "L":
      return " large";
      break;
    case "XL":
      return "n extra-large";
      break;
  }
}

var pizzaOrder = [];

var calculateTotalPrice = function() {
  var totalPrice = 0;
  pizzaOrder.forEach(function(Pizza) {
    totalPrice += Pizza.price;
  });
  return totalPrice;
};

// Front-end logic
$(document).ready(function() {

  $("#addPizza").click(function() {
    event.preventDefault();
    var inputtedPizzaSize = $("input:radio[name=size]:checked").val();
    var newPizza = new Pizza(inputtedPizzaSize);

    $("input:checkbox:checked").each(function() {
      var checkedTopping = $(this).val();
      newPizza.toppings.push(checkedTopping);
    });
    newPizza.calculatePizzaPrice();
    pizzaOrder.push(newPizza);

    $("#selectedPizzas, #addMorePizzas, #completeOrder").show();
    $("#selectedPizzas").append(newPizza.summaryBuilder());
    $("#orderTotal").text("You have selected " + pizzaOrder.length + " pizzas for a total price of $" + calculateTotalPrice() + ".")
    $("#inputForm").hide();
  });

  $("#addMorePizzas").click(function() {
    event.preventDefault();
    $("#inputForm").show();
    $("#addMorePizzas").hide();
  });

  $("#completeOrder").click(function() {
    event.preventDefault();
    $("#addMorePizzas, #completeOrder, #inputForm").hide();
    $("#finalOrder").show();
  });
});
