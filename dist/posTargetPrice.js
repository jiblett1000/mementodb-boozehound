"use strict";

function posTargetPrice() {
  var inventory = field('White Cap Inventory')[0];

  if (inventory !== undefined) {
    var _salesTax = 1.085;

    var _targetCogs = inventory.field('Category')[0].field('Target COGS%');

    return Math.round(field('Cost') / (_targetCogs / 100) * _salesTax);
  }

  var targetCogs = 15;
  return Math.round(field('Cost') / (targetCogs / 100) * salesTax);
}
//# sourceMappingURL=../posTargetPrice.js.map