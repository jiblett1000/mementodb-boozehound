const convert = require('convert-units');

export default class Drink {
  constructor(name, ingredients, prepMethods, drinkware, served, garnishes) {
    this.name = name;
    this.ingredients = ingredients;
    this.prepMethods = prepMethods;
    this.drinkware = drinkware;
    this.served = served;
    this.garnishes = garnishes;
  }

  get drinkNeat() {
    const unitPlurals = {
      oz: 'oz',
      Barspoon: 'Barspoons',
      Drop: 'Drops',
      Piece: 'Pieces',
      Dash: 'Dashes',
    };

    // Add each ingredient to the specs list
    const specs = this.ingredients.reduce((text, ingredient, index) => {
      const name = ingredient.field('Name');
      const amt = ingredient.attr('Amount');
      const unitRaw = ingredient.attr('Unit');

      // Check if singular or plural
      const unit = (amt <= 1) ? unitRaw : unitPlurals[unitRaw];

      // Check if last ingredient
      const line = `${text} ${amt} ${unit} ${name}`;

      return (index < this.ingredients.length - 1) ? `${line} \n` : line;
    }, '');
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

  get ingredientsAbv() {
    const ingredientsAbv = this.ingredients.reduce((sum, ingredient) => {
      if (ingredient.field('ABV')) {
        const unit = ingredient.attr('Unit');
        const abv = ingredient.field('ABV');
        const amt = ingredient.attr('Amount');

        return sum + (convert(amt).from(unit).to('fl-oz') * abv);
      }
      return sum + 0;
    }, 0);

    return ingredientsAbv;
  }

  get initialAbv() {
    return (this.ingredientsAbv / this.initialVol).toFixed(usrPref.decPlaceAcc);
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

  get finAbv() {
    return (this.ingredientsAbv / this.finVol).toFixed(usrPref.decPlaceAcc);
  }

  get glassFilled() {
    if (this.drinkware) {
      const served = this.served[0].field('Name');
      const capacity = this.drinkware[0].field('Capacity (oz)');
      const iceVols = {
        'On the Rocks': 0.0811,
        'On Collins Cube': 4,
        'On Crushed': capacity - this.finVol,
        'On a Big Rock': 4.432899285,
        'Neat': 0,
        'Slushy': 0,
        'Up': 0,
      };
      const iceVol = iceVols[served];
      const iceAmt = Math.floor(capacity / iceVol);
      const percent = ((this.finVol + (iceAmt * iceVol)) / drinkwareCapacity).toFixed(decPlaceAcc);
  }
}
