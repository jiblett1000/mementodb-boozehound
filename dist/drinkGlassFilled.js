"use strict";

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
//# sourceMappingURL=../drinkGlassFilled.js.map