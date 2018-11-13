function cocktailDilution(initialAbvPercent, prepMethods) {
  const initialAbv = initialAbvPercent / 100;
  const dilute = {
    stir(abv) { return -1.21 * (abv ** 2) + 1.246 * abv + 0.145; },
    shake(abv) { return -1.567 * (abv ** 2) + 1.742 * abv + 0.203; },
    shortShake() { return this.shake() * 0.75; },
  };

  const dilution = {
    Stir: dilute.stir(initialAbv),
    'Stir on Big Rock': dilute.stir(initialAbv),
    Shake: dilute.shake(initialAbv),
    'Short Shake': dilute.shortShake(initialAbv),
    'Dirty Dump': dilute.shake(initialAbv),
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
