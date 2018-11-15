// User Settings:

const businessName = libByName(this.businessName + ' ' + 'Settings').findByKey('Business Name').field('Value');
const volumeUnits = libByName(this.businessName + ' ' + 'Settings').findByKey('Volume Units').field('Value');
const massUnits = libByName(this.businessName + ' ' + 'Settings').findByKey('Mass Units').field('Value');
const salesTaxRate = libByName(this.businessName + ' ' + 'Settings').findByKey('Sales Tax Rate').field('Value');
const decimalPlaceAccuracy = libByName(this.businessName + ' ' + 'Settings').findByKey('Decimal Place Accuracy').field('Value');


const cocktail = {
  name: entry().field('Name'),
  ingredients: entry().field('Ingredients'),
  initialVolume: entry().field('Initial Volume (oz)'),
  initialAbv: entry().field('Initial ABV'),
  dilutionPercent: entry().field('Dilution %'),
  finalVolume: entry().field('Final Volume (oz)'),
  finalAbv: entry().field('Final ABV'),
}
