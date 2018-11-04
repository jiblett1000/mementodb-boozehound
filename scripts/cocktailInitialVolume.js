// Calculate initial volume.

function cocktailInitialVolume() {
  const ingredients = field('Ingredients');
  const unitRatio = {
    oz: 1,
    Dash: 0.0311,
    Barspoon: 0.167,
    Drop: 0.0016907,
    Piece: 0,
  };
  let sum = 0;

  for (let i of ingredient) {
    const unit = ingredients[i].attr('Unit');
    const amount = ingredients[i].attr('Amount');

    sum += unitRatio[unit] * amount;
  }
  return sum;
}
