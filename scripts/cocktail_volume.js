// Calculate initial volume.

function initial_volume(){

var ingredients = field("Ingredients");
var i;
var sum = 0;

for (i = 0; i < ingredients.length; i++) {

  var unit = ingredients[i].attr("Unit");
  var amount = ingredients[i].attr("Amount");

  if (unit == "oz") {
     sum += amount;
  }
  else if (unit == "Dash") {
    sum += amount*0.0311;
  }
  else if (unit == "Barspoon") {
    sum += amount*0.167;
  }
  else if (unit == "Piece") {
    sum += 0;
  }
  else if (unit == "Drop") {
    sum += amount*0.0016907;
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
