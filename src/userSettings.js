export const businessName = libByName(this.businessName + ' ' + 'Settings').findByKey('Business Name').field('Value');
export const volumeUnits = libByName(this.businessName + ' ' + 'Settings').findByKey('Volume Units').field('Value');
export const massUnits = libByName(this.businessName + ' ' + 'Settings').findByKey('Mass Units').field('Value');
export const salesTaxRate = libByName(this.businessName + ' ' + 'Settings').findByKey('Sales Tax Rate').field('Value');
export const decimalPlaceAccuracy = libByName(this.businessName + ' ' + 'Settings').findByKey('Decimal Place Accuracy').field('Value');
