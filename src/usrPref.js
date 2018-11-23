
const bizName = libByName('Boozehound Settings').findByKey('Business Name').field('Value');
const volUnits = libByName(`${bizName} Settings`).findByKey('Volume Units').field('Value');
/*  massUnits: () => libByName(`${this.bizName} Settings`).findByKey('Mass Units').field('Value'),
  salesTaxRate: () => libByName(`${this.bizName} Settings`).findByKey('Sales Tax Rate').field('Value'),
  decPlaceAcc: () => libByName(`${this.bizName} Settings`).findByKey('Decimal Place Accuracy').field('Value'),

*/
export { bizName, volUnits };
