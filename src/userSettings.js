const businessName = libByName('Boozehound Settings').findByKey('Business Name').field('Value');
const volumeUnits = libByName(businessName + ' ' + 'Settings').findByKey('Volume Units').field('Value');
const massUnits = libByName(businessName + ' ' + 'Settings').findByKey('Mass Units').field('Value');
const salesTaxRate = libByName(businessName + ' ' + 'Settings').findByKey('Sales Tax Rate').field('Value');
const decimalPlaceAccuracy = libByName(businessName + ' ' + 'Settings').findByKey('Decimal Place Accuracy').field('Value');
