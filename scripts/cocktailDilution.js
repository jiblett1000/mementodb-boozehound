function cocktailDilution() {
  const initialAbv = field('Initial ABV') / 100;
  const prepMethods = field('Prep Method(s)');
  const formula = {
    'Stir': -1.21 * (initialAbv ** 2) + 1.246 * initialAbv + 0.145,
    'Shake': -1.567 * (initialAbv ** 2) + 1.742 * initialAbv + 0.203,
    'Short Shake': this.Shake * 0.75,
  }

  const prepTotal = prepMethods.reduce((sum, meth) => sum + formula[meth.field('Name')], 0);

  return prepTotal;
}
