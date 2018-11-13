function cocktailDilution(initialAbvPercent, prepMethods) {
  const initialAbv = initialAbvPercent / 100;

  function diluteStir() { return -1.21 * (initialAbv ** 2) + 1.246 * initialAbv + 0.145; }
  function diluteShake() { return -1.567 * (initialAbv ** 2) + 1.742 * initialAbv + 0.203; }
  function diluteShortShake() { return this.shake() * 0.75; }

  const dilution = {
    Stir: diluteStir(),
    'Stir on Big Rock': diluteStir(),
    Shake: diluteShake(),
    'Short Shake': diluteShortShake(),
    'Dirty Dump': diluteShake(),
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
