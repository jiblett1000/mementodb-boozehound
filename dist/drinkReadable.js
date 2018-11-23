"use strict";

function drinkReadable() {
  var e = entry();
  var ingredients = e.field('Ingredients');
  var unitPlurals = {
    oz: 'oz',
    Barspoon: 'Barspoons',
    Drop: 'Drops',
    Piece: 'Pieces',
    Dash: 'Dashes'
  }; // Add each ingredient to the specs list

  var specs = ingredients.reduce(function (text, ingredient, index) {
    var amount = ingredient.attr('Amount');
    var name = ingredient.field('Name');
    var unitRaw = ingredient.attr('Unit'); // Check if singular or plural

    var unit = amount <= 1 ? unitRaw : unitPlurals[unitRaw]; // Check if last ingredient

    var line = text + (amount + ' ' + unit + '  ' + name);
    return index < ingredients.length - 1 ? line + '\n' : line;
  }, '');
  e.set('Ingredients_Readable', specs);
}
//# sourceMappingURL=../drinkReadable.js.map