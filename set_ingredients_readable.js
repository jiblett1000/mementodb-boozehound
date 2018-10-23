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

  var amount = ingredients[i].attr("Amount");
  var name = ingredients[i].field("Name");

  if (amount > 1) {
    var unit = unit_plurals[ingredients[i].attr("Unit")];
  }
  else {
    var unit = ingredients[i].attr("Unit");
  }


  if (i != ingredients.length - 1) {
    text += amount + " " + unit + "  " + name + "\n";
  }
  else {
    text += amount + " " + unit + "  " + name;
  }
}

entry().set("Ingredients_Readable", text);
