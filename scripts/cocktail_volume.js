// Calculate initial volume.

function initial_volume() {

var ingredients = field("Ingredients");
var sum = 0;

for (i = 0; i < ingredients.length; i++) {

  var unit = ingredients[i].attr("Unit");
  var amount = ingredients[i].attr("Amount");

  switch (unit) {
    case "oz":
      sum += amount;
      break;
    case "Dash":
      sum += amount*0.0311;
      break;
    case "Barspoon":
      sum += amount*0.167;
      break;
    case "Piece":
      sum += 0;
      break;
    case "Drop":
      sum += amount*0.0016907;
    default:

  }

}

return sum

}

// Calculate finished volume.

function finished_volume(){

  var initial_volume = field("Initial Volume (oz)");
  var dilution = field("Dilution %");

  return +(initial_volume * dilution) + +initial_volume;

}
