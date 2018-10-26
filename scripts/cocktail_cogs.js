var sum = 0;

var unit_ratio = {

  oz: 30,
  Dash: 0.92,
  Drop: 0.092,
  Barspoon: 4.93,
  Piece: 1

  }

// Calculate cost of ingredients

var ingredients = field("Ingredients");

for (i = 0; i < ingredients.length; i++) {

  var unit = ingredients[i].attr("Unit");
  var amount = ingredients[i].attr("Amount");
  var cost = ingredients[i].field("Cost");
     // cost = cost.replace(/\/[^/.]+$/, "");

      sum += (amount*unit_ratio[unit])*cost;

}

// Add the cost of the garnish(es)

var garnish = field("Garnish(es)");

for (i = 0; i < garnish.length; i++) {

  var garnish_cost = garnish[i].field("Cost");
 // var garnish_cost = garnish_cost.replace(/\/[^/.]+$/, "");
    sum += garnish_cost;

}

sum.toFixed(2)
