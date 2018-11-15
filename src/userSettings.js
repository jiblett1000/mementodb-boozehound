const userSettings = {
  businessName: libByName('Boozehound Settings').findByKey('Business Name').field('Value'),
  volumeUnits: libByName('Boozehound Settings').findByKey('Volume Units').field('Value'),
  massUnits: libByName('Boozehound Settings').findByKey('Mass Units').field('Value'),
  salesTaxRate: libByName('Boozehound Settings').findByKey('Sales Tax Rate').field('Value'),
  decimalPlaceAccuracy: libByName('Boozehound Settings').findByKey('Decimal Place Accuracy').field('Value'),
};

export default userSettings;
