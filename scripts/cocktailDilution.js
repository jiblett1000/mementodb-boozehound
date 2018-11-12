function cocktailDilution(initialAbvPercent, prepMethods) {
  const initialAbv = initialAbvPercent / 100;
  const formulas = {
    stir() { return -1.21 * (initialAbv ** 2) + 1.246 * initialAbv + 0.145; },
    shake() { return -1.567 * (initialAbv ** 2) + 1.742 * initialAbv + 0.203; },
    shortShake() { return this.shake() * 0.75; },
  };

  const dilution = {
    Stir: formulas.stir(),
    'Stir on Big Rock': formulas.stir(),
    Shake: formulas.shake(),
    'Short Shake': formulas.shortShake(),
    'Dirty Dump': formulas.shake(),
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
