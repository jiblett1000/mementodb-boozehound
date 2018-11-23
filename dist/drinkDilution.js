"use strict";

function drinkDilution(initialAbvPercent, prepMethods) {
  var initialAbv = initialAbvPercent / 100;
  var dilution = {
    'Stir': function Stir() {
      return -1.21 * Math.pow(initialAbv, 2) + 1.246 * initialAbv + 0.145;
    },
    'Stir on Big Rock': function StirOnBigRock() {
      return -1.21 * Math.pow(initialAbv, 2) + 1.246 * initialAbv + 0.145;
    },
    'Shake': function Shake() {
      return -1.567 * Math.pow(initialAbv, 2) + 1.742 * initialAbv + 0.203;
    },
    'Short Shake': function ShortShake() {
      return (-1.567 * Math.pow(initialAbv, 2) + 1.742 * initialAbv + 0.203) * 0.75;
    },
    'Dirty Dump': function DirtyDump() {
      return -1.567 * Math.pow(initialAbv, 2) + 1.742 * initialAbv + 0.203;
    },
    'Build': function Build() {
      return 0;
    },
    'Dry Shake': function DryShake() {
      return 0;
    },
    'Slushy': function Slushy() {
      return 0;
    },
    'Muddle': function Muddle() {
      return 0;
    },
    'Fine Strain': function FineStrain() {
      return 0;
    },
    'Swizzle': function Swizzle() {
      return 0;
    }
  };
  var dilutionPercent = prepMethods.reduce(function (sum, meth) {
    return sum + dilution[meth.field('Name')]();
  }, 0); // Change dilution into '50%' as opposed to '0.5' and then round. Set field.

  entry().set('Dilution %', (dilutionPercent * 100).toFixed(2));
}
//# sourceMappingURL=../drinkDilution.js.map