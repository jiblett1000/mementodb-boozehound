function cocktailDilution() {
  const initialAbv = field("Initial ABV")/100;
  const dilutionStir = -1.21 * Math.pow(initialAbv, 2) + 1.246 * initialAbv + 0.145;
  const dilutionShake = -1.567 * Math.pow(initialAbv, 2) + 1.742 * initialAbv + 0.203;
  const links = field("Prep Method(s)");
  let sum = 0;

  for (var i = 0; i < links.length; i++) {
    var prepMethod = links[i].field("Name");
    
    switch (prepMethod) {
      case 'Shake':
      case 'Dry Shake, Shake':
        sum += dilutionShake;
        break;
      case 'Short Shake':
        sum += dilutionShake * .75;
        break;
      case 'Stir':
      case 'Stir on Big Rock':
        sum += dilutionStir;
        break;
      default:
        0;
    }
  }
  return sum;
}
