const drink = {
  name: entry().field('Name'),
  ingredients: entry().field('Ingredients'),
  initialVolume: entry().field('Initial Volume (oz)'),
  initialAbv: entry().field('Initial ABV'),
  dilutionPercent: entry().field('Dilution %'),
  finalVolume: entry().field('Final Volume (oz)'),
  finalAbv: entry().field('Final ABV'),
}

const drink = {
  ingredientsReadable: 'Ingredients Readable',
  cogs: 'COGS',
  initialVolume: 'Initial Volume (oz)',
  initialAbv: 'Initial ABV',
  dilutionPercent: 'Dilution %',
  finalVolume: 'Final Volume (oz)',
  finalAbv: 'Final ABV',
  glassFilled: '% of Glass Filled',
};

export default drink;
