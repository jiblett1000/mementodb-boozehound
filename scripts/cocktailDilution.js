function cocktailDilution(initialAbvPercent, prepMethods) {
  const initialAbv = initialAbvPercent / 100;
  /*
  const dilute = {
    stir() { return -1.21 * Math.pow(initialAbv, 2) + 1.246 * initialAbv + 0.145; },
    shake() { return -1.567 * Math.pow(initialAbv, 2) + 1.742 * initialAbv + 0.203; },
    shortShake() { return this.shake() * 0.75; },
  };
*/
  const dilution = {
    Stir: () => -1.21 * Math.pow(initialAbv, 2) + 1.246 * initialAbv + 0.145,
    'Stir on Big Rock': () => this['Stir'](),
    Shake: () => -1.567 * Math.pow(initialAbv, 2) + 1.742 * initialAbv + 0.203,
    'Short Shake': () => this['Shake']() * 0.75,
    'Dirty Dump': () => this['Shake'](),
    Build: 0,
    'Dry Shake': 0,
    Slushy: 0,
    Muddle: 0,
    'Fine Strain': 0,
    Swizzle: 0,
  };
  entry().set('Dilution %', prepMethods.reduce((sum, meth) => sum + dilution[meth.field('Name')].toFixed(2), 0));
}
