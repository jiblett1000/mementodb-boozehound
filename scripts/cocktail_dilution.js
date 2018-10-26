function cocktail_dilution(){
  var initial_abv = field("Initial ABV")/100;
  var links = field("Prep Method(s)");
  var sum = 0;

  for (var i = 0; i < links.length; i++) {
    var prep_method = links[i].field("Name");

    switch (prep_method) {
      case 'Shake':
      case 'Dry Shake, Shake':
        sum += -1.567 * Math.pow(initial_abv, 2) + 1.742 * initial_abv + 0.203;
        break;

      case 'Short Shake':
        sum += (-1.567 * Math.pow(initial_abv, 2) + 1.742 * initial_abv + 0.203)*.5;
        break;

      case 'Stir':
        sum += -1.21 * Math.pow(initial_abv, 2) + 1.246 * initial_abv + 0.145;
        break;

      case 'Stir on Big Rock':
        sum += -1.21 * Math.pow(initial_abv, 2) + 1.246 * initial_abv + 0.145;
        break;

      default: 0;
    }
  }

  return sum;
}
