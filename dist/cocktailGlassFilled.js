"use strict";

var businessName = libByName((void 0).businessName + ' ' + 'Settings').findByKey('Business Name').field('Value');
var volumeUnits = libByName((void 0).businessName + ' ' + 'Settings').findByKey('Volume Units').field('Value');
var massUnits = libByName((void 0).businessName + ' ' + 'Settings').findByKey('Mass Units').field('Value');
var salesTaxRate = libByName((void 0).businessName + ' ' + 'Settings').findByKey('Sales Tax Rate').field('Value');
var decimalPlaceAccuracy = libByName((void 0).businessName + ' ' + 'Settings').findByKey('Decimal Place Accuracy').field('Value');

function cocktailGlassFilled() {
  var drinkware = entry().field('Drinkware');

  if (drinkware) {
    var served = entry().field('Served')[0].field('Name');
    var finalVolume = entry().field('Final Volume (oz)');
    var drinkwareCapacity = drinkware[0].field('Capacity (oz)');
    var iceVolumes = {
      'On the Rocks': 0.0811,
      'On Collins Cube': 4,
      'On Crushed': drinkwareCapacity - finalVolume,
      'On a Big Rock': 4.432899285,
      'Neat': 0,
      'Slushy': 0,
      'Up': 0
    };
    var iceVolume = iceVolumes[served];
    var iceAmount = Math.floor(drinkwareCapacity / iceVolume);
    var percent = ((finalVolume + iceAmount * iceVolume) / drinkwareCapacity).toFixed(decimalPlaceAccuracy);
    entry().set('% of Glass Filled', percent * 100);
  }

  entry().set('% of Glass Filled', 'Glassware not selected.');
}
//# sourceMappingURL=../cocktailGlassFilled.js.map