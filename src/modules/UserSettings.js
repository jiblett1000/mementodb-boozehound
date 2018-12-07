class UserSettings {
  constructor(instance) {
    this.volUnits = libByName(`${instance} Settings`).findByKey('Volume Units').field('Value');
    this.massUnits = libByName(`${instance} Settings`).findByKey('Mass Units').field('Value');
    this.salesTaxRate = libByName(`${instance} Settings`).findByKey('Sales Tax Rate').field('Value');
    this.decPlaceAcc = libByName(`${instance} Settings`).findByKey('Decimal Place Accuracy').field('Value');
  }
}

export default UserSettings;
