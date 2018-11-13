const userSettings = {
  businessName: this.businessName,
  volumeUnits: libByName(this.businessName + " " + 'Settings').entry().field(''),
}

const cocktail = {
  name: entry().field('Name'),
  ingredients: entry().field('Ingredients'),
  ingredient: {
    amount: ,
  },
  initialVolume: entry().field('Initial Volume (oz)'),
  initialAbv: entry().field('Initial ABV'),
  dilutionPercent: entry().field('Dilution %'),
  finalVolume: entry().field('Final Volume (oz)'),
  finalAbv: entry().field('Final ABV'),
}
