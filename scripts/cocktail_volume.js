// Calculate initial volume.

function initialVolume() {
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
        sum += 0;
    }
  }
  return typeof sum
}

// Calculate finished volume.

function finishedVolume() {
  var initialVolume = field("Initial Volume (oz)");
  var dilution = field("Dilution %");

  return (initialVolume * dilution) + initialVolume;
}
