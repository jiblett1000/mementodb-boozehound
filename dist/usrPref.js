"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.volUnits = exports.bizName = void 0;

var bizName = function bizName() {
  return libByName('Boozehound Settings').findByKey('Business Name').field('Value');
};

exports.bizName = bizName;

var volUnits = function volUnits() {
  return libByName("".concat(bizName(), " Settings")).findByKey('Volume Units').field('Value');
};
/*  massUnits: () => libByName(`${this.bizName} Settings`).findByKey('Mass Units').field('Value'),
  salesTaxRate: () => libByName(`${this.bizName} Settings`).findByKey('Sales Tax Rate').field('Value'),
  decPlaceAcc: () => libByName(`${this.bizName} Settings`).findByKey('Decimal Place Accuracy').field('Value'),

*/


exports.volUnits = volUnits;
//# sourceMappingURL=../usrPref.js.map