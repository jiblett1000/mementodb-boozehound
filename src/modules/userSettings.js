export default function UserSettings(instance) {
  this.instance = instance || 'Boozehound';
  this.volUnits = libByName(`${this.instance} Settings`).findByKey('Volume Units').field('Value');
  this.massUnits = libByName(`${this.instance} Settings`).findByKey('Mass Units').field('Value');
  this.salesTaxRate = libByName(`${this.instance} Settings`).findByKey('Sales Tax Rate').field('Value');
  this.decPlaceAcc = libByName(`${this.instance} Settings`).findByKey('Decimal Place Accuracy').field('Value');
}
