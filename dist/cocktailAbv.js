"use strict";

function cocktailAbv(ingredientsVolume) {
  var ingredients = entry().field('Ingredients');
  var unitRatio = {
    oz: 1,
    Dash: 0.0311,
    Barspoon: 0.167,
    Drop: 0.0016907,
    Piece: 0
  };
  var ingredientsAbv = ingredients.reduce(function (sum, ingredient) {
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

function cocktailInitialAbv(initialVolume) {
  entry().set('Initial ABV', cocktailAbv(initialVolume));
}

function cocktailFinalAbv(finalVolume) {
  entry().set('Final ABV', cocktailAbv(finalVolume));
}
//# sourceMappingURL=../cocktailAbv.js.map