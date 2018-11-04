function cocktailCogs() {
  const ingredients = field('Ingredients');
  const unitRatio = {
    oz: 30,
    Dash: 0.92,
    Drop: 0.092,
    Barspoon: 4.93,
    Piece: 1,
  };
  let sum = 0;

  // Calculate cost of ingredients

  for (let i of ingredients) {
    const unit = ingredients[i].attr('Unit');
    const amount = ingredients[i].attr('Amount');
    const cost = ingredients[i].field('Cost');

    sum += (amount * unitRatio[unit]) * cost;
  }

  // Add the cost of the garnish(es)

  const garnish = field('Garnish(es)');

  for (let i of garnish) {
    const garnishCost = garnish[i].field('Cost');

    sum += garnishCost;
  }
  return sum.toFixed(2)
}
