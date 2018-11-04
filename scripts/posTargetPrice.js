function posTargetPrice() {
  const inventory = field('White Cap Inventory')[0];

  if (inventory !== undefined) {
    const targetCogs = inventory.field('Category')[0].field('Target COGS%');

    Math.round((field('Cost') / (targetCogs / 100)) * 1.085);
  } else {
    const targetCogs = 15;

    Math.round((field('Cost') / (targetCogs / 100)) * 1.085);
  }
}
