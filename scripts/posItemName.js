function posItemName() {
  const manualName = field('Manual Name');
  const inventory = field('White Cap Inventory')[0];
  const cocktail = field('White Cap Cocktail Specs')[0];

  if (manualName) {
    manualName;
  } else if (inventory) {
    inventory.field('Thing')[0].field('Name');
  } else if (cocktail) {
    cocktail.field('Name');
  }
}
