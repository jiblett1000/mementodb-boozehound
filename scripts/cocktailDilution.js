function cocktailDilution() {
  const initialAbv = field('Initial ABV') ? field('Initial ABV') / 100 : 0;
  const prepMethods = field('Prep Method(s)');
  const formula {
    'Stir': -1.21 * (initialAbv ** 2) + 1.246 * initialAbv + 0.145,
    'Shake': -1.567 * (initialAbv ** 2) + 1.742 * initialAbv + 0.203,
    'Short Shake': (Shake) => Shake * 0.75,
  }

  const prepTotal = prepMethods.reduce((sum, meth) => {

    return sum + formula[meth.field('Name')];
  }, 0);
  return prepTotal;
}
