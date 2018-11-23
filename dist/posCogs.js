"use strict";

// Calculate COGS;
function posCogs() {
  var inventory = field('White Cap Inventory')[0];
  var drinks = field('White Cap Cocktail Specs')[0];
  var servingSize = field('Serving Size (ml)');

  if (inventory) {
    var um = inventory.field('Unit of Measurement');
    var costMl = inventory.field('Cost (Unit)') / inventory.field('Unit Amount');

    var _manualCost = field('Manual Cost');

    if (um === 'ml') {
      return (servingSize * costMl).toFixed(2);
    }
  } else if (drinks) {
    return drinks.field('COGS');
  } else if (manualCost) {
    return manualCost;
  } else {
    return 0;
  }
}
//# sourceMappingURL=../posCogs.js.map