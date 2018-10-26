var ingredients = field("Ingredients");
var i;
var sum = 0;

for (i = 0; i < ingredients.length; i++) {

  var unit = ingredients[i].attr("Unit");
  var abv = ingredients[i].field("ABV");
  var amount = ingredients[i].attr("Amount");

  switch (unit) {
    case "oz":
      sum += amount*abv;
      break;
    case "Dash":
      sum += (amount*0.0311)*abv;
      break;
    case "Barspoon":
      sum += (amount*0.167)*abv;
      break;
    case "Piece":
      sum += 0;
      break;
    case "Drop":
      sum += (amount*0.0016907)*abv;
      break;
  }
}

sum/field("Initial Volume (oz)")
