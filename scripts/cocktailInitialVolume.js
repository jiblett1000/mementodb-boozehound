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
  const volume = ingredients.reduce((sum, ingredient) => {
    const unit = ingredient.attr('Unit');
    const amount = ingredient.attr('Amount');

    return sum + (unitRatio[unit] * amount);
  }, 0);

  entry().set('Initial Volume (oz)', volume);
}
