function cocktailDilution() {
  const initialAbv = field('Initial ABV') / 100;
  const dilutionStir = -1.21 * (initialAbv ** 2) + 1.246 * initialAbv + 0.145;
  const dilutionShake = -1.567 * (initialAbv ** 2) + 1.742 * initialAbv + 0.203;
  const links = field('Prep Method(s)');

  const linkTotal = links.reduce((sum, link) => {
    const prepMethod = link.field('Name');

    switch (prepMethod) {
      case 'Shake':
      case 'Dry Shake, Shake':
        return sum + dilutionShake;
      case 'Short Shake':
        return sum + dilutionShake * 0.75;
      case 'Stir':
      case 'Stir on Big Rock':
        return sum + dilutionStir;
      default:
        return 0;
    }
  }, 0);
  return linkTotal;
}
