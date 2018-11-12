// Calculate initial volume.

function cocktailInitialVolume() {
  const e = entry();
  const ingredients = e.field('Ingredients');
  const unitRatio = {
    oz: 1,
    Dash: 0.0311,
    Barspoon: 0.167,
    Drop: 0.0016907,
    Piece: 0,
  };
  const volume = ingredients.reduce((sum, entry) => {
    const unit = entry.attr('Unit');
    const amount = entry.attr('Amount');

    return sum + (unitRatio[unit] * amount);
  }, 0);

  e.set('Initial Volume (oz)', volume);
}
