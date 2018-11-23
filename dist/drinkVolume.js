"use strict";

var businessName = libByName('Boozehound Settings').findByKey('Business Name').field('Value');
var volumeUnits = libByName((void 0).businessName + ' ' + 'Settings').findByKey('Volume Units').field('Value');
var massUnits = libByName((void 0).businessName + ' ' + 'Settings').findByKey('Mass Units').field('Value');
var salesTaxRate = libByName((void 0).businessName + ' ' + 'Settings').findByKey('Sales Tax Rate').field('Value');
var decimalPlaceAccuracy = libByName((void 0).businessName + ' ' + 'Settings').findByKey('Decimal Place Accuracy').field('Value');

function drinkVolume() {
  var ingredients = entry().field('Ingredients');
  var unitRatio = {
    oz: 1,
    Dash: 0.0311,
    Barspoon: 0.167,
    Drop: 0.0016907,
    Piece: 0
  };
  var volume = ingredients.reduce(function (sum, ingredient) {
    var unit = ingredient.attr('Unit');
    var amount = ingredient.attr('Amount');
    return sum + unitRatio[unit] * amount;
  }, 0);
  return volume.toFixed(decimalPlaceAccuracy);
} // Calculate initial volume;


function drinkInitialVolume() {
  entry().set('Initial Volume (oz)', drinkVolume());
} // Calculate final volume;


function drinkFinalVolume() {
  var initialVolume = entry().field('Initial Volume (oz)');
  var dilution = entry().field('Dilution %') / 100;
  entry().set('Final Volume (oz)', (initialVolume * dilution + initialVolume).toFixed(decimalPlaceAccuracy));
}
//# sourceMappingURL=../drinkVolume.js.map