import instance from './getInstance';

const userSettings = {
  volUnits: libByName(`${instance()} Settings`).findByKey('Volume Units').field('Value'),
  massUnits: libByName(`${instance()} Settings`).findByKey('Mass Units').field('Value'),
  salesTaxRate: parseFloat(libByName(`${instance()} Settings`).findByKey('Sales Tax Rate').field('Value')),
  decPlaceAcc: parseFloat(libByName(`${instance()} Settings`).findByKey('Decimal Place Accuracy').field('Value')),
};

export default userSettings;
