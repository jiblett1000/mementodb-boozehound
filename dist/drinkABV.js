"use strict";

function drinkAbv(ingredientsVolume) {
  var ingredients = entry().field('Ingredients');
  var unitRatio = {
    oz: 1,
    Dash: 0.0311,
    Barspoon: 0.167,
    Drop: 0.0016907,
    Piece: 0
  };
  var ingredientsAbv = get(drink.ingredients).reduce(function (sum, ingredient) {
    if (ingredient.field('ABV')) {
      var unit = ingredient.attr('Unit');
      var abv = ingredient.field('ABV');
      var amount = ingredient.attr('Amount');
      return sum + amount * unitRatio[unit] * abv;
    }

    return sum + 0;
  }, 0);
  return (ingredientsAbv / ingredientsVolume).toFixed(2);
}

function drinkInitialAbv(initialVolume) {
  entry().set(drink.initialAbv, drinkAbv(drink.initialVolume));
}

function drinkFinalAbv(finalVolume) {
  entry().set(drink.finalAbv, drinkAbv(drink.finalVolume));
}
//# sourceMappingURL=../drinkABV.js.map