var initial_abv = field("Initial ABV")/100;
var links = field("Prep Method(s)");
var total = 0;

for (var i = 0; i < links.length; i++) {
  var prep_method = links[i].field("Name");

  switch (prep_method) {
    case 'Shake':
    case 'Dry Shake, Shake':
      total += -1.567 * Math.pow(initial_abv, 2) + 1.742 * initial_abv + 0.203;
      break;

    case 'Short Shake':
      total += (-1.567 * Math.pow(initial_abv, 2) + 1.742 * initial_abv + 0.203)*.5;
      break;

    case 'Stir':
      total += -1.21 * Math.pow(initial_abv, 2) + 1.246 * initial_abv + 0.145;
      break;

    case 'Stir on Big Rock':
      total += -1.21 * Math.pow(initial_abv, 2) + 1.246 * initial_abv + 0.145;
      break;

    default: 0;
  }
}

total;
