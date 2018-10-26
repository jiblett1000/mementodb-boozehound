// Calculate COGS;

var inventory = field("White Cap Inventory")[0];
var cocktails = field("White Cap Cocktail Specs")[0];
var serving_size = field("Serving Size (ml)");

if (inventory) {
  var um = inventory.field("Unit of Measurement");
  var cost_ml = inventory.field("Cost (Unit)")/inventory.field("Unit Amount");

  if (um === "ml") {

  (serving_size*cost_ml).toFixed(2);

  }

  else {

  }

}

else if (cocktails) {
  cocktails.field("COGS");
}

else if (field("Manual Cost")) {
  field("Manual Cost");
}

else {
  0.00.toFixed(2);
}


// Calculate COGS %;

(field("Cost")/(field("Price")*0.915)).toFixed(2);
