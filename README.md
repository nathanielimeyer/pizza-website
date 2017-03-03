# _Pizza website_

#### _A website where users can order pizza._

#### By _**Nathaniel Meyer**_

## Description

_This is a project to produce a website where a user can select the size of pizza they want and some toppings. After they submit their order will be read back to them with the price of the pizza._

_Given sufficient time the functionality will expand to include ordering multiple pizzas, selecting a sauce, and toppings with different prices._

#### _Project specifications / BDD_

Business logic

|Requirement|input|output|
|-----------|:---:|:----:|
|A pizza object with a size, price, and an array for toppings|var newPizza = new Pizza(M)|newPizza {size: "XL"}, price: 0, toppings: Array[0]|
|A prototype that will compute price for a given pizza based on its stored size and toppings:|Pizza.calculatePizzaPrice()|$X|
|Start with a base price per size|S;M;L;XL|$10;$14;$18;$22|
|Count toppings and add to price|3 toppings|+$12|
|Small and medium start with one free topping, L 2 free, xl 3 free|S, 1 topping; M, 3 toppings; XL, 1 topping |$10; $14 + 2 x $4; $22 + $0|
|#Optional|||
|An array to hold pizzas for big orders|Pizza,Pizza|order[2]|
|Choose sauce|red, white, or no|stored in object|
|Toppings with different prices|M,2 meat, 2 veg| $14 + 1 X $4 + 2 X $3 = $24|

Front end logic

|Requirement|input|output|
|-----------|:---:|:----:|
|A size selector|A dropdown|Selection stored on submit|
|A topping selector|Checkboxes|Checked values selected|
|A submit button|Click|Size and topping values are grabbed and the object is created|
|A function to push toppings to the array|some checked toppings|each checked value pushed to newPizza.toppings|
|Display order and item cost|M, 3 toppings, {SUBMIT}|You have selected a medium pizza with anchovies, artichoke hearts, and asparagus for $22|
|Complete order button|Click|The details of the pizza(s), the price (for each), and the total price is displayed|
| # Optional |||
|Add a pizza button|Click|The previous pizza is stored and displayed, the form is reset for the next pizza|



## Setup/Installation Requirements

* _In any folder with git installed, run "git clone https://github.com/nathanielimeyer/pizza-website/"._
* _cd ./pizza-website/_
* _Open index.html (with any modern web browser.)_

_OR_

* Go to https://nathanielimeyer.github.io/pizza-website/

## Known Bugs

_List known bugs here_

## Support and contact details

_nathanielimeyer@gmail.com_

## Technologies Used

_This web page uses HTML, CSS, and javascript / jQuery._

### License

*All rights reserved*

Copyright (c) 2017 **_Nathaniel Meyer_**
