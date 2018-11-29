function posTargetPrice() {
  const inventory = field('White Cap Inventory')[0];

  if (inventory !== undefined) {
    const salesTax = 1.085;
    const targetCogs = inventory.field('Category')[0].field('Target COGS%');

    return Math.round((field('Cost') / (targetCogs / 100)) * salesTax);
  }
  const targetCogs = 15;

  return Math.round((field('Cost') / (targetCogs / 100)) * salesTax);
}
