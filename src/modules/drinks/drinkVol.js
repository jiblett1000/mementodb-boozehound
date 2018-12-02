export default function drinkInitialVol(ingredients) {
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

  return vol.toFixed(usrPref.decPlaceAcc());
}

// Calculate initial volume;

function drinkInitialVol() {
  entry().set(drink.initialVol, drinkVol());
}

// Calculate final volume;

function drinkFinVol() {
  const initialVol = entry().get(drink.initialVol);
  const dilution = entry().get(drinkDilution) / 100;

  entry().set(drink.finalVol, ((initialVol * dilution) + initialVol).toFixed(usrPref.decPlaceAcc()));
}
