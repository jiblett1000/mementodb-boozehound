// Calculate COGS;

function posCogs() {
  const inventory = field('White Cap Inventory')[0];
  const cocktails = field('White Cap Cocktail Specs')[0];
  const servingSize = field('Serving Size (ml)');

  if (inventory) {
    const um = inventory.field('Unit of Measurement');
    const costMl = inventory.field('Cost (Unit)') / inventory.field('Unit Amount');
    const manualCost = field('Manual Cost');

    if (um === 'ml') {
      return (servingSize * costMl).toFixed(2);
    }
  } else if (cocktails) {
    return cocktails.field('COGS');
  } else if (manualCost) {
    return manualCost;
  } else {
    return 0;
  }
}
