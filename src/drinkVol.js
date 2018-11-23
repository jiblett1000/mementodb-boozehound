const e = entry();

function drinkVolume() {
  const ingredients = e.field('Ingredients');
  const unitRatio = {
    oz: 1,
    Dash: 0.0311,
    Barspoon: 0.167,
    Drop: 0.0016907,
    Piece: 0,
  };
  const vol = ingredients.reduce((sum, ingredient) => {
    const unit = ingredient.attr('Unit');
    const amt = ingredient.attr('Amount');

    return sum + (unitRatio[unit] * amt);
  }, 0);

  return vol.toFixed(decPlaceAcc);
}

// Calculate initial volume;

function drinkInitialVol() {
  entry().set('Initial Volume (oz)', drinkVolume());
}

// Calculate final volume;

function drinkFinVol() {
  const initialVol = e.field('Initial Volume (oz)');
  const dilution = e.field('Dilution %') / 100;

  e.set('Final Volume (oz)', ((initialVol * dilution) + initialVol).toFixed(decPlaceAcc));
}
