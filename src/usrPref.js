export default {
  bizName: () => libByName('Boozehound Settings').findByKey('Business Name').field('Value'),
  volUnits: () => libByName(`${this.bizName} Settings`).findByKey('Volume Units').field('Value'),
  massUnits: () => libByName(`${this.bizName} Settings`).findByKey('Mass Units').field('Value'),
  salesTaxRate: () => libByName(`${this.bizName} Settings`).findByKey('Sales Tax Rate').field('Value'),
  decPlaceAcc: () => libByName(`${this.bizName} Settings`).findByKey('Decimal Place Accuracy').field('Value'),
};
