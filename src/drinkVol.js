import drink from './drink';

function drinkVol() {
  const ingredients = e.get(drink.ingredients);
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
  e.set(drink.initialVol, drinkVol());
}

// Calculate final volume;

function drinkFinVol() {
  const initialVol = e.get(drink.initialVol);
  const dilution = e.get(drinkDilution) / 100;

  e.set(drink.finalVol, ((initialVol * dilution) + initialVol).toFixed(usrPref.decPlaceAcc()));
}
