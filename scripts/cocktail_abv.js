function cocktailAbv(ingredientsVolume) {
  var ingredients = field("Ingredients");
  var sum = 0;

  for (i = 0; i < ingredients.length; i++) {

    if (ingredients[i].field("ABV")) {
      const {
        attr("Unit"): unit,
        attr("Amount"): amount,
        field("ABV"): abv
      } = ingredients[i]
/*
      var unit = ingredients[i].attr("Unit");
      var amount = ingredients[i].attr("Amount");
      var abv = ingredients[i].field("ABV");
*/
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
    } else {
      sum += 0;
    }

  }

  return sum/ingredientsVolume;

}
