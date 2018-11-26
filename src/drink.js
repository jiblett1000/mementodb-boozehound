export default class Drink {
  constructor() {
    this.name = 'Name';
    this.ingredients = 'Ingredients';
    this.ingredientsNeat = 'Ingredients Neat';
    this.prepMethods = 'Prep Method(s)';
    this.drinkware = 'Drinkware';
    this.served = 'Served';
    this.garnishes = 'Garnish(es)';
    this.cogs = 'COGS';
    this.initialVol = 'Initial Volume (oz)';
    this.initialAbv = 'Initial ABV';
    this.dilution = 'Dilution %';
    this.finVol = 'Final Volume (oz)';
    this.finAbv = 'Final ABV';
    this.glassFilled = '% of Glass Filled';
  }

  get(field) {
    return entry().field(this.field);
  }

  set(field, value) {
    set(this.field, value);
  }
}
