const drink = {
  name: 'Name',
  ingredients: 'Ingredients',
  ingredientsNeat: 'Ingredients Neat',
  prepMethods: 'Prep Method(s)',
  drinkware: 'Drinkware',
  served: 'Served',
  garnishes: 'Garnish(es)',
  cogs: 'COGS',
  initialVol: 'Initial Volume (oz)',
  initialAbv: 'Initial ABV',
  dilution: 'Dilution %',
  finVol: 'Final Volume (oz)',
  finAbv: 'Final ABV',
  glassFilled: '% of Glass Filled',
  get: field => entry().field(this.field),
  set: (field, value) => set(this.field, value),
};

export default drink;
