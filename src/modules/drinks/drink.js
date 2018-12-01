const convert = require('convert-units');

export default class Drink {
  constructor(name, ingredients, prepMethods, drinkware, served, garnishes) {
    this.name = name;
    this.ingredients = ingredients;
    this.ingredientsNeat = 'Ingredients Neat';
    this.prepMethods = prepMethods;
    this.drinkware = drinkware;
    this.served = served;
    this.garnishes = garnishes;
    this.cogs = 'COGS';
    this.initialVol = 'Initial Volume (oz)';
    this.initialAbv = 'Initial ABV';
    this.dilution = 'Dilution %';
    this.finVol = 'Final Volume (oz)';
    this.finAbv = 'Final ABV';
    this.glassFilled = '% of Glass Filled';
  }

  get initialVol() {
    const unitRatio = {
      oz: 1,
      Dash: 0.0311,
      Barspoon: 0.167,
      Drop: 0.0016907,
      Piece: 0,
    };
    const vol = this.ingredients.reduce((sum, ingredient) => {
      const unit = ingredient.attr('Unit');
      const amt = ingredient.attr('Amount');

      return sum + (unitRatio[unit] * amt);
    }, 0);

    return vol.toFixed(usrPref.decPlaceAcc());
  }
}
