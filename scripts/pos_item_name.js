var name = field("Manual Name");
var inventory = field("White Cap Inventory")[0];
var cocktail = field("White Cap Cocktail Specs")[0];

if (name) {
  name;
}

else if (inventory) {
  inventory.field("Thing")[0].field("Name");
}

else if (cocktail) {
  cocktail.field("Name");
}
