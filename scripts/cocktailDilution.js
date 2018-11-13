function cocktailDilution(initialAbvPercent, prepMethods) {
  const initialAbv = initialAbvPercent / 100;
  const dilute = {
    stir: function() { return -1.21 * (initialAbv ** 2) + 1.246 * initialAbv + 0.145; },
    shake: function() { return -1.567 * (initialAbv ** 2) + 1.742 * initialAbv + 0.203; },
    shortShake: function() { return this.shake() * 0.75; },
  };

  const dilution = {
    Stir: dilute.stir(),
    'Stir on Big Rock': dilute.stir(),
    Shake: dilute.shake(),
    'Short Shake': dilute.shortShake(),
    'Dirty Dump': dilute.shake(),
    Build: 0,
    'Dry Shake': 0,
    Slushy: 0,
    Muddle: 0,
    'Fine Strain': 0,
    Swizzle: 0,
  };
  const prepTotal = prepMethods.reduce((sum, meth) => sum + dilution[meth.field('Name')], 0);

  return prepTotal;
}
