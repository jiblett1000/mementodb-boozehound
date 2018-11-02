function cocktailReadable() {
  const ingredients = entry().field("Ingredients");
  const unitPlurals = {
    oz: 'oz',
    Barspoon: 'Barspoons',
    Drop: 'Drops',
    Piece: 'Pieces',
    Dash: 'Dashes'
  };
  var text = "";

  for (i = 0; i < ingredients.length; i++) {
    var amount = ingredients[i].attr("Amount");
    var name = ingredients[i].field("Name");

    // Check if singular or plural

    if (amount > 1) {
      var unit = unitPlurals[ingredients[i].attr("Unit")];
    }
    else {
      var unit = ingredients[i].attr("Unit");
    }

    // Check if last ingredient

    if (i != ingredients.length - 1) {
      text += amount + " " + unit + "  " + name + "\n";
    }
    else {
      text += amount + " " + unit + "  " + name;
    }
  }
  entry().set("Ingredients_Readable", text);
}
