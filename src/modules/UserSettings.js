export default class UserSettings {
  constructor(bizName) {
    this.bizName = bizName || 'Boozehound';
    this.volUnits = libByName(`${this.bizName} Settings`).findByKey('Volume Units').field('Value');
    this.massUnits = libByName(`${this.bizName} Settings`).findByKey('Mass Units').field('Value');
    this.salesTaxRate = libByName(`${this.bizName} Settings`).findByKey('Sales Tax Rate').field('Value');
    this.decPlaceAcc = libByName(`${this.bizName} Settings`).findByKey('Decimal Place Accuracy').field('Value');
  }
}
