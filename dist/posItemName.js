"use strict";

function posItemName() {
  var manualName = field('Manual Name');
  var inventory = field('White Cap Inventory')[0];
  var drink = field('White Cap Cocktail Specs')[0];

  if (manualName) {
    return manualName;
  } else if (inventory) {
    return inventory.field('Thing')[0].field('Name');
  }

  return drink.field('Name');
}
//# sourceMappingURL=../posItemName.js.map