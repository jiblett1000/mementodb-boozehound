var ingredients = entry().field("Ingredients");
var text = "";

var unit_plurals = {
  oz: 'oz',
  Barspoon: 'Barspoons',
  Drop: 'Drops',
  Piece: 'Pieces',
  Dash: 'Dashes'
};

for (i = 0; i < ingredients.length; i++) {

  amount = ingredients[i].attr("Amount");
  name = ingredients[i].field("Name");
  if (amount > 1) {
    unit = unit_plurals[ingredients[i].attr("Unit")];
  }
  else {
    unit = ingredients[i].attr("Unit");
  }


  if (i != ingredients.length - 1) {
    text += amount + " " + unit + "  " + name + "\n";
  }
  else {
    text += amount + " " + unit + "  " + name;
  }
}

entry().set("Ingredients_Readable", text);
