import getInstance from './getInstance';

const userSettings = {
  volUnits: libByName(`${getInstance()} Settings`).findByKey('Volume Units').field('Value'),
  massUnits: libByName(`${getInstance()} Settings`).findByKey('Mass Units').field('Value'),
  salesTaxRate: libByName(`${getInstance()} Settings`).findByKey('Sales Tax Rate').field('Value'),
  decPlaceAcc: libByName(`${getInstance()} Settings`).findByKey('Decimal Place Accuracy').field('Value'),
};

export default userSettings;
