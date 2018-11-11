// Calculate initial volume.

function cocktailInitialVolume() {
  const ingredients = entry().field('Ingredients');
  const unitRatio = {
    oz: 1,
    Dash: 0.0311,
    Barspoon: 0.167,
    Drop: 0.0016907,
    Piece: 0,
  };
  let sum = 0;

  ingredients.map((entry) => {
    const unit = entry.attr('Unit');
    const amount = entry.attr('Amount');

    sum += unitRatio[unit] * amount;
    return sum;
  });

  entry().set(field('Initial Volume (oz)'), sum);
}
