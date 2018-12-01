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
//    this.cogs = 'COGS';
    this.finAbv = 'Final ABV';
    this.glassFilled = '% of Glass Filled';
  }

  get cogs() {
    // Calculate cost of ingredients;
    const ingredientTotal = this.ingredients.reduce((sum, ingredient) => {
      const unit = ingredient.attr('Unit');
      const amt = ingredient.attr('Amount');
      const cost = ingredient.field('Cost');

      return sum + (convert(amt).from(unit).to('fl-oz') * cost);
    }, 0);

    // Calculate cost of garnish(es);
    const garnishTotal = this.garnishes.reduce((sum, garnish) => {
      return sum + garnish.field('Cost');
    }, 0);

    // Add ingredient and Garnish costs together;
    return (ingredientTotal + garnishTotal).toFixed(usrPref.decPlaceAcc);
  }

  get initialVol() {
    const vol = this.ingredients.reduce((sum, ingredient) => {
      const unit = ingredient.attr('Unit');
      const amt = ingredient.attr('Amount');

      return sum + convert(amt).from(unit).to('fl-oz');
    }, 0);

    return vol.toFixed(usrPref.decPlaceAcc());
  }

  get initialAbv() {
    const ingredientsAbv = this.ingredients.reduce((sum, ingredient) => {
      if (ingredient.field('ABV')) {
        const unit = ingredient.attr('Unit');
        const abv = ingredient.field('ABV');
        const amt = ingredient.attr('Amount');

        return sum + (convert(amt).from(unit).to('fl-oz') * abv);
      }
      return sum + 0;
    }, 0);

    return (ingredientsAbv / this.initialVol).toFixed(usrPref.decPlaceAcc);
  }

  get dilution() {
    // Convert ABV from percent to decimal;
    const initialAbv = this.initialAbv / 100;

    const dilution = {
      'Stir': () => -1.21 * (initialAbv ** 2) + 1.246 * initialAbv + 0.145,
      'Stir on Big Rock': () => -1.21 * (initialAbv ** 2) + 1.246 * initialAbv + 0.145,
      'Shake': () => -1.567 * (initialAbv ** 2) + 1.742 * initialAbv + 0.203,
      'Short Shake': () => (-1.567 * (initialAbv ** 2) + 1.742 * initialAbv + 0.203) * 0.75,
      'Dirty Dump': () => -1.567 * (initialAbv ** 2) + 1.742 * initialAbv + 0.203,
      'Build': () => 0,
      'Dry Shake': () => 0,
      'Slushy': () => 0,
      'Muddle': () => 0,
      'Fine Strain': () => 0,
      'Swizzle': () => 0,
    };

    // Convert dilution to percent and return;
    return this.prepMethods.reduce((sum, meth) => sum + dilution[meth.field('Name')](), 0);
  }

  get finVol() {
    return ((this.initialVol * this.dilution) + this.initialVol).toFixed(usrPref.decPlaceAcc());
  }
}
