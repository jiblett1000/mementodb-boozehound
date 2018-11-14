const businessName = libByName(this.businessName + ' ' + 'Settings').findByKey('Business Name').field('Value');
const volumeUnits = libByName(this.businessName + ' ' + 'Settings').findByKey('Volume Units').field('Value');
const massUnits = libByName(this.businessName + ' ' + 'Settings').findByKey('Mass Units').field('Value');
const salesTaxRate = libByName(this.businessName + ' ' + 'Settings').findByKey('Sales Tax Rate').field('Value');
const decimalPlaceAccuracy = libByName(this.businessName + ' ' + 'Settings').findByKey('Decimal Place Accuracy').field('Value');


function cocktailVolume() {
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

  return volume.toFixed(decimalPlaceAccuracy);
}

// Calculate initial volume;

function cocktailInitialVolume() {
  entry().set('Initial Volume (oz)', cocktailVolume());
}

// Calculate final volume;

function cocktailFinalVolume() {
  const initialVolume = entry().field('Initial Volume (oz)');
  const dilution = entry().field('Dilution %') / 100;

  entry().set('Final Volume (oz)', ((initialVolume * dilution) + initialVolume).toFixed(decimalPlaceAccuracy));
}
