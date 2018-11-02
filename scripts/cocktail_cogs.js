function cocktailCogs() {
  const unitRatio = {
    oz: 30,
    Dash: 0.92,
    Drop: 0.092,
    Barspoon: 4.93,
    Piece: 1
  }
  let sum = 0;

  // Calculate cost of ingredients

  var ingredients = field("Ingredients");

  for (i = 0; i < ingredients.length; i++) {
    var unit = ingredients[i].attr("Unit");
    var amount = ingredients[i].attr("Amount");
    var cost = ingredients[i].field("Cost");

    sum += parseFloat((amount*unitRatio[unit])*cost);
  }

  // Add the cost of the garnish(es)

  var garnish = field("Garnish(es)");

  for (i = 0; i < garnish.length; i++) {
    var garnishCost = garnish[i].field("Cost");

    sum += parseFloat(garnishCost);
  }
  return sum.toFixed(2)
}
