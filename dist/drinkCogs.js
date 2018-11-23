"use strict";

function drinkCogs() {
  var ingredients = field('Ingredients');
  var unitRatio = {
    oz: 30,
    Dash: 0.92,
    Drop: 0.092,
    Barspoon: 4.93,
    Piece: 1
  }; // Calculate cost of ingredients

  var ingredientTotal = get(drink.ingredients).reduce(function (sum, ingredient) {
    var unit = ingredient.attr('Unit');
    var amount = ingredient.attr('Amount');
    var cost = ingredient.field('Cost');
    return sum + amount * unitRatio[unit] * cost;
  }, 0); // Calculate cost of garnish(es)

  var garnishTotal = get(drink.garnishes).reduce(function (sum, garnish) {
    var garnishCost = garnish.field('Cost');
    return sum + garnishCost;
  }, 0); // Add ingredient and Garnish costs together

  return (ingredientTotal + garnishTotal).toFixed(2);
}
//# sourceMappingURL=../drinkCogs.js.map