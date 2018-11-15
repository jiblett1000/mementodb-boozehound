export const businessName = libByName('Boozehound Settings').findByKey('Business Name').field('Value');
export const volumeUnits = libByName(businessName + ' ' + 'Settings').findByKey('Volume Units').field('Value');
export const massUnits = libByName(businessName + ' ' + 'Settings').findByKey('Mass Units').field('Value');
export const salesTaxRate = libByName(businessName + ' ' + 'Settings').findByKey('Sales Tax Rate').field('Value');
export const decimalPlaceAccuracy = libByName(businessName + ' ' + 'Settings').findByKey('Decimal Place Accuracy').field('Value');
